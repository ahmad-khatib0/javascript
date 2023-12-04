import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import store from "../store/store";
import { updateChatHistoryIfActive } from "../shared/utilities/chat";
import * as roomHandler from "../realtimeCommunication/roomHandler";
import * as webRTCHandler from "./webRTCHandler";

let socket = null;
export const connectionWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io.connect("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {});

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateChatHistoryIfActive(data);
  });

  socket.on("room-create", (data) => {
    roomHandler.newRoomCreated(data);
  });

  socket.on("active-rooms", (activeRooms) => roomHandler.updateActiveRooms(activeRooms));

  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    // second arg if the user is the initiator of the connection
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    // here we've prepared for new connection, so we'll emit to server that it should pass this event
    // to user which he will create this new peer connection, but as initiator as true
    socket.emit("conn-init", { connUserSocketId: connUserSocketId });
  });

  socket.on("conn-init", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
    // so now when it goes to prepareNewPeerConnection, all the event listeners (signal, stream ,,,)
    // will be done before, and the initiator will be true in the peer object, so it'll establish the connection
  });

  socket.on("conn-signal", (data) => webRTCHandler.handleSignalingData(data));

  socket.on("room-participant-left", (data) => {
    console.log("user left room");
    webRTCHandler.handleParticipantLeavingRoom(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("room-create");
};

export const joinRoom = (data) => {
  socket.emit("room-join", data);
};

export const leaveRoom = (data) => {
  socket.emit("room-leave", data);
};

export const signalPeerData = (data) => socket.emit("conn-signal", data);

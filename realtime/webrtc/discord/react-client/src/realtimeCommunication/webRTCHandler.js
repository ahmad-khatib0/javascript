import store from "../store/store";
import { setLocalStream, setRemoteStreams } from "../store/actions/roomActions";
import Peer from "simple-peer";
import * as socketConnection from "./socketConnection";

const getConfiguration = () => {
  const turnIceServer = null;
  if (turnIceServer) {
    // TODO use turn server Credentials
  } else {
    console.warn("using only stun server");
    return {
      iceServers: [
        {
          //find information about our internet connection
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
};

const onlyAudioConstraints = { audio: true, video: false };
const defaultConstraints = { audio: true, video: true };

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constrains = onlyAudio ? onlyAudioConstraints : defaultConstraints;
  navigator.mediaDevices
    .getUserMedia(constrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((error) => {
      console.log(error);
      console.log("can't get an access to local stream ");
    });
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  if (isInitiator) {
    console.log("prepare new peer connection as initiator ");
  } else {
    console.log("prepare new peer connection as not  initiator ");
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator, //if user is initiator this object will try to connect with other user automatically
    // if not it will wait for the connection instead
    config: getConfiguration(),
    //get information about our internet connection (ICE candidate from stun server )
    stream: localStream,
    //if connection established between other users, this peer object will attach our
    // localStream and broadcast it to other users
  });

  peers[connUserSocketId].on("signal", (data) => {
    // to establish a direct connection we need to exchange some necessary data (ICE candidate and SDP information)
    // so here if we receive information from stun server about our internet connection details, we need to
    // share them with the other users
    const signalData = { signal: data, connUserSocketId: connUserSocketId };
    // TODO  add signaling data to other users which we wanna connect with
    socketConnection.signalPeerData(signalData);
  });

  peers[connUserSocketId].on("stream", (remoteStream) => {
    // if connection established with other users
    // TODO add new remoteStream to our server store
    console.log("remote stream came from other user");
    console.log("direct connection has been established");
    remoteStream.connUserSocketId = connUserSocketId;
    //add new key to this object to know to which user this stream belongs
    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;
  if (peers[connUserSocketId]) {
    // this signal function is to add the signaling data
    peers[connUserSocketId].signal(signal);
    // so here at this point it means that we've manage to exchange sdp and ice candidate
  }
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStream = [...remoteStreams, remoteStream];
  store.dispatch(setRemoteStreams(newRemoteStream));
};

export const closeAllConnections = () => {
  Object.entries(peers).forEach((mappedObject) => {
    const connUserSocketId = mappedObject[0];
    if (peers[connUserSocketId]) {
      // destroy will kill the all connections with whom it was established
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
  });
};

export const handleParticipantLeavingRoom = (data) => {
  const { connUserSocketId } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = remoteStreams.filter(
    (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
  );
  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};

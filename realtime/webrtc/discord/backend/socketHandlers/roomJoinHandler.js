const serverStore = require("../serverStore");
const roomsUpdates = require("./updates/rooms");

const roomJoinHandler = (socket, data) => {
  const { roomId } = data;
  const participantDetails = { userId: socket.user.userId, socketId: socket.id };

  const roomDetails = serverStore.getActiveRoom(roomId);
  serverStore.joinActiveRoom(roomId, participantDetails);

  //inform other users in room to prepare for incoming connections
  roomDetails.participants.forEach((participant) => {
    if (participant.socketId !== participantDetails.socketId) {
      // exclude roomJoiner from receiving this event
      socket
        .to(participant.socketId)
        .emit("conn-prepare", { connUserSocketId: participantDetails.socketId });
    }
  });
  roomsUpdates.updateRooms();
};

module.exports = roomJoinHandler;

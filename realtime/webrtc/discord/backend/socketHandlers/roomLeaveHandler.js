const serverStore = require("../serverStore");
const roomsUpdates = require("./updates/rooms");

const roomLeaveHandler = (socket, data) => {
  const { roomId } = data;
  const activeRoom = serverStore.getActiveRoom(roomId);

  if (activeRoom) {
    serverStore.leaveActiveRoom(roomId, socket.id);
    const updatedActiveRoom = serverStore.getActiveRoom(roomId);

    if (updatedActiveRoom) {
      // will emit only if any user will be still in this room after this user leaving
      updatedActiveRoom.participants.forEach((participant) => {
        socket.to(participant.socketId).emit("room-participant-left", {
          connUserSocketId: socket.id,
        });
      });
    }

    roomsUpdates.updateRooms();
  }
};

module.exports = roomLeaveHandler;
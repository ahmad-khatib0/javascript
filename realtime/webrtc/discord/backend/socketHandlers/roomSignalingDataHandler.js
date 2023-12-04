const roomSignalingDataHandler = (socket, data) => {
  const { connUserSocketId, signal } = data;
  // in the 2th arg the connUserSocketId need to know from whom this event is coming
  const signalData = { signal, connUserSocketId: socket.id };
  socket.to(connUserSocketId).emit("conn-signal", signalData);
};

module.exports = roomSignalingDataHandler;

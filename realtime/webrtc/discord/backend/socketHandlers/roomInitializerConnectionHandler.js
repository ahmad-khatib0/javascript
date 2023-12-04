const roomInitializerConnectionHandler = (socket, data) => {
  const { connUserSocketId } = data;
  // first arg which user should initialize data, second for whom to initialize(who emitted this event)
  const initData = { connUserSocketId: socket.id };
  socket.to(connUserSocketId).emit("conn-init", initData);
};

module.exports = roomInitializerConnectionHandler;

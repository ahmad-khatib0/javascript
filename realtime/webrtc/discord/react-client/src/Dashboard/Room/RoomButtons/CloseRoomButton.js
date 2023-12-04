import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as roomHandler from "../../../realtimeCommunication/roomHandler";

const CloseRoomButton = () => {
  const handlerRoomLeave = () => {
    roomHandler.leaveRoom();
  };

  return (
    <IconButton onClick={handlerRoomLeave} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;

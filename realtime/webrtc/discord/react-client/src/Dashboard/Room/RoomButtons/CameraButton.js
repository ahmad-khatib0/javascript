import React, { useState } from "react";
import { IconButton } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOff from "@mui/icons-material/VideocamOff";

const CameraButton = ({ localStream }) => {
  const [cameraEnabled, setIsCameraEnabled] = useState(true);
  const handleToggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setIsCameraEnabled(!cameraEnabled);
  };

  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOff />}
    </IconButton>
  );
};

export default CameraButton;

import * as React from "react";
import { connect } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { logout } from "../../shared/utilities/auth";
import { getActions } from "../../store/actions/roomActions";

const DropdownMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleOnlyAudioChange = () => setAudioOnly(!audioOnly);

  return (
    <div>
      <IconButton style={{ color: "white" }} onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleOnlyAudioChange}>
          {audioOnly ? "audio only enabled" : "audio only disabled"}
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return { ...room };
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(DropdownMenu);

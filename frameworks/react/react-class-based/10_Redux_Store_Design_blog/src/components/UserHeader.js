import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { foundUser } = this.props;
    if (!foundUser) {
      return null;
    }

    return <div className="header">{foundUser.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { foundUser: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="comment">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="data">{props.TimeAgo}</span>
      </div>
      <div className="text">{props.UserComment}</div>
    </div>
  );
};

export default CommentDetail;

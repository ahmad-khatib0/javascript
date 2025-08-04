import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="SAM"
          TimeAgo="today at 10:55"
          UserComment="I'm new here "
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      {/* CommentCard is going to show up inside of the approval card on the prop's object and  on a property of the 
      prop's object called the children property. (notice the order: CommentDetail and then Approve & Reject)
      now when we wrapped CommentDetail, ApprovalCard is also called prop */}
      <ApprovalCard>
        <CommentDetail
          author="AHMAD"
          TimeAgo="today at 10:33"
          UserComment="I'm old here "
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="SULIM"
          TimeAgo="today at 01:22"
          UserComment="I'm now here "
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

//import the react and the reactDom libraries
import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

//create a react component

const App = function () {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Your name
      </label>
      <input id="name" type="text" className />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};
//take the react component and show it on the screen
reactDom.render(<App />, document.querySelector("#root"));

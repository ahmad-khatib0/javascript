import React from "react";
import LanguageContext from "../Contexts/LanguageContext";
import ColorContext from "../Contexts/ColorContext";

class Button extends React.Component {
  //   console.log(this.context) => english :by default
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

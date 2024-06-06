import React from "react";
import { render } from "react-dom";

import DogImagesContainer from "./DogImagesContainer";
import "./styles.css";

// ╒══════════════════════════════════════════════════════════════════════════════════════╕
//    1. Presentational Components: Components that care about how data is
//       shown to the user. In this example, that's the rendering the list of dog images.
//    2. Container Components: Components that care about what data is shown
//       to the user. In this example, that's fetching the dog images.
// └──────────────────────────────────────────────────────────────────────────────────────┘
//

// ╒═════════════════════════════════════════════════════════════════════════════════════════╕
//   Hooks make it easy to separate logic and view in a component, just like the
//   Container/Presentational pattern. It saves us the extra layer that was
//   necessary in order to wrap the presentational component within the container component.
// └─────────────────────────────────────────────────────────────────────────────────────────┘

function App() {
  return (
    <div className="App">
      <h1>
        Browse Dog Images
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImagesContainer />
    </div>
  );
}

render(<App />, document.getElementById("root"));

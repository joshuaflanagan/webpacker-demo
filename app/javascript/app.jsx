import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"

function renderApplication(hostOptions) {
  console.log("running renderApplication with:", hostOptions)
  const mountNode = window.document.getElementById(hostOptions.elementId);
  console.log("mounting on:", mountNode)

  ReactDOM.render(
    (
      <div>
        <span>This is react</span>
        <img src={require("./products.png")}/>
      </div>
    ),
    mountNode
  );
}
export { renderApplication };

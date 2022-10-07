import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>First Component</h4>;
}

ReactDOM.render(<Greeting/>, document.getElementById('root'))
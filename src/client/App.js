import React, { Component } from "react";
import Child from "./child";
export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Hi
        <Child />
      </div>
    );
  }
}

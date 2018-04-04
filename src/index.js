import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { helperFn } from "./module";

const testProp = helperFn().prop1;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const App = () => (
  <div style={styles}>
    <Hello name="there" />
    <h2>Test prop: {testProp}</h2>
  </div>
);

render(<App />, document.getElementById("root"));

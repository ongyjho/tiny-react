/*@jsx createElement */

import React from "react";
import ReactDOM from "react-dom";
import { createElement, render } from "./tiny-react";

function StudyList() {
  return (
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>MobX</li>
      <li>Typescript</li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Hello?</h1>
      <StudyList />
    </div>
  );
}

console.log(<App />);

import React from "react";
import { render } from "react-dom";
import { format } from "date-fns";

const problematicDateString = "2018-11-24T00:00:00+0000";

const invalid = JSON.stringify(new Date(problematicDateString));
const valid = format(problematicDateString, "dddd, MMMM D, YYYY");

console.log(valid);

const App = () => (
  <dl>
    <dt>Invalid string</dt>
    <dd>{invalid}</dd>
    <dt>Valid String</dt>
    <dd>{valid}</dd>
  </dl>
);

render(<App />, document.getElementById("root"));

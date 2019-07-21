import React from "react";
import "./App.css";

import { Container } from "semantic-ui-react";

import Counter from "./views/Counter";
import Contacts from "./views/Contacts";

function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      {/* <Counter /> */}

      <Contacts />
    </Container>
  );
}

export default App;

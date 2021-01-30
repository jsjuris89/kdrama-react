import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";

const dramasList = [];

const formInitialState = {
  drama: "",
  poster: "",
  startDate: "",
  endDate: "",
  genres: [],
  episodes: "",
  plot: "",
  mainCast: "",
  country: "",
  director: "",
  screenwriter: "",
};

function App() {
  console.log("[APP.JS] running....");
  const [formState, setFormState] = useState(formInitialState);

  return (
    <div className="App">
      <Form
        formState={formState}
        setFormState={setFormState}
        dramas={dramasList}
      />
    </div>
  );
}

export default App;

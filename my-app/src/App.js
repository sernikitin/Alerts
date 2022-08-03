import React from "react";
import AlertManager from "./components/Alert/AlertManager";
import FormOptions from "./components/FormOptions/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <AlertManager className="alert-section" />
      </div>
      <main>
        <FormOptions />
      </main>
    </div>
  );
}

export default App;

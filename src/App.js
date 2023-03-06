import { useState } from "react";
import Todopackage from "./components/Todopackage";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setmode] = useState("light");
  function handleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "rgb(44, 51, 51)";
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar
        mode={mode}
        handlemode={handleMode}
        text={`${mode.toUpperCase()} MODE`}
      />
      <div className="container my-4 border border-success">
        <Todopackage mode={mode} />
      </div>
    </>
  );
}

export default App;

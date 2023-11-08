import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className={`container my-4 ${mode === "dark" ? "dark-mode" : ""}`}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

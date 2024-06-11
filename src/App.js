import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

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
      document.body.style.backgroundColor = "rgb(24 47 62)";
      showAlert("Switched to Dark mode", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Switched to Light mode", "Success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
            
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the Text to Analyze below."
                  mode={mode}
                
            />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

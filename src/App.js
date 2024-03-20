import React, { useState } from "react";
import "./App.css";
import { Button, TextField, Typography } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Panal from "./components/Panal/Panal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar>View Audience</Navbar>

      <div className="App">
        <Button
          variant="outlined"
          onClick={() => setIsOpen(true)}
          sx={{ border: "1px solid #39aebc" }}
        >
          Save segment
        </Button>

        <Panal open={isOpen} onClose={() => setIsOpen(false)}></Panal>
      </div>
    </>
  );
}

export default App;

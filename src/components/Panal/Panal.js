import { TextField, Typography, Button, Box } from "@mui/material";
import "./Panal.css";
import Navbar from "../Navbar/Navbar";
import ColoredDot from "../ColoredDot/ColoredDot";
import Trait from "../Trait/Trait";
import ReactDom from "react-dom";
import { useState } from "react";

export default function Panal({ open, onClose }) {
  const [segmentName, setSegmentName] = useState("");
  const [schemas, setSchemas] = useState([]);

  if (!open) return null;

  //saving the segment

  const handleSaveSegment = async () => {
    const data = {
      segment_name: segmentName,
      schema: schemas.map((schema) => ({
        [schema.value]:
          schema.label.charAt(0).toUpperCase() +
          schema.label.slice(1).replace("_", " "),
      })),
    };
    console.log("data: ",data)
    try {
      const response = await fetch("your-webhook-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Segment saved successfully!");
        onClose(); // Close the panel after saving
      } else {
        console.error("Failed to save segment:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving segment:", error.message);
    }
  };

  //saving the segment

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="container modal">
        <Navbar>Saving Segment</Navbar>
        <div className="wrapper">
          <Typography>Enter the name of the Segment</Typography>
          <input
            type="text"
            className="input-box"
            placeholder="Name of the segment"
            value={segmentName}
            onChange={(e) => setSegmentName(e.target.value)}
          />

          <Typography sx={{ marginTop: "20px" }}>
            To save your segment, you need to add the schemas to build the query
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "end", margin: "20px" }}
            spacing={5}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <ColoredDot color="#5DDB78" size={16} />
              <Typography sx={{ marginLeft: "5px" }}> - User Traits</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ColoredDot color="#D24572" size={16} />
              <Typography sx={{ marginLeft: "5px" }}>
                {" "}
                - Group Traits
              </Typography>
            </Box>
          </Box>

          <Trait schemas={schemas} setSchemas={setSchemas}>
            Add schema to segment
          </Trait>
        </div>
        <div className="panal-footer">
          <Button
            variant="contained"
            onClick={handleSaveSegment}
            sx={{
              backgroundColor: "#41B494",
              color: "white",
              marginRight: "20px",
              "&:hover": {
                backgroundColor: "#41B494",
              },
            }}
          >
            Save the Segment
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "white",
              color: "red",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

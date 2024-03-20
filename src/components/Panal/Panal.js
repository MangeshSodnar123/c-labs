import { TextField, Typography, Button, Box } from "@mui/material";
import "./Panal.css";
import Navbar from "../Navbar/Navbar";
import ColoredDot from "../ColoredDot/ColoredDot";
import Trait from "../Trait/Trait";
import ReactDom from "react-dom";

export default function Panal({ open, children, onClose }) {
  if (!open) return null;

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

          <Trait>Add schema to segment</Trait>
        </div>
        <div className="panal-footer">
          <Button
            variant="contained"
            onClick={onClose}
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

// return ReactDom.createPortal(
//   <>
//     <div style={OVERLAY_STYLES} />
//     <div style={MODAL_STYLES}>
//       <button onClick={onClose}>Close Modal</button>
//       {children}
//     </div>
//   </>,
//   document.getElementById('portal')
// )

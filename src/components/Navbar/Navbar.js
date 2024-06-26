import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Navbar({children}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#39aebc"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ArrowBackIosNewIcon sx={{ fontSize:"large" }}/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

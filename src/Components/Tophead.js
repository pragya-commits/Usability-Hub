import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
const Tophead = () => {
  const styles = {
    topheading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
      width: "100%",
      color: "white",
      fontSize: "18px",
      backgroundColor: "#4dadf7",
      backgroundSize: "300px",
      fontFamily: "'Poppins' , 'sans-serif'",
    },
  };
  return (
    <Box sx={styles.topheading}>
      😍 New to Usability Hub : Open and Closed card sorting
    </Box>
  );
};
export default Tophead;

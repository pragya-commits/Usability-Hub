import { Box, Button, Typography } from "@mui/material";
import React from "react";
const Testing = () => {
  const styles = {
    Content: {
      textAlign: "center",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    mainBox: {
      backgroundColor: "#183b56",
    },
    testing: {
      color: "white",
      fontSize: "2.2rem",
      paddingBottom: "30px",
      paddingTop: "20px",
    },
    design: {
      color: "white",
      fontSize: "1.2rem",
      fontFamily: "sans-serif",
      paddingBottom: "30px",
    },
    contained: {
      width: "150px",
      backgroundColor: "#2294ed",
      height: "45px",
      color: "white",
      borderRadius: "5px",
      fontSize: "25px",
    },
  };
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.Content}>
        <Typography sx={styles.testing}>Start testing today</Typography>
        <Typography sx={styles.design}>
          Take the guesswork out of design decisions
        </Typography>
        <Button variant="contained" size="medium">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};
export default Testing;

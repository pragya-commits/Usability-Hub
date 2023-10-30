import React from "react";
import emoticon from "./emoticon2.png";
import { Box, Typography, Button } from "@mui/material";

const Navbar = () => {
  const styles = {
    mainNav: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "60px",
      paddingLeft: "80px",
      paddingTop: "30px",
    },
    text: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "60px",
      display: "block",
      paddingTop: "15px",
      fontSize: "19px",
    },
    rightBox: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "30px",
      fontFamily: "'Poppins' , 'sans-serif'",
    },
    navBtn: {
      paddingTop: "15px",
      paddingLeft: "60px",
      fontSize: "18px",
      color: "#183b56",
      ":hover": {
        borderColour: "#0000FF",
      },
    },

    Btn: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "40px",
      paddingTop: "10px",
    },
    navBtn1: {
      paddingRight: "60px",
      borderRadius: "5px",
      fontWeight: "500",
    },
  };
  return (
    <Box sx={styles.mainNav}>
      <Box sx={styles.leftBox}>
        <img src={emoticon} width={200} height={40} />
      </Box>
      <Box sx={styles.rightBox}>
        <Typography sx={styles.text}>Products</Typography>
        <Typography sx={styles.text}>Customer</Typography>
        <Typography sx={styles.text}>Procing</Typography>
        <Typography sx={styles.text}>Resources</Typography>
        <Box sx={styles.Btn}>
          <Box sx={styles.navBtn1}>
            <Button variant="outlined">Sign In</Button>
          </Box>
          <Box sx={styles.navBtn2}>
            <Button variant="contained">Sign Up</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;

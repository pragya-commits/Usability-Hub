import React from "react";
import people from "./people.png";
import { Box, Typography, Button } from "@mui/material";
const Herosection = () => {
  const styles = {
    heroMain: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "100px",
      paddingRight: "110px",
    },
    leftBox: {
      paddingTop: "150px",
    },
    heroHead: {
      fontFamily: "'Poppins' , 'sans-serif'",
      color: "#183b56",
      fontSize: "50px",
    },
    heroPara: {
      color: "#577592",
      padding: "15px 0 30px 0",
      fontFamily: "'Poppins' , 'sans-serif'",
      fontSize: "20px",
    },
    rigthBox: {
      paddingTop: "50px",
      paddingRight: "30px",
    },
    heroBtn: {
      borderRadius: "10px",
      fontWeight: "50px",
      fontSize: "20px",
    },
  };

  return (
    <Box sx={styles.heroMain}>
      <Box sx={styles.leftBox}>
        <Typography sx={styles.heroHead}>Design confidently.</Typography>
        <Typography sx={styles.heroPara}>
          UsabilityHub is a remote user research platform that takes <br></br>
          the guesswork out of design decisions by validating them <br></br>with
          real users.
        </Typography>
        <Box sx={styles.heroBtn}>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Box>
      </Box>
      <Box sx={styles.rigthBox}>
        <img src={people} width={600} height={500} />
      </Box>
    </Box>
  );
};
export default Herosection;

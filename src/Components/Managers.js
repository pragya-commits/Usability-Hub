import React from "react";
import asset from "./asset 24.png";
import logo from "./logo_economist.png";
import ron from "./avatar_ron.png";
import { Box, Typography, Button } from "@mui/material";
const Managers = () => {
  const styles = {
    easier: {
      fontSize: "20px",
    },
    mainManager: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "150px",
      paddingLeft: "200px",
      paddingTop: "100px",
      paddingBottom: "100px",
    },
    easier: {
      fontSize: "20px",
    },
    product: {
      fontSize: "1.7rem",
      textAlign: "start",
      fontWeight: "500",
      paddingBottom: "10px",
    },
    ensure: {
      width: "400px",
      color: "#577592",
      padding: "10px 0 25px 0",
      fontSize: "18px",
    },
    adopting: {
      paddingTop: "10px",
      width: "350",
      color: "#577592",
      padding: "15px 0 25px 0",
      fontSize: "18px",
    },
    ron: {
      display: "flex",
    },
    ronDiorio: {
      fontSize: "1rem",
      fontWeight: "200",
    },
    rightBox: {
      paddingTop: "70px",
    },
  };
  return (
    <Box sx={styles.mainManager}>
      <Box sx={styles.leftBox}>
        <img src={asset} width={550} height={500} />
      </Box>
      <Box sx={styles.rightBox}>
        <Typography sx={styles.easier}>Easier decision making for</Typography>
        <Typography sx={styles.product}>Product managers</Typography>
        <Typography sx={styles.ensure}>
          Ensure you’re delivering the <br></br>right features to the right
          customers by validating product concepts <br></br> with your target
          audience.
        </Typography>
        <img src={logo} width={100} height={30.76} />
        <Typography sx={styles.adopting}>
          Adopting UsabilityHub got us into the <br></br>habit of asking our
          users questions <br></br> before locking in decisions.
        </Typography>
        <Box sx={styles.ron}>
          <img src={ron} width={40} height={40} />
          <Typography sx={styles.ronDiorio}>
            <b>Ron Diorio </b>
            <br></br>VP Innovation & New Products
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Managers;

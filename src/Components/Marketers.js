import React from "react";
import { Box, Typography, Button } from "@mui/material";
import philips from "./logo_philips.png";
import rick from "./avatar_rick.png";
import manonlaptop from "./manonlaptop.png";
const Marketers = () => {
  const styles = {
    mainMarketers: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "150px",
      paddingLeft: "200px",
    },
    optimisation: {
      fontSize: "20px",
    },
    marketers: {
      fontSize: "1.7rem",
      textAlign: "start",
      fontWeight: "500",
      paddingBottom: "15px",
    },
    finetune: {
      width: "400px",
      color: "#577592",
      padding: "15px 0 25px 0",
      fontSize: "18px",
    },
    hub: {
      paddingTop: "10px",
      width: "350",
      color: "#577592",
      padding: "15px 0 25px 0",
      fontSize: "18px",
    },
    rickvandee: {
      display: "flex",
    },
    rickvande: {
      fontSize: "1rem",
      fontWeight: "200",
    },
    leftBox: {
      paddingTop: "60px",
    },
  };
  return (
    <Box sx={styles.mainMarketers}>
      <Box sx={styles.leftBox}>
        <Typography sx={styles.optimisation}>Optimisation for</Typography>
        <Typography sx={styles.marketers}>Marketers</Typography>
        <Typography sx={styles.finetune}>
          Fine-tune landing pages, messaging, and <br></br>creative, helping you
          optimise conversion rates <br></br>on marketing campaigns and product
          launches.
        </Typography>
        <img src={philips} width={100} height={45.42} />
        <Typography sx={styles.hub}>
          We use UsabilityHub tests to help us <br></br> make decisions for
          various projects.<br></br> From web and mobile design to <br></br>{" "}
          marketing activities.
        </Typography>
        <Box sx={styles.rickvandee}>
          <img src={rick} width={40} height={40} />
          <Typography sx={styles.rickvande}>
            <b>Rick van de Ven</b> <br></br>Digital Marketing Analyst
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src={manonlaptop} width={550} height={540} />
      </Box>
    </Box>
  );
};
export default Marketers;

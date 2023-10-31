import React from "react";
import { Box, Typography, Button } from "@mui/material";
import amazon from "./amazon.png";
import google from "./google.png";
import taskRabbit from "./taskrabbit.png";
import asana from "./asana.png";
import box from "./box.png";
import airtable from "./airtable.png";
import godaddy from "./godaddy.png";
import godaddy1 from "./godaddy.svg";
const Images = () => {
  const styles = {
    imgHead: {
      fontSize: "20px",
      //   fontFamily: "'Poppins' , 'sans-serif'",
      color: "#183b56",
      textAlign: "center",
      paddingBottom: "30px",
    },
    imgMain: {
      paddingRight: "130px",
      paddingLeft: "130px",
      paddingBottom: "100px",
    },
    pictures: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <Box sx={styles.imgMain}>
      <Typography sx={styles.imgHead}>
        The world’s best companies rely on UsabilityHub to make better design
        decisions.
      </Typography>
      <Box sx={styles.pictures}>
        <img src={amazon} width={94.42} height={46} />
        <img src={google} width={105.31} height={46} />
        <img src={taskRabbit} width={169.47} height={46} />
        <img src={asana} width={104.1} height={46} />
        <img src={box} width={44.78} height={46} />
        <img src={airtable} width={145.26} height={46} />
        <img src={godaddy1} width={223.55} height={46} />
      </Box>
    </Box>
  );
};
export default Images;

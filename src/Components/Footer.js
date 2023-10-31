import React from "react";
import { Box, Typography, Button } from "@mui/material";
import emoticon from "./emoticon.png";
import youtube from "./youtube.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
const Footer = () => {
  const styles = {
    mainContent: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "180px",
      paddingLeft: "180px",
      paddingTop: "80px",
      paddingBottom: "80px",
      backgroundColor: "#ebf2fa",
    },
    heading: {
      display: "flex",
    },
    heading1: {
      padingTop: "2px",
      fontSize: "30px",
    },
    mainHead: {
      fontSize: "20px",
      paddingBottom: "10px",
    },
    items: {
      color: "#577592",
      fontSize: "16px",
      fontWeight: "300",
      paddingBottom: "5px",
    },
    greyfooter: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "300px",
      paddingRight: "300px",
      backgroundColor: "#b9cde4",
      paddingTop: "15px",
      paddingBottom: "15px",
    },
    imghead: {
      display: "block",
      paddingTop: "5px",
      textDecoration: "none",
      color: "#183b56",
      fontSize: "20px",
    },
    images: {
      gap: "25px",
      paddingLeft: "60px",
      paddingTop: "10px",
      paddingRight: "10px",
    },
    blankgrey: {
      //   marginTop: "10px",
      //   marginRight: "10px",
      //   marginBottom: "10px",
      backgroundColor: "#cedbdb",
      height: "80px",
      width: "100%",
    },
    lastHead: {
      textAlign: "center",
      fontSize: "1.3rem",
    },
  };
  //
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainContent}>
        <Box sx={styles.heading}>
          <img src={emoticon} width={40} height={40} />
          <Typography sx={styles.heading1}>UsabilityHub</Typography>
        </Box>
        <Box sx={styles.footerContent1}>
          <Typography sx={styles.mainHead}>Product</Typography>
          <Typography sx={styles.items}>Overview</Typography>
          <Typography sx={styles.items}>Pricing</Typography>
          <Typography sx={styles.items}>Research Panel</Typography>
          <Typography sx={styles.items}>Customer</Typography>
          <Typography sx={styles.items}>Status Page</Typography>
          <Typography sx={styles.items}>Sign Up</Typography>
          <Typography sx={styles.items}>Book A Demo</Typography>
        </Box>
        <Box sx={styles.footercontent2}>
          <Typography sx={styles.mainHead}>Methodologies</Typography>
          <Typography sx={styles.items}>Card sorting</Typography>
          <Typography sx={styles.items}>Prototype testing</Typography>
          <Typography sx={styles.items}>First click tests</Typography>
          <Typography sx={styles.items}>Preference tests</Typography>
          <Typography sx={styles.items}>Five second tests</Typography>
          <Typography sx={styles.items}>Design surveys</Typography>
        </Box>
        <Box sx={styles.footercontent3}>
          <Typography sx={styles.mainHead}>Resources</Typography>
          <Typography sx={styles.items}>Blog</Typography>
          <Typography sx={styles.items}>Examples</Typography>
          <Typography sx={styles.items}>Testing guides</Typography>
          <Typography sx={styles.items}>Research panel calculator</Typography>
          <Typography sx={styles.items}>Help center</Typography>
          <Typography sx={styles.items}>Contact</Typography>
          <Typography sx={styles.items}>Careers</Typography>
        </Box>
      </Box>
      <Box sx={styles.greyfooter}>
        <Typography sx={styles.imghead}>Privacy policy</Typography>
        <Typography sx={styles.imghead}>Terms & conditions</Typography>
        <Typography sx={styles.imghead}>Security information</Typography>
        <Box sx={styles.images}>
          <img src={youtube} width={18} height={16} />
          <img src={twitter} width={18} height={16} />
          <img src={facebook} width={18} height={16} />
          <img src={linkedin} width={18} height={16} />
        </Box>
      </Box>
      <Box sx={styles.blankgrey}></Box>
      <Box sx={styles.lastHead}>Made with ❤️ by Pragya Pendharkar...</Box>
    </Box>
  );
};
export default Footer;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import lady from "./lady.png";
import nick from "./avatar_nick.png";
const Professional = () => {
  const styles = {
    mainProfessional: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "80px",
      paddingRight: "200px",
      paddingLeft: "200px",
      paddingBottom: "100px",
    },
    avatar: {
      display: "flex",
    },
    effort: {
      fontSize: "20px",
      paddingBottom: "8px",
    },
    design: {
      fontSize: "1.8rem",
      textAlign: "start",
      fontWeight: "540",
      paddingBottom: "16px",
    },
    test: {
      width: "400px",
      color: "#577592",
      padding: "15px 0 30px 0",
      ontFamily: "'Poppins' , 'sans-serif'",
      fontSize: "18px",
    },
    chart: {
      fontSize: "20px",
      fontWeight: "550",
      paddingBottom: "20px",
    },
  };
  return (
    <Box sx={styles.mainProfessional}>
      <Box sx={styles.leftContent}>
        <img src={lady} width={508.67} height={470} />
      </Box>
      <Box sx={styles.rightContent}>
        <Typography sx={styles.effort}>Effortless validation for</Typography>
        <Typography sx={styles.design}>Design professionals</Typography>
        <Typography sx={styles.test}>
          Test interfaces, interaction flows, iconography<br></br>
          and more, to help you create intuitive and <br></br>
          delightful experiences for your users.
        </Typography>
        <Typography sx={styles.chart}>ChartMogul</Typography>
        <Typography sx={styles.test}>
          The navigation test is god's gift to UI <br></br> designers, it
          probably has the<br></br> bestpower-to-simplicity ratio of any
          <br></br>software, ever.
        </Typography>
        <Box sx={styles.avatar}>
          <img src={nick} width={40} height={40} />
          <Typography sx={styles.nick}>
            <b>Nick Franklin </b>
            <br></br>Chief Executive Officer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Professional;

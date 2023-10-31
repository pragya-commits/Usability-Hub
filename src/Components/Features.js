import React from "react";
import { Box, Typography, Button } from "@mui/material";
import arrow from "./arr.jpeg";
import card from "./card-sorting.svg";
import prototype from "./prototype-testing.svg";
import firstclick from "./click-analysis.svg";
import ques from "./surveys.svg";
import heart from "./Head icon.svg";
import timer from "./five-second-test.svg";

const Features = () => {
  const styles = {
    arrowbtn: {
      display: "flex",
    },
    topHead: {
      textAlign: "center",

      paddingTop: "100px",
    },
    arrowbtn: {
      borderColor: "#000000",
      color: "#000000",
    },
    textheading: {
      fontSize: "2.2rem",
      textAlign: "center",
    },
    mainContent: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "60px",
      paddingRight: "150px",
      paddingLeft: "150px",
    },
    cards: {
      textAlign: "center",
    },
    cardHeading: {
      fontSize: "1.5rem",
      //   fontFamily: "'Poppins' , 'sans-serif'",
      color: "#183b56",
    },
    cardPara: {
      color: "#577592",
      padding: "15px 0 20px 0",
      textAlign: "center",
      fontSize: "1.1rem",
      width: "250px",
    },
  };
  return (
    <Box sx={styles.featureMain}>
      {/* Top box starts from here */}
      <Box sx={styles.topHead}>
        <Typography sx={styles.textheading}>
          Your user research Swiss Army knife
        </Typography>
        <Box sx={styles.arrowbtn}>
          <Button variant="outlined">
            See All Features <img src={arrow} width={12} height={20} />
          </Button>
        </Box>
      </Box>
      {/* starting of main content of Features Section */}
      <Box sx={styles.mainContent}>
        {/* first card = card sorting */}

        <Box sx={styles.cards}>
          <img src={card} width={40} height={40} />
          <Typography sx={styles.cardHeading}>Card Sorting</Typography>
          <Typography sx={styles.cardPara}>
            Discover how people group <br></br> and label information.
          </Typography>
          <Box sx={styles.Btn}>
            <Button variant="outlined">
              Learn More <img src={arrow} width={12} height={20} />
            </Button>
          </Box>
        </Box>

        {/* second card = prototype test */}

        <Box sx={styles.cards}>
          <img src={heart} width={40} height={40} />
          <Typography sx={styles.cardHeading}>Preference tests</Typography>
          <Typography sx={styles.cardPara}>
            Find out which designs users <br></br> prefer and why.
          </Typography>
          <Box sx={styles.Btn}>
            <Button variant="outlined">
              Learn More <img src={arrow} width={12} height={20} />
            </Button>
          </Box>
        </Box>
        {/* third card = First click tests */}
        <Box sx={styles.cards}>
          <img src={timer} width={40} height={40} />
          <Typography sx={styles.cardHeading}>First click tests</Typography>
          <Typography sx={styles.cardPara}>
            Test interaction with first click <br></br> and navigation tests.
          </Typography>
          <Box sx={styles.Btn}>
            <Button variant="outlined">
              Learn More <img src={arrow} width={12} height={20} />
            </Button>
          </Box>
        </Box>
      </Box>

      {/* starting of second main content of Features Section */}

      <Box sx={styles.mainContent}>
        {/* first card = card sorting */}
        <Box sx={styles.cards}>
          <img src={ques} width={40} height={40} />
          <Typography sx={styles.cardHeading}>Design surveys</Typography>
          <Typography sx={styles.cardPara}>
            Get feedback on images, <br></br>videos or audio files.
          </Typography>
          <Box sx={styles.Btn}>
            <Button variant="outlined">
              Learn More <img src={arrow} width={12} height={20} />
            </Button>
          </Box>
        </Box>
        {/* second card = prototype test */}
        <Box sx={styles.cards}>
          <img src={prototype} width={40} height={40} />
          <Typography sx={styles.cardHeading}>Preference tests</Typography>
          <Typography sx={styles.cardPara}>
            Find out which designs users <br></br> prefer and why.
          </Typography>
          <Box sx={styles.Btn}>
            <Button variant="outlined">
              Learn More <img src={arrow} width={12} height={20} />
            </Button>
          </Box>
        </Box>
        {/* third card = First click tests */}
        <Box sx={styles.cards}>
          <img src={firstclick} width={40} height={40} />
          <Typography sx={styles.cardHeading}>Five second tests</Typography>
          <Typography sx={styles.cardPara}>
            Test comprehensibility by <br></br>measuring first impressions.
          </Typography>
          <Box sx={styles.Btn}>
            <Button variant="outlined">
              Learn More <img src={arrow} width={12} height={20} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Features;

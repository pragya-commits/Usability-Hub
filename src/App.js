import "./App.css";

import Tophead from "./Components/Tophead";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Images from "./Components/Images";
import Features from "./Components/Features";
import Professional from "./Components/Professional";
import Marketers from "./Components/Marketers";
import Managers from "./Components/Managers";
import Examples from "./Components/Examples";
import Testing from "./Components/Testing";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Tophead></Tophead>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Images></Images>
      <Features></Features>
      <Professional></Professional>
      <Marketers></Marketers>
      <Managers></Managers>
      <Examples></Examples>
      <Testing></Testing>
      <Footer></Footer>
    </>
  );
}

export default App;

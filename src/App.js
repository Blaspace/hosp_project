import React from "react";
import Nav from "./component/Nav";
import Header from "./component/Header";
import FirstSection from "./component/FirstSection";
import ThirdSection from "./component/ThirdSection";
import SecondSection from "./component/SecondSection";
import FourthSection from "./component/FourthSection";
import FifthSection from "./component/FifthSection";
import SixthSection from "./component/SixthSection";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import SeventhSection from "./component/SeventhSection";
import EighthSection from "./component/EighthSection";
import NinethSection from "./component/NinethSection";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div>
        <a name="first" href="#" />
        <FirstSection />
      </div>
      <div>
        <SecondSection />
      </div>
      <div>
        <a name="second" href="#" />
        <ThirdSection />
      </div>
      <div>
        <a name="third" href="#" />
        <FourthSection />
      </div>
      <div>
        <FifthSection />
      </div>
      <div>
        <a name="fourth" href="#" />
        <SixthSection />
      </div>
      <div>
        <SeventhSection />
      </div>
      <div>
        <EighthSection />
      </div>
      <NinethSection />
      <div>
        <a name="fifth" href="#" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// import { FooterOverlay } from "./components/Footer/FooterOverlay";
// import { Newsletter } from "./components/Footer/Newsletter";
// import { MenuItem } from "./components/MenuItem/MenuItem";
import { NavBar } from "./components/Navbar/NavBar";
// import { SubHeading } from "./components/SubHeading/SubHeading";

// import { AboutUs } from "./containers/AboutUs/AboutUs";
// import { Chef } from "./containers/Chef/Chef";
// import { FindUs } from "./containers/Findus/FindUs";
// import { Footer } from "./containers/Footer/Footer";
// import { Gallery } from "./containers/Gallery/Gallery";
import { Header } from "./containers/Header/Header";
// import { Intro } from "./containers/Intro/Intro";
// import { Laurels } from "./containers/Laurels/Laurels";
// import { Menu } from "./containers/Menu/Menu";

import "./App.css";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      {/* <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer /> */}
    </div>
  );
};

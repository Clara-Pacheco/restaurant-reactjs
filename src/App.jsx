import { FooterOverlay } from "./components/Footer/FooterOverlay";
import { Newsletter } from "./components/Footer/Newsletter";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { NavBar } from "./components/Navbar/NavBar";
import { SubHeading } from "./components/SubHeading/SubHeading";

export const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <NavBar />
      <SubHeading />
      <MenuItem />
      <Newsletter />
      <FooterOverlay />
    </div>
  );
};

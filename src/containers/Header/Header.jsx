import "./Header.css";

// import { images } from "../../constants/images";

import { SubHeading } from "../../components/SubHeading/SubHeading";

export const Header = () => {
  return (
    <div className="app__header app__warpper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
      </div>
      <div className="app__wrapper_img"></div>
    </div>
  );
};

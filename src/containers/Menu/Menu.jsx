/* eslint-disable react/no-unescaped-entities */
import { SubHeading } from "../../components/SubHeading/SubHeading";
import "./Menu.css";

import { data, images } from "../../constants";

export const Menu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headText__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine) => (
              <p key={wine.title}>{wine.title}</p>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="Drinks menu" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail) => (
              <p key={cocktail.title}>{cocktail.title}</p>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

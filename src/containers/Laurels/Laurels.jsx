/* eslint-disable react/prop-types */
import { SubHeading } from "../../components/SubHeading/SubHeading";
import "./Laurels.css";

import { data, images } from "../../constants";

const AwardCard = ({ award }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={award.imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {award.title}
        </p>
        <p className="p__cormorant">{award.subtitle}</p>
      </div>
    </div>
  );
};

export const Laurels = () => {
  return (
    <div className="app__bg app__wrapper app__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards and Recognition" />
        <h1 className="headtext__cormorant">Our Larels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

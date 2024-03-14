/* eslint-disable react/prop-types */
import { images } from "../../constants";

export const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img"></img>
    </div>
  );
};

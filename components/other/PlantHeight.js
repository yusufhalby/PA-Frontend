import react from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlantWilt } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

function PlantHeight() {
  const imgLink =
    "https://img.freepik.com/free-icon/tree_318-571470.jpg?size=626&ext=jpg&uid=R74442309&ga=GA1.2.1685006977.1620747273&semt=sph";

  return (
    <div
      className=" flex  w-28  align-middle mb-3 p-3"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      {/* <FontAwesomeIcon icon={faPlantWilt} size="2xl" className="mr-3" style={{ fontSize: "3.5rem" }}/> */}
      <div className="w-16 h-auto ">
        <img src={imgLink} alt="water" className="rounded-full"></img>
      </div>
      <div className="flex  flex-col ">
        <h1 className=" text-xl capitalize boldy-fonty">plant height</h1>
        <h1 className=" font-bold text-2xl ">4 cm</h1>
      </div>
    </div>
  );
}

export default PlantHeight;

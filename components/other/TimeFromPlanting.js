import react from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

function PlantAge()
{
  
const imgLink =
  "https://cdn-icons-png.flaticon.com/512/188/188333.png?w=740&t=st=1687689277~exp=1687689877~hmac=96b5e1e9cfd36fa2def72a564b79826911472da4853a265bbc574cf6094792b3";


  return (
    <div
      className=" flex  w-28  align-middle mb-3 p-3"
      style={{ backgroundColor: "#c6e469", borderRadius: "10px" }}
    >
      {/* <FontAwesomeIcon
        icon={faSeedling}
        size="2xl"
        className="mr-3"
        style={{ fontSize: "3.5rem" }}
      /> */}
      <div className="w-16 h-auto  rounded-full">
        <img src={imgLink} alt="water" className="rounded-full "></img>
      </div>
      <div className="flex flex-col ml-5 ">
        <h1 className=" text-xl capitalize boldy-fonty">plant age</h1>
        <h1 className=" font-bold text-2xl ">3 weeks</h1>
      </div>
    </div>
  );
}

export default PlantAge;

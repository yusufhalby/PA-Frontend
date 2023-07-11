import React, { useEffect, useState } from "react";


import WaterQuality from "./WaterQuality";
import PlantHeight from "./PlantHeight";
import PlantAge from "./TimeFromPlanting";

function SideContainer(props)
{
  
const myLogs = props.data;

  return (
    <div
      className="flex  w-full justify-evenly  p-5 flex-col"
      style={{
        // backgroundColor: "#046565",
        color: "#000000",
        borderRadius: "30px",
      }}
    >
      <WaterQuality data={myLogs} />
      <PlantHeight data={myLogs} />
      <PlantAge data={myLogs} />
    </div>
  );
}
export default SideContainer;

import React, { useEffect, useState } from "react";

import TempratureCircle from "components/other/temprature.js";
import SoilCircle from "../../components/other/soilmoisture";

function ValuesContainer(props)
{
  const myLogs = props.data;

  return (
    <div
      className="flex  w-full justify-evenly  p-5 items-center h-full"
      style={{
        backgroundColor: "#304d3f",
        color: "#ffffff",
        borderRadius: "30px",
      }}
    >
      <TempratureCircle data={myLogs} />
      <SoilCircle />
    </div>
  );
}
export default ValuesContainer;

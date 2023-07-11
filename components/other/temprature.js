import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useFetch from "./useFetch";

function TempratureCircle(props)
{
  
  const fetchedData = props.data;

  const [percentage, setPercentage] = useState(0);
  const [myColor, setColor] = useState("#d6520b");
  const [realValue, setRealValue] = useState();
  const maxValue = 100;
  const diplayedValue = (realValue / maxValue) * 100;

 

  useEffect(() => {
    if (percentage < diplayedValue) {
      setPercentage(percentage + 10);
    }

    if (fetchedData && fetchedData.logs && fetchedData.logs.length > 0) {
      setRealValue(fetchedData.logs[0].temp);
    }
  }, [fetchedData, realValue]);

  useEffect(() => {
    const changeColor = (value) => {
      if (value < 40) {
        // ourColor = "#76d138";
        setColor("#76d138");
      } else if (value > 60) {
        // ourColor = "#d6520b";
        setColor("#d6520b");
      } else {
        // ourColor = "#d6cf0b";
        setColor("#d6cf0b");
      }
    };

    changeColor(realValue);
    console.log(myColor);
  });

  return (
    <div className="flex flex-col   ">
      <div style={{ width: 200 }}>
        <CircularProgressbar
          value={diplayedValue}
          text={`${realValue} C`}
          circleRatio={1}
          styles={{
            trail: {
              stroke: "#f1ffe8",
              strokeLinecap: "butt",
            },
            path: {
              stroke: `${myColor}`,
              strokeLinecap: "butt",
            },

            text: {
              fill: "#ffffff",
              fontWeight: "bold",
            },
          }}
        />
      </div>
      <h4 className="text-4xl capitalize  text-white boldy-fonty fonty-5 ">
        temprature{" "}
      </h4>
    </div>
  );
}
export default TempratureCircle;

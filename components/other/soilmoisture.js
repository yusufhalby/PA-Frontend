import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SoilCircle() {
  const [percentage, setPercentage] = useState(0);
  const realValue = 400;
  const maxValue = 2000;
  const diplayedValue = (realValue / maxValue) * 100;

  useEffect(() => {
    setTimeout(() => {
      if (percentage < diplayedValue) {
        setPercentage(percentage + 10);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="flex flex-col">
      <div style={{ width: 200 }}>
        <CircularProgressbar
          value={diplayedValue}
          text={`${realValue} `}
          circleRatio={1}
          styles={{
            trail: {
              stroke: "#f1ffe8",
              strokeLinecap: "butt",
            },
            path: {
              stroke: "#76d138",
              strokeLinecap: "butt",
            },
            text: {
              fill: "#ffffff",
              fontWeight: "bold",
            },
          }}
        />
      </div>
      <h4 className="text-4xl capitalize boldy-fonty">soil moisture </h4>
    </div>
  );
}
export default SoilCircle;

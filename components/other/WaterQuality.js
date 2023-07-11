import react, { useEffect, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import useFetch from "./useFetch";


config.autoAddCss = false;

function WaterQuality(props)
{
  const fetchedData = props.data;

  const [hum, setHumidity] = useState();

 

  useEffect(() => {
    if (fetchedData && fetchedData.logs && fetchedData.logs.length > 0) {
      setHumidity(fetchedData.logs[0].humidity);
    }
  }, [fetchedData, hum]);

  const imgLink =
    "https://cdn-icons-png.flaticon.com/512/472/472516.png?w=740&t=st=1688675974~exp=1688676574~hmac=b43f4d31c8bd67e7245a3b930e52e28180c33f3eb15bcbb5e8df35739d111d76";
  return (
    <div
      className=" flex   w-28  align-middle mb-3  p-3"
      style={{ backgroundColor: "#c6e469", borderRadius: "10px" }}
    >
      {/* <FontAwesomeIcon
          icon={faDroplet}
          size="2xl"
          className="mr-3"
          style={{ fontSize: "4rem" }}
        /> */}
      <div className="w-16 h-auto ">
        <img src={imgLink} alt="water" className="rounded-full"></img>
      </div>
      <div className="flex flex-col   align-middle">
        <h1 className=" text-xl capitalize boldy-fonty  ">humidity</h1>
        <h1 className=" font-bold text-2xl ">{hum} RH</h1>
      </div>
    </div>
  );
}

export default WaterQuality;

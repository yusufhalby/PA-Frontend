import React from "react";
import { LittleProp } from "./LittleProp";

export default function SingleMotor(props) {
  const imgLink = props.imgLink;
  return (
    <div className="bg-white w-full flex flex-col items-center p-5 rounded w-10 m-3">
      <div className=" " style={{ width: "10rem" }}>
        <img src={imgLink} alt=""></img>
      </div>
      <div className="font-bold uppercase text-3xl">{props.title}</div>
      <div className="font-semibold capitalize text-3xl">{props.state}</div>
      
    </div>
  );
}

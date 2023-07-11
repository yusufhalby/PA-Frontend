import React from 'react'

export const LittleProp = (props) =>
{
    const imgLink = props.imgLink;

  return (
    <div>
      <div className="bg-white w-full flex flex-col items-center p-5 rounded w-10 m-3">
        <div className=" " style={{ width: "5rem" }}>
          <img src={imgLink} alt=""></img>
        </div>
        <div className="font-bold uppercase text-xl">{props.title}</div>
        <div className="font-semibold capitalize text-2xl">{props.state}</div>
      </div>
    </div>
  );
}

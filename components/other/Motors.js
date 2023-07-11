import React from "react";
import SingleMotor from "./SingleMotor";
import { LittleProp } from "./LittleProp";

export default function Motors(props) {
  const link1 =
    "https://cdn-icons-png.flaticon.com/512/1037/1037570.png?w=740&t=st=1688140398~exp=1688140998~hmac=cb2234c07bb55b23db4b6a68f7391c585396e36d27453f1b3cd89849f140943d";

  const link2 =
    "https://cdn-icons-png.flaticon.com/512/549/549566.png?w=740&t=st=1688185057~exp=1688185657~hmac=6290c986d9957eef7ce305c5de99dbcdb1d077436952eb7e383198be28f85cbf";
  const link3 =
    "https://cdn-icons-png.flaticon.com/512/1056/1056063.png?w=740&t=st=1688185198~exp=1688185798~hmac=12cfaf38e8ddafbb33b2c224d7b771de5fd94f70c40902d88011b18bf78c4e37";

  const link4 =
    "https://cdn-icons-png.flaticon.com/512/616/616546.png?w=740&t=st=1688624884~exp=1688625484~hmac=7bedb5656b74d6b46440137416b7d68b354b826588376472b7be40a5fd3ed91b";
  
  const link5 =
    "https://cdn-icons-png.flaticon.com/512/1147/1147589.png?w=740&t=st=1688625145~exp=1688625745~hmac=28ae2aa0c5ce0251c4ce379f0d424749a3e2eb3845aa04b8a6a149e4927423c8";
  
  const link6 =
    "https://img.freepik.com/free-icon/share_318-370877.jpg?size=626&ext=jpg&ga=GA1.2.1685006977.1620747273&semt=ais";
  
  const link7 =
    "https://cdn-icons-png.flaticon.com/512/268/268187.png?w=740&t=st=1688625874~exp=1688626474~hmac=7cd89b790c831a64b745f7ae648876d83e87f131ab000aa34169e105d3f323aa";

  
  return (
    <div>
      <div
        className=" "
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <SingleMotor imgLink={link1} title="water pump" state="on" />

          <div
            className=" "
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr ",
              gap: ".5rem",
            }}
          >
            <div className="">
              <LittleProp imgLink={link4} title="water level" state="50%" />
            </div>
            <div className="">
              <LittleProp imgLink={link5} title="rain drop" state="no" />
            </div>
          </div>
        </div>

        <div>
          <SingleMotor imgLink={link2} title="lightings" state="on" />
        </div>

        <div>
          <SingleMotor imgLink={link3} title="fertilizing pump" state="on" />
          <div
            className="  "
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr ",
              gap: ".5rem",
            }}
          >
            <div className="">
              <LittleProp imgLink={link7} title="acide " state="off" X />
            </div>
            <div className="">
              <LittleProp imgLink={link6} title="alkile " state="on" X />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between"></div>
    </div>
  );
}

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// components



// layout for page

import Admin from "layouts/Admin.js";
import FileUpload from "../../components/other/FileUpload";
import useFetch from "../../components/other/useFetch";



export default function Ai(props) {
  const router = useRouter();

    const [Longitude, setLongitude] = useState("");
    const [Latitude, setlatitide] = useState("");
    const [PH, setPH] = useState("nebo");
    const [Nitrogen, SetNitrogen] = useState();
    const [Potassium, SetPotassium] = useState();
    const [sulfur, Setsulufur] = useState();
  const [isLoading2, SetLoading2] = useState();

   const api = require("../../api");

   let token;

   if (typeof window !== "undefined") {
     token = localStorage.getItem("token");
   }

   const {
     data: logs,
     isLoading,
     myError,
   } = useFetch(api + "/logs", token, "GET");


  
    const handleSubmit = (e) => {
      e.preventDefault();

 
      const books = { Longitude, Latitude, PH, Nitrogen, Potassium, sulfur };


      fetch("https://pa-api.onrender.com/addlog/64333da6a421c67ef36399dd", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(books),
      }).then(() => {
        console.log("new land added");
        SetLoading2(true);
      });

      return true;
    };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!props.authData.isAuth && !token) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <form className="form" onSubmit={handleSubmit}>
              <div className="title">new land</div>
              <div className="subtitle">add new land</div>
              <div className="my-container">
                <div className="input-container ic2">
                  <input
                    id="firstname"
                    class="input"
                    type="text"
                    placeholder=" "
                    value={Longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label for="firstname" className="placeholder">
                    Longitude
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    id="lastname"
                    class="input"
                    type="text"
                    placeholder=" "
                    value={Latitude}
                    onChange={(e) => setlatitide(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label for="className" className="placeholder">
                    Latitude
                  </label>
                </div>

                <div className="input-container ic2">
                  <input
                    id="email"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={PH}
                    onChange={(e) => setPH(e.target.value)}
                  />
                  <div className="cut cut-short"></div>
                  <label for="email" className="placeholder">
                    PH value
                  </label>
                </div>

                <div className="input-container ic2">
                  <input
                    id="email"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={Nitrogen}
                    onChange={(e) => SetNitrogen(e.target.value)}
                  />
                  <div className="cut cut-short"></div>
                  <label for="email" className="placeholder">
                    Nitrogen value
                  </label>
                </div>

                <div className="input-container ic2">
                  <input
                    id="email"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={Potassium}
                    onChange={(e) => SetPotassium(e.target.value)}
                  />
                  <div className="cut cut-short"></div>
                  <label for="email" className="placeholder">
                    Potassium value
                  </label>
                </div>

                <div className="input-container ic2">
                  <input
                    id="email"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={sulfur}
                    onChange={(e) => Setsulufur(e.target.value)}
                  />
                  <div className="cut cut-short"></div>
                  <label for="email" className="placeholder">
                    Phosphorus value
                  </label>
                </div>
              </div>
              <button type="text" className="submit text-2xl capitalize ">
                submit
              </button>
              <div className="text-center mt-5 capitalize text-2xl text-white font-semibold">
                perfect plant type :-{" "}
                {handleSubmit && logs && logs.logs[9].label}
              </div>
            </form>

            <form className="form">
              <div className="title">check plant</div>
              <div className="subtitle">add plant photo</div>
              <FileUpload />

              <button type="text" className="submit text-2xl capitalize ">
                submit
              </button>
              <div className="text-center mt-5 capitalize text-2xl text-white font-semibold">
                plant plant disease :- <span>no diseases</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Ai.layout = Admin;

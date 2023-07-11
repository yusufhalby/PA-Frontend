import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex  md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <div>
            <img
              className="w-12 mr-2"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/912/912198.png?w=740&t=st=1688744826~exp=1688745426~hmac=c17b928335b11cc1bf1c75dc3ace05e9ad4f39083c7f235700f06e2fc0ec797f"


            />
          </div>
          <a
            className="text-white text-4xl uppercase   hidden lg:inline-block font-mono font-semibold mt-5"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            style={{ fontFamily: "monospace", letterSpacing: "2px" }}
          >
            overview
          </a>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

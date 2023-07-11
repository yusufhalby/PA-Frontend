import React from "react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// components

import MapExample from "components/Maps/MapExample.js";

// layout for page

import Admin from "layouts/Admin.js";
import { MapGl } from "../../components/Maps/MapGl";
import MyMap from "../../components/Maps/NewMap";
import useFetch from "../../components/other/useFetch";


export default function Maps(props) {
  const api = require("../../api");
  const router = useRouter();

  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const {
    data: lands,
    isLoading,
    myError,
  } = useFetch(api + "/lands", token, "GET");


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!props.authData.isAuth && !token) {
      router.push('/auth/login');
    }
  }, );

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            {/* <MapExample /> */}
            {/* <MapGl /> */}
            <MyMap data={lands} />
          </div>
        </div>
      </div>

      {/* <div>

      </div> */}
    </>
  );
}

Maps.layout = Admin;

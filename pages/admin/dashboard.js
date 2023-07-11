import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useFetch from "../../components/other/useFetch";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ValuesContainer from "../../components/other/ValuesContainer";
import SideContainer from "../../components/other/SideContainer";
import Motors from "../../components/other/Motors";

// layout for page

import Admin from "layouts/Admin.js";


export default function Dashboard(props) {



  const api = require('../../api');
  const router = useRouter();

  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }



  const {data: logs, isLoading, myError } = useFetch(
    api+"/logs",token,"GET"
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!props.authData.isAuth && !token) {
      router.push("/auth/login");
    }
    {
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap " style={{ marginTop: "-9rem" }}>
        <div className="flex w-full mb-3 ">
          <ValuesContainer data={logs} />
          <SideContainer data={logs} />
        </div>

        {/* <CardPageVisits data={logs} /> */}
      </div>
      <Motors data={logs} />
      {/* console.log(`this is the data ----* ${logs}`); */}
    </>
  );
}

Dashboard.layout = Admin;

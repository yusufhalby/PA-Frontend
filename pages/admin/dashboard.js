import React, { useState }  from "react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';


// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";


export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/logs');
  const data = await res.json();
  // console.log(data, res);
  return {
    props: { data: data.logs, fallback: false }
  }
}



export default function Dashboard(props) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!props.authData.isAuth && !token) {
      router.push('/auth/login');
    }
  }, []);

  return (
    <>
    
      {/* <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div> */}
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"> */}
          <CardPageVisits data={props.data}/>
        {/* </div> */}
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
      </div>
    </>
  );
}

Dashboard.layout = Admin;

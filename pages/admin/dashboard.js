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
  // const res = await fetch('http://localhost:8080/logs');
  // const data = await res.json();
  // console.log(data, res);
  return {
    // props: { data: data.logs, fallback: false }
    props: { data: [{"_id":"643345bdce70ca9cc1104dbb","ph":7,"humidity":25,"co2":1.5,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","createdAt":"2023-04-09T23:09:49.645Z","updatedAt":"2023-04-09T23:09:49.645Z","__v":0,"id":"643345bdce70ca9cc1104dbb"},{"_id":"643346713ae129b280001540","ph":7.5,"humidity":30,"co2":1.7,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","createdAt":"2023-04-09T23:12:49.374Z","updatedAt":"2023-04-09T23:12:49.374Z","__v":0,"id":"643346713ae129b280001540"},{"_id":"6433467f3ae129b280001542","ph":8,"humidity":90,"co2":1,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","createdAt":"2023-04-09T23:13:03.019Z","updatedAt":"2023-04-09T23:13:03.019Z","__v":0,"id":"6433467f3ae129b280001542"},{"_id":"643346943ae129b280001544","ph":6.8,"humidity":26,"co2":2,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","createdAt":"2023-04-09T23:13:24.479Z","updatedAt":"2023-04-09T23:13:24.479Z","__v":0,"id":"643346943ae129b280001544"},{"_id":"6438caad01374248fe8dc8a4","ph":5,"humidity":2,"co2":21,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","__v":0,"id":"6438caad01374248fe8dc8a4"},{"_id":"6438cab001374248fe8dc8a6","ph":5,"humidity":2,"co2":21,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","__v":0,"id":"6438cab001374248fe8dc8a6"},{"_id":"6438cac201374248fe8dc8a8","ph":7.1,"humidity":22,"co2":3,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","__v":0,"id":"6438cac201374248fe8dc8a8"},{"_id":"6438cac301374248fe8dc8aa","ph":7.1,"humidity":22,"co2":3,"landId":"64334038a421c67ef36399e1","deviceId":"64333da6a421c67ef36399dd","__v":0,"id":"6438cac301374248fe8dc8aa"}], fallback: false }
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

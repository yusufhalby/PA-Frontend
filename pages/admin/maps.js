import React from "react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// components

import MapExample from "components/Maps/MapExample.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Maps(props) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!props.authData.isAuth && !token) {
      router.push('/auth/login');
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
    </>
  );
}

Maps.layout = Admin;

/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useRouter } from "next/router";

export default function Index()
{
    const router = useRouter();


    if (typeof window !== "undefined") {
      
      router.push("/landing");
  }
  return <>
  {/* nothing is here */}
  </>;
}

"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export default function Hero() {
  return (
    <>
    <AuroraBackground>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          MONEY FOR HERE, THERE AND EVERYWHERE.
        </div>
        <div className="font-extralight text-base md:text-4xl text-center dark:text-neutral-200 py-4">
          170 Countries. 50 Currencies. Get The Account Built <br/> To Save You Money Round The World.
        </div>
        <button className="bg-teal-200  cursor-pointer rounded-full w-fit text-black  px-4 py-2">
          Open An Account
        </button>
        <br/>
        <button className=" bg-white border cursor-pointer border-black rounded-full w-fit text-black  px-4 py-2">
          Send Money Now
        </button>
    </AuroraBackground>
    <div
    className=" grid gap-4 sm:grid-cols-2 w-full bg-white h-96 "
    >
      <div
      className="rounded "
      >
        <p className="text-center text-teal-900 font-bold mt-5 text-2xl sm:mt-48 sm:text-4xl">Save Up To 9x <br/> When You Send Currencies</p>
        <p className="text-center ">Sending money shouldn't cost the earth,
          <br/> So we built wise to save you money when transfer and exchange internationally.
          <br/>We charge as little as possible: right now a tiny fee. eventually free.</p>
      </div>
      <div
      className="rounded "
      >
        <img
        className="rounded-full mt-16 size-96 ml-3  sm:size-5/6"
        src="https://i.pinimg.com/564x/c7/d6/87/c7d687fe9daeda60a594089c8d70a2b4.jpg"
        ></img>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
        </>
  );
}

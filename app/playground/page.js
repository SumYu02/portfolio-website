"use client";
import React, { useState, useEffect } from "react";
import Play from "../components/Play";

const page = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [showPlay, setShowPlay] = useState(false);

  useEffect(() => {
    console.log("rerender All");
  });
  useEffect(() => {
    console.log("rerender mount");
  }, []);
  useEffect(() => {
    console.log("rerender A");
    // setA(a + 1);
    return () => {
      console.log("cleanup A");
    };
  }, [a]);
  useEffect(() => {
    console.log("rerender B");
  }, [b]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={() => setA([])}
      >
        Click me
      </button>
      <div>A:{a}</div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={() => setB(b + 1)}
      >
        Click me B
      </button>
      <div>B:{b}</div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={() => setShowPlay(!showPlay)}
      >
        TogglePlay
      </button>
      {showPlay && <Play />}
    </div>
  );
};

export default page;

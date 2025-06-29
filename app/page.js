"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MyProject from "./components/MyProject";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <MyProject />
    </>
  );
}

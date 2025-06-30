"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MyProject from "./components/MyProject";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <MyProject />
      <Contact />
      <Footer />
    </>
  );
}

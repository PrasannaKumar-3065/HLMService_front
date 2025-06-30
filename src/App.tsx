import "./styles.css";
import Navbar from './common/layouts/navbar';
import Footer from './common/layouts/footer';
import LandingService from './common/components/landingService';
import React from "react";

export default function App() {
  return (
    <><Navbar/>
    <LandingService/>
    <Footer/></>
  );
}

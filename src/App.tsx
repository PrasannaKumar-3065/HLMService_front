import "./styles.css";
import Navbar from './common/layouts/navbar';
import Footer from './common/layouts/footer';
import LandingService from './common/components/landingService';
import Login from "./auth/login";
import React from "react";
import LandingTracking from "./common/components/landingTracking";
import BillingView from "./common/components/billingView";

export default function App() {
  return (
    // <><Navbar/>
    // <LandingService/>
    // <LandingTracking/>
    // <Footer/></>
    <BillingView/>
  );
}

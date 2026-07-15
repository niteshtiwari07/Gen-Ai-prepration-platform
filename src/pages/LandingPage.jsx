import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Trusted from "../components/landing/Trusted";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import WhyChoose from "../components/landing/WhyChoose";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import { useEffect } from "react";

const LandingPage = () => {

  useEffect(() => {
    console.log("SETTING LIGHT THEME");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;
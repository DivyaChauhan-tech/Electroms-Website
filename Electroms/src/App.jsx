import React from "react";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navvar";
import Hero from "./components/Hero";
import About from "./components/About";
import SectionWithBg from "./components/SectionWithBg";
import Products from "./components/Products";
import MissionVision from "./components/MissionVision";
import Achievements from "./components/Achievements";
import MapSection from "./components/MapSection";
import OurClient from "./components/OurClient";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Vahancare from "./pages/Vahancare";
import Vahanmoney from "./pages/Vahanmoney";
import Solarenergy from "./pages/Solarenergy";
import Wifisolution from "./pages/Wifisolution";
import Tollmanagementsystem from "./pages/Tollmanagementsystem";
import Healthmonitoringsystem from "./pages/Healthmonitoringsystem";
import Moderneducationtechnology from "./pages/Moderneducationtechnology";
import Mobilevirtualnetwork from "./pages/Mobilevirtualnetwork";
import Sattelitebasedmonitoring from "./pages/Sattelitebasedmonitoring";
import AboutPage from "./pages/About";

const HomePage = () => (
  <>
    <TopHeader />
    <Navbar />
    <Hero />
    <About />
    <SectionWithBg />
    <Products />
    <Achievements />
    <MissionVision />
    <OurClient />
    <MapSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/vahancare" element={<Vahancare />} />
      <Route path="/vahanmoney" element={<Vahanmoney />} />
      <Route path="/solarenergy" element={<Solarenergy />} />
      <Route path="/wifisolution" element={<Wifisolution />} />
      <Route path="/tollmanagementsystem" element={<Tollmanagementsystem />} />
      <Route path="/healthmonitoringsystem" element={<Healthmonitoringsystem />} />
      <Route path="/moderneducationtechnology" element={<Moderneducationtechnology />} />
      <Route path="/mobilevirtualnetwork" element={<Mobilevirtualnetwork />} />
      <Route path="/sattelitebasedmonitoring" element={<Sattelitebasedmonitoring />} />
    </Routes>
  );
}

export default App;

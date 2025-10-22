import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import IntroVideo from "./Introvideo";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowVideo(false);
        setShowContent(true);
      }, 1000);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-black text-white">
      {/* INTRO VIDEO */}
      {showVideo && (
        <div
          className={`intro-container ${
            fadeOut ? "fade-out" : "fade-in"
          } fixed inset-0 z-[9999]`}
        >
          <IntroVideo />
        </div>
      )}

      {/* MAIN WEBSITE */}
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <main className="pt-[80px] min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

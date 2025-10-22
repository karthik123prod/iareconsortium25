import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function IntroVideo() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });

      // Navigate to home after video ends
      const handleEnded = () => navigate("/");
      video.addEventListener("ended", handleEnded);

      return () => video.removeEventListener("ended", handleEnded);
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <video
        ref={videoRef}
        src="/docs/Intro.mp4"  // ✅ must match file name inside public/
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}

// ============================================================
// File: BackgroundVideo.jsx
// ============================================================
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src =
      "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

    // Check for native HLS support
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      // Cleanup
      return () => {
        hls.destroy();
      };
    } else {
      // Fallback: try to play directly (unlikely to work)
      video.src = src;
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-100"
      />
    </div>
  );
};

export default BackgroundVideo;

"use client";

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      {/* SVG Pattern */}
      <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonal-pattern"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,16 L16,0"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect fill="url(#diagonal-pattern)" width="100%" height="100%" />
      </svg>

      {/* Gradient Overlay (Bottom Fade) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)",
        }}
      ></div>
    </div>
  );
};

export default BackgroundPattern;
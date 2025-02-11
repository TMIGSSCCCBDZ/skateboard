import React from 'react';

const TornPaperButton = ({  }) => {
  return (
    <div className="relative inline-block">
      {/* Base button with content */}
      <button
      
        className="
          relative
          px-8
          py-4
          bg-white
          transition-all
          duration-300
          hover:shadow-lg
          active:scale-95
          z-10
        "
      >
        {/* Top torn edge SVG */}
        <svg 
          className="absolute top-0 left-0 w-full h-4 -translate-y-full" 
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,12 Q10,11 15,8 T30,6 T45,2 T60,8 T75,10 T90,7 T100,12 L100,0 L0,0 Z"
            fill="white"
          />
        </svg>

        {/* Bottom torn edge SVG */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-4 translate-y-full" 
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q10,5 15,8 T30,4 T45,10 T60,2 T75,8 T90,5 T100,0 L100,12 L0,12 Z"
            fill="white"
          />
        </svg>

        {/* Left torn edge SVG */}
        <svg 
          className="absolute top-0 left-0 h-full w-4 -translate-x-full" 
          viewBox="0 0 12 100"
          preserveAspectRatio="none"
        >
          <path
            d="M12,0 Q7,10 10,15 T8,30 T4,45 T10,60 T6,75 T8,90 T12,100 L0,100 L0,0 Z"
            fill="white"
          />
        </svg>

        {/* Right torn edge SVG */}
        <svg 
          className="absolute top-0 right-0 h-full w-4 translate-x-full" 
          viewBox="0 0 12 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q5,10 2,15 T4,30 T8,45 T2,60 T6,75 T4,90 T0,100 L12,100 L12,0 Z"
            fill="white"
          />
        </svg>

        {/* Button content */}
        <span className="relative z-20">
         click Me
        </span>
      </button>

      {/* Shadow element */}
      <div className="
        absolute
        inset-0
        bg-gray-200
        translate-x-1
        translate-y-1
        -z-10
      "/>
    </div>
  );
};

export default TornPaperButton;
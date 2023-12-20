import React from "react";

const CircularProgressBar = ({ progress, size }) => {
  const radius = size / 2 - 10; // Adjust radius to account for stroke width
  const strokeWidth = 10; // Width of the progress bar
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (progress / 100) * circumference; // How much of the circle is filled

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#eee"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#40C5E6"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export default CircularProgressBar;

import * as React from "react";

const HomeIcon = ({ size = 18, color = "#fff", ...props }) => (
 <svg
  width={size}
  height={size}
  fill={color}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path
   fillRule="evenodd"
   d="M12 1.55a4.048 4.048 0 0 0-4.05 4.047A4.048 4.048 0 0 0 12 9.644a4.048 4.048 0 0 0 4.05-4.047A4.048 4.048 0 0 0 12 1.55ZM6.45 5.597A5.548 5.548 0 0 1 12 .05a5.548 5.548 0 1 1 0 11.094 5.548 5.548 0 0 1-5.55-5.547ZM8.8 15.94a4.05 4.05 0 0 0-4.05 4.049v2.445h14.5V19.99a4.05 4.05 0 0 0-4.05-4.05H8.8Zm-5.55 4.05a5.55 5.55 0 0 1 5.55-5.55h6.4a5.55 5.55 0 0 1 5.55 5.55v3.946H3.25V19.99Z"
   clipRule="evenodd"
  />
 </svg>
);

export default HomeIcon;
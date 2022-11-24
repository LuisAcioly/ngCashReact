import * as React from "react";

const Icon = ({ size = 100, color = "currentColor", ...props }) => (
 <svg
  width={size}
  height={size}
  fill={color}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z" />
  <path
   fillRule="evenodd"
   d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
   clipRule="evenodd"
  />
 </svg>
);

export default Icon;
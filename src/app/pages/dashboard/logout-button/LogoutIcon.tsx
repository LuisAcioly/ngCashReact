import * as React from "react";

const LogoutIcon = ({ size = 25, color = "#fff", ...props }) => (
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
   d="M1.65 1.65H12.8v1.5H3.15v17.7h9.65v1.5H1.65V1.65Zm15.68 5.02 5.31 5.31-5.289 5.729-1.102-1.018 3.638-3.941H6.4v-1.5h13.39l-3.52-3.52 1.06-1.06Z"
   clipRule="evenodd"
  />
 </svg>
);

export default LogoutIcon;
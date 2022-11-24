import * as React from "react";

const NewTransactionIcon = ({ size = 18, color = "#fff", ...props }) => (
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
   d="M.05 12C.05 5.4 5.4.05 12 .05S23.95 5.4 23.95 12 18.6 23.95 12 23.95.05 18.6.05 12ZM12 1.55C6.229 1.55 1.55 6.23 1.55 12c0 5.771 4.679 10.45 10.45 10.45 5.771 0 10.45-4.679 10.45-10.45 0-5.771-4.679-10.45-10.45-10.45Zm-.75 9.7V6.4h1.5v4.85h4.85v1.5h-4.85v4.85h-1.5v-4.85H6.4v-1.5h4.85Z"
   clipRule="evenodd"
  />
 </svg>
);

export default NewTransactionIcon;
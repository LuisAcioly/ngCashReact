import * as React from "react";

const TransactionIcon = ({ size = 18, color = "#fff", ...props }) => (
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
   d="M11.665.13a.75.75 0 0 1 .67 0l9.6 4.8-.67 1.34L12 1.64 2.735 6.27l-.67-1.342 9.6-4.8ZM1.65 9.55H0v-1.5h24v1.5h-1.65v12.9H24v1.5H0v-1.5h1.65V9.55Zm1.5 0v12.9h17.7V9.55H3.15Zm4.9 9.65v-6.4h1.5v6.4h-1.5Zm6.4 0v-6.4h1.5v6.4h-1.5Z"
   clipRule="evenodd"
  />
 </svg>
);

export default TransactionIcon;
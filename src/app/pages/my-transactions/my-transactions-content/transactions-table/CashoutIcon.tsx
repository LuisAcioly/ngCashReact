import * as React from "react";

const CashOut = ({ size = 18, color = "currentColor", ...props }) => (
 <svg
  width={size}
  height={size}
  fill={color}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path d="M3.6 3.6a1.2 1.2 0 1 0 0 2.4h13.2a1.2 1.2 0 1 0 0-2.4H3.6Zm0 4.8a1.2 1.2 0 1 0 0 2.4h6a1.2 1.2 0 0 0 0-2.4h-6Zm0 4.8a1.2 1.2 0 1 0 0 2.4h4.8a1.2 1.2 0 0 0 0-2.4H3.6Zm12 6a1.2 1.2 0 1 0 2.4 0v-6.703l1.552 1.551a1.2 1.2 0 0 0 1.696-1.696l-3.6-3.6a1.2 1.2 0 0 0-1.696 0l-3.6 3.6a1.2 1.2 0 1 0 1.696 1.696l1.552-1.551V19.2Z" />
 </svg>
);

export default CashOut;
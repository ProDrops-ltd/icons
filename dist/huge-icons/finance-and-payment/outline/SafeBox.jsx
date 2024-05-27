import * as React from "react";
const SvgSafeBox = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <rect width={20} height={20} x={2} y={2} stroke="currentColor" strokeWidth={1.5} rx={4}/>
    <circle cx={4} cy={4} r={4} stroke="currentColor" strokeWidth={1.5} transform="matrix(1 0 0 -1 8 16)"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8V6M12 18v-2M15.598 9.5l1.732-1M6.67 15.5l1.732-1M15.598 14.5l1.732 1M6.67 8.5l1.732 1"/>
  </svg>);
export default SvgSafeBox;
//# sourceMappingURL=SafeBox.jsx.map
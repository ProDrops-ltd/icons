import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 14.25a.75.75 0 0 0 0 1.5zm18 1.5a.75.75 0 0 0 0-1.5zM20.825 22l-.288.692a.75.75 0 0 0 1.033-.6zm-3.079-2.159.645-.383zm1.965 1.696.288-.693zm.733-3.212-.645.383zm.526 2.505.745.092zM3.175 22l-.745.092a.75.75 0 0 0 1.033.6zm.381-3.675-.645-.382zM3.03 20.83l.744-.092zm3.224-.989-.645-.383zm-1.965 1.696L4 20.844zM12.75 2a.75.75 0 0 0-1.5 0zM3 15.75h18v-1.5H3zm17.226 4.988-.145 1.17 1.489.184.145-1.17zm.887.57L20 20.844l-.575 1.386 1.113.462zm-4.012-1.084a4.87 4.87 0 0 0 2.323 2.006l.575-1.386a3.37 3.37 0 0 1-1.608-1.386zm2.698-1.516c.365.616.514 1.327.427 2.03l1.489.184a4.7 4.7 0 0 0-.626-2.98zM4 20.844l-1.114.463.576 1.386 1.114-.463zm-.082 1.064-.145-1.17-1.488.184.144 1.17zm-1.008-3.965a4.7 4.7 0 0 0-.625 2.979l1.488-.184a3.2 3.2 0 0 1 .427-2.03zm2.698 1.515A3.37 3.37 0 0 1 4 20.844l.576 1.386a4.87 4.87 0 0 0 2.322-2.006zM9.635 7.052c0-1.24 1.04-2.281 2.365-2.281v-1.5c-2.115 0-3.865 1.674-3.865 3.781zM12 4.771c1.326 0 2.365 1.04 2.365 2.281h1.5c0-2.107-1.75-3.781-3.865-3.781zm2.365 2.281c0 .424-.12.82-.328 1.16l1.278.784c.349-.567.55-1.233.55-1.944zm-.334 1.935 5.768 9.721 1.29-.765L15.32 8.22zm-4.068-.775a2.2 2.2 0 0 1-.328-1.16h-1.5c0 .71.201 1.376.55 1.944zM4.201 18.708 9.97 8.987l-1.29-.766-5.768 9.722zm9.836-10.496a2.38 2.38 0 0 1-2.004 1.12l.02 1.5a3.88 3.88 0 0 0 3.262-1.836zm-2.004 1.12L12 9.334v1.5h.053zm-.635.368-5.79 9.758 1.29.766 5.79-9.758zM12 9.333h-.033l-.02 1.5H12zm-.033 0a2.38 2.38 0 0 1-2.004-1.121l-1.278.784a3.88 3.88 0 0 0 3.262 1.837zm6.424 10.125L12.601 9.7l-1.29.766 5.79 9.758zM12.75 4.021V2h-1.5v2.02z"
    />
  </svg>
);
export default SvgCompass;
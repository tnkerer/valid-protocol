// LiquidSection.tsx
import React from 'react';

const pillars = [
  {
    label: "Secure & Reliable",
    heading: "Institutional-Grade Protection",
    text: "Backed by enterprise-level security, ensuring trust, transparency, and long-term stability."
  },
  {
    label: "Profitable & Flexible",
    heading: "Multi-tier Staking Solutions",
    text: "Stake smarter with stXDC: Compare our three options—Anchor, Native, Liquid—and find your ideal solution."
  },
  {
    label: "Connected & Versatile",
    heading: "Custom Protocol Solutions",
    text: "Craft staking solutions on proven infrastructure or streamline your treasury with a fully customized staking setup."
  },
];

const LiquidSection: React.FC = () => {
  return (
    <section
      id="liquid"
      className="relative py-24 overflow-hidden bg-transparent min-w-[470px]" 
    >
      {/* Background SVG wireframe (abstract lines) */}


      <div className="hidden md:flex absolute -left-96 top-40 inset-0 -z-10 justify-center items-center">
        <svg width="1080" height="1464" viewBox="0 0 1440 1953" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_0_989" fill="white">
            <path d="M128 253.158C128 164.793 199.634 93.1584 288 93.1584V276.158H128V253.158Z" />
          </mask>
          <path d="M127 253.158C127 164.241 199.082 92.1584 288 92.1584V94.1584C200.187 94.1584 129 165.345 129 253.158H127ZM288 276.158H128H288ZM127 276.158V253.158C127 164.241 199.082 92.1584 288 92.1584V94.1584C200.187 94.1584 129 165.345 129 253.158V276.158H127ZM288 93.1584V276.158V93.1584Z" fill="#D2D2D2" mask="url(#path-1-inside-1_0_989)" />
          <path d="M426 0.658447H1439.5V275.658H426C350.061 275.658 288.5 214.098 288.5 138.158C288.5 62.2193 350.061 0.658447 426 0.658447Z" stroke="url(#paint0_linear_0_989)" />
          <mask id="path-4-inside-2_0_989" fill="white">
            <path d="M128 276.158H129V1558.16H128V276.158Z" />
          </mask>
          <path d="M129 1558.16V276.158H127V1558.16H129Z" fill="#D2D2D2" mask="url(#path-4-inside-2_0_989)" />
          <path d="M309.354 462.512C309.549 462.317 309.549 462 309.354 461.805L306.172 458.623C305.976 458.428 305.66 458.428 305.464 458.623C305.269 458.818 305.269 459.135 305.464 459.33L308.293 462.158L305.464 464.987C305.269 465.182 305.269 465.499 305.464 465.694C305.66 465.889 305.976 465.889 306.172 465.694L309.354 462.512ZM129 462.658H309V461.658H129V462.658Z" fill="#D2D2D2" />
          <circle cx="129" cy="462" r="6" fill="#D2D2D2" />
          <path d="M309.354 1010.51C309.549 1010.32 309.549 1010 309.354 1009.8L306.172 1006.62C305.976 1006.43 305.66 1006.43 305.464 1006.62C305.269 1006.82 305.269 1007.13 305.464 1007.33L308.293 1010.16L305.464 1012.99C305.269 1013.18 305.269 1013.5 305.464 1013.69C305.66 1013.89 305.976 1013.89 306.172 1013.69L309.354 1010.51ZM129 1010.66H309V1009.66H129V1010.66Z" fill="#D2D2D2" />
          <circle cx="129" cy="1010" r="6" fill="#D2D2D2" />
          <path d="M309.354 1558.51C309.549 1558.32 309.549 1558 309.354 1557.8L306.172 1554.62C305.976 1554.43 305.66 1554.43 305.464 1554.62C305.269 1554.82 305.269 1555.13 305.464 1555.33L308.293 1558.16L305.464 1560.99C305.269 1561.18 305.269 1561.5 305.464 1561.69C305.66 1561.89 305.976 1561.89 306.172 1561.69L309.354 1558.51ZM129 1558.66H309V1557.66H129V1558.66Z" fill="#D2D2D2" />
          <circle cx="129" cy="1558" r="6" fill="#D2D2D2" />
          <circle cx="129" cy="1558" r="6" fill="#D2D2D2" />
          <path d="M341.5 462.158C341.5 430.402 367.244 404.658 399 404.658H456.5V519.658H399C367.244 519.658 341.5 493.915 341.5 462.158Z" stroke="url(#paint1_linear_0_989)" />
          <g filter="url(#filter0_d_0_989)">
            <rect x="371" y="434.158" width="56" height="56" rx="28" fill="#DC7433" />
            <path d="M409 460.977V456.321C409 455.259 408.233 454.373 407.239 454.215C406.086 454.033 404.596 453.734 403.508 453.29C402.408 452.843 401.087 452.001 400.16 451.363C399.815 451.126 399.412 451 399 451C398.588 451 398.185 451.126 397.84 451.363C396.914 452.001 395.592 452.843 394.492 453.29C393.402 453.734 391.914 454.033 390.761 454.215C389.767 454.373 389 455.259 389 456.321V460.977C389 463.329 389.605 465.637 390.75 467.654C391.895 469.671 393.537 471.321 395.501 472.427L395.779 472.585L398.158 473.797C398.42 473.931 398.708 474 399 474C399.292 474 399.58 473.931 399.842 473.797L402.219 472.585L402.498 472.427C404.462 471.321 406.105 469.671 407.25 467.654C408.395 465.637 409 463.329 409 460.977Z" fill="white" />
          </g>
          <path d="M341.5 1012.16C341.5 980.402 367.244 954.658 399 954.658H456.5V1069.66H399C367.244 1069.66 341.5 1043.91 341.5 1012.16Z" stroke="url(#paint2_linear_0_989)" />
          <g filter="url(#filter1_d_0_989)">
            <rect x="371" y="984.158" width="56" height="56" rx="28" fill="#59C559" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M412.333 1012C412.333 1019.36 406.364 1025.33 399 1025.33C396.867 1025.33 394.851 1024.83 393.064 1023.94C392.592 1023.7 392.047 1023.63 391.532 1023.76L388.564 1024.56C388.27 1024.64 387.961 1024.64 387.667 1024.56C387.374 1024.48 387.106 1024.32 386.891 1024.11C386.676 1023.89 386.522 1023.63 386.443 1023.33C386.364 1023.04 386.364 1022.73 386.443 1022.44L387.236 1019.47C387.365 1018.95 387.302 1018.41 387.057 1017.94C386.14 1016.09 385.663 1014.06 385.667 1012C385.667 1004.64 391.636 998.667 399 998.667C406.364 998.667 412.333 1004.64 412.333 1012ZM399 1005.67C399.265 1005.67 399.52 1005.77 399.707 1005.96C399.895 1006.15 400 1006.4 400 1006.67V1006.68C401.452 1007.05 402.667 1008.19 402.667 1009.78C402.667 1010.04 402.561 1010.3 402.374 1010.48C402.186 1010.67 401.932 1010.78 401.667 1010.78C401.401 1010.78 401.147 1010.67 400.96 1010.48C400.772 1010.3 400.667 1010.04 400.667 1009.78C400.667 1009.27 400.099 1008.56 399 1008.56C397.901 1008.56 397.333 1009.27 397.333 1009.78C397.333 1010.29 397.901 1011 399 1011C400.847 1011 402.667 1012.28 402.667 1014.22C402.667 1015.81 401.452 1016.95 400 1017.32V1017.33C400 1017.6 399.895 1017.85 399.707 1018.04C399.52 1018.23 399.265 1018.33 399 1018.33C398.735 1018.33 398.48 1018.23 398.293 1018.04C398.105 1017.85 398 1017.6 398 1017.33V1017.32C396.548 1016.95 395.333 1015.81 395.333 1014.22C395.333 1013.96 395.439 1013.7 395.626 1013.52C395.814 1013.33 396.068 1013.22 396.333 1013.22C396.599 1013.22 396.853 1013.33 397.04 1013.52C397.228 1013.7 397.333 1013.96 397.333 1014.22C397.333 1014.73 397.901 1015.44 399 1015.44C400.099 1015.44 400.667 1014.73 400.667 1014.22C400.667 1013.71 400.099 1013 399 1013C397.153 1013 395.333 1011.72 395.333 1009.78C395.333 1008.19 396.548 1007.05 398 1006.68V1006.67C398 1006.4 398.105 1006.15 398.293 1005.96C398.48 1005.77 398.735 1005.67 399 1005.67Z" fill="white" />
          </g>
          <path d="M341.5 1562.16C341.5 1530.4 367.244 1504.66 399 1504.66H456.5V1619.66H399C367.244 1619.66 341.5 1593.91 341.5 1562.16Z" stroke="url(#paint3_linear_0_989)" />
          <g filter="url(#filter2_d_0_989)">
            <rect x="371" y="1534.16" width="56" height="56" rx="28" fill="#EB0029" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M388.333 1554C389.041 1554 389.719 1553.72 390.219 1553.22C390.719 1552.72 391 1552.04 391 1551.33C391 1550.63 390.719 1549.95 390.219 1549.45C389.719 1548.95 389.041 1548.67 388.333 1548.67C387.626 1548.67 386.948 1548.95 386.448 1549.45C385.948 1549.95 385.667 1550.63 385.667 1551.33C385.667 1552.04 385.948 1552.72 386.448 1553.22C386.948 1553.72 387.626 1554 388.333 1554ZM389.667 1574C390.728 1574 391.745 1573.58 392.495 1572.83C393.245 1572.08 393.667 1571.06 393.667 1570C393.667 1568.94 393.245 1567.92 392.495 1567.17C391.745 1566.42 390.728 1566 389.667 1566C388.606 1566 387.588 1566.42 386.838 1567.17C386.088 1567.92 385.667 1568.94 385.667 1570C385.667 1571.06 386.088 1572.08 386.838 1572.83C387.588 1573.58 388.606 1574 389.667 1574ZM408.333 1575.33C409.394 1575.33 410.412 1574.91 411.162 1574.16C411.912 1573.41 412.333 1572.39 412.333 1571.33C412.333 1570.27 411.912 1569.26 411.162 1568.51C410.412 1567.76 409.394 1567.33 408.333 1567.33C407.272 1567.33 406.255 1567.76 405.505 1568.51C404.755 1569.26 404.333 1570.27 404.333 1571.33C404.333 1572.39 404.755 1573.41 405.505 1574.16C406.255 1574.91 407.272 1575.33 408.333 1575.33ZM397.667 1564.67C399.081 1564.67 400.438 1564.11 401.438 1563.1C402.438 1562.1 403 1560.75 403 1559.33C403 1557.92 402.438 1556.56 401.438 1555.56C400.438 1554.56 399.081 1554 397.667 1554C396.252 1554 394.896 1554.56 393.895 1555.56C392.895 1556.56 392.333 1557.92 392.333 1559.33C392.333 1560.75 392.895 1562.1 393.895 1563.1C394.896 1564.11 396.252 1564.67 397.667 1564.67ZM405.667 1554C406.374 1554 407.052 1553.72 407.552 1553.22C408.052 1552.72 408.333 1552.04 408.333 1551.33C408.333 1550.63 408.052 1549.95 407.552 1549.45C407.052 1548.95 406.374 1548.67 405.667 1548.67C404.959 1548.67 404.281 1548.95 403.781 1549.45C403.281 1549.95 403 1550.63 403 1551.33C403 1552.04 403.281 1552.72 403.781 1553.22C404.281 1553.72 404.959 1554 405.667 1554Z" fill="white" />
            <path d="M389.5 1552.5L394.5 1557.5M405.501 1551.5L399.501 1557.5M407.5 1570.5L399.501 1560.5M390.333 1568.5L395.5 1563.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <filter id="filter0_d_0_989" x="359" y="426.158" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_989" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_989" result="shape" />
            </filter>
            <filter id="filter1_d_0_989" x="359" y="976.158" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_989" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_989" result="shape" />
            </filter>
            <filter id="filter2_d_0_989" x="359" y="1526.16" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_989" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_989" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_0_989" x1="288" y1="138.565" x2="1439.84" y2="124.399" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D2D2D2" />
              <stop offset="1" stop-color="#D2D2D2" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_0_989" x1="341" y1="462.329" x2="457" y2="461.988" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D2D2D2" />
              <stop offset="1" stop-color="#D2D2D2" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_0_989" x1="341" y1="1012.33" x2="457" y2="1011.99" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D2D2D2" />
              <stop offset="1" stop-color="#D2D2D2" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint3_linear_0_989" x1="341" y1="1562.33" x2="457" y2="1561.99" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D2D2D2" />
              <stop offset="1" stop-color="#D2D2D2" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/*  */}
      </div>

      {/* Content */}
      <div className="container mx-auto md:space-y-24 px-6">
        <div className="max-w-3xl mx-auto text-left mb-12">
          <p className="text-gray-600 font-bold text-lg">
            stXDC
          </p>
          <h2 className="text-4xl md:text-4xl mb-4">
            Secure &amp; Liquid
          </h2>
          <p className="text-gray-600 text-lg">
            Built for institutions and DeFi users, stXDC provides unmatched security,
            deep liquidity, and seamless rewards—without locking your assets.
          </p>
        </div>
        <div className="md:ml-40 xl:ml-96 md:space-y-60 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Optional bullet circle */}
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0 md:hidden">
                {index + 1}
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pillar.label}
                </h3>
                <p className="text-4xl text-gray-800 font-medium mb-1">
                  {pillar.heading}
                </p>
                <p className="text-2xl text-gray-600 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquidSection;

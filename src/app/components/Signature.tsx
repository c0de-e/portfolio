"use client";
import { RefObject, useEffect, useRef } from "react";
import "@/app/styles/signature.css";

export default function Signature() {
  const svgRef = useRef<SVGGElement>(null);
  useEffect(() => drawSignature(svgRef), [svgRef]);
  return (
    <div className="mx-auto w-full flex-initial">
      <svg
        className="svg-recolor flex-no-shrink w-full fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 664.6666666666666 292"
        width="664.6666666666666"
        height="292"
      >
        {/* prettier-ignore */}
        <g ref={svgRef} className="signature" transform="translate(25)">
                    <path d="M 98.667,166.333 C 104.058,164.821 103.333,164.000 108.000,161.667" strokeWidth="5.087" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 108.000,161.667 C 113.772,155.979 110.724,159.487 112.000,155.667" strokeWidth="4.766" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 112.000,155.667 C 103.626,156.187 108.106,154.979 96.667,159.667" strokeWidth="4.046" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 96.667,159.667 C 88.479,164.729 88.293,163.854 81.333,171.000" strokeWidth="2.957" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 81.333,171.000 C 71.501,178.847 72.146,179.062 64.000,188.333" strokeWidth="2.467" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 64.000,188.333 C 59.704,193.858 60.167,193.181 58.667,199.667" strokeWidth="2.961" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 58.667,199.667 C 57.639,206.082 58.037,203.192 60.667,207.000" strokeWidth="3.554" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 60.667,207.000 C 71.116,208.684 68.639,209.416 80.667,206.333" strokeWidth="3.545" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 80.667,206.333 C 92.409,201.502 92.783,203.351 104.000,196.333" strokeWidth="2.600" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 104.000,196.333 C 117.082,190.503 117.075,190.502 130.000,184.333" strokeWidth="2.162" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 130.000,184.333 C 139.438,179.857 139.415,179.837 148.667,175.000" strokeWidth="2.404" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 148.667,175.000 C 156.470,171.505 152.105,173.191 155.333,171.000" strokeWidth="3.229" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 155.333,171.000 C 148.777,170.767 153.470,170.172 142.667,172.333" strokeWidth="4.005" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 142.667,172.333 C 136.068,175.185 135.777,174.100 129.333,177.667" strokeWidth="3.284" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 129.333,177.667 C 117.781,183.456 123.401,179.852 117.333,181.667" strokeWidth="3.243" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 117.333,181.667 C 121.684,174.963 116.781,179.456 127.333,169.667" strokeWidth="4.058" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 127.333,169.667 C 132.901,165.511 132.351,164.963 138.667,161.667" strokeWidth="3.398" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 138.667,161.667 C 143.696,158.274 140.901,160.177 143.333,159.000" strokeWidth="3.967" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 143.333,159.000 C 140.271,162.644 142.696,160.274 136.667,165.667" strokeWidth="4.244" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 136.667,165.667 C 129.517,170.815 129.938,171.310 122.667,176.333" strokeWidth="3.012" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 122.667,176.333 C 117.318,180.349 117.517,180.482 112.667,185.000" strokeWidth="3.058" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 112.667,185.000 C 107.934,188.805 110.651,187.016 109.333,189.667" strokeWidth="3.780" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 109.333,189.667 C 115.774,191.976 112.267,191.472 121.333,190.333" strokeWidth="4.036" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 121.333,190.333 C 130.170,185.956 130.440,187.643 138.667,181.000" strokeWidth="2.842" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 138.667,181.000 C 146.356,176.808 146.170,176.623 153.333,171.667" strokeWidth="2.738" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 153.333,171.667 C 164.498,162.997 159.022,167.475 164.000,162.333" strokeWidth="2.905" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 164.000,162.333 C 157.313,165.156 163.498,161.663 151.333,169.000" strokeWidth="3.787" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 151.333,169.000 C 147.994,171.359 147.980,171.156 145.333,174.333" strokeWidth="3.758" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 145.333,174.333 C 139.296,180.083 142.328,177.693 140.000,181.667" strokeWidth="3.746" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 140.000,181.667 C 144.538,182.257 140.630,183.083 148.000,180.333" strokeWidth="4.270" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 148.000,180.333 C 156.410,174.816 156.538,175.590 164.000,168.333" strokeWidth="2.932" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 164.000,168.333 C 172.306,160.942 172.410,161.150 180.000,153.000" strokeWidth="2.571" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 180.000,153.000 C 182.699,150.219 182.639,150.276 184.667,147.000" strokeWidth="3.330" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 184.667,147.000 C 188.796,141.366 186.366,144.219 187.333,141.000" strokeWidth="3.808" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 187.333,141.000 C 181.477,142.114 184.796,140.366 176.667,145.000" strokeWidth="4.040" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 176.667,145.000 C 171.405,148.458 171.477,148.114 167.333,153.000" strokeWidth="3.525" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 167.333,153.000 C 161.331,158.340 162.738,158.125 159.333,164.333" strokeWidth="3.214" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 159.333,164.333 C 159.029,168.831 158.331,167.340 161.333,171.000" strokeWidth="3.721" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 161.333,171.000 C 165.809,173.705 164.695,174.164 170.667,175.000" strokeWidth="3.579" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 170.667,175.000 C 175.975,176.072 175.809,176.371 181.333,176.333" strokeWidth="3.426" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 181.333,176.333 C 189.692,176.804 189.641,176.739 198.000,176.333" strokeWidth="2.994" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 198.000,176.333 C 207.335,175.348 207.358,175.804 216.667,174.333" strokeWidth="2.762" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 216.667,174.333 C 227.593,171.568 222.668,173.681 228.667,173.000" strokeWidth="3.111" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 228.667,173.000 C 225.079,176.926 229.593,174.235 220.667,179.667" strokeWidth="3.844" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 220.667,179.667 C 202.844,190.321 203.079,190.592 184.667,200.333" strokeWidth="1.904" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 184.667,200.333 C 163.214,211.450 163.510,211.987 142.000,223.000" strokeWidth="1.573" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 142.000,223.000 C 133.126,227.663 133.214,227.784 124.667,233.000" strokeWidth="2.124" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 124.667,233.000 C 105.043,245.256 105.126,245.329 86.000,258.333" strokeWidth="1.655" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 86.000,258.333 C 77.551,264.525 77.376,264.256 69.333,271.000" strokeWidth="2.179" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 272.000,146.333 C 270.556,148.949 270.667,149.000 269.333,151.667" strokeWidth="5.041" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 269.333,151.667 C 267.844,155.748 267.556,155.616 266.000,159.667" strokeWidth="4.042" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 266.000,159.667 C 261.969,166.849 262.511,167.081 258.667,174.333" strokeWidth="3.205" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 258.667,174.333 C 255.376,179.212 256.969,178.182 256.000,182.333" strokeWidth="3.574" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 256.000,182.333 C 258.552,185.281 256.376,184.212 260.667,184.333" strokeWidth="4.395" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 260.667,184.333 C 268.112,179.149 268.219,180.948 275.333,173.667" strokeWidth="3.144" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 275.333,173.667 C 286.139,165.503 286.112,165.482 296.667,157.000" strokeWidth="2.392" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 296.667,157.000 C 303.451,151.460 303.472,151.503 310.000,145.667" strokeWidth="2.591" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 310.000,145.667 C 314.531,141.401 312.117,143.794 314.000,141.667" strokeWidth="3.551" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 305.333,163.667 C 302.328,162.609 302.667,163.667 300.000,163.667" strokeWidth="5.445" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 300.000,163.667 C 295.091,166.714 294.994,165.942 290.667,170.333" strokeWidth="3.795" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 290.667,170.333 C 285.528,173.331 287.757,172.714 285.333,175.667" strokeWidth="3.865" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 285.333,175.667 C 287.645,178.687 285.195,177.331 290.000,178.333" strokeWidth="4.636" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 290.000,178.333 C 294.563,176.334 294.312,177.687 298.667,173.667" strokeWidth="3.828" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 298.667,173.667 C 301.000,171.667 301.229,172.001 303.333,169.667" strokeWidth="3.990" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 303.333,169.667 C 308.702,165.081 305.667,167.667 308.000,165.667" strokeWidth="4.130" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 308.000,165.667 C 302.501,168.702 306.702,166.748 299.333,173.000" strokeWidth="4.426" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 299.333,173.000 C 297.113,178.333 297.834,175.035 298.667,178.333" strokeWidth="4.719" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 298.667,178.333 C 304.315,176.136 302.113,178.333 309.333,173.000" strokeWidth="4.292" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 309.333,173.000 C 312.790,168.146 312.315,171.136 314.667,168.333" strokeWidth="4.507" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 314.667,168.333 C 315.662,170.960 316.123,168.479 316.000,173.667" strokeWidth="5.028" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 358.000,151.000 C 352.328,153.034 353.333,154.000 348.667,157.000" strokeWidth="5.220" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 348.667,157.000 C 344.441,162.326 344.328,161.700 342.000,168.333" strokeWidth="3.519" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 342.000,168.333 C 339.602,173.552 340.107,172.993 340.000,178.333" strokeWidth="3.460" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 340.000,178.333 C 340.623,183.249 340.268,181.552 343.333,184.333" strokeWidth="3.867" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 343.333,184.333 C 348.592,185.000 347.290,185.916 353.333,183.667" strokeWidth="3.572" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 353.333,183.667 C 359.447,181.742 359.259,182.000 364.667,178.333" strokeWidth="3.269" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 364.667,178.333 C 376.477,171.451 375.780,171.076 386.000,162.333" strokeWidth="2.496" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 386.000,162.333 C 393.790,155.210 392.144,156.451 396.000,148.333" strokeWidth="2.643" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 396.000,148.333 C 394.499,144.916 396.790,145.877 392.000,143.667" strokeWidth="3.534" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 392.000,143.667 C 389.293,143.278 389.832,142.583 386.667,143.667" strokeWidth="3.987" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 386.667,143.667 C 380.218,144.618 380.293,144.611 374.000,146.333" strokeWidth="3.329" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 394.000,163.000 C 389.101,171.154 391.667,170.333 389.333,177.667" strokeWidth="5.223" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 389.333,177.667 C 391.772,181.898 389.434,180.488 394.667,181.667" strokeWidth="4.830" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 394.667,181.667 C 400.999,179.992 400.105,181.232 406.000,176.333" strokeWidth="3.521" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 406.000,176.333 C 414.340,169.327 414.666,169.992 422.000,161.667" strokeWidth="2.642" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 422.000,161.667 C 430.711,153.138 426.007,157.660 429.333,153.000" strokeWidth="3.114" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 429.333,153.000 C 421.583,156.250 427.377,152.804 415.333,161.000" strokeWidth="3.844" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 412.667,177.667 C 418.276,176.161 417.667,175.333 422.667,173.000" strokeWidth="4.943" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 422.667,173.000 C 426.243,169.529 426.610,170.161 429.333,165.667" strokeWidth="3.881" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 429.333,165.667 C 435.800,157.737 432.910,161.196 436.000,156.333" strokeWidth="3.500" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 436.000,156.333 C 430.857,158.086 436.133,155.403 430.000,161.000" strokeWidth="4.467" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 430.000,161.000 C 430.193,166.018 429.190,163.753 432.667,167.667" strokeWidth="4.573" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 432.667,167.667 C 436.687,168.923 435.193,169.351 440.000,167.667" strokeWidth="4.593" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 440.000,167.667 C 450.404,160.533 446.354,165.257 452.000,160.333" strokeWidth="4.145" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 452.000,160.333 C 448.126,163.277 453.070,160.200 445.333,167.000" strokeWidth="4.549" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 457.333,151.000 C 454.949,153.623 455.000,153.667 452.667,156.333" strokeWidth="5.144" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 452.667,156.333 C 449.593,159.942 449.615,159.957 446.667,163.667" strokeWidth="3.899" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 446.667,163.667 C 442.280,169.293 442.260,169.275 438.000,175.000" strokeWidth="3.270" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 436.667,168.333 C 439.893,166.572 440.000,167.000 443.333,165.667" strokeWidth="4.952" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 443.333,165.667 C 446.322,165.131 446.226,164.905 449.333,165.000" strokeWidth="4.311" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 449.333,165.000 C 454.047,165.478 453.989,164.798 458.667,165.000" strokeWidth="3.751" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 458.667,165.000 C 463.701,164.146 463.714,164.478 468.667,163.000" strokeWidth="3.524" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 468.667,163.000 C 472.626,162.598 472.368,162.146 476.000,161.000" strokeWidth="3.771" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 433.333,163.667 C 433.587,169.029 435.000,167.333 436.667,171.000" strokeWidth="4.930" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 436.667,171.000 C 443.347,172.616 441.921,174.363 450.000,174.333" strokeWidth="3.498" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 450.000,174.333 C 453.647,175.412 453.680,175.283 457.333,176.333" strokeWidth="3.713" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 471.333,169.000 C 474.993,169.503 474.667,168.667 478.000,168.333" strokeWidth="5.343" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 478.000,168.333 C 484.265,165.265 480.993,167.170 483.333,164.333" strokeWidth="4.878" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 483.333,164.333 C 477.878,162.246 481.932,162.932 473.333,163.667" strokeWidth="4.719" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 473.333,163.667 C 467.118,166.735 467.212,165.580 462.000,171.000" strokeWidth="3.554" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 462.000,171.000 C 455.957,175.123 459.118,173.402 457.333,177.000" strokeWidth="3.732" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 457.333,177.000 C 463.180,180.145 459.624,180.123 469.333,181.000" strokeWidth="3.960" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 469.333,181.000 C 475.349,180.846 475.180,181.812 481.333,180.333" strokeWidth="3.470" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 481.333,180.333 C 487.016,179.779 487.016,179.846 492.667,179.000" strokeWidth="3.337" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 492.667,179.000 C 496.750,178.646 496.683,178.446 500.667,177.667" strokeWidth="3.653" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 500.667,177.667 C 505.824,176.724 503.417,176.979 506.000,175.667" strokeWidth="4.028" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 499.333,183.000 C 500.536,178.106 501.000,178.333 502.667,173.667" strokeWidth="5.288" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 502.667,173.667 C 504.734,169.799 504.536,169.773 507.333,166.333" strokeWidth="4.020" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 507.333,166.333 C 510.371,160.525 509.734,163.132 512.667,160.333" strokeWidth="3.878" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 512.667,160.333 C 514.907,162.825 514.371,160.191 515.333,165.667" strokeWidth="4.622" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 523.333,164.333 C 531.133,158.266 527.000,162.000 530.667,159.667" strokeWidth="5.163" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 530.667,159.667 C 525.344,165.785 529.800,162.266 520.667,172.333" strokeWidth="4.685" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 520.667,172.333 C 518.800,175.238 518.677,175.118 517.333,178.333" strokeWidth="4.189" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 517.333,178.333 C 514.146,184.479 515.800,181.571 514.667,185.000" strokeWidth="3.970" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 514.667,185.000 C 516.796,182.423 515.146,185.479 519.333,180.333" strokeWidth="4.711" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 519.333,180.333 C 522.358,177.322 522.462,177.756 526.000,175.667" strokeWidth="4.799" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 526.000,175.667 C 530.080,174.914 529.691,173.989 534.000,173.667" strokeWidth="4.043" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 534.000,173.667 C 537.426,172.525 537.413,172.581 540.667,171.000" strokeWidth="3.981" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 540.667,171.000 C 543.222,169.957 543.093,169.858 545.333,168.333" strokeWidth="4.139" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 513.333,165.000 C 518.000,167.667 518.000,167.667 522.667,170.333" strokeWidth="4.734" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 522.667,170.333 C 529.709,174.261 529.667,174.333 536.667,178.333" strokeWidth="3.341" stroke="black" fill="none" strokeLinecap="round"></path>
                    <path d="M 536.667,178.333 C 543.318,182.360 543.376,182.261 550.000,186.333" strokeWidth="2.984" stroke="black" fill="none" strokeLinecap="round"></path>
                </g>
      </svg>
    </div>
  );
}

const drawSignature = (ref: RefObject<SVGGElement>) => {
  const paths = Array.from(
    ref.current?.children as HTMLCollectionOf<SVGPathElement>,
  );
  if (!paths.length) return;

  let drawDelay = 0;
  let totalLength = 0;
  paths.forEach((path) => (totalLength += path.getTotalLength()));

  paths.forEach((path) => {
    const pathLength = path.getTotalLength();
    const duration = pathLength / totalLength;

    path.style.animationDuration = `${duration}s`;
    path.style.animationDelay = `${drawDelay}s`;

    path.setAttribute("stroke-dasharray", pathLength.toString());
    path.setAttribute("stroke-dashoffset", pathLength.toString());

    drawDelay += duration + 0.02;
  });
};

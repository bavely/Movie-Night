import React from "react";
import SearchBar from "../components/SearchBar";
import "../utils/styles/home.css";
import png from "../utils/imgs/image-from-rawpixel-id-6772650-original.png";
export const Main = () => {
  return (
    <div className=" flex flex-col  ">
      <div className=" h-64 self-center rounded-full border-4  shadow-white/50 shadow-xl max-w-64 w-64 mt-12  flex justify-center heading">
        <svg
          className=" self-center "
          width="400"
          height="400"
          viewBox="75 50 350 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text style={{ fill: "white", fontSize: "20px" }}>
            <tspan x="64%" y="45%" className=" self-center ">
              IT'S
            </tspan>
          </text>
          <text style={{ fill: "white" }}>
            <tspan x="30%" y="60%" className="heading self-center ">
              MOVIE NIGHT
            </tspan>
          </text>
          <image href={png} height="150" width="150" x={"50%"} y={"60%"} />
          <defs>
            <path
              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              id="a"
            />
          </defs>
          <g>
            <text>
              <textPath
                xlinkHref="#a"
                style={{ fill: "white", fontSize: "30px" }}
              >
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; BUCKLE UP
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <div className="h-64 self-center  max-w-64 w-64 mt-12  flex justify-center formContainer ">
        <SearchBar />
      </div>
    </div>
  );
};

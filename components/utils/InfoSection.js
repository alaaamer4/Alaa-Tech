import React from "react";
import img from "../../images/defaultBcg.jpeg";
import { btn } from "./tailwindutil";
const InfoSection = ({ title, position, img }) => {
  return (
    <div className="my-5 grid px-32 grid-cols-2 gap-4  ">
      <div
        className="relative rounded shadow-xl border-2 border-solid border-white "
        style={{ width: "500px" }}
      >
        <img src={`${img}?lqip`} className="rounded" />
        <img
          src={`${img}?webp`}
          className="absolute top-0 left-0 bottom-0 right-0 rounded z-10 "
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold uppercase">{title}</h1>
        <div className="h-1 ml-3 w-20 bg-indigo-600 rounded-full mb-4 "></div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          molestiae fugit, minima tenetur odit ad veniam est neque distinctio
          earum repellat laudantium at veritatis. Nisi esse similique provident
          maiores molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Animi molestiae fugit, minima tenetur odit ad veniam est neque
          distinctio earum repellat laudantium at veritatis. Nisi esse similique
          provident maiores molestiae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Animi molestiae fugit, minima tenetur odit ad veniam
          est neque distinctio earum repellat laudantium at veritatis. Nisi esse
          similique provident maiores molestiae? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Animi molestiae
        </div>

        <a href="#" className={`${btn} float-right  `}>
          More info
        </a>
      </div>
    </div>
  );
};
InfoSection.defaultProps = {
  img,
};
export default InfoSection;

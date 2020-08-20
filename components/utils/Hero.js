import React from "react";
import img from "../../images/defaultBcg.jpeg";
import Link from "next/link";
import { btn } from "./tailwindutil";
const Hero = ({ title, img, max, link, contain }) => {
  return (
    <div
      className=" flex flex-col justify-end items-center pb-10 "
      style={{
        backgroundImage: `url(${img}?lpiq) no-repeat center center/${
          contain ? "contain" : "cover"
        }`,
        background: ` url(${img}?webp) no-repeat center center/${
          contain ? "contain" : "cover"
        } `,
        height: `${max ? "90vh" : "65vh"}`,
      }}
    >
      {title && (
        <h1 className=" text-5xl  text-gray-100 font-bold uppercase">
          {title}
        </h1>
      )}
      {link && (
        <Link href={link.path}>
          <a className={`${btn}`}>{link.name}</a>
        </Link>
      )}
    </div>
  );
};

Hero.defaultProps = {
  img,
};
export default Hero;

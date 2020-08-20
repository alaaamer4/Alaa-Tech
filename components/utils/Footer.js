import React from "react";

const Footer = () => {
  return (
    <div className="md:px-40 px-10 bg-gray-900 text-gray-100  py-3 flex justify-between items-center ">
      <div>
        <p className="text-xl uppercase">
          &copy; mohamed alaa {new Date().getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

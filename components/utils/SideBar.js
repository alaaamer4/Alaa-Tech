import React from "react";
import Link from "next/link";
const SideBar = ({ isOpen }) => {
  const links = [
    { id: 1, name: "home", link: "/" },
    { id: 2, name: "about", link: "/about" },
    { id: 3, name: "contact us", link: "/contact" },
    { id: 4, name: "cart", link: "/cart" },
  ];
  const showClass = isOpen ? "translate-x-0" : "-translate-x-64";
  return (
    <div
      className={`sidebar shadow w-64 transform ${showClass}   transition-all duration-500 ease-in-out z-30`}
    >
      <ul className=" pt-8  w-full m-0 ">
        {links.map((link) => {
          return (
            <Link href={link.link} key={link.id}>
              <li
                className=" text-xl mb-1 py-2 px-8 w-full uppercase gray-800 hover:bg-indigo-500 cursor-pointer
               hover:text-indigo-100 transition duration-300
                ease-in-out transform hover:-translate-y-1  "
              >
                <a>{link.name}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;

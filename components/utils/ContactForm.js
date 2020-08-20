import React from "react";
import { btn, input } from "./tailwindutil";
const ContactForm = () => {
  return (
    <form className=" px-20 py-10 mx-48 my-10 rounded shadow-2xl bg-white  ">
      <h1 className="text-3xl font-bold uppercase">Contact Us</h1>
      <div className="h-1 mx-12 mt-2  w-24 bg-indigo-600 rounded-full mb-4 "></div>
      <input type="text" placeholder=" Your Name" className={`${input}`} />
      <input type="email" placeholder=" Your Email" className={`${input}`} />
      <input type="email" placeholder=" Topic" className={`${input}`} />
      <textarea
        name="about"
        id="about"
        placeholder="what's in your mind"
        className={`${input}`}
      ></textarea>
      <button type="submit" className={`${btn}  w-full mx-auto `}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

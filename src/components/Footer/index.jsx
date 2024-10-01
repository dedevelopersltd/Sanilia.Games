import React from "react";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="my-4 w-full relative overflow-hidden">
      <div className="w-[90%] m-auto pb-10 border-b-[.5px] border-[#8E8E8E]">
        <div className="w-full flex justify-center items-center pt-5">
          <img src={Logo} alt="Logo.svg" />
        </div>
        <p className="text-[#C3C3C3] pt-10 text-center text-[11px] font-normal tracking-[0.8px] capitalize">
          Lorem ipsum dolor sit amet consectetur. Id consectetur neque aliquam
          et iaculis urna hac pretium ut. Amet enim lectus enim eget curabitur
          senectus ipsum. Ullamcorper aliquam aenean ornare eu nulla eu. Amet
          morbi ultrices aliquam et amet non tempor sociis. Nulla posuere semper
          arcu sodales arcu velit. Vitae a ullamcorper turpis dignissim turpis
          massa quisque feugiat vel. Amet libero feugiat lorem urna enim.
          Posuere id tincidunt in sit. Ut dui nullam sapien amet augue sociis.
          Molestie sed velit nulla amet erat eu sem dictum. Egestas curabitur
          tincidunt bibendum aliquet tortor cursus odio mauris. Quisque tortor
          augue non congue netus est consectetur turpis.
        </p>
      </div>
      <div className="w-[60%] m-auto pt-5 pb-3 flex justify-center flex-wrap gap-6">
        <Link to="/legal" className="text-[#ffffff9c] text-sm  font-normal leading-10 hover:text-white">
          Legal
        </Link>
        <Link to="/privacy-policy" className="text-[#ffffff9c] text-sm  font-normal leading-10  hover:text-white">
          Privacy Policy
        </Link>
        <Link to="/terms-and-conditions" className="text-[#ffffff9c] text-sm  font-normal leading-10  hover:text-white">
          Terms & Conditions 
        </Link>
        <Link to="/guidelines-for-reviewers" className="text-[#ffffff9c] text-sm  font-normal leading-10  hover:text-white">
          Guidelines for Reviewers
        </Link>
      </div>
      <div className="w-[60%] m-auto py-0 flex justify-center flex-wrap">
        <p className="text-[#ffffff9c] text-base  font-normal leading-0">
          All rights reserved &copy; 2024 - 2030{" "}
        </p>
      </div>
      <div className="shadowBottoms absolute bottom-0 -right-32"></div>
    </div>
  );
};

export default Footer;

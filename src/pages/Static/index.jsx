import React from "react";
import { MainLayout } from "../../Layouts";
import { BottomHeaderSlider, GameCard, HeaderSlider } from "../../components";
import { FavCardimg, SearchIcon, SortIcon } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import Slider from "../../components/Slider";
import MasterCard from "../../components/MasterCard";
import Card from "../../components/Carousel/Card";
import Carroussel from "../../components/Carousel/MainCarousel";
import BarBottom from "./../../assets/images/barblack.svg";
import MaskBototmleft from "./../../assets/images/mask_bottom_left.svg";
import { useParams } from 'react-router-dom';


const StaticPages = () => {
  const { slug } = useParams();
  console.log(slug,"Slug")
  const formatSlug = (slug) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return (
    <MainLayout>
      {/* <div className="relative">
        <HeaderSlider />
      </div> */}
      <div className="w-[90%] m-auto mt-32 z-10 relative">
        <div className="w-full">
         <h1 className="text-white text-3xl uppercase font-bold">{formatSlug(slug)}</h1>
         <div className="text-white text-sm font-normal leading-5 pages_html">
          <p>
          Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.
          Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.
          Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.
          </p>
          <p>
            Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.

          </p>
          <p>
            Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.

          </p>
          <p>
            Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.

          </p>
          <p>
            Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.

          </p>
          <p>
            Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.

          </p>
         </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StaticPages;

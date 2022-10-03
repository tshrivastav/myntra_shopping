import React from "react";
import logo from "../assets/logo.png";
import CustomIcon from "./CustomIcon";
import Search from "./Search";
import { BiUser, BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const goTo = useNavigate();

  const MenuItem = (txt) => (
    <p
      onClick={() => goTo("/products")}
      className="cursor-pointer font-semibold text-[14px] uppercase hover:underline hover:underline-offset-[24px] hover:decoration-red-600 hover:decoration-4"
    >
      {txt}
    </p>
  );

  return (
    <div className="flex flex-row justify-between p-4 md:p-0 md:justify-around items-center bg-white w-full shadow-md">
      <img
        src={logo}
        onClick={() => goTo("/")}
        className="w-16 hidden cursor-pointer md:inline-block"
        alt="logo"
      />
      <div className="hidden md:flex flex-row items-center gap-10">
        <div className="flex flex-row items-center gap-12">
          {MenuItem("Men")}
          {MenuItem("Women")}
          {MenuItem("Kids")}
          {MenuItem("Home & Living")}
          {MenuItem("Beauty")}
          {MenuItem("Studio")}
        </div>
        <Search />
      </div>
      <div className="hidden md:flex flex-row items-center gap-6">
        <CustomIcon
          onClick={() => goTo("/profile")}
          title="Profile"
          Icon={BiUser}
        />
        <CustomIcon title="Wishlist" Icon={BiHeart} />
        <CustomIcon onClick={() => goTo("/cart")} title="Bag" Icon={BsBag} />
      </div>

      <div className="flex items-center md:hidden flex-row gap-4">
        <HiOutlineMenu size={20} />
        <Link to="/">Myntra</Link>
      </div>
      <div className="flex items-center justify-center md:hidden flex-row gap-4">
        <BiSearch size={20} />
        <BiHeart size={20} />
        <BsBag onClick={() => goTo("/cart")} size={20} />
      </div>
    </div>
  );
};

export default Header;

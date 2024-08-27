"use client";

import { ButtonContained, ButtonOutlined } from "@/components/ui/buttons";
import { useState } from "react";
import { navData } from "@/lib/data/navbar.data";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(1);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { push } = useRouter();

  return (
    <div className="w-full fixed top-0 bg-[#fff] shadow-md md:py-1 md:px-[2rem] lg:px-[4rem] z-30">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-[1.8rem] text-primary font-bold">CryptoBros</h1>
        </div>
        <ul className="hidden lg:flex justify-between items-center">
          {navData.map((item) => {
            return (
              <li
                className={`${
                  isActive && index === item.id ? "text-primary" : ""
                } py-3 px-6 ${
                  item.id === navData.length
                    ? "rounded-md"
                    : "lg:mr-8 rounded-md"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(true);
                  setIndex(item.id);
                }}
                key={item.id}
              >
                <a
                  href={`/#${item.path}`}
                  className="text-secondary text-[.95rem] font-medium hover:text-primary duration-300"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex">
          <Link href={"/login"}>
            <ButtonOutlined className="font-semibold">Log In</ButtonOutlined>
          </Link>
          <Link href={"/register"}>
            <ButtonContained className="ml-4 font-semibold">
              Sign Up
            </ButtonContained>
          </Link>
        </div>

        <div className="flex lg:hidden duration-500">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <ul className="w-full absolute right-0 bg-[#1a1a1a] flex flex-col px-6 py-4 rounded-md text-center animate-scale">
          {navData.map((item) => {
            return (
              <li
                className={`${
                  isActive && index === item.id ? "bg-[#262626]" : ""
                } py-3 px-6 ${
                  item.id === navData.length ? "rounded-md" : "rounded-md"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(true);
                  setIndex(item.id);
                  setToggleMenu(false);
                }}
                key={item.id}
              >
                <a href={`/#${item.path}`} className="text-white text-[1.3rem]">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Navbar;

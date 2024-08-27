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
    <div className="fixed w-screen top-0 bg-[#fff] shadow-lg md:shadow-md py-4 px-4 md:px-[2rem] lg:px-[4rem] z-30">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-[1.4rem] md:text-[1.8rem] text-primary font-bold">
            CryptoBros
          </h1>
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
        <div className="hidden md:flex md:mr-[-25rem] lg:mr-0">
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
              className="text-primary cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              className="text-primary cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <ul className="w-full h-auto absolute top-[102%] right-0 bg-[#fff] flex flex-col px-6 py-8 rounded-md shadow-md text-center animate-scale">
          {navData.map((item) => {
            return (
              <li
                className={`hover:bg-primary hover:text-[#fff]  text-secondary py-4 px-6 mb-4 duration-300 ${
                  item.id === navData.length ? "rounded-md" : "rounded-md"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(true);
                  setIndex(item.id);
                  setToggleMenu(false);
                }}
                key={item.id}
              >
                <a href={`/#${item.path}`} className="text-[1.05rem]">
                  {item.title}
                </a>
              </li>
            );
          })}
          <div className="w-full flex justify-start items-center gap-4 mt-3">
            <Link href={"/login"} className="w-full">
              <ButtonOutlined className="w-full font-semibold">
                Log In
              </ButtonOutlined>
            </Link>
            <Link href={"/register"} className="w-full">
              <ButtonContained className="w-full font-semibold">
                Sign Up
              </ButtonContained>
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};
export default Navbar;

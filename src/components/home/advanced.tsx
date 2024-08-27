import Title from "../ui/title";
import { ButtonContained, ButtonOutlined } from "../ui/buttons";
import Image from "next/image";
import advancedImg1 from "@/public/images/pro-img.webp";
import { IoIosFlash } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

const Advanced = () => {
  return (
    <div className="py-[2rem] px-[1rem] md:px-[2rem] lg:px-[4rem]">
      <div className="flex flex-col">
        <Title title="Next Level" text="For Advanced Users" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-[4rem]">
        <div className="w-full h-[450px] flex justify-between items-center bg-gray-900 col-span-2 rounded-2xl">
          <div className="flex flex-col py-4 px-6 max-w-[600px]">
            <div className="flex justify-start items-center mb-4">
              <IoIosFlash size={15} className="text-[#fff] mr-3" />
              <p className="text-[#fff] text-[.85rem]">Pro trade</p>
            </div>
            <h1 className="pb-4 text-[2rem] text-[#fff] font-bold">
              High-frequency Professional Trading
            </h1>
            <p className="text-[#fff] text-[1rem]">
              Buy and sell cryptocurrencies with low fees and professional
              interface
            </p>
            <div>
              <ButtonOutlined className="bg-[#fff] border-none font-semibold text-[.85rem] mt-4">
                Learn More
                <MdArrowForward
                  size={20}
                  className="text-primary inline-flex"
                />
              </ButtonOutlined>
            </div>
          </div>
          <Image
            src={advancedImg1}
            alt="professionals img"
            className="w-[600px] h-full rounded-e-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Advanced;

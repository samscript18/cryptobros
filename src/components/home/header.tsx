import Image from "next/image";
import { ButtonContained } from "../ui/buttons";
import header_img from "@/public/images/header-img.webp";
import { FaRegCircleCheck } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      id="header"
      className="mt-[6.5rem] md:mt-[7rem] px-[1rem] md:px-[2rem] lg:px-[4rem] pb-[4rem]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <div className="w-full md:max-w-[800px] mb-[4rem] md:mb-0">
          <h1 className="pb-6 md:pb-4 text-[2.3rem] text-secondary font-bold">
            The safest, easiest and most complete cryptocurrency platform in the
            world
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-start items-center">
              <FaRegCircleCheck size={18} className="text-primary mr-4" />
              <p className="text-secondary text-[1rem]">
                More than 300 cryptocurrencies
              </p>
            </div>
            <div className="flex justify-start items-center">
              <FaRegCircleCheck size={18} className="text-primary mr-4" />
              <p className="text-secondary text-[1rem]">
                We help you with the best customer service in the sector
              </p>
            </div>
            <div className="flex justify-start items-center">
              <FaRegCircleCheck size={18} className="text-primary mr-4" />
              <p className="text-secondary text-[1rem]">
                We accept individuals, companies, and institutions
              </p>
            </div>
          </div>
          <ButtonContained className="w-full md:w-[120px] mt-[3rem] md:mt-10 font-semibold">
            Start Now
          </ButtonContained>
        </div>
        <Image
          src={header_img}
          alt="header-img"
          className="md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[500px]"
        />
      </div>
    </header>
  );
};
export default Header;

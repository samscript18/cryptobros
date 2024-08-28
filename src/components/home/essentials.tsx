"use client";

import Title from "../ui/title";
import {
  MdArrowForward,
  MdOutlineShoppingCartCheckout,
  MdOutlineWallet,
} from "react-icons/md";
import { ButtonOutlined } from "../ui/buttons";
import Image from "next/image";
import essentialImg1 from "@/public/images/buy-sell-img.webp";
import essentialImg2 from "@/public/images/earn-img.webp";
import essentialImg3 from "@/public/images/wallet-img.webp";
import { GiReceiveMoney } from "react-icons/gi";
import { useRouter } from "next/navigation";

const Essentials = () => {
  const { push } = useRouter();
  return (
    <div className="py-[2rem] px-[1rem] md:px-[2rem] lg:px-[4rem]">
      <div className="flex flex-col">
        <Title title="Essentials" text="For Everyday Use" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[4rem]">
        <div className="w-full h-auto md:h-[450px] flex flex-col md:flex-row justify-between items-center bg-gray-100 col-span-1 md:col-span-2 rounded-2xl">
          <div className="flex flex-col py-4 px-6 max-w-[600px]">
            <div className="flex justify-start items-center mb-4">
              <MdOutlineShoppingCartCheckout
                size={15}
                className="text-primary mr-3"
              />
              <p className="text-secondary text-[.85rem]">Buy,sell and trade</p>
            </div>
            <h1 className="pb-4 text-[2rem] text-secondary font-bold">
              Buy and sell +300 cryptos easily and instantly
            </h1>
            <p className="text-secondary text-[1rem]">
              Buy, sell and exchange at the best price with a single click
              without complications
            </p>
            <div>
              <ButtonOutlined
                className="bg-[#fff] border-none font-semibold text-[.85rem] mt-4"
                onClick={() => push('/register')}
              >
                Start Trading
                <MdArrowForward
                  size={20}
                  className="text-primary inline-flex"
                />
              </ButtonOutlined>
            </div>
          </div>
          <Image
            src={essentialImg1}
            alt="buy and sell img"
            className="w-[600px] h-full rounded-e-2xl"
          />
        </div>
        <div className="w-full h-auto md:h-[450px] flex flex-col md:flex-row justify-between items-end bg-yellow-100 col-span-1 rounded-2xl">
          <div className="flex flex-col py-4 px-6 max-w-[400px] md:pb-[4.5rem] lg:pb-[6.5rem]">
            <div className="flex justify-start items-center mb-4">
              <GiReceiveMoney size={15} className="text-primary mr-3" />
              <p className="text-secondary text-[.85rem]">Invest and earn</p>
            </div>
            <h1 className="pb-4 text-[2rem] text-secondary font-bold">
              Earn in passive income
            </h1>
            <p className="text-secondary text-[1rem]">
              Invest $1000 dollars to earn 1btc metaverse Bitcoin
            </p>
            <div>
              <ButtonOutlined
                className="bg-[#fff] border-none font-semibold text-[.85rem] mt-4"
                onClick={() => push('/register')}
              >
                Start Earning
                <MdArrowForward
                  size={20}
                  className="text-primary inline-flex"
                />
              </ButtonOutlined>
            </div>
          </div>
          <Image
            src={essentialImg2}
            alt="buy and sell img"
            className="md:w-[200px] md:h-[250px] lg:w-[280px] lg:h-[350px] rounded-e-2xl"
          />
        </div>
        <div className="w-full h-auto md:h-[450px] flex flex-col md:flex-row justify-between items-end bg-gray-100 col-span-1 rounded-2xl">
          <div className="flex flex-col py-4 px-6 max-w-[400px] md:pb-[4.5rem] lg:pb-[5.5rem]">
            <div className="flex justify-start items-center mb-4">
              <MdOutlineWallet size={15} className="text-primary mr-3" />
              <p className="text-secondary text-[.85rem]">Bet On Live Matches</p>
            </div>
            <h1 className="pb-4 text-[2rem] text-secondary font-bold">
              Bet on Bitcoin, predict matches, stake odds
            </h1>
            <p className="text-secondary text-[1rem]">
              Bet on matches through Bitcoin and get paid in crypto and other
              currencies of your choice
            </p>
            <div>
              <ButtonOutlined
                className="bg-[#fff] border-none font-semibold text-[.85rem] mt-4"
                onClick={() => push('/register')}
              >
                Begin Now
                <MdArrowForward
                  size={20}
                  className="text-primary inline-flex"
                />
              </ButtonOutlined>
            </div>
          </div>
          <Image
            src={essentialImg3}
            alt="wallet img"
            className="md:w-[200px] md:h-[250px] lg:w-[280px] lg:h-[350px] rounded-e-2xl"
          />
        </div>
      </div>
    </div>
  )
};
export default Essentials;

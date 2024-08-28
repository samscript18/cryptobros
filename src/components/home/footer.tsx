import Image from "next/image";
import footerLogo from "@/public/images/nav-logo.svg";
import { footerData } from "@/lib/data/navbar.data";

const Footer = () => {
  return (
    <div className="py-4 px-[1rem] md:px-[2rem] lg:px-[4rem] bg-gray-900">
      <div className="flex md:flex-row flex-col justify-start items-start py-16">
        <div className="basis-[40%]">
          <div className="mb-6">
            <h1 className="text-[1.8rem] text-[#fff] font-bold">
              CryptoBrothers
            </h1>
          </div>
          <p className="text-[#fff] font-light">CryptoBrothers 2024</p>
          <p className="text-[#fff] font-light">All Rights Reserved &copy;</p>
        </div>
        {footerData.map(({ id, title, links }) => {
          return (
            <div key={id} className="basis-[20%] md:mt-0 mt-8">
              <h3 className="text-[#fff] font-bold">{title}</h3>
              {links.map(({ title, url }, index) => {
                return (
                  <div key={index} className="flex justify-start item-center">
                    <a
                      href={url}
                      key={index}
                      className="text-[#fff] font-light mt-6 hover:text-primary duration-300"
                    >
                      {title}
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="w-full border-primary border-t pt-8">
        <div className="flex md:flex-row flex-col-reverse justify-start items-center">
          <div className="w-full text-center md:text-start md:mt-0 mt-3">
            <h3 className="text-[#fff] font-light">
              &copy; 2024 CryptoBrothers. All Rights Reserved
            </h3>
          </div>
          <div className="w-full flex md:justify-end justify-center items-end">
            <h3 className="text-[#fff] font-light mr-4">Privacy Policy</h3>
            <h3 className="text-[#fff] font-light">Terms of Use</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

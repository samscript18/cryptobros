import { FcGraduationCap } from "react-icons/fc";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { MdLock, MdSupportAgent } from "react-icons/md";

export const servicesData = [
  {
    id: 1,
    icon: <MdLock size={25} className="text-primary" />,
    text: "Your money is protected at CryptoBros",
    desc: "We protect your money with multiple layers of security",
  },
  {
    id: 2,
    icon: <MdSupportAgent size={25} className="text-primary" />,
    text: "Telephone support in English",
    desc: "We help you, with support across multiple channels and in your language",
  },
  {
    id: 3,
    icon: <HiOutlineCheckBadge size={25} className="text-primary" />,
    text: "Highly recognized certifications",
    desc: "We hold highly recognized certifications ",
  },
  // {
  //   id: 4,
  //   icon: <FcGraduationCap size={25} className="text-primary" />,
  //   text: "Free education included",
  //   desc: "Educational content available to make informed decisions",
  // },
];

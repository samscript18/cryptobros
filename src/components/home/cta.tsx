import Image from 'next/image';
import { ButtonOutlined } from '../ui/buttons';
import ctaImg from '@/public/images/cta-img.webp';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="py-8 md:py-4 px-[1rem] md:px-[2rem] lg:px-[4rem] bg-primary">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-[800px]">
          <h1 className="pb-4 text-[2.5rem] text-[#fff] font-extrabold">
            Open your account now
          </h1>
          <p className="text-[#fff] text-[1.3rem]">
            Register on the world&#39;s easiest, safest, and most complete
            platform
          </p>
          <Link href="/register">
            <ButtonOutlined className="mt-10 bg-[#fff] text-[.90rem] font-bold">
              Start Now
            </ButtonOutlined>
          </Link>
        </div>
        <div>
          <Image
            src={ctaImg}
            alt="cta img"
            className="md:w-[600px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};
export default CTA;

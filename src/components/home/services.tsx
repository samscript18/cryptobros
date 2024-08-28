import { servicesData } from "@/lib/data/services.data";
import Title from "../ui/title";

const Advanced = () => {
  return (
    <div className="py-8 px-[1rem] md:px-[2rem] lg:px-[4rem]">
      <div className="flex flex-col">
        <Title title="Why CryptoBrothers" text="Sleep peacefully with CryptoBrothers" />
        <div className="flex flex-col md:flex-row justify-between items-center mt-[3rem] gap-12 md:mb-0 mb-8">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="w-full md:max-w-[400px] flex flex-col items-center"
              >
                <div className="bgColor p-4 rounded-full">{service.icon}</div>
                <h2 className="text-secondary text-[1.2rem] font-bold pt-4 pb-2 text-center">
                  {service.text}
                </h2>
                <p className="text-gray-500 text-[1.05rem] font-medium text-center">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Advanced;

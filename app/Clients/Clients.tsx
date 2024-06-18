import Image from "next/image";
import Button from "../../components/Button";
import Stars from '@/public/home/3Stars.svg';
import Leftarrow from '@/public/home/leftarrow.svg';
import Rightarrow from '@/public/home/rightarrow.svg';
import { PROPERTY, TESTIMONIAL } from "@/constance/constance";

const Clients = () => {
  return (
    <div className="max-container padding-container mt-12 py-12">
      <div>
        <Image src={Stars} alt="3Stars" />
      </div>
      <div className="mb-12">
        <h1 className="text-ub-xl">What Our Clients Say</h1>
        <div className="flex flex-row justify-between items-center gap-12">
          <p className="text-wrap text-ub-xs">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <Button
            type="submit"
            title="View All Properties"
            variant="bg-grey-8 hover:bg-grey-40"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mt-12">
        {TESTIMONIAL.map((testim, index) => (
          <div key={index} className="flex flex-col gap-2 py-3  px-5   my-3 border border-grey-8 rounded-lg">
            <div className="flex gap-2 ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <Image src={testim.img} alt={testim.label} width={15} height={15} />
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-ub-md font- py-6">{testim.label}</h3>
              <p className="py-4">{testim.text}</p>
            </div>
            <div className="flex flex-cols justify-start item-center gap-3 ">
              <Image src={testim.icon} alt={testim.label} width={58} height={58} />
              <div>
                <h4>{testim.name}</h4>
                <p>{testim.country}, {testim.state}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

                <div>
            <hr className="border-grey-8"/>
            </div>
                <div className="flex flex-row justify-between items-center py-4">
                <p className="font-sm text-ub-xs">1 out of 10</p>
                <div className="flex flex-row justify-around items-center gap-3">
                    <Image src={Rightarrow} alt="leftarrow" width={20} height={20}/>
                    <Image src={Leftarrow} alt="leftarrow" width={20} height={20}/>
                </div>
            </div>

    </div>
  );
};

export default Clients;

import Image from "next/image";
import Button from "../../components/Button";
import Stars from '@/public/home/3Stars.svg';
import Leftarrow from '@/public/home/leftarrow.svg';
import Rightarrow from '@/public/home/rightarrow.svg';
import { PROPERTY, TESTIMONIAL,QUESTIONS } from "@/constance/constance";

const Faq = () => {
 
  return (
    <div className="max-container padding-container mt-12 py-12">
      <div>
        <Image src={Stars} alt="3Stars" />
      </div>
      <div className="mb-12">
        <h1 className="text-ub-xl">Frequently Asked Questions</h1>
        <div className="flex flex-row justify-between items-center gap-12">
          <p className="text-wrap text-ub-xs w-[80%]">
            Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
          </p>
          <Button
            type="submit"
            title="View All FAQ's"
            variant="bg-grey-8 hover:bg-grey-40"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mt-12">
        {TESTIMONIAL.map((quest, index) => (
          <div key={index} className="flex flex-col gap-2 py-3  px-5   my-3 border border-grey-8 rounded-lg">
            <div className="flex gap-2 ">
              
            </div>
            <div>
              <h3 className="text-ub-md py-6"></h3>
              <p className="py-4">{quest.text}</p>
            </div>
            <div className="flex justify-start item-center gap-3 ">
                <Button
                    type="submit" 
                    title='Read More'
                    variant="bg-grey-8 hover:bg-grey-40"

                />
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



export default Faq
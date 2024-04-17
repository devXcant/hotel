import Image from "next/image"
import Button from "../../components/Button"
import bg1 from '@/public/home/ctaAbstract1.png'
import bg2 from '@/public/home/ctaAbstract2.png'


const Cta = () => {
  return (
    <>
        <div className="max-container padding-container py-12">

                <div className="relative py-6">
                    <Image src={bg2} alt="bg" width={380} height={180} className=" absolute flex justify-start items-start -z-50 left-0 bottom-1"/>
                   
                    <Image src={bg1} alt="bg" width={380} height={180} className=" absolute right-0 bottom-1 -z-50"  />
                   <div className="flex justify-around items-center">
                        <div className="w-[80%]">
                            <h2 className="text-ub-xl">Start Your Real Estate Journey Today</h2>

                            <p className="text-balance text-ub-xs">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                            </p>
                        </div>

                         <div className="">
                            <Button type="submit" title="Explore Properties" variant="bg-purple-60 hover:bg-purple-65"/>
                        </div>
                    </div>

                   
                </div>

        </div>
    </>
  )
}

export default Cta
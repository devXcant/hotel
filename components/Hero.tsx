import Image from "next/image";
import Button from "./Button";
import homeShape from '@/public/home/SubContainer1.svg';




const Hero = () => {
  return (
    <>
      <div className="max-container padding-container pt-3 mt-10 p-10 relative">
        
        <div className="grid grid-cols-2">
          <div className="absolute left-28 right-0 top-0 bottom-28 flex justify-center items-center m-1 p-2 bg-transparent">
          <Image src={homeShape} alt="home-shape" height={145} width={115}/>
        </div>
          <div className="bg-transparent">
            <h1 className="text-ub-xl font-semibold mb-2">Discover Your Dream Property With Estatein </h1>
            <p className="gap-2 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in quidem, ex quia officiis ipsam maiores odio magni fugit libero?</p>

            <div className="flex justify-start items-center gap-5">
               <Button 
                type="button" 
                title="Learn More"
                variant= "border  bg-grey-8 hover:bg-grey-40"
            />
            <Button 
                type="button" 
                title="Browse Properties"
                variant= "bg-purple-60 hover:bg-purple-65"
            />
            </div>

            <div className="flex justify-start items-center gap-5 pt-20">
              <div className=" flex flex-col justify-start items-start gap-2 p-3 px-5 bg-grey-8 rounded-s-md">
                <p className="flex flex-col justify-start items-start">
                  <span className="text-ub-lg font-bold ">
                    200+
                  </span> 
                  Happy customers
                </p>
                
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-3 px-5 bg-grey-8 w-auto rounded-s-md">
                <p className="flex flex-col justify-start items-start">
                  <span className="text-ub-lg font-bold">
                    10k+
                  </span> 
                  Properties for clients
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-3 px-5 bg-grey-8 rounded-s-md">
                <p className="flex flex-col justify-start items-start">
                  <span className="text-ub-lg font-bold">
                    16+
                  </span> 
                  Years of experience
                </p>
              </div>
            </div>
           
          </div>
          <div className="hero-col-img">

          </div>

        </div>
      </div>
         

          
    </>
  )
}

export default Hero
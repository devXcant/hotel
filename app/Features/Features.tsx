import Image from "next/image"
import Button from "../../components/Button"
import Stars from '@/public/home/3Stars.svg'
import Leftarrow from '@/public/home/leftarrow.svg'
import Rightarrow from '@/public/home/rightarrow.svg'
import  {PROPERTY} from "@/constance/constance"


const Features = ({header,headerText}) => {
  return (
    <>
        <div className="max-container padding-container mt-12 py-12">
            <div>
                <Image src={Stars} alt="3Stars"/>
            </div>
            <div className=" mb-12">
                <h1 className="text-ub-xl">{header}</h1>
                <div className="flex flex-row justify-between items-center gap-12">
                    <p className="text-wrap text-ub-xs">{headerText}</p>

                    <Button 
                        type="submit"
                        title="View All Properties"
                        variant="bg-grey-8 hover:bg-grey-40"
                    />

                </div>
            </div>

            <div className="">
                <div className="grid grid-cols-3 gap-5 mt-12">
                    {PROPERTY.map((proper) => (
                        <div key={proper.key} className="py-3  px-3 flex flex-col justify-center items-center  my-3 border border-grey-8 rounded-lg">
                        
                            <Image src={proper.img} alt={proper.key} width={350} height={400}/>

                            <h2 className="text-ub-md font- py-6">{proper.label}</h2>
                            <p className="">{proper.text}</p>

                            <div className="flex flex-row justify-between gap-5 py-6">
                                <Image src={proper.bedroom} alt={proper.key} width={20} height={10}/>
                                <Image src={proper.bathroom} alt={proper.key} width={20} height={10}/>
                                <Image src={proper.villa} alt={proper.key} width={20} height={10}/>
                                
                            </div>

                            <div className="flex flex-row  gap-4 ">
                                <div className="grid grid-rows-2 justify-between gap-2">
                                    <h4 className="font-light">Price</h4>
                                    <p className=" font-bold">{proper.price}</p>
                                </div>

                                <Button type="submit" variant="bg-purple-60 hover:bg-purple-65" title='View Property Details' />
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
            <hr className="border-grey-8"/>
            </div>

            <div className="flex flex-row justify-between items-center py-4">
                <p className="font-sm text-ub-xs">1 out of 60</p>
                <div className="flex flex-row justify-around items-center gap-3">
                    <Image src={Rightarrow} alt="leftarrow" width={20} height={20}/>
                    <Image src={Leftarrow} alt="leftarrow" width={20} height={20}/>
                </div>
            </div>
        </div>
    </>
  )
}

interface MyComponentProps {
  title?: string; // Make title optional
  description?: string; // Make description optional
}

export default Features
import Image from 'next/image'
import subContainerArrow from '@/public/home/Arrow.svg'
import Home from '@/public/home/IconContainer2.svg'
import Cash from '@/public/home/IconContainer1.svg'
import Building from '@/public/home/IconContainer3.svg'
import Sun from '@/public/home/IconContainer4.svg'


const Values = () => {
  return (
    <>
        <div className='max-container padding-container grid grid-cols-2 lg:grid-cols-4 gap-8 mx-4 mb-4'>
            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image src={Home} alt='home' />
                    <p>Find your Dream Home</p>
                </div>
            </div>

            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image src={Cash} alt='home' />
                    <p>Unlock Property Value</p>
                </div>
            </div>

            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image src={Sun} alt='home' />
                    <p>Effortless Property Management</p>
                </div>
            </div>

            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center text-center">
                    <Image src={Building} alt='home' />
                    <p>Smart Investments. Informed Decisions</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Values

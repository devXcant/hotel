import Logo from '@/public/logo/Logodesktop.svg'
import Image from 'next/image'
import Mail from '@/public/mail.svg'
import Message from '@/public/message.svg'
import { FOOTERS_ABOUT, FOOTERS_HOME, FOOTERS_PROPERTY,FOOTERS_SERVICE,FOOTERS_CONTACT_US,SOCIALS } from '@/constance/constance'
import Link from 'next/link'


const Footer = () => {
  return (
    <>
        <div className="max-container padding-container ">
            <div className='flex flex-row justify-between items-top'>
                
                <div>
                    <Image src={Logo} alt='page-logo' />

                    <div className='flex flex-row justify-between items-center gap-24  p-4 my-4 rounded-lg  '>
                        <div className='flex justify-start gap-3  items-center '>
                            <Image src={Mail} alt='mail' />
                            <input type="text" placeholder='Enter Your Email' className='bg-inherit rounded-md border border-grey-8 px-3 py-2'/>
                        </div>

                        <div>
                            <Image src={Message} alt='message' />
                        </div>
                    </div>

                    
                </div>

                <div className='grid grid-cols-5'>
                    <div className='col-span-1'>
                        <h3 className='text-grey-15 hover:text-grey-60 text-ub-base'>Home</h3>
                        {FOOTERS_HOME.map((home)=> (
                        <div key={home.label} className='py-3 text-ub-xs hover:text-grey-60'>
                            <Link href={home.link}>{home.label}</Link>
                        </div>
                        ))}
                    </div>

                    <div className='col-span-1 gap-y-6'>
                        <h3 className='text-grey-15 hover:text-grey-60 text-ub-base'>About Us</h3>
                        {FOOTERS_ABOUT.map((about)=> (
                        <div key={about.label} className='py-3 text-ub-xs hover:text-grey-60'>
                            <Link href={about.link}>{about.label}</Link>
                        </div>
                        ))}
                    </div>

                    <div className='col-span-1 gap-y-6'>
                        <h3 className='text-grey-15 hover:text-grey-60 text-ub-base'>Properties</h3>
                        {FOOTERS_PROPERTY.map((property)=> (
                        <div key={property.label} className='py-3 text-ub-xs hover:text-grey-60'>
                            <Link href={property.link}>{property.label}</Link>
                        </div>
                        ))}
                    </div>

                    <div className='col-span-1 gap-y-6'>
                        <h3 className='text-grey-15 hover:text-grey-60 text-ub-base'>Service</h3>
                        {FOOTERS_SERVICE.map((service)=> (
                        <div key={service.label} className='py-3 text-ub-xs hover:text-grey-60'>
                            <Link href={service.link}>{service.label}</Link>
                        </div>
                        ))}
                    </div>

                    <div className='col-span-1 gap-y-6'>
                        <h3 className='text-grey-15 hover:text-grey-60 text-ub-base'>Contact Us</h3>
                        {FOOTERS_CONTACT_US.map((contact)=> (
                        <div key={contact.label} className='py-3 text-ub-xs hover:text-grey-60'>
                            <Link href={contact.link}>{contact.label}</Link>
                        </div>
                        ))}
                    </div>
    </div>


            </div>

                <div className="flex justify-between items-center gap-10 py-8 bg-grey-8 p-12 rounded-md">
                        <div className="flex flex-row items-center gap-10">
                            <h3>&copy; {new Date().getFullYear()}</h3>
                            <h3>All Rights Reserved</h3>
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="flex flex-row items-center gap-6 ">
                            {SOCIALS.map((social) => (
                            <div key={social.label}>
                                <Image src={social.src} alt={social.label} width={30} height={30} />
                            </div>
                            ))}
                        </div>
                </div>

            
        </div>
    </>
  )
}

export default Footer
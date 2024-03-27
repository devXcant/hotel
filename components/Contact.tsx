import React from 'react'
import Navbar from './Navbar'
import Cta from './Cta'
import Footer from './Footer'
import Image from 'next/image'
import subContainerArrow from '@/public/home/Arrow.svg'
import Home from '@/public/home/IconContainer2.svg'
import Cash from '@/public/home/IconContainer1.svg'
import Building from '@/public/home/IconContainer3.svg'
import Sun from '@/public/home/IconContainer4.svg'
import Button from "./Button"
import Stars from '@/public/home/3Stars.svg'

const Contact = () => {
  return (
      <> 
          <Navbar />
            <div className="max-container padding-container mt-12 py-12">
              
                <div className=" mb-12">
                    <h1 className="text-ub-xl">Get in Touch with Estatein</h1>
                    <div className="flex flex-row justify-between items-center gap-12">
                        <p className="text-wrap text-ub-xs">Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
                    </div>
                </div>
          </div>    

            <div className='max-container padding-container grid grid-cols-4 gap-8 mx-4 mb-4'>
            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image src={Home} alt='home' />
                    <p>info@estatein.com</p>
                </div>
            </div>

            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image src={Cash} alt='home' />
                    <p>+1 (123) 456-7890</p>
                </div>
            </div>

            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image src={Sun} alt='home' />
                    <p>Main Headquarters</p>
                </div>
            </div>

            <div className="bg-grey-8 mt-5 rounded-lg p-2">
                <div className="flex justify-end items-center">
                    <Image src={subContainerArrow} alt='sub-container-arrow'/>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center text-center">
                    <Image src={Building} alt='home' />
                    <div className='flex flex-cols justify-around gap-3'>
                      <p>Instagram</p>
                      <p>Linkedin</p>
                      <p>Faceboook</p>
                    </div>
                </div>
            </div>
        </div>

              <div className="max-container padding-container mt-12 py-12">
                  <div>
                      <Image src={Stars} alt="3Stars"/>
                  </div>
                  <div className=" mb-12">
                      <h1 className="text-ub-xl">Let's Connect</h1>
                      <div className="flex flex-row justify-between items-center gap-12">
                          <p className="text-wrap text-ub-xs">We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>

                      </div>
                  </div>

                  <div className='border border-grey-8 rounded-md p-6'>
                      <div className='grid grid-cols-3 gap-3'>
                            <div className='grid grid-rows-2 '>
                              <label>First Name</label>
                              <input type="text" className='p-3 bg-grey-8 rounded-md' placeholder='First Name' />
                            </div>
                            <div className='grid grid-rows-2'>
                              <label>Last Name</label>
                              <input type="text" className='p-3 bg-grey-8 rounded-md' placeholder='Last Name'/>
                            </div>
                            <div className='grid grid-rows-2'>
                              <label>Email</label>
                              <input type="email" className='p-3 bg-grey-8 rounded-md' placeholder='Email Name'/>
                            </div>
                      </div>
                      <div className='grid grid-cols-3 gap-3 my-4'>
                            <div className='grid grid-cols-1'>
                              <label>Phone</label>
                              <input type="text" className='p-3 bg-grey-8 rounded-md' placeholder='Phone Number' />
                            </div>
                            <div className='grid grid-cols-1'>
                              <label>Inquiry Type</label>
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>
                            <div className='grid grid-cols-1'>
                              <label>How Did You Hear About Us?</label>
                              <select name="hearAbout" id="hearAbout" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>
                      </div>
                      <div className='my-4'>
                            <div  className='grid grid-cols-1'>
                              <label>Message</label>
                              <input type="text" placeholder='Leave a Message Here...' className='p-12 bg-grey-8 rounded-md'/>
                            </div>
                      </div>
                      <div className='flex flex-rows justify-between my-3'>
                            <div className='flex flex-cols items-center gap-2'>
                             <input type="checkbox"/>
                             <p>I agree with Terms of Use and Privacy Policy</p>
                            </div>
                            
                            <Button type='submit' title='Send your message' variant="bg-purple-60 hover:bg-purple-65"/>
                      </div>
                  </div>
            </div>


          <Cta />
          <Footer />
      </>
    )
}

export default Contact
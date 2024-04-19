import Button from "@/components/Button"
import Image from "next/image"
import Locator from '@/public/locator.svg'
import Dropdown from '@/public/dropdown.svg'
import Stars from '@/public/home/3Stars.svg'
import Features from "../Features/Features"


const page = () => {
  return (
    <>
      <div className="max-container padding-container">
        <h2 className="text-ub-lg">
          Find Your Dream Property
        </h2>
        <p>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
        <fieldset className="bg-red-800">
          <legend className="border border-grey-8">
            <div className="flex flex-row justify-between gap-3 m-3 items-center">
              <input type="text" placeholder="Search For A Property" />
              <Button type='submit' title='Find Property' variant="bg-purple-60 hover:bg-purple-20"/>
            </div>
          </legend>
          
          <div>
            <div className='grid grid-cols-5 gap-5 my-4'>
                            <div className='flex flex-row justify-brtween items-center mx-2'>
                              <Image src={Locator} width={20} height={20} alt="" />
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">Location</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                              </div>

                            <div className='flex flex-row justify-brtween items-center mx-2'>
                              <Image src={Locator} width={20} height={20} alt="" />
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">Property Type</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>

                            <div className='flex flex-row justify-brtween items-center mx-2'>
                              <Image src={Locator} width={20} height={20} alt="" />
                              <select name="hearAbout" id="hearAbout" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">
                                  Pricing range
                                </option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>

                            <div className='flex flex-row justify-brtween items-center mx-2'>
                              <Image src={Locator} width={20} height={20} alt="" />
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">Property Size</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                              </div>

                              <div className='flex flex-row justify-brtween items-center mx-2'>
                              <Image src={Locator} width={20} height={20} alt="" />
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="general">Build Year</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                              </div>
                      </div>

          </div>

        </fieldset>

        <Features 
          header='Discover a World of Possibilities'
          headerText='Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'
        />

        <div className="max-container padding-container mt-12 py-12">
                  <div>
                      <Image src={Stars} alt="3Stars"/>
                  </div>
                  <div className=" mb-12">
                      <h1 className="text-ub-xl">Let's Make it Happen</h1>
                      <div className="flex flex-row justify-between items-center gap-12">
                          <p className="text-wrap text-ub-xs">Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>

                      </div>
                  </div>

                  <div className='border border-grey-8 rounded-md p-6 mb-12'>
                      <div className='grid grid-cols-4 gap-3'>
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
                            <div className='grid grid-rows-2'>
                              <label>Phone</label>
                              <input type="email" className='p-3 bg-grey-8 rounded-md' placeholder='Email Name'/>
                            </div>
                      </div>
                      <div className='grid grid-cols-4 gap-3 my-4'>
                            <div className='grid grid-cols-1'>
                              <label>Preffered Location</label>
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="">Select Location</option>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>
                            <div className='grid grid-cols-1'>
                              <label>Property Type</label>
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="">Select Property Type</option>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>
                            <div className='grid grid-cols-1'>
                              <label>No of Bathrooms</label>
                              <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                <option value="">Select No. of Bathrooms</option>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>
                            <div className='grid grid-cols-1'>
                              <label>No of Bedrooms</label>
                              <select name="hearAbout" id="hearAbout" className='p-3 bg-grey-8 rounded-md'>
                                <option value="">Select No. of Bedrooms</option>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="billing">Billing Inquiry</option>
                              </select>
                            </div>
                      </div>
                      <div className='grid grid-cols-3 gap-3'>
                            <div className='grid grid-rows-2 '>
                              <label>Budget</label>
                              <input type="text" className='p-3 bg-grey-8 rounded-md' placeholder='First Name' />
                            </div>
                            <div className='grid grid-rows-2'>
                              <label>Preffered Mode Of Contact</label>
                              <input type="email" className='p-3 bg-grey-8 rounded-md' placeholder='Email Name'/>
                            </div>
                            <div className='grid grid-rows-2'>
                              <label></label>
                              <input type="email" className='p-3 bg-grey-8 rounded-md' placeholder='Phone'/>
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
      </div>
    </>
  )
}

export default page
import Image from 'next/image'
import Stars from '@/public/home/3Stars.svg'
import Button from '@/components/Button'
import Faq from '../Faq/Faq'


const page = () => {
  

  return (
    <>
        <div className="max-container padding-container mt-12 py-12">
                  <div className="grid grid-cols-2 gap-3 mb-12">
                    <div className='border rounded-lg border-grey-8 p-6'>
                      <h3 className='text-ub-md mb-3'>Description</h3>
                      <p className='mb-3'>Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.</p>
                      <hr className="border-grey-8 my-3" />
                      <div className="flex flex-row justify-center items-center border border-grey-8 rounded-lg p-4 my-2">



                          <div className='flex flex-col justify-center items-center m-5'>
                            <p>Bedrooms</p>
                            <span className='italic text-ub-xl'>04</span>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                            <p>Bathrooms</p>
                            <span className='italic text-ub-xl'>03</span>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                            <p>Area</p>
                            <span className='italic text-ub-xl'>2,500 Sft</span>
                          </div>
                        
                      </div>
                    </div>

                    <div className='border border-grey-8 rounded-lg p-6'>
                      <h3 className='text-ub-md'>Key Features and Ammenities</h3>
                      <ul>
                        <div className='border-l-2 border-purple-950 px-2 bg-grey-8 gap-2 py-3 m-2'>
                          <li className="flex flex-cols items-center justify-start gap-2">
                            <Image width={12} height={20} alt='thunder' src='/thunder.svg' />
                            Expansive oceanfront terrace for outdoor entertaining
                          </li>
                        </div>
                        <div className='border-l-2 border-purple-950 px-2 bg-grey-8 gap-2 py-3'>
                          <li className="flex flex-cols items-center justify-start gap-2">
                            <Image width={12} height={20} alt='thunder' src='/thunder.svg' />
                            Gourmet kitchen with top-of-the-line appliances
                          </li>
                        </div>
                        <div className='border-l-2 border-purple-950 px-2 bg-grey-8 gap-2 py-3 m-2'>
                          <li className="flex flex-cols items-center justify-start gap-2">
                            <Image width={12} height={20} alt='thunder' src='/thunder.svg' />
                            Private beach access for morning strolls and sunset views
                          </li>
                        </div>
                        <div className='border-l-2 border-purple-950 px-2 bg-grey-8 gap-2 py-3'>
                          <li className="flex flex-cols items-center justify-start gap-2">
                            <Image width={12} height={20} alt='thunder' src='/thunder.svg' />
                            Master suite with a spa-inspired bathroom and ocean-facing balcony
                          </li>
                        </div>
                        <div className='border-l-2 border-purple-950 px-2 bg-grey-8 gap-2 py-3 m-2'>
                          <li className="flex flex-cols items-center justify-start gap-2">
                            <Image width={12} height={20} alt='thunder' src='/thunder.svg' />
                            Private garage and ample storage space
                          </li>
                        </div>
                      </ul>
                    </div>

                  </div>

                  
                  <div>

                      <Image src={Stars} alt="3Stars"/>
                  </div>
                  <div className='grid grid-cols-2'>
                  <div className=" mb-12">
                      <h1 className="text-ub-xl">Inquire About Seaside Serenity Villa</h1>
                      <div className="flex flex-row justify-between items-center gap-12">
                          <p className="text-wrap text-ub-xs">Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.</p>

                      </div>
                  </div>

                  <div className='border border-grey-8 rounded-md p-6 mb-12'>
                    
                      <div className='grid grid-cols-2 gap-3'>
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
                                    <input type="text" className='p-3 bg-grey-8 rounded-md' placeholder='Phone Number' />
                            </div>
                      </div>

                            <div className="my-4">
                              <div className='grid grid-cols-1'>
                                <label>Selected Property</label>
                                <select name="inquiryType" id="inquiryType" className='p-3 bg-grey-8 rounded-md'>
                                  <option value="general">Seaside</option>
                                  <option value="technical">Penthouse</option>
                                  <option value="billing">Condiminium</option>
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

                  
                  <div className="mt-10">
                        <div>
                          <Image src={Stars} alt="3Stars" />
                        </div>
                        <div>
                          <div>
                            <h2 className='text-ub-xl py-2'>Comprenhsive Pricing Details</h2>
                            <p className='py-2'>At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision</p>
                          </div>
                        <div>

                        <div className='bg-grey-8 flex flex-row items-center justify-around py-2 rounded-md gap-2 mb-6'>
                          <h3 className='border-r p-2 border-grey-40'>Note</h3>
                          <h3 className='text-ub-xs'>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</h3>
                        </div>

                        
                  </div>

                    <div className="flex flex-cols justify-around gap-3">
                      <div>
                        <h3 className='text-ub-xs text-grey-40'>Listing price</h3>
                        <p className='italic text-ub-l'>$1,250,000</p>
                      </div>

                      <div>
                        <div className='border border-grey-8 rounded-md p-3 mb-6'>
                          <div className="flex flex-cols justify-between items-center">
                            <h2>Additional Fees</h2>
                            <Button type='submit' title='Learn More' variant="bg-grey-8 hover:bg-grey-60" />
                          </div>

                          <hr className='border-grey-8 my-3'/>

                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Property Trader Tax</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$25,000</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Based on the sale price and local regulatore</h3>
                              </div>
                            </div>

                            <div className='p-3'>
                              <h3>Legal Fees</h3>
                              <div className="grid grid-cols-2">
                                <h3 className='text-ub-lg'>$3,000</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Approiprate  ost for legal services including the transfer</h3>
                              </div>
                            </div>
                          </div>
                          <hr className='border-grey-8 my-3'/>
                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Home Inspection</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$5,00</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Recommended for due diligence</h3>
                              </div>
                            </div>

                            <div className='p-3'>
                              <h3>Property Insurance</h3>
                              <div className="grid grid-cols-2">
                                <h3 className='text-ub-lg'>$1,200</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Annual cost for comprehensive property insurance</h3>
                              </div>
                            </div>
                          </div>

                          <hr className='border-grey-8 my-3'/>

                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8'>
                              <h3>Mortgage Fees</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>Varies</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">If applicable, consult with your lender for specific details</h3>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* 2 */}

                        <div className='border border-grey-8 rounded-md p-3 mb-6'>
                          <div className="flex flex-cols justify-between items-center">
                            <h2>Monthly Costs</h2>
                            <Button type='submit' title='Learn More' variant="bg-grey-8 hover:bg-grey-60" />
                          </div>

                          <hr className='border-grey-8 my-3'/>

                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Property Taxes</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$1,250</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Approximate monthly property tax based on the sale price and local rates</h3>
                              </div>
                            </div>

                          </div>
                          <hr className='border-grey-8 my-3'/>
                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Home owners Association Fee</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$300</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Monthly fee for common area maintenance and security</h3>
                              </div>
                            </div>
                          </div>

                          <hr className='border-grey-8 my-3'/>
                        </div>

                        <div className='border border-grey-8 rounded-md p-3 mb-6'>
                          <div className="flex flex-cols justify-between items-center">
                            <h2>Total Initial Costs</h2>
                            <Button type='submit' title='Learn More' variant="bg-grey-8 hover:bg-grey-60" />
                          </div>

                          <hr className='border-grey-8 my-3'/>

                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Listing Price</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$1,250,000</h3>
                              </div>
                            </div>

                            <div className='p-3'>
                              <h3>Additional Fees</h3>
                              <div className="grid grid-cols-2">
                                <h3 className='text-ub-lg'>$29,700</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Property transfer tax, legal fees, inspection, insurance</h3>
                              </div>
                            </div>
                          </div>
                          <hr className='border-grey-8 my-3'/>
                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Down Payment</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$255,000</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">20%</h3>
                              </div>
                            </div>

                            <div className='p-3'>
                              <h3>Home owners Association Fee</h3>
                              <div className="grid grid-cols-2">
                                <h3 className='text-ub-lg'>$200</h3>
                                
                              </div>
                            </div>
                          </div>

                          <hr className='border-grey-8 my-3'/>

                        </div>

                        <div className='border border-grey-8 rounded-md p-3 mb-6'>
                          <div className="flex flex-cols justify-between items-center">
                            <h2>Monthly Expenses</h2>
                            <Button type='submit' title='Learn More' variant="bg-grey-8 hover:bg-grey-60" />
                          </div>

                          <hr className='border-grey-8 my-3'/>

                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Property Taxes</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>$1,250</h3>
                              </div>
                            </div>

                            <div className='p-3'>
                              <h3>Home owners Association Fee</h3>
                              <div className="grid grid-cols-2">
                                <h3 className='text-ub-lg'>$300</h3>
                                
                              </div>
                            </div>
                          </div>
                          <hr className='border-grey-8 my-3'/>
                          <div className="grid grid-cols-2 gap-6">
                            <div className='p-3 border-grey-8 border-r-2'>
                              <h3>Mortgage Payment</h3>
                              <div className="grid grid-cols-2 gap-3">
                                <h3 className='text-ub-lg'>Varies based on terms and interest rate</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">If applicable</h3>
                              </div>
                            </div>

                            <div className='p-3'>
                              <h3>Property Insurance</h3>
                              <div className="grid grid-cols-2">
                                <h3 className='text-ub-lg'>$100</h3>
                                <h3 className="bg-grey-8 rounded-md p-2">Approximate monthly cost</h3>
                              </div>
                            </div>
                          </div>

                          <hr className='border-grey-8 my-3'/>

                          
                          <div className="text-ub-sm"></div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                  </div>    
                  <Faq/>

                </div>
    </>
  )
}

export default page
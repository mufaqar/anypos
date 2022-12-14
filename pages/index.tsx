import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner';
import Features from '../components/features';
import Pricing from '../components/pricing';

import Any_device from '../public/images/any_device.png';
import Invoicing from '../public/images/invoicing.png';
import Cloud from '../public/images/cloud.png';
import Online from '../public/images/online.png';
import Payments from '../public/images/payments.png';
import Reports from '../public/images/payments.png';
import Email from '../public/images/email.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Banner />

      <Features />

      <section className='relative py-10 bg-gradient-to-tr from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF]'>
        <div className="custom-shape-divider-top-1670933909">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>

        <div className='container mx-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <Image src={Any_device} alt="banner" />
          </div>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>POS on any Device</h3>
            <p className='text-[#54595F] text-base font-medium'>Any pos software works on any mobile, tab or PC. Get full POS without spending thousands on clunky hardware and legacy software’s.</p>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1670924415">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='relative py-10 '>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>ZATCA e-Invoicing</h3>
            <p className='text-[#54595F] text-base font-medium'>Print simplified invoices in compliance with ZATCA standards.</p>
          </div>
          <div className=''>
            <Image src={Invoicing} alt="banner" />
          </div>
        </div>
      </section>

      <section className='relative py-10 bg-gradient-to-tr from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF]'>
        <div className="custom-shape-divider-top-1670933909">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>

        <div className='container mx-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <Image src={Cloud} alt="banner" />
          </div>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>It’s on Cloud!</h3>
            <p className='text-[#54595F] text-base font-medium'>As any POS is on cloud so you can access it anytime from anywhere in the word its available 24/7. See the live progress of your store sales through our integrated dashboard. We store your important business data securely in the cloud to protect your business against events like computer theft, viruses, and unexpected breakdowns.</p>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1670924415">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='relative py-10 '>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>Online & Offline</h3>
            <p className='text-[#54595F] text-base font-medium'>
              anyPOS is a cloud-based platform that can also work offline. All offline transactions are automatically synced with your store’s cloud once you get back online. So, continue selling, even when there’s no internet.
            </p>
          </div>
          <div className=''>
            <Image src={Online} alt="banner" priority={true} />
          </div>
        </div>
      </section>

      <section className='relative py-10 bg-gradient-to-tr from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF]'>
        <div className="custom-shape-divider-top-1670933909">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>

        <div className='container mx-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <Image src={Payments} alt="banner" />
          </div>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
              Accept Payments
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              With any POS you can accept payment quickly and easily. We are integrated with all major payment gateways of Saudi Arabia.
            </p>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1670924415">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='relative py-10 '>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
              High Level Reports
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              anyPOS central dashboard gives you an ability to review sales, customer, and overall business performances. Make better decisions with anyPOS cloud-based POS.
            </p>
          </div>
          <div className=''>
            <Image src={Reports} alt="banner" />
          </div>
        </div>
      </section>

      <section id="pricing" className='relative py-10 bg-[#6482F4]'>
        <div className="custom-shape-divider-top-1670933909 ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>

        <div className='container mx-auto pt-16 text-center mb-5'>
          <h2 className='text-white md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
            Simple Billing Plan's
          </h2>
        </div>
        <div className='container mx-auto pb-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <ul className='flex flex-col space-y-2'>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                e-invoicing enabled
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Worked online and offline
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Unlimited products
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Multi-Type Payments
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Import/edit products by a CSV file
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Print daily sell summary report
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Various sales reports
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Customer management system
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Stock management
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dashboard (Real-time sale dashboard)
              </li>
              <li className='text-white text-base font-medium flex items-center group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1 text-white group-hover:text-[#FF4014]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Store e-invoices online
              </li>
            </ul>
          </div>
          <div className=''>
            <Pricing />
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1670924415">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section id="contact" className='relative py-10 bg-gradient-to-br from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF]'>
        <div className='container mx-auto text-center mb-5'>
          <h2 className='text-[#2A2A2A] md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
            Start your free 14-day trial
          </h2>
        </div>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className='grid justify-center'>
            <Image src={Email} alt="banner" className='mx-auto mb-3' />
            <h3 className='text-[#2A2A2A] md:text-[26px] leading-[1em] font-medium tracking-[0.5px] mb-3'>E-MAIL US</h3>
            <Link href="mailto:hi@anypos.app" target="_blank"
              className='text-[#2A2A2A] md:text-[18px] leading-[1em] font-medium tracking-[0.5px]'>
              hi@anypos.app
            </Link>
          </div>
          <div className=''>
            <form className='grid gap-5'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-10 gap-5'>
                <input className="border border-[#02010126] text-base w-full font-normal leading-none text-[#585858] p-4 focus:outline-none bg-white placeholder-[#585858]"
                  type='text'
                  name='name'
                  id="name"
                  placeholder="Name" />
                <input className="border border-[#02010126] text-base w-full font-normal leading-none text-[#585858] p-4 focus:outline-none bg-white placeholder-[#585858]"
                  type='email'
                  name='email'
                  id="email"
                  placeholder="Email" />
              </div>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-10 gap-5'>
                <input className="border border-[#02010126] text-base w-full font-normal leading-none text-[#585858] p-4 focus:outline-none bg-white placeholder-[#585858]"
                  type='tel'
                  name='phone'
                  id="phone"
                  placeholder="Phone" />
                <input className="border border-[#02010126] text-base w-full font-normal leading-none text-[#585858] p-4 focus:outline-none bg-white placeholder-[#585858]"
                  type='url'
                  name='website'
                  id="website"
                  placeholder="Website" />
              </div>
              <div className=''>
                <textarea className="border border-[#02010126] text-base w-full font-normal leading-none text-[#585858] p-4 focus:outline-none bg-white placeholder-[#585858]"
                  rows={3}
                  name='message'
                  id="message"
                  placeholder="Your Need & Description" ></textarea>

              </div>
              <div>
                <Link href="#" className="text-[18px] font-semibold md:inline-block block text-center mt-5 text-white border-2 border-[#7F98F6] bg-[#7F98F6] hover:bg-transparent hover:text-[#7F98F6] py-[10px] px-[30px]">
                  submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

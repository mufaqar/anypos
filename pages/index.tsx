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
import { useTranslation } from 'next-export-i18n';

export default function Home() {
  const { t } = useTranslation();

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
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
              {t('features1.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features1.sub_heading')}
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
              {t('features2.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features2.sub_heading')}
            </p>
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
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
              {t('features3.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features3.sub_heading')}
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
              {t('features4.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features4.sub_heading')}
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
              {t('features5.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features5.sub_heading')}
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
              {t('features6.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features6.sub_heading')}
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
            {t('billing.heading')}
          </h2>
        </div>
        <div className='container mx-auto pb-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <ul className='flex flex-col space-y-2'>
           <li>
           {t('billing.list')}
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
            {t('contact.heading')}
          </h2>
        </div>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className='grid justify-center'>
            <Image src={Email} alt="banner" className='mx-auto mb-3' />
            <h3 className='text-[#2A2A2A] md:text-[26px] leading-[1em] font-medium tracking-[0.5px] mb-3'>
              {t('contact.email_heading')}
            </h3>
            <Link href="mailto:hi@anypos.app" target="_blank"
              className='text-[#2A2A2A] md:text-[18px] leading-[1em] font-medium tracking-[0.5px]'>
              {t('contact.email_title')}
            </Link>
          </div>
          <div className=''>
            <form className='grid gap-5'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
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
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
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

import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/banner';
import Features from '../components/features';
import ImageBox from '../components/image_box';
import Hand from '../public/images/hand.png';
import Android from '../public/images/android.png';
import Circle from '../public/images/circle.png';
import Saudi from '../public/images/saudi.png';
import Payments from '../public/images/payments.png';
import { useTranslation } from 'next-export-i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Banner />

      <Features />

      <section className='relative md:py-[13rem] py-[5rem] md:bg-[url(/images/hand.png)] bg-cover bg-no-repeat bg-center bg-[#E2F0FB] '>
        <div className='container mx-auto flex md:flex-row flex-col-reverse md:gap-0 gap-10 items-center'>
          <div className=''>
            <Image src={Hand} alt="banner" className='md:hidden block' />
          </div>
          <div className='md:w-1/2 ml-auto'>
            <h1 className='text-[#2A2A2A] md:text-[52px] text-[36px] leading-[1em] font-medium tracking-[0.5px] mb-4'>Get The Best Deal...!</h1>
            <ul>
              <li className='text-[#54595F] text-lg font-medium flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-6 rounded text-[#4267F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg> Buy the POS terminal and get any free any POS software for 12 months.
              </li>
              <li className='text-[#54595F] text-lg font-medium flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-6 rounded text-[#4267F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg> Pay in easy 3 months instalments.
              </li>
              <li className='text-[#54595F] text-lg font-medium flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-6 rounded text-[#4267F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg> 12 months local warranty .
              </li>
            </ul>
            <Link href="#" className="text-sm font-semibold uppercase inline-block mt-10 text-[#4267F1] border-2 border-[#4267F1] bg-transparent hover:bg-[#4267F1] hover:text-white rounded-[10px] py-[8px] px-[24px]">
              Get it now
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className='container mx-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className=''>
            <h3 className='text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5'>
              {t('features5.heading')}
            </h3>
            <p className='text-[#54595F] text-base font-medium'>
              {t('features5.sub_heading')}
            </p>
          </div>
          <div className=''>
            <Image src={Payments} alt="banner" />
          </div>
        </div>
      </section>

      <section id="features" className="relative py-10">
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 ">
        <ImageBox
          Featue_Img={Android}
          size="w-1/6"
          title=""
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="grid gap-3 justify-items-center text-center" />
          <ImageBox
          Featue_Img={Android}
          size="w-1/6"
          title=""
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="grid gap-3 justify-items-center text-center" />
          <ImageBox
          Featue_Img={Android}
          size="w-1/6"
          title=""
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="grid gap-3 justify-items-center text-center" />
      </div>
    </section>

      


    </>
  )
}

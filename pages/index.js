import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/banner';
import Features from '../components/features';
import Hand from '../public/images/hand.png';
import Support from '../public/images/sport.png';
import Emal from '../public/images/eml.png';
import Address from '../public/images/address.png';
import Phone from '../public/images/phone.png';
import { useTranslation } from 'next-export-i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Banner />
      <Features />
      <section
        id="pricing"
        className="flip relative md:py-[13rem] py-[9rem] md:bg-[url(/images/hand.png)] bg-cover bg-no-repeat bg-center bg-[#E2F0FB] "
      >
        <div className="custom-shape-divider-top-1670933909">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto flex md:flex-row flex-col-reverse md:gap-0 gap-10 items-center">
          <div className="">
            <Image src={Hand} alt="banner" className="md:hidden block" />
          </div>
          <div className="md:w-1/2 ml-auto">
            <h1 className="text-[#2A2A2A] md:text-[52px] text-[36px] leading-[1em] font-medium tracking-[0.5px] mb-4">
              {t('deal.heading')}
            </h1>
            <ul>
              <li className="text-[#54595F] text-lg font-medium flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-8 h-6 rounded text-[#4267F1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>{' '}
                {t('deal.list')}
              </li>
              <li className="text-[#54595F] text-lg font-medium flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-8 h-6 rounded text-[#4267F1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>{' '}
                {t('deal.list2')}
              </li>
            </ul>

            <Link
              href="/wiseasy"
              className="text-sm font-semibold uppercase inline-block mt-10 text-[#4267F1] border-2 border-[#4267F1] bg-transparent hover:bg-[#4267F1] hover:text-white rounded-[10px] py-[8px] px-[24px]"
            >
              POS Device
            </Link>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1670927066">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="relative py-8">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="">
            <h3 className="text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5">
              {t('support.heading')}
            </h3>
            <p className="text-[#54595F] text-lg font-medium max-w-xs">
              {t('support.sub_heading')}
            </p>
          </div>
          <div className="md:flex md:justify-end">
            <Image src={Support} alt="banner" className="md:w-3/4 w-full " />
          </div>
        </div>
      </section>
      <section id="contact" className="relative py-10">
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 ">
          <div className="grid gap-2 py-3 justify-items-center text-center border border-[]">
            <Image src={Address} alt="" className="w-1/4" />
            <h3 className="text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px]">
              Address
            </h3>
            <p className="text-[#5C5C5C] text-xl font-normal"></p>
          </div>
          <div className="grid gap-2 py-3 justify-items-center text-center border border-[]">
            <Image src={Emal} alt="" className="w-1/4" />
            <h3 className="text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px]">
              E-mail
            </h3>
            <Link
              href="mailto:info@anypos.app"
              target="_blank"
              className="text-[#5C5C5C] text-xl font-normal"
            ></Link>
          </div>
          <div className="grid gap-2 py-3 justify-items-center text-center border border-[]">
            <Image src={Phone} alt="" className="w-1/4" />
            <h3 className="text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px]">
              Phone
            </h3>
            <Link
              href="tel:1-800-820-9814"
              target="_blank"
              className="text-[#5C5C5C] text-xl font-normal"
            ></Link>
          </div>
        </div>
      </section>
    </>
  );
}

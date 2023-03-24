import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//import TawkTo from 'tawkto-react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import LogoWhite from '../public/images/logo-white.png';
import LogoGoogle from '../public/images/google.png';
import { useEffect, useState } from 'react';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import Script from 'next/script';
import tawlk from '../public/script';

export default function Footer() {
  const { t } = useTranslation();
  const [switch_flang, set_switch_flang] = useState(false);
  // useEffect(() => {
  //   // const propertyId = '639eea61b0d6371309d4fd77';
  //   // const tawkId = '1gkic73os';
  //   // var tawk = new TawkTo(propertyId, tawkId);

  //   tawk.onStatusChange((status) => {
  //     // console.log(status);
  //   });
  // }, []);

  return (
    <>
      <footer className="relative pt-14 pb-8 bg-[url('/images/footer-bg.svg')] bg-no-repeat bg-cover bg-top">
        <div className="grid container mx-auto my-20 mt-48 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={LogoWhite} alt="Logo" width={200} height={30} />
            <ul className="flex items-center gap-3 mt-8">
              {socials.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="bg-white p-2 hover:shadow-xl cursor-pointer text-[#5427C9] rounded-full"
                  >
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div></div>
          <div className="mt-10 md:mt-0">
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 justify-start text-white  font-extralight text-lg items-start">
                <HiLocationMarker size={35} />

                {t('footer.address')}
              </li>
              <li className="flex gap-2 justify-start text-white  font-extralight text-lg items-start">
                <BsFillEnvelopeFill size={21} />
                <span className="en_font">hi@anypos.app</span>
              </li>
              <li className="flex gap-2 justify-start text-white  font-extralight text-lg items-start">
                <BsFillTelephoneFill size={21} />
                {t('footer.mobile')}
              </li>
            </ul>
          </div>
          <div className="flex md:justify-center mt-10 md:mt-0">
            <ul className="flex flex-col gap-7">
              {footerNav.map((nav, idx) => {
                return (
                  <li key={idx} className="text-white  font-extralight">
                    <Link href={nav.link}>{t(`footer.link${idx + 1}`)}</Link>
                  </li>
                );
              })}

              <LanguageSwitcher lang={switch_flang ? 'en' : 'ar'}>
                <li
                  onClick={() => set_switch_flang(!switch_flang)}
                  className="text-white  font-extralight"
                >
                  {switch_flang ? 'English' : 'العربية'}
                </li>
              </LanguageSwitcher>

              <li>
                <Image src={LogoGoogle} alt="Logo" width={200} height={62} />
              </li>
            </ul>
          </div>
        </div>
        <section className="container mx-auto text-white md:flex justify-between items-center">
          <p className="font-light text-center mb-5 md:mb-0 md:text-left ">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <Link className="hover:underline" href="privacy-policy">
              {t('footer.pp')}
            </Link>
            <Link className="hover:underline" href="/terms-of-service">
              {t('footer.tu')}
            </Link>
            <Link className="hover:underline" href="acceptable-use-policy">
              {t('footer.cp')}
            </Link>
          </div>
        </section>
      </footer>
      <Script src={tawlk}></Script>
    </>
  );
}

const socials = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/profile.php?id=100090413934551&mibextid=LQQJ4d',
  },
  {
    icon: <FiInstagram />,
    link: 'https://instagram.com/any__pos?igshid=YmMyMTA2M2Y=',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/anypossocial?s=11&t=jQfRVt7Utg9jlhHOybpOSQ',
  },
  {
    icon: <FaYoutube />,
    link: 'https://youtube.com/@anyposApp',
  },
];

const footerNav = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Features',
    link: '#features',
  },
];

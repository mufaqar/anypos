import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//import TawkTo from 'tawkto-react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
} from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import LogoWhite from '../public/images/logo-white.png';
import LogoGoogle from '../public/images/google.png';
import LogoApple from '../public/images/apple.png';

import { useEffect, useState } from 'react';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import Script from 'next/script';

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
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/639eea61b0d6371309d4fd77/1gkic73os"
      />
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
                {t('footer.c_name')}
              </li>
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
              <li className="flex gap-2 justify-start text-white  font-extralight text-lg items-start">
                Official timings
              </li>
              <li className="flex gap-2 justify-start text-white  font-extralight text-lg items-start">
                9:00 am to 05:00 pm
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
                <a
                  href="https://play.google.com/store/apps/details?id=com.anyposmobileapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={LogoGoogle}
                    alt="Google Playstore"
                    width={200}
                    height={62}
                  />
                </a>
              </li>
              <li>
                <Image src={LogoApple} alt="APPLE" width={200} height={62} />
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
    </>
  );
}

const socials = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/profile.php?id=100090951673490',
  },
  {
    icon: <FiInstagram />,
    link: 'https://www.instagram.com/anypos.app/',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/AnyPOSapp',
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/channel/UCUYHhIZaoY58sHB8uhbMofQ',
  },
  {
    icon: <FaTiktok />,
    link: 'https://www.tiktok.com/@anypos.app?_t=8av0mX1YkE5&_r=1',
  },
  {
    icon: <FaSnapchat />,
    link: 'https://www.snapchat.com/add/anypos.social',
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

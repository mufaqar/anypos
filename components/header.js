import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../public/images/logo.svg';
import LogoWhite from '../public/images/logo-white.png';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Header() {
  const { t } = useTranslation();
  const [navbar, setNavbar] = useState(false);
  const [switch_lang, set_switch_lang] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '20' ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <header
        className={`fixed top-0 md:px-4 left-0 right-0 transition-all duration-500 ease-in-out  z-10 ${
          headerClr && 'bg-white'
        }`}
      >
        <Head>
          <title>anypos | Point of sale in any device</title>
          <meta
            name="description"
            content="Simple solution for Simplified Invoice"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className="relative w-full">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/" onClick={() => setNavbar(false)}>
                  <Image
                    src={headerClr ? Logo : LogoWhite}
                    alt="Logo"
                    width={170}
                    height={30}
                  />
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#373737]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#373737]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div
                className={`flex-1 justify-self-center md:block ${
                  navbar
                    ? 'block max-md:absolute max-md:top-16 max-md:left-0 max-md:right-0 max-md:z-20 max-md:bg-[#E2F0FB] px-4 py-5'
                    : 'hidden'
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 gap-6 top_nav">
                  <li
                    className={`text-base font-semibold tracking-wider  hover:underline ${
                      headerClr
                        ? 'text-[#FF4014]'
                        : 'md:text-white text-[#FF4014]'
                    }`}
                  >
                    <Link href="#home" onClick={() => setNavbar(false)}>
                      {t('navlist.home')}
                    </Link>
                  </li>

                  <li
                    className={`text-base font-semibold tracking-wider  hover:underline ${
                      headerClr
                        ? 'text-[#FF4014]'
                        : 'md:text-white text-[#FF4014]'
                    }`}
                  >
                    <Link href="#features" onClick={() => setNavbar(false)}>
                      {t('navlist.features')}
                    </Link>
                  </li>

                  <li
                    className={`text-base font-semibold tracking-wider  hover:underline ${
                      headerClr
                        ? 'text-[#FF4014]'
                        : 'md:text-white text-[#FF4014]'
                    }`}
                  >
                    <Link href="#contact" onClick={() => setNavbar(false)}>
                      {t('navlist.contact')}
                    </Link>
                  </li>
                  <li
                    className={`text-base font-semibold tracking-wider uppercase underline  hover:underline ${
                      headerClr
                        ? 'text-[#FF4014]'
                        : 'md:text-white text-[#FF4014]'
                    }`}
                  >
                    <Link
                      href="https://portal.anypos.app/login"
                      onClick={() => setNavbar(false)}
                    >
                      {t('navlist.login')}
                    </Link>
                  </li>
                </ul>
                <div className="md:hidden mt-5">
                  <LanguageSwitcher lang={switch_lang ? 'en' : 'ar'}>
                    <div
                      className={`lang_btn text-sm font-semibold uppercase inline-block  rounded-md py-[10px] px-[24px] hover:shadow-lg ${
                        headerClr
                          ? 'bg-[#4267F1] text-white'
                          : 'text-[#fff] bg-[#5DCCDA]'
                      }`}
                      onClick={() => set_switch_lang(!switch_lang)}
                    >
                      {switch_lang ? 'English' : 'العربية'}
                    </div>
                  </LanguageSwitcher>
                </div>
              </div>
              <div className="md:block hidden">
                <div className="flex items-center justify-between py-3 md:py-5 gap-3 ar_text">
                  <LanguageSwitcher lang={switch_lang ? 'en' : 'ar'}>
                    <div
                      className={`lang_btn text-sm font-semibold uppercase inline-block  rounded-md py-[10px] px-[24px] hover:shadow-lg ${
                        headerClr
                          ? 'bg-[#4267F1] text-white'
                          : 'text-[#4267F1] bg-white'
                      }`}
                      onClick={() => set_switch_lang(!switch_lang)}
                    >
                      {switch_lang ? 'English' : 'العربية'}
                    </div>
                  </LanguageSwitcher>
                  <a href="https://portal.anypos.app/register" className="">
                    <div className="text-sm font-semibold uppercase inline-block text-white bg-[#5DCCDA] hover:text-white rounded-md py-[10px] px-[24px] hover:shadow-lg">
                      {t('navlist.demo')}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

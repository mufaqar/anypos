import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.svg';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';
import Form from '../components/form';
import Modal from 'react-modal';

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
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Head>
          <title>AnyPos</title>
          <meta
            name="description"
            content="Create Next JS Responsive Menu with Tailwind CSS"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className="relative w-full bg-gradient-to-r from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF] border-b border-[#02010112]">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/" onClick={() => setNavbar(false)}>
                  <Image src={Logo} alt="Logo" className="md:w-1/2 w-1/3" />
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
            <div>
              <div
                className={`flex-1 justify-self-center md:block ${
                  navbar
                    ? 'block max-md:absolute max-md:top-16 max-md:left-0 max-md:right-0 max-md:z-20 max-md:bg-[#E2F0FB] px-4 py-5'
                    : 'hidden'
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-[#373737] text-base font-semibold tracking-wider">
                    <Link href="/" onClick={() => setNavbar(false)}>
                      {t('navlist.home')}
                    </Link>
                  </li>
                  <li className="text-[#373737] text-base font-semibold tracking-wider">
                    <Link href="/wiseasy" onClick={() => setNavbar(false)}>
                      {t('navlist.pos')}
                    </Link>
                  </li>
                  <li className="text-[#373737] text-base font-semibold tracking-wider">
                    <Link href="/#features" onClick={() => setNavbar(false)}>
                      {t('navlist.features')}
                    </Link>
                  </li>
                  <li className="text-[#373737] text-base font-semibold tracking-wider">
                    <Link href="/#pricing" onClick={() => setNavbar(false)}>
                      {t('navlist.packages')}
                    </Link>
                  </li>
                  <li className="text-[#373737] text-base font-semibold tracking-wider">
                    <Link href="/#contact" onClick={() => setNavbar(false)}>
                      {t('navlist.contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:block hidden'>
              <div className="flex items-center justify-between py-3 md:py-5 gap-3">
                <LanguageSwitcher lang={switch_lang ? 'en' : 'ar'}>
                  <div
                    className="text-sm font-semibold uppercase inline-block text-[#FF4014] border-2 border-[#FF4014] bg-transparent hover:bg-[#FF4014] hover:text-white rounded-[10px] py-[8px] px-[24px]"
                    onClick={() => set_switch_lang(!switch_lang)}
                  >
                    {switch_lang ? 'English' : 'Arabic'}
                  </div>
                </LanguageSwitcher>

                <div
                  onClick={openModal}
                  className="text-sm font-semibold uppercase inline-block text-[#4267F1] border-2 border-[#4267F1] bg-transparent hover:bg-[#4267F1] hover:text-white rounded-[10px] py-[8px] px-[24px]"
                >
                  {t('navlist.demo')}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form />
      </Modal>
    </>
  );
}

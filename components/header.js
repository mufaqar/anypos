import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.svg';


export default function Header() {
    const [navbar, setNavbar] = useState(false);
    return (
        <header className='fixed top-0 left-0 right-0 z-10'>
            <Head>
                <title>Anypose</title>
                <meta
                    name="description"
                    content="Create Next JS Responsive Menu with Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="relative w-full bg-gradient-to-r from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF] border-b border-[#02010112]">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/" onClick={() => setNavbar(false)}>
                                <Image src={Logo} alt="Logo" className='md:w-1/2 w-1/3' />
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
                            className={`flex-1 justify-self-center md:block ${navbar ? 'block max-md:absolute max-md:top-16 max-md:left-0 max-md:right-0 max-md:z-20 max-md:bg-[#E2F0FB] px-4 py-5' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-[#373737] text-base font-semibold tracking-wider">
                                    <Link href="/" onClick={() => setNavbar(false)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="text-[#373737] text-base font-semibold tracking-wider">
                                    <Link href="#" onClick={() => setNavbar(false)}>
                                        POS Device
                                    </Link>
                                </li>
                                <li className="text-[#373737] text-base font-semibold tracking-wider">
                                    <Link href="/#features" onClick={() => setNavbar(false)}>
                                        Features
                                    </Link>
                                </li>
                                <li className="text-[#373737] text-base font-semibold tracking-wider">
                                    <Link href="/#pricing" onClick={() => setNavbar(false)}>
                                        Pricing/Packages
                                    </Link>
                                </li>
                                <li className="text-[#373737] text-base font-semibold tracking-wider">
                                    <Link href="/#contact" onClick={() => setNavbar(false)}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
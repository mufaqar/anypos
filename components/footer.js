import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FtLogo from '../public/images/ftlogo.png';
import { useTranslation } from 'next-export-i18n';

export default function Footer() {
    const { t } = useTranslation();

    return (


        <footer className='relative bg-[#6482F4] pt-14 pb-8'>
            <div className="custom-shape-divider-top-1670933909">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='container mx-auto pt-16 grid grid-cols-1 gap-5 items-center'>
                <div className='grid justify-center'>
                    <Image src={FtLogo} alt='logo' />
                </div>
                <div>
                    <ul className='flex gap-2 justify-center'>
                        <li>
                            <Link href="#" target='_blank'>
                                <svg className="md:h-10 md:w-10 h-8 w-8 md:p-2 p-1 text-white border border-white rounded-full bg-transparent hover:bg-[#FF4014] hover:border-[#FF4014]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/anyposapp?s=21&t=SH40O0hc32J-9PQ1Dm8Wpg" target='_blank'>
                                <svg className="md:h-10 md:w-10 h-8 w-8 md:p-2 p-1 text-white border border-white rounded-full bg-transparent hover:bg-[#FF4014] hover:border-[#FF4014]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" target='_blank'>
                                <svg className="md:h-10 md:w-10 h-8 w-8 md:p-2 p-1 text-white border border-white rounded-full bg-transparent hover:bg-[#FF4014] hover:border-[#FF4014]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='md:flex gap-3 justify-center text-center'>
                        <li>
                            <Link href="/privacy-policy" className='text-white text-base font-medium'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-of-service" className='text-white text-base font-medium'>
                                Website Terms Of Use
                            </Link>
                        </li>
                        <li>
                            <Link href="/acceptable-use-policy" className='text-white text-base font-medium'>
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='grid justify-center'>
                    <p className='text-white text-base font-medium'>
                        {t('footer.copyright')}
                    </p>
                </div>                
            </div>
        </footer>
    )
}

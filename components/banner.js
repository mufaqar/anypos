import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Img from '../public/images/anypose.png';

export default function Banner() {
  return (
    <section className='relative py-20 bg-gradient-to-tr from-[#E2F0FB] via-[#E2F0FB] to-[#FFFFFF]'>
        <div className="custom-shape-divider-bottom-1670927066">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div>

        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 items-center'>
            <div className='col-span-2'>
                <h3 className='text-[#2A2A2A] md:text-[32px] leading-[1em] font-medium tracking-[0.5px]'>Simple solution for</h3>
                <h1 className='text-[#2A2A2A] md:text-[60px] font-medium tracking-[0.5px]'>Simplified Invoice</h1>
                <h3 className='text-[#2A2A2A] md:text-[32px] leading-[1em] font-medium tracking-[0.5px]'>Point of sale in any device.</h3>
                <Link href="#" className="text-sm font-semibold uppercase inline-block mt-10 text-[#4267F1] border-2 border-[#4267F1] bg-transparent hover:bg-[#4267F1] hover:text-white rounded-[10px] py-[8px] px-[24px]">
                Get any pos
                </Link>
            </div>
            <div className='flex justify-end'>
                <Image src={Img} alt="banner" priority="true" />
            </div>
        </div>
    </section>
  )
}

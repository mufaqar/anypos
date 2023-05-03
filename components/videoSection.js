import Image from 'next/image';
import React from 'react';
import Moka from '../public/images/moka.jpeg';
import MokaBackend from '../public/images/backend.jpeg';
import MokaAbout from '../public/images/moka-about.jpeg';
import { BsPlayCircle } from 'react-icons/bs';
import Link from 'next/link';

function Video_Section() {
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-[#2A2A2A] text-center pl-2 md:text-5xl mt-3 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-14">
        Watch Our Videos
      </h2>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-16 '>
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <div className='md:h-[348px] h-[275px] w-full rounded-[15px] relative'>
                <Image src={item.image} alt="" className='object-cover w-full h-full rounded-[15px]' />
                <Link href={item.video_link} >
                  <BsPlayCircle className='absolute text-white inset-0 z-10 text-7xl w-[76px] h-[76px] m-auto' />
                </Link>
              </div>
              <div className='mt-8'>
                <h4 className='font-semibold text-2xl'>
                  {item.title}
                </h4>
                <div className='bg-[#00b4eb] w-20 h-[3px] mt-5'></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Video_Section

const data = [
  {
    title: 'Demonstration Videos',
    video_link: '#',
    image: Moka,
  },
  {
    title: 'Back-office Tutorials',
    video_link: '#',
    image: MokaBackend,
  },
  {
    title: 'About Moka',
    video_link: '#',
    image: MokaAbout,
  },
];
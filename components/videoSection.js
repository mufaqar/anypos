import Image from 'next/image';
import React from 'react';
import Moka from '../public/images/moka.jpeg';
import MokaBackend from '../public/images/backend.jpg';
import MokaAbout from '../public/images/any-about.jpg';
import { BsPlayCircle } from 'react-icons/bs';
import Link from 'next/link';
import { useTranslation } from 'next-export-i18n';

function Video_Section() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-[#2A2A2A] text-center pl-2 md:text-5xl mt-3 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-14">
        {t('videos.title')}
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-16 ">
        <div>
          <div className="md:h-[348px] h-[275px] w-full rounded-[15px] relative">
            <Image
              src={Moka}
              alt=""
              className="object-cover w-full h-full rounded-[15px]"
            />
            <Link href={t('videos.sec1.link')}>
              <BsPlayCircle className="absolute text-white inset-0 z-auto text-7xl w-[76px] h-[76px] m-auto" />
            </Link>
          </div>
          <div className="mt-8">
            <h4 className="font-semibold text-2xl">
              {' '}
              {t('videos.sec1.title')}
            </h4>
            <div className="bg-[#00b4eb] w-20 h-[3px] mt-5"></div>
          </div>
        </div>
        <div>
          <div className="md:h-[348px] h-[275px] w-full rounded-[15px] relative">
            <Image
              src={Moka}
              alt=""
              className="object-cover w-full h-full rounded-[15px]"
            />
            <Link href={t('videos.sec2.link')}>
              <BsPlayCircle className="absolute text-white inset-0 z-auto text-7xl w-[76px] h-[76px] m-auto" />
            </Link>
          </div>
          <div className="mt-8">
            <h4 className="font-semibold text-2xl">{t('videos.sec2.title')}</h4>
            <div className="bg-[#00b4eb] w-20 h-[3px] mt-5"></div>
          </div>
        </div>
        <div>
          <div className="md:h-[348px] h-[275px] w-full rounded-[15px] relative">
            <Image
              src={Moka}
              alt=""
              className="object-cover w-full h-full rounded-[15px]"
            />
            <Link href={t('videos.sec3.link')}>
              <BsPlayCircle className="absolute text-white inset-0 z-auto text-7xl w-[76px] h-[76px] m-auto" />
            </Link>
          </div>
          <div className="mt-8">
            <h4 className="font-semibold text-2xl">
              {' '}
              {t('videos.sec3.title')}
            </h4>
            <div className="bg-[#00b4eb] w-20 h-[3px] mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video_Section;

const data = [
  {
    title: 'Demonstration Videos',
    video_link: 'https://youtu.be/_ahG22s9vh0',
    image: Moka,
  },
  {
    title: 'Back-office Tutorials',
    video_link: 'https://youtu.be/_ahG22s9vh0',
    image: MokaBackend,
  },
  {
    title: 'About anypos',
    video_link: 'https://www.youtube.com/watch?v=5thFvlw2zNo&ab_channel=anypos',
    image: MokaAbout,
  },
];

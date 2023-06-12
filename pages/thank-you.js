import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'next-export-i18n';

export default function Thanks() {
  const { t } = useTranslation();

  return (
    <>
      <section id="home" className=" py-[450px] main">
        <Image
          src="/images/fondo-banner.png"
          className="absolute -bottom-1 w-full home_en"
          alt="background Banner"
          width={1840}
          height={641}
        />
        <Image
          src="/images/circle-design.svg"
          alt="circle"
          width={280}
          height={300}
          className="-bottom-10 right-0 absolute circle_en"
        />
        <Image
          src="/images/c2.svg"
          alt="circle"
          width={120}
          height={300}
          className="-bottom-0 right-80 absolute circle2_en"
        />
      </section>

      <div className="max-w-[650px] w-full relative  mt-[-750px] mx-auto  items-center banner bg-white rounded-3xl text-center p-7 ">
        <div className="flex flex-col justify-center items-center">
          <figure className="bg-[#5DCCDA] rounded-full p-6 flex  justify-center items-center my-5">
            <Image
              src="/images/thank.svg"
              className=" w-16 "
              alt="background Banner"
              width={99}
              height={122}
            />
          </figure>
          <h1 className="text-black md:text-[20px] leading-[1em] font-medium tracking-[0.5px] mb-4">
            {t('thanks.title')}
          </h1>
          <h2 className="text-black text-[24px] leading-[1.6em] font-bold tracking-[0.5px] mb-4">
            {t('thanks.heading')}
          </h2>
          <h3 className="text-black md:text-[18px] leading-[1.2em] font-medium tracking-[0.5px] mb-4">
            {t('thanks.beforetel')}
            <Link href="tel:+966115207077">
              {' '}
              <span className="text-[#5DCCDA]">+ {t('thanks.mobile')}</span>
            </Link>{' '}
            {t('thanks.aftertel')}
          </h3>
          <h3 className="text-black md:text-[18px] leading-[1.2em] font-medium tracking-[0.5px] mb-4">
            {t('thanks.message')}
          </h3>
        </div>
      </div>
    </>
  );
}

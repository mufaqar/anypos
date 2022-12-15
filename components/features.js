import React from 'react';
import Img_Cpos from '../public/images/cpos.png';
import Image from 'next/image';
import { useTranslation } from 'next-export-i18n';

export default function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="relative py-10">
      <div className="container mx-auto text-center mb-5">
        <h2 className="text-[#2A2A2A] md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5">
          {t('features.heading')}
        </h2>
        <p className="text-[#5C5C5C] text-base font-normal">
          {t('features.sub_heading')}
        </p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div className="">
          <h3 className="text-[#2A2A2A] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-5">
            {t('features.feature_title')}
          </h3>
          <ul>
            <li className="text-[#54595F] text-base font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-6 rounded text-[#4267F1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
              {t('features.feature_list1')}
            </li>
            <li className="text-[#54595F] text-base font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-6 rounded text-[#4267F1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>{' '}
              Sell on the go
            </li>
            <li className="text-[#54595F] text-base font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-6 rounded text-[#4267F1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>{' '}
              Sell online
            </li>
          </ul>
        </div>
        <div className="">
          <Image src={Img_Cpos} alt="banner" priority={true} />
        </div>
      </div>
    </section>
  );
}

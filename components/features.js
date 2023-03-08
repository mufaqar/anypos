import React, { useRef } from 'react';
import ImageBox from '../components/image_box';
import Icon1 from '../public/images/icon1.svg';
import Icon2 from '../public/images/icon2.svg';
import Icon3 from '../public/images/icon3.svg';
import Icon4 from '../public/images/icon4.svg';
import Icon5 from '../public/images/icon5.svg';
import Icon6 from '../public/images/icon6.svg';
import Icon7 from '../public/images/icon7.svg';
import Icon8 from '../public/images/icon8.svg';
import Icon9 from '../public/images/icon9.svg';
import Icon10 from '../public/images/icon10.svg';
import { useTranslation } from 'next-export-i18n';
import Slider from 'react-slick';
import Image from 'next/image';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { MdOutlinePictureAsPdf } from 'react-icons/md';

export default function Features() {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="features" className="relative py-20 mt-20">
      <div className="container mx-auto mb-10">
        <h4 className="upparcase font-semibold text-lg  text-[#542ACA]">
          {t('features.tag')}
        </h4>
        <h2 className="text-[#2A2A2A] md:text-[36px] mt-3 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-5">
          {t('features.heading')}
        </h2>
        <p className="max-w-[500px] text-gray-500 font-light">
          {t('features.short_info')}
        </p>
      </div>
      <div className="container relative mx-auto ">
        <Slider ref={sliderRef} {...settings}>
          {FeatureData.map((feature, idx) => {
            return (
              <div key={idx} className="relative p-2">
                <div className="bg-white p-10 min-h-[300px] rounded-md">
                  <div className="bg-[#E9DEFC] min-h-[90px] flex justify-center absolute p-3 px-8 z-10 -top-10 rounded-2xl">
                    <Image
                      src={feature?.Featue_Img?.src}
                      alt="image"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3 className="font-bold text-xl mt-10">
                    {t(`features${idx + 1}.heading`)}
                  </h3>
                  <p className=" font-light text-gray-600 mt-2">
                    {t(`features${idx + 1}.sub_heading`)}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="hidden md:block">
          <button
            className="text-[#4529C7] bg-white p-2 px-2 absolute top-1/2 -left-7 transform "
            onClick={previous}
          >
            <BsArrowLeft size={22} />
          </button>
          <button
            className="text-[#4529C7] bg-white p-2 px-2 absolute top-1/2 -right-7 transform "
            onClick={next}
          >
            <BsArrowRight size={22} />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <a className="uppercase bg-[#5DCCDA] inline-flex items-center gap-1 px-6 text-sm text-white p-3 hover:shadow-xl cursor-pointer rounded-md">
          <span>{t('features.download_btn')} </span>
          <MdOutlinePictureAsPdf color="white" size={20} />
        </a>
      </div>
    </section>
  );
}

const FeatureData = [
  {
    Featue_Img: Icon1,
  },
  {
    Featue_Img: Icon2,
  },
  {
    Featue_Img: Icon3,
  },
  {
    Featue_Img: Icon4,
  },
  {
    Featue_Img: Icon5,
  },
  {
    Featue_Img: Icon6,
  },
  {
    Featue_Img: Icon7,
  },
  {
    Featue_Img: Icon8,
  },
  {
    Featue_Img: Icon9,
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

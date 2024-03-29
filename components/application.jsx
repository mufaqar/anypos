import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import Icon1 from '../public/images/emision.svg';
import Icon2 from '../public/images/app.svg';
import Icon3 from '../public/images/emision.svg';

const Application = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section
      id="application"
      className="relative container mx-auto grid grid-cols-1 md:grid-cols-2"
    >
      <Image
        src="/images/c2.svg"
        alt="circle"
        width={120}
        height={300}
        className="bottom-1/2 -left-20 absolute"
      />
      <div>
        <Image
          src="/images/application.png"
          alt="image"
          width={650}
          height={650}
        />
      </div>
      <div className=" mb-10">
        <h4 className="uppercase pl-2 font-semibold text-lg  text-[#542ACA]">
          {t('application.tag')}
        </h4>
        <h2 className="text-[#2A2A2A] pl-2 md:text-[36px] mt-3 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-5">
          {t('application.title')}
        </h2>
        <p className="max-w-[500px] pl-2 text-gray-500 font-light">
          {t('application.short_info')}
        </p>
        <section className="application">
          <Slider ref={sliderRef} {...settings}>
            {ApplicationData.map((feature, idx) => {
              return (
                <div key={idx} className="relative p-2 ">
                  <div className="bg-white p-6 min-h-[260px] rounded-md">
                    <div className=" min-h-[60px]">
                      <Image
                        src={feature?.Featue_Img?.src}
                        alt="image"
                        width={40}
                        height={60}
                      />
                    </div>
                    <h3 className="font-bold text-xl mt-4">
                      {t(`application.slider${idx + 1}.title`)}
                    </h3>
                    <p className=" font-light text-gray-600 mt-2">
                      {t(`application.slider${idx + 1}.info`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </section>
      </div>
    </section>
  );
};

export default Application;

const ApplicationData = [
  {
    Featue_Img: Icon1,
  },
  {
    Featue_Img: Icon2,
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

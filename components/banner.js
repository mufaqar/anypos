import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Any_device from '../public/images/any_device.png';
import { useTranslation } from 'next-export-i18n';
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
  overlay: { zIndex: 1000 },
};

export default function Banner() {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="home" className="relative py-40 main">
      <div className="container  mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:pl-20">
        <div className="z-[1]">
          <h3 className="text-white md:text-[32px] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-4">
            {t('banner.title')}
          </h3>
          <h1 className="text-white text-[48px] leading-[1.6em] font-bold tracking-[0.5px] mb-4">
            {t('banner.heading')}
          </h1>
          <h3 className="text-white md:text-[32px] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-4">
            {t('banner.sub_heading')}
          </h3>
          <div className="flex items-center gap-6">
            <a
              href="https://portal.anypos.app/register"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold uppercase inline-block mt-5 bg-[#5DCCDA] p-3 px-4 md:px-10 shadow-sm rounded-md hover:shadow-lg text-white "
            >
              {t('banner.btn_text')} <span className="en_font">Anypos</span>
            </a>

            <button
              className=" items-center gap-3 p-3 px-4 md:px-7 text-sm font-semibold uppercase inline-flex mt-5 cursor-pointer bg-white  shadow-sm rounded-md hover:shadow-lg text-[#6433D4]"
              rel="noreferrer"
              onClick={openModal}
            >
              <FaPlay color="#5DCCDA" size={20} className="play_icon" />
              <span> {t('banner.watch_video')} </span>
            </button>
          </div>
        </div>
        <div className="flex justify-end z-[1]">
          <Image src={Any_device} alt="banner" />
        </div>
      </div>
      <Image
        src="/images/fondo-banner.png"
        className="absolute -bottom-1 w-full home_en"
        alt=""
        width={1840}
        height={641}
      />
      <Image
        src="/images/circle-design.svg"
        alt="circle"
        width={280}
        height={300}
        className="-bottom-28 right-0 absolute circle_en"
      />
      <Image
        src="/images/c2.svg"
        alt="circle"
        width={120}
        height={300}
        className="-bottom-0 right-80 absolute circle2_en"
      />

      <div className="z-[2]">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            {/* <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              width="788.54"
              height="443"
              type="text/html"
              src={`${t('banner.video_link')}`}
            ></iframe> */}
            <iframe
              width="560"
              height="315"
              src={`${t('banner.video_link')}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </section>
  );
}

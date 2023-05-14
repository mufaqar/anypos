import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Banner from '../components/banner';
import Features from '../components/features';
import { useTranslation } from 'next-export-i18n';
import Application from '../components/application';
import Video_Section from '../components/videoSection';
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa';
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

export default function Home() {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Banner />
      <Features />
      <Application />
      <section
        id="home"
        className="main gap-16 flex flex-col justify-center items-center relative h-[700px] xl:h-[800px] "
      >
        <Image
          src="/images/_top.png"
          className="absolute right-0 left-0 -top-1 w-full"
          alt="Top Banner"
          width={1840}
          height={236}
        />
        <Image
          src="/images/_bottom.png"
          className="absolute right-0 left-0 -bottom-1 w-full"
          alt="bottom background"
          width={1840}
          height={236}
        />
        <div className="container grid grid-cols-1 items-center md:grid-cols-2 mx-auto">
          <div className="z-[1]">
            <Image src="/images/mbl.png" alt="mbl" width={700} height={500} />
          </div>
          <div className="md:pl-20 ">
            <h3 className="call_banner">{t('mobile_banner.sub_title')}</h3>
            <h2 className="call_sub_banner">{t('mobile_banner.title')}</h2>

            <button
              className=" items-center gap-2 p-3 px-[10px] md:px-7 text-sm font-semibold uppercase inline-flex mt-5 cursor-pointer bg-[#5DCCDA]   shadow-sm rounded-md hover:shadow-lg text-white"
              rel="noreferrer"
              onClick={openModal}
            >
              <FaPlay color="#fff" size={20} className="play_icon" />
              <span> {t('banner.watch_video')} </span>
            </button>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="container relative mx-auto my-20 gap-10 md:gap-28 md:flex"
      >
        <div>
          <h4 className="uppercase pl-2 font-semibold text-lg  text-[#542ACA]">
            {t('choseus.tag')}
          </h4>
          <h2 className="text-[#2A2A2A] pl-2 md:text-5xl mt-3 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-5">
            {t('choseus.title')}
          </h2>
          <div className="flex items-center gap-20">
            <Image
              src="/images/circle-design.svg"
              alt="circle"
              width={280}
              height={300}
              className="-ml-20"
            />
            <Image
              src="/images/circle-design.svg"
              alt="circle"
              width={150}
              height={300}
              className=""
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 w-full lg:pl-40">
          {data.map((item, idx) => {
            return (
              <div className="main rounded-lg w-full" key={idx}>
                <div className="">
                  <h2 className="text-white px-4 mt-3 pt-6 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-6 min-h-[96px]">
                    {' '}
                    {t(`choseus.items${idx + 1}.title`)}
                  </h2>
                  <p className="text-white px-4 pb-6  font-light">
                    {t(`choseus.items${idx + 1}.info`)}
                  </p>
                  <Image
                    src={item.image}
                    alt="circle"
                    width={474}
                    height={334}
                    className="rounded-br-lg rounded-bl-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>

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
                src="https://www.youtube.com/embed/EUc6BeAmCo4"
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

      <section id="videos">
        <Video_Section />
      </section>
    </>
  );
}

const data = [
  {
    title: 'Meets eCommerce.',
    info: 'Sell in-person, online, or from anywhere. Take secure payments from customers, clients, and more.',
    image: '/images/support.jpg',
  },
  {
    title: 'Meets eCommerce.',
    info: 'Sell in-person, online, or from anywhere. Take secure payments from customers, clients, and more.',
    image: '/images/price.jpg',
  },
];

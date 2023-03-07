import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/banner';
import Features from '../components/features';
import { useTranslation } from 'next-export-i18n';
import Application from '../components/application';

export default function Home() {
  const { t } = useTranslation();

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
          alt=""
          width={1840}
          height={236}
        />
        <Image
          src="/images/_bottom.png"
          className="absolute right-0 left-0 -bottom-1 w-full"
          alt=""
          width={1840}
          height={236}
        />
        <div className="container grid grid-cols-1 items-center md:grid-cols-2 mx-auto">
          <div className="z-[1]">
            <Image src="/images/mbl.png" alt="mbl" width={700} height={500} />
          </div>
          <div className="md:pl-20 ">
            <h3 className="text-white font-medium text-3xl md:text-5xl">
              {t('mobile_banner.sub_title')}
            </h3>
            <h2 className="text-white font-bold mt-2 text-4xl md:text-6xl">
              {t('mobile_banner.title')}
            </h2>
            <Link
              className=" items-center gap-3 p-3 px-4 md:px-7 font-semibold uppercase inline-flex mt-5 cursor-pointer bg-[#5DCCDA]  shadow-sm rounded-md hover:shadow-lg text-white"
              href="https://portal.anypos.app/login"
            >
              {t('mobile_banner.btn')}
            </Link>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="container relative mx-auto my-20 gap-10 md:gap-28 md:flex"
      >
        <div>
          <h4 className="uppercase pl-2 font-semibold text-lg font-sans text-[#542ACA]">
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
                  <h2 className="text-white px-4 mt-3 pt-6 text-[32px] leading-[1em] font-bold tracking-[0.5px] mb-6">
                    {' '}
                    {t(`choseus.items${idx + 1}.title`)}
                  </h2>
                  <p className="text-white px-4 pb-6 font-sans font-light">
                    {t(`choseus.items${idx + 1}.info`)}
                  </p>
                  <Image
                    src={item.image}
                    alt="circle"
                    width={550}
                    height={300}
                    className="rounded-br-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

const data = [
  {
    title: 'Meets eCommerce.',
    info: 'Sell in-person, online, or from anywhere. Take secure payments from customers, clients, and more.',
    image: '/images/selling-online.png',
  },
  {
    title: 'Meets eCommerce.',
    info: 'Sell in-person, online, or from anywhere. Take secure payments from customers, clients, and more.',
    image: '/images/selling-online.png',
  },
];

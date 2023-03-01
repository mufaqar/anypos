import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

import Any_device from "../public/images/any_device.png";
import { useTranslation } from "next-export-i18n";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <section className="relative py-40 main">
      <div className="container  mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:pl-20">
        <div className="z-[1]">
          <h3 className="text-white md:text-[32px] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-4">
            {t("banner.title")}
          </h3>
          <h1 className="text-white md:text-[60px] text-[50px] leading-[1em] font-bold tracking-[0.5px] mb-4">
            {t("banner.heading")}
          </h1>
          <h3 className="text-white md:text-[32px] text-[28px] leading-[1em] font-medium tracking-[0.5px] mb-4">
            {t("banner.sub_heading")}
          </h3>
          <div className="flex items-center gap-6">
            <a
              href="https://portal.anypos.app/login"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold uppercase inline-block mt-5 bg-[#5DCCDA] p-3 px-4 md:px-10 shadow-sm rounded-md hover:shadow-lg text-white "
            >
              {t("banner.btn_text")}
            </a>
          
            <Link className=" items-center gap-3 p-3 px-4 md:px-7 text-sm font-semibold uppercase inline-flex mt-5 cursor-pointer bg-white  shadow-sm rounded-md hover:shadow-lg text-[#6433D4]"  href="#">
              <FaPlay color="#5DCCDA" size={20} />
              <span> Watch a video</span>
            </Link>
            
          </div>
        </div>
        <div className="flex justify-end z-[1]">
          <Image src={Any_device} alt="banner" />
        </div>
      </div>
      <img
        src="/images/fondo-banner.png"
        className="absolute -bottom-1 w-full"
      />
    </section>
  );
}

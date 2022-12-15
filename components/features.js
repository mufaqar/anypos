import React from 'react';
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
import { useTranslation } from 'next-export-i18n';

export default function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="relative py-10">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-[#2A2A2A] md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5">
          {t('features.heading')}
        </h2>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 ">
        <ImageBox
          Featue_Img={Icon1}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon2}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon3}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon4}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon5}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon6}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon7}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon8}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={Icon9}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
      </div>
    </section>
  );
}

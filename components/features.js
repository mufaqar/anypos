import React from 'react';
import ImageBox from '../components/image_box';
import OS_icon from '../public/images/1.png';
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
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
          size="w-1/6"
          title="Operating System"
          features={[
            'Android 8.1 WiseOS',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-2" />
          <ImageBox
          Featue_Img={OS_icon}
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

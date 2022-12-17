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
          title="POS on any Device"
          features={[
            'anyPOS software works on any mobile, tab or PC. Get full POS without spending thousands on clunky hardware and legacy software’s.',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon2}
          size="w-1/6"
          title="POS on any Device"
          features={[
            'Print simplified invoices in compliance with ZATCA standards.',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon3}
          size="w-1/6"
          title="It’s on Cloud!"
          features={[
            "As anyPOS is on the cloud so you can access it anytime from anywhere in the word it's available 24/7. See the live progress of your store sales through our integrated dashboard. ",
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon4}
          size="w-1/6"
          title="Record Payments"
          features={[
            'With anyPOS you can Record payment quickly and easily. We Support Mada Visa Master Etc',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon5}
          size="w-1/6"
          title="Online & Offline"
          features={[
            'anyPOS is a cloud-based platform that can also work offline. All offline transactions are automatically synced with your store’s cloud once you get back online. So, continue selling, even when there’s no internet.',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon6}
          size="w-1/6"
          title="Multi-Store Management"
          features={[
            'Manage multiple stores under one account from the dashboard. Track your sales, employees, and customer.',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon7}
          size="w-1/6"
          title="High Level Reports"
          features={[
            'anyPOS central dashboard gives you the ability to review sales, customer, and overall business performances. Make better decisions with anyPOS cloud-based POS.',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon8}
          size="w-1/6"
          title="Win XP"
          features={[
            'No need to change or upgrade your current POS  as anyPOS works on win XP. ',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
        <ImageBox
          Featue_Img={Icon9}
          size="w-1/6"
          title="Multi-Language"
          features={[
            ' anyPOS supports multiple languages, and allows users to use multiple languages on any device.',
          ]}
          variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 px-3 items-start"
        />
      </div>
    </section>
  );
}

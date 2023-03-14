import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ImageBox from '../components/image_box';
import Hand from '../public/images/hand.png';
import Android from '../public/images/android.png';
import Circle from '../public/images/circle.png';
import Saudi from '../public/images/saudi.png';
import Wifi from '../public/images/wifi.png';
import Network from '../public/images/network.png';
import BT from '../public/images/bt.png';
import OS_icon from '../public/images/1.png';
import OS_icon2 from '../public/images/2.png';
import OS_icon3 from '../public/images/3.png';
import OS_icon4 from '../public/images/4.png';
import OS_icon5 from '../public/images/5.png';
import OS_icon6 from '../public/images/6.png';
import OS_icon7 from '../public/images/7.png';
import OS_icon8 from '../public/images/8.png';
import OS_icon9 from '../public/images/9.png';
import OS_icon10 from '../public/images/10.png';
import OS_icon11 from '../public/images/11.png';
import OS_icon12 from '../public/images/12.png';
import OS_icon13 from '../public/images/13.png';
import OS_icon14 from '../public/images/14.png';
import OS_icon15 from '../public/images/15.png';
import OS_icon16 from '../public/images/16.png';
import OS_icon17 from '../public/images/17.png';
import OS_icon18 from '../public/images/18.png';
import OS_icon19 from '../public/images/19.png';
import OS_icon20 from '../public/images/20.png';
import OS_icon21 from '../public/images/21.png';
import OS_icon22 from '../public/images/22.png';
import OS_icon23 from '../public/images/23.png';
import OS_icon24 from '../public/images/24.png';

export default function Wiseasy() {
  return (
    <>
      <section className="flip relative py-[13rem] md:bg-[url(/images/hand.png)] bg-cover bg-no-repeat bg-center bg-[#E2F0FB] ">
        <div className="custom-shape-divider-bottom-1670927066">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto flex md:flex-row flex-col-reverse md:gap-0 gap-10 items-center">
          <div className="">
            <Image src={Hand} alt="banner" className="md:hidden block" />
          </div>
          <div className="md:w-1/2 ml-auto">
            <h1 className="text-[#2A2A2A] md:text-[52px] text-[42px] leading-[1em] font-medium tracking-[0.5px] mb-4">
              Get The Best Deal...!
            </h1>
            <ul>
              <li className="text-[#54595F] text-lg font-medium flex items-center">
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
                Buy the POS terminal and get any free anypos software for 12
                months.
              </li>

              <li className="text-[#54595F] text-lg font-medium flex items-center">
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
                12 months local warranty .
              </li>
            </ul>
            <Link
              href="#"
              className="text-sm font-semibold uppercase inline-block mt-10 text-[#4267F1] border-2 border-[#4267F1] bg-transparent hover:bg-[#4267F1] hover:text-white rounded-[10px] py-[8px] px-[24px]"
            >
              Get it now
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 items-center">
          <ImageBox
            Featue_Img={Android}
            title="More Than Smart"
            features={[
              'Android OS',
              'Exquisite & compact ID design',
              'Powerful battery',
              'Excellent user experience',
            ]}
            variations="grid gap-3 justify-items-center text-center"
          />
          <ImageBox
            Featue_Img={Circle}
            title="More Than Smart"
            features={[
              'Online Top-up',
              'Logistic scanning',
              'Tickets printing',
              'Inventory Management',
            ]}
            variations="grid gap-3 justify-items-center text-center"
          />
          <ImageBox
            Featue_Img={Saudi}
            variations="grid gap-3 justify-items-center text-center"
          />
        </div>
      </section>

      <section className="relative py-14 bg-[#F0F2F5]">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-[#2A2A2A] md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5">
            Supports real-time network connection
          </h2>
          <p className="text-[#5C5C5C] text-xl font-normal">
            N5 plus cloud service stands by anytime to ensure secure deals.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-5">
          <ImageBox
            Featue_Img={Wifi}
            size="w-1/4"
            title="More Than Smart"
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg grid gap-3 justify-items-center"
          />
          <ImageBox
            Featue_Img={Network}
            size="w-1/4"
            title="More Than Smart"
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg grid gap-3 justify-items-center"
          />
          <ImageBox
            Featue_Img={BT}
            size="w-1/4"
            title="More Than Smart"
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg grid gap-3 justify-items-center"
          />
        </div>
      </section>

      <section className="flip relative h-[90vh] bg-[url(/images/spiral.png)] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto text-center pt-10">
          <h2 className="text-[#2A2A2A] md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5">
            Large battery capacity for long business hours
          </h2>
          <p className="text-[#5C5C5C] text-xl font-normal">
            With a 5200mAh battery, N5 is designed to have a 120-hour long
            standby time to satisfy cash register operational needs for your
            business.
          </p>
        </div>
      </section>

      <section className="relative py-14">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-[#2A2A2A] md:text-[36px] text-[32px] leading-[1em] font-medium tracking-[0.5px] mb-5">
            Specification
          </h2>
        </div>
        <div className="container mx-auto grid md:grid-cols-4 grid-cols-1 gap-5">
          <ImageBox
            Featue_Img={OS_icon}
            size="w-1/6"
            title="Operating System"
            features={['Android 8.1 WiseOS']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon2}
            size="w-1/6"
            title="CPU"
            features={['Quad-core']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon3}
            size="w-1/6"
            title="Memory"
            features={['1GB DDR3, 8GB Flash Optional: 2+16GB']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon4}
            size="Displa6"
            title="Operating System"
            features={[
              '5.0 inch,',
              'Resolution:1280*720 High Sensitivity Capacitive Touch Screen',
            ]}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon5}
            size="w-1/6"
            title="Camera"
            features={[
              'Front Camera: 0.3 MP FF (Optional), Rear Camera: 5 MP AF',
            ]}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon6}
            size="w-1/6"
            title="Network"
            features={['2G/3G/4G']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon7}
            size="w-1/6"
            title="Wi-Fi"
            features={['Supports 2.4G, b/g/n']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon8}
            size="w-1/6"
            title="Bluetooth"
            features={['BT 4.0 + BLE']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon9}
            size="w-1/6"
            title="GPS"
            features={['GPS/A- GPS,GLONASS,', 'BEIDOU']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon10}
            size="w-1/6"
            title="NFC"
            features={['ISO/IEC 14443 Type A&B, Felica, Mifare']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon11}
            size="w-1/6"
            title="Printer"
            features={['Thermal Printer, Paper: 58×40mm']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon12}
            size="w-1/6"
            title="PSAM"
            features={['1 PSAM Slot, ISO/IEC 7816']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon13}
            size="w-1/6"
            title="Memory Extension"
            features={['Micro SD/TF, 64GB']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon14}
            size="w-1/6"
            title="USB Port"
            features={['Micro USB, OTG Supported']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon15}
            size="w-1/6"
            title="SIM Card Slot"
            features={['1 Slot, Micro SIM Card, 15*12mm']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon16}
            size="w-1/6"
            title="Audio"
            features={['1 Speaker']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon17}
            size="w-1/6"
            title="Auxiliary Lamp"
            features={['Support Flash, White Light Compensation']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon18}
            size="w-1/6"
            title="Battery"
            features={['5200mAh']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon19}
            size="w-1/6"
            title="Adapter"
            features={['Input: AC 100-240V, 50/60Hz 0.35A Output:5V/2A']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon20}
            size="w-1/6"
            title="Dimensions"
            features={['194*77.5*62 mm']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon21}
            size="w-1/6"
            title="Weight"
            features={['450g']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon22}
            size="w-1/6"
            title="Accessories"
            features={['Optional:Charging Cradle']}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon23}
            size="w-1/6"
            title="Temperature"
            features={[
              'Storage temperature: -35°C to 70°C Operating temperature: -10°C to 55°C Humidity: ≤95%',
            ]}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
          <ImageBox
            Featue_Img={OS_icon24}
            size="w-1/6"
            title="Electronics & Telecom CertificationPorts"
            features={[
              'GSMA / EU CE / Japan TELEC & JATE / China CCC / SRRC / CTA / FCC / Google GMS / SIRIM / RoHS / BIS / WPC',
            ]}
            variations="bg-white py-5 rounded-[5px] hover:shadow-lg flex gap-3 items-center px-2"
          />
        </div>

        <div class="container  px-10 mx-0 min-w-full grid place-items-center">
          <a
            href="https://portal.anypos.app/login"
            className="text-sm font-semibold uppercase  items-center mt-10 text-[#4267F1] border-2 border-[#4267F1] bg-transparent hover:bg-[#4267F1] hover:text-white rounded-[10px] py-[8px] px-[24px]"
          >
            Get anypos
          </a>
        </div>
      </section>
    </>
  );
}

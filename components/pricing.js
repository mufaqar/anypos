import Link from 'next/link'
import React from 'react'

export default function Pricing() {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            <Pricing_Table title="Pay Monthly"  pricing="100" period="SAR / month" Btn_txt="Order Plan" />
            <Pricing_Table title="Pay Yearly"  pricing="70" period="SAR / month" Btn_txt="Order Plan" />
        </div>
    )
}

function Pricing_Table({title, period, pricing, Btn_txt}) {
    return (<>
    <div className='bg-[#EDEDED] p-3 text-center'>
                <h3 className='text-[#2A2A2A] text-[32px] leading-[1em] font-medium tracking-[0.5px]'>
                    {title}
                </h3>
                <h1 className='text-[#202121] md:text-[60px] text-[50px] font-medium tracking-[0.5px]'>
                    {pricing}
                    <span className='text-[#202121] text-[26px] font-normal tracking-[0.5px]'>
                        {period}
                    </span>
                </h1>
                <Link href="#" className="text-base font-semibold uppercase inline-block mt-10 text-white border-2 border-[#4267F1] bg-[#4267F1] hover:bg-transparent hover:text-[#4267F1] py-[10px] px-[30px]">
                    {Btn_txt} 
                </Link>
            </div>
    </>
    )};


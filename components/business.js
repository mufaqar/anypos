import Image from 'next/image'
import React from 'react'

function Business_Sec() {
    return (
        <section className="py-20 mt-20">
            <div className="container mx-auto ">
                <h2 className='text-[#212030] md:text-[48px] text-[30px] leading-none font-bold tracking-[0.5px] text-center mb-10'>
                    Anypos works for any type of business.
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/1.png" alt="business/1.png" width={228} height={201} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Retail
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/2.png" alt="business/2.png" width={210} height={203} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Restaurants
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/4.png" alt="business/4.png" width={223} height={154} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Cafe
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/4.png" alt="business/4.png" width={288} height={165} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Pharmacy
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/5.png" alt="clients/5.png" width={233} height={184} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Car Wash
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/6.png" alt="business/6.png" width={227} height={115} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Petrol Station
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/7.png" alt="business/7.png" width={166} height={144} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            Barber Shop
                        </h5>
                    </div>
                    <div className='max-w-[371px] h-[301px] grid justify-center items-end bg-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-md'>
                        <Image src="/images/business/8.png" alt="clients/8.png" width={154} height={154} />
                        <h5 className='text-2xl font-normal text-[#212030] text-center'>
                            and more!
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business_Sec
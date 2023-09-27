import Image from 'next/image'
import React from 'react'

function Clients_Sec() {
    return (
        <section className="py-20 mt-20">
            <div className="container mx-auto ">
                <div className='max-w-[1350px] mx-auto'>
                    <h2 className='text-[#212030] md:text-[48px] text-[30px] leading-none font-bold tracking-[0.5px] text-center mb-10'>
                        Our clients
                    </h2>
                    <p className='md:text-3xl text-2xl font-normal text-center mb-10 tracking-[0.75px] text-[#5E5E5E]'>
                        Join a network of thriving companies that have placed their trust in our innovative solutions. Your success is not just a goal, it’s our commitment.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center md:ml-[88px]">
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/1.png" alt="clients/1.png" width={184} height={107} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/2.png" alt="clients/2.png" width={111} height={84} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/4.png" alt="clients/4.png" width={103} height={103} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/4.png" alt="clients/4.png" width={103} height={103} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/5.png" alt="clients/5.png" width={132} height={126} />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center mt-10 md:mr-[88px]">
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/6.png" alt="clients/6.png" width={122} height={122} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/7.png" alt="clients/7.png" width={113} height={113} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/8.png" alt="clients/8.png" width={181} height={91} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/9.png" alt="clients/9.png" width={154} height={129} />
                    </div>
                    <div className='max-w-[297px] h-[173px] flex justify-center items-center bg-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.17)] py-7 px-10 rounded-xl'>
                        <Image src="/images/clients/10.png" alt="clients/10.png" width={99} height={137} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients_Sec
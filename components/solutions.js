import Image from 'next/image'
import React from 'react'

function Solutions() {
    return (
        <section className="py-20 mt-20">
            <div className="container mx-auto ">
                <h2 className='text-[#212030] md:text-[48px] text-[30px] leading-none font-bold tracking-[0.5px] text-center mb-10'>
                    Anypos: More options, One Solution.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <Image src="/images/sol1.png" alt="sol1.png" width={498} height={358} />
                    <Image src="/images/sol2.png" alt="sol2.png" width={498} height={358} />
                    <Image src="/images/sol3.png" alt="sol3.png" width={498} height={358} />
                </div>
            </div>
        </section>
    )
}

export default Solutions
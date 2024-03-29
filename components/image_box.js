import Image from 'next/image';
import React from 'react';

export default function ImageBox({
  title,
  features,
  Featue_Img,
  variations,
  size,
}) {
  return (
    <div className={`${variations}`}>
      <Image src={Featue_Img} alt="Image" className={`${size}`} />
      <div>
        <h5 className="text-[#2A2A2A] text-xl font-bold tracking-[0.5px]">
          {title}
        </h5>
        <p className="text-[#54595F] text-base font-medium">{features}</p>
      </div>
    </div>
  );
}

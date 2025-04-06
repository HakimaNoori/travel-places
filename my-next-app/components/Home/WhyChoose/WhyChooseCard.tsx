import React from 'react'
import Image from 'next/image';
import { title } from 'process';

type Props = {
    image: string;
    title: string;
};
const WhyChooseCard = ({image}: Props) => {
  return (
    <div className="">
      <Image
        src={image}
        alt="image"
        width={70}
        height={70}
        className="mx-auto"
      />
      {/* Content */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center ttext-xs font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing
        dolor consectetur.
      </p>
    </div>
  );
}

export default WhyChooseCard;

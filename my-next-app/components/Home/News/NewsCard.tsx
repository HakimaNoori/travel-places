import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ date, image, title }: Props) => {
  return (
    <div>
      {/* Images */}
      <div className="h-[300px]">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* text content */}
      <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};   

export default NewsCard;

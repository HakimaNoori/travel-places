import React from 'react';

type Props = {
    Heading: string;
};

const SectionHeading = ({Heading}: Props) => {
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{Heading}</h1>
            <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </div>
    );
};

export default SectionHeading;
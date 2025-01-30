import React from 'react';
import { StarIcon,HeartIcon} from '@heroicons/react/24/outline';

interface templateProps {
    id:number;
    image:string;
    title:string;
    description:string;
    price:string;
    rating:number;
}
const TEMPLATES:templateProps[] = [
    {
        id: 1,
        image: "./assets/images/mui_figma.png",
        title: "MUI for Figma",
        description: "Design",
        price:'$79',
        rating:5
    },
    {
        id: 2,
        image: "./assets/images/mui_adobe.png",
        title: "MUI for Adobe XD",
        description: "Design",
        price:'$69',
        rating:5
    },
    {
        id: 3,
        image: "./assets/images/mui_sketch.png",
        title: "MUI for Sketch",
        description: "Design",
        price:'$49',
        rating:5
    }
];

const DesignKits = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className='text-2xl font-semibold text-gray-700 leading-loose md:text-start text-center'>Design Kits</h2>
        <div className='border-b border-dashed border-gray-100'></div>
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {TEMPLATES.map((template, i) => (
                <div className='shadow-sm p-2  rounded-lg hover:shadow-md'>
                    <div className='rounded-lg relative'>
                        <img src={template.image} className='rounded-lg' alt="minimal" />
                    </div>
                    <div className='mt-2 flex items-start justify-between'>
                        <div className='grid grid-cols-1 gap-2'>
                            <h2 className='text-gray-600'>{template.title}</h2>
                            <p className='text-xs font-medium text-gray-400'>{template.description}</p>
                            <div className='flex'>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <StarIcon className={`h-6 w-6 ${index < template.rating ? 'fill-yellow-400': ''} text-yellow-400`}/>
                                ))}
                            </div>
                            <p>{template.price}</p>
                        </div>
                        <HeartIcon className='h-6 w-6 text-gray-300'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DesignKits

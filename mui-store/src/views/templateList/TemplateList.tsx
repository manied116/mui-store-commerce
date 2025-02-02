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
        image: "./assets/images/deviaskit.png",
        title: "Devias Kit Pro - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4
    },
    {
        id: 2,
        image: "./assets/images/minimal.png",
        title: "Minimal - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:5
    },
    {
        id: 3,
        image: "./assets/images/front.png",
        title: "theFront - Multipurpose Template + UI Kit",
        description: "Landing & Corporate",
        price:'$49',
        rating:5
    },
    {
        id: 4,
        image: "./assets/images/mantis.png",
        title: "Mantis - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:3
    },
    {
        id: 5,
        image: "./assets/images/berry.png",
        title: "Berry - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4
    },
    {
        id: 6,
        image: "./assets/images/zone.png",
        title: "Zone - Multipurpose Landing Page + UI Kit",
        description: "Landing & Corporate",
        price:'$59',
        rating:3
    },
    {
        id: 7,
        image: "./assets/images/deviaskit.png",
        title: "Devias Kit Pro - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'FREE',
        rating:4
    },
    {
        id: 8,
        image: "./assets/images/minimal.png",
        title: "Minimal - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:5
    },
    {
        id: 9,
        image: "./assets/images/front.png",
        title: "theFront - Multipurpose Template + UI Kit",
        description: "Landing & Corporate",
        price:'FREE',
        rating:5
    },
    {
        id: 10,
        image: "./assets/images/mantis.png",
        title: "Mantis - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:3
    },
    {
        id: 11,
        image: "./assets/images/berry.png",
        title: "Berry - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4
    },
    {
        id: 12,
        image: "./assets/images/zone.png",
        title: "Zone - Multipurpose Landing Page + UI Kit",
        description: "Landing & Corporate",
        price:'FREE',
        rating:3
    },
];

const TemplateList = () => {
    return (
        <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-700 leading-loose md:text-start text-center">
                Popular Templates
            </h2>
            <div className="border-b border-dashed border-gray-200 my-4"></div>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {TEMPLATES.map((template) => (
                <div key={template.id} className="shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow p-4 flex flex-col">
                    <div className="relative">
                        <img src={template.image} className="rounded-lg w-full h-48 object-cover" alt={template.title}/>
                    </div>
                    <div className="mt-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-gray-800 text-lg font-semibold"> {template.title}</h2>
                            <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                            <div className="flex items-center mt-2">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <StarIcon
                                        key={index}
                                        className={`h-5 w-5 ${
                                            index < template.rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-lg font-medium text-gray-700">{template.price}</p>
                            <HeartIcon className="h-6 w-6 text-gray-300 cursor-pointer hover:text-red-500 transition-colors" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default TemplateList

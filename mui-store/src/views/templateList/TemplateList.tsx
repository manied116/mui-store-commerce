import React from 'react';
import { StarIcon,HeartIcon} from '@heroicons/react/24/outline';

const cards = [
    {
        id: 1,
        image: "./assets/images/deviaskit.png", // Replace with your image URL
        badge: "Bestseller",
        title: "Dashboard Template",
        description: "An advanced dashboard template for modern applications.",
      },
      {
        id: 2,
        image: "./assets/images/minimal.png", // Replace with your image URL
        badge: "New Release",
        title: "Next.js + Ecommerce",
        description: "A Next.js-based eCommerce dashboard.",
      },
      {
        id: 3,
        image: "./assets/images/saasable.png", // Replace with your image URL
        badge: "Newest Item",
        title: "React + Admin Panel",
        description: "Build scalable dashboards with React.",
      },
];

const TemplateList = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-16">
        <h2 className='text-xl font-medium text-gray-700 leading-loose'>Popular Templates</h2>
        <div className='border-b border-dashed border-gray-100'></div>
        <div className='pt-4'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='shadow-sm p-2 rounded-lg hover:shadow-lg'>
                    <div className='rounded-lg'>
                        <img src={'./assets/images/minimal.png'} className='rounded-lg' alt="minimal" />
                    </div>
                    <div className='mt-2 flex items-start justify-between'>
                        <div className='grid grid-cols-1 gap-2'>
                            <h2 className='text-gray-600'>Minimal - Client and Admin Dashboard</h2>
                            <p className='text-xs font-medium text-gray-400'>Admin & Dashboard</p>
                            <div className='flex'>
                                <StarIcon className='h-6 w-6 fill-yellow-400 text-yellow-400'/>
                                <StarIcon className='h-6 w-6 fill-yellow-400 text-yellow-400'/>
                                <StarIcon className='h-6 w-6 fill-yellow-400 text-yellow-400'/>
                                <StarIcon className='h-6 w-6 fill-yellow-400 text-yellow-400'/>
                                <StarIcon className='h-6 w-6 fill-yellow-400 text-yellow-400'/>
                            </div>
                            <p>$69</p>
                        </div>
                        <HeartIcon className='h-6 w-6 text-gray-300'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemplateList

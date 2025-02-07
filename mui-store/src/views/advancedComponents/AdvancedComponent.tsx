import React from 'react';
// ICON
import {HeartIcon} from '@heroicons/react/24/outline';
// DATA
import { ADVANCE_TEMPLATES } from '../../utils/data/constant.ts';

const AdvancedComponents = () => {
    return (
        <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className='text-2xl font-semibold text-gray-700 leading-loose md:text-start text-center'>Advanced Components</h2>
            <div className='border-b border-dashed border-gray-100'></div>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {ADVANCE_TEMPLATES.map((template, i) => (
                    <div className='shadow-sm p-2  rounded-lg hover:shadow-md' key={template.id}>
                        <div className='rounded-lg relative'>
                            <img src={template.image} className='rounded-lg' alt="minimal" />
                        </div>
                        <div className='mt-2 flex items-start justify-between'>
                            <div className='grid grid-cols-1 gap-2'>
                                <h2 className='text-gray-600'>{template.title}</h2>
                                <p className='text-xs font-medium text-gray-400'>{template.description}</p>
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

export default AdvancedComponents

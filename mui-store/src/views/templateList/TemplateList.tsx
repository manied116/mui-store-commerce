import React from 'react';
// NPM
import { useNavigate } from 'react-router-dom';
// ICON
import { StarIcon,HeartIcon} from '@heroicons/react/24/outline';
// DATA
import { TEMPLATE_LISTS } from '../../utils/data/constant.ts';

const TemplateList = () => {
    const navigate = useNavigate();

    // NAVIGATE TO TEMPLATE INFO PAGE
    const handleProfileClick = (id:string | undefined) => {
        navigate(`/items/${id}`);
    };
    return (
        <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-700 leading-loose md:text-start text-center">
                Popular Templates
            </h2>
            <div className="border-b border-dashed border-gray-200 my-4"></div>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {TEMPLATE_LISTS.map((template) => (
                    <div key={template.id} className="shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow p-4 flex flex-col cursor-pointer" onClick={()=>handleProfileClick(template.url)} >
                        <div className="relative">
                            <img src={template.image} className="rounded-lg w-full h-64 object-cover" alt={template.title}/>
                        </div>
                        <div className="mt-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-gray-800 text-lg font-semibold"> {template.title}</h2>
                                <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                                <div className="flex items-center mt-2">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <StarIcon
                                            key={index}
                                            className={`h-6 w-6 ${index < (template?.rating ?? 0) ? 'fill-yellow-400' : ''} text-yellow-400`}
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

import React from "react";
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import TemplateList from "../templateList/TemplateList.tsx";
import DesignKits from "../designKits/DesignKits.tsx";
import AdvancedComponents from "../advancedComponents/AdvancedComponent.tsx";


const templateInfo: string[] = [
    'React + Admin + Dashboard',
    'Client + Admin + Dashboard',
    'Material UI + Vite',
    'Next.js + Admin + Dashboard',
    'Next.js + Ecommerce',
]

const Home: React.FC = () => {
    return(
        <>
            <div className="mt-0 bg-gradient-to-t from-blue-50 to-blue-50">
                <div className="max-w-screen-lg mx-auto pt-16 md:pb-32 pb-8 md:px-0 px-3">
                    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 items-center space-y-2">
                        <div className="flex flex-col justify-center md:items-start items-center">
                            <h3 className="text-sm font-bold text-blue-500">MUI Store</h3>
                            <div className="md:mt-6 mt-4 text-center md:text-start">
                                <h1 className="font-bold text-gray-900 md:text-3xl text-2xl tracking-wide">
                                Premium React templates <br />{" "}
                                <span className="text-blue-500">to kickstart your project</span>
                                </h1>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm font-normal text-gray-600">
                                A collection of the best React templates and tools curated and verified by
                                Material UI's creators.
                                </p>
                            </div>
                            <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                                <div className="relative w-full sm:w-[24rem]">
                                <input
                                    type="text"
                                    placeholder="Search for templates and more"
                                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-sm"
                                />
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                                </div>
                                <button className="w-full sm:w-auto py-3 px-3 border border-gray-300 rounded-lg text-xs font-normal text-white bg-blue-500 hover:bg-blue-500">
                                Browse items
                                </button>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2 items-center">
                                {templateInfo.map((template, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-300 bg-gray-50 hover:bg-gray-200 rounded-full"
                                >
                                    {template}
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="relative w-full flex justify-center items-center mt-12">
                                <img
                                src={"./assets/images/minimal.png"}
                                alt={`Banner`}
                                className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TemplateList />
            <DesignKits />
            <AdvancedComponents />
            <div className="max-w-screen-sm mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-medium text-gray-700">Get new items in your inbox!</h2>
                    <p className="text-sm font-normal text-gray-500">Get notified when we launch new themes <span className="text-md font-semibold text-gray-700">or big discounts</span>. Never spam.</p>
                    <div className="flex flex-col w-full sm:flex-row items-center justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="relative w-full sm:w-[24rem]">
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                className="w-full py-2 pl-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text--sm" 
                            />
                        </div>
                        <button className="w-full sm:w-[10rem] py-3 px-3 border border-gray-300 rounded-lg text-sm font-normal text-white bg-blue-500 hover:bg-blue-500" >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
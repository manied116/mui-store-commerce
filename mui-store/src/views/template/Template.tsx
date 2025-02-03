
import React,{useState} from "react";
import { StarIcon, HeartIcon, ChevronDownIcon,ChevronUpIcon,Bars3Icon,XMarkIcon,MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface TemplateProps {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
    rating: number;
}

const TEMPLATES: TemplateProps[] = [
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

const sortOptions:string[] = ["Relevance","Best Sellers","Latest Release", "Most reviews", "Best rated"];

const Templates: React.FC = () => {
    const [filters, setFilters] = useState({
        frameworks: true,
        uiFrameworks: true,
        categories: true,
      });
    
    const [drawerOpen, setDrawerOpen]     = useState(false);
    const [sortBy, setSortBy]             = useState("Best Sellers");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleFilter = (filter: keyof typeof filters) => {
        setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
    };
    
    const sortedTemplates = [...TEMPLATES].sort((a, b) => {
        if (sortBy === "Highest rating"){ 
            return b.rating - a.rating;
        }
        if (sortBy === "Lowest price"){
          return parseInt(a.price.replace("$", "") || "0") - parseInt(b.price.replace("$", "") || "0");
        }
        return 0;
    });
    
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
            {/* Breadcrumb */}
            <div className="flex flex-row gap-2 items-center">
                <p className="text-xs font-normal text-gray-500">MUI Store</p>
                <ChevronDownIcon className="h-3 w-3 text-gray-900" />
                <span className="text-xs font-semibold text-gray-700">Templates</span>
            </div>
        
            {/* Page Title */}
            <h2 className="text-3xl mt-6 font-bold text-gray-700 leading-loose md:text-start text-center">
                Templates
            </h2>
            <div>
                {/* Sort By Dropdown */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-normal text-gray-600">A collection of 4.5 average rating templates, selected and curated by MUI's team of maintainers to get your projects up and running today.</div>
                    <div className="relative">
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600"
                        onClick={() => setDropdownOpen(!dropdownOpen)}>
                            {sortBy}
                            <ChevronDownIcon className="h-4 w-4 ml-2 text-gray-500" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md z-10">
                                {sortOptions.map((option) => (
                                    <button
                                        key       = {option}
                                        className = "block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                        onClick   = {() => { setSortBy(option);setDropdownOpen(false);}}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            <div className="border-b border-dashed border-gray-200 my-4"></div>
        
            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-end mb-4">
                <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg" onClick={() => setDrawerOpen(true)}>
                    <Bars3Icon className="h-5 w-5 mr-2" />
                    Filters
                </button>
            </div>
        
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left-Side Filters (Desktop Only) */}
                <div className="hidden lg:flex lg:w-1/4 flex-col space-y-6">
                {/* Filters */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="uppercase text-gray-500  text-xs font-semibold">Search</label>
                        <div className="relative w-full sm:w-[14rem]">
                            <input
                                type="text"
                                placeholder="client admin dashboard"
                                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-sm"
                            />
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                        </div>
                    </div>
                    <div className="space-y-6">
                    {/* Frameworks */}
                        <div>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter("frameworks")}>
                                <h3 className="text-sm font-semibold text-gray-700">Frameworks</h3>
                                {filters.frameworks ? (
                                     <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </div>
                            {filters.frameworks && (
                                <div className="mt-2 space-y-2">
                                {["React 18", "Next.js", "Vite", "Remix", "Create React App"].map(
                                    (framework, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={framework}
                                            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label
                                        htmlFor={framework}
                                        className="ml-2 text-sm text-gray-600"
                                        >
                                        {framework}
                                        </label>
                                    </div>
                                    )
                                )}
                                </div>
                            )}
                    </div>
                    
                    {/* UI Frameworks */}
                    <div>
                        <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFilter("uiFrameworks")}
                        >
                        <h3 className="text-sm font-semibold text-gray-700">UI Frameworks</h3>
                        {filters.uiFrameworks ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        )}
                        </div>
                        {filters.uiFrameworks && (
                        <div className="mt-2 space-y-2">
                            {["Material UI", "Joy UI", "Base UI", "Tailwind CSS"].map((uiFramework, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                type="checkbox"
                                id={uiFramework}
                                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor={uiFramework} className="ml-2 text-sm text-gray-600">
                                {uiFramework}
                                </label>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>

                    {/* Categories */}
                    <div>
                        <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFilter("categories")}
                        >
                        <h3 className="text-sm font-semibold text-gray-700">Category</h3>
                        {filters.categories ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        )}
                        </div>
                        {filters.categories && (
                        <div className="mt-2 space-y-2">
                            {["Admin & Dashboard", "Landing & Corporate", "E-commerce"].map((category, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                type="radio"
                                id={category}
                                name="category"
                                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor={category} className="ml-2 text-sm text-gray-600">
                                {category}
                                </label>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                    
                </div>

                </div>
        
                {/* Left-Side Drawer (Mobile Only) */}
                {drawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40">
                    <div className="fixed inset-y-0 left-0 bg-white w-3/4 max-w-xs p-6 shadow-md z-50">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-700">Filters</h3>
                        <button
                        onClick={() => setDrawerOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                        >
                        <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
        
                    {/* Filters (same as Desktop) */}
                    <div className="space-y-6">
                        {/* Frameworks */}
                        <div>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFilter("frameworks")}
                        >
                            <h3 className="text-sm font-semibold text-gray-700">Frameworks</h3>
                            {filters.frameworks ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                            )}
                        </div>
                        {filters.frameworks && (
                            <div className="mt-2 space-y-2">
                            {["React 18", "Next.js", "Vite", "Remix", "Create React App"].map(
                                (framework, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                    type="checkbox"
                                    id={framework}
                                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label
                                    htmlFor={framework}
                                    className="ml-2 text-sm text-gray-600"
                                    >
                                    {framework}
                                    </label>
                                </div>
                                )
                            )}
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                )}
        
                {/* Right Side Content */}
                
        
                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedTemplates.map((template) => (
                    <div
                        key={template.id}
                        className="shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow p-4 flex flex-col"
                    >
                        <div className="relative">
                        <img
                            src={template.image}
                            className="rounded-lg w-full h-48 object-cover"
                            alt={template.title}
                        />
                        </div>
                        <div className="mt-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-gray-800 text-lg font-semibold">{template.title}</h2>
                            <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                            <div className="flex items-center mt-2">
                            {Array.from({ length: 5 }, (_, index) => (
                                <StarIcon
                                key={index}
                                className={`h-5 w-5 ${
                                    index < template.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
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
            </div>
        </div>
    );
};

export default Templates;

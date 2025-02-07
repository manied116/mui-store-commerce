import React,{useState} from 'react';
// NPM
import { useParams,useNavigate } from 'react-router-dom';
// ICON
import { ShoppingCartIcon,StarIcon,CheckIcon,ArrowUpRightIcon,BoltIcon, ChevronLeftIcon,ChevronRightIcon } from "@heroicons/react/24/outline";
// DATA
import { TEMPLATES_INFO,PACKAGEINFO,TAB_LIST,FEATURES,PAGES,ERROR,AUTH,OVERVIEW,USER,REVIEWS,CHANGE_LOG } from '../../utils/data/constant.ts';

const TemplateInfo = () => {
    const [activeTab, setActiveTab]     = useState<number>(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [orderCount,setOrderCount]    = useState<number[]>([]);
    const { id }                        = useParams<{ id: string }>();
    const navigate                      = useNavigate();

    // CHECK DATA URL AND PAGE URL
    const template = TEMPLATES_INFO.find(item => item.url === id);

    // HANDLE CHANGE TAB
    const handleChangeTab = (tabId:number) =>{
        setActiveTab(tabId);
    }
    const reviewsPerPage = 4;

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = REVIEWS.slice(indexOfFirstReview, indexOfLastReview);
  
    const totalPages = Math.ceil(REVIEWS.length / reviewsPerPage);

    // NAVIGATE TO ORDER-CART
    const handleProfileClick = () => {
        setOrderCount([1]);
        navigate("/order-cart");
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-12">
                    <h1 className="text-xl font-medium">{template?.title}</h1>
                </div>
                <div className="lg:col-span-2 space-y-9 ">
                    <div className='relative group'>
                        <img src={template?.image} alt="Minimal" className="w-full h-auto rounded-lg shadow-md object-cover transition-bg-blue-400  cursor-pointer duration-300 group-hover:opacity-70" />
                        <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-[rgb(84,149,236,0.69)] cursor-pointer">
                            <button className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-opacity duration-300">
                                Live Preview
                            </button>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div className="flex justify-start w-max">
                        {TAB_LIST.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleChangeTab(tab.id)}
                                className={`flex-1 w-8=full text-center py-2 px-4 text-sm font-medium transition-colors duration-300 
                                ${activeTab === tab.id 
                                    ? 'border-b-2 border-blue-500 text-blue-600 font-bold' 
                                    : 'text-gray-500 hover:text-blue-500'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    { activeTab === 1 ?
                        <>
                            {/* Description */}
                            <div className="text-gray-700">
                                <p>Minimal is the perfect UI Kit to start your next project.</p>
                                <p className="mt-2">Elevate your project effortlessly with our UI templates. Perfectly blending aesthetics and efficiency, they deliver an unparalleled user experience.</p>
                            </div>
                            
                            {/* Features Table */}
                            {/* <div className="overflow-x-auto w-full max-w-4xl mx-auto p-4">
                            <table className="w-full border border-slate-400 text-sm"> */}
                            <div className="overflow-x-auto w-full max-w-2xl mx-auto p-4">
                                <table className="w-full border-collapse border border-slate-400 mt-4">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border text-normal border-slate-300 text-left">Package</th>
                                            <th className="py-2 px-4 border text-normal border-slate-300 text-center">Standard</th>
                                            <th className="py-2 px-4 border text-normal border-slate-300 text-center">Plus</th>
                                            <th className="py-2 px-4 border text-normal border-slate-300 text-center">Extended</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PACKAGEINFO.map((item, idx) => (
                                            <tr key={idx} className="text-center border-b text-gray-700 text-sm">
                                                <td className="py-2 px-4 text-left border border-slate-300 leading-relaxed">
                                                    {item.name}<br></br>
                                                    <span className='text-xs font-semibold flex items-center gap-1'>
                                                        {item?.lang === "see how to" ? 
                                                            <>{item?.lang} <span className='underline text-blue-500 flex items-center gap-1'>migrate <ArrowUpRightIcon className="h-3 w-3 storke-2"/></span> </>
                                                        : item?.lang === "preview" ?
                                                            <span className='underline text-blue-500 flex items-center gap-1'>{item?.lang} <ArrowUpRightIcon className="h-3 w-3 storke-2"/></span>
                                                        : item?.lang
                                                        }
                                                    </span>
                                                </td>
                                                <td className='py-2 px-4 border border-slate-300'>{item.std ? <CheckIcon className="h-5 w-5 text-green-700 storke-2"/> : '-'}</td>
                                                <td className='py-2 px-4 border border-slate-300'>{item.plus ? <CheckIcon className="h-5 w-5 text-green-700 storke-2"/> : '-'}</td>
                                                <td className='py-2 px-4 border border-slate-300'>{item.ext ? <CheckIcon className="h-5 w-5 text-green-700 storke-2"/> : '-'}</td>
                                            </tr>
                                        ))}
                                        <tr aria-colspan={4} className="text-left border-b text-gray-700 text-lg">
                                            <td className='py-2 px-4 flex items-center gap-2'><BoltIcon className='h-5 w-5 fill-yellow-400 text-yellow-300'/>License</td>
                                        </tr>
                                        <tr className="text-left border-b text-gray-700 text-sm">
                                            <td className='py-2 px-4 border border-slate-300'>Use in a free end product.</td>
                                            <td className='py-2 px-4 border border-slate-300'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/></td>
                                            <td className='py-2 px-4 border border-slate-300'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/></td>
                                            <td className='py-2 px-4 border border-slate-300'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/></td>
                                        </tr>
                                        <tr className="text-left border-b text-gray-700 text-sm">
                                            <td className='py-2 px-4 border border-slate-300'>Use in an end product that is "sold" (one or <br></br> multiple paying End Users).	</td>
                                            <td className='py-2 px-4 border border-slate-300'></td>
                                            <td className='py-2 px-4 border border-slate-300'></td>
                                            <td className='py-2 px-4 border border-slate-300'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p className='flex flex-row gap-2'>Learn More : <span className='underline text-blue-500 flex items-center gap-1'>Package & license <ArrowUpRightIcon className="h-3 w-3 storke-2"/></span></p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold tracking-tight'>Template vs. Starter</h2>
                                <p className="py-2 text-gray-800 leading-relaxed">
                                    The{' '}
                                    <span className="underline text-blue-500 inline-flex items-center gap-1 whitespace-nowrap">
                                        Starter project
                                        <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                    </span>{' '}
                                    is a lighter version that offers the core foundation, including the theme configuration, base components, and the dashboard overview page.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold mb-4">Features</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {FEATURES.map((feature, index) => (
                                    <li key={index}>
                                    {feature.isNew && <span className="font-semibold">NEW</span>} {feature.isNew && ' - '}
                                    {feature.name}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold mb-4">Pages</h2>
                                <ul className="list-disc space-y-2 text-gray-700 pl-5">
                                    {PAGES.map((page, index) => (
                                        <li key={index} className="underline text-blue-500 font-medium text-md flex items-center flex-row gap-1 whitespace-nowrap">
                                        {page} <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold mb-4">Error</h2>
                                <ul className="list-disc space-y-2 text-gray-700 pl-5">
                                    {ERROR.map((page, index) => (
                                        <li key={index} className="underline text-blue-500 font-medium text-md flex items-center flex-row gap-1 whitespace-nowrap">
                                        {page} <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold mb-4">Auth</h2>
                                <ul className="list-disc space-y-2 text-gray-700 pl-5">
                                    {AUTH.map((page, index) => (
                                        <li key={index} className="underline text-blue-500 font-medium text-md flex items-center flex-row gap-1 whitespace-nowrap">
                                        {page} <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                <ul className="list-disc space-y-2 text-gray-700 pl-5">
                                    {OVERVIEW.map((page, index) => (
                                        <li key={index} className="underline text-blue-500 font-medium text-md flex items-center flex-row gap-1 whitespace-nowrap">
                                        {page} <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold mb-4">User</h2>
                                <ul className="list-disc space-y-2 text-gray-700 pl-5">
                                    {USER.map((page, index) => (
                                        <li key={index} className="underline text-blue-500 font-medium text-md flex items-center flex-row gap-1 whitespace-nowrap">
                                        {page} <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold tracking-tight'>Documentation</h2>
                                <p className="py-2 text-gray-800 leading-relaxed">
                                    You can browse the{' '}
                                    <span className="underline text-blue-500 inline-flex items-center gap-1 whitespace-nowrap">
                                        documentation
                                        <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold tracking-tight'>Built with</h2>
                                <p className="py-2 text-gray-800 leading-relaxed">
                                    You can Check the{' '}
                                    <span className="underline text-blue-500 inline-flex items-center gap-1 whitespace-nowrap">
                                        dependencies
                                        <ArrowUpRightIcon className="h-3 w-3 stroke-2" />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold tracking-tight'>Updates and support</h2>
                                <p className="py-2 text-gray-800 leading-relaxed">Purchasing a license gives you access to:</p>
                                <ul className='list-disc list-inside pl-3'>
                                    <li>1 year of free updates</li>
                                    <li>6 months of technical support</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold tracking-tight'>Need Support?</h2>
                                <p className="py-2 text-gray-800 leading-relaxed">
                                    Drop us email at{' '}
                                    <span className="underline text-blue-500 inline-flex items-center gap-1 whitespace-nowrap">
                                        support@minimals.cc.
                                    </span>{' '}
                                    We're always glad to help you!
                                </p>
                            </div>

                        </>
                    : activeTab === 2 ?
                        <div className="max-w-3xl mx-auto p-4">
                            {currentReviews.map((review, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                                    <div className='flex items-center justify-between'>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                                            {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800">{review.name}</p>
                                                <p className="text-sm text-gray-500">{review.timeAgo}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end mt-2 gap-2">
                                            <div className='flex'>
                                            {[...Array(review.rating)].map((_, i) => (
                                                <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            ))}
                                            </div>
                                            <span className="text-sm text-gray-600">for {review.category}</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 pl-16 text-gray-700 whitespace-pre-line">{review.content}</p>
                                </div>
                            ))}

                                {/* Pagination */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                                    >
                                        <ChevronLeftIcon className='h-4 w-4 text-gray-800 stroke-2'/>
                                    </button>
                                    <span className="px-3 py-1 text-gray-700"> <span className='px-3 py-1 rounded-lg border bg-blue-50'>{currentPage}</span> of {totalPages}</span>
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                                    >
                                        <ChevronRightIcon className='h-4 w-4 text-gray-800 stroke-2'/>
                                    </button>
                                </div>
                            </div>
                    :
                        <div className="max-w-4xl mx-auto p-6">
                            {CHANGE_LOG.map((entry, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800">{entry.version}</h3>
                                <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
                                <ul className="list-disc pl-5 space-y-1">
                                {entry.changes.map((change, idx) => (
                                    <li key={idx} className="text-gray-700">
                                    {typeof change === "string" ? (
                                        change
                                    ) : (
                                        <a href={change.link} className="text-blue-500 underline">
                                        {change.text}
                                        </a>
                                    )}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                    }
                </div>
                {/* Right Section */}
                <div className="space-y-3">
                    {/* Pricing */}
                    <div className=" rounded-lg p-4">
                        <h2 className="text-md font-normal mb-4">Package type</h2>
                        <div className="mt-2 space-y-4">
                            {[
                                { type: 'Standard License', price: '$69', selected: true },
                                { type: 'Standard Plus', price: '$129',licence:"Standard License",source:"Typescript source",resource:"Figma resources", selected: false },
                                { type: 'Extended License', price: '$599',licence:"Standard License",source:"Typescript source",resource:"Figma resources", selected: false },
                            ].map((pkg, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center justify-around">
                                        <input type="radio" name="license" defaultChecked={pkg.selected} className="mr-2" />
                                        <div className='space-y-1'>
                                            <p className='text-gray-700'>{pkg.type}</p>
                                            <div className='pl-2'>
                                                <p className='text-gray-500 text-sm'>{pkg?.licence}</p>
                                                <p className='text-gray-500 text-sm'>{pkg?.source}</p>
                                                <p className='text-gray-500 text-sm'>{pkg?.resource}</p>
                                            </div>
                                            <p className='text-xs font-normal text-gray-500'>End-users cannot be charged for. <br></br>Read full <span className='text-blue-500'>Standard License</span></p>
                                        </div>
                                    </div>
                                    <span className="font-normal text-2xl">{pkg.price}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700" onClick={()=>handleProfileClick()}>
                            {orderCount.length > 0 ? "See in cart":"Buy now"}</button>
                        <button className="w-full border border-blue-600 text-blue-600 py-2 mt-2 rounded-md hover:bg-blue-50">Live preview</button>
                    </div>

                    {/* Sales and Ratings */}
                    <div className="text-gray-700 flex items-center justify-between">
                        <p className='flex items-center gap-3 text-lg'><ShoppingCartIcon className="h-5 w-5 text-gray-800 storke-2"/><strong>14,911</strong> Sales</p>
                        <p className="flex items-start flex-col ">
                            <div className='flex gap-2'>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <StarIcon
                                        key={index}
                                        className={`h-6 w-6 ${index < (template?.rating ?? 0) ? 'fill-yellow-400' : ''} text-yellow-400`}
                                    />
                            ))}
                            </div>
                            {/* <br></br> */}
                            <span className="ml-1 font-normal text-sm">4.95/5 (177 reviews)</span> 
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div className="text-md text-gray-600 leading-wider">
                        <p className='flex flex-row items-center gap-2'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/> Quality checked by MUI team</p>
                        <p className='flex flex-row items-center gap-2'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/> 1 year of free updates</p>
                        <p className='flex flex-row items-center gap-2'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/> 6 months of technical support</p>
                        <p className='flex flex-row items-center gap-2'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/> Covered by our <span className='text-blue-500'>refund policy</span></p>
                        <p className='flex flex-row items-center gap-2'><CheckIcon className="h-5 w-5 text-green-700 storke-2"/> Supports MUI's open source projects</p>
                        <div className="mt-4 flex flex-col gap-2 text-sm">
                            <div className='flex justify-between items-center py-2 border-b border-b-gray-200'>
                                <p>Version</p>
                                <p>6.3.0</p>
                            </div>
                            <div className='flex justify-between items-center py-2 border-b border-b-gray-200'>
                                <p>Latest release</p>
                                <p>Jan 1, 2025</p>
                            </div>
                            <div className='flex justify-between items-center py-2 border-b border-b-gray-200'>
                                <p>First release</p>
                                <p>Jan 26, 2021</p>
                            </div>
                            <div className='flex justify-between items-center py-2 border-b border-b-gray-200'>
                                <p>Category</p>
                                <p>Admin & Dashboard</p>
                            </div>
                            <div className='flex justify-between items-center py-2 border-b border-b-gray-200'>
                                <p>Questions ?</p>
                                <button className="w-32 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50">Contact author</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='pt-16'></hr>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg flex flex-col justify-start items-start gap-6">
                        <h2 className='text-4xl font-semibold tracking-tight'>Try the free demo</h2>
                        <p className='text-gray-600'>Learn more about "Minimal Free – React Admin Dashboard" in this free demo. It has a few features from the full version to let you get a feel for the product.</p>
                        <button className="w-32 bg-blue-500 border border-blue-600 text-white py-2 rounded-md">Get free demo</button>
                    </div>
                    <div>
                        <img src={'/assets/images/demo.png'} alt="demo" className="w-full h-auto rounded-lg shadow-md object-cover transition-bg-blue-400  cursor-pointer duration-300 group-hover:opacity-70" />
                    </div>
                </div>
        </div>
    );
}

export default TemplateInfo
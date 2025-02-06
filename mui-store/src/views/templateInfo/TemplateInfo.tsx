import React,{useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { ShoppingCartIcon,StarIcon,CheckIcon,ArrowUpRightIcon,BoltIcon, ChevronLeftIcon,ChevronRightIcon } from "@heroicons/react/24/outline";
interface TemplateProps {
    id          : number;
    image       : string;
    title       : string;
    description : string;
    price       : string;
    rating      : number;
    url         : string;
}

interface Tab {
    id: number;
    label: string;
    content: string;
}

interface PackageProps {
    name  : string;
    lang? : string;
    std   : boolean;
    plus  : boolean;
    ext   : boolean;
}
interface FeatureProps {
    name  : string;
    isNew   : boolean;
}

interface Review {
    name: string;
    timeAgo: string;
    rating: number;
    title?: string;
    content?: string;
    category: string;
}
interface ChangeLogEntry {
    version: string;
    date: string;
    changes: (string | { text: string; link: string })[];
  }

const TEMPLATES: TemplateProps[] = [
    {
        id: 1,
        image: "/assets/images/deviaskit.png",
        title: "Devias Kit Pro - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4,
        url:'devias-kit-pro'
    },
    {
        id: 2,
        image: "/assets/images/minimal.png",
        title: "Minimal - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:5,
        url:'minimal-dashboard'
    },
    {
        id: 3,
        image: "/assets/images/front.png",
        title: "theFront - Multipurpose Template + UI Kit",
        description: "Landing & Corporate",
        price:'$49',
        rating:5,
        url:'the-front-landing-page'
    },
    {
        id: 4,
        image: "/assets/images/mantis.png",
        title: "Mantis - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:3,
        url:'mantis-react-admin-dashboard'
    },
    {
        id: 5,
        image: "/assets/images/berry.png",
        title: "Berry - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4,
        url:'berry-react-material-admin'
    },
    {
        id: 6,
        image: "/assets/images/zone.png",
        title: "Zone - Multipurpose Landing Page + UI Kit",
        description: "Landing & Corporate",
        price:'$59',
        rating:3,
        url:'zone-landing-page'
    },
    {
        id: 7,
        image: "/assets/images/deviaskit.png",
        title: "Devias Kit Pro - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'FREE',
        rating:4,
        url:'devias-kit-pro'
    },
    {
        id: 8,
        image: "/assets/images/minimal.png",
        title: "Minimal - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:5,
        url:'minimal-dashboard'
    },
    {
        id: 9,
        image: "/assets/images/front.png",
        title: "theFront - Multipurpose Template + UI Kit",
        description: "Landing & Corporate",
        price:'FREE',
        rating:5,
        url:'the-front-landing-page'
    },
    {
        id: 10,
        image: "/assets/images/mantis.png",
        title: "Mantis - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:3,
        url:'mantis-react-admin-dashboard'
    },
    {
        id: 11,
        image: "/assets/images/berry.png",
        title: "Berry - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4,
        url:'berry-react-material-admin'
    },
    {
        id: 12,
        image: "/assets/images/zone.png",
        title: "Zone - Multipurpose Landing Page + UI Kit",
        description: "Landing & Corporate",
        price:'FREE',
        rating:3,
        url:'zone-landing-page'
    },
];

const PACKAGEINFO:PackageProps[] = [
    { name: 'Starter project', lang:'(next.js, vite.js)', std: true, plus: true, ext: true },
    { name: 'Create React App (JavaScript)', lang:'see how to', std: true, plus: true, ext: true },
    { name: 'Next.js', lang:' (next-app-dir)', std: true, plus: true, ext: true },
    { name: 'Vite.js (JavaScript)', std: true, plus: true, ext: true },
    { name: 'Create React App (TypeScript)', lang:'see how to', std: false, plus: true, ext: true },
    { name: 'Next.js (TypeScript)', lang:' (next-app-dir)', std: true, plus: true, ext: true },
    { name: 'Vite.js (TypeScript)', std: true, plus: true, ext: true },
    { name: 'Design Figma files', lang:'preview', std: true, plus: true, ext: true },
]
const tabs: Tab[] = [
    { id: 1, label: 'Overview', content: 'This is the Overview content.' },
    { id: 2, label: 'Features', content: 'Here are some amazing Features.' },
    { id: 3, label: 'Pricing', content: 'Check out our competitive Pricing.' },
];

const FEATURES:FeatureProps[] = [
    { name: 'Material UI v6', isNew: true },
    { name: 'Vite.js v6', isNew: true },
    { name: 'React Router v7', isNew: true },
    { name: 'ESLint v9 (flat config)', isNew: true },
    { name: 'Next.js v14.x (App Router version)', isNew: true },
    { name: '70+ Pages example', isNew: false },
    { name: '100% React hooks', isNew: false },
    { name: 'React context API', isNew: false },
    { name: 'Light/dark mode', isNew: false },
    { name: 'Editors', isNew: false },
    { name: 'Apexcharts', isNew: false },
    { name: 'SWR fetching', isNew: false },
    { name: 'Dropzone upload', isNew: false },
    { name: 'Image lazy loading', isNew: false },
    { name: 'Change color theme', isNew: false },
    { name: 'React hook form + Zod', isNew: false },
    { name: 'ESLint & prettier', isNew: false },
    { name: 'Animated framer motion', isNew: false },
    { name: 'Right-to-left layout support', isNew: false },
    { name: 'Private / public routes (react router v6)', isNew: false },
    { name: 'Authentication (JWT / Firebase / Amplify / Auth0 / Supabase)', isNew: false },
    { name: 'Easy to customize', isNew: false },
    { name: '1 year of free updates / 6 months of technical support', isNew: false },
    { name: 'Fully responsive, and works across all modern/supported browsers & devices', isNew: false },
];

const PAGES:string[]=[
    'Home',
    'Components',
    'Pricing',
    'Payment',
    'Maintenance',
    'Coming soon',
    'About us',
    'Contact us',
    'Faq',
    'Shop',
    'Product',
    'Checkout',
]
const ERROR:string[]=[
    '404',
    '403',
    '500',
]

const AUTH:string[]=[
    'Sign in',
    'Sign up',
    'Reset Password',
    'Update Password',
    'Verify code',
]
const OVERVIEW:string[]=[
    'App',
    'E-Commerce',
    'Anakytics',
    'Banking',
    'Booking',
    'File',
    'Course',
]
const USER:string[]=[
    'Profile',
    'Card',
    'List',
    'Create',
    'Edit',
    'Account',
]

const reviews: Review[] = [
    {
      name: "Fabio F.",
      timeAgo: "4 days ago",
      rating: 5,
      content: "Great theme but not only that, it's worth every penny!",
      category: "Design Quality",
    },
    {
      name: "Christian C.",
      timeAgo: "22 days ago",
      rating: 5,
      content: "My overall standard <3!!",
      category: "Code Quality",
    },
    {
      name: "bater a.",
      timeAgo: "2 months ago",
      rating: 5,
      content:
        "Really good design and coding. Thank you for making so many developers happy. Make Minimals even better. We will always be together.",
      category: "Code Quality",
    },
    {
      name: "Tony H.",
      timeAgo: "3 months ago",
      rating: 5,
      content:
        "Aside from being a full-stack developer for over decades, I've a lot of experience in design. I know how much time and effort it takes to stay on top of the latest design trends. Leveraging a template like minimals is a game changer for when you want the best-of-breed, mobile-first, front-end experience without having to invest the costly effort to roll something like the minimals project on your own. Aside from just looks, all the best practices and standards are baked into the template to ensure your project is up to date with the latest frameworks, linting and readability. I am big advocate of evangelizing the minimals template because it's worth 100x it's value in my opinion. A big thanks to the designers and team at minimal. Looking forward using this template, and future version for years to come. You have a loyal customer!",
      category: "Design Quality",
    },
    {
      name: "Nord Maier N.",
      timeAgo: "3 months ago",
      rating: 5,
      content:
        "The Minimal template is one of the best templates I have ever used. It is exceptionally well-written and features a superb minimalist design. The customization options are fantastic, allowing for a high degree of personalization. I am truly grateful to the amazing team that designed this template.",
      category: "Design Quality",
    },
    {
        name: "Muhammed A.",
        timeAgo: "4 months ago",
        rating: 5,
        content:
          "Hello,I have been using this there for almost an Year to build my product. In my opinion, this is one of the best theme I have ever worked. Swift support is one of the major highlight. Being a MUI theme, you are limitless when it comes to development. Best of luck !",
        category: "For Flexibility",
    },
    {
        name: "Abdulkhakim A.",
        timeAgo: "5 months ago",
        rating: 5,
        content:
          "Code is really easy to understand and scalable!",
        category: "For Code Quality",
    },
    {
        name: "Szabó A.",
        timeAgo: "5 months ago",
        rating: 5,
        category: "For Code Quality",
    },
];

const changelogData: ChangeLogEntry[] = [
    {
      version: "v6.3.0",
      date: "Jan 01, 2025",
      changes: [
        "Update src/auth/context/amplify/auth-provider.*.",
        "Update src/auth/context/auth0/auth-provider.*.",
        "Update src/auth/guard/guest-guard.*.",
        "Update src/components/animate/scroll-progress/scroll-progress.*.",
        "Update src/components/settings/**.",
        "Update src/theme/core/components/**.",
        "Add ErrorBoundary router component for Vite.js (src/main.*).",
        "Update slots and slotProps ",
        { text: "ListItemText.", link: "#" },
        "Update dependencies.",
      ],
    },
    {
      version: "v6.2.0",
      date: "Dec 06, 2024",
      changes: [
        "New Material UI v6.",
        "New React router v7.",
        "New Eslint v9 (Flat config).",
        "Public hooks and utils folder on npm (npm i minimal-shared).",
        "Update src/theme.",
        "Update src/layout.",
        "Update src/components.",
        { text: "Add new component number input", link: "#" },
        { text: "Add new example pagination with API", link: "#" },
        { text: "Add new example layout", link: "#" },
        "Update folder API minimal-api-dev-v6.2.0.zip.",
        "Refactor and simplify project code.",
        "Update dependencies.",
      ],
    },
    {
      version: "v6.1.0",
      date: "Aug 21, 2024",
      changes: [
        "Update public.",
        "Update src/theme.",
        "Update src/layout.",
        "Update src/global.css.",
        "Update src/config-global.ts.",
        "Update src/hooks/use-debounce.ts.",
      ],
    },
];
  
const TemplateInfo = () => {
    const [activeTab, setActiveTab]     = useState<number>(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [orderCount,setOrderCount]    = useState<number[]>([])
    const { id }                        = useParams<{ id: string }>();
    const navigate                      = useNavigate();

    const template = TEMPLATES.find(item => item.url === id);

    const handleChangeTab = (tabId:number) =>{
        setActiveTab(tabId);
    }
    const reviewsPerPage = 4;

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const handleProfileClick = () => {
        let count = [1]
        setOrderCount(count);
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
                        {/* <nav className="flex space-x-4">
                            <button className="py-2 px-4 border-b-2 border-blue-500 text-blue-500 font-medium">Description</button>
                            <button className="py-2 px-4 text-gray-600 hover:text-blue-500">Reviews</button>
                            <button className="py-2 px-4 text-gray-600 hover:text-blue-500">Changelog</button>
                        </nav> */}
                        {tabs.map((tab) => (
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
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse border border-slate-400 mt-4">
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
                            {changelogData.map((entry, index) => (
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
                                        className={`h-5 w-5 ${
                                            index < template?.rating? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                        }`}
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
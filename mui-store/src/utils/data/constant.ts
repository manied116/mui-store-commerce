import { templateProps,PackageProps,TabProps,FeatureProps,Review,ChangeLogEntry } from "../types/commonProps";

export const CARTITEMS = {
    id       : 1,
    name     : "Minimal - Client and Admin Dashboard",
    seller   : "Minimal",
    license  : "Standard license",
    updates  : "1 year",
    support  : "6 months",
    price    : 69.0,
    quantity : 1,
    image    : "/assets/images/minimal.png", // Replace with actual image
};

export const ADVANCE_TEMPLATES:templateProps[] = [
    {
        id: 1,
        image: "./assets/images/mui_pro.png",
        title: "MUI X Pro",
        description: "MUI X",
        price:'$180'
    },
    {
        id: 2,
        image: "./assets/images/mui_premium.png",
        title: "MUI X Premium",
        description: "MUI X",
        price:'$588'
    }
];

export const DESIGN_TEMPLATES:templateProps[] = [
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
        rating:4
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

export const UI_USECASE: string[] = [
    'React + Admin + Dashboard',
    'Client + Admin + Dashboard',
    'Material UI + Vite',
    'Next.js + Admin + Dashboard',
    'Next.js + Ecommerce',
]


export const TITLEINFO:string[] = [
    "to finish your project faster",
    "to kickstart your project",
    "to impress your users"
];
export const TEMPLATE_LISTS: templateProps[] = [
    {
        id: 1,
        image: "./assets/images/deviaskit.png",
        title: "Devias Kit Pro - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4,
        url:'devias-kit-pro'
    },
    {
        id: 2,
        image: "./assets/images/minimal.png",
        title: "Minimal - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:5,
        url:'minimal-dashboard'
    },
    {
        id: 3,
        image: "./assets/images/front.png",
        title: "theFront - Multipurpose Template + UI Kit",
        description: "Landing & Corporate",
        price:'$49',
        rating:5,
        url:'the-front-landing-page'
    },
    {
        id: 4,
        image: "./assets/images/mantis.png",
        title: "Mantis - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:3,
        url:'mantis-react-admin-dashboard'
    },
    {
        id: 5,
        image: "./assets/images/berry.png",
        title: "Berry - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4,
        url:'berry-react-material-admin'
    },
    {
        id: 6,
        image: "./assets/images/zone.png",
        title: "Zone - Multipurpose Landing Page + UI Kit",
        description: "Landing & Corporate",
        price:'$59',
        rating:3,
        url:'zone-landing-page'
    },
    {
        id: 7,
        image: "./assets/images/deviaskit.png",
        title: "Devias Kit Pro - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'FREE',
        rating:4,
        url:'devias-kit-pro'
    },
    {
        id: 8,
        image: "./assets/images/minimal.png",
        title: "Minimal - Client and Admin Dashboard",
        description: "Admin & Dashboard",
        price:'$69',
        rating:5,
        url:'minimal-dashboard'
    },
    {
        id: 9,
        image: "./assets/images/front.png",
        title: "theFront - Multipurpose Template + UI Kit",
        description: "Landing & Corporate",
        price:'FREE',
        rating:5,
        url:'the-front-landing-page'
    },
    {
        id: 10,
        image: "./assets/images/mantis.png",
        title: "Mantis - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:3,
        url:'mantis-react-admin-dashboard'
    },
    {
        id: 11,
        image: "./assets/images/berry.png",
        title: "Berry - React Material UI Dashboard Template",
        description: "Admin & Dashboard",
        price:'$69',
        rating:4,
        url:'berry-react-material-admin'
    },
    {
        id: 12,
        image: "./assets/images/zone.png",
        title: "Zone - Multipurpose Landing Page + UI Kit",
        description: "Landing & Corporate",
        price:'FREE',
        rating:3,
        url:'zone-landing-page'
    },
];


export const SORT_OPTIONS:string[] = ["Relevance","Best Sellers","Latest Release", "Most reviews", "Best rated"];
export const FRAMEWORKS:string[]   = ["React 18", "Next.js", "Vite", "Remix", "Create React App"]
export const UIFRAMEWORKS:string[] = ["Material UI", "Joy UI", "Base UI", "Tailwind CSS"]
export const TYPES:string[]        = ["Fullstack boilerplates", "UI kits & Components", "Templates & Themes"]
export const CATEGORIES:string[]   = ["Admin & Dashboard", "Landing & Corporate", "E-commerce"]
export const USECASES:string[]     = ["Dashboard","E-commerce","Landing Page","Blog","Portfolio","Admin","E-commerce Admin","Business"]


export const PACKAGEINFO:PackageProps[] = [
    { name: 'Starter project', lang:'(next.js, vite.js)', std: true, plus: true, ext: true },
    { name: 'Create React App (JavaScript)', lang:'see how to', std: true, plus: true, ext: true },
    { name: 'Next.js', lang:' (next-app-dir)', std: true, plus: true, ext: true },
    { name: 'Vite.js (JavaScript)', std: true, plus: true, ext: true },
    { name: 'Create React App (TypeScript)', lang:'see how to', std: false, plus: true, ext: true },
    { name: 'Next.js (TypeScript)', lang:' (next-app-dir)', std: true, plus: true, ext: true },
    { name: 'Vite.js (TypeScript)', std: true, plus: true, ext: true },
    { name: 'Design Figma files', lang:'preview', std: true, plus: true, ext: true },
]
export const TAB_LIST: TabProps[] = [
    { id: 1, label: 'Overview', content: 'This is the Overview content.' },
    { id: 2, label: 'Features', content: 'Here are some amazing Features.' },
    { id: 3, label: 'Pricing', content: 'Check out our competitive Pricing.' },
];

export const FEATURES:FeatureProps[] = [
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

export const PAGES:string[]=[
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
export const ERROR:string[]=[
    '404',
    '403',
    '500',
]

export const AUTH:string[]=[
    'Sign in',
    'Sign up',
    'Reset Password',
    'Update Password',
    'Verify code',
]
export const OVERVIEW:string[]=[
    'App',
    'E-Commerce',
    'Anakytics',
    'Banking',
    'Booking',
    'File',
    'Course',
]
export const USER:string[]=[
    'Profile',
    'Card',
    'List',
    'Create',
    'Edit',
    'Account',
]

export const TEMPLATES_INFO: templateProps[] = [
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

export const REVIEWS: Review[] = [
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

export const CHANGE_LOG: ChangeLogEntry[] = [
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
  
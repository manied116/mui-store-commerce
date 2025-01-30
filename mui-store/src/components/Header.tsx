
import React, { useState } from "react";
import { ChartBarIcon, ShoppingCartIcon, ArrowTopRightOnSquareIcon, Bars3Icon , XMarkIcon,Squares2X2Icon} from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left Side - Logo */}
                <div className="flex items-center space-x-4 md:ml-10">
                    <Link to="/" className="text-xl font-semibold text-blue-600 flex items-center">
                        <ChartBarIcon className="text-blue-500 h-7 w-7 mr-1"/> Store
                    </Link>
                    <nav className="hidden md:flex space-x-4">
                        <ul className="flex justify-between items-center font-medium text-lg text-gray-600">
                            <li className="text-gray-800 py-2 text-sm font-bold hover:rounded-lg hover:bg-gray-100 hover:border hover:border-gray-200">
                                <Link to="/templates" className="px-3 py-2">Template</Link>
                            </li>
                            <li className="text-gray-800 py-2 text-sm font-bold hover:rounded-lg hover:bg-gray-100 hover:border hover:border-gray-200">
                                <Link to="/designkit" className="px-3 py-2 ">Design Kits</Link>
                            </li>
                            <li className="text-gray-800 py-2 text-sm font-bold hover:rounded-lg hover:bg-gray-100 hover:border hover:border-gray-200">
                                <Link to="/mui" className="px-3 py-2  uppercase">mui x</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Right Side - Cart, Sign In, and Menu Icon for Mobile */}
                <div className="flex items-center space-x-4 md:mr-12">
                    {/* Cart Icon */}
                    {isMenuOpen ? null : 
                        <Link to="/cart" className="md:hidden relative text-gray-700 hover:text-blue-500 border border-blue-400 px-2 py-2 rounded-lg boder-blue-300 hover:bg-blue-50">
                            <ShoppingCartIcon className="text-blue-600 h-5 w-5 stroke-blue-600 stroke-2"/>
                        </Link>
                    }

                    {/* Menu Icon for Mobile View */}
                    <button onClick={toggleMenu} className="border border-blue-400 px-2 py-2 rounded-lg boder-blue-300 md:hidden text-blue-500 hover:text-blue-600">
                        {isMenuOpen ? 
                            <XMarkIcon className="h-5 w-5" />
                        :
                            <Bars3Icon className="h-5 w-5" />
                        }
                    </button>

                    {/* Sign In & Sign Up for Larger Screens */}
                    <div className="hidden md:flex items-center space-x-2">
                        <ul className="flex justify-between items-center font-medium text-lg text-gray-600">
                            <li className="text-gray-800 px-3 py-2 text-sm font-normal hover:rounded-lg hover:bg-blue-50 hover:border hover:border-gray-200">
                                <Link to="/help" className="text-blue-600 flex items-center">
                                    Help <ArrowTopRightOnSquareIcon className="text-blue-600 h-5 w-5 stroke-sky-600 ml-1"/>
                                </Link>
                            </li>
                            <li className="text-blue-600 px-3 py-2 text-sm font-normal hover:rounded-lg hover:bg-blue-50 hover:border hover:border-gray-200">
                                <Link to="/signin" className="text-blue-600 flex items-center">
                                    Sign in
                                </Link>
                            </li>
                        </ul>
                        <button className="border rounded-lg px-3 py-2 text-sm text-white bg-blue-500 font-medium">Sign up</button>
                        <Link to="/cart" className="relative text-gray-700 hover:text-blue-500 border border-2 px-2 py-2 rounded-lg boder-blue-300 hover:bg-blue-50">
                            <ShoppingCartIcon className="text-blue-600 h-5 w-5 stroke-blue-600 stroke-2"/>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Displayed when isMenuOpen is true */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 flex flex-col p-4">
                    <div className="shadow-lg rounded-lg bg-white p-4 flex flex-col">
                        <div className="text-xl font-semibold text-gray-800">Get Started</div>
                        <div className="mt-1 grid grid-cols-2 items-center">
                            <button className="px-3 py-2 text-sm text-blue-500 font-medium">Sign in</button>
                            <button className="border rounded-lg px-3 py-2 text-sm text-white bg-blue-600 font-medium">Sign up</button>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg bg-white p-2 mt-2 flex flex-col">
                        <div className="text-xl font-semibold text-gray-800 flex items-center"><ShoppingCartIcon className="text-gray-600 h-6 w-6 stroke-2 mr-2"/>Cart</div>
                        <p className="font-medium text-md text-gray-600 mt-1">Your cart is empty</p>
                    </div>
                    <div className="shadow-lg rounded-lg bg-white p-2 mt-2">
                        <div className="text-xl font-semibold text-gray-800">Browse</div>
                        <div className="p-3">
                            <div className="flex items-center pt-3">
                                <div className="bg-blue-50 w-20 h-12 border flex justify-center items-center rounded-full ">
                                    <Squares2X2Icon className="h-6 w-6 stroke-2 text-blue-600"/>
                                </div>
                                <div className="ml-4">
                                    <div className="font-bold">Templates</div>
                                    <div className="text-sm text-gray-700 mt-1">Fully built, out-of-the-box, templates for your application.</div>
                                </div>
                            </div>
                            <div className="flex items-center pt-3">
                                <div className="bg-blue-50 w-20 h-12 border flex justify-center items-center rounded-full ">
                                    <Squares2X2Icon className="h-6 w-6 stroke-2 text-blue-600"/>
                                </div>
                                <div className="ml-4">
                                    <div className="font-bold">Design kits</div>
                                    <div className="text-sm text-gray-700 mt-1">Our components available in your favorite design tool.</div>
                                </div>
                            </div>
                            <div className="flex items-center pt-3">
                                <div className="bg-blue-50 w-20 h-12 border flex justify-center items-center rounded-full ">
                                    <Squares2X2Icon className="h-6 w-6 stroke-2 text-blue-600"/>
                                </div>
                                <div className="ml-4">
                                    <div className="font-bold uppercase">Mui x</div>
                                    <div className="text-sm text-gray-700 mt-1">Advanced and powerful components for complex use cases.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

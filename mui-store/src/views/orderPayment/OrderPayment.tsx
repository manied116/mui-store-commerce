import React from "react";
import { useNavigate} from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const OrderPayment = () => {
    const navigate             = useNavigate();

    const navigateConfirm =() =>{
        navigate('/order-confirm')
    }

    return (
        <div className="max-w-screen-xl mx-auto p-6">
            {/* Login & Coupon Notice */}
            <div className="mb-6">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-md text-sm flex md:flex-row flex-col md:items-center gap-2">
                    <div className="flex items-center gap-2">
                        <InformationCircleIcon className="h-5 w-5 text-blue-500"/>
                        <span className="font-normal">Already have an account?</span>{" "}
                    </div>
                    <a href="/login" className="underline font-normal">Click here to login</a>
                </div>
                <div className="p-3 bg-blue-50  rounded-md text-sm mt-2 flex md:flex-row flex-col md:items-center gap-2">
                    <div className="flex items-center gap-2">
                        <InformationCircleIcon className="h-5 w-5 text-blue-50 fill-blue-500"/>
                        <span className="font-normal text-gray-700">Have a coupon?</span>{" "}
                    </div>
                    <a href="/test" className="underline font-normal text-gray-700">Click here to enter your code</a>
                </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Billing Details Form */}
                <div className="md:col-span-2 bg-white">
                    <h2 className="text-xl font-bold mb-4">Billing details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-normal text-gray-500">First name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                        </div>
                        <div>
                            <label className="text-sm font-normal text-gray-500">Last name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">Company name (optional)</label>
                        <input type="text" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">Country / Region <span className="text-red-500">*</span></label>
                        <select className="w-full p-2 border-b bg-gray-50 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none ">
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">Street address <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="House number and street name" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">Town / City <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">State <span className="text-red-500">*</span></label>
                        <select className="w-full p-2  border-b bg-gray-50 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none">
                            <option>Select an option...</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">PIN Code <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">Email address <span className="text-red-500">*</span></label>
                        <input type="test" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-normal text-gray-500">Create account password <span className="text-red-500">*</span></label>
                        <input type="text" autoComplete="off" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none " />
                    </div>
                </div>
                {/* Order Summary */}
                <div className="bg-white">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Your order</h2>
                        <div className="px-4 py-4 border border-gray-200">
                            <div className="border-b py-4 flex justify-between">
                                <p className="font-semibold">Product</p>
                                <p className="font-semibold">Subtotal</p>
                            </div>
                            <div className="border-b py-4 flex justify-between">
                                <div>
                                    <p className="text-gray-900 ">Minimal - Client and Admin Dashboard - Standard License × 1</p>
                                    <p className="text-gray-500 text-sm">Vendor: Minimal</p>
                                </div>
                                <p className="font-semibold">$69.00</p>
                            </div>
                            <div className="border-b py-2 flex justify-between">
                                <p>Subtotal</p>
                                <p className="font-semibold">$69.00</p>
                            </div>
                            <div className="border-b py-2 flex justify-between">
                                <p>VAT</p>
                                <p>$0.00</p>
                            </div>
                            <div className="py-2 flex justify-between font-bold">
                                <p>Total</p>
                                <p>$69.00</p>
                            </div>
                        </div>
                    </div>
                    {/* Payment Method */}
                    <div className="mt-4 px-4 py-4 border border-gray-200">
                        <div className="flex items-center">
                            <input type="radio" id="creditCard" name="payment" className="mr-2 border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none" checked />
                            <label htmlFor="creditCard" className="text-sm font-normal text-gray-500">Credit / Debit Card</label>
                        </div>
                        <div className="mt-2">
                            <label className="text-sm font-normal text-gray-500">Card number</label>
                            <input type="text" placeholder="1234 1234 1234 1234" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="mt-2">
                                <label className="text-sm font-normal text-gray-500">Expiration date</label>
                                <input type="text" placeholder="MM / YY" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none" />
                            </div>
                            <div className="mt-2">
                                <label className="text-sm font-normal text-gray-500">Security code</label>
                                <input type="text" placeholder="CVC" className="w-full border-b p-2 border-b-gray-400 focus:border-b-2 focus:border-b-blue-500 focus:outline-none" />
                            </div>
                        </div>
                    </div>
                    {/* Terms & Place Order */}
                    <div className="mt-4 text-sm text-gray-600 px-4 py-4 border border-gray-200">
                        <p>
                            By clicking <strong>Place order</strong>, I agree with the 
                            <a href="/term" className="underline text-blue-500"> terms</a>,
                            <a href="/terms" className="underline text-blue-500">privacy policy</a>, and 
                            <a href="/terms" className="underline text-blue-500"> refund policy</a>.
                        </p>
                        <div className="flex items-center my-4">
                            <input type="checkbox" className="mr-2" />
                            <label>Send me occasional tips, updates & offers.</label>
                        </div>
                        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700" onClick={navigateConfirm}>
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPayment;

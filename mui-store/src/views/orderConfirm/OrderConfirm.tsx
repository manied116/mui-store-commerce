import React from "react";
// ICON
import { CheckIcon } from "@heroicons/react/24/outline";

const OrderConfirm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-md">
                <CheckIcon className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                <h2 className="text-2xl font-bold text-gray-800">Congratulations!</h2>
                <p className="text-gray-600 mt-2">You have successfully purchased the template.</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default OrderConfirm;

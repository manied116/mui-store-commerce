import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-xs text-gray-600 mb-4 md:mb-0">
                        Copyright © 2025 Material UI SAS, trading as MUI.
                    </p>
                    <div>
                        <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-y-0 md:space-x-6">
                            <li className="text-blue-500 text-sm">Sell</li>
                            <li className="text-blue-500 text-sm">Affiliates</li>
                            <li className="text-blue-500 text-sm">Terms</li>
                            <li className="text-blue-500 text-sm">Privacy</li>
                            <li className="text-blue-500 text-sm">Collections</li>
                            <li className="text-blue-500 text-sm">License</li>
                            <li className="text-blue-500 text-sm">Help</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;

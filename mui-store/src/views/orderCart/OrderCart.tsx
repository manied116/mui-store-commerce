import React,{useState} from 'react';
import { Link ,useNavigate} from "react-router-dom";

interface cartProps {
    id:number;
    name:string;
    seller:string;
    license:string;
    updates:string;
    support:string;
    price:number;
    quantity:number;
    image:string;
}

const cartItem = {
    id: 1,
    name: "Minimal - Client and Admin Dashboard",
    seller: "Minimal",
    license: "Standard license",
    updates: "1 year",
    support: "6 months",
    price: 69.0,
    quantity: 1,
    image: "/assets/images/minimal.png", // Replace with actual image
};

const OrderCart = () => {

    const [orderData,setOrderData] = useState<cartProps | null>(cartItem);
        const navigate             = useNavigate();

    const removeItem = () =>{
        setOrderData(null);
    }

    const navigatePayment =() =>{
        navigate('/order-payment')
    }
    
    return (
        <div className="max-w-screen-xl mx-auto p-4 md:min-h-[32rem]">
        {/* Grid Layout for Cart and Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cart Items Section */}
                <div className="md:col-span-2 bg-white p-4 rounded-lg h-max">
                    <h2 className="text-xl font-bold mb-4">Your cart {orderData?.quantity && `(${orderData?.quantity})`}</h2>
                    {orderData && Object.keys(orderData).length > 0 ?  
                        <div className="px-2 py-4 flex flex-col md:flex-row items-start md:items-center space-x-4 border border-gray-1 rounded-lg ">
                            {/* Product Image */}
                            <img
                                src={orderData?.image}
                                alt={orderData?.name}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            {/* Product Details */}
                            <div className="flex-1">
                                <h3 className="font-semibold">{orderData?.name}</h3>
                                <p className="text-gray-500 text-sm">Item by {orderData?.seller}</p>
                                <ul className="text-sm text-gray-600 mt-2">
                                    <li>• License: {orderData?.license}</li>
                                    <li>• Updates: {orderData?.updates}</li>
                                    <li>• Support: {orderData?.support}</li>
                                </ul>
                            </div>
                            {/* Quantity & Price */}
                            <div className="flex md:flex-col flex-row items-end gap-12">
                                <p className="font-semibold">
                                    {orderData?.quantity} × USD {orderData?.price.toFixed(2)}
                                </p>
                                <button className="text-blue-500 px-2 py-1 text-sm font-medium mt-2 hover:bg-blue-50 rounded-lg " onClick={removeItem}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    : 
                        
                        <div className='px-2 py-4 border border-gray-1 rounded-lg'>Your cart is empty, return to <span className='text-blue-500'><Link to="/">the home page.</Link></span></div>
                    }
                </div>

                {/* Cart Summary */}
                <div className="bg-white p-2 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Cart summary</h2>
                    <div className='px-3 py-4 border border-gray-1 rounded-lg'>
                        <div className="flex justify-between text-gray-700 py-2">
                            <p>Subtotal</p>
                            <p className="font-semibold">USD {orderData?.price ? orderData?.price.toFixed(2) : "0.00"}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold py-2">
                            <p>TOTAL</p>
                            <p>USD {orderData?.price ? orderData?.price.toFixed(2) : "0.00"}</p>
                        </div>
                        <button className={`w-full ${orderData?.price ?  'bg-blue-600 text-white':'bg-gray-200 disabled text-gray-400'} font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700 transition`} onClick={navigatePayment}>
                            Proceed to checkout
                        </button>
                        <p className="text-xs text-gray-500 mt-2 text-center py-4">
                            Taxes may apply before placing an order. Coupons and discounts will apply on the next step.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OrderCart;
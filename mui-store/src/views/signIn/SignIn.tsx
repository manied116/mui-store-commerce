import React from "react";

const SignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Sign in</h2>
                <form className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type        = "email"
                            placeholder = "your@email.com"
                            className   = "mt-1 w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type        = "password"
                            placeholder = "••••••••"
                            className   = "mt-1 w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Sign in
                    </button>
                </form>
                <div className="text-center mt-4">
                    <a href="/forget-password" className="text-blue-600 text-sm font-medium hover:underline">Forgot your password?</a>
                </div>
                <div className="flex items-center mt-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <div className="text-center mt-4 text-sm">
                    Don't have an account? <a href="/sign-up" className="text-blue-600 font-medium hover:underline">Create account</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-center text-3xl font-bold text-gray-100 mb-6">SIGN IN</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-100 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-gray-100 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="form-checkbox text-indigo-600 bg-gray-800 border-gray-600" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-400">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account? <a href="#" className="text-indigo-500 hover:text-indigo-400">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

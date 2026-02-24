import React from 'react'
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';


const DashboardPage = () => {
  const { user, logout } = useAuth();
  const [isLogout, setIsLogout] = useState(false);

  const handleLogout = () => {
    logout();
    setIsLogout(true);
  };

  if (isLogout) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Logged Out</h2>
          <p className="text-center text-gray-700">You have been logged out successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <p className="text-center text-gray-700">Welcome, {user?.name || 'User'}!</p>
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default DashboardPage
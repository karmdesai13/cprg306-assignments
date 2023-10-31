"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useUserAuth } from './_utils/auth-context';

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (!isClient) {
    return <div className="flex justify-center items-center h-screen">
             <div>Loading...</div>
           </div>; 
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {user ? (
        <>
          <p className="text-xl mb-4 animate-fade-in-down">Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out mb-4 transform hover:scale-105">
            Logout
          </button>
          <Link href="/week8/shopping-list" className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out animate-bounce">
           
              Go to shopping list
            
          </Link>
        </>
      ) : (
        <button onClick={handleLogin} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110">
          Login with GitHub
        </button>
      )}
    </div>
  );
};

export default Page;

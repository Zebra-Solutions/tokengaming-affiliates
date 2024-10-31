import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-gray-50">
      <header className="w-full bg-purple-500 text-white py-4 shadow-md text-center">
        <h1 className="text-2xl font-bold">Your Brand</h1>
      </header>
      <main className="w-full flex-grow mx-auto p-0">
        {children}
      </main>
      <footer className="w-full bg-purple-500 text-white py-4 text-center">
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;

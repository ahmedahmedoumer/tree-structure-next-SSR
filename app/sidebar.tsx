// app/sidebar/Sidebar.tsx
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar
  const pathname = usePathname(); // For active link styles

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/tree', label: 'Tree' },

  ];

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-16'
      } bg-gray-800 text-white h-full flex flex-col transition-width duration-300`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className={`${isOpen ? 'block' : 'hidden'} font-bold text-xl`}>Logo</h1>
        <button
          className="p-2 rounded-md hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '❮' : '❯'}
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-md ${
              pathname === link.href
                ? 'bg-gray-700'
                : 'hover:bg-gray-700 transition-colors'
            }`}
          >
            {isOpen ? link.label : link.label[0]} {/* Show only the first letter if closed */}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

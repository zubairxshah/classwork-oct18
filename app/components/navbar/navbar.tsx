"use client"
// components/Navbar.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'Marketing/About' },
    { path: '/blog', name: 'Marketing/Blog' },
    { path: '/account', name: 'Shop/Account' },
    { path: '/user', name: 'Not Found' },
    { path: '/clickhandle', name: 'useState' },
    { path: '/useeffect', name: 'useEffect' },
    // Add more routes here based on your folder structure
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <li key={route.path}>
            <Link 
              href={route.path}
              className={`text-white hover:text-gray-300 ${
                pathname === route.path ? 'font-bold' : ''
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

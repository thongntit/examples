'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-gray-100 p-4 mb-6">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link 
              href="/" 
              className={`font-medium ${pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/wasm" 
              className={`font-medium ${pathname === '/wasm' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              WASM Implementation
            </Link>
          </li>
          <li>
            <Link 
              href="/react" 
              className={`font-medium ${pathname === '/react' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              React Implementation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
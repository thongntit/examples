"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-md p-4 mb-6">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link
              prefetch={false}
              href="/"
              className={`font-medium ${
                pathname === "/"
                  ? "text-blue-400 underline"
                  : "text-gray-300 hover:text-blue-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              href="/wasm"
              className={`font-medium ${
                pathname === "/wasm"
                  ? "text-blue-400 underline"
                  : "text-gray-300 hover:text-blue-300"
              }`}
            >
              WASM Implementation
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              href="/react"
              className={`font-medium ${
                pathname === "/react"
                  ? "text-blue-400 underline"
                  : "text-gray-300 hover:text-blue-300"
              }`}
            >
              React Implementation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

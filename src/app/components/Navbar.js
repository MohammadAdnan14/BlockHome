import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link component from Next.js
import logo from "../../../public/assets/logo.svg";

function Navbar(props) {
  return (
    <header className="bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        
        {/* Logo */}
        <Link href="/" className="block">
          <span className="sr-only">Home</span>
          <Image className="h-14 w-20" src={logo} alt="Logo" /> {/* Increased logo size */}
        </Link>

        {/* Navigation Links */}
        <nav aria-label="Global" className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex justify-center items-center gap-10 text-base">
            {[
              { name: "Home", path: "/" }, 
              { name: "About Us", path: "#" }, 
              { name: "Quizzes", path: "#" }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-[var(--foreground)] transition hover:text-[var(--primary)] whitespace-nowrap"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/Register and Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              href="#"
              className="block rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent)]"
            >
              Login
            </Link>

            <Link
              href="#"
              className="hidden rounded-md bg-[var(--background)] px-5 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:text-[var(--accent)] sm:block"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block rounded bg-[var(--background)] p-2.5 text-[var(--foreground)] transition hover:text-[var(--primary)] md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

"use client";
import React from 'react';
import Link from 'next/link';
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/gimps", label: "GIMPS" },
    { href: "/resume.pdf", label: "Résumé", external: true },
  ];
  return (
    <nav className="bg-white py-4 sticky top-0 z-20 shadow-lg navbar-override">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 navbar-link">
            Jayden Yu 
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="navbar-link font-medium">
              Home
            </Link>
            <Link href="/about" className="navbar-link font-medium">
              About
            </Link>
            <Link href="/projects" className="navbar-link font-medium">
              Projects
            </Link>
            <Link href="/gimps" className="navbar-link font-medium">
              GIMPS
            </Link>
            <a href="/resume.pdf" target="_blank" className="navbar-link font-medium">
              Resume
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 overflow-hidden"
          >
            {navItems.map(({ href, label, external }) => (
              <li key={href} className="border-b dark:border-gray-800">
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

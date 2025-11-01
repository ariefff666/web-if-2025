import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

interface NavDropdownProps {
    title: string;          
    children: React.ReactNode;
    isActive?: boolean;
}

export default function NavDropdown({ title, children, isActive = false }: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = "relative font-semibold text-gray-700 transition-colors duration-300 hover:text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full";
    const activeNavLinkClasses = "relative font-bold text-yellow-500 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-500";

    return (
        <div 
            className="relative" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className={`${isActive ? activeNavLinkClasses : navLinkClasses} flex items-center space-x-1 cursor-pointer`}>
                <span>{title}</span>
                <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div 
                className={`absolute top-full mt-4 w-56 rounded-md shadow-lg bg-sky-600 z-50 transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
                <div className="py-1">
                    {children}
                </div>
            </div>
        </div>
    );
}


interface DropdownLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean; 
}

export const DropdownLink = ({ href, children, isActive = false }: DropdownLinkProps) => {
    return (
        <Link
            href={href}
            className={`relative block px-4 py-2 text-sm ${
                isActive 
                    ? 'font-bold text-yellow-500 bg-gray-900/30 before:scale-y-100' 
                    : 'text-gray-200 hover:bg-gray-900/50 hover:text-yellow-500 before:scale-y-0 hover:before:scale-y-100'
            } transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:transition-transform before:duration-300`}
        >
            {children}
        </Link>
    );
};

export const DropdownLinkMobile = ({ href, children, isActive = false }: DropdownLinkProps) => {
    return (
        <Link
            href={href}
            className={`relative block px-4 py-2 text-sm ${
                isActive 
                    ? 'font-bold text-yellow-500 bg-blue-900/30 before:scale-y-100' 
                    : 'block py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded'
            } transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 before:transition-transform before:duration-300`}
        >
            {children}
        </Link>
    );
};
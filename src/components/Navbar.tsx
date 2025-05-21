import React from 'react';
import { Link } from 'react-scroll';

const navItems = [
    { label: 'Accueil', to: 'hero' },
    { label: 'À propos', to: 'about' },
    { label: 'Offres', to: 'offers' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-10">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
                <div className="text-xl font-bold">Clara Leconte Coaching</div>
                <ul className="flex space-x-6">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
}
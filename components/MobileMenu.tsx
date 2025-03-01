import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

type NavLink = {
    href: string;
    label: string;
};

type MobileMenuProps = {
    navLinks: NavLink[];
    onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, onClose }) => {
    return (
        <div
            className="
        fixed
        inset-0
        z-[9999]
        text-gray-900
        flex
        flex-col
        justify-center
        items-center
        transition-all
        ease-in-out
        duration-500
      "
            style={{
                background:
                    'linear-gradient(180deg, rgba(65, 175, 255, 0.5) 0%, rgba(226, 160, 255, 0.5) 100%)',
                backdropFilter: 'blur(10px)',
            }}
        >
            {/* Close button in top right */}
            <button
                onClick={onClose}
                aria-label="Close mobile menu"
                className="absolute top-4 right-4 text-gray-600 hover:text-blue-500"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Nav links in center */}
            <div className="flex flex-col gap-8 text-xl font-light">
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={label}
                        href={href}
                        onClick={onClose}
                        className="hover:text-blue-500 transition-colors"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Telegram icon + copy at bottom */}
            <div className="absolute bottom-8 flex flex-col items-center">
                <a
                    href="https://t.me/+fQ5POYBdAS8zMWNh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 mb-4"
                >
                    {/* Example Telegram icon (replace as needed) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                    </svg>
                </a>
                <p className="text-sm text-gray-500">© 2025 Valid Protocol</p>
            </div>
        </div>
    );
};

export default MobileMenu;

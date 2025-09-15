'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Về chúng tôi', href: '/about' },
        { name: 'Sản phẩm', href: '/products' },
        { name: 'Kiểm nghiệm sản phẩm', href: '/certifications' },
        { name: 'Tin tức', href: '/news' },
        { name: 'Liên hệ', href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="h-10 w-10 relative mr-3">
                                <Image
                                    src="/phatngocanhlogo.jpg"
                                    alt="Phát Ngọc Anh Logo"
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-900">Zifat 999</h1>
                                <p className="text-xs text-gray-600">Phát Ngọc Anh</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
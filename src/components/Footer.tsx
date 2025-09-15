'use client';

import Image from 'next/image';
import Link from 'next/link';

import SocialSharing from './SocialSharing';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'Giới thiệu', href: '/about' },
            { name: 'Lịch sử phát triển', href: '/about#history' },
            { name: 'Sứ mệnh & Tầm nhìn', href: '/about#mission' },
            { name: 'Đội ngũ nhân viên', href: '/about#team' }
        ],
        products: [
            { name: 'Chất Thông Cống, WC', href: '/products/drain-cleaners' },
            { name: 'Chất Tẩy Rửa Đa Năng', href: '/products/multi-purpose-cleaners' },
            { name: 'Nước Rửa Chén', href: '/products/dishwashing-liquid' },
            { name: 'Thuốc Diệt Côn Trùng', href: '/products/pest-control' },
            { name: 'Sản phẩm Cho Ô Tô', href: '/products/automotive' },
            { name: 'Men Vi Sinh', href: '/products/probiotics' }
        ],
        services: [
            { name: 'Dịch vụ tư vấn', href: '/services#consulting' },
            { name: 'Kiểm nghiệm sản phẩm', href: '/certifications' },
            { name: 'Giao hàng tận nơi', href: '/services#delivery' },
            { name: 'Bảo hành sản phẩm', href: '/services#warranty' },
            { name: 'Hỗ trợ kỹ thuật', href: '/services#support' }
        ],
        support: [
            { name: 'Tin tức', href: '/news' },
            { name: 'Hướng dẫn sử dụng', href: '/guides' },
            { name: 'Câu hỏi thường gặp', href: '/faq' },
            { name: 'Liên hệ', href: '/contact' },
            { name: 'Báo cáo sự cố', href: '/contact#report' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100064060808039', color: 'hover:text-blue-600' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 relative mr-3">
                                <Image
                                    src="/phatngocanhlogo.jpg"
                                    alt="Phát Ngọc Anh Logo"
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Zifat 999</h3>
                                <p className="text-sm text-gray-400">Phát Ngọc Anh Chemical</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Công ty TNHH Hóa Phẩm Phát Ngọc Anh - Chuyên sản xuất và phân phối 
                            các sản phẩm hóa chất tẩy rửa chuyên nghiệp chất lượng cao với thương hiệu Zifat 999.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-300">1900-XXXX</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-300">info@phatngocanh.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-300">123 Đường ABC, Quận XYZ, TP.HCM</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3">Theo dõi chúng tôi</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-400 ${social.color} transition-colors duration-200`}
                                        aria-label={social.name}
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Sharing */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3">Chia sẻ trang web</h4>
                            <div className="flex justify-start">
                                <SocialSharing />
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Công ty</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Sản phẩm</h4>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services & Support Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Dịch vụ & Hỗ trợ</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        <h4 className="text-lg font-semibold mb-4 mt-6">Hỗ trợ</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Công Ty TNHH Hóa Phẩm Phát Ngọc Anh. Tất cả quyền được bảo lưu.
                        </div>
                        
                        <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
                            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                                Chính sách bảo mật
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors duration-200">
                                Điều khoản sử dụng
                            </Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CertificationsPreview = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
    const certifications = [
        {
            id: 1,
            name: "Nước Rửa Toilet OKAY",
            description: "Chứng nhận chất lượng sản phẩm",
            details: "Sản phẩm nước rửa toilet OKAY đã được kiểm nghiệm và đạt tiêu chuẩn chất lượng an toàn sử dụng",
            year: "2020",
            color: "blue",
            image: "/certificates/toilet-okay.jpg"
        },
        {
            id: 2,
            name: "Nước Rửa Tay Đa Năng",
            description: "Chứng nhận an toàn da tay",
            details: "Sản phẩm nước rửa tay đa năng đạt tiêu chuẩn an toàn cho da, không gây kích ứng",
            year: "2020",
            color: "green",
            image: "/certificates/hand-wash.jpg"
        },
        {
            id: 3,
            name: "Chất Chống Tắc Cống",
            description: "Chứng nhận hiệu quả thông cống",
            details: "Sản phẩm chất chống tắc cống đạt tiêu chuẩn hiệu quả cao trong việc thông tắc đường cống",
            year: "2020",
            color: "purple",
            image: "/certificates/drain-cleaner.jpg"
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: 'bg-blue-100 text-blue-600 border-blue-200',
            green: 'bg-green-100 text-green-600 border-green-200',
            purple: 'bg-purple-100 text-purple-600 border-purple-200',
            orange: 'bg-orange-100 text-orange-600 border-orange-200',
            yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
            red: 'bg-red-100 text-red-600 border-red-200'
        };
        return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600 border-gray-200';
    };

    const achievements = [
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: "Chất lượng được công nhận",
            description: "Đạt các tiêu chuẩn quốc tế nghiêm ngặt"
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "An toàn cho sức khỏe",
            description: "Sản phẩm không độc hại, thân thiện với người dùng"
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
            ),
            title: "Thân thiện môi trường",
            description: "Cam kết bảo vệ môi trường và phát triển bền vững"
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Hiệu quả vượt trội",
            description: "Công nghệ tiên tiến, hiệu quả làm sạch tối ưu"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Chứng Nhận & Giải Thưởng
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                        Chúng tôi tự hào với những chứng nhận chất lượng quốc tế và các giải thưởng uy tín, 
                        khẳng định vị thế hàng đầu trong ngành hóa phẩm tẩy rửa.
                    </p>
                    <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                        💡 Nhấp vào bất kỳ chứng nhận nào để xem chi tiết
                    </p>
                </div>

                {/* Certifications Grid - Only show first 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer"
                            onClick={() => setSelectedCertificate(cert)}
                        >
                            {/* Certificate Image */}
                            <div className="mb-4 relative h-32 bg-gray-50 rounded-lg overflow-hidden group">
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                    }}
                                />
                                {/* Placeholder fallback */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                {/* Click indicator */}
                                <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getColorClasses(cert.color)}`}>
                                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                Năm {cert.year}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {cert.name}
                            </h3>
                            <h4 className="text-lg font-semibold text-blue-600 mb-3">
                                {cert.description}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {cert.details}
                            </p>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mb-16">
                    <Link
                        href="/certifications"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Xem tất cả chứng nhận
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Achievements Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Cam Kết Chất Lượng
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Mỗi chứng nhận là một lời cam kết về chất lượng, an toàn và trách nhiệm 
                            với khách hàng và cộng đồng.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                                    {achievement.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {achievement.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quality Promise */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Lời Cam Kết Chất Lượng
                        </h3>
                        <p className="text-lg mb-6 max-w-3xl mx-auto">
                            &quot;Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất, 
                            an toàn cho sức khỏe và thân thiện với môi trường. 
                            Mỗi sản phẩm Zifat 999 đều trải qua quy trình kiểm định nghiêm ngặt.&quot;
                        </p>
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-sm opacity-90">Giám đốc Công ty</div>
                                <div className="font-semibold">Phát Ngọc Anh Chemical</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div 
                        className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal content */}
                        <div className="p-6">
                            {/* Certificate details */}
                            <div className="mb-6">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${getColorClasses(selectedCertificate.color)}`}>
                                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    Năm {selectedCertificate.year}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {selectedCertificate.name}
                                </h3>
                                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                                    {selectedCertificate.description}
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {selectedCertificate.details}
                                </p>
                            </div>

                            {/* Large certificate image */}
                            <div className="relative bg-gray-50 rounded-xl overflow-hidden" style={{ height: '60vh' }}>
                                <Image
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.name}
                                    fill
                                    className="object-contain p-4"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                    }}
                                />
                                {/* Fallback */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Additional info */}
                            <div className="mt-6 text-center text-sm text-gray-500">
                                <p>Chứng nhận được cấp bởi Trung tâm đo lường chất lượng 3</p>
                                <p>Nhấp bên ngoài để đóng</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificationsPreview;

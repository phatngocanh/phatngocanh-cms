'use client';

const AboutSection = () => {
    const features = [
        {
            title: 'Hơn 20 năm kinh nghiệm',
            description: 'Thành lập và phát triển trong lĩnh vực hóa phẩm tẩy rửa chuyên nghiệp'
        },
        {
            title: 'Chất lượng đảm bảo',
            description: 'Sản phẩm được kiểm nghiệm và chứng nhận chất lượng quốc tế'
        },
        {
            title: 'Đội ngũ chuyên nghiệp',
            description: 'Đội ngũ nhân viên giàu kinh nghiệm, tận tâm phục vụ khách hàng'
        },
        {
            title: 'Sứ mệnh rõ ràng',
            description: 'Cung cấp sản phẩm chất lượng cao, an toàn cho người dùng và môi trường'
        }
    ];

    const certifications = [
        'ISO 9001:2015',
        'ISO 14001:2015',
        'GMP',
        'Chứng nhận an toàn thực phẩm'
    ];

    const values = [
        'Chất lượng sản phẩm hàng đầu',
        'Dịch vụ khách hàng tận tâm',
        'Giá cả cạnh tranh',
        'Giao hàng nhanh chóng',
        'Bảo hành sản phẩm',
        'Hỗ trợ kỹ thuật 24/7'
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Về Công Ty TNHH Hóa Phẩm Phát Ngọc Anh
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Với hơn 20 năm kinh nghiệm trong lĩnh vực sản xuất và phân phối hóa phẩm tẩy rửa, 
                                chúng tôi tự hào là đơn vị hàng đầu cung cấp các sản phẩm chất lượng cao với thương hiệu 
                                <span className="font-semibold text-blue-600"> Zifat 999</span>.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Chúng tôi cam kết mang đến cho khách hàng những sản phẩm an toàn, hiệu quả và thân thiện 
                                với môi trường, đáp ứng mọi nhu cầu tẩy rửa trong gia đình và công nghiệp.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                Chứng nhận chất lượng
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image and Values */}
                    <div className="space-y-8">
                        {/* Company Image Placeholder */}
                        <div className="relative">
                            <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-xl overflow-hidden">
                                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="h-16 w-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <p className="text-gray-600 font-medium">Nhà máy sản xuất Zifat 999</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">20+</div>
                                    <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                                </div>
                            </div>
                            
                            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">1000+</div>
                                    <div className="text-sm text-gray-600">Khách hàng tin tưởng</div>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Cam kết của chúng tôi
                            </h3>
                            <div className="space-y-3">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
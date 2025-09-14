'use client';

import Link from 'next/link';

const ProductCategories = () => {
    const categories = [
        {
            id: 1,
            name: 'Chất Thông Cống, WC',
            description: 'Sản phẩm thông cống chuyên nghiệp, hiệu quả cao',
            href: '/products/drain-cleaners',
            color: 'blue',
            products: ['Nước Thông Cống Siêu Mạnh', 'Chất Thông WC Siêu Tốc', 'Bột Thông Cống']
        },
        {
            id: 2,
            name: 'Chất Tẩy Rửa Đa Năng',
            description: 'Chất tẩy rửa đa năng cho mọi bề mặt',
            href: '/products/multi-purpose-cleaners',
            color: 'green',
            products: ['Nước Tẩy Trắng', 'Nước Lau Sàn Nhà', 'Nước Tẩy Gạch Men', 'Nước Lau Kiếng']
        },
        {
            id: 3,
            name: 'Nước Rửa Chén',
            description: 'Nước rửa chén chuyên nghiệp, an toàn thực phẩm',
            href: '/products/dishwashing-liquid',
            color: 'yellow',
            products: ['Nước Rửa Chén Zifat 999', 'Nước Rửa Chén Tập Trung']
        },
        {
            id: 4,
            name: 'Thuốc Diệt Côn Trùng',
            description: 'Thuốc diệt côn trùng hiệu quả, an toàn',
            href: '/products/pest-control',
            color: 'red',
            products: ['Thuốc Diệt Mối Tận Gốc', 'Thuốc Diệt Côn Trùng', 'Nước Xịt Phòng']
        },
        {
            id: 5,
            name: 'Sản phẩm Cho Ô Tô',
            description: 'Chăm sóc xe hơi chuyên nghiệp',
            href: '/products/automotive',
            color: 'purple',
            products: ['Dầu Làm Bóng', 'Chất Tẩy Rửa Xe']
        },
        {
            id: 6,
            name: 'Men Vi Sinh',
            description: 'Men vi sinh thân thiện môi trường',
            href: '/products/probiotics',
            color: 'indigo',
            products: ['Men Vi Sinh WC', 'Men Vi Sinh Hồ Tôm']
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
            green: 'bg-green-100 text-green-600 hover:bg-green-200',
            yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
            red: 'bg-red-100 text-red-600 hover:bg-red-200',
            purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
            indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
        };
        return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600 hover:bg-gray-200';
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Sản Phẩm Zifat 999
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Chuyên sản xuất và phân phối các sản phẩm hóa chất tẩy rửa chuyên nghiệp, 
                        chất lượng cao với thương hiệu Zifat 999 uy tín
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
                        >
                            <div className="flex items-start space-x-4">
                                {/* Icon */}
                                <div className={`p-3 rounded-lg ${getColorClasses(category.color)} group-hover:scale-110 transition-transform duration-200`}>
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {category.description}
                                        </p>
                                        
                                        {/* Product List */}
                                        <div className="space-y-1">
                                            {category.products.slice(0, 3).map((product, index) => (
                                                <div key={index} className="flex items-center text-sm text-gray-500">
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                                    {product}
                                                </div>
                                            ))}
                                            {category.products.length > 3 && (
                                                <div className="text-sm text-blue-600 font-medium">
                                                    +{category.products.length - 3} sản phẩm khác
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Hover Effect */}
                                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-200">
                                    <span className="text-blue-600 font-medium group-hover:text-blue-700">
                                        Xem chi tiết →
                                    </span>
                                </div>
                            </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <Link
                        href="/products"
                        className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Xem tất cả sản phẩm
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;

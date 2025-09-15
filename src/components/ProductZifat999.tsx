'use client';

import Link from 'next/link';

const ProductZifat999 = () => {
    const productCategories = [
        {
            id: 1,
            name: 'Chất Thông Cống, WC',
            description: 'Sản phẩm thông cống chuyên nghiệp, hiệu quả cao',
            href: '/products?category=drain-cleaner',
            color: 'blue',
            icon: '🚽',
            products: ['Nước Thông Cống Siêu Mạnh', 'Chất Thông WC Siêu Tốc', 'Bột Thông Cống']
        },
        {
            id: 2,
            name: 'Chất Tẩy Rửa Đa Năng',
            description: 'Chất tẩy rửa đa năng cho mọi bề mặt',
            href: '/products?category=multi-purpose-cleaner',
            color: 'green',
            icon: '🧴',
            products: ['Nước Tẩy Trắng', 'Nước Lau Sàn Nhà', 'Nước Tẩy Gạch Men', '+1 sản phẩm khác']
        },
        {
            id: 3,
            name: 'Nước Rửa Chén',
            description: 'Nước rửa chén chuyên nghiệp, an toàn thực phẩm',
            href: '/products?category=dishwashing',
            color: 'yellow',
            icon: '🧽',
            products: ['Nước Rửa Chén Zifat 999', 'Nước Rửa Chén Tập Trung']
        },
        {
            id: 4,
            name: 'Thuốc Diệt Côn Trùng',
            description: 'Thuốc diệt côn trùng hiệu quả, an toàn',
            href: '/products?category=pesticide',
            color: 'red',
            icon: '🦟',
            products: ['Thuốc Diệt Mối Tận Gốc', 'Thuốc Diệt Côn Trùng', 'Nước Xịt Phòng']
        },
        {
            id: 5,
            name: 'Sản phẩm Cho Ô Tô',
            description: 'Chăm sóc xe hơi chuyên nghiệp',
            href: '/products?category=automotive',
            color: 'purple',
            icon: '🚗',
            products: ['Dầu Làm Bóng', 'Chất Tẩy Rửa Xe']
        },
        {
            id: 6,
            name: 'Men Vi Sinh',
            description: 'Men vi sinh thân thiện môi trường',
            href: '/products?category=probiotics',
            color: 'indigo',
            icon: '🧬',
            products: ['Men Vi Sinh WC', 'Men Vi Sinh Hồ Tôm']
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700',
            green: 'from-green-50 to-green-100 border-green-200 hover:border-green-300 text-green-600 hover:text-green-700',
            yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 hover:border-yellow-300 text-yellow-600 hover:text-yellow-700',
            red: 'from-red-50 to-red-100 border-red-200 hover:border-red-300 text-red-600 hover:text-red-700',
            purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300 text-purple-600 hover:text-purple-700',
            indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 hover:border-indigo-300 text-indigo-600 hover:text-indigo-700'
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Sản Phẩm ZIFAT 999
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Dòng sản phẩm chất lượng cao ZIFAT 999 - giải pháp hoàn hảo cho mọi nhu cầu làm sạch và vệ sinh
                    </p>
                </div>

                {/* Product Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productCategories.map((category) => (
                        <Link key={category.id} href={category.href} className="group">
                            <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 transform hover:-translate-y-1 h-full flex flex-col ${getColorClasses(category.color)}`}>
                                <div className={`relative h-20 bg-gradient-to-br flex items-center justify-center ${getColorClasses(category.color)}`}>
                                    <div className="text-4xl">{category.icon}</div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className={`text-xl font-semibold mb-2 group-hover:${getColorClasses(category.color).split(' ')[4]} transition-colors`}>
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-1">
                                        {category.description}
                                    </p>
                                    
                                    {/* Product List */}
                                    <div className="space-y-1 mb-4">
                                        {category.products.map((product, index) => (
                                            <div key={index} className="text-sm text-gray-700">
                                                • {product}
                                            </div>
                                        ))}
                                    </div>

                                    {/* View Details Link */}
                                    <div className={`flex items-center mt-auto ${getColorClasses(category.color).split(' ')[4]} ${getColorClasses(category.color).split(' ')[5]} transition-colors`}>
                                        <span className="text-sm font-medium">Xem chi tiết</span>
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductZifat999;

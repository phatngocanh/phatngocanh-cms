'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string | null;
    originalPrice?: string | null;
    unit?: string | null;
    volume?: string | null;
    category: string;
    tags: string[];
    isFeatured: boolean;
    inStock: boolean;
}

interface Combo {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string | null;
    originalPrice: string;
    savings: string;
    unit?: string | null;
    category: string;
    tags: string[];
    isFeatured: boolean;
    inStock: boolean;
}

interface ProductData {
    products: Product[];
    combos: Combo[];
}

const ProductsPreview = () => {
    const [productData, setProductData] = useState<ProductData>({ products: [], combos: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await import('@/data/products.json');
                setProductData(data.default);
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-gray-200 h-72 rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const featuredProducts = productData.products.filter(product => product.isFeatured).slice(0, 3);
    const featuredCombos = productData.combos.filter(combo => combo.isFeatured).slice(0, 3);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Sản Phẩm Nổi Bật
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Khám phá các sản phẩm chất lượng cao từ ZIFAT 999 - giải pháp hoàn hảo cho mọi nhu cầu làm sạch
                    </p>
                </div>

                {/* Featured Combos */}
                {featuredCombos.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                            Combo Tiết Kiệm
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredCombos.map((combo) => (
                                <Link key={combo.id} href={`/products/${combo.id}`} className="group">
                                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 h-full flex flex-col">
                                        <div className="relative h-64 bg-gray-50 flex items-center justify-center p-4">
                                            <Image
                                                src={combo.image}
                                                alt={combo.name}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                                Tiết kiệm {(() => {
                                                    if (!combo.price) return 'Liên hệ';
                                                    const original = parseFloat(combo.originalPrice.replace(/[.,]/g, ''));
                                                    const current = parseFloat(combo.price.replace(/[.,]/g, ''));
                                                    const savings = original - current;
                                                    return savings.toLocaleString('vi-VN') + ' VNĐ';
                                                })()}
                                            </div>
                                            {!combo.inStock && (
                                                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                                                    Hết hàng
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                                {combo.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                                                {combo.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {combo.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-xl font-bold text-green-600">
                                                            {combo.price === null ? "Liên hệ" : `${combo.price} VNĐ`}
                                                        </span>
                                                        {combo.price && (
                                                            <span className="text-sm text-gray-400 line-through">
                                                                {combo.originalPrice} VNĐ
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-blue-600 group-hover:text-blue-700">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Featured Products */}
                {featuredProducts.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                            Sản Phẩm Chất Lượng
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProducts.map((product) => (
                                <Link key={product.id} href={`/products/${product.id}`} className="group">
                                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 h-full flex flex-col">
                                        <div className="relative h-64 bg-gray-50 flex items-center justify-center p-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {product.isFeatured && (
                                                <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                                                    Nổi bật
                                                </div>
                                            )}
                                            {!product.inStock && (
                                                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                                                    Hết hàng
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                                {product.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                                                {product.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-xl font-bold text-blue-600">
                                                            {product.price === null ? "Liên hệ" : `${product.price} VNĐ`}
                                                        </span>
                                                        {product.originalPrice && product.price && (
                                                            <span className="text-sm text-gray-400 line-through">
                                                                {product.originalPrice} VNĐ
                                                            </span>
                                                        )}
                                                    </div>
                                                    {product.volume && (
                                                        <div className="text-xs text-gray-500">
                                                            {product.volume}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="text-blue-600 group-hover:text-blue-700">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Products Button - Inside Featured Products Section */}
                        <div className="mt-8 text-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                <span>Xem Tất Cả Sản Phẩm</span>
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsPreview;
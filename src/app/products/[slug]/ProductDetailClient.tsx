'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import productsData from '@/data/products.json';

interface Product {
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    image: string;
    images?: string[];
    price: string | null;
    originalPrice?: string | null;
    unit?: string | null;
    volume?: string;
    category: string;
    tags: string[];
    features: string[];
    usage?: string;
    benefits?: string;
    ingredients?: string;
    storage?: string;
    warnings?: string;
    specifications?: Record<string, string>;
    viewCount?: number;
    isFeatured: boolean;
    inStock: boolean;
}

interface Combo {
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    image: string;
    images?: string[];
    price: string | null;
    originalPrice: string;
    savings: string;
    unit?: string | null;
    category: string;
    tags: string[];
    features: string[];
    isFeatured: boolean;
    inStock: boolean;
    products?: Array<{
        id: string;
        quantity: number;
    }>;
}

interface ProductDetailClientProps {
    product: Product | Combo;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [imageTransition, setImageTransition] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    // Check if it's a combo
    const isCombo = 'savings' in product;

    // Calculate savings for combos
    const calculateSavings = () => {
        if (!isCombo) return null;
        const combo = product as Combo;
        if (!combo.price) return null;
        const original = parseFloat(combo.originalPrice.replace(/[.,]/g, ''));
        const current = parseFloat(combo.price.replace(/[.,]/g, ''));
        const savings = original - current;
        return savings.toLocaleString('vi-VN') + ' VNĐ';
    };

    // Use the product's images array if available, otherwise fallback to single image
    const productImages = product.images && product.images.length > 0 ? product.images : [product.image, product.image, product.image];

    const handleImageChange = (index: number) => {
        if (index === selectedImageIndex) return;
        
        setImageTransition(true);
        setIsImageLoading(true);
        
        setTimeout(() => {
            setSelectedImageIndex(index);
            setImageTransition(false);
            setIsImageLoading(false);
        }, 150);
    };

    const openModal = (index?: number) => {
        setModalImageIndex(index ?? selectedImageIndex);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const handleModalImageChange = (index: number) => {
        setModalImageIndex(index);
    };

    const nextModalImage = useCallback(() => {
        const nextIndex = modalImageIndex < productImages.length - 1 ? modalImageIndex + 1 : 0;
        handleModalImageChange(nextIndex);
    }, [modalImageIndex, productImages.length]);

    const prevModalImage = useCallback(() => {
        const prevIndex = modalImageIndex > 0 ? modalImageIndex - 1 : productImages.length - 1;
        handleModalImageChange(prevIndex);
    }, [modalImageIndex, productImages.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isModalOpen) return;
            
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowLeft') {
                prevModalImage();
            } else if (event.key === 'ArrowRight') {
                nextModalImage();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, modalImageIndex, nextModalImage, prevModalImage]);

    // Get related products
    const relatedProducts = productsData.products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <Link href="/products" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                                    Sản phẩm
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{product.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Product Detail */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Product Images */}
                        <div className="p-6">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                                    <Image
                                        src={productImages[selectedImageIndex]}
                                        alt={product.name}
                                        fill
                                        className={`object-contain transition-all duration-300 ${
                                            imageTransition ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                                        } group-hover:scale-105`}
                                        onClick={() => openModal()}
                                    />
                                    
                                    {/* Loading overlay */}
                                    {isImageLoading && (
                                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                        </div>
                                    )}
                                    
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 z-20">
                                        {isCombo && (
                                            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse">
                                                Tiết kiệm {calculateSavings()}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="absolute top-4 right-4 z-20">
                                        {!product.inStock && (
                                            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                                                Hết hàng
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Click to expand hint */}
                                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                            Click để phóng to
                                        </div>
                                    </div>
                                </div>

                                {/* Thumbnail Images */}
                                {productImages.length > 1 && (
                                    <div className="flex space-x-2 mt-4 overflow-x-auto">
                                        {productImages.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleImageChange(index)}
                                                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                                    selectedImageIndex === index
                                                        ? 'border-blue-500 ring-2 ring-blue-200'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${product.name} - Ảnh ${index + 1}`}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-contain"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                            <div className="space-y-6">
                                {/* Title and Price */}
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-3xl font-bold text-blue-600">
                                                {product.price === "Liên hệ" || product.price === null ? "Liên hệ" : `${product.price} VNĐ`}
                                            </span>
                                            {isCombo && (product as Combo).originalPrice && product.price !== "Liên hệ" && product.price !== null && (
                                                <span className="text-xl text-gray-400 line-through">
                                                    {(product as Combo).originalPrice} VNĐ
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                                        {product.unit && <span>{product.unit}</span>}
                                        {'volume' in product && product.volume && (
                                            <>
                                                {product.unit && <span>•</span>}
                                                <span>{product.volume}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mô tả sản phẩm</h3>
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">{product.detailedDescription}</div>
                                </div>

                                {/* Features */}
                                {product.features && product.features.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tính năng nổi bật</h3>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tags */}
                                {product.tags && product.tags.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Từ khóa</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {product.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Stock Status */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-700">Tình trạng:</span>
                                    <span className={`px-2 py-1 rounded-full text-sm ${
                                        product.inStock 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                                    </span>
                                </div>

                                {/* Contact Information */}
                                <div className="pt-4 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Liên hệ đặt hàng</h3>
                                    
                                    {/* Phone Contact */}
                                    <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-green-800">Điện thoại</p>
                                            <a href="tel:+84123456789" className="text-green-700 hover:text-green-900 font-semibold">
                                                0123 456 789
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email Contact */}
                                    <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-blue-800">Email</p>
                                            <a href="mailto:info@phatngoanh.com" className="text-blue-700 hover:text-blue-900 font-semibold">
                                                info@phatngoanh.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* WhatsApp/Zalo Contact */}
                                    <div className="flex items-center space-x-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-orange-800">Zalo/WhatsApp</p>
                                            <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 font-semibold">
                                                0123 456 789
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Product Info */}
                    <div className="border-t border-gray-200 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {'usage' in product && product.usage && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Cách sử dụng</h4>
                                    <div 
                                        className="text-sm text-gray-600 whitespace-pre-line" 
                                        dangerouslySetInnerHTML={{ __html: product.usage }}
                                    />
                                </div>
                            )}
                            {'benefits' in product && product.benefits && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Lợi ích</h4>
                                    <div className="text-sm text-gray-600 whitespace-pre-line">{product.benefits}</div>
                                </div>
                            )}
                            {'ingredients' in product && product.ingredients && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Thành phần</h4>
                                    <p className="text-sm text-gray-600">{product.ingredients}</p>
                                </div>
                            )}
                            {'storage' in product && product.storage && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Bảo quản</h4>
                                    <p className="text-sm text-gray-600">{product.storage}</p>
                                </div>
                            )}
                        </div>

                        {/* Technical Specifications */}
                        {'specifications' in product && product.specifications && (
                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Chỉ tiêu chất lượng chính
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="text-sm">
                                            <span className="font-medium text-blue-800">{key}:</span>
                                            <span className="ml-2 text-blue-700">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {'warnings' in product && product.warnings && (
                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Lưu ý quan trọng
                                </h4>
                                <div className="text-sm text-yellow-700 whitespace-pre-line">{product.warnings}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                                    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                                        <div className="relative h-48">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-200"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedProduct.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-bold text-blue-600">
                                                    {relatedProduct.price === "Liên hệ" || relatedProduct.price === null ? "Liên hệ" : `${relatedProduct.price} VNĐ`}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation buttons */}
                        {productImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevModalImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextModalImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Main modal image */}
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={productImages[modalImageIndex]}
                                alt={`${product.name} - Ảnh ${modalImageIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority
                            />
                        </div>

                        {/* Image counter */}
                        {productImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm font-medium">
                                {modalImageIndex + 1} / {productImages.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailClient;

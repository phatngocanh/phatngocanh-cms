'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

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
    volume?: string | null;
    category: string;
    tags: string[];
    features: string[];
    usage: string;
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

interface Category {
    id: string;
    name: string;
    description: string;
}

interface ProductData {
    products: Product[];
    combos: Combo[];
    categories: Category[];
}

interface ProductsPageClientProps {
    initialParams?: {
        tab?: string;
        category?: string;
        search?: string;
        page?: string;
    };
}

const ProductsPageClient = ({ initialParams }: ProductsPageClientProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [productData, setProductData] = useState<ProductData>({ products: [], combos: [], categories: [] });
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [activeTab, setActiveTab] = useState<'combos' | 'products'>('products');
    const [showCategories, setShowCategories] = useState<boolean>(false);
    
    const isInitialMount = useRef(true);
    
    const productsPerPage = 9;

    // Initialize state from URL parameters
    useEffect(() => {
        const tab = searchParams.get('tab') || initialParams?.tab || 'products';
        const category = searchParams.get('category') || initialParams?.category || 'all';
        const search = searchParams.get('search') || initialParams?.search || '';
        const page = parseInt(searchParams.get('page') || initialParams?.page || '1');

        console.log('URL Params Debug:', {
            'searchParams.get("page")': searchParams.get('page'),
            'initialParams?.page': initialParams?.page,
            'final page': page,
            'current currentPage before update': currentPage
        });
        
        // Force update states
        setActiveTab(tab as 'combos' | 'products');
        setSelectedCategory(category);
        setSearchQuery(search);
        setCurrentPage(page);
        
        // Mark that initial mount is complete
        isInitialMount.current = false;
    }, [searchParams, initialParams, currentPage]);

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

    // Update URL when state changes
    const updateURL = (newParams: Record<string, string | number>) => {
        const params = new URLSearchParams();
        
        // Set current values
        params.set('tab', activeTab);
        if (selectedCategory !== 'all') params.set('category', selectedCategory);
        if (searchQuery) params.set('search', searchQuery);
        if (currentPage > 1) params.set('page', currentPage.toString());
        
        // Override with new values
        Object.entries(newParams).forEach(([key, value]) => {
            if (value && value !== 'all' && value !== 1) {
                params.set(key, value.toString());
            } else {
                params.delete(key);
            }
        });
        
        const queryString = params.toString();
        const newURL = queryString ? `/products?${queryString}` : '/products';
        router.push(newURL, { scroll: false });
    };


    // Reset search when switching tabs (but not on initial load from URL)
    useEffect(() => {
        // Only reset if this is not the initial mount (i.e., user is actually switching tabs)
        if (!isInitialMount.current) {
            setSearchQuery('');
            setSelectedCategory('all');
        }
    }, [activeTab, currentPage]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="animate-pulse space-y-8">
                        <div className="h-10 bg-gray-200 rounded w-96 mx-auto"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-gray-200 h-80 rounded-lg"></div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Vietnamese text normalization function
    const normalizeVietnamese = (text: string): string => {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'd');
    };

    // Get the current category from URL as fallback
    const urlCategory = searchParams.get('category') || initialParams?.category || 'all';
    const effectiveCategory = selectedCategory === 'all' ? urlCategory : selectedCategory;
    
    // Filter products based on search and category
    const filteredProducts = productData.products.filter(product => {
        const normalizedQuery = normalizeVietnamese(searchQuery);
        const matchesSearch = searchQuery === '' || 
            normalizeVietnamese(product.name).includes(normalizedQuery) ||
            normalizeVietnamese(product.description).includes(normalizedQuery) ||
            product.tags.some(tag => normalizeVietnamese(tag).includes(normalizedQuery));
        const matchesCategory = effectiveCategory === 'all' || product.category === effectiveCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    // Debug: Log filtering info
    console.log('Current selectedCategory:', selectedCategory);
    console.log('URL category:', urlCategory);
    console.log('Effective category for filtering:', effectiveCategory);
    console.log('Total products:', productData.products.length);
    console.log('Filtered products:', filteredProducts.length);
    console.log('Filtered products:', filteredProducts.map(p => ({ name: p.name, category: p.category })));

    // Pagination logic for products
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            
            {/* Header */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Sản Phẩm ZIFAT 999
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Khám phá bộ sưu tập sản phẩm làm sạch chất lượng cao từ ZIFAT 999
                        </p>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => {
                                setActiveTab('products');
                                updateURL({ tab: 'products', category: selectedCategory, search: searchQuery, page: 1 });
                            }}
                            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                                activeTab === 'products'
                                    ? 'border-blue-500 text-blue-600 transform scale-105'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <span>Sản Phẩm</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                                    {productData.products.length}
                                </span>
                            </div>
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('combos');
                                updateURL({ tab: 'combos', category: 'all', search: '', page: 1 });
                            }}
                            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                                activeTab === 'combos'
                                    ? 'border-green-500 text-green-600 transform scale-105'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <span>Combo Tiết Kiệm</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                    {productData.combos.length}
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Combos Tab Content */}
                {activeTab === 'combos' && (
                    <section className="animate-fade-in">
                        <div className="mb-6">
                            <p className="text-gray-600">
                                Tiết kiệm hơn khi mua combo các sản phẩm được kết hợp thông minh
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {productData.combos.map((combo, index) => (
                                <Link key={combo.id} href={`/products/${combo.id}`} className="group">
                                    <div 
                                        className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-green-200 transform hover:-translate-y-1 animate-slide-up h-full flex flex-col"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                                            <Image
                                                src={combo.image}
                                                alt={combo.name}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-all duration-500 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                                {combo.name}
                                            </h3>
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
                    </section>
                )}

                {/* Products Tab Content */}
                {activeTab === 'products' && (
                    <section className="animate-fade-in">
                        {/* Search and Filters - Same Line */}
                        <div className="mb-6">
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                                    {/* Search Bar */}
                                    <div className="flex-1">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Tìm kiếm sản phẩm..."
                                                value={searchQuery}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setSearchQuery(value);
                                                    setCurrentPage(1); // Reset page for user search
                                                    // Debounce URL update for search
                                                    setTimeout(() => {
                                                        updateURL({ search: value, page: 1 });
                                                    }, 500);
                                                }}
                                                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            {searchQuery && (
                                                <button
                                                    onClick={() => {
                                                        setSearchQuery('');
                                                        setCurrentPage(1); // Reset page for user action
                                                        updateURL({ search: '', page: 1 });
                                                    }}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                                >
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Category Filter Toggle */}
                                    <div className="w-full lg:w-auto lg:min-w-[300px]">
                                        <button
                                            onClick={() => setShowCategories(!showCategories)}
                                            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 border border-gray-300 rounded-lg"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                                </svg>
                                                <span className="font-medium text-gray-900">
                                                    {selectedCategory === 'all' ? (
                                                        <span className="text-gray-500">Tất cả sản phẩm</span>
                                                    ) : (
                                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                                            {productData.categories.find(cat => cat.id === selectedCategory)?.name}
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                            <div className="flex items-center space-x-2">
                                {selectedCategory !== 'all' && (
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCategory('all');
                                            setCurrentPage(1); // Reset page for user action
                                            updateURL({ category: 'all', page: 1 });
                                        }}
                                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                                    >
                                        ✕
                                    </span>
                                )}
                                                <svg 
                                                    className={`h-5 w-5 text-gray-400 transform transition-transform ${showCategories ? 'rotate-180' : ''}`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Expandable Category List */}
                                {showCategories && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedCategory('all');
                                                    setCurrentPage(1); // Reset page for user action
                                                    updateURL({ category: 'all', page: 1 });
                                                }}
                                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                                    selectedCategory === 'all'
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                            >
                                                Tất cả
                                            </button>
                                            {productData.categories
                                                .filter(cat => cat.id !== 'combo')
                                                .map((category) => (
                                                    <button
                                                        key={category.id}
                                                        onClick={() => {
                                                            setSelectedCategory(category.id);
                                                            setCurrentPage(1); // Reset page for user action
                                                            updateURL({ category: category.id, page: 1 });
                                                        }}
                                                        className={`px-3 py-2 text-sm rounded-md transition-colors text-left ${
                                                            selectedCategory === category.id
                                                                ? 'bg-blue-600 text-white'
                                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                        title={category.description}
                                                    >
                                                        {category.name}
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Results Summary */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-sm text-gray-600">
                                Hiển thị {paginatedProducts.length} / {filteredProducts.length} sản phẩm
                                {selectedCategory !== 'all' && (
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        {productData.categories.find(cat => cat.id === selectedCategory)?.name}
                                    </span>
                                )}
                            </div>
                            {totalPages > 1 && (
                                <div className="text-sm text-gray-600">
                                    Trang {currentPage} / {totalPages}
                                </div>
                            )}
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {paginatedProducts.map((product, index) => (
                                <Link key={product.id} href={`/products/${product.id}`} className="group">
                                    <div 
                                        className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-200 transform hover:-translate-y-1 animate-slide-up h-full flex flex-col"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-all duration-500 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                                {product.name}
                                            </h3>
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

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center space-x-2">
                                <button
                                    onClick={() => {
                                        const newPage = Math.max(1, currentPage - 1);
                                        setCurrentPage(newPage);
                                        updateURL({ page: newPage });
                                    }}
                                    disabled={currentPage === 1}
                                    className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                    ) {
                                        return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => {
                                                setCurrentPage(pageNumber);
                                                updateURL({ page: pageNumber });
                                            }}
                                            className={`px-3 py-2 rounded-md text-sm font-medium ${
                                                currentPage === pageNumber
                                                    ? 'bg-blue-600 text-white'
                                                    : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                                            }`}
                                        >
                                            {pageNumber}
                                        </button>
                                        );
                                    } else if (
                                        pageNumber === currentPage - 2 ||
                                        pageNumber === currentPage + 2
                                    ) {
                                        return (
                                            <span key={pageNumber} className="px-2 py-2 text-gray-400">
                                                ...
                                            </span>
                                        );
                                    }
                                    return null;
                                })}
                                
                                <button
                                    onClick={() => {
                                        const newPage = Math.min(totalPages, currentPage + 1);
                                        setCurrentPage(newPage);
                                        updateURL({ page: newPage });
                                    }}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* No results */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Không tìm thấy sản phẩm
                                </h3>
                                <p className="text-gray-600">
                                    Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc danh mục
                                </p>
                            </div>
                        )}
                    </section>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ProductsPageClient;
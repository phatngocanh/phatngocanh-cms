'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Article {
    id: number;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
    author: string;
    tags: string[];
    featured: boolean;
}

interface NewsPageClientProps {
    articles: Article[];
}

export default function NewsPageClient({ articles }: NewsPageClientProps) {
    const categories = ["Tất cả", "Vệ sinh nhà cửa", "Sửa chữa nhà cửa", "Chăm sóc xe", "Sản phẩm ZIFAT 999"];
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 9;

    // Update document title
    useEffect(() => {
        document.title = 'Tin Tức & Hướng Dẫn - ZIFAT 999 | Phát Ngọc Anh';
    }, []);

    const filteredArticles = selectedCategory === "Tất cả" 
        ? articles 
        : articles.filter(article => article.category === selectedCategory);

    // Pagination
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

    const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Tin Tức & Hướng Dẫn
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Khám phá những mẹo hay, hướng dẫn chi tiết và tin tức mới nhất từ ZIFAT 999
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setCurrentPage(1);
                                }}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Articles Count */}
                    <div className="mb-8">
                        <p className="text-gray-600 text-center">
                            Hiển thị {currentArticles.length} trong số {filteredArticles.length} bài viết
                            {selectedCategory !== "Tất cả" && ` trong danh mục "${selectedCategory}"`}
                        </p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentArticles.map((article) => (
                            <article key={article.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                                {/* Article Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/blog-images/default-blog.jpg';
                                        }}
                                    />
                                    {article.featured && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                Nổi bật
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {formatDate(article.date)}
                                        <span className="mx-2">•</span>
                                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {article.readTime}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {article.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Button */}
                                    <Link 
                                        href={`/blog/${article.slug}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                                    >
                                        Đọc tiếp
                                        <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center space-x-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg font-medium ${
                                    currentPage === 1
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                                }`}
                            >
                                ← Trước
                            </button>
                            
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`px-4 py-2 rounded-lg font-medium ${
                                            currentPage === pageNumber
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                                        }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                            
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg font-medium ${
                                    currentPage === totalPages
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                                }`}
                            >
                                Sau →
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

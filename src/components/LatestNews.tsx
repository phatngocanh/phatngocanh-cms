'use client';

import Image from 'next/image';
import Link from 'next/link';

import articlesData from '@/data/articles.json';

const LatestNews = () => {
    // Show only featured articles on homepage
    const featuredArticles = articlesData.filter(article => article.featured).slice(0, 3);
    const recentArticles = articlesData.slice(0, 6);
    
    // Combine featured and recent, remove duplicates, take first 6
    const displayArticles = [...featuredArticles, ...recentArticles]
        .filter((article, index, self) => 
            index === self.findIndex(a => a.id === article.id)
        )
        .slice(0, 6);

    const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tin Tức & Hướng Dẫn
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Khám phá những mẹo hay, hướng dẫn chi tiết và tin tức mới nhất từ ZIFAT 999
                    </p>
                    <Link
                        href="/news"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                        Xem tất cả tin tức
                        <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayArticles.map((article) => (
                        <article key={article.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
                            {/* Article Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formatDate(article.date)}
                                    <span className="mx-2">•</span>
                                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {article.readTime}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.slice(0, 2).map((tag, index) => (
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

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6">
                        Còn nhiều bài viết hữu ích khác đang chờ bạn khám phá
                    </p>
                    <Link
                        href="/news"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
                    >
                        Khám phá thêm tin tức
                        <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect,useState } from 'react';

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
    contentFile: string;
}

interface BlogPostClientProps {
    article: Article;
    relatedArticles: Article[];
}

export default function BlogPostClient({ article, relatedArticles }: BlogPostClientProps) {
    const [articleContent, setArticleContent] = useState<string>('');
    const [loadingContent, setLoadingContent] = useState<boolean>(false);

    useEffect(() => {
        if (article) {
            // Update document title
            document.title = `${article.title} - ZIFAT 999 | Phát Ngọc Anh`;
            
            // Load article content
            loadArticleContent(article);
        }
    }, [article]);

    const loadArticleContent = async (articleData: Article) => {
        setLoadingContent(true);
        
        try {
            // Try to load content from markdown file
            if (articleData.contentFile) {
                const response = await fetch(`/api/articles/${articleData.contentFile}`);
                if (response.ok) {
                    const markdownContent = await response.text();
                    setArticleContent(markdownContent);
                } else {
                    // Fallback: load from hardcoded content based on article excerpt
                    setArticleContent(`${articleData.excerpt}\n\n**Nội dung chi tiết đang được cập nhật...**\n\nVui lòng liên hệ với chúng tôi để biết thêm thông tin chi tiết về chủ đề này.\n\n**Liên hệ:**\n**CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH**\n**Hotline:** 0286.271.3214 - 0945.437.079\n**Email:** hoaphamphatngocanh@gmail.com`);
                }
            } else {
                // Fallback content
                setArticleContent(`${articleData.excerpt}\n\n**Nội dung chi tiết đang được cập nhật...**\n\nVui lòng liên hệ với chúng tôi để biết thêm thông tin chi tiết về chủ đề này.\n\n**Liên hệ:**\n**CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH**\n**Hotline:** 0286.271.3214 - 0945.437.079\n**Email:** hoaphamphatngocanh@gmail.com`);
            }
        } catch (error) {
            console.error('Error loading article content:', error);
            setArticleContent(`${articleData.excerpt}\n\n**Lỗi tải nội dung**\n\nKhông thể tải nội dung bài viết. Vui lòng thử lại sau.\n\n**Liên hệ:**\n**CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH**\n**Hotline:** 0286.271.3214 - 0945.437.079\n**Email:** hoaphamphatngocanh@gmail.com`);
        }
        
        setLoadingContent(false);
    };

    const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    const renderContent = (content: string) => {
        return content.split('\n\n').map((paragraph, index) => {
            // Handle images
            if (paragraph.startsWith('![') && paragraph.includes('](')) {
                const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                if (imageMatch) {
                    const [, alt, src] = imageMatch;
                    return (
                        <div key={index} className="my-8 text-center">
                            <Image
                                src={src}
                                alt={alt}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            />
                            {alt && (
                                <p className="text-sm text-gray-500 mt-2 italic">{alt}</p>
                            )}
                        </div>
                    );
                }
            }
            
            // Handle markdown headings
            if (paragraph.startsWith('# ')) {
                return (
                    <h1 key={index} className="text-4xl font-bold text-gray-900 mt-12 mb-6">
                        {paragraph.replace(/^# /, '')}
                    </h1>
                );
            }
            
            if (paragraph.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-3xl font-bold text-gray-900 mt-10 mb-5">
                        {paragraph.replace(/^## /, '')}
                    </h2>
                );
            }
            
            if (paragraph.startsWith('### ')) {
                return (
                    <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace(/^### /, '')}
                    </h3>
                );
            }
            
            if (paragraph.startsWith('#### ')) {
                return (
                    <h4 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace(/^#### /, '')}
                    </h4>
                );
            }
            
            // Handle lists
            if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                const listItems = paragraph.split('\n').filter(line => line.startsWith('- '));
                const nonListContent = paragraph.split('\n').filter(line => !line.startsWith('- ')).join('\n');
                
                return (
                    <div key={index} className="mb-4">
                        {nonListContent && (
                            <p className="text-gray-700 leading-relaxed mb-3">
                                {nonListContent.split('**').map((part, partIndex) => {
                                    if (partIndex % 2 === 1) {
                                        return <strong key={partIndex} className="font-semibold text-gray-900">{part}</strong>;
                                    }
                                    return part;
                                })}
                            </p>
                        )}
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            {listItems.map((item, itemIndex) => (
                                <li key={itemIndex} className="leading-relaxed">
                                    {item.replace(/^- /, '').split('**').map((part, partIndex) => {
                                        if (partIndex % 2 === 1) {
                                            return <strong key={partIndex} className="font-semibold text-gray-900">{part}</strong>;
                                        }
                                        return part;
                                    })}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            
            // Handle regular paragraphs
            if (paragraph.trim()) {
                return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph.split('**').map((part, partIndex) => {
                            if (partIndex % 2 === 1) {
                                return <strong key={partIndex} className="font-semibold text-gray-900">{part}</strong>;
                            }
                            return part;
                        })}
                    </p>
                );
            }
            
            return null;
        }).filter(Boolean);
    };

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
                        <span>›</span>
                        <Link href="/news" className="hover:text-blue-600">Tin tức</Link>
                        <span>›</span>
                        <span className="text-gray-900 line-clamp-1">{article.title}</span>
                    </nav>
                </div>
            </div>

            {/* Article Header */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {article.category}
                            </span>
                            {article.featured && (
                                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Nổi bật
                                </span>
                            )}
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>
                        
                        <div className="flex items-center justify-center space-x-6 text-gray-500">
                            <div className="flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                                </svg>
                                {formatDate(article.date)}
                            </div>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {article.readTime}
                            </div>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {article.author}
                            </div>
                        </div>
                    </div>
                    
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/blog-images/default-blog.jpg';
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        {loadingContent ? (
                            <div className="text-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">Đang tải nội dung...</p>
                            </div>
                        ) : (
                            <div className="text-lg leading-relaxed">
                                {renderContent(articleContent)}
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Từ khóa:</h4>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag: string, index: number) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Chia sẻ bài viết:</h4>
                        <div className="flex space-x-4">
                            <button 
                                onClick={() => {
                                    const url = window.location.href;
                                    const text = `${article.title} - ZIFAT 999`;
                                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Facebook
                            </button>
                            <button 
                                onClick={() => {
                                    const url = window.location.href;
                                    const text = `${article.title} - ZIFAT 999\n${article.excerpt}`;
                                    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
                                }}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                WhatsApp
                            </button>
                            <button 
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert('Đã sao chép liên kết!');
                                }}
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Bài viết liên quan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedArticles.map((relatedArticle) => (
                                <article key={relatedArticle.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={relatedArticle.image}
                                            alt={relatedArticle.title}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/blog-images/default-blog.jpg';
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {relatedArticle.excerpt}
                                        </p>
                                        <Link 
                                            href={`/blog/${relatedArticle.slug}`}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Đọc tiếp →
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import articlesData from '@/data/articles.json';

import BlogPostClientComponent from './BlogPostClient';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articlesData.find(a => a.slug === slug);
    
    if (!article) {
        return {
            title: 'Bài viết không tìm thấy - ZIFAT 999',
            description: 'Bài viết bạn tìm kiếm không tồn tại.',
        };
    }

    return {
        title: `${article.title} - ZIFAT 999 | Phát Ngọc Anh`,
        description: article.excerpt,
        keywords: article.tags.join(', '),
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
            type: 'article',
            publishedTime: article.date,
            authors: [article.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // Find the article by slug
    const article = articlesData.find(a => a.slug === slug);
    
    if (!article) {
        notFound();
    }
    
    // Find related articles
    const relatedArticles = articlesData
        .filter(a => a.slug !== slug && a.category === article.category)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <BlogPostClientComponent article={article} relatedArticles={relatedArticles} />
            <Footer />
        </div>
    );
}
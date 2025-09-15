import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import articlesData from '@/data/articles.json';

import NewsPageClient from './NewsPageClient';

// Add metadata for SEO
export const metadata = {
    title: 'Tin Tức & Hướng Dẫn - ZIFAT 999 | Phát Ngọc Anh',
    description: 'Khám phá những mẹo hay, hướng dẫn chi tiết và tin tức mới nhất từ ZIFAT 999. Cách vệ sinh nhà cửa, sửa chữa, chăm sóc xe hiệu quả.',
    keywords: 'tin tức zifat 999, hướng dẫn vệ sinh, mẹo hay, chăm sóc nhà cửa, sản phẩm tẩy rửa',
    openGraph: {
        title: 'Tin Tức & Hướng Dẫn - ZIFAT 999',
        description: 'Khám phá những mẹo hay, hướng dẫn chi tiết và tin tức mới nhất từ ZIFAT 999',
        type: 'website',
    },
};

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <NewsPageClient articles={articlesData} />
            <Footer />
        </div>
    );
}
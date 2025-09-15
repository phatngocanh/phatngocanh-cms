import { Metadata } from 'next';

import productsData from '@/data/products.json';

import ProductsPageClient from './ProductsPageClient';

interface PageProps {
    searchParams: Promise<{ 
        tab?: string; 
        category?: string; 
        search?: string; 
        page?: string; 
    }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const params = await searchParams;
    const { tab, category, search } = params;
    
    // Base metadata
    let title = 'Sản Phẩm - ZIFAT 999 | Phát Ngọc Anh';
    let description = 'Khám phá bộ sưu tập sản phẩm làm sạch chất lượng cao từ ZIFAT 999. Từ chất thông cống, nước giặt đến combo tiết kiệm - giải pháp hoàn hảo cho mọi nhu cầu làm sạch.';
    
    // Dynamic metadata based on filters
    if (tab === 'combos') {
        title = 'Combo Tiết Kiệm - ZIFAT 999 | Phát Ngọc Anh';
        description = `Khám phá ${productsData.combos.length} combo tiết kiệm từ ZIFAT 999. Mua combo để tiết kiệm chi phí và có đầy đủ sản phẩm làm sạch chuyên nghiệp.`;
    } else if (tab === 'products') {
        title = 'Sản Phẩm Làm Sạch - ZIFAT 999 | Phát Ngọc Anh';
        description = `Tìm kiếm trong ${productsData.products.length} sản phẩm làm sạch chuyên nghiệp từ ZIFAT 999. Chất lượng cao, hiệu quả vượt trội.`;
    }
    
    // Category-specific metadata
    if (category && category !== 'all') {
        const categoryData = productsData.categories.find(cat => cat.id === category);
        if (categoryData) {
            title = `${categoryData.name} - ZIFAT 999 | Phát Ngọc Anh`;
            description = `${categoryData.description} Khám phá các sản phẩm ${categoryData.name.toLowerCase()} chất lượng cao từ ZIFAT 999.`;
        }
    }
    
    // Search-specific metadata
    if (search) {
        title = `Tìm kiếm: ${search} - ZIFAT 999 | Phát Ngọc Anh`;
        description = `Kết quả tìm kiếm cho "${search}" trong bộ sưu tập sản phẩm làm sạch ZIFAT 999.`;
    }
    
    return {
        title,
        description,
        keywords: 'ZIFAT 999, sản phẩm làm sạch, chất thông cống, nước giặt, combo tiết kiệm, Phát Ngọc Anh',
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'vi_VN',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: `/products${tab ? `?tab=${tab}` : ''}${category && category !== 'all' ? `${tab ? '&' : '?'}category=${category}` : ''}`,
        },
    };
}

export default async function ProductsPage({ searchParams }: PageProps) {
    const params = await searchParams;
    return <ProductsPageClient initialParams={params} />;
}

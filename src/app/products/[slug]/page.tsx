import { notFound } from 'next/navigation';

import productsData from '@/data/products.json';

import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const allItems = [...productsData.products, ...productsData.combos];
    return allItems.map((item) => ({
        slug: item.id,
    }));
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { slug } = await params;
    const allItems = [...productsData.products, ...productsData.combos];
    const item = allItems.find((item) => item.id === slug);

    if (!item) {
        return {
            title: 'Sản phẩm không tìm thấy - ZIFAT 999',
        };
    }

    return {
        title: `${item.name} - ZIFAT 999 | Phát Ngọc Anh`,
        description: item.description,
        keywords: `${item.name}, ZIFAT 999, ${item.tags?.join(', ')}, Phát Ngọc Anh`,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const allItems = [...productsData.products, ...productsData.combos];
    const item = allItems.find((item) => item.id === slug);

    if (!item) {
        notFound();
    }

    return <ProductDetailClient product={item as any} />;
}

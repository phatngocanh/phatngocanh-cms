import "./globals.css";

export const metadata = {
    title: "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh - Zifat 999 | Chất Tẩy Rửa Chuyên Nghiệp",
    description: "Công ty chuyên sản xuất và phân phối các sản phẩm hóa chất tẩy rửa chuyên nghiệp: chất thông cống, chất tẩy rửa đa năng, nước rửa chén. Thương hiệu Zifat 999 uy tín, chất lượng cao.",
    keywords: "hóa phẩm, chất tẩy rửa, thông cống, nước rửa chén, Zifat 999, Phát Ngọc Anh, hóa chất công nghiệp",
    authors: [{ name: "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh" }],
    creator: "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh",
    publisher: "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh",
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://phatngocanh.com",
        title: "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh - Zifat 999",
        description: "Chuyên sản xuất và phân phối các sản phẩm hóa chất tẩy rửa chuyên nghiệp chất lượng cao",
        siteName: "Phát Ngọc Anh Chemical",
        locale: "vi_VN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh - Zifat 999",
        description: "Chuyên sản xuất và phân phối các sản phẩm hóa chất tẩy rửa chuyên nghiệp chất lượng cao",
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#1e40af",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <head>
                <link rel="canonical" href="https://phatngocanh.com" />
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Công Ty TNHH Hóa Phẩm Phát Ngọc Anh",
                            "alternateName": "Phát Ngọc Anh Chemical",
                            "url": "https://phatngocanh.com",
                            "logo": "https://phatngocanh.com/logo.png",
                            "description": "Công ty chuyên sản xuất và phân phối các sản phẩm hóa chất tẩy rửa chuyên nghiệp",
                            "brand": {
                                "@type": "Brand",
                                "name": "Zifat 999"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "VN",
                                "addressLocality": "Việt Nam"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+84-xxx-xxx-xxx",
                                "contactType": "customer service"
                            }
                        })
                    }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}

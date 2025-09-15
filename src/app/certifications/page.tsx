import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function CertificationsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="pt-16">
                <Certifications />
            </div>
            <Footer />
        </div>
    );
}

export const metadata = {
    title: 'Kiểm nghiệm sản phẩm - Chứng nhận chất lượng | Zifat 999',
    description: 'Xem tất cả các chứng nhận chất lượng và giải thưởng của sản phẩm Zifat 999. Cam kết chất lượng cao, an toàn sức khỏe và thân thiện môi trường.',
    keywords: 'kiểm nghiệm sản phẩm, chứng nhận chất lượng, Zifat 999, hóa phẩm tẩy rửa, an toàn sức khỏe',
};

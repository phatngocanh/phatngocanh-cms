import CertificationsPreview from "@/components/CertificationsPreview";
import CompanyIntro from "@/components/CompanyIntro";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import Navigation from "@/components/Navigation";
import ProductsPreview from "@/components/ProductsPreview";
import ProductZifat999 from "@/components/ProductZifat999";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="w-full">
                <Hero />
            </div>
            <CompanyIntro />
            <ProductZifat999 />
            <ProductsPreview />
            <CertificationsPreview />
            <Testimonials />
            <LatestNews />
            <ContactSection />
            <Footer />
        </div>
    );
}
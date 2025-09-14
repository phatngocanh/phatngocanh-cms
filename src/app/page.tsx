import AboutSection from "@/components/AboutSection";
import CertificationsPreview from "@/components/CertificationsPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import Navigation from "@/components/Navigation";
import ProductCategories from "@/components/ProductCategories";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Hero />
            <ProductCategories />
            <AboutSection />
            <CertificationsPreview />
            <Testimonials />
            <LatestNews />
            <ContactSection />
            <Footer />
        </div>
    );
}
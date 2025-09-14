import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Hero />
            <ProductCategories />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

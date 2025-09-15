'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const carouselSlides = [
        {
            title: "Zifat 999 - Chất Tẩy Rửa Chuyên Nghiệp",
            subtitle: "Công ty TNHH Hóa Phẩm Phát Ngọc Anh",
            description: "Địa chỉ: 430/33 Đường TA 28, Khu phố 2, P Thới An, Quận 12, TP HCM",
            image: "/banner.jpg",
            cta: "Liên hệ ngay",
            ctaSecondary: "Xem sản phẩm",
            isBanner: true
        },
        {
            title: "Giao Hàng Nhanh Chóng",
            subtitle: "Miễn phí vận chuyển đơn hàng trên 350.000đ",
            description: "Cam kết giao hàng nhanh chóng, đúng hẹn với chất lượng tốt nhất",
            image: "/carousel-1.jpg",
            cta: "Đặt hàng ngay",
            ctaSecondary: "Tìm hiểu thêm"
        },
        {
            title: "Khuyến Mãi Hàng Ngày",
            subtitle: "Ưu đãi đặc biệt cho khách hàng",
            description: "Nhiều combo sản phẩm với giá ưu đãi, tiết kiệm chi phí",
            image: "/carousel-2.png",
            cta: "Xem khuyến mãi",
            ctaSecondary: "Liên hệ tư vấn"
        },
        {
            title: "Chất Lượng Hàng Đầu",
            subtitle: "Sản phẩm được kiểm nghiệm chất lượng",
            description: "Cam kết chất lượng cao, an toàn cho người sử dụng và môi trường",
            image: "/carousel-3.jpg",
            cta: "Tìm hiểu thêm",
            ctaSecondary: "Liên hệ ngay"
        }
    ];

    // Auto-slide functionality with progress bar
    useEffect(() => {
        if (isPaused || isTransitioning) return;
        
        const autoSlideTimer = setTimeout(() => {
            setCurrentSlide((current) => {
                const nextSlide = (current + 1) % carouselSlides.length;
                return nextSlide;
            });
            setIsTransitioning(true);
            setProgress(0); // Reset progress
            setTimeout(() => setIsTransitioning(false), 800);
        }, 5000); // 5 seconds per slide

        return () => clearTimeout(autoSlideTimer);
    }, [currentSlide, isPaused, isTransitioning, carouselSlides.length]);

    // Progress bar animation
    useEffect(() => {
        if (isPaused || isTransitioning) return;
        
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 2; // Increment by 2% every 100ms (5000ms total)
            });
        }, 100);

        return () => clearInterval(progressInterval);
    }, [currentSlide, isPaused, isTransitioning]);

    const handleSlideChange = (slideIndexOrFunction: number | ((prev: number) => number)) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setIsPaused(true); // Pause auto-progression during manual navigation
        
        if (typeof slideIndexOrFunction === 'function') {
            setCurrentSlide(slideIndexOrFunction);
        } else {
            setCurrentSlide(slideIndexOrFunction);
        }
        
        // Reset progress for manual navigation
        setProgress(0);
        
        // Reset transition state after animation completes and resume auto-progression
        setTimeout(() => {
            setIsTransitioning(false);
            setIsPaused(false); // Resume auto-progression
        }, 800);
    };

    const nextSlide = () => {
        handleSlideChange((prev) => (prev + 1) % carouselSlides.length);
    };

    const prevSlide = () => {
        handleSlideChange((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    const goToSlide = (index: number) => {
        if (index !== currentSlide) {
            handleSlideChange(index);
        }
    };

    return (
        <div className="w-full hero-section">
            {/* Integrated Banner + Carousel Section - No gaps */}
            <div className="w-full">
                {/* Carousel Section with Banner as first slide */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
                    {/* Background Images with Smooth Transitions */}
                    <div className="absolute inset-0">
                        {carouselSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                                    index === currentSlide 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-105'
                                }`}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className={slide.isBanner ? "object-contain bg-white" : "object-cover"}
                                    style={slide.isBanner ? {} : { objectPosition: 'center top' }}
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                        {/* Animated Overlay - hidden for banner slide */}
                        {!carouselSlides[currentSlide]?.isBanner && (
                            <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
                                isTransitioning ? 'bg-opacity-60' : 'bg-opacity-50'
                            }`}></div>
                        )}
                    </div>

                    {/* Content with Smooth Animations - hidden for banner slide */}
                    {!carouselSlides[currentSlide]?.isBanner && (
                        <div className="relative z-10 h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                <div className={`max-w-4xl transition-all duration-800 ease-out transform ${
                                    isTransitioning 
                                        ? 'opacity-0 translate-y-4' 
                                        : 'opacity-100 translate-y-0'
                                }`}>
                                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight transition-all duration-800 delay-100 transform ${
                                        isTransitioning 
                                            ? 'opacity-0 translate-x-8' 
                                            : 'opacity-100 translate-x-0'
                                    }`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                        {carouselSlides[currentSlide].title}
                                    </h2>
                                    <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold text-yellow-300 mb-3 transition-all duration-800 delay-200 transform ${
                                        isTransitioning 
                                            ? 'opacity-0 translate-x-8' 
                                            : 'opacity-100 translate-x-0'
                                    }`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                        {carouselSlides[currentSlide].subtitle}
                                    </h3>
                                    <p className={`text-base md:text-lg text-white mb-6 leading-relaxed transition-all duration-800 delay-300 transform ${
                                        isTransitioning 
                                            ? 'opacity-0 translate-y-4' 
                                            : 'opacity-100 translate-y-0'
                                    }`} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                                        {carouselSlides[currentSlide].description}
                                    </p>
                                    
                                    {/* CTA Buttons with Staggered Animation */}
                                    <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-800 delay-400 transform ${
                                        isTransitioning 
                                            ? 'opacity-0 translate-y-4' 
                                            : 'opacity-100 translate-y-0'
                                    }`}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm transform" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                            {carouselSlides[currentSlide].cta}
                                        </button>
                                        <button className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-2 px-6 rounded-lg transition-all duration-300 text-sm shadow-lg hover:scale-105 transform" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                            {carouselSlides[currentSlide].ctaSecondary}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Enhanced Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 z-20 hover:scale-110 active:scale-95 ${
                        isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                    }`}
                    aria-label="Previous slide"
                >
                    <svg className="h-6 w-6 transition-transform duration-200 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 z-20 hover:scale-110 active:scale-95 ${
                        isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                    }`}
                    aria-label="Next slide"
                >
                    <svg className="h-6 w-6 transition-transform duration-200 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20 z-20">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Enhanced Slide Indicators */}
                <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 px-4 py-2 rounded-full transition-all duration-300 ${
                    carouselSlides[currentSlide]?.isBanner 
                        ? 'bg-black bg-opacity-30 backdrop-blur-sm' 
                        : 'bg-transparent'
                }`}>
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`relative overflow-hidden rounded-full transition-all duration-300 transform hover:scale-125 active:scale-95 ${
                                index === currentSlide 
                                    ? carouselSlides[currentSlide]?.isBanner
                                        ? 'w-8 h-3 bg-gray-800 shadow-lg border-2 border-white'
                                        : 'w-8 h-3 bg-white shadow-lg'
                                    : carouselSlides[currentSlide]?.isBanner
                                        ? 'w-3 h-3 bg-gray-600 bg-opacity-70 hover:bg-gray-800 hover:shadow-md border border-white'
                                        : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75 hover:shadow-md'
                            } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === currentSlide && !carouselSlides[currentSlide]?.isBanner && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse"></div>
                            )}
                            {index === currentSlide && carouselSlides[currentSlide]?.isBanner && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>
                </div>

                {/* Features Bar */}
                <div className="bg-white bg-opacity-95 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-gray-700 py-2 px-1">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium">Giao hàng nhanh</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-gray-700 py-2 px-1">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium">Miễn phí vận chuyển</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-gray-700 py-2 px-1">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium">Khuyến mãi hàng ngày</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-gray-700 py-2 px-1">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium">Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
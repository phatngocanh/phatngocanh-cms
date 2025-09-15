'use client';

import Link from 'next/link';

import AnimatedCounter from '@/components/AnimatedCounter';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const CompanyIntro = () => {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
    const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation(0.3);
    const { containerRef: statsRef, visibleItems: statsVisible } = useStaggeredScrollAnimation(4, 0.3);
    const { containerRef: achievementsRef, visibleItems: achievementsVisible } = useStaggeredScrollAnimation(3, 0.3);
    // const { elementRef: productsRef, isVisible: productsVisible } = useScrollAnimation(0.3);
    const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

    return (
        <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 -mt-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div 
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`text-center mb-12 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Giới Thiệu Công Ty Phát Ngọc Anh
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Thương hiệu hóa mỹ phẩm hàng đầu Việt Nam với hơn 50 mặt hàng chất lượng cao
                    </p>
                </div>

                {/* Main Content */}
                <div 
                    ref={contentRef as React.RefObject<HTMLDivElement>}
                    className="grid lg:grid-cols-2 gap-12 items-center mb-16"
                >
                    {/* Left Column - Text */}
                    <div className={`space-y-6 scroll-animate-left ${contentVisible ? 'animate-in' : ''}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Kính Chào Quý Khách Hàng
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong className="text-blue-600">CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH</strong> gửi lời cảm ơn sâu sắc đến quý khách hàng. Chúng tôi cảm ơn sự tin tưởng và sử dụng sản phẩm hóa mỹ phẩm trong thời gian qua.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Với dây chuyền công nghệ hiện đại, chúng tôi có quy mô nhà xưởng lớn. Đội ngũ công nhân lành nghề giúp chúng tôi tự tin. Chúng tôi mang đến cho khách hàng các sản phẩm có <strong className="text-green-600">chất lượng tốt nhất</strong> cùng giá thành phải chăng.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Stats */}
                    <div 
                        ref={statsRef as React.RefObject<HTMLDivElement>}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-110 scroll-animate-scale ${statsVisible[0] ? 'animate-in' : ''}`}>
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                <AnimatedCounter endValue={50} suffix="+" />
                            </div>
                            <p className="text-gray-600 text-sm">Mặt Hàng</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-110 scroll-animate-scale scroll-delay-100 ${statsVisible[1] ? 'animate-in' : ''}`}>
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                <AnimatedCounter endValue={64} />
                            </div>
                            <p className="text-gray-600 text-sm">Tỉnh Thành</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-110 scroll-animate-scale scroll-delay-200 ${statsVisible[2] ? 'animate-in' : ''}`}>
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                <AnimatedCounter endValue={80} suffix="%" />
                            </div>
                            <p className="text-gray-600 text-sm">Thị phần cửa hàng điện nước</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-110 scroll-animate-scale scroll-delay-300 ${statsVisible[3] ? 'animate-in' : ''}`}>
                            <div className="text-3xl font-bold text-orange-600 mb-2">
                                <AnimatedCounter endValue={5} suffix="M" />
                            </div>
                            <p className="text-gray-600 text-sm">Sản Phẩm/Năm</p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div 
                    ref={achievementsRef as React.RefObject<HTMLDivElement>}
                    className="grid md:grid-cols-3 gap-8 mb-12"
                >
                    <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-105 scroll-animate ${achievementsVisible[0] ? 'animate-in' : ''}`}>
                        <div className="text-4xl mb-3">🏆</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900">Chứng Nhận Chất Lượng Cao</h4>
                        <p className="text-gray-600 text-sm">Được Bộ Khoa học và Công nghệ công nhận</p>
                    </div>
                    <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-105 scroll-animate scroll-delay-100 ${achievementsVisible[1] ? 'animate-in' : ''}`}>
                        <div className="text-4xl mb-3">💪</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900">Thương Hiệu Uy Tín</h4>
                        <p className="text-gray-600 text-sm">Phát triển bền vững trên toàn quốc</p>
                    </div>
                    <div className={`bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:scale-105 scroll-animate scroll-delay-200 ${achievementsVisible[2] ? 'animate-in' : ''}`}>
                        <div className="text-4xl mb-3">🌟</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900">Giải Thưởng Cộng Đồng</h4>
                        <p className="text-gray-600 text-sm">Vì Cộng Đồng - Năm 2020</p>
                    </div>
                </div>

                {/* CTA */}
                <div 
                    ref={ctaRef as React.RefObject<HTMLDivElement>}
                    className={`text-center scroll-animate-scale ${ctaVisible ? 'animate-in' : ''}`}
                >
                    <Link
                        href="/about"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110"
                    >
                        <span>Tìm Hiểu Thêm Về Chúng Tôi</span>
                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;

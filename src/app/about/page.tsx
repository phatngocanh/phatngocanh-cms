'use client';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useCountingNumber, useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
    const heroAnimation = useScrollAnimation();
    const welcomeAnimation = useScrollAnimation();
    const achievementsAnimation = useStaggeredScrollAnimation(3);
    const visionAnimation = useStaggeredScrollAnimation(2);
    const marketAnimation = useStaggeredScrollAnimation(2);
    const strategyAnimation = useStaggeredScrollAnimation(3);
    const goalsAnimation = useStaggeredScrollAnimation(4);
    const mainGoalAnimation = useScrollAnimation();
    
    // Animated counters
    const counter64 = useCountingNumber(64, 1500, marketAnimation.visibleItems[0]);
    const counter80 = useCountingNumber(80, 1500, marketAnimation.visibleItems[0]);
    const counter2000 = useCountingNumber(2000, 1500, goalsAnimation.visibleItems[0]);
    const counter20000 = useCountingNumber(20000, 1500, goalsAnimation.visibleItems[1])
    const counter50000 = useCountingNumber(50000, 1500, goalsAnimation.visibleItems[2]);
    const counter5000 = useCountingNumber(5000, 1500, goalsAnimation.visibleItems[3]);
    const counter5million = useCountingNumber(5, 1500, mainGoalAnimation.isVisible);
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroAnimation.elementRef as React.RefObject<HTMLDivElement>} className="text-center mb-12">
                        <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            PHAT NGOC ANH CO,.Ltd - Zifat 999
                        </h1>
                        <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8 transition-all duration-1000 delay-400 ${heroAnimation.isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                        <h2 className={`text-2xl md:text-3xl font-semibold text-gray-800 mb-6 transition-all duration-1000 delay-600 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            KÍNH CHÀO QUÝ KHÁCH HÀNG
                        </h2>
                    </div>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={welcomeAnimation.elementRef as React.RefObject<HTMLDivElement>} className={`bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-1000 ${welcomeAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
                        <div className="text-lg leading-relaxed text-gray-700 space-y-6">
                            <p>
                                Lời đầu tiên <strong className="text-blue-600">CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH</strong> gửi lời cảm ơn sâu sắc đến quý khách hàng đã tin tưởng và sử dụng sản phẩm hóa mỹ phẩm trong thời gian qua, cũng như lời chúc hợp tác, thành công và phát triển đến các doanh nghiệp, đối tác cùng trong nghành hóa mỹ phẩm ở TP. HCM nói riêng và các tỉnh thành trên cả nước nói chung.
                            </p>
                            <p>
                                Phát Ngọc Anh chuyên sản xuất các loại hàng hóa phẩm với <strong className="text-green-600">trên 50 mặt hàng</strong>. Trên dây chuyền công nghệ hiện đại, quy mô nhà xưởng lớn, đội ngũ công nhân lành nghề, chúng tôi tự tin mang đến cho khách hàng các sản phẩm có chất lượng tốt nhất cùng giá thành phải chăng.
                            </p>
                            <p>
                                Bên cạnh đó, hóa mỹ phẩm Phát Ngọc Anh luôn là lựa chọn hàng đầu của nhiều khách hàng tin dùng. Với các sản phẩm được tin dùng như: <em className="text-blue-600">Nước rửa chén Zifat 999, Bột thông cống Zifat 999, Dầu bóng gỗ, Nước lau kính, Nước lau sàn, Nước lau gạch, Chất tẩy bồn cầu, Nước thông cống</em>... đều mang thương hiệu <strong className="text-green-600">Zifat 999</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 Thành Tựu & Chứng Nhận</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto"></div>
                    </div>
                    <div ref={achievementsAnimation.containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-3 gap-8">
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${achievementsAnimation.visibleItems[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-4xl mb-4 animate-bounce-gentle">🇻🇳</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Hàng Việt Nam Chất Lượng Cao</h3>
                            <p className="text-gray-600">Được Bộ Khoa học và Công nghệ cấp từ 2010 đến 2012</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-200 ${achievementsAnimation.visibleItems[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-4xl mb-4">💪</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Thương Hiệu Mạnh</h3>
                            <p className="text-gray-600">Chứng nhận thương hiệu mạnh và phát triển bền vững</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-400 ${achievementsAnimation.visibleItems[2] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-4xl mb-4">🌟</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Tự Hào Thương Hiệu Việt</h3>
                            <p className="text-gray-600">Vì Cộng Đồng - Đầu năm 2020</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Tầm Nhìn & Sứ Mệnh</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                    </div>
                    <div ref={visionAnimation.containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-8">
                        <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${visionAnimation.visibleItems[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-3">💼</div>
                                <h3 className="text-xl font-semibold text-gray-900">Tạo Giá Trị</h3>
                            </div>
                            <p className="text-gray-700">
                                Tạo ra giá trị thị trường cho toàn bộ nhân viên và hội đồng quản trị công ty từ chính chất lượng sản phẩm.
                            </p>
                        </div>
                        <div className={`bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-200 ${visionAnimation.visibleItems[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-3">🤝</div>
                                <h3 className="text-xl font-semibold text-gray-900">Lợi Nhuận Đối Tác</h3>
                            </div>
                            <p className="text-gray-700">
                                Tạo ra lợi nhuận thực tế cho các đối tác kinh doanh xứng đáng với thương hiệu hàng Việt Nam chất lượng cao Zifat 999.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Coverage */}
            <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🌍 Thị Trường Tiêu Thụ</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
                    </div>
                    <div ref={marketAnimation.containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-8">
                        <div className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${marketAnimation.visibleItems[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-center mb-6">
                                <div className="text-5xl font-bold text-blue-600 mb-2 counting-number">{counter64}</div>
                                <p className="text-gray-600">Tỉnh Thành Phủ Sóng</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Sau khi nghiên cứu, thăm dò thị trường và dòng sản phẩm phù hợp với nhu cầu của từng khu vực, chúng tôi cho ra đời các sản phẩm nhằm đáp ứng nhu cầu của tất cả thị trường trên cả nước.
                            </p>
                        </div>
                        <div className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-200 ${marketAnimation.visibleItems[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-center mb-6">
                                <div className="text-5xl font-bold text-green-600 mb-2 counting-number">{counter80}%</div>
                                <p className="text-gray-600">Thị Phần Cửa Hàng Điện Nước</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Với lợi thế đa dạng và phong phú, việc tiếp cận hàng hóa cho từng khu vực trên thị trường rất thuận lợi. Sản phẩm của công ty chiếm khoảng 80% thị trường cửa hàng điện nước.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Strategy */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">📈 Chiến Lược Kinh Doanh</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
                    </div>
                    <div ref={strategyAnimation.containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${strategyAnimation.visibleItems[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl mb-4">🏆</div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">Chất Lượng Là Nền Tảng</h3>
                            <p className="text-gray-700 text-sm">
                                Không ngừng cải tiến sản phẩm ngày một đa dạng và phong phú, phù hợp với thị hiếu người tiêu dùng.
                            </p>
                        </div>
                        <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-100 ${strategyAnimation.visibleItems[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl mb-4">💰</div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">Giá Cạnh Tranh</h3>
                            <p className="text-gray-700 text-sm">
                                Thực hiện cơ chế bán hàng bình ổn giá thấp hơn đối thủ 5% - 30% tùy theo dòng hàng.
                            </p>
                        </div>
                        <div className={`bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-200 ${strategyAnimation.visibleItems[2] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl mb-4">🎁</div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">Khuyến Mãi Hấp Dẫn</h3>
                            <p className="text-gray-700 text-sm">
                                Chương trình khuyến mãi tặng kèm để đẩy nhanh động lực mua hàng từ người tiêu dùng.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals 2025 */}
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Mục Tiêu Đến 2025</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>
                    <div ref={goalsAnimation.containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${goalsAnimation.visibleItems[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl font-bold text-purple-600 mb-2 counting-number">{counter2000.toLocaleString()}+</div>
                            <p className="text-gray-700 text-sm">Hệ thống siêu thị</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-100 ${goalsAnimation.visibleItems[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl font-bold text-blue-600 mb-2 counting-number">{counter20000.toLocaleString()}</div>
                            <p className="text-gray-700 text-sm">Khách hàng Horeca</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-200 ${goalsAnimation.visibleItems[2] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl font-bold text-green-600 mb-2 counting-number">{counter50000.toLocaleString()}</div>
                            <p className="text-gray-700 text-sm">Đại lý</p>
                        </div>
                        <div className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-700 delay-300 ${goalsAnimation.visibleItems[3] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-3xl font-bold text-orange-600 mb-2 counting-number">{counter5000.toLocaleString()}</div>
                            <p className="text-gray-700 text-sm">Cộng tác viên online</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div ref={mainGoalAnimation.elementRef as React.RefObject<HTMLDivElement>} className={`bg-white rounded-xl p-8 shadow-lg inline-block hover:shadow-xl hover:scale-105 transition-all duration-700 ${mainGoalAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 counting-number">
                                {counter5million} triệu
                            </div>
                            <p className="text-gray-700">sản phẩm đến tay người tiêu dùng</p>
                            <p className="text-sm text-gray-600 mt-2">Tạo hàng trăm ngàn việc làm trực tiếp và gián tiếp</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">📞 Thông Tin Liên Hệ</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                                CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="text-yellow-400 mr-3 mt-1">📍</div>
                                    <div>
                                        <p className="font-medium">Địa chỉ:</p>
                                        <p className="text-gray-300">430/33 Đường TA 28, Khu phố 2, P Thới An, Quận 12, Tp HCM</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-yellow-400 mr-3">🏢</div>
                                    <div>
                                        <p className="font-medium">MST: <span className="text-yellow-400">0313155516</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="text-yellow-400 mr-3">📞</div>
                                    <div>
                                        <p className="font-medium">Liên hệ:</p>
                                        <p className="text-gray-300">0286.271.3214 - 0945.437.079</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-yellow-400 mr-3">🌐</div>
                                    <div>
                                        <p className="font-medium">Website:</p>
                                        <a href="http://phatngocanh.com/" className="text-blue-400 hover:text-blue-300">
                                            http://phatngocanh.com/
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-yellow-400 mr-3">📧</div>
                                    <div>
                                        <p className="font-medium">Email:</p>
                                        <a href="mailto:hoaphamphatngocanh@gmail.com" className="text-blue-400 hover:text-blue-300">
                                            hoaphamphatngocanh@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

'use client';

const Testimonials = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Khách Hàng Nói Gì Về Chúng Tôi
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Chúng tôi tự hào phục vụ hàng nghìn khách hàng trên toàn quốc với sản phẩm chất lượng cao và dịch vụ tận tâm.
                    </p>
                </div>

                {/* Testimonial Collection Notice */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                        <div className="mb-6">
                            <svg className="h-16 w-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Chia Sẻ Trải Nghiệm Của Bạn
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Chúng tôi đang thu thập những phản hồi thực tế từ khách hàng đã sử dụng sản phẩm ZIFAT 999. 
                                Trải nghiệm của bạn rất quý giá và sẽ giúp ích cho những khách hàng khác.
                            </p>
                        </div>

                        {/* Customer Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                                <div className="text-gray-600">Khách hàng tin tưởng</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                                <div className="text-gray-600">Năm kinh nghiệm</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-gray-600">Sản phẩm đa dạng</div>
                            </div>
                        </div>

                        {/* Contact for Testimonials */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Bạn đã sử dụng sản phẩm ZIFAT 999?
                            </h4>
                            <p className="text-gray-600 mb-4">
                                Hãy liên hệ với chúng tôi để chia sẻ trải nghiệm và nhận ưu đãi đặc biệt cho lần mua tiếp theo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="tel:0286271321" 
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Gọi ngay: 0286.271.3214
                                </a>
                                <a 
                                    href="mailto:hoaphamphatngocanh@gmail.com" 
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Gửi email
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quality Commitment */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center mb-4">
                                <svg className="h-8 w-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-900">Cam Kết Chất Lượng</h4>
                            </div>
                            <p className="text-gray-600">
                                Tất cả sản phẩm ZIFAT 999 đều được kiểm nghiệm nghiêm ngặt và có chứng nhận chất lượng từ các cơ quan uy tín.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center mb-4">
                                <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-900">Hỗ Trợ 24/7</h4>
                            </div>
                            <p className="text-gray-600">
                                Đội ngũ chăm sóc khách hàng chuyên nghiệp luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi với thái độ nhiệt tình.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
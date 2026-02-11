// --- DATA SOURCE & TRANSLATIONS ---

let currentLang = 'vi'; // Default language

const translations = {
    'vi': {
        // Header
        'dept_name': 'CÔNG AN TỈNH PHÚ THỌ',
        'sub_dept': 'PHÒNG AN NINH ĐỐI NGOẠI (PA01)',
        'hero_tag': 'Mô hình "Sân Golf An Toàn"',
        'hero_title_1': 'GOLF AN TOÀN',
        'hero_title_2': 'ĐÚNG PHÁP LUẬT',
        'hero_desc': 'Cẩm nang pháp luật & Hỗ trợ an ninh dành cho người nước ngoài đang làm việc và du lịch tại Phú Thọ.',
        'btn_ai': 'Hỏi đáp Luật (AI)',
        'btn_report': 'Phản ánh ANTT',

        // Documents Section
        'doc_section_title': 'Kho Văn Bản Pháp Luật',
        'doc_section_desc': 'Các văn bản pháp luật liên quan đến an ninh sân Golf và quản lý người nước ngoài',
        'doc_1_title': 'Luật Phòng Không Nhân dân',
        'doc_1_desc': 'Quy định về quản lý tàu bay không người lái (Flycam/UAV) và vùng trời quốc gia.',
        'doc_2_title': 'Nghị định 282/2025/NĐ-CP',
        'doc_2_desc': 'Quy định xử phạt vi phạm hành chính trong lĩnh vực an ninh, trật tự.',
        'doc_3_title': 'Luật Xuất nhập cảnh (VBHN)',
        'doc_3_desc': 'Văn bản hợp nhất về nhập cảnh, xuất cảnh, cư trú của người nước ngoài tại Việt Nam.',
        'doc_4_title': 'Quy chế Phối hợp Quản lý NNN',
        'doc_4_desc': 'Quy định về phối hợp quản lý người nước ngoài trên địa bàn tỉnh Phú Thọ.',
        'btn_quick_view': 'Xem nhanh',
        'btn_open_file': 'Mở file',
        'doc_type_law': 'LUẬT',
        'doc_type_decree': 'NGHỊ ĐỊNH',
        'doc_type_reg': 'QUY CHẾ',

        // AI Section
        'ai_tag': 'Trợ lý ảo PA01',
        'ai_title_1': 'Hỏi đáp Pháp luật',
        'ai_title_2': 'Ngay lập tức 24/7',
        'ai_desc': 'Sử dụng công nghệ AI tiên tiến của Google để giải đáp mọi thắc mắc về Luật Xuất nhập cảnh, quy định bay Flycam và các tình huống khẩn cấp tại sân Golf.',
        'btn_chat_now': 'Trò chuyện ngay',
        'btn_guide': 'Hướng dẫn',
        'support_multi': 'Hỗ trợ đa ngôn ngữ',
        'ai_assistant_name': 'Trợ lý PA01',
        'ai_ready': 'Sẵn sàng hỗ trợ',
        'ai_welcome': 'Xin chào! Tôi có thể giúp gì cho bạn về quy định an ninh sân Golf hôm nay?',
        'q_flycam': 'Quy định bay Flycam?',
        'q_visa': 'Thủ tục khai báo tạm trú?',
        'q_visa_ext': 'Gia hạn Visa?',
        'input_placeholder': 'Nhập câu hỏi của bạn...',

        // Footer
        'footer_dept': 'CÔNG AN TỈNH PHÚ THỌ',
        'footer_sub': 'PHÒNG AN NINH ĐỐI NGOẠI',
        'footer_desc': 'Mô hình "Toàn dân bảo vệ an ninh tổ quốc" tại Sân Golf',
        'design_by': 'Thiết kế & Vận hành: Đ/c Vi Phương (Bí thư Chi đoàn PA01-PA08)',

        // Modals
        'report_title': 'Phản ánh An ninh trật tự',
        'loading_text': 'Đang kết nối hệ thống...',
        'modal_title_default': 'Tiêu đề',
        'btn_close': 'Đóng lại'
    },
    'kr': {
        // Header
        'dept_name': '푸토성 공안청',
        'sub_dept': '대외안보실 (PA01)',
        'hero_tag': '"안전한 골프장" 모델',
        'hero_title_1': '안전한 골프',
        'hero_title_2': '준법 골프',
        'hero_desc': '푸토성에서 근무하거나 여행하는 외국인을 위한 법률 가이드 및 보안 지원 포털.',
        'btn_ai': '법률 문의 (AI)',
        'btn_report': '신고하기',

        // Documents Section
        'doc_section_title': '법률 문서 보관소',
        'doc_section_desc': '골프장 보안 및 외국인 관리와 관련된 법률 문서',
        'doc_1_title': '인민방공법',
        'doc_1_desc': '무인 항공기(Flycam/UAV) 관리 및 국가 영공에 관한 규정.',
        'doc_2_title': '의정서 282/2025/NĐ-CP',
        'doc_2_desc': '보안 및 질서 분야의 행정 위반 처벌 규정.',
        'doc_3_title': '출입국 관리법 (통합)',
        'doc_3_desc': '베트남 내 외국인의 입국, 출국, 거주에 관한 통합 문서.',
        'doc_4_title': '외국인 관리 협력 규정',
        'doc_4_desc': '푸토성 내 외국인 관리 협력에 관한 규정.',
        'btn_quick_view': '요약 보기',
        'btn_open_file': '파일 열기',
        'doc_type_law': '법률',
        'doc_type_decree': '의정서',
        'doc_type_reg': '규정',

        // AI Section
        'ai_tag': 'PA01 가상 비서',
        'ai_title_1': '법률 문의',
        'ai_title_2': '24/7 즉시 답변',
        'ai_desc': 'Google의 최첨단 AI 기술을 사용하여 출입국 관리법, 드론 비행 규정 및 긴급 상황에 대한 모든 질문에 답변합니다.',
        'btn_chat_now': '지금 채팅하기',
        'btn_guide': '사용 안내',
        'support_multi': '다국어 지원',
        'ai_assistant_name': 'PA01 비서',
        'ai_ready': '지원 준비 완료',
        'ai_welcome': '안녕하세요! 오늘 골프장 보안 규정에 대해 무엇을 도와드릴까요?',
        'q_flycam': '드론 비행 규정?',
        'q_visa': '임시 거주 신고 절차?',
        'q_visa_ext': '비자 연장?',
        'input_placeholder': '질문을 입력하세요...',

        // Footer
        'footer_dept': '푸토성 공안청',
        'footer_sub': '대외안보실',
        'footer_desc': '골프장의 "조국 안보 수호" 모델',
        'design_by': '디자인 & 운영: Vi Phuong 동지 (PA01-PA08 청년단 서기)',

        // Modals
        'report_title': '보안 및 질서 신고',
        'loading_text': '시스템 연결 중...',
        'modal_title_default': '제목',
        'btn_close': '닫기'
    },
    'en': {
        // Fallback for English (Using Vietnamese for simplify now, or Translate later)
        'dept_name': 'PHU THO PROVINCIAL POLICE',
        'sub_dept': 'IMMIGRATION SECURITY DIVISION (PA01)',
        'hero_tag': '"Safe Golf Course" Model',
        'hero_title_1': 'SAFE GOLF',
        'hero_title_2': 'LAWFUL PLAY',
        'hero_desc': 'Legal guide & Security support for foreigners working and traveling in Phu Tho.',
        'btn_ai': 'Legal Q&A (AI)',
        'btn_report': 'Report Issue',

        // Documents Section
        'doc_section_title': 'Legal Documents',
        'doc_section_desc': 'Legal documents related to Golf course security and Foreigner management',
        'doc_1_title': 'People\'s Air Defense Law',
        'doc_1_desc': 'Regulations on management of unmanned aircraft (Flycam/UAV) and national airspace.',
        'doc_2_title': 'Decree 282/2025/NĐ-CP',
        'doc_2_desc': 'Regulations on administrative penalties in the field of security and order.',
        'doc_3_title': 'Immigration Law (Consolidated)',
        'doc_3_desc': 'Consolidated document on entry, exit, and residence of foreigners in Vietnam.',
        'doc_4_title': 'Coordination Regulations',
        'doc_4_desc': 'Regulations on coordination in managing foreigners in Phu Tho province.',
        'btn_quick_view': 'Quick View',
        'btn_open_file': 'Open File',
        'doc_type_law': 'LAW',
        'doc_type_decree': 'DECREE',
        'doc_type_reg': 'REGULATION',

        // AI Section
        'ai_tag': 'PA01 Virtual Assistant',
        'ai_title_1': 'Legal Q&A',
        'ai_title_2': 'Instant 24/7',
        'ai_desc': 'Using advanced Google AI technology to answer all questions about Immigration Law, Flycam regulations, and emergencies.',
        'btn_chat_now': 'Chat Now',
        'btn_guide': 'Guide',
        'support_multi': 'Multi-language Support',
        'ai_assistant_name': 'PA01 Assistant',
        'ai_ready': 'Ready to help',
        'ai_welcome': 'Hello! How can I help you with Golf security regulations today?',
        'q_flycam': 'Flycam regulations?',
        'q_visa': 'Residence declaration?',
        'q_visa_ext': 'Visa extension?',
        'input_placeholder': 'Type your question...',

        // Footer
        'footer_dept': 'PHU THO PROVINCIAL POLICE',
        'footer_sub': 'IMMIGRATION SECURITY DIVISION',
        'footer_desc': '"All people protecting national security" Model at Golf Course',
        'design_by': 'Design & Operation: Comrade Vi Phuong (Secretary of PA01-PA08 Youth Union)',

        // Modals
        'report_title': 'Security Report',
        'loading_text': 'Connecting to system...',
        'modal_title_default': 'Title',
        'btn_close': 'Close'
    }
};

const lawData = {
    'flycam': {
        'vi': {
            title: 'Quy định Bay Flycam (UAV)',
            headerColor: 'bg-blue-700',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-800 mb-1">Khu vực Cấm bay (No-fly Zone)</h4>
                        <p class="text-sm">Nghiêm cấm bay Flycam/UAV tại các khu vực quân sự, khu vực trụ sở cơ quan công an, Tỉnh ủy, UBND tỉnh và các mục tiêu quan trọng về an ninh quốc gia (theo Quyết định 3518/QĐ-UBND).</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Yêu cầu bắt buộc:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li>Phải có giấy phép bay do <strong>Cục Tác chiến - Bộ Tổng tham mưu</strong> cấp.</li>
                            <li>Không được bay vào khu vực có biển báo cấm.</li>
                            <li>Không được quay phim, chụp ảnh từ trên cao các khu vực cấm.</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 class="font-bold text-cand-red mb-1 flex items-center gap-2"><i data-lucide="alert-triangle" class="w-4 h-4"></i>Chế tài Xử phạt</h4>
                        <p class="text-sm">Hành vi bay không phép có thể bị phạt tiền từ <strong>15.000.000đ - 40.000.000đ</strong> và bị <strong>tịch thu phương tiện</strong> (Flycam).</p>
                    </div>
                </div>`
        },
        'kr': {
            title: '드론(Flycam/UAV) 비행 규정',
            headerColor: 'bg-blue-700',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-800 mb-1">비행 금지 구역 (No-fly Zone)</h4>
                        <p class="text-sm">군사 지역, 공안 기관 본부, 성 당위원회, 인민위원회 및 국가 안보 중요 시설에서 드론 비행을 엄격히 금지합니다 (결정문 3518/QĐ-UBND에 따름).</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">필수 요구 사항:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li><strong>총참모부 작전국</strong>에서 발급한 비행 허가증이 있어야 합니다.</li>
                            <li>금지 표지판이 있는 구역에서는 비행할 수 없습니다.</li>
                            <li>금지 구역 상공에서 촬영할 수 없습니다.</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 class="font-bold text-cand-red mb-1 flex items-center gap-2"><i data-lucide="alert-triangle" class="w-4 h-4"></i>처벌 규정</h4>
                        <p class="text-sm">무허가 비행 시 <strong>1,500만 ~ 4,000만 동</strong>의 벌금이 부과되며 <strong>비행 장비(드론)가 몰수</strong>될 수 있습니다.</p>
                    </div>
                </div>`
        },
        'en': {
            title: 'Flycam Regulations (UAV)',
            headerColor: 'bg-blue-700',
            content: `
                 <div class="space-y-4 text-gray-800">
                    <div class="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-800 mb-1">No-fly Zone</h4>
                        <p class="text-sm">Strictly prohibited to fly Flycam/UAV in military areas, police headquarters, Provincial Party Committee, Provincial People's Committee and important national security targets (according to Decision 3518/QD-UBND).</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Mandatory requirements:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li>Must have a flight license issued by the <strong>Operations Bureau - General Staff</strong>.</li>
                            <li>Do not fly into areas with prohibition signs.</li>
                            <li>Do not film or take photos from above in prohibited areas.</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 class="font-bold text-cand-red mb-1 flex items-center gap-2"><i data-lucide="alert-triangle" class="w-4 h-4"></i>Penalties</h4>
                        <p class="text-sm">Unauthorized flying can be fined from <strong>15,000,000 VND - 40,000,000 VND</strong> and <strong>confiscation of means</strong> (Flycam).</p>
                    </div>
                </div>
            `
        }
    },
    'visa': {
        'vi': {
            title: 'Visa & Khai báo tạm trú',
            headerColor: 'bg-green-700',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
                        <h4 class="font-bold text-green-800 mb-1">Trách nhiệm Khai báo</h4>
                        <p class="text-sm">Người nước ngoài nghỉ tại cơ sở lưu trú (Resort/Khách sạn sân Golf) phải xuất trình Hộ chiếu/Giấy tờ có giá trị cư trú để Lễ tân thực hiện khai báo tạm trú qua trang web của Công an tỉnh.</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Quy định từ Luật XNC (VBHN 30/2023):</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li>Người nước ngoài phải mang theo Hộ chiếu khi đi lại.</li>
                            <li>Không được sử dụng chứng nhận tạm trú sai mục đích.</li>
                            <li>Phải gia hạn thị thực (Visa) trước khi hết hạn.</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 class="font-bold text-cand-red mb-1 flex items-center gap-2"><i data-lucide="alert-octagon" class="w-4 h-4"></i>Xử phạt (NĐ 282/2025/NĐ-CP)</h4>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• Không xuất trình Hộ chiếu khi kiểm tra: Phạt <strong>500K - 2 Triệu</strong>.</li>
                            <li>• Quá hạn tạm trú dưới 16 ngày: Phạt <strong>500K - 2 Triệu</strong>.</li>
                            <li>• Quá hạn 16-30 ngày: Phạt <strong>5 - 10 Triệu</strong>.</li>
                            <li>• Có thể bị áp dụng hình thức <strong>TRỤC XUẤT</strong> nếu vi phạm nghiêm trọng.</li>
                        </ul>
                    </div>
                </div>`
        },
        'kr': {
            title: '비자 및 임시 거주 신고',
            headerColor: 'bg-green-700',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
                        <h4 class="font-bold text-green-800 mb-1">신고 의무</h4>
                        <p class="text-sm">숙박 시설(리조트/골프 호텔)에 투숙하는 외국인은 공안청 웹사이트를 통해 임시 거주 신고를 할 수 있도록 프런트 데스크에 여권/지 체류 서류를 제시해야 합니다.</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">출입국 관리법 규정 (부록 30/2023):</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li>외국인은 이동 시 여권을 소지해야 합니다.</li>
                            <li>임시 거주 증명서를 목적에 맞지 않게 사용해서는 안 됩니다.</li>
                            <li>만료 전에 비자를 연장해야 합니다.</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 class="font-bold text-cand-red mb-1 flex items-center gap-2"><i data-lucide="alert-octagon" class="w-4 h-4"></i>처벌 (의정서 282/2025/NĐ-CP)</h4>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 검사 시 여권 미제시: 벌금 <strong>50만 ~ 200만 동</strong>.</li>
                            <li>• 16일 미만 체류 기간 초과: 벌금 <strong>50만 ~ 200만 동</strong>.</li>
                            <li>• 16일-30일 체류 기간 초과: 벌금 <strong>500만 ~ 1,000만 동</strong>.</li>
                            <li>• 심각한 위반 시 <strong>강제 추방</strong>될 수 있습니다.</li>
                        </ul>
                    </div>
                </div>`
        },
        'en': {
            title: 'Visa & Residence Declaration',
            headerColor: 'bg-green-700',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
                        <h4 class="font-bold text-green-800 mb-1">Declaration Responsibility</h4>
                        <p class="text-sm">Foreigners staying at accommodation establishments (Resorts/Golf Hotels) must present Passports/Valid residence documents for the Receptionist to declare temporary residence via the Provincial Police website.</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Regulations from Immigration Law:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li>Foreigners must carry Passports when traveling.</li>
                            <li>Do not use temporary residence certification for improper purposes.</li>
                            <li>Must extend visa before expiration.</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 class="font-bold text-cand-red mb-1 flex items-center gap-2"><i data-lucide="alert-octagon" class="w-4 h-4"></i>Penalties</h4>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• Failure to present Passport upon inspection: Fine <strong>500K - 2 Million</strong>.</li>
                            <li>• Overdue temporary residence under 16 days: Fine <strong>500K - 2 Million</strong>.</li>
                            <li>• Overdue 16-30 days: Fine <strong>5 - 10 Million</strong>.</li>
                            <li>• May be subject to <strong>DEPORTATION</strong> if the violation is serious.</li>
                        </ul>
                    </div>
                </div>`
        }
    },
    'law': {
        'vi': {
            title: 'Cảnh báo: Đánh bạc & Cá độ',
            headerColor: 'bg-cand-red',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-red-100 p-4 rounded-xl border-l-4 border-red-600">
                        <h4 class="font-bold text-red-800 mb-1 text-lg">TUYỆT ĐỐI CẤM ĐÁNH BẠC</h4>
                        <p class="text-sm">Pháp luật Việt Nam nghiêm cấm mọi hành vi đánh bạc, cá độ thắng thua bằng tiền hoặc hiện vật (bao gồm cả hình thức <strong>Cá độ Golf / Skins Game</strong> giá trị lớn).</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Hình thức xử lý:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li><strong>Xử lý Hình sự:</strong> Có thể bị truy cứu trách nhiệm hình sự (phạt tù) nếu số tiền đánh bạc từ 5.000.000đ trở lên.</li>
                            <li><strong>Trục xuất:</strong> Người nước ngoài vi phạm pháp luật về tệ nạn xã hội (đánh bạc) sẽ bị áp dụng hình thức xử phạt <strong>Trục xuất</strong> khỏi Việt Nam (theo Nghị định 282/2025/NĐ-CP).</li>
                        </ul>
                    </div>
                    <div class="bg-gray-100 p-4 rounded-xl text-sm italic">
                        "Vui lòng giữ gìn hình ảnh môn thể thao Golf văn minh, lịch sự và tuân thủ pháp luật nước sở tại."
                    </div>
                </div>`
        },
        'kr': {
            title: '경고: 도박 및 내기 골프',
            headerColor: 'bg-cand-red',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-red-100 p-4 rounded-xl border-l-4 border-red-600">
                        <h4 class="font-bold text-red-800 mb-1 text-lg">도박 절대 금지</h4>
                        <p class="text-sm">베트남 법률은 현금이나 현물로 승패를 가르는 모든 형태의 도박 및 내기를 엄격히 금지합니다 (고액의 <strong>내기 골프 / Skins Game</strong> 포함).</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">처벌 형태:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li><strong>형사 처벌:</strong> 도박 금액이 5,000,000동 이상일 경우 형사 책임(징역)을 질 수 있습니다.</li>
                            <li><strong>추방:</strong> 사회적 악습(도박)에 관한 법률을 위반한 외국인은 베트남에서 <strong>강제 추방</strong>될 수 있습니다 (의정서 282/2025/NĐ-CP에 따름).</li>
                        </ul>
                    </div>
                    <div class="bg-gray-100 p-4 rounded-xl text-sm italic">
                        "문명화되고 예의 바른 골프 문화를 유지하고 주재국의 법률을 준수해 주십시오."
                    </div>
                </div>`
        },
        'en': {
            title: 'Warning: Gambling & Betting',
            headerColor: 'bg-cand-red',
            content: `
                <div class="space-y-4 text-gray-800">
                    <div class="bg-red-100 p-4 rounded-xl border-l-4 border-red-600">
                        <h4 class="font-bold text-red-800 mb-1 text-lg">GAMBLING STRICTLY PROHIBITED</h4>
                        <p class="text-sm">Vietnamese law strictly prohibits all acts of gambling, betting winning or losing in cash or in kind (including large value <strong>Golf Betting / Skins Game</strong>).</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Penalties:</h4>
                        <ul class="list-disc pl-5 space-y-2 text-sm">
                            <li><strong>Criminal Prosecution:</strong> Can be criminally prosecuted (imprisonment) if the gambling amount is 5,000,000 VND or more.</li>
                            <li><strong>Deportation:</strong> Foreigners violating laws on social evils (gambling) will be subject to <strong>Deportation</strong> from Vietnam (according to Decree 282/2025/ND-CP).</li>
                        </ul>
                    </div>
                    <div class="bg-gray-100 p-4 rounded-xl text-sm italic">
                        "Please maintain a civilized and polite image of Golf and comply with the laws of the host country."
                    </div>
                </div>`
        }
    }
};

// --- VISUAL LOGIC ---

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    setupEventListeners();
    // Initialize default language
    switchLang('vi');
});

// Setup global event listeners
function setupEventListeners() {
    // Report Modal
    const reportBtn = document.querySelector('button[onclick="openReportModal()"]');
    if (reportBtn) {
        reportBtn.onclick = null; // Clean up inline handler
        reportBtn.addEventListener('click', openReportModal);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Make functions globally available
    window.closeReportModal = closeReportModal;
    window.closeInfoModal = closeInfoModal;
    window.showLaw = showLaw;
    window.switchLang = switchLang;

    // Chat logic
    window.fillChat = fillChat;
    window.handleChatSend = handleChatSend;
    window.handleChatEnter = handleChatEnter;
}

// --- REPORT MODAL ---
function openReportModal() {
    const modal = document.getElementById('reportModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeReportModal() {
    const modal = document.getElementById('reportModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// --- INFO MODAL (LAW DETAILS) ---
function showLaw(type) {
    const dataObj = lawData[type];
    if (!dataObj) return;

    // Get content based on current language, fallback to VI if missing
    const content = dataObj[currentLang] || dataObj['vi'];

    // Set Content
    const titleEl = document.getElementById('infoModalTitle');
    const bodyEl = document.getElementById('infoModalBody');
    const headerEl = document.getElementById('infoModalHeader');

    if (titleEl) titleEl.innerText = content.title;
    if (bodyEl) bodyEl.innerHTML = content.content;

    // Set Header Color
    if (headerEl) {
        headerEl.className = `text-white p-6 flex justify-between items-center shrink-0 ${content.headerColor}`;
    }

    // Re-render icons inside new content
    lucide.createIcons();

    // Show Modal
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// --- LANGUAGE SWITCHER ---
function switchLang(lang) {
    currentLang = lang;
    const t = translations[lang] || translations['vi'];

    // 1. Update Active State of Buttons (Visual)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('ring-2', 'ring-white', 'ring-opacity-50'); // remove selection ring
    });
    const activeBtn = document.getElementById('btn-' + lang);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.classList.add('ring-2', 'ring-white', 'ring-opacity-50');
    }

    // 2. Update Text Content using data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                // If the element has an icon (e.g. <i>), we want to preserve it.
                // We will look for a child span with a distinct class (e.g. .text-content) if we were smart,
                // but since we are refactoring existing HTML, we will try to be safe.
                // Use a regex to replace only text if children exist? No, too risky.
                // BEST APPROACH: Assume buttons have text wrapped in a span OR just overwrite innerHTML if simple.

                // If the element creates icons via lucide (<i>), these are usually re-created by lucide.createIcons().
                // So resetting innerHTML is mostly fine AS LONG AS we keep the <i> tag in the translation HTML
                // OR we rely on re-running lucide.createIcons().

                // However, our translations (t[key]) currently ONLY contain text for buttons (e.g. "Chat Now").
                // They do NOT contain the <i data-lucide...> tag.
                // So if we do el.innerHTML = t[key], we lose the icon.

                // Fix: Check if element has an icon.
                const icon = el.querySelector('i');
                if (icon) {
                    // Save icon HTML
                    const iconHTML = icon.outerHTML;
                    // Set text
                    el.innerHTML = iconHTML + ' ' + t[key];
                } else {
                    el.innerHTML = t[key];
                }
            }
        }
    });

    // 3. Re-render icons (crucial because we might have re-injected raw <i> tags)
    lucide.createIcons();

    console.log('Switched to: ' + lang);
}

// --- CHAT LOGIC (UI Only) ---
function fillChat(text) {
    document.getElementById('fakeChatInput').value = text;
    document.getElementById('fakeChatInput').focus();
}

function handleChatEnter(e) {
    if (e.key === 'Enter') {
        handleChatSend();
    }
}

function handleChatSend() {
    const input = document.getElementById('fakeChatInput');
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    const history = document.getElementById('chatHistory');
    const userMsg = document.createElement('div');
    userMsg.className = 'flex justify-end animate-fade-in-up';
    userMsg.innerHTML = `
        <div class="bg-golf-green text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[90%]">
            <p class="text-sm">${text}</p>
        </div>
    `;
    history.appendChild(userMsg);

    input.value = '';
    history.scrollTop = history.scrollHeight;

    // Simulate AI delay and response
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'flex justify-start animate-fade-in-up';

        const t = translations[currentLang] || translations['vi'];
        const reply = currentLang === 'kr'
            ? "이것은 데모 버전입니다. 실제 답변을 받으려면 '지금 채팅하기' 버튼을 누르세요."
            : (currentLang === 'en' ? "This is a demo. Click 'Chat Now' for real AI response." : "Đây là bản mô phỏng giao diện. Vui lòng bấm 'Trò chuyện ngay' để chat với AI thật.");

        aiMsg.innerHTML = `
            <div class="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%]">
                <p class="text-xs text-gray-400 font-bold mb-1">${t.ai_assistant_name}</p>
                <p class="text-sm leading-relaxed">${reply}</p>
            </div>
        `;
        history.appendChild(aiMsg);
        history.scrollTop = history.scrollHeight;
    }, 1000);
}

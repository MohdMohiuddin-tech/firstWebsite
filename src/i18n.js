import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      services: "Services",
      careers: "Careers",
      contact: "Contact",

      // Services
      auditAssurance: "Audit & Assurance",
      taxation: "Taxation",
      businessSupport: "Business Support",
      managementConsultancy: "Management Consultancy",
      internationalTransactions: "International Transactions",
      newBusinessSupport: "New Business Support",

      // Hero section
      heroTitle: "Your business, Our advice It all sums up",
      whoWeAre: "Who we are",
      whatWeDo: "What we do",
      whoWeServe: "Who we serve",

      // Common
      loading: "Loading...",
      error: "Error",
      success: "Success"
    }
  },
  vi: {
    translation: {
      // Navigation
      home: "Trang chủ",
      about: "Giới thiệu",
      services: "Dịch vụ",
      careers: "Tuyển dụng",
      contact: "Liên hệ",

      // Services
      auditAssurance: "Kiểm toán & Bảo đảm",
      taxation: "Thuế",
      businessSupport: "Hỗ trợ Kinh doanh",
      managementConsultancy: "Tư vấn Quản lý",
      internationalTransactions: "Giao dịch Quốc tế",
      newBusinessSupport: "Hỗ trợ Doanh nghiệp Mới",

      // Hero section
      heroTitle: "Doanh nghiệp của bạn, Lời khuyên của chúng tôi Tất cả đều tổng hợp",
      whoWeAre: "Chúng tôi là ai",
      whatWeDo: "Chúng tôi làm gì",
      whoWeServe: "Chúng tôi phục vụ ai",

      // Common
      loading: "Đang tải...",
      error: "Lỗi",
      success: "Thành công"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

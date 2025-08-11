import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{html,ts}", // أو jsx/tsx حسب مشروعك
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00587A',          // الأزرق السكندري الرئيسي (للـ navbar وغيره)
        academicDark: '#1B2653',     // أزرق داكن أكاديمي (لـ hero أو العناوين)
        accentGold: '#F4B400',       // ذهبي - للتأكيد والعناصر البارزة
        stoneGray: '#4E4E50',        // رمادي حجري - نصوص ثانوية
        lightGray: '#F2F2F2',        // رمادي فاتح - خلفيات
        textDark: '#222222',         // نص غامق
        textGray: '#555555',         // نص ثانوي
        hoverLink: '#F4B400',        // لون التأثير على الروابط
        border: '#E0E0E0',           // لون الحدود
        white: '#FFFFFF'             // أبيض صريح
      }


    }
  },
  plugins: [],
};
export default config;

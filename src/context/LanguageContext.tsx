"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ID" | "EN";

export const translations = {
  ID: {
    // Navbar
    nav_layanan: "Layanan",
    nav_solusi: "Solusi",
    nav_tentang: "Tentang Kami",
    nav_proses: "Proses",
    nav_kontak: "KONTAK",
    
    // Hero
    hero_title: "Build your website, dengan jauh lebih sedikit pekerjaan.",
    hero_desc: "Studio Nova mendesain, membangun, dan meluncurkan sistem web berkinerja tinggi, UI kustom, dan alat agen otomatis sehingga Anda dapat fokus mengembangkan bisnis Anda.",
    hero_cta: "Mulai Studio Nova gratis",
    
    // Services
    services_title: "Layanan Kami",
    services_desc: "Dari desain hingga pengembangan, kami menyediakan produk digital yang bersih, cepat, dan disesuaikan untuk bisnis Anda.",
    service_design_title: "Desain Website Kustom",
    service_design_desc: "Desain unik buatan tangan yang mencerminkan identitas merek Anda dan disukai audiens Anda.",
    service_dev_title: "Pengembangan Website",
    service_dev_desc: "Kode modern dan bersih yang dibangun dengan teknologi terbaru agar web cepat, andal, dan skalabel.",
    service_landing_title: "Landing Page",
    service_landing_desc: "Landing page konversi tinggi yang dirancang untuk menangkap prospek dan mengubah pengunjung menjadi pelanggan.",
    service_profile_title: "Profil Perusahaan",
    service_profile_desc: "Website profesional yang membangun kredibilitas dan mengomunikasikan dengan jelas apa yang bisnis Anda lakukan.",
    service_ecommerce_title: "Toko E-commerce",
    service_ecommerce_desc: "Toko online yang mudah dikelola, aman, dan dibangun untuk memberikan pengalaman berbelanja yang lancar.",
    service_redesign_title: "Redesain Website",
    service_redesign_desc: "Segarkan website Anda yang sudah ada dengan tampilan modern, performa lebih baik, dan UX yang ditingkatkan.",
    service_learn_more: "Pelajari selengkapnya",

    // Why Choose Us
    why_title: "Mengapa Memilih Studio Nova",
    why_desc: "Kami menggabungkan desain bespoke dengan kode kuat untuk menghadirkan sistem web yang benar-benar memajukan merek Anda.",
    why_card1_title: "100% Desain Kustom",
    why_card1_desc: "Setiap piksel dirancang khusus untuk mencerminkan identitas merek Anda, menghindari template standar agar Anda tampil unik.",
    why_card2_title: "Pengembang Berkualitas Tinggi",
    why_card2_desc: "Dibangun dengan Next.js dan TypeScript, mengadopsi standar internasional untuk kecepatan web yang kilat.",
    why_card3_title: "Inovasi Tanpa Batas",
    why_card3_desc: "Menyediakan web app kustom, integrasi sistem, dan otomatisasi yang berskala lancar seiring pertumbuhan bisnis Anda.",

    // Process
    process_title: "Kami memahami nilai waktu Anda. Itulah mengapa kami fokus membuat segala sesuatunya sederhana dan efisien. Izinkan kami memperkenalkan proses kami.",
    process_caption: "Geser secara horizontal untuk melihat proses kami",
    process_step1_title: "Discovery & Riset",
    process_step1_desc: "Kami mempelajari tujuan bisnis, audiens, dan celah Anda saat ini untuk menentukan arah digital yang tepat.",
    process_step2_title: "UX/UI Prototyping",
    process_step2_desc: "Kami mendesain wireframe interaktif berkualitas tinggi yang mengutamakan pengalaman pengguna dan estetika modern.",
    process_step3_title: "Rekayasa & Coding",
    process_step3_desc: "Kami membangun web app cepat dan aman dengan Next.js, Tailwind, dan integrasi backend yang andal.",
    process_step4_title: "Uji Kualitas & Audit",
    process_step4_desc: "Kami menguji kecepatan halaman, tata letak responsif, link, dan lapisan keamanan untuk jaminan bebas kendala.",
    process_step5_title: "Rilis Serverless",
    process_step5_desc: "Kami meluncurkan proyek Anda ke infrastruktur cloud serverless dan memantau skalabilitas tanpa hambatan.",

    // About Team Page
    about_title_meet: "Perkenalkan tim",
    about_title_creators: "kreator",
    about_title_designers: "desainer",
    about_title_and: "dan",
    about_title_solvers: "pemecah masalah kelas dunia kami",
    about_desc: "Untuk membangun website berkinerja tinggi yang layak didapatkan oleh klien kami, dibutuhkan kelompok pengembang digital yang berdedikasi. Kenali tim yang mendesain, memprogram, dan meluncurkan solusi web di Studio Nova.",
    role_ceo: "Pendiri & Desainer UI/UX Senior",
    role_eng: "Pendiri & Pimpinan Pengembang Web",
    role_coo: "Desainer UI/UX Senior",
    role_ux: "Pengembang Frontend",
    role_dev: "Pengembang Fullstack",
    role_pm: "Manajer Proyek Web",

    // Contact Page
    contact_title: "Lebih dari Teknologi, Kami Adalah Solusi",
    contact_subtitle: "Siap tingkatkan bisnis Anda? Studio Nova, partner terbaik Anda.",
    contact_desc: "Hubungi kami untuk solusi terbaik!",
    contact_brands: "200+ Merek di Seluruh Dunia",
    contact_label_name: "Nama *",
    contact_placeholder_name: "Masukkan nama Anda",
    contact_label_email: "Email *",
    contact_placeholder_email: "Masukkan email Anda",
    contact_label_phone: "Nomor Telepon *",
    contact_placeholder_phone: "Masukkan nomor telepon Anda",
    contact_label_company: "Nama Perusahaan *",
    contact_placeholder_company: "Masukkan nama perusahaan Anda",
    contact_label_message: "Pesan",
    contact_placeholder_message: "Masukkan pesan Anda",
    contact_captcha: "Dilindungi oleh reCAPTCHA",
    contact_privacy: "PRIVASI",
    contact_terms: "KETENTUAN",
    contact_btn_send: "KIRIM",
    contact_success_title: "Pesan Terkirim!",
    contact_success_desc: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",

    // Footer
    footer_lang: "Bahasa Indonesia (ID)",
    footer_desc: "Didesain & dikembangkan dengan presisi.",
  },
  EN: {
    // Navbar
    nav_layanan: "Services",
    nav_solusi: "Solutions",
    nav_tentang: "About Us",
    nav_proses: "Process",
    nav_kontak: "CONTACT",

    // Hero
    hero_title: "Build your website, with a lot less of work.",
    hero_desc: "Studio Nova designs, builds, and deploys high-performance web systems, custom UI designs, and automated agent tools so you can focus on growing your business.",
    hero_cta: "Start Studio Nova free",

    // Services
    services_title: "Services We Offer",
    services_desc: "From design to development, we provide clean, fast digital products tailored for your business.",
    service_design_title: "Custom Website Design",
    service_design_desc: "Unique, tailor-made designs that reflect your brand identity and resonate with your target audience.",
    service_dev_title: "Website Development",
    service_dev_desc: "Clean, modern code built with the latest technologies for fast, reliable, and scalable websites.",
    service_landing_title: "Landing Pages",
    service_landing_desc: "High-converting landing pages designed to capture leads and turn visitors into customers.",
    service_profile_title: "Company Profile",
    service_profile_desc: "Professional websites that establish credibility and clearly communicate what your business does.",
    service_ecommerce_title: "E-commerce Stores",
    service_ecommerce_desc: "Online stores that are easy to manage, secure, and built to deliver a smooth shopping experience.",
    service_redesign_title: "Website Redesign",
    service_redesign_desc: "Refresh your existing website with a modern look, improved performance, and better user experience.",
    service_learn_more: "Learn more",

    // Why Choose Us
    why_title: "Why Choose Studio Nova",
    why_desc: "We combine bespoke design with robust code to deliver web systems that truly drive your brand forward.",
    why_card1_title: "100% Custom Design",
    why_card1_desc: "Every pixel is crafted to reflect your unique brand identity, avoiding standard templates to ensure you stand out.",
    why_card2_title: "High Quality Developer",
    why_card2_desc: "Built with Next.js and TypeScript, adopting international quality standards to deliver lightning-fast web speed.",
    why_card3_title: "Innovation and Beyond",
    why_card3_desc: "Delivering fully custom web apps, integrations, and automation tools that scale seamlessly as your business grows.",

    // Process
    process_title: "We understand the value of your time. That's why we focus on making things simple and efficient. Allow us to introduce you to our process.",
    process_caption: "Scroll/drag horizontally and we'll show you the process",
    process_step1_title: "Discovery & Research",
    process_step1_desc: "We study your business goals, target audience, and current gaps to define a winning digital roadmap.",
    process_step2_title: "UX/UI Prototyping",
    process_step2_desc: "We design high-fidelity, interactive wireframes that prioritize seamless user experiences and modern aesthetics.",
    process_step3_title: "Engineering & Dev",
    process_step3_desc: "We engineer fast, secure, and responsive web applications using Next.js, Tailwind, and robust backend integrations.",
    process_step4_title: "Quality Testing & Audits",
    process_step4_desc: "We rigorously test page speed, responsive layouts, links, and security layers to ensure a flawless user journey.",
    process_step5_title: "Serverless Deploy",
    process_step5_desc: "We deploy your project to serverless cloud infrastructure and configure monitoring for continuous scale.",

    // About Team Page
    about_title_meet: "Meet our team of",
    about_title_creators: "creators",
    about_title_designers: "designers",
    about_title_and: "and",
    about_title_solvers: "world-class problem solvers",
    about_desc: "To build the high-performance websites our clients deserve, it takes an eclectic group of digital builders. Get to know the team designing, engineering, and launching the web solutions at Studio Nova.",
    role_ceo: "Founder & Senior UI/UX Designer",
    role_eng: "Founder & Lead Web Developer",
    role_coo: "Senior UI/UX Designer",
    role_ux: "Frontend Developer",
    role_dev: "Fullstack Developer",
    role_pm: "Web Project Manager",

    // Contact Page
    contact_title: "More than Technology, We Are the Solution",
    contact_subtitle: "Ready to scale your business? Studio Nova is your best partner.",
    contact_desc: "Contact us for the best solutions!",
    contact_brands: "200+ Brands Worldwide",
    contact_label_name: "Name *",
    contact_placeholder_name: "Enter your name",
    contact_label_email: "Email *",
    contact_placeholder_email: "Enter your email",
    contact_label_phone: "Phone Number *",
    contact_placeholder_phone: "Enter your phone number",
    contact_label_company: "Company Name *",
    contact_placeholder_company: "Enter your company name",
    contact_label_message: "Message",
    contact_placeholder_message: "Enter your message",
    contact_captcha: "Protected by reCAPTCHA",
    contact_privacy: "PRIVACY",
    contact_terms: "TERMS",
    contact_btn_send: "SEND",
    contact_success_title: "Message Sent!",
    contact_success_desc: "Thank you for reaching out. We will get back to you shortly.",

    // Footer
    footer_lang: "English (US)",
    footer_desc: "Designed & developed with precision.",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.EN) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("studio_nova_lang") as Language;
    if (saved === "ID" || saved === "EN") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("studio_nova_lang", lang);
  };

  const t = (key: keyof typeof translations.EN) => {
    return translations[language][key] || translations.EN[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

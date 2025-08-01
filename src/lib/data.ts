import { FacebookIcon, Youtube, InstagramIcon } from "lucide-react";
export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export const refSourceOptions = [
  { label: "Facebook", value: "facebook" },
  { label: "Instagram", value: "instagram" },
  { label: "Client Referral", value: "client_referral" },
  { label: "Google Search", value: "google_search" },
  { label: "WhatsApp", value: "whatsapp" },
];

export const testGoalOptions = [
  { label: "I want to study abroad", value: "study_abroad" },
  { label: "I want to get a job and migrate", value: "job_migration" },
  { label: "I need to improve my English skills", value: "improve_english" },
  { label: "I want to get a scholarship", value: "scholarship" },
  { label: "I want to get a better job", value: "better_job" },
  { label: "Other", value: "other" },
];

export const examTypeOptions = [
  { label: "IELTS General", value: "ielts_general" },
  { label: "IELTS Academic", value: "ielts_academic" },
  { label: "IELTS UKVI General", value: "ielts_ukvi_general" },
  { label: "IELTS UKVI Academic", value: "ielts_ukvi_academic" },
  { label: "IGCSE", value: "igcse" },
  { label: "TOEFL", value: "toefl" },
  { label: "GCSE", value: "gcse" },
  { label: "SAT", value: "sat" },
  { label: "CELPIP", value: "celpip" },
  { label: "SELT", value: "selt" },
  { label: "Other", value: "other" },
];

export const footerLinks = [
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: FacebookIcon,
    classes: "bg-[#0866FF]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com",
    icon: Youtube,
    classes: "bg-[#FF0000]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramIcon,
    classes: "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737]",
  },
];

import {
  FacebookIcon,
  Youtube,
  InstagramIcon,
  Smile,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";
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
    title: "FAQ",
    href: "/faq",
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

export const ieltsTypes = [
  {
    title: "IELTS General Training",
    description:
      "The IELTS General Training test is for those migrating to English-speaking countries such as the UK, Canada, Australia, or New Zealand for work or permanent residency. It assesses everyday English used in practical and workplace settings.",
    cost: "$180–$250 (₦150,000–₦250,000)",
  },
  {
    title: "IELTS Academic",
    description:
      "The IELTS Academic test is intended for those applying to higher education institutions or seeking professional registration in an English-speaking environment. It tests your readiness for academic life through formal reading, writing, listening, and speaking tasks.",
    cost: "$180–$250 (₦150,000–₦250,000)",
  },
  {
    title: "IELTS UKVI General Training",
    description:
      "The IELTS UKVI General Training is the version approved by the UK Home Office for visa and immigration purposes. It is required for those relocating to the UK for work, training, or non-degree level education.",
    cost: "$200–$270 (₦160,000–₦270,000)",
  },
  {
    title: "IELTS UKVI Academic",
    description:
      "The IELTS UKVI Academic test is also UKVI-approved and required for international students applying to UK universities or professionals registering with UK bodies under immigration regulations.",
    cost: "$200–$270 (₦160,000–₦270,000)",
  },
];

export const stats = [
  {
    id: 1,
    icon: Smile,
    value: 95,
    suffix: "%",
    label: "Student satisfaction rate",
    duration: 2,
  },
  {
    id: 2,
    icon: GraduationCap,
    value: 10000,
    suffix: "+",
    label: "Students trained",
    duration: 2,
  },
  {
    id: 3,
    icon: Briefcase,
    value: 87,
    suffix: "%",
    label: "Job placement rate",
    duration: 2,
  },
  {
    id: 4,
    icon: Star,
    value: 4.8,
    suffix: "/5",
    label: "Average course rating",
    duration: 2,
    decimals: 1,
  },
];

export const testimonials = [
  {
    name: "Amina T.",
    quote:
      "I passed my IELTS with an overall band 8! The lessons were so practical and easy to follow.",
    image: "/images/img-1.png",
  },
  {
    name: "Gregory C.",
    quote:
      "This program is a game-changer. I felt more confident in my speaking test after just two weeks!",
    image: "/images/img-4.png",
  },
  {
    name: "John O.",
    quote:
      "Thanks to the course, I improved my writing band from 6.0 to 7.5 in just a few weeks!",
    image: "/images/img-2.png",
  },
  {
    name: "Chioma K.",
    quote:
      "Instructors are very supportive. I loved the mock tests and review sessions!",
    image: "/images/img-3.png",
  },
  {
    name: "Samuel D.",
    quote:
      "Clear lessons and useful practice tests. I hit band 7.0 on my first try. Highly recommend!",
    image: "/images/img-1.png",
  },
  {
    name: "Fatima A.",
    quote:
      "My listening and reading scores jumped by 1.5 bands. This course made all the difference!",
    image: "/images/img-2.png",
  },
  {
    name: "Elijah M.",
    quote:
      "It felt like having a personal tutor. I’m now studying in the UK thanks to my IELTS success.",
    image: "/images/img-3.png",
  },
  {
    name: "Ngozi L.",
    quote:
      "The structured approach helped me manage my time and prepare effectively for each section.",
    image: "/images/img-4.png",
  },
];

export const groupedFaqs = [
  {
    category: "About IELTS",
    items: [
      {
        question: "What is IELTS and why do I need it?",
        answer:
          "IELTS (International English Language Testing System) is a globally recognized English proficiency test used for study, work, and migration purposes.",
      },
      {
        question: "Is IELTS hard?",
        answer:
          "It depends on your current English level and test-taking skills. But with the right preparation and support, it's very achievable!",
      },
      {
        question: "How long does it take to prepare for IELTS?",
        answer:
          "Most students need 1 to 3 months of preparation, depending on their current level and desired score.",
      },
      {
        question: "Can I prepare for both Academic and General Training IELTS?",
        answer:
          "Absolutely! Our resources and tutors support both versions of the exam.",
      },
      {
        question: "How do I book the official IELTS exam?",
        answer:
          "We provide step-by-step guidance on how to register for the IELTS through official test centers like British Council and IDP.",
      },
    ],
  },
  {
    category: "Program Features",
    items: [
      {
        question: "What makes your IELTS preparation unique?",
        answer:
          "We combine expert-led instruction, real test simulations, flexible plans, and personalized feedback to help you succeed.",
      },
      {
        question: "Do you offer mock tests?",
        answer:
          "Yes, we provide full-length mock exams that simulate the real IELTS testing experience—including timing and scoring.",
      },
      {
        question: "Will I get feedback on my writing and speaking?",
        answer:
          "Yes. You’ll receive detailed, structured feedback on both your writing tasks and speaking practice.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Our platform is fully mobile-responsive, and a dedicated app is in development to make learning even easier on the go.",
      },
    ],
  },
  {
    category: "Learning Experience",
    items: [
      {
        question: "Can I get one-on-one coaching?",
        answer:
          "Yes! One-on-one coaching is available for students who want personalized attention and tailored strategies.",
      },
      {
        question: "What happens if I miss a class?",
        answer:
          "Don’t worry—you’ll get access to class recordings, and in some plans, you can reschedule missed sessions.",
      },
      {
        question: "What devices do I need for classes?",
        answer:
          "Any smartphone, tablet, or computer with a stable internet connection will work. Headphones and a quiet space are helpful for speaking practice.",
      },
    ],
  },
  {
    category: "Pricing & Policies",
    items: [
      {
        question: "How much does the program cost?",
        answer:
          "We offer flexible pricing to fit different budgets. You can choose from basic self-paced plans to premium coaching packages.",
      },
      {
        question: "Do you have a money-back guarantee?",
        answer:
          "Yes. We offer a satisfaction guarantee—if you're not satisfied within the first 7 days, you can request a full refund.",
      },
      {
        question: "Are there any discounts or scholarships?",
        answer:
          "Yes, we regularly offer scholarships and promotional discounts. Follow us on social media or sign up for our newsletter to stay updated.",
      },
    ],
  },
];

export const footerLinks = [
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/LucidEnglishIELTS",
    icon: FacebookIcon,
    classes: "bg-[#0866FF]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Lucid_EnglishIELTS",
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

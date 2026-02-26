import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IMAGES } from "@/assets/images";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROUTE_PATHS = {
  HOME: "/",
} as const;

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  situation: "foreclosure-risk" | "want-to-sell" | "sell-and-stay" | "other";
  message: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Home" | "Zap" | "Clock" | "FileText" | "Users";
  highlight?: boolean;
}

export const SERVICES: ServiceFeature[] = [
  {
    id: "foreclosure-prevention",
    title: "Foreclosure Prevention",
    description: "Expert legal resources and guidance to help you navigate mediation and loan modifications. We prioritize keeping you in your home whenever possible.",
    iconName: "ShieldCheck",
  },
  {
    id: "sell-and-stay",
    title: "Sell Your Home & Stay",
    description: "A unique alternative for homeowners facing equity loss. Sell your property to clear debt while remaining as a resident. Ask us for a consultation on how this works.",
    iconName: "Home",
    highlight: true,
  },
  {
    id: "fast-cash-buyout",
    title: "Direct Cash Buyout",
    description: "For those seeking a clean slate. We purchase homes as-is for competitive cash offers, covering closing costs and assisting with relocation logistics.",
    iconName: "Zap",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    location: "Denver, CO",
    content: "GMASH LLC was a godsend. I was weeks away from losing my childhood home. They didn't just buy it; they helped me negotiate with the bank and find a path forward I didn't think was possible.",
    avatar: IMAGES.CONSULTATION_3,
  },
  {
    id: "2",
    name: "Michael Ross",
    location: "Aurora, CO",
    content: "The 'Sell and Stay' program changed everything. I was able to clear my debts and stay in the neighborhood my kids grew up in. Professional, empathetic, and fast.",
    avatar: IMAGES.CONSULTATION_5,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    location: "Lakewood, CO",
    content: "I needed to move quickly for work but my house needed repairs I couldn't afford. GMASH bought it as-is and even provided a moving coordinator. Truly stress-free experience in a difficult time.",
    avatar: IMAGES.CONSULTATION_8,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Marcus Thorne",
    role: "Founder & Lead Specialist",
    image: IMAGES.TEAM_1,
    bio: "With over 15 years in real estate distress management, Marcus founded GMASH to prioritize homeowner stability over corporate profit.",
  },
  {
    id: "member-2",
    name: "Jasmine Lee",
    role: "Foreclosure Prevention Advocate",
    image: IMAGES.TEAM_2,
    bio: "Jasmine specializes in navigating complex bank negotiations and connecting at-risk homeowners with essential state and federal resources.",
  },
  {
    id: "member-3",
    name: "David Miller",
    role: "Relocation Coordinator",
    image: IMAGES.TEAM_5,
    bio: "David ensures that if you choose to sell, your transition to your next chapter is seamless, dignified, and fully supported by our team.",
  },
];

export const CONTACT_SITUATIONS = [
  { value: "foreclosure-risk", label: "At Risk of Foreclosure" },
  { value: "want-to-sell", label: "I Want to Sell Quickly" },
  { value: "sell-and-stay", label: "Interested in 'Sell & Stay'" },
  { value: "other", label: "Other / Resource Inquiry" },
];

export const TRUST_STATS = [
  { label: "Homes Saved", value: "450+" },
  { label: "Years of Service", value: "12" },
  { label: "Success Rate", value: "94%" },
  { label: "Community Rating", value: "4.9/5" },
];
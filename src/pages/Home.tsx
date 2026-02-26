import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Home as HomeIcon,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Heart,
  User,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ArrowUpRight,
  FileText,
  Users
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { 
  SERVICES, 
  TESTIMONIALS, 
  cn 
} from "@/lib/index";
import { IMAGES } from "@/assets/images";

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const IconMap = {
  ShieldCheck: ShieldCheck,
  Home: HomeIcon,
  Zap: Zap,
  Clock: Clock,
  FileText: FileText,
  Users: Users,
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.FAMILY_HOME_2} 
            alt="Family safe at home"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Your Foreclosure Prevention Partners</span>
            </motion.div>

            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-serif"
            >
              Protect Your <span className="text-primary italic">Home</span>, <br /> 
              Reclaim Your <span className="text-primary">Future</span>.
            </motion.h1>

            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Facing foreclosure is overwhelming, but you don't have to face it alone. 
              Gmash LLC provides compassionate solutions to help you keep your home or move on with dignity.
            </motion.p>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Get Help Now <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg border border-border hover:bg-muted transition-colors"
              >
                Explore Solutions
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 rounded-2xl bg-card border border-border shadow-xl max-w-lg mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-2 text-accent font-serif">
                "Sell Your Home and Stay! Ask How!"
              </h3>
              <p className="text-muted-foreground">
                Ask us about our unique lease-back options that let you clear your debt while keeping your roots.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.FRIENDLY_TEAM_7} 
                  alt="Supportive local team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl hidden md:block shadow-xl shadow-primary/20">
                <p className="text-4xl font-bold font-mono">12+</p>
                <p className="text-sm uppercase tracking-widest font-semibold">Years of Empathy</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif">A Haven for Homeowners in Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Gmash, we understand that a house is more than just four walls and a roof—it's a lifetime of memories. When financial hardship strikes, the fear of losing that foundation can be paralyzing.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is simple: To provide a clear, honest roadmap out of foreclosure. Whether that means negotiating with your lender to keep you in your home or facilitating a fast, fair cash sale to give you a fresh start, we put your dignity first.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Zero fees or hidden commissions", 
                  "Free educational resources", 
                  "Legal & financial mediation",
                  "Empathetic, non-judgmental approach"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Three Paths Forward</h2>
            <p className="text-muted-foreground text-lg">
              Every situation is unique. We've designed three core services to address the most common needs of homeowners facing foreclosure.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => {
              const Icon = IconMap[service.iconName];
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className={cn(
                    "relative p-8 rounded-3xl bg-card border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                    service.highlight ? "border-accent ring-1 ring-accent/50" : "border-border"
                  )}
                >
                  {service.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group"
                  >
                    Learn More <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-8 font-serif">Our 4-Step Relief Process</h2>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Free Consultation",
                    desc: "We listen to your story, review your paperwork, and understand your goals without any pressure or judgment.",
                    icon: <User className="w-6 h-6" />
                  },
                  {
                    step: "02",
                    title: "Strategic Evaluation",
                    desc: "Our specialists analyze your mortgage, home equity, and local market to present all viable options.",
                    icon: <Clock className="w-6 h-6" />
                  },
                  {
                    step: "03",
                    title: "Choose Your Path",
                    desc: "Whether it's a loan modification, a 'Sell & Stay' lease-back, or a direct cash sale, you make the final call.",
                    icon: <HelpCircle className="w-6 h-6" />
                  },
                  {
                    step: "04",
                    title: "Fresh Start",
                    desc: "We handle all the paperwork and logistics, ensuring a smooth transition to your new financial reality.",
                    icon: <Heart className="w-6 h-6" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-md">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-serif">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <img src={IMAGES.CONSULTATION_1} alt="Consultation" className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
                <img src={IMAGES.CONSULTATION_7} alt="Consultation meeting" className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-[1.02] transition-transform" />
              </div>
              <div className="space-y-4">
                <img src={IMAGES.HELPING_FAMILY_4} alt="Happy family support" className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-[1.02] transition-transform" />
                <div className="bg-primary p-6 rounded-2xl text-primary-foreground shadow-xl">
                  <p className="text-lg font-bold italic mb-2">"The fastest closing I've ever experienced. Gmash kept their word."</p>
                  <p className="text-sm opacity-80 font-medium">— Recent Homeowner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Stories of Recovery</h2>
            <p className="text-muted-foreground">Hear from people who transformed their crisis into a new beginning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold font-serif">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-15deg] transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Take the First Step Today</h2>
              <p className="text-xl opacity-90 mb-10">
                Don't wait for the bank to make the next move. Contact us for a confidential, no-obligation strategy session.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70 font-medium uppercase tracking-wider">Call Us Directly</p>
                    <p className="text-xl font-bold font-mono">(303) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70 font-medium uppercase tracking-wider">Email Support</p>
                    <p className="text-xl font-bold">help@gmash.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70 font-medium uppercase tracking-wider">Local Office</p>
                    <p className="text-xl font-bold">Denver, Colorado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 font-serif">Request Information</h3>
                <p className="text-muted-foreground">Tell us about your situation and we'll reach out within 24 hours.</p>
              </div>
              <ContactForm variant="default" />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Copyright Footer for SPA (Managed by Layout mainly, but just in case) */}
      <footer className="py-8 border-t border-border bg-background text-center text-muted-foreground text-sm">
        <p>© 2026 GMASH LLC. All rights reserved. Your local foreclosure prevention specialist.</p>
      </footer>
    </Layout>
  );
}

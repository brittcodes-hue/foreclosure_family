import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS, cn } from "@/lib/index";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Warm and approachable layout featuring a sticky header with dynamic height measurement
 * to prevent layout shifts, and a comprehensive footer built on trust and community values.
 */
export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateHeight();
    
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) resizeObserver.observe(headerRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "The Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      {/* Approachesble Sticky Header */}
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/40 py-2 md:py-3" 
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2 group transition-transform hover:scale-[1.01]">
            <img 
              src={IMAGES.GMASH_LOGO_39} 
              alt="Gmash LLC Logo" 
              className="h-10 md:h-12 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-tight hover:text-primary transition-colors duration-200 relative group text-foreground/80"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button asChild variant="default" className="rounded-full px-8 font-semibold shadow-md shadow-primary/10">
              <a href="#contact">Consult Today</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-semibold p-4 hover:bg-muted/50 rounded-2xl transition-all duration-200 flex items-center justify-between group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
                <div className="pt-4 border-t border-border mt-2">
                  <Button asChild variant="default" className="w-full py-7 text-lg rounded-2xl">
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get Immediate Help</a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Content Area with Dynamic Padding to handle Header Height */}
      <main className="flex-grow" style={{ paddingTop: `${headerHeight}px` }}>
        {children}
      </main>

      {/* Warm & Approachable Footer */}
      <footer className="bg-secondary/50 pt-24 pb-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <img src={IMAGES.GMASH_LOGO_39} alt="Gmash LLC" className="h-10 md:h-12 w-auto" />
              <p className="text-muted-foreground leading-relaxed text-base max-w-sm font-medium">
                At GMASH LLC, we empower homeowners with dignity and empathetic solutions. We believe every home has a story, and we're here to help yours continue with stability and peace of mind.
              </p>
              <div className="flex gap-4">
                {[ 
                  { icon: SiFacebook, href: "#" }, 
                  { icon: SiInstagram, href: "#" }, 
                  { icon: SiLinkedin, href: "#" } 
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    className="p-3 rounded-full bg-background border border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-lg mb-8 text-foreground">Explore</h4>
              <ul className="space-y-4 font-medium">
                {navLinks.slice(1, 5).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary flex items-center gap-2 group transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlighted Service Column */}
            <div className="lg:col-span-3">
              <div className="bg-accent/10 p-8 rounded-[2.5rem] border border-accent/20 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
                <h4 className="font-bold text-xl mb-4 text-accent-foreground flex items-center gap-2 font-heading">
                  Sell & Stay
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                </h4>
                <p className="text-sm text-accent-foreground/80 leading-relaxed mb-6 font-medium">
                  Struggling with debt but want to keep your roots? Our unique "Stay-in-Place" program allows you to resolve financial burdens while remaining in your family home.
                </p>
                <Button asChild variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent hover:text-white transition-all rounded-xl font-bold">
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-lg mb-8 text-foreground">Get in Touch</h4>
              <ul className="space-y-6">
                {[ 
                  { icon: Phone, label: "Call Us", value: "(303) 555-0123" }, 
                  { icon: Mail, label: "Email Us", value: "support@gmashllc.com" }, 
                  { icon: MapPin, label: "Visit Us", value: "1234 Emerald Way, Ste 200, Denver, CO 80202" } 
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 p-2.5 rounded-xl bg-background border border-border/50 text-primary group-hover:scale-110 transition-transform shadow-sm">
                      <item.icon size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1">{item.label}</span>
                      <span className="text-foreground/90 font-bold text-sm leading-tight">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="pt-10 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <p>© 2026 Gmash LLC. All rights reserved.</p>
              <span className="hidden md:inline text-border/60">|</span>
              <p className="italic text-xs opacity-75">Providing solutions, preserving legacies.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Terms of Use</a>
              <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

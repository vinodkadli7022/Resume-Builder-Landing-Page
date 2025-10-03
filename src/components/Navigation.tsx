import { useState } from "react";
import { Menu, X, Home, Info, Briefcase, DollarSign, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#", icon: Home },
    { label: "About Us", href: "#about", icon: Info },
    { label: "Our Services", href: "#services", icon: Briefcase },
    { label: "Pricing", href: "#pricing", icon: DollarSign },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold leading-none">COMPANY</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground leading-none">YOUR TAGLINE</span>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button size="lg" className="rounded-full px-6 lg:px-8 font-semibold text-xs uppercase">
                Get A Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-background z-50 md:hidden shadow-2xl animate-slide-in-right">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-2 border-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none">COMPANY</span>
                  <span className="text-[10px] text-muted-foreground leading-none">YOUR TAGLINE</span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 py-3 px-3 hover:bg-muted rounded-lg transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                );
              })}
              
              {/* CTA Button in Sidebar */}
              <div className="mt-4 pt-4 border-t border-border">
                <Button 
                  size="lg" 
                  className="rounded-full font-semibold w-full text-xs uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Αρχική", href: "#hero" },
    { label: "Προϊόντα", href: "#products" },
    { label: "Γιατί Εμάς", href: "#why-us" },
    { label: "Επικοινωνία", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-800 text-primary-foreground tracking-tight">
          ΧΡΙΣΤΟΦΟΡΟΣ ΝΑΣΤΟΣ
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="tel:+302101234567">
            <Button variant="hero" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Καλέστε μας
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+302101234567">
              <Button variant="hero" size="sm" className="w-full gap-2 mt-2">
                <Phone className="w-4 h-4" />
                Καλέστε μας
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

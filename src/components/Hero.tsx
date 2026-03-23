import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            20+ χρόνια εμπειρίας – Εξουσιοδοτημένος Αντιπρόσωπος RBS
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-primary-foreground leading-tight mb-6">
            Ταμειακές, POS &{" "}
            <span className="text-gradient">Λύσεις Εστίασης</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-8 leading-relaxed max-w-xl">
            Παραγγελιοληψία, ταμειακές 2 σε 1, προγράμματα τιμολόγησης, κάρτες εργασίας 
            και πλήρης τεχνική υποστήριξη POS. Για εστιατόρια, ξενοδοχεία και κάθε επιχείρηση.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+306945276010">
              <Button variant="hero" size="lg" className="gap-2 text-base">
                <Phone className="w-5 h-5" />
                Καλέστε μας: 694 527 6010
              </Button>
            </a>
            <a href="#products">
              <Button variant="heroOutline" size="lg" className="gap-2 text-base">
                Δείτε τα Προϊόντα μας
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

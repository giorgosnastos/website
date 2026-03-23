import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-800 text-primary-foreground mb-4">
            Επικοινωνία
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Ένα τηλέφωνο αρκεί
          </p>
        </div>

        {/* Big phone CTA */}
        <div className="text-center mb-12">
          <a
            href="tel:+306945276010"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground rounded-full px-8 py-4 text-2xl md:text-3xl font-display font-800 hover:scale-105 transition-transform shadow-lg"
          >
            <Phone className="w-7 h-7" />
            694 527 6010
          </a>
          <p className="text-primary-foreground/60 text-sm mt-3">Χριστόφορος</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-sm text-primary-foreground/60 mb-1">Διεύθυνση</p>
            <a
              href="https://maps.google.com/?q=Κουτσαντώνη+11+Νέα+Μουδανιά"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground font-medium hover:text-accent-foreground transition-colors"
            >
              Κουτσαντώνη 11, Νέα Μουδανιά
            </a>
            <p className="text-primary-foreground/50 text-xs mt-1">(Έναντι Εφορίας)</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-sm text-primary-foreground/60 mb-1">Ωράριο</p>
            <div className="text-primary-foreground font-medium space-y-1">
              <p>Καθημερινές(Δευτέρα - Παρασκευή): <span className="font-semibold">9:00 – 14:00 & 17:00 - 21:00</span></p>
              <p>Σάββατο: <span className="font-semibold">10:00 – 13:00</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

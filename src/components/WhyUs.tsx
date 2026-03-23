import { Shield, Headphones, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "20+ Χρόνια Εμπειρίας",
    description: "Πάνω από 20 χρόνια στον κλάδο με εγγυημένα προϊόντα, αξιοπιστία και συνέπεια.",
  },
  {
    icon: Headphones,
    title: "Τεχνική Υποστήριξη",
    description: "Άμεσο service και υποστήριξη μετά την πώληση. Πάντα δίπλα σας.",
  },
  {
    icon: Truck,
    title: "Εγκατάσταση & Εκπαίδευση",
    description: "Πλήρης εγκατάσταση, παραμετροποίηση και εκπαίδευση στον χώρο σας.",
  },
  {
    icon: Award,
    title: "Αντιπρόσωποι RBS",
    description: "Εξουσιοδοτημένοι αντιπρόσωποι της κορυφαίας κατασκευάστριας ταμειακών στην Ελλάδα.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-800 text-foreground mb-4">
            Γιατί να μας Επιλέξετε
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Η εμπιστοσύνη χιλιάδων επιχειρήσεων δεν είναι τυχαία
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-display font-700 text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

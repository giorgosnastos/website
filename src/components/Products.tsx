import cashRegisterImg from "@/assets/cash-register.png";
import pos2in1Img from "@/assets/pos-2in1.png";
import paperRollsImg from "@/assets/paper-rolls.jpg";
import scaleImg from "@/assets/scale.jpg";
import cashDrawerImg from "@/assets/cash-drawer.jpg";
import workCardImg from "@/assets/work-card.png";
import restaurantPdaImg from "@/assets/restaurant-pda.jpg";
import invoicingImg from "@/assets/invoicing.jpg";
import posConnectionImg from "@/assets/pos-connection.jpg";

const products = [
  {
    title: "Ταμειακές Μηχανές",
    description: "Αξιόπιστες ταμειακές μηχανές νέας γενιάς, συμβατές με ΑΑΔΕ. RBS και άλλες αξιόπιστες μάρκες.",
    image: cashRegisterImg,
    
  },
  {
    title: "All in One – Ταμειακή & POS μαζί",
    description: "Ταμειακή και POS σε μία συσκευή. Εξοικονόμηση χώρου και κόστους – ιδανική για κάθε επιχείρηση.",
    image: pos2in1Img,
    
  },
  {
    title: "Χαρτικά & Αναλώσιμα",
    description: "Θερμικά ρολά, μελανοταινίες και αναλώσιμα για μικρές και μεγάλες επιχειρήσεις, ξενοδοχεία κ.ά.",
    image: paperRollsImg,
  },
  {
    title: "Σύνδεση POS & Επίλυση Προβλημάτων",
    description: "Διασύνδεση ταμειακής με POS, αντιμετώπιση οποιουδήποτε προβλήματος POS και πλήρης τεχνική υποστήριξη.",
    image: posConnectionImg,
  },
  {
    title: "Πρόγραμμα Τιμολόγησης",
    description: "Ολοκληρωμένο πρόγραμμα τιμολόγησης για έκδοση παραστατικών, διαχείριση πελατών και αποθήκης.",
    image: invoicingImg,
  },
  {
    title: "Παραγγελιοληψία & Λύσεις Εστίασης",
    description: "PDA συστήματα παραγγελιοληψίας, kitchen displays και ολοκληρωμένες λύσεις για εστιατόρια, καφέ και ξενοδοχεία.",
    image: restaurantPdaImg,
  },
  {
    title: "Λύσεις Κάρτες Εργασίας – ΕΡΓΑΝΗ",
    description: "Ψηφιακή κάρτα εργασίας ΕΡΓΑΝΗ. Συστήματα παρουσιολογίου και ωρομέτρησης για τη διαχείριση προσωπικού.",
    image: workCardImg,
  },
  {
    title: "Ζυγαριές",
    description: "Ηλεκτρονικές ζυγαριές για λιανικό εμπόριο, εστίαση και βιομηχανική χρήση.",
    image: scaleImg,
  },
  {
    title: "Συρτάρια Ταμείου",
    description: "Ανθεκτικά μεταλλικά συρτάρια με πολλαπλές θέσεις για κέρματα και χαρτονομίσματα.",
    image: cashDrawerImg,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-800 text-foreground mb-4">
            Τα Προϊόντα & Υπηρεσίες μας
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            20+ χρόνια εμπειρίας – Επίσημος αντιπρόσωπος <strong>RBS</strong>
          </p>
        </div>

        {/* Top 3 featured cards - large */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.title}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-700 text-card-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining cards - smaller grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {products.slice(3).map((product) => (
            <div
              key={product.title}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-display font-700 text-card-foreground mb-1.5">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

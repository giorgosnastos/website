const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display font-700 text-background text-lg mb-2">
          ΧΡΙΣΤΟΦΟΡΟΣ
        </p>
        <p className="text-background/50 text-sm">
          © {new Date().getFullYear()} Χριστόφορος Ταμειακές Μηχανές. Με επιφύλαξη παντός δικαιώματος.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

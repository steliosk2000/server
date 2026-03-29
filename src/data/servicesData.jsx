import { FaShoppingCart, FaQrcode, FaPenNib, FaHotel, FaChartLine, FaPaintBrush } from 'react-icons/fa';

export const servicesData = [
  {
    id: 'e-shop',
    icon: <FaShoppingCart />,
    title: 'Κατασκευή E-Shop',
    shortDescription: 'Σύγχρονα, γρήγορα και ασφαλή ηλεκτρονικά καταστήματα που αυξάνουν τις πωλήσεις σας.',
    description: 'Αναλαμβάνουμε την πλήρη κατασκευή του ηλεκτρονικού σας καταστήματος από το μηδέν, με σύγχρονες πλατφόρμες (WooCommerce, Shopify ή Custom). Παρέχουμε διασύνδεση με τράπεζες, μεταφορικές εταιρείες και ERP.',
    features: ['Custom Σχεδιασμός', 'Mobile First Ανάπτυξη', 'Ταχύτητα & Ασφάλεια', 'Διασύνδεση με Τράπεζες'],
    pricing: 'Από 1.200€'
  },
  {
    id: 'qr-menu',
    icon: <FaQrcode />,
    title: 'Κατασκευή Μενού QR',
    shortDescription: 'Ανέπαφα ψηφιακά μενού για εστιατόρια και καφετέριες με εύκολη διαχείριση.',
    description: 'Δημιουργούμε διαδραστικά και εύκολα στη χρήση μενού QR για χώρους εστίασης. Ο πελάτης απλώς σκανάρει και βλέπει τον κατάλογο στο κινητό του χωρίς εφαρμογή.',
    features: ['Άμεση Αλλαγή Τιμών', 'Διγλωσσία', 'Απεριόριστα Προϊόντα', 'Φιλικό στο Χρήστη'],
    pricing: 'Από 150€'
  },
  {
    id: 'blog',
    icon: <FaPenNib />,
    title: 'Κατασκευή Blog',
    shortDescription: 'Προσαρμοσμένα blogs για να μοιράζεστε τα άρθρα σας με το κοινό σας επαγγελματικά.',
    description: 'Σχεδιάζουμε πανέμορφα και λειτουργικά blogs για αρθρογράφους, εταιρείες και influencers. Με έμφαση στην ταχύτητα και το SEO.',
    features: ['Εύκολο Πάνελ Διαχείρισης', 'SEO Ready', 'Κατηγοριοποίηση & Tags', 'Social Media Integration'],
    pricing: 'Από 400€'
  },
  {
    id: 'hotels',
    icon: <FaHotel />,
    title: 'Ιστοσελίδες για Ξενοδοχεία',
    shortDescription: 'Εντυπωσιακές ιστοσελίδες με σύστημα κρατήσεων σχεδιασμένες για τον τουριστικό τομέα.',
    description: 'Παρέχουμε ολοκληρωμένες λύσεις για ξενοδοχεία και καταλύματα, με εντυπωσιακό design που πουλάει την εμπειρία και ενσωματωμένο σύστημα κρατήσεων (Booking Engine).',
    features: ['Σύστημα Κρατήσεων/Booking Module', 'Channel Manager Integration', 'Gallery/Video Tours', 'Πολυγλωσσικό Σύστημα'],
    pricing: 'Από 1.500€'
  },
  {
    id: 'seo',
    icon: <FaChartLine />,
    title: 'Προώθηση Ιστοσελίδων (SEO)',
    shortDescription: 'Στρατηγικές SEO και Digital Marketing για να φτάσετε στην πρώτη σελίδα της Google.',
    description: 'Εκτοξεύστε την οργανική σας κίνηση. Κάνουμε πλήρες Audit, λέξεις-κλειδιά, On-Page SEO, τεχνικές βελτιώσεις, και Link Building για μόνιμα αποτελέσματα.',
    features: ['Keyword Research', 'Technical Audit', 'Content Optimization', 'Monthly Reporting'],
    pricing: 'Από 250€ / μήνα'
  },
  {
    id: 'logo',
    icon: <FaPaintBrush />,
    title: 'Δημιουργία Λογοτύπων',
    shortDescription: 'Μοναδικά λογότυπα και εταιρική ταυτότητα που μένουν αξέχαστα στους πελάτες σας.',
    description: 'Οι σχεδιαστές μας δημιουργούν μοναδικά και διαχρονικά λογότυπα που αντικατοπτρίζουν απόλυτα το όραμα και το ύφος της επιχείρησής σας.',
    features: ['3 Προτάσεις Λογοτύπου', 'Όλα τα Αρχεία (AI, EPS, PNG, SVG)', 'Εγχειρίδιο Σήματος/Brandbook', 'Απεριόριστες Αλλαγές'],
    pricing: 'Από 200€'
  }
];

export const getServiceById = (id) => servicesData.find(service => service.id === id);


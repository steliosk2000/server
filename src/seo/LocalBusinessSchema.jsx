/**
 * LocalBusinessSchema
 * Renders JSON-LD structured data for CoderaStudio as a LocalBusiness.
 * Place on the Home page only.
 */
const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'Codera Studio',
    alternateName: 'CoderaStudio',
    url: 'https://coderastudio.gr',
    email: 'info@coderastudio.gr',
    telephone: '+306971826704',
    image: 'https://coderastudio.gr/og-image.png',
    logo: 'https://coderastudio.gr/favicon.svg',
    description:
      'Κατασκευή ιστοσελίδων, e-shop και ψηφιακού QR μενού στην Κρήτη. Εξειδικευόμαστε σε ξενοδοχεία, εστιατόρια και μικρές επιχειρήσεις στα Χανιά και το Ηράκλειο.',
    areaServed: [
      { '@type': 'City', name: 'Χανιά' },
      { '@type': 'City', name: 'Ηράκλειο' },
      { '@type': 'State', name: 'Κρήτη' },
      { '@type': 'Country', name: 'Ελλάδα' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Χανιά',
      addressRegion: 'Κρήτη',
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.5138',
      longitude: '24.0180',
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Υπηρεσίες Web Design',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Κατασκευή E-shop',
            description: 'Επαγγελματικό ηλεκτρονικό κατάστημα για επιχειρήσεις στην Κρήτη',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Κατασκευή Ιστοσελίδας Ξενοδοχείου',
            description: 'Ιστοσελίδες ξενοδοχείων με σύστημα κρατήσεων για την Κρήτη',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ψηφιακό QR Μενού',
            description: 'Ψηφιακό μενού QR κωδικά για εστιατόρια και καφέ στην Κρήτη',
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default LocalBusinessSchema;

/**
 * BreadcrumbSchema
 * Renders JSON-LD BreadcrumbList structured data.
 * Helps Google display breadcrumbs in search results.
 *
 * Props:
 *  items – array of { name, url } objects, e.g.:
 *    [
 *      { name: 'Αρχική', url: 'https://coderastudio.gr/' },
 *      { name: 'Υπηρεσίες', url: 'https://coderastudio.gr/services' },
 *      { name: 'Κατασκευή E-shop', url: 'https://coderastudio.gr/services/1' },
 *    ]
 */
const BreadcrumbSchema = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default BreadcrumbSchema;

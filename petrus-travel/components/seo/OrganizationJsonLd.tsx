/**
 * Organization JSON-LD with raster `logo` URL (Google rich results guidance).
 * Renders nothing when `NEXT_PUBLIC_SITE_URL` is unset (no absolute logo URL).
 */
export function OrganizationJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return null;

  const url = base.replace(/\/$/, "");
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Petrus Travel",
    url: `${url}/`,
    logo: `${url}/home/petrus/petrus_logo.png`,
    sameAs: [
      "https://www.instagram.com/petrus.travel/",
      "https://www.linkedin.com/company/petrus-travel-dmc",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

import React from "react";
import { Helmet } from "react-helmet-async";
import { LocationData } from "../types";

interface SEOProps {
  locationData: LocationData;
}

export const SEO: React.FC<SEOProps> = ({ locationData }) => {
  const title = `MedSênior ${locationData.name} - Plano de Saúde para 44+`;

  const description = locationData.hero.description
    ? locationData.hero.description.replace(/<[^>]*>/g, "") // Strip HTML tags
    : `Conheça o plano de saúde MedSênior em ${locationData.name}. Hospital próprio, carência zero e atendimento especializado para a terceira idade.`;

  // Base domain - ideally from env var, but defaulting to main domain
  const baseUrl = "https://www.medsenior.com.br";

  // Construct canonical URL
  const canonicalUrl = `${baseUrl}/${locationData.slug}`;

  // Ensure absolute URL for OG Image
  const ogImage = locationData.hero.image.startsWith("http")
    ? locationData.hero.image
    : `${baseUrl}${locationData.hero.image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta
        property="og:site_name"
        content={`MedSênior ${locationData.name}`}
      />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Performance Optimization: Preload LCP Image */}
      <link
        rel="preload"
        as="image"
        href={locationData.hero.image}
        type="image/webp"
      />
    </Helmet>
  );
};

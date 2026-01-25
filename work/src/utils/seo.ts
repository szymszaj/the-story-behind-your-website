export interface SEOMetaTags {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  structuredData?: Record<string, any>;
}

const BASE_URL = "https://twoja-strona-historia.pl";
const DEFAULT_IMAGE = `${BASE_URL}/img/page.png`;

export const setSEOMeta = (config: SEOMetaTags) => {
  document.title = config.title;

  setMetaTag("description", config.description);

  if (config.keywords) {
    setMetaTag("keywords", config.keywords);
  }

  if (config.canonical) {
    setCanonicalUrl(config.canonical);
  }

  setMetaTag("og:title", config.ogTitle || config.title, "property");
  setMetaTag(
    "og:description",
    config.ogDescription || config.description,
    "property",
  );
  setMetaTag("og:image", config.ogImage || DEFAULT_IMAGE, "property");
  setMetaTag("og:url", config.ogUrl || BASE_URL, "property");
  setMetaTag("og:type", "website", "property");
  setMetaTag("og:site_name", "Twoja Strona, Twoja Historia", "property");

  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", config.twitterTitle || config.title);
  setMetaTag(
    "twitter:description",
    config.twitterDescription || config.description,
  );
  setMetaTag("twitter:image", config.twitterImage || DEFAULT_IMAGE);

  if (config.structuredData) {
    setStructuredData(config.structuredData);
  }
};

const setMetaTag = (
  name: string,
  content: string,
  attribute: "name" | "property" = "name",
) => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setCanonicalUrl = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = url;
};

const setStructuredData = (data: Record<string, any>) => {
  let script = document.querySelector(
    'script[type="application/ld+json"]',
  ) as HTMLScriptElement;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

export const indexPageSEO: SEOMetaTags = {
  title: "Twoja Strona, Twoja Historia - Tworzę strony internetowe",
  description:
    "Profesjonalne tworzenie stron internetowych, które opowiadają historię Twojej firmy, produktu czy usługi. Responsywne strony dla apartamentów, firm i wydarzeń.",
  keywords:
    "tworzenie stron, projektowanie www, strony internetowe, web design, responsywne strony, SEO",
  canonical: `${BASE_URL}/`,
  ogUrl: `${BASE_URL}/`,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Twoja Strona, Twoja Historia",
    description:
      "Profesjonalne tworzenie stron internetowych, które opowiadają historię Twojej firmy.",
    url: BASE_URL,
    image: DEFAULT_IMAGE,
    priceRange: "$$",
    serviceType: ["Web Design", "Web Development"],
    areaServed: "PL",
  },
};

export const projectsPageSEO: SEOMetaTags = {
  title:
    "Nasze Projekty - Twoja Strona, Twoja Historia | Portfolio Stron Internetowych",
  description:
    "Sprawdź nasze realizacje - strony internetowe dla apartamentów, firm i usług. Portfolio profesjonalnych projektów webowych.",
  keywords:
    "portfolio, projekty stron,case studies, realizacje, przykłady stron, web design portfolio",
  canonical: `${BASE_URL}/projects`,
  ogUrl: `${BASE_URL}/projects`,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nasze Projekty",
    description: "Portfolio naszych projektów webowych",
    url: `${BASE_URL}/projects`,
  },
};

export const contactPageSEO: SEOMetaTags = {
  title: "Kontakt - Twoja Strona, Twoja Historia | Skontaktuj się z nami",
  description:
    "Chcesz wiedzieć więcej o naszych usługach? Skontaktuj się z nami za pośrednictwem formularza lub zażądaj darmowej wyceny.",
  keywords: "kontakt, formularz kontaktowy, wycena, zapytanie, konsultacja",
  canonical: `${BASE_URL}/contact`,
  ogUrl: `${BASE_URL}/contact`,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt",
    description: "Skontaktuj się z nami",
    url: `${BASE_URL}/contact`,
  },
};

export const quotePageSEO: SEOMetaTags = {
  title: "Bezpłatna Wycena - Twoja Strona, Twoja Historia",
  description:
    "Получите бесплатную расчётную стоимость вашего проекта веб-сайта. Заполните форму и мы свяжемся с вами с подробной предложением.",
  keywords: "wycena, cena, koszt, bezpłatnie, kalkulator ceny",
  canonical: `${BASE_URL}/quote`,
  ogUrl: `${BASE_URL}/quote`,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Bezpłatna Wycena",
    description: "Bezpłatna wycena projektu",
    url: `${BASE_URL}/quote`,
  },
};

export const generateServiceSchema = (
  name: string,
  description: string,
  price?: string,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Twoja Strona, Twoja Historia",
      url: BASE_URL,
    },
    ...(price && { priceCurrency: "PLN", price }),
  };
};

export const generateArticleSchema = (
  title: string,
  description: string,
  datePublished: string,
  dateModified?: string,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Szymon Zych",
    },
    publisher: {
      "@type": "Organization",
      name: "Twoja Strona, Twoja Historia",
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_IMAGE,
      },
    },
  };
};

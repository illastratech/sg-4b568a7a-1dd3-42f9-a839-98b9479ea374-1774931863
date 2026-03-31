import Head from "next/head";
import { Fragment } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOElements({
  title = "Trixon Motors - Premium Vehicle Sales & Global Import Service",
  description = "Experience automotive excellence with Trixon Motors. Premium vehicle sales and professional global import services. Your trusted partner for luxury and performance vehicles since 2015.",
  image = "/og-image.png",
  url = "https://trixonmotors.com",
}: SEOProps) {
  return (
    <Fragment>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Fragment>
  );
}

export function SEO({
  title = "Trixon Motors - Premium Vehicle Sales & Global Import Service",
  description = "Experience automotive excellence with Trixon Motors. Premium vehicle sales and professional global import services. Your trusted partner for luxury and performance vehicles since 2015.",
  image = "/og-image.png",
  url = "https://trixonmotors.com",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
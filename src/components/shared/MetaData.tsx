import Head from 'next/head';
import React from 'react';

const data = {
  title: 'Jason Udi | independent interface designer.',
  image: 'https://res.cloudinary.com/de6urgzg2/image/upload/v1671974483/JASOn_thumbnail_mrzcmr.png',
  url: 'https://jasonudi.com/',
};

const MetaData = () => {
  return (
    <Head>
      <title>Jason Udi | independent interface designer</title>

      <link rel="canonical" href="https://jasonudi.com/" />

      <meta charSet="UTF-8" />

      <meta name="title" content="Jason Udi | independent interface designer." />

      <meta name="description" content="Jason Udi | independent interface designer." />

      <meta itemProp="name" content="" />

      <meta itemProp="image" content={data.image} />

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" key="facebook type" />
      <meta property="og:title" content={data.title} key="facebook title" />
      <meta property="og:url" content="" key="facebook url" />
      <meta property="og:description" content="" key="facebook description" />
      <meta property="og:image" content={data.image} key="facebook image" />
      <meta property="og:site_name" content="" />
      {/* Facebook Meta Tags Ends */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" key="twitter card" />
      <meta name="twitter:title" content={data.title} key="twitter title" />
      <meta name="twitter:description" content="" key="twitter description" />
      <meta name="twitter:image" content={data.image} key="twitter image" />

      <meta name="twitter:site" content="@Gravetwit" />
      <meta name="twitter:creator" content="@Gravetwit" />
      {/* Twitter Meta Tags Ends */}

      <link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png" />
      <link rel="manifest" href="/ico/site.webmanifest" />
    </Head>
  );
};

export default MetaData;

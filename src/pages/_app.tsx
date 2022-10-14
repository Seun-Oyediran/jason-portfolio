import React from 'react';
import type { AppProps } from 'next/app';

import '../../public/css/bootstrap.min.css';
import '../../public/css/font.css';
import '../../public/css/typography.css';
import '../../public/css/global.css';
import '../../public/css/responsive.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

import type { AppProps } from 'next/app';

import '../styles/reset.scss';
import '../styles/index.scss';
import '../styles/fonts.scss';
import '../styles/animations.scss';
import '../styles/variables.scss';

import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

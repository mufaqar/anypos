import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GoogleTagManager from '../components/GoogleTagManager';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { query } = router;
  // console.log('🚀 ~ file: _app.tsx:9 ~ App ~ router', query);
  return (
    <>
      <div
        dir={query === '' ? '' : query.lang === 'ar' ? 'rtl' : ''}
        lang={query.lang === 'ar' ? 'ar' : 'en'}
        className={query.lang === 'ar' && 'rtl'}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-266724692-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-266724692-1', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <GoogleTagManager />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

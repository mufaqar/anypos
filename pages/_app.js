import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

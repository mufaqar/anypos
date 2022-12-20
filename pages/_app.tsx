import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { query } = router
  console.log("🚀 ~ file: _app.tsx:9 ~ App ~ router", query)
  
  return (
    <>
      <div dir={query === "" ? '' : query.lang === 'ar' ? 'rtl' : ''} lang={query.lang === 'ar' ? 'ar' : 'en'} className={query.lang === 'ar' && 'rtl'}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

import type { AppProps } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import Providers from "providers";
import { useEffect } from "react";
import { supabase } from "utils/supabaseClient";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.dir(event);
      console.dir(session);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Quizify</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

import React from "react";
import Router, { useRouter } from "next/router";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import NProgress from "nprogress";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import mdxComponents from "../components/mdxComponents";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import "../styles/index.scss";

fontAwesomeConfig.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

/** @todo This is a temporary hack. I'm in a hurry this morning. */
const licenseChanges = {
  "/blog/sunshine-protection-act": "CC0",
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return router.pathname === "/photo/[id]" ? (
    <Component {...pageProps} />
  ) : (
    <ThemeProvider theme={theme}>
      <Nav />

      <main className="mb-5">
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

      <Footer license={licenseChanges[router.pathname] ?? "CC-BY"} />
    </ThemeProvider>
  );
}

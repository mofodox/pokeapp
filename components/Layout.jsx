import Head from "next/head.js";

import Footer from "./Footer.jsx";
import Jumbo from "./Jumbo.jsx";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Jumbo image="/pokedex_logo.webp" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

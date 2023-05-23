import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../components/Header/Layout";

import CartProvider from "../context/CartReducer";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
        <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </CartProvider>

    </Fragment>
  );
}

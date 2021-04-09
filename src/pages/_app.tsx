import type { AppProps } from "next/app";
import { Layout } from "~/layouts/layout";
import "~/styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

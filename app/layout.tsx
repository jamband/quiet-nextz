import type { Metadata } from "next";
import { APP_NAME } from "./_constants/app";
import { Layout } from "./_layouts/layout";
import "./_styles/app.scss";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: `%s ･ ${APP_NAME}`,
    default: APP_NAME,
  },
};

export default function RootLayout(props: Props) {
  return <Layout>{props.children}</Layout>;
}

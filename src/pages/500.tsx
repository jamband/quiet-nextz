import Link from "next/link";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <>
      <h1>An error occurred</h1>
      <IconInfoCircleFill />
      <span className="ps-1">An error occurred.</span>
      <div className="mt-5 text-center">
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="An error occurred">{page}</Layout>;

export default Page;
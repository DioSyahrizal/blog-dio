import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const PageSEO: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageSEO;

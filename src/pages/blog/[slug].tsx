import { marked } from "marked";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";

import Content from "../../components/Content";
import Header from "../../components/Header";
import PageSEO from "../../components/PageSEO";
import { getPostDetail, getPostPath } from "../../components/ssg/posts";
import { PageMetadata } from "../../interfaces/common";
interface Props {
  slug: string;
  formatter: PageMetadata;
  content: string;
}

const PostPage: NextPage<Props> = ({ formatter, content }) => {
  const { title, date } = formatter;
  return (
    <div>
      <PageSEO title={title} description={title} />
      <Header />
      <Content>
        <div className="my-8">
          <h1 className="font-bold text-5xl">{title}</h1>
          <p>{date}</p>
          <div className="flex justify-center mt-3">
            <Image
              src={formatter.cover_image}
              alt={title}
              width={700}
              height={500}
            />
          </div>

          <div className="prose mt-3">
            <ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
          </div>
        </div>
      </Content>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getPostPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const data = getPostDetail(params.slug);
  return {
    props: {
      ...data,
      slug: params.slug,
    },
  };
}

export default PostPage;

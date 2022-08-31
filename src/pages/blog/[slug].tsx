import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import CodeBlock from "../../components/CodeBlock";
import Content from "../../components/Content";
import Header from "../../components/Header";
import PageSEO from "../../components/PageSEO";
import Sidebar from "../../components/Sidebar";
import { getPostDetail, getPostPath } from "../../components/ssg/posts";
import { PageMetadata } from "../../interfaces/common";
interface Props {
  slug: string;
  formatter: PageMetadata;
  content: string;
}

const PostPage: NextPage<Props> = ({ formatter, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, date } = formatter;

  return (
    <div>
      <PageSEO title={title} description={title} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Header />
      <div className="flex relative">
        <Content>
          <button className="border-2" onClick={() => setIsOpen(true)}>
            Open sidebar
          </button>
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

            <div className="prose dark:prose-invert mt-8">
              <ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
            </div>
          </div>
        </Content>
      </div>
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

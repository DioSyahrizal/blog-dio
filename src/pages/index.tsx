import type { InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import queryString from "query-string";

import Content from "../components/Content";
import Header from "../components/Header";
import PageSEO from "../components/PageSEO";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../components/ssg/posts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  const router = useRouter();

  useEffect(() => {
    console.log("search: ", window.location.search);
    console.log(
      "qs: ",
      queryString.parse(window.location.search, { arrayFormat: "bracket" })
    );
  }, [router]);

  return (
    <div>
      <PageSEO
        title="Dio's Blog"
        description="The story about me myself and I"
      />
      <Header />
      <Content>
        <div className="grid grid-cols-4 gap-6 my-5">
          {posts.map((post) => (
            <PostCard key={post.excerpt} {...post} />
          ))}
        </div>
        <button
          onClick={() =>
            router.push(
              `?${queryString.stringify(
                { includes: ["you", "me"] },
                { arrayFormat: "bracket" }
              )}`
            )
          }
        >
          link
        </button>
      </Content>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;

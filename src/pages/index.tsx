import type { InferGetStaticPropsType, NextPage } from "next";

import Content from "../components/Content";
import Header from "../components/Header";
import PageSEO from "../components/PageSEO";
import PostCard from "../components/PostCard";
import { getAllDevPosts } from "../libs/ssg/posts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
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
            <PostCard key={post.excerpt} section="dev" {...post} />
          ))}
        </div>
      </Content>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllDevPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;

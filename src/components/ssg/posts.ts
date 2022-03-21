import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { PostProps } from "../../interfaces/post";

const postsDirectory = join(process.cwd(), "/src/_post");
const files = fs.readdirSync(postsDirectory);

export function getAllPosts(): PostProps[] {
  const posts: any = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const markdownMeta = fs.readFileSync(
      `${postsDirectory}/${filename}`,
      "utf-8"
    );
    const { data: formatter, content } = matter(markdownMeta);
    return {
      slug,
      ...formatter,
      content,
    };
  });

  return posts;
}

export function getPostPath() {
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ""),
    },
  }));
  return paths;
}

export function getPostDetail(slug: string) {
  const markdownMeta = fs.readFileSync(`${postsDirectory}/${slug}.md`, "utf-8");
  const { data: formatter, content } = matter(markdownMeta);
  return {
    formatter,
    content,
  };
}

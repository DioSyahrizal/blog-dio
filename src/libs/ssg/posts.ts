import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { PageMetadata } from "../../interfaces/common";

interface PostInterface extends PageMetadata {
  content: string;
}

const postsDirectory = join(process.cwd(), "/src/_post");
const files = fs.readdirSync(postsDirectory);

export function getAllPosts(): PostInterface[] {
  const posts = files.map((filename) => {
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

  return posts as PostInterface[];
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

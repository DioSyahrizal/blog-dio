import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { PageMetadata } from "../../interfaces/common";

interface DevInterface extends PageMetadata {
  content: string;
}

const devsDirectory = join(process.cwd(), "/src/posts/dev");
const files = fs.readdirSync(devsDirectory);

export function getAllDevPosts(): DevInterface[] {
  const devs = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const markdownMeta = fs.readFileSync(
      `${devsDirectory}/${filename}`,
      "utf-8"
    );
    const { data: formatter, content } = matter(markdownMeta);
    return {
      slug,
      ...formatter,
      content,
    };
  });

  return devs as DevInterface[];
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
  const markdownMeta = fs.readFileSync(`${devsDirectory}/${slug}.md`, "utf-8");
  const { data: formatter, content } = matter(markdownMeta);
  return {
    formatter,
    content,
  };
}

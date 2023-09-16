import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { PostProps } from "../interfaces/post";

const PostCard: FC<PostProps> = ({ cover_image, title, date, slug }) => {
  const router = useRouter();

  return (
    <div
      className="rounded-xl border-2 overflow-hidden cursor-pointer"
      onClick={() => router.push(`/blog/${slug}`)}
    >
      <Image
        src={cover_image}
        alt={title}
        loading="lazy"
        width={400}
        height={400}
        className="w-auto h-auto"
      />
      <div className="p-2">
        <h2 className="font-normal text-sm">{date}</h2>
        <h3 className="font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default PostCard;

import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    format: "mdx",
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [rehypeParse, rehypeStringify, rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);

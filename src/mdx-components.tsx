import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { NavigationButton } from "@/components/navigation-button";
import Clink from "@/components/clink";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { ImageProps } from "next/image";
import BookCard from "@/components/book-card";
import Container from "@/components/container";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    BookCard,
    Clink,
    NavigationButton,
    Container,
    img: (props: ImageProps) => <ImageZoom {...props} />,
    ...components,
  };
}

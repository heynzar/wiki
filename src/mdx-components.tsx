import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import ContentNavigation from "@/components/content-navigation";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ContentNavigation,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}

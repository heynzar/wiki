import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import ContentNavigation from "@/components/content-navigation";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ContentNavigation,
    img: (props: ComponentProps<"img">) => (
      <ImageZoom
        alt={props.alt ?? "wiki nzar dev visual"}
        width={props.width as number | undefined}
        height={props.height as number | undefined}
        zoomInProps={props}
      />
    ),
    ...components,
  };
}

import { config } from "~/config";
import type { MetaFunction } from "@remix-run/cloudflare";

interface Metadata {
  title?: string;
  description?: string;
  image?: string;
}

type FormattedMetadata = ReturnType<MetaFunction>;

export function formatSeoTitle(title?: string) {
  if (!title) return config.seo.default.title;
  return `${title} | ${config.seo.default.title}`;
}

export function formatMetadata(metadata: Metadata) {
  return [
    {
      title: formatSeoTitle(metadata.title),
    },
    {
      name: "description",
      content: metadata?.description ?? config.seo.default.description,
    },
    {},
  ];
}

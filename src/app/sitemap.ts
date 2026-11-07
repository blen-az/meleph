import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/site";

const ROUTES = [
  "/",
  "/solutions",
  "/solutions/ai-customer-agent",
  "/solutions/custom-ai-systems",
  "/products",
  "/products/lekiray",
  "/work",
  "/about",
  "/about/how-we-work",
  "/get-started",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...ROUTES, ...PROJECTS.map((project) => `/work/${project.slug}`)].map((path) => ({
    url: new URL(path, SITE.url).toString(),
  }));
}

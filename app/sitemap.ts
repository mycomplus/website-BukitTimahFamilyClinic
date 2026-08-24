import type { MetadataRoute } from "next";
const paths = ["", "/about", "/doctors", "/services", "/contact", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap { return paths.map(path => ({ url: `https://bukittimahfamilyclinic.sg${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 })); }

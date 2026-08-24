import { Header } from "./Header";
import { Footer } from "./Footer";
import { clinic } from "../data/clinic";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><div className="mobile-actions"><a href={clinic.phoneHref}>☎<span>Call</span></a><a href={clinic.googleMapsUrl} target="_blank" rel="noreferrer">⌖<span>Directions</span></a></div></>;
}

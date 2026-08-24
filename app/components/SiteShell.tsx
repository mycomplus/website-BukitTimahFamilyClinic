import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><div className="mobile-actions"><a href="tel:+6564698816">☎<span>Call</span></a><a href="/contact">⌖<span>Contact</span></a></div></>;
}

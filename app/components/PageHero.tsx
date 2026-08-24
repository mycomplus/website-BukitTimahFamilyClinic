export function PageHero({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p>{copy}</p></div></section>;
}

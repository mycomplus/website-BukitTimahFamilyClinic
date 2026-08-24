"use client";

import { useState } from "react";
import { clinic } from "../data/clinic";

const links = [["Home", "/"], ["About Us", "/about"], ["Our Doctors", "/doctors"], ["Services", "/services"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="utility"><div className="container utility-inner"><span>⌖ Bukit Timah, Singapore</span><span>☎ {clinic.phone}</span><span>◷ Clinic hours available by phone</span></div></div>
    <header className="site-header">
      <div className="nav-wrap">
        <a href="/" className="brand" aria-label={`${clinic.name} home`}><img src="/brand/clinic-logo.png" alt={clinic.name} /></a>
        <nav aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="button button-primary nav-cta" href={clinic.phoneHref}>Contact Clinic</a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
      {open && <div className="mobile-menu">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a className="button button-primary" href={clinic.phoneHref}>Call {clinic.phone}</a></div>}
    </header>
  </>;
}

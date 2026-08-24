import type { Metadata } from "next";
import { ContactCTA } from "../components/ContactCTA";
import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "About Us | Bukit Timah Family Clinic & Surgery", description: "Learn about our patient-focused neighbourhood family clinic in Bukit Timah." };

export default function AboutPage() {
  return <SiteShell><PageHero eyebrow="About us" title="A family clinic at the heart of Bukit Timah" copy="Bukit Timah Family Clinic & Surgery provides primary healthcare to individuals and families within the local community." />
    <section className="section"><div className="container reading-grid"><div><p className="eyebrow">Our philosophy</p><h2>Care built on trust</h2></div><div><p>We believe primary healthcare is most effective when patients feel heard, understood and supported. Our approach combines professional medical care with the familiarity and continuity of a neighbourhood family clinic.</p><p>Whether you are visiting for an everyday health concern, preventive care or ongoing health management, our team aims to provide clear guidance and thoughtful care throughout your healthcare journey.</p></div></div></section>
    <section className="section values-section"><div className="container"><div className="section-head"><div><p className="eyebrow">Our values</p><h2>What guides our care</h2></div></div><div className="values-grid"><article><b>01</b><h3>Personal</h3><p>Every patient deserves to feel heard and understood.</p></article><article><b>02</b><h3>Clear</h3><p>Medical information should be explained in a way patients can understand.</p></article><article><b>03</b><h3>Continuous</h3><p>Good healthcare goes beyond one consultation and supports long-term wellbeing.</p></article></div></div></section>
    <section className="section"><div className="container ahm-panel"><div><p className="eyebrow">Our group</p><h2>Supported by Asia Healthcare Management</h2><p>Bukit Timah Family Clinic &amp; Surgery is part of Asia Healthcare Management (AHM), supporting modern primary care clinics and patient-focused healthcare operations.</p></div><a className="button button-secondary" href="https://ahm.sg/" target="_blank" rel="noreferrer">Learn about AHM →</a></div></section><ContactCTA /></SiteShell>;
}

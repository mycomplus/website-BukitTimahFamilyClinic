import type { Metadata } from "next";
import { ContactCTA } from "../components/ContactCTA";
import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";
import { serviceGroups, services } from "../data/services";

export const metadata: Metadata = { title: "Services | Bukit Timah Family Clinic & Surgery", description: "Explore provisional primary care service categories and contact the clinic to confirm availability." };

export default function ServicesPage() {
  return <SiteShell><PageHero eyebrow="Our services" title="Primary care for every stage of life" copy="Explore the healthcare service categories available at Bukit Timah Family Clinic & Surgery. Please contact us to confirm current availability." />
    <section className="section"><div className="container grouped-services">{serviceGroups.map((group,i) => <article key={group.title}><div className="group-number">0{i+1}</div><div className="group-copy"><h2>{group.title}</h2><p>{group.description}</p></div><div className="group-items">{group.ids.map(id => services.find(service => service.id === id)).filter(Boolean).map(service => <div key={service!.id}><span>{service!.icon}</span><div><h3>{service!.title}</h3><p>{service!.description}</p></div></div>)}</div></article>)}<p className="content-note">These are provisional service categories. Please contact the clinic to confirm availability and suitability. This website does not provide personalised medical advice.</p></div></section><ContactCTA /></SiteShell>;
}

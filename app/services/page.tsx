import type { Metadata } from "next";
import { ContactCTA } from "../components/ContactCTA";
import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";
import { allServices, serviceGroups } from "../data/services";

export const metadata: Metadata = {
  title: "Medical Services | Bukit Timah Family Clinic & Surgery",
  description: "Explore family medicine, health screening, chronic care, dermatology, vaccination and travel-health services available at our Bukit Timah clinic.",
};

export default function ServicesPage() {
  return <SiteShell>
    <PageHero eyebrow="Our services" title="Primary care for every stage of life" copy={`Explore ${allServices.length} healthcare services offered at Bukit Timah Family Clinic & Surgery, organised to help you find the right area of care.`} />
    <section className="services-index"><div className="container services-index-inner"><strong>Browse services</strong>{serviceGroups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}</div></section>
    <section className="section"><div className="container grouped-services comprehensive-services">
      {serviceGroups.map((group, index) => <article id={group.id} key={group.id}>
        <div className="group-number">0{index + 1}</div>
        <div className="group-copy"><span className="service-icon">{group.icon}</span><h2>{group.title}</h2><p>{group.description}</p></div>
        <div className="service-list">{group.services.map(service => <div className="service-pill" key={service}><span aria-hidden="true">✓</span>{service}</div>)}</div>
      </article>)}
      <div className="service-guidance"><strong>Before your visit</strong><p>Availability may vary and some services require an appointment, preparation or clinical assessment. Please call the clinic before visiting. For medical emergencies in Singapore, call 995.</p></div>
    </div></section>
    <ContactCTA />
  </SiteShell>;
}

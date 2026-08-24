import { ContactCTA } from "./components/ContactCTA";
import { SiteShell } from "./components/SiteShell";
import { clinic } from "./data/clinic";
import { faq } from "./data/faq";
import { services } from "./data/services";

const principles = [
  ["◎", "Attentive consultations", "We take time to understand your concerns and explain the next steps clearly."],
  ["↻", "Continuity of care", "Build an ongoing relationship with a clinic that understands your health journey."],
  ["♡", "Family-focused", "Primary healthcare designed to support different generations and stages of life."],
  ["⌖", "Conveniently located", "Accessible care within the Bukit Timah community."],
];

export default function Home() {
  return <SiteShell>
    <section className="hero" id="top"><div className="hero-grid">
      <div className="hero-copy"><p className="eyebrow">Your family clinic in Bukit Timah</p><h1>Trusted family care, <span>close to home.</span></h1><p className="hero-lede">Bukit Timah Family Clinic &amp; Surgery provides trusted primary care for individuals and families in the Bukit Timah community, with a focus on attentive consultations, continuity of care and clear medical guidance.</p><div className="hero-actions"><a className="button button-primary" href={clinic.phoneHref}>Call {clinic.phone}</a><a className="button button-secondary" href="/contact">Clinic information <span aria-hidden="true">→</span></a></div><div className="trust-note"><span aria-hidden="true">✓</span> Thoughtful care for every stage of life</div></div>
      <div className="hero-visual"><div className="hero-blob" aria-hidden="true" /><img src="/images/family-consultation.png" alt="A family speaking with a doctor in a bright consultation room" /><div className="floating-card"><span className="floating-icon">✚</span><div><strong>Family-focused</strong><small>Primary care in your community</small></div></div></div>
    </div></section>

    <section className="quick-info"><div className="container quick-grid"><div><span>⌖</span><small>Location</small><strong>Bukit Timah, Singapore</strong></div><div><span>☎</span><small>Call us</small><a href={clinic.phoneHref}>{clinic.phone}</a></div><div><span>◷</span><small>Opening hours</small><strong>Call to confirm</strong></div><div><span>→</span><small>Plan your visit</small><a href="/contact">Clinic information</a></div></div></section>

    <section className="section" id="about"><div className="container split-intro"><div><p className="eyebrow">About our clinic</p><h2>Healthcare built around people.</h2></div><div><p>At Bukit Timah Family Clinic &amp; Surgery, we believe good primary care begins with understanding the person behind every consultation. Our clinic supports individuals and families through everyday health concerns, preventive care and ongoing health management.</p><p>Our goal is to provide care that is clear, thoughtful and personal — helping patients understand their health and make informed decisions with confidence.</p><a className="text-link" href="/about">About our clinic →</a></div></div></section>

    <section className="section services-section" id="services"><div className="container"><div className="section-head"><div><p className="eyebrow">Our services</p><h2>Care for everyday health needs</h2></div><p>From everyday consultations to preventive healthcare and ongoing health management, our clinic supports patients across different stages of life.</p></div><div className="service-grid">{services.slice(0,6).map(service => <article className="service-card" key={service.id}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><a href="/services">Learn more →</a></article>)}</div><div className="center-action"><a className="button button-secondary" href="/services">View all services</a></div><p className="content-note">Service availability is subject to confirmation with the clinic and clinical assessment where applicable.</p></div></section>

    <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Our approach</p><h2>Care that feels personal</h2></div><p>A calm, clear approach to primary care that supports you beyond a single consultation.</p></div><div className="principle-grid">{principles.map(([icon,title,copy]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section journey-section"><div className="container"><div className="section-head"><div><p className="eyebrow">Visiting our clinic</p><h2>Simple, personal care</h2></div></div><div className="journey-grid"><article><b>01</b><h3>Contact</h3><p>Call the clinic to enquire about availability and your visit.</p></article><article><b>02</b><h3>Visit</h3><p>Meet our medical team for consultation and assessment.</p></article><article><b>03</b><h3>Follow up</h3><p>Receive guidance on treatment, monitoring or follow-up where required.</p></article></div></div></section>

    <section className="section faq-section"><div className="container faq-layout"><div><p className="eyebrow">Frequently asked questions</p><h2>Helpful information before your visit</h2><p>For the latest clinic information, our team is happy to help by phone.</p></div><div className="faq-list">{faq.map((item,i) => <details key={item.question} open={i===0}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}</div></div></section>
    <ContactCTA />
  </SiteShell>;
}

import type { Metadata } from "next";
import { OpeningHours } from "../components/OpeningHours";
import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";
import { clinic } from "../data/clinic";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bukit Timah Family Clinic & Surgery",
  description: `Visit us at ${clinic.fullAddress}, or call ${clinic.phone} for appointments and enquiries.`,
};

export default function ContactPage() {
  return <SiteShell>
    <PageHero title="Contact our clinic" copy="For appointments, clinic information or general enquiries, please get in touch with our team." />
    <section className="section contact-section"><div className="container contact-grid">
      <div className="contact-details">
        <article><span>☎</span><div><small>Call us</small><h2>{clinic.phone}</h2><p>For appointments and general enquiries.</p><a className="button button-primary" href={clinic.phoneHref}>Call clinic</a></div></article>
        <article><span>⌖</span><div><small>Address</small><h2>{clinic.address.line1}</h2><p>Singapore {clinic.address.postalCode}</p><a className="button button-secondary" href={clinic.googleMapsUrl} target="_blank" rel="noreferrer">Get directions</a></div></article>
        <article id="hours"><span>◷</span><div className="hours-card"><small>Opening hours</small><h2>Plan your visit</h2><OpeningHours /></div></article>
      </div>
      <div className="map-embed"><iframe title={`Map showing ${clinic.name} at ${clinic.fullAddress}`} src={clinic.googleMapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={clinic.googleMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps →</a></div>
    </div></section>
    <section className="section enquiry-section"><div className="container enquiry-grid"><div><p className="eyebrow">General enquiries</p><h2>Send an enquiry</h2><p>Send a general enquiry to our clinic team and we will get back to you as soon as we can.</p><div className="notice"><strong>Your privacy matters</strong><p>Please do not include sensitive medical information in any general website enquiry.</p></div></div><ContactForm /></div></section>
    <section className="emergency-note"><div className="container"><strong>For emergencies in Singapore</strong><p>This website is not intended for medical emergencies. Call 995 or visit the nearest Emergency Department.</p></div></section>
  </SiteShell>;
}

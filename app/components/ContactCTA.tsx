import { clinic } from "../data/clinic";

export function ContactCTA() {
  return <section className="contact-cta"><div className="container contact-cta-inner"><div><p className="eyebrow">Here when you need us</p><h2>Need to speak with our clinic?</h2><p>Contact our team for clinic information, appointments or general enquiries.</p></div><div className="contact-cta-actions"><a className="button button-light" href={clinic.phoneHref}>Call {clinic.phone}</a><a className="button button-outline-light" href="/contact">Clinic information</a></div></div></section>;
}

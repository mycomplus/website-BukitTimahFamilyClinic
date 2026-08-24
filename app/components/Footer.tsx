import { clinic } from "../data/clinic";

export function Footer() {
  return <footer className="footer" id="contact">
    <div className="container footer-grid">
      <div className="footer-brand"><img src="/brand/clinic-logo.png" alt={clinic.name} /><p>Thoughtful primary care for individuals and families in the Bukit Timah community.</p></div>
      <div><h3>Clinic</h3><a href="/">Home</a><a href="/about">About Us</a><a href="/doctors">Our Doctors</a><a href="/services">Services</a><a href="/contact">Contact</a></div>
      <div><h3>Visit us</h3><a href={clinic.googleMapsUrl} target="_blank" rel="noreferrer">{clinic.address.line1}<br />Singapore {clinic.address.postalCode}</a><a href={clinic.phoneHref}>{clinic.phone}</a><a href="/contact#hours">View opening hours</a></div>
      <div><h3>Part of AHM</h3><p>A clinic under Asia Healthcare Management.</p><a href={clinic.ahmUrl} target="_blank" rel="noreferrer">Visit AHM →</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span><span><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></span></div>
  </footer>;
}

import type { Metadata } from "next";
import { ContactCTA } from "../components/ContactCTA";
import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";
import { doctors } from "../data/doctors";

export const metadata: Metadata = { title: "Our Doctors | Bukit Timah Family Clinic & Surgery", description: "Meet the medical professionals caring for patients at our clinic." };

export default function DoctorsPage() {
  return <SiteShell><PageHero eyebrow="Our doctors" title="Meet the medical professionals caring for our patients" copy="Approved doctor profiles, qualifications and clinical interests will be published here once confirmed by the clinic." />
    <section className="section"><div className="container">{doctors.length === 0 ? <div className="pending-panel"><span>✚</span><h2>Doctor profiles are being prepared</h2><p>We are confirming the latest doctor information before publication. Please contact our clinic team if you would like to enquire about the attending doctor.</p><a className="button button-primary" href="tel:+6564698816">Call +65 6469 8816</a></div> : null}</div></section><ContactCTA /></SiteShell>;
}

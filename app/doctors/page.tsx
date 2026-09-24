import type { Metadata } from "next";
import { ContactCTA } from "../components/ContactCTA";
import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";
import { doctors } from "../data/doctors";

export const metadata: Metadata = { title: "Dr. Vincent Chia | Bukit Timah Family Clinic & Surgery", description: "Learn about Dr. Vincent Chia, Family Physician at Bukit Timah Family Clinic & Surgery." };

export default function DoctorsPage() {
  return <SiteShell><PageHero eyebrow="Our doctor" title="Meet Dr. Vincent Chia" copy="Learn more about our family physician's qualifications and healthcare experience." />
    <section className="section doctor-section">
      <div className="container doctor-list">
        {doctors.map((doctor) => <article className="doctor-profile" key={doctor.name}>
          <div className="doctor-portrait">
            <img src={doctor.image} alt={doctor.imageAlt} width="1200" height="1643" />
            <span className="doctor-role">{doctor.title}</span>
          </div>
          <div className="doctor-copy">
            <p className="eyebrow">{doctor.title}</p>
            <h2>{doctor.name}</h2>
            <div className="doctor-qualifications" aria-label={`${doctor.name}'s qualifications`}>
              {doctor.qualifications.map((qualification) => <div className="doctor-qualification" key={qualification.abbreviation}>
                <strong>{qualification.abbreviation}</strong>
                <span>{qualification.detail}</span>
              </div>)}
            </div>
            <div className="doctor-bio">
              {doctor.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </article>)}
      </div>
    </section><ContactCTA /></SiteShell>;
}

import Section from "../components/Section";
import { resume } from "../data/resume";

export default function Contact() {
  const p = resume.person;

  return (
    <Section title="Contact">
      <div className="item">
        <div>Email: <a href={`mailto:${p.email}`}>{p.email}</a></div>
        <div>Phone: <a href={`tel:${p.phone}`}>{p.phone}</a></div>
        <div style={{ marginTop: 8 }}>
          <a href={p.links.website} target="_blank" rel="noreferrer">Website</a>{" · "}
          <a href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>{" · "}
          <a href={p.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </Section>
  );
}

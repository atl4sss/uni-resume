import Section from "../components/Section";
import { resume } from "../data/resume";

export default function Awards() {
  return (
    <Section title="Awards">
      {resume.awards.map((a, idx) => (
        <div className="item" key={idx}>
          <b>{a.title}</b>
          <div className="row">
            <span>{a.org}</span>
            <span>•</span>
            <span>{a.year}</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 6 }}>
            {a.details}
          </div>
        </div>
      ))}
    </Section>
  );
}

import Section from "../components/Section";
import { resume } from "../data/resume";

export default function Activities() {
  return (
    <Section title="Activities">
      {resume.activities.map((a, idx) => (
        <div className="item" key={idx}>
          <b>{a.title}</b>
          <div className="row">
            <span>{a.role}</span>
            <span>•</span>
            <span>{a.dates}</span>
          </div>
          <ul>
            {a.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </Section>
  );
}

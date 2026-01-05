import Section from "../components/Section";
import Tag from "../components/Tag";
import { resume } from "../data/resume";

export default function Home() {
  const p = resume.person;

  return (
    <>
      <div className="hero">
        <div className="card">
          <div className="inner">
            <h1 className="h1">{p.name}</h1>
            <p className="sub">
              {p.title} • {p.location}
            </p>

            <div className="hr" />

            <div className="meta">
              <div>Email: <a href={`mailto:${p.email}`}>{p.email}</a></div>
              <div>Phone: <a href={`tel:${p.phone}`}>{p.phone}</a></div>
              <div>
                Links:{" "}
                <a href={p.links.website} target="_blank" rel="noreferrer">Website</a>{" · "}
                <a href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>{" · "}
                <a href={p.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <Section title="Quick highlights">
          {resume.highlight.map((x, i) => (
            <div key={i} className="item">
              {x}
            </div>
          ))}
        </Section>
      </div>

      <div style={{ height: 16 }} />

      <Section title="Skills">
        <div className="tags">
          {resume.skills.map((s) => <Tag key={s}>{s}</Tag>)}
        </div>
      </Section>
    </>
  );
}

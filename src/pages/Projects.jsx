    import Section from "../components/Section";
import Tag from "../components/Tag";
import { resume } from "../data/resume";

export default function Projects() {
  return (
    <Section title="Projects">
      {resume.projects.map((p, idx) => (
        <div className="item" key={idx}>
          <b>{p.name}</b>
          <div className="row">
            <span>{p.role}</span>
            <span>•</span>
            <span>{p.dates}</span>
            {p.links?.length ? (
              <>
                <span>•</span>
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </>
            ) : null}
          </div>
          <ul>
            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="tags">
            {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      ))}
    </Section>
  );
}

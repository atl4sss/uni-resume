import Section from "../components/Section";
import { resume } from "../data/resume";

function List({ items }) {
  return (
    <div>
      {items.map((it, idx) => (
        <div className="item" key={idx}>
          <b>{it.school}</b>
          <div className="row">
            <span>{it.degree}</span>
            <span>•</span>
            <span>{it.dates}</span>
          </div>
          <ul>
            {it.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <Section title="Education">
        <List items={resume.education} />
      </Section>

      <div style={{ height: 16 }} />

      <Section
        title="Download"
        right={<a href="#" onClick={(e)=>e.preventDefault()}>PDF (soon)</a>}
      >
        <div className="item">
          сюда потом прикрутим реальный PDF или автогенерацию
        </div>
      </Section>
    </>
  );
}

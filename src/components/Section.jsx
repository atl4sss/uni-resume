export default function Section({ title, right, children }) {
  return (
    <div className="card">
      <div className="inner">
        <div className="sectionTitle">
          <h2>{title}</h2>
          {right ?? null}
        </div>
        {children}
      </div>
    </div>
  );
}

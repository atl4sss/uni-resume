export default function Marquee({ items = [], seconds = 18 }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" style={{ "--dur": `${seconds}s` }}>
      <div className="marqueeTrack">
        {doubled.map((x, i) => (
          <span key={i} className="marqueeItem">{x}</span>
        ))}
      </div>
    </div>
  );
}
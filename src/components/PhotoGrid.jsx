import { useEffect, useState } from "react";
import SpotlightCard from "./SpotlightCard";

export default function PhotoGrid({ items }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="photoGrid">
        {items.map((it) => (
          <SpotlightCard key={it.id} className="photoCard">
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              onClick={() => setOpen(it)}
              style={{ cursor: "zoom-in" }}
            />
          </SpotlightCard>
        ))}
      </div>

      {open && (
        <div
          className="lbBack"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <div className="lbInner" onClick={(e) => e.stopPropagation()}>
            <button className="lbClose" onClick={() => setOpen(null)}>
              ✕
            </button>
            <img className="lbImg" src={open.src} alt={open.alt} />
          </div>
          <div className="lbHint">ESC or click outside to close</div>
        </div>
      )}
    </>
  );
}
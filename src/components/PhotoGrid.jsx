import { useState } from "react";
import SpotlightCard from "./SpotlightCard";

export default function PhotoGrid({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="photoGrid">
        {items.map((it) => (
          <SpotlightCard
            key={it.id}
            className="photoCard"
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              style={{ cursor: "zoom-in" }}
              onClick={() => setOpen(it)}
            />
          </SpotlightCard>
        ))}
      </div>

      {open && (
        <div className="modalBack" onClick={() => setOpen(null)}>
          <img className="modalImg" src={open.src} alt={open.alt} />
          <div className="modalHint">click anywhere to close</div>
        </div>
      )}
    </>
  );
}
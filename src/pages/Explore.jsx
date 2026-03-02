import Section from "../components/Section";
import OrbitalExplorer from "../components/OrbitalExplorer";
import { orbitItems, orbitCategories } from "../data/orbit";

export default function Explore() {
  return (
    <>
      <Section title="Deep dive">
        <div className="item">
          click any node to open details. use filters to focus on one interest.
        </div>
        <OrbitalExplorer items={orbitItems} categories={orbitCategories} />
      </Section>
    </>
  );
}
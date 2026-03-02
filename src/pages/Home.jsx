// src/pages/Home.jsx
import Section from "../components/Section";
import PhotoGrid from "../components/PhotoGrid";
import { resume } from "../data/resume";
import { gallery } from "../data/gallery";
import RadialOrbitalTimeline from "../components/RadialOrbitalTimeline";
import { timelineData } from "../data/timeline";

function PillLink({ href, children }) {
  return (
    <a className="pillLink" href={href}>
      {children}
    </a>
  );
}

function Highlight({ title, desc }) {
  return (
    <div className="hl">
      <div className="hlTitle">{title}</div>
      <div className="hlDesc">{desc}</div>
    </div>
  );
}

export default function Home() {
  const p = resume.person;

  const photos = {
    robotics: gallery.filter((x) => x.category === "robotics"),
    design: gallery.filter((x) => x.category === "graphic-design"),
    biomed: gallery.filter((x) => x.category === "biomedicine"),
    startups: gallery.filter((x) => x.category === "ai-startups"),
  };

  return (
    <>
      {/* HERO */}
      <div className="hero2">
        <div className="card">
          <div className="inner">
            <div className="kicker">Student • Almaty, Kazakhstan • NIS Almaty-Medeu</div>

            <h1 className="h1" style={{ marginBottom: 8 }}>{p.name}</h1>

            <p className="sub" style={{ marginBottom: 12 }}>
              Aspiring 12th grade student focused on <b>graphic design</b>, <b>biomedicine</b>, <b>AI & startups</b>, and <b>robotics</b>.
            </p>

            <div className="bullets">
              <div className="bullet">
                I build in parallel — but always with real outputs: internships, competitions, and shipped projects.
              </div>
              <div className="bullet">
                Use <b>Explore</b> to open details and connections between activities.
              </div>
            </div>

            <div className="actions">
              <a className="btnPrimary" href="#explore">Explore ↓</a>
              <a className="btnGhost" href="#ai-startups">Startups</a>
              <a className="btnGhost" href={`mailto:${p.email}`}>Email</a>
              <a className="btnGhost" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btnGhost" href={p.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="stack">
          <div className="card">
            <div className="inner">
              <div className="sectionTitle" style={{ marginBottom: 8 }}>
                <h2>Highlights</h2>
              </div>

              <div className="hlGrid">
                <Highlight
                  title="FTC Worlds — Inspire Award (3rd place)"
                  desc="Reached world stage in Houston after long teamwork: building robots, calculations, branding, outreach."
                />
                <Highlight
                  title="Internship: medical analysis center (ELISA)"
                  desc="Worked with ELISA & other methods to detect hepatitis and autoimmune diseases across Kazakhstan."
                />
                <Highlight
                  title="Startups: MyScan, Mammo, Unison (CTO)"
                  desc="MyScan tested on real patient scans; Mammo teaches breast self-checks; Unison piloted with KPMG."
                />
                <Highlight
                  title="Team Panheya"
                  desc="New lineup won Central Asia stage and is preparing for the world championship."
                />
              </div>

              <div className="hr" />

              <div className="sectionTitle" style={{ marginBottom: 8 }}>
                <h2>Jump</h2>
              </div>
              <div className="jumpLinks">
                <PillLink href="#graphic-design">Graphic design</PillLink>
                <PillLink href="#biomedicine">Biomedicine</PillLink>
                <PillLink href="#ai-startups">AI & startups</PillLink>
                <PillLink href="#robotics">Robotics</PillLink>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="inner">
              <div className="sectionTitle" style={{ marginBottom: 8 }}>
                <h2>About</h2>
              </div>
              <div className="item" style={{ borderTop: "none", paddingTop: 0 }}>
                {resume.intro}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 16 }} />

      {/* DESIGN */}
      <div id="graphic-design" />
      <Section title="Graphic Design">
        <div className="item">
          <p style={{ marginTop: 0 }}>
            This hobby began in childhood, when I watched my brother work on design. Since then, I’ve been fascinated by this field,
            and it became the gateway through which I started developing in other areas.
          </p>
          <p>
            I work in <b>Photoshop</b> and also use <b>Figma</b> and <b>Canva</b>. Design is sometimes a source of income for me,
            but also a way to express my ideas. I believe that through design, you can say much more than with words alone.
          </p>
          <p style={{ marginBottom: 0 }}>
            <b>A few of my favorite works</b> from my portfolio of <b>100+ projects</b>:
          </p>
          <ul>
            <li>Japanese-style game team page visual</li>
            <li>Recent merch design for my robotics team</li>
          </ul>
        </div>
        <PhotoGrid items={photos.design} />
      </Section>

      <div style={{ height: 16 }} />

      {/* BIOMED */}
      <div id="biomedicine" />
      <Section title="Biomedicine">
        <div className="item">
          <p style={{ marginTop: 0 }}>
            I had several defining moments when life pushed me toward studying biomedicine. I witnessed diabetes, Alzheimer’s, migraines,
            and meningitis firsthand. Rather than frightening me, these experiences sparked my curiosity to research and find solutions.
          </p>
          <p>
            I interned at a leading medical analysis center, where I used <b>ELISA</b> and other methods to detect hepatitis and various
            autoimmune diseases in patients from across Kazakhstan.
          </p>
          <p style={{ marginBottom: 0 }}>
            Now, researching public health is also part of my broader activities, especially through my two startups.
          </p>
        </div>
        <PhotoGrid items={photos.biomed} />
      </Section>

      <div style={{ height: 16 }} />

      {/* AI & STARTUPS */}
      <div id="ai-startups" />
      <Section title="AI and Startups">
        <div className="item">
          <p style={{ marginTop: 0 }}>
            My journey into startups began after discovering problems in radiology, which led me to build AI software for image recognition.
            My startup, <b>MyScan</b> (link), has completed an international incubator and is now being tested on real patient scans.
          </p>
          <p>
            I am also developing <b>Mammo</b> (link), an app that teaches women breast self-checks, and serve as <b>CTO of Unison</b>,
            an AI-driven recruitment platform piloted with <b>KPMG</b>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Competing in startup battles showed me how a highly competitive environment accelerates growth — reinforcing my belief that
            AI-powered entrepreneurship is key to solving major global problems.
          </p>
        </div>
        <PhotoGrid items={photos.startups} />
      </Section>

      <div style={{ height: 16 }} />

      {/* ROBOTICS */}
      <div id="robotics" />
      <Section title="Robotics">
        <div className="item">
          <p style={{ marginTop: 0 }}>
            Robotics became a major interest for me because it allowed me to study STEM while improving technology and contributing to society.
          </p>
          <p>
            We organized <b>GIRLS GO STEM</b>, bringing together a large audience of women where top speakers shared motivation and insights.
            Through long teamwork — building robots, calculations, branding, and inspiring local youth — we reached the world stage in Houston
            and won <b>3rd place Inspire Award</b>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Now I am part of <b>Team Panheya</b>, where our new lineup has already won the Central Asia stage and is preparing for the world championship.
          </p>
        </div>
        <PhotoGrid items={photos.robotics} />
      </Section>

      <div style={{ height: 16 }} />

      {/* EXPLORE (FULLSCREEN LIKE 21st) */}
      <div id="explore" className="fullBleed">
        <div className="exploreTop">
          <div className="exploreTitle">Explore (deep dive)</div>
          <div className="exploreSub">
            click nodes to open details • click background to reset • connected nodes pulse
          </div>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </>
  );
}
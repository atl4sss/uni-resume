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

function AchievementCard({ title, impact, tags }) {
  return (
    <div className="ach">
      <div className="achTitle">{title}</div>
      <div className="achImpact">{impact}</div>
      <div className="achTags">
        {tags.map((t) => (
          <span key={t} className="achTag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailGateway() {
  const cards = [
    {
      id: "biomedicine",
      title: "Biomedicine",
      desc: "ELISA internship, motivation, public health",
      emoji: "🧬",
    },
    {
      id: "robotics",
      title: "Robotics",
      desc: "FTC, Inspire Award, outreach, Team Panheya",
      emoji: "🤖",
    },
    {
      id: "ai-startups",
      title: "AI & Startups",
      desc: "MyScan, Mammo, Unison (CTO), pitching",
      emoji: "🚀",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      desc: "Portfolio highlights, tools, favorite works",
      emoji: "🎨",
    },
  ];

  return (
    <div className="gateway">
      <div className="gatewayHead">
        <div className="gatewayTitle">Choose a track to explore in detail</div>
        <div className="gatewaySub">
          after the orbit, pick one section — or read all below
        </div>
      </div>

      <div className="gatewayGrid">
        {cards.map((c) => (
          <a key={c.id} className="gatewayCard" href={`#${c.id}`}>
            <div className="gatewayTop">
              <div className="gatewayEmoji">{c.emoji}</div>
              <div className="gatewayName">{c.title}</div>
            </div>
            <div className="gatewayDesc">{c.desc}</div>
            <div className="gatewayGo">Open →</div>
          </a>
        ))}
      </div>
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
      {/* OVERVIEW */}
      <div className="hero2">
        <div className="card">
          <div className="inner">
            <div className="heroHead">
              <img
                className="avatar"
                src="/photos/profile.jpg"
                alt="Kuanyshbek portrait"
              />
              <div>
                <div className="kicker">
                  Student • Almaty, Kazakhstan • NIS Almaty-Medeu
                </div>
                <h1 className="h1" style={{ marginBottom: 8 }}>
                  {p.name}
                </h1>
              </div>
            </div>

            <p className="sub" style={{ marginBottom: 12 }}>
              Aspiring 12th grade student focused on <b>biomedicine</b>,{" "}
              <b>robotics</b>, <b>AI & startups</b>, and <b>graphic design</b>.
            </p>

            <div className="chips">
              <span className="chip">Robotics (FTC)</span>
              <span className="chip">Biomed Internship (ELISA)</span>
              <span className="chip">AI / Startups</span>
              <span className="chip">Design (100+ works)</span>
            </div>

            <div className="miniNote">
              Interested in: <b>CS / AI / Biomedical Engineering</b> • Looking
              for programs that value <b>practical work</b>.
            </div>

            <div className="bullets" style={{ marginTop: 12 }}>
              <div className="bullet">
                I build in parallel — but always with real outputs: internships,
                competitions, and shipped projects.
              </div>
              <div className="bullet">
                Use <b>Explore</b> to open details and connections between
                activities.
              </div>
            </div>

            <div className="actions">
              <a className="btnPrimary" href="#explore">
                Explore ↓
              </a>
              <a className="btnGhost" href="#ai-startups">
                Startups
              </a>
              <a className="btnGhost" href={`mailto:${p.email}`}>
                Email
              </a>
              <a
                className="btnGhost"
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btnGhost"
                href={p.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="miniCard">
              <div className="miniTitle">Quick snapshot</div>
              <div className="miniRow">
                <b>FTC:</b> Worlds (Houston) • Inspire Award
              </div>
              <div className="miniRow">
                <b>Biomed:</b> ELISA internship
              </div>
              <div className="miniRow">
                <b>Startups:</b> MyScan • Mammo • Unison (CTO)
              </div>
            </div>
          </div>
        </div>

        <div className="stack">
          <div className="card">
            <div className="inner">
              <div className="sectionTitle" style={{ marginBottom: 8 }}>
                <h2>Highlights</h2>
              </div>

              <div className="achGrid">
                <AchievementCard
                  title="FTC Worlds — Inspire Award (3rd place)"
                  impact="Houston world stage • long teamwork: building, calculations, branding, outreach"
                  tags={["Robotics", "Leadership", "Community"]}
                />
                <AchievementCard
                  title="Medical analysis center internship (ELISA)"
                  impact="Detected hepatitis & autoimmune diseases • patients across Kazakhstan"
                  tags={["Biomed", "Lab work", "ELISA"]}
                />
                <AchievementCard
                  title="Startups: MyScan • Mammo • Unison (CTO)"
                  impact="MyScan tested on real scans • Unison piloted with KPMG"
                  tags={["AI", "Product", "CTO"]}
                />
                <AchievementCard
                  title="Team Panheya"
                  impact="Won Central Asia stage • preparing for world championship"
                  tags={["FTC", "Competition", "Engineering"]}
                />
              </div>

              <div className="hr" />

              <div className="sectionTitle" style={{ marginBottom: 8 }}>
                <h2>Jump</h2>
              </div>

              <div className="jumpLinks">
                <PillLink href="#biomedicine">Biomedicine</PillLink>
                <PillLink href="#robotics">Robotics</PillLink>
                <PillLink href="#ai-startups">AI & startups</PillLink>
                <PillLink href="#graphic-design">Graphic design</PillLink>
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

      <div style={{ height: 18 }} />

      {/* ORBITAL (DEEP DIVE) */}
      <div id="explore" />
      <Section title="Explore (deep dive)">
        <div className="item" style={{ borderTop: "none", paddingTop: 0 }}>
          click nodes to open details • click background to reset • connected
          nodes pulse
        </div>

        <div style={{ marginTop: 12 }}>
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </Section>

      <div style={{ height: 18 }} />

      {/* GATEWAY TO DETAILS */}
      <DetailGateway />

      <div style={{ height: 18 }} />

      {/* DETAILS (order: biomed -> robotics -> startups -> design) */}

      <div id="biomedicine" />
      <Section title="Biomedicine">
        <div className="item">
          <p>
            I had several defining moments when life pushed me toward studying
            biomedicine — witnessing diabetes, Alzheimer’s, migraines, and
            meningitis firsthand. Rather than frightening me, these experiences
            sparked my curiosity to research and find solutions.
          </p>

          <p>
            I interned at a leading medical analysis center, where I used{" "}
            <b>ELISA</b> and other methods to detect hepatitis and autoimmune
            diseases in patients from across Kazakhstan.
          </p>

          <p>
            Now, public health research and prevention are part of my broader
            activities — especially through my startup work.
          </p>

          <div className="niceList">
            <div>
              <b>Core skills:</b> lab workflow • accuracy • documentation •
              responsibility
            </div>
            <div>
              <b>Experience:</b> medical analysis processes and real patient
              samples
            </div>
            <div>
              <b>Direction:</b> prevention and scalable impact in public health
            </div>
          </div>

          <div className="takeaways">
            <div className="take">
              <b>Lab:</b> ELISA + analysis workflow
            </div>
            <div className="take">
              <b>Impact:</b> real patients across Kazakhstan
            </div>
            <div className="take">
              <b>Focus:</b> public health & prevention
            </div>
          </div>
        </div>
        <PhotoGrid items={photos.biomed} />
      </Section>

      <div style={{ height: 16 }} />

      <div id="robotics" />
      <Section title="Robotics">
        <div className="item">
          <p>
            Robotics became a major interest for me because it lets me study STEM
            while improving technology and contributing to society.
          </p>

          <p>
            We organized <b>GIRLS GO STEM</b>, bringing together a large audience
            of women where top speakers shared motivation and insights. Through
            long teamwork — building robots, calculations, branding, and
            inspiring local youth — we reached the world stage in Houston and
            won the <b>Inspire Award (3rd place)</b>.
          </p>

          <p>
            Now I’m part of <b>Team Panheya</b>, where our new lineup won the
            Central Asia stage and is preparing for the world championship.
          </p>

          <div className="niceList">
            <div>
              <b>Result:</b> Worlds (Houston) • Inspire Award
            </div>
            <div>
              <b>My role:</b> build • branding • outreach
            </div>
            <div>
              <b>Now:</b> Panheya • Central Asia winners
            </div>
          </div>

          <div className="takeaways">
            <div className="take">
              <b>Strength:</b> engineering under deadlines
            </div>
            <div className="take">
              <b>Teamwork:</b> long iteration cycles
            </div>
            <div className="take">
              <b>Community:</b> outreach & events
            </div>
          </div>
        </div>
        <PhotoGrid items={photos.robotics} />
      </Section>

      <div style={{ height: 16 }} />

      <div id="ai-startups" />
      <Section title="AI & Startups">
        <div className="item">
          <p>
            My journey into startups began after I noticed real problems in
            radiology, which led me to build AI software for image recognition.
            My startup <b>MyScan</b> completed an international incubator and is
            now being tested on real patient scans.
          </p>

          <p>
            I’m also developing <b>Mammo</b>, an app that teaches women breast
            self-checks, and I serve as <b>CTO of Unison</b> — an AI-driven
            recruitment platform piloted with <b>KPMG</b>.
          </p>

          <p>
            Competing in startup battles showed me how a highly competitive
            environment accelerates growth, reinforcing my belief that
            AI-powered entrepreneurship is one of the best ways to solve major
            global problems.
          </p>

          <div className="niceList">
            <div>
              <b>MyScan:</b> AI for radiology workflows
            </div>
            <div>
              <b>Mammo:</b> breast self-check education app
            </div>
            <div>
              <b>Unison:</b> CTO • pilot with KPMG
            </div>
          </div>

          <div className="takeaways">
            <div className="take">
              <b>Style:</b> prototype → test → iterate
            </div>
            <div className="take">
              <b>Focus:</b> measurable impact, not “ideas”
            </div>
            <div className="take">
              <b>Edge:</b> tech + product + pitching
            </div>
          </div>
        </div>
        <PhotoGrid items={photos.startups} />
      </Section>

      <div style={{ height: 16 }} />

      <div id="graphic-design" />
      <Section title="Graphic Design">
        <div className="item">
          <p>
            My interest in graphic design began in childhood, when I watched my
            brother work on design. Since then I’ve been fascinated by the field
            — and it became the gateway through which I started developing in
            other areas.
          </p>

          <p>
            I work primarily in <b>Photoshop</b> and also use <b>Figma</b> and{" "}
            <b>Canva</b>. Design is sometimes a source of income for me, but it’s
            also a way to express ideas. I believe design can communicate more
            than words alone.
          </p>

          <div className="niceList">
            <div>
              <b>Portfolio:</b> 100+ projects
            </div>
            <div>
              <b>Favorites:</b> Japanese-style game team page visual • robotics
              team merch
            </div>
            <div>
              <b>Approach:</b> clarity, hierarchy, and storytelling
            </div>
          </div>

          <div className="takeaways">
            <div className="take">
              <b>Tools:</b> Photoshop, Figma, Canva
            </div>
            <div className="take">
              <b>Output:</b> visuals, merch, UI concepts
            </div>
            <div className="take">
              <b>Why:</b> clarity + strong structure
            </div>
          </div>
        </div>
        <PhotoGrid items={photos.design} />
      </Section>
    </>
  );
}
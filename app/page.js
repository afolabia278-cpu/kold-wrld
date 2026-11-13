
function Star() {
  return (
    <span className="logo-star" aria-label="KOLD WRLD star">
      ✦
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="container header">
        <a href="/" className="logo">
          KOLD WRLD<Star />
        </a>

        <nav className="nav">
          <a href="#story">STORY</a>
          <a href="#archive">ARCHIVE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">AN ARCHIVE OF A FROZEN WORLD</p>
        <div className="hero-mark"><Star /></div>
        <h1>KOLD WRLD</h1>
        <p>KIDS WHO HAD TO GROW UP COLD.</p>
        <span className="hero-index">INDEPENDENT FASHION LABEL · LAGOS, NIGERIA</span>
      </section>

      <section className="statement">
        <p className="eyebrow">THE BRAND PHILOSOPHY</p>
        <h2>THE WORLD DOESN’T OWE YOU WARMTH.</h2>
        <p>RESILIENCE. SURVIVAL. EVOLUTION.</p>
      </section>

      <section className="section" id="story">
        <div className="container">
          <p className="eyebrow">01 — THE NAME</p>
          <h2>Grown through what the world never promised.</h2>
          <p className="section-copy">
            KOLD WRLD represents the realities that shape us.
            A study of resilience, survival and growth in a world
            that does not promise warmth.
          </p>
          <p className="eyebrow">KIDS WHO HAD TO GROW UP COLD.</p>
        </div>
      </section>

      <section className="section" id="archive">
        <div className="container">
          <p className="eyebrow">02 — THE ARCHIVE</p>
          <h2>Not ordinary merchandise. Objects with meaning.</h2>
          <p className="section-copy">
            Every piece begins with an idea. Carefully considered
            garments, details and objects form an evolving archive
            of the KOLD WRLD universe.
          </p>
          <p className="eyebrow">THE ARCHIVE IS IN DEVELOPMENT.</p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <p className="eyebrow">03 — CONTACT</p>
          <h2>For enquiries and collaborations.</h2>
          <p className="section-copy">
            KOLD WRLD is building its world. Further contact
            information will be announced here.
          </p>
        </div>
      </section>

      <footer className="container footer">
        <a href="/" className="logo">
          KOLD WRLD<Star />
        </a>
        <p>THE COLD ROOM — LAGOS, NIGERIA</p>
      </footer>
    </main>
  );
}


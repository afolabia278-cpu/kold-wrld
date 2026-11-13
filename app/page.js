const star = "✳";

export default function Home() {
  return (
    <main>
      <header className="container header">
        <a href="/" className="logo">
          KOLD WRLD<span className="logo-star">{star}</span>
        </a>

        <nav className="nav">
          <a href="#story">STORY</a>
          <a href="#archive">ARCHIVE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-mark">{star}</div>
        <h1>KOLD WRLD</h1>
        <p>KIDS WHO HAD TO GROW UP COLD.</p>
      </section>

      <section className="statement">
        <h2>THE WORLD DOESN’T OWE YOU WARMTH.</h2>
        <p>A PHILOSOPHY. A POSITION.</p>
      </section>

      <section className="section" id="story">
        <div className="container">
          <p className="eyebrow">01 — THE NAME</p>
          <h2>Some things are learned in the cold.</h2>
          <p className="section-copy">
            KOLD WRLD is an independent creative project built around
            resilience, survival and the realities that shape us.
            It is an archive of a world that does not promise warmth.
          </p>
        </div>
      </section>

      <section className="section" id="archive">
        <div className="container">
          <p className="eyebrow">02 — THE ARCHIVE</p>
          <h2>A world still being documented.</h2>
          <p className="section-copy">
            The archive is taking shape. More will be revealed in time.
          </p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <p className="eyebrow">03 — CONTACT</p>
          <h2>Stay connected.</h2>
          <p className="section-copy">
            For enquiries and collaborations, follow the KOLD WRLD journey.
          </p>
        </div>
      </section>

      <footer className="container footer">
        <a href="/" className="logo">
          KOLD WRLD<span className="logo-star">{star}</span>
        </a>
        <p>THE COLD ROOM — KOLD WRLD</p>
      </footer>
    </main>
  );
}

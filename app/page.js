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
      {/* HEADER */}
      <header className="container header">
        <a href="/" className="logo">
          KOLD WRLD<Star />
        </a>
        <nav className="nav">
          <a href="#story">STORY</a>
          <a href="#archive">ARCHIVE</a>
          <a href="#join">JOIN</a>
        </nav>
      </header>
      {/* HERO */}
      <section className="hero">
        <p className="eyebrow">
          AN ARCHIVE OF A FROZEN WORLD
        </p>
        <div className="hero-mark">
          <Star />
        </div>
        <h1>KOLD WRLD</h1>
        <p>KIDS WHO HAD TO GROW UP COLD.</p>
        <span className="hero-index">
          INDEPENDENT FASHION LABEL · LAGOS, NIGERIA
        </span>
      </section>
      {/* PHILOSOPHY */}
      <section className="statement">
        <p className="eyebrow">
          THE BRAND PHILOSOPHY
        </p>
        <h2>
          THE WORLD DOESN’T OWE YOU WARMTH.
        </h2>
        <p>RESILIENCE. SURVIVAL. EVOLUTION.</p>
      </section>
      {/* BRAND STORY */}
      <section className="section" id="story">
        <div className="container">
          <p className="eyebrow">
            01 — OUR STORY
          </p>
          <h2>
            THE WORLD DOESN’T OWE YOU WARMTH.
          </h2>
          <p className="section-copy">
            KOLD WRLD was built around a simple truth:
            not everyone grows up in warmth.
          </p>
          <p className="section-copy">
            Some grow through uncertainty, hardship,
            silence and circumstances that demand
            strength before they're ready.
          </p>
          <p className="section-copy">
            KOLD WRLD takes its name from
            Kids Who Had To Grow Up Cold.
          </p>
          <p className="section-copy">
            It represents a generation shaped by
            realities they didn't choose — learning
            to adapt, endure and evolve in a world
            that offers no guarantees.
          </p>
          <p className="section-copy">
            We see clothing as more than something
            to wear. It is a record of identity,
            experience and survival.
          </p>
          <p className="section-copy">
            Born in Lagos, Nigeria. Created with
            a global perspective.
          </p>
          <p className="eyebrow">
            KOLD WRLD IS NOT ABOUT CELEBRATING THE COLD.
          </p>
          <h2>
            It's about what you become because of it.
          </h2>
        </div>
      </section>
      {/* THE ARCHIVE */}
      <section className="section" id="archive">
        <div className="container">
          <p className="eyebrow">
            02 — THE ARCHIVE
          </p>
          <h2>
            OBJECTS OF A FROZEN WORLD.
          </h2>
          <p className="section-copy">
            An evolving archive of identity,
            experience and survival.
          </p>
          <p className="section-copy">
            Every piece begins with an idea.
            Garments, details and objects are
            developed with intention and purpose.
          </p>
          <div className="archive-piece">
            <p className="eyebrow">
              KOLD WRLD — ARCHIVE SERIES
            </p>
            <h3>THE WARMTH TEE</h3>
            <p className="archive-status">
              UNRELEASED — ARCHIVE PREVIEW
            </p>
            <div className="archive-views">
              <figure>
                <img
                  src="/warmth-tee-front.png.jpg"
                  alt="White KOLD WRLD The Warmth Tee front view"
                />
                <figcaption>FRONT VIEW</figcaption>
              </figure>
              <figure>
                <img
                  src="/warmth-tee-back.png.jpg"
                  alt="White KOLD WRLD The Warmth Tee back view with camo artwork"
                />
                <figcaption>BACK VIEW</figcaption>
              </figure>
            </div>
            <p className="archive-description">
              WHITE / CAMO
              <span>280 GSM HEAVYWEIGHT COTTON</span>
            </p>
          </div>
          <p className="eyebrow">
            THE FIRST COLLECTION IS IN DEVELOPMENT.
          </p>
        </div>
      </section>
      {/* FIRST RELEASE */}
      <section className="section" id="join">
        <div className="container">
          <p className="eyebrow">
            03 — FIRST RELEASE
          </p>
          <h2>
            BE PART OF THE ARCHIVE.
          </h2>
          <p className="section-copy">
            The first release is approaching.
            Get access to the announcement before
            it goes public.
          </p>
          <p className="eyebrow">
            FIRST RELEASE · LAGOS, NIGERIA
          </p>
          <p className="section-copy">
            EMAIL SIGN-UP OPENING SOON.
          </p>
        </div>
      </section>
      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <p className="eyebrow">
            04 — CONTACT
          </p>
          <h2>
            For enquiries and collaborations.
          </h2>
          <p className="section-copy">
            KOLD WRLD is building its world.
            Official contact information will
            be announced here.
          </p>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="container footer">
        <a href="/" className="logo">
          KOLD WRLD<Star />
        </a>
        <p>
          THE COLD ROOM — LAGOS, NIGERIA
        </p>
      </footer>
    </main>
  );
}
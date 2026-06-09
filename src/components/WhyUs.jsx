import { useState, useEffect, useRef } from "react";

const POINTS = [
  {
    n: "01",
    title: "Wycena przed naprawą — bez niespodzianek",
    desc: "Każde zlecenie zaczynamy od pisemnej wyceny. Nie zaczynamy pracy bez Twojej zgody, nie doliczamy ukrytych kosztów."
  },
  {
    n: "02",
    title: "Doświadczenie przekazywane z pokolenia na pokolenie",
    desc: "Warsztat prowadzony rodzinnie od ponad dekady. Wiedza, technika pracy i standardy jakości przekazywane z pokolenia na pokolenie."
  },
  {
    n: "03",
    title: "Nowoczesny sprzęt i wykwalifikowany personel",
    desc: "Pracujemy na specjalistycznym sprzęcie serwisowym i diagnostycznym. Zespół regularnie uczestniczy w szkoleniach technicznych."
  },
  {
    n: "04",
    title: "Jakość, na której się nie oszczędza",
    desc: "Każda regenerowana przekładnia trafia do klienta dopiero po pełnej weryfikacji. Pracujemy tak, jak chcielibyśmy, żeby pracowano przy naszym aucie."
  }
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const check = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Fire when user has scrolled ~60% into the section.
      const scrolled = vh - r.top;
      const progress = scrolled / r.height;
      if (progress >= 0.6) {
        setInView(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="dlaczego"
      ref={sectionRef}
      className={"section dark why-section" + (inView ? " in-view" : "")}
      data-screen-label="03 Dlaczego my"
    >
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot" /> Dlaczego RegenTech</div>
            <h2>Co stoi za naszą<br /><em>jakością</em>.</h2>
          </div>
          <div className="right">
            Rodzinny warsztat z wieloletnim doświadczeniem. Specjalistyczny
            sprzęt, dobrze przeszkolony zespół i bezkompromisowe podejście
            do każdej regeneracji.
          </div>
        </div>

        <div className="why-grid">
          <div className="why-points">
            {POINTS.map((p, i) => (
              <div className="why-point" key={p.n} style={{ "--i": i }}>
                <div className="why-num">{p.n}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="why-visual" />
        </div>
      </div>
    </section>
  );
}

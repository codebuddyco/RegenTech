const steps = [
  { n: "01", title: "Diagnoza", desc: "Bezpłatne oględziny i komputerowy odczyt błędów. Po 30 minutach wiemy, co się dzieje.", time: "~30 min" },
  { n: "02", title: "Wycena", desc: "Pisemny kosztorys z rozbiciem na części i robociznę. Akceptujesz — pracujemy.", time: "Do 24h" },
  { n: "03", title: "Naprawa", desc: "Realizacja na umówiony termin. Dokumentujemy proces zdjęciowo, wymienione części zostawiamy.", time: "1–4 dni" },
  { n: "04", title: "Odbiór", desc: "Jazda kontrolna, omówienie wykonanych prac i faktura. Odbiór w warsztacie.", time: "Pon–Pt 8:00–16:00" }
];

export default function Process() {
  return (
    <section id="proces" className="section light" data-screen-label="04 Proces">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot" /> Jak pracujemy</div>
            <h2>Cztery kroki.<br />Zero <em>zaskoczeń</em>.</h2>
          </div>
          <div className="right">
            Przejrzysty proces od pierwszego telefonu aż po odbiór auta.
            Wiesz co, kiedy i za ile.
          </div>
        </div>

        <div className="process-grid">
          {steps.map(s => (
            <div className="process-step" key={s.n}>
              <div className="process-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="mono-label">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


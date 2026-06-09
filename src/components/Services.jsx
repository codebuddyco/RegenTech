const ICONS = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M13 2 L4 14 h7 l-1 8 l9-12 h-7 l1-8 z" />
    </svg>
  ),
  drop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M12 2.5 C 9 6.5, 5 10.5, 5 14.5 a7 7 0 0 0 14 0 C 19 10.5, 15 6.5, 12 2.5 z" />
    </svg>
  ),
  wheel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3 V9.5 M3 12 H9.5 M14.5 12 H21 M12 14.5 V21" />
    </svg>
  ),
  column: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="M12 7 V20" />
      <path d="M8.5 11 H15.5 M8.5 14.5 H15.5 M8.5 18 H15.5" />
    </svg>
  ),
  bus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M3 5 h16 a1 1 0 0 1 1 1 v12 h-18 v-12 a1 1 0 0 1 1 -1 z" />
      <path d="M3 11 h17" />
      <path d="M7 7.5 v2.5 M11 7.5 v2.5 M15 7.5 v2.5" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="16" cy="18" r="1.6" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M1.5 6 h11 v11 H1.5 z" />
      <path d="M12.5 9.5 h4.5 l3 3.5 V17 H12.5 z" />
      <circle cx="6" cy="18.5" r="1.6" />
      <circle cx="16.5" cy="18.5" r="1.6" />
    </svg>
  ),
};

const SERVICES = [
  { num: "01", icon: "bolt", title: "Przekładnie kierownicze ze wspomaganiem elektrycznym", desc: "Regeneracja przekładni kierowniczych do samochodów osobowych ze wspomaganiem elektrycznym.", tags: [] },
  { num: "02", icon: "drop", title: "Przekładnie kierownicze ze wspomaganiem hydraulicznym", desc: "Regeneracja przekładni kierowniczych do samochodów osobowych ze wspomaganiem hydraulicznym.", tags: [] },
  { num: "03", icon: "wheel", title: "Przekładnie kierownicze bez wspomagania", desc: "Regeneracja przekładni kierowniczych do samochodów osobowych bez wspomagania.", tags: [] },
  { num: "04", icon: "column", title: "Kolumny kierownicze ze wspomaganiem elektrycznym", desc: "Regeneracja kolumn kierowniczych ze wspomaganiem elektrycznym.", tags: [] },
  { num: "05", icon: "bus", title: "Przekładnie kierownicze do busów", desc: "Regeneracja przekładni kierowniczych do busów.", tags: [] },
  { num: "06", icon: "truck", title: "Przekładnie kierownicze do samochodów ciężarowych", desc: "Regeneracja przekładni kierowniczych do samochodów ciężarowych.", tags: [] },
];

export default function Services() {
  return (
    <section id="uslugi" className="section light" data-screen-label="02 Usługi">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot" /> Zakres usług</div>
            <h2>Jedna specjalizacja —<br />robiona <em>na serio</em>.</h2>
          </div>
          <div className="right">
            Kompleksowa regeneracja przekładni i kolumn kierowniczych —
            samochody osobowe, ciężarowe i busy.
          </div>
        </div>

        <div className="services-grid">
          {SERVICES.map(s => (
            <div className="service" key={s.num}>
              <div>
                <div className="service-num">{s.num} / 06</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="service-row">
                <div className="service-tags">
                  {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                </div>
                <div className="service-arrow">
                  {ICONS[s.icon]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

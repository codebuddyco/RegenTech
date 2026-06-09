const openingHours = [
  { day: "Poniedziałek", time: "08:00 – 18:00", idx: 1 },
  { day: "Wtorek", time: "08:00 – 18:00", idx: 2 },
  { day: "Środa", time: "08:00 – 18:00", idx: 3 },
  { day: "Czwartek", time: "08:00 – 18:00", idx: 4 },
  { day: "Piątek", time: "08:00 – 18:00", idx: 5 },
  { day: "Sobota", time: "Zamknięte", idx: 6 },
  { day: "Niedziela", time: "Zamknięte", idx: 0 }
];

const mapURL = "https://maps.app.goo.gl/xoNyAy6Drb4BE6beA";

export default function Contact() {
  const today = new Date().getDay();

  return (
    <section id="kontakt" className="section dark contact-section" data-screen-label="08 Kontakt">
      <div className="contact-bg" />
      <div className="contact-overlay" />
      <div className="contact-grain" />
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot" /> Kontakt</div>
            <h2>Wpadnij do <em>warsztatu</em>.<br />Albo zadzwoń.</h2>
          </div>
          <div className="right">
            Najlepiej zadzwoń przed wizytą — umówimy konkretną godzinę,
            żebyś nie tracił czasu w kolejce.
          </div>
        </div>

        <div className="contact-info-grid">
          <div className="contact-block">
            <div className="lbl">Telefon</div>
            <a href="tel:+48537181414" className="val val-link">+48 537 181 414</a>

            <div className="contact-socials">
              <a
                href="https://www.instagram.com/regentech_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-row"
              >
                <span className="social-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="social-handle">@regentech_</span>
              </a>
              <a
                href="https://www.facebook.com/p/RegenTech-61578941068175/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-row"
              >
                <span className="social-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h-3a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </span>
                <span className="social-handle">@RegenTech</span>
              </a>
              <a href="mailto:regentech.rt@gmail.com" className="social-row">
                <span className="social-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="social-handle">regentech.rt@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="contact-block">
            <div className="lbl">Adres warsztatu</div>
            <div className="val">ul. Stanisława Zbrowskiego 60<br />26-600 Radom</div>
            <div className="sub">Dziedziniec za bramą.</div>

            <a
              href={mapURL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map"
              aria-label="Otwórz w Google Maps"
            >
              <div className="contact-map-canvas" aria-hidden="true">
                <span className="map-pin-large">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
              </div>
              <div className="contact-map-overlay">
                <span className="map-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span>Otwórz w Google Maps</span>
                <span className="arrow-icon" />
              </div>
            </a>
          </div>

          <div className="contact-block">
            <div className="lbl">Godziny otwarcia</div>
            <div className="hours-table" style={{ marginTop: 12 }}>
              {openingHours.map(d => (
                <div key={d.day} className={"hours-row" + (d.idx === today ? " today" : "")}>
                  <span className="day">{d.day}</span>
                  <span className="time">{d.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

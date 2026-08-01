import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Zgoda na pliki cookies">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <span className="cookie-banner-eyebrow mono">
            <span className="dot" />
            Pliki cookies
          </span>
          <p>
            Używamy plików cookies w celu zapewnienia prawidłowego działania strony oraz analizy
            ruchu. Korzystając z serwisu, wyrażasz zgodę na ich użycie zgodnie z{" "}
            <a href="/polityka-prywatnosci" className="cookie-link">
              Polityką Prywatności
            </a>
            .
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="btn btn-ghost-dark btn-sm" onClick={decline}>
            Odrzuć
          </button>
          <button className="btn btn-primary btn-sm" onClick={accept}>
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, Fragment } from "react";
import Logo from "./Logo.jsx";

const NAV_ITEMS = [
  { href: "#uslugi", label: "Usługi", num: "01" },
  { href: "#dlaczego", label: "Dlaczego my", num: "02" },
  { href: "#proces", label: "Proces", num: "03" },
  { href: "#kontakt", label: "Kontakt", num: "04" },
  { href: "#realizacje", label: "Realizacje", num: "05" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <Fragment>
      <nav className={"nav " + (scrolled ? "scrolled" : "")}>
        <a href="#top" onClick={() => setMenuOpen(false)}><Logo /></a>
        <div className="nav-links">
          {NAV_ITEMS.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
        </div>
        <div className="nav-cta">
          <a href="tel:+48537181414" className="nav-phone">+48 537 181 414</a>
          <a href="#kontakt" className="btn btn-primary btn-sm">
            Skontaktuj się z nami <span className="arrow-icon"></span>
          </a>
          <button
            type="button"
            className={"nav-burger " + (menuOpen ? "open" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={"mobile-menu " + (menuOpen ? "open" : "")}>
        {NAV_ITEMS.map(i => (
          <a key={i.href} href={i.href} onClick={() => setMenuOpen(false)}>
            <span>{i.label}</span>
            <span className="num">{i.num}</span>
          </a>
        ))}
        <div className="mobile-cta">
          <a href="tel:+48537181414" className="phone">+48 537 181 414</a>
        </div>
      </div>
    </Fragment>
  );
}
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
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

  const navItems = [
    { href: "#uslugi", label: "Usługi", num: "01" },
    { href: "#dlaczego", label: "Dlaczego my", num: "02" },
    { href: "#proces", label: "Proces", num: "03" },
    { href: "#kontakt", label: "Kontakt", num: "04" },
    { href: "#opinie", label: "Opinie", num: "05" }
  ];

  return (
    <>
      <nav className={"nav " + (scrolled ? "scrolled" : "")}>
        <a href="#top" onClick={() => setMenuOpen(false)}><Logo /></a>
        <div className="nav-links">
          {navItems.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
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
        {navItems.map(i => (
          <a key={i.href} href={i.href} onClick={() => setMenuOpen(false)}>
            <span>{i.label}</span>
            <span className="num">{i.num}</span>
          </a>
        ))}
        <div className="mobile-cta">
          <a href="tel:+48537181414" className="phone">+48 537 181 414</a>
          <a href="#kontakt" className="btn btn-primary btn-lg" onClick={() => setMenuOpen(false)}>
            Skontaktuj się z nami <span className="arrow-icon"></span>
          </a>
        </div>
      </div>
    </>
  );
}

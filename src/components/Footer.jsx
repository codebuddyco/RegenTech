import Logo from "./Logo.jsx"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div>
                        <Logo />
                        <p className="footer-pitch">
                            Niezależny warsztat samochodowy w Radomiu. Regeneracja
                            przekładni kierowniczych, serwis i naprawa mechaniki pojazdowej od 2025 roku.
                        </p>
                        <div className="footer-actions" style={{display:"flex", gap:8}}>
                            <a href="#kontakt" className="btn btn-ghost-dark btn-sm">Skontaktuj się z nami</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Warsztat</h4>
                        <ul>
                            <li><a href="#uslugi">Usługi</a></li>
                            <li><a href="#proces">Jak pracujemy</a></li>
                            <li><a href="#opinie">Opinie</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Kontakt</h4>
                        <ul>
                            <li>+48 537 181 414</li>
                            <li>regentech@gmail.com</li>
                            <li>ul. Stanisława Zbrowskiego 60</li>
                            <li>26-600 Radom</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Obserwuj</h4>
                        <ul>
                            <li><a href="https://www.instagram.com/regentech_/">Instargam</a></li>
                            <li><a href="https://www.facebook.com/p/RegenTech-61578941068175/">Facebook</a></li>
                            <li><a href="https://maps.app.goo.gl/xoNyAy6Drb4BE6beA">Google Maps</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 RegenTech</span>
                </div>

            </div>
        </footer>
    );
}
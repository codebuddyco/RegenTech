export default function Hero(){
    return(
        <section id="top" className="hero" data-screen-label="01 hero">
            <div className="hero-bg"/>
            <div className="hero-overlay"/>
            <div className="hero-grain"/>

            <div className="hero-tag">
                <span>Warsztat / Radom</span>
            </div>

            <div className="hero-inner">
                <div>
                    <h1>
                        Twoja przekładnia.<br/>
                        <span className="outline">Nasz</span><br/>
                        <span className="accent">priorytet</span>.
                    </h1>
                    <p className="hero-lede">
                        Wiedza i doświadczenie przekazywane z pokolenia na pokolenie.
                        Specjalizujemy się w regeneracji przekładni kierowniczych, łącząc
                        rzemieślniczą dbałość o detal z powtarzalną, mierzalną jakością
                        wykonania.   
                    </p>
                    <div className="hero-actions">
                        <a href="#kontakt" className="btn btn-primary btn-lg">
                            Skontaktuj się z nami <span className="arrow-icon"></span>
                        </a>
                        <a href="#proces" className="btn btn-ghost-dark btn-lg">
                            Jak działamy?
                        </a>
                    </div>
                </div>
                <div className="hero-meta">
                    <div className="hero-stats">
                        <div className="hero-stat">
                        <div className="num">10<span style={{ color: "var(--red)" }}>+</span></div>
                        <div className="lbl">Lat doświadczenia</div>
                        </div>
                        <div className="hero-stat">
                        <div className="num">300<span style={{ color: "var(--red)" }}>+</span></div>
                        <div className="lbl">Aut po serwisie</div>
                        </div>
                        <div className="hero-stat">
                        <div className="num">5,0<span style={{ color: "var(--red)", fontSize: "0.55em", verticalAlign: "0.25em", marginLeft: "0.08em" }}>★</span></div>
                        <div className="lbl">Ocena Google</div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hero-scroll">
                    <span>Przewiń</span>
                    <span className="line" />
                </div>
        </section>
    )
}
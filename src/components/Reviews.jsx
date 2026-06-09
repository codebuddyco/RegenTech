const reviews= [
  {
    quote: "Polecam! Wykonywana była renowacja przekładni kierowniczej do BMW E30 oraz VW Corrado. Usługa wykonana profesjonalnie, wszystko sprawnie i zgodnie z ustaleniami. Przekładnie działają bez zarzutu, jakość na bardzo wysokim poziomie. Jestem w pełni zadowolony i zdecydowanie mogę polecić.",
    name: "Bartek"
  },
  {
    quote: "Oddałam auto z problemem ze wspomaganiem i szczerze mówiąc trochę się stresowałam. Pan na miejscu wszystko dokładnie wyjaśnili, naprawa poszła sprawnie i bez żadnych „niespodzianek” w kosztach. Auto prowadzi się teraz lekko i pewnie. Jestem bardzo zadowolona i z czystym sumieniem polecam.",
    name: "Weronika"
  },
  {
    quote: "Pełen profesjonalizm. Przekładnia chodzi idealnie i wyglada jak nowa. W pełni polecam!",
    name: "Patryk"
  }
];

export default function Reviews() {
  return (
    <section id="opinie" className="section light" data-screen-label="07 Opinie">
      <div className="section-inner">
        <div className="reviews-head">
          <div>
            <div className="eyebrow"><span className="dot" /> Opinie klientów</div>
            <h2>To, co mówią <em>kierowcy</em>.</h2>
          </div>
          <div className="review-rating">
            <div className="stars">★★★★★</div>
            <div className="num">5.0 / 5.0 — 5 opinii Google</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="stars">★★★★★</div>
              <p className="quote">„{r.quote}"</p>
              <div className="author">
                <div className="review-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <div>
                  <div className="name">{r.name}</div>
                  <div className="meta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

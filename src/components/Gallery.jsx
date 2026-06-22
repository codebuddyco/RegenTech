import { useRef } from 'react';

const imageModules = import.meta.glob('/assets/carousel/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules).map(m => m.default);

export default function Gallery() {
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.pageX;
    startScroll.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = startScroll.current - (e.pageX - startX.current);
  };

  const stopDrag = () => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  return (
    <section id="realizacje" className="gallery-section section light">
      <div className="section-inner gallery-head">
        <div className="eyebrow"><span className="dot" /> Galeria</div>
        <h2>Nasze<br /> <em>realizacje</em>.</h2>
      </div>
      <div
        className="gallery-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {images.map((src, i) => (
          <div className="gallery-slide" key={i}>
            <img src={src} alt={`Warsztat ${i + 1}`} draggable={false} />
          </div>
        ))}
      </div>
      <div className="gallery-hint">
        <span className="gallery-hint-line" />
        <span className="gallery-hint-text">Przeciągnij w prawo aby zobaczyć więcej</span>
        <span className="gallery-hint-line" />
      </div>
    </section>
  );
}

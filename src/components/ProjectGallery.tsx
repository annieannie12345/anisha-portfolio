"use client";

import { useEffect, useState } from "react";

type ImageItem = { src: string; caption: string; alt: string };

export function ProjectGallery({ title, images }: { title: string; images: ImageItem[] }) {
  const [active, setActive] = useState<ImageItem | null>(null);
  useEffect(() => {
    if (!active) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [active]);
  return <section className="project-gallery" aria-label={title}>
    <h2 className="section-kicker">{title}</h2>
    <div className="project-gallery-grid">{images.map((image) => <figure key={image.src}>
      <button type="button" className="gallery-image-button" onClick={() => setActive(image)} aria-label={`Enlarge ${image.caption}`}><img src={image.src} alt={image.alt} loading="lazy" /></button>
      <figcaption>{image.caption}</figcaption>
    </figure>)}</div>
    {active && <div className="media-lightbox" role="dialog" aria-modal="true" aria-label={active.caption} onClick={() => setActive(null)}>
      <button type="button" className="lightbox-close" onClick={() => setActive(null)} aria-label="Close image preview">×</button>
      <img src={active.src} alt={active.alt} onClick={(event) => event.stopPropagation()} />
      <p>{active.caption}</p>
    </div>}
  </section>;
}

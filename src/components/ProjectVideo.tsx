type ProjectVideoProps = {
  src?: string;
  title: string;
};

/** Render only when a real project video path has been supplied. */
export function ProjectVideo({ src, title }: ProjectVideoProps) {
  if (!src) return null;

  return (
    <section className="video-section" aria-label={`${title} demonstration video`}>
      <h2 className="section-kicker">Project Demonstration</h2>
      <video className="project-video" controls preload="metadata" playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support inline MP4 playback. <a href={src}>Open the video</a>.
      </video>
      <p className="media-fallback">If playback does not start, <a href={src} target="_blank" rel="noreferrer">open the video in a new tab</a>.</p>
    </section>
  );
}

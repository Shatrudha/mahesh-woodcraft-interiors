import { Pause, Play, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projectVideos } from "../../data/videos";

type VideoCardProps = {
  src: string;
  title: string;
  subtitle: string;
};

const VideoCard = ({
  src,
  title,
  subtitle,
}: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > 0.45 &&
          !manuallyPaused
        ) {
          try {
            await video.play();
          } catch {
            // Browser may block autoplay
          }
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      {
        threshold: [0.45],
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [manuallyPaused]);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      setManuallyPaused(false);

      try {
        await video.play();
      } catch {
        // Ignore browser autoplay restriction
      }
    } else {
      setManuallyPaused(true);
      video.pause();
    }
  };

  return (
    <article className="project-video-card">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="project-video-shade" />

      <div className="project-video-label">
        <div className="project-video-label-icon">
          <Video size={16} />
        </div>

        <span>
          <strong>{title}</strong>
          <small>{subtitle}</small>
        </span>
      </div>

      <button
        type="button"
        className="project-video-control"
        onClick={togglePlayback}
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
      >
        {isPlaying ? (
          <Pause size={21} />
        ) : (
          <Play size={21} />
        )}
      </button>
    </article>
  );
};

const ProjectVideos = () => {
  return (
    <section className="project-videos-section">
      <div className="container">
        <div className="project-videos-heading">
          <div>
            <p className="eyebrow">
              REAL PROJECT WALKTHROUGHS
            </p>

            <h2>
              See the details
              <span> in motion.</span>
            </h2>
          </div>

          <p>
            Watch real project walkthroughs showing storage,
            fittings, finishes and interior woodwork.
          </p>
        </div>

        <div className="project-videos-grid">
          {projectVideos.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              title={video.title}
              subtitle={video.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVideos;
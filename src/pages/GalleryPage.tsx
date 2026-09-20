import { useState } from "react";
import { X, ChevronLeft, ChevronRight,ChevronDown,ChevronUp, } from "lucide-react";
import { projects } from "../data/projects";

const INITIAL_IMAGES = 18;
const LOAD_MORE_COUNT = 18;

const GalleryPage = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGES);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleProjects = projects.slice(0, visibleCount);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? projects.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === projects.length - 1 ? 0 : selectedIndex + 1
    );
  };


  const handleLoadMore = () => {
  setVisibleCount((count) =>
    Math.min(count + LOAD_MORE_COUNT, projects.length)
  );
};

const handleShowLess = () => {
  setVisibleCount(INITIAL_IMAGES);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <>
      <section className="gallery-header">
        <div className="container">
          <p className="eyebrow">OUR PROJECTS</p>

          <h1>Real Work. Real Craftsmanship.</h1>

          <p>
            Explore some of our carpentry, furniture and interior work.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {visibleProjects.map((project, index) => (
              <button
                key={project.id}
                className="gallery-item"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <span>View Project</span>
                </div>
              </button>
            ))}
          </div>

        <div className="gallery-load-more">
  <p className="gallery-count">
    {visibleCount >= projects.length
      ? `Showing all ${projects.length} projects`
      : `Showing ${Math.min(
          visibleCount,
          projects.length
        )} of ${projects.length} projects`}
  </p>

  <div className="gallery-actions">
    {visibleCount < projects.length && (
      <button
        type="button"
        className="gallery-more-button"
        onClick={handleLoadMore}
      >
        Load{" "}
        {Math.min(
          LOAD_MORE_COUNT,
          projects.length - visibleCount
        )}{" "}
        More
        <ChevronDown size={18} />
      </button>
    )}

    {visibleCount > INITIAL_IMAGES && (
      <button
        type="button"
        className="gallery-less-button"
        onClick={handleShowLess}
      >
        Show Less
        <ChevronUp size={18} />
      </button>
    )}
  </div>
</div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <X />
          </button>

          <button
            className="lightbox-arrow lightbox-left"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={projects[selectedIndex].image}
              alt={projects[selectedIndex].title}
            />

            <p>
              {selectedIndex + 1} / {projects.length}
            </p>
          </div>

          <button
            className="lightbox-arrow lightbox-right"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
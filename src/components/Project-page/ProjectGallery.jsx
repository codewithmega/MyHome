import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Masonry from "react-masonry-css";

export default function ProjectGallery({ gallery }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const breakpoints = {
    default: 2,
    1024: 1,
    640: 1,
  };

  return (
    <>
      {/* Grid */}

      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-4 cursor-pointer"
        columnClassName="flex flex-col gap-4"
      >
        {gallery.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img src={img.src} />
          </div>
        ))}
      </Masonry>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        className="outfit"
        slides={gallery}
        plugins={[Thumbnails, Captions]}
        thumbnails={{ height: 80 }}
        styles={{
          container: {
            backgroundColor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          },
          viewPort: {
            maxWidth: "90vw",
            maxHeight: "80vh",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            backgroundColor: "rgba(255,255,255,0.95)",
          },
          button: { color: "#111" },
          captionsTitleContainer: {backgroundColor: "#d3d3d3", padding: "none", width: "70%", margin: "auto", height: "", textAlign: "center", overflow: "auto !important"},
          captionsTitle: { color: "#111", fontWeight: "600" },
          captionsDescriptionContainer: {backgroundColor: "transparent"},
          captionsDescription: { color: "black", backgroundColor: "#d3d3d3", width: "30%", margin: "auto", height: "30px", textAlign: "center" },
        }}
      />
    </>
  );
}

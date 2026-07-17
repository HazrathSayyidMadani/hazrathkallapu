// import gallery1 from "../assets/gallery/gallery1.jpeg";
// import g1 from "../assets/gallery/g1.jpeg";
// import g6 from "../assets/gallery/g6.jpg";
// import hazrath from "../assets/gallery/hazrath.jpeg";

import { PhotoProvider, PhotoView } from "react-photo-view";
import SectionHeading from "./SectionHeading";

function Gallery() {
  const images = [
    // { src: hazrath, alt: "School Campus" },
    // { src: g1, alt: "School Activities" },
    // { src: gallery1, alt: "Students Learning" },
    // { src: hazrath, alt: "School Building" },
    // { src: g6, alt: "School Event" },
    // { src: gallery1, alt: "Classroom Activities" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="School Gallery"
          subtitle="Glimpses of life at our campus"
        />

        {images.length > 0 ? (
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {images.map((img, index) => (
                <PhotoView key={index} src={img.src}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Gallery images will be added soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
export default function ActivityGallery({ images = [], title }) {
  const photos = images.filter(image => image.src?.trim()).slice(0, 2);

  if (photos.length === 0) return null;

  return (
    <div className={`activity-gallery${photos.length === 1 ? " activity-gallery-single" : ""}`}>
      {photos.map((image, index) => (
        <figure className="activity-photo" key={`${image.src}-${index}`}>
          <a href={image.src} target="_blank" rel="noreferrer" aria-label={`View full image: ${image.alt || `${title} — photo ${index + 1}`}`}>
            <img
              className="activity-image"
              src={image.src}
              alt={image.alt || `${title} — photo ${index + 1}`}
              loading="lazy"
              width="960"
              height="540"
            />
          </a>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

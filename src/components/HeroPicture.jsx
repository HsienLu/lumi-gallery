// src/components/HeroPicture.jsx
export default function HeroPicture({ item, priority = false, className = '' }) {
    // item 需要帶：webp800, webp1200, jpg1200, w, h, alt
    return (
      <picture>
        <source
          type="image/webp"
          srcSet={`${item.webp800} 800w, ${item.webp1200} 1200w`}
          sizes="100vw"
        />
        <img
          src={item.jpg1200}
          alt={item.alt || 'hero'}
          width={item.w}
          height={item.h}
          className={className}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
          sizes="100vw"
        />
      </picture>
    );
  }
  
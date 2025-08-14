// ImageCard.jsx
export default function ImageCard({ item, onSelect, priority = false }) {
    const { title, w = 1600, h = 1200 } = item
  
    return (
      <figure
        className="group cursor-pointer overflow-hidden rounded-3xl border border-[var(--brand)]/40"
        onClick={() => onSelect(item)}
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(item)}
        role="button"
        aria-label={`打開 ${title} 大圖`}
        style={{ contentVisibility: 'auto' }}  // 視窗外先跳過繪製
      >
        <picture>
          {/* 先給 AVIF（可先省略；要做就把 .webp 換 .avif） */}
          {/* <source
            type="image/avif"
            srcSet={`${item.webp800.replace('.webp','.avif')} 800w, ${item.webp1200.replace('.webp','.avif')} 1200w`}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          /> */}
          {/* WebP */}
          <source
            type="image/webp"
            srcSet={`${item.webp800} 800w, ${item.webp1200} 1200w`}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
          {/* 後備 JPG */}
          <img
            src={item.jpg1200 ?? item.src}
            alt={title}
            width={w}                // 這兩個一定要有，否則 CLS 會回來
            height={h}
            className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={priority ? 'high' : 'auto'}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
        </picture>
        <figcaption className="p-3 text-sm text-black/70">{title}</figcaption>
      </figure>
    )
  }
  
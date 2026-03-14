"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

const GALLERY_IMAGES = [
    { id: 1, category: 'Makkah', src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Kaaba in Makkah' },
    { id: 2, category: 'Madinah', src: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Nabawi Mosque Madinah' },
    { id: 3, category: 'Jamaah', src: '/images/jamaah_makkah.png', alt: 'Jamaah at Makkah' },
    { id: 4, category: 'Makkah', src: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Makkah Clock Tower' },
    { id: 5, category: 'Jamaah', src: '/images/prayer_moment.png', alt: 'Prayer moment' },
    { id: 6, category: 'Madinah', src: '/images/nabawi_umbrella.png', alt: 'Nabawi Umbrella' }
];

const CATEGORIES = ['Semua', 'Makkah', 'Madinah', 'Jamaah'];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [lightboxImg, setLightboxImg] = useState(null);
    const sectionRef = useRef(null);

    const filteredImages = activeCategory === 'Semua'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeCategory);

    return (
        <section ref={sectionRef} className={styles.section} id="galeri">
            {/* Background Video */}
            <div className={styles.videoBackground}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoElement}
                >
                    <source
                        src="/images/galeri_bg.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className={styles.videoOverlay} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                <div className={styles.header}>
                    <span className="section-label">Galeri</span>
                    <h2 className="h2 text-primary">
                        Momen Kebaikan Kami
                    </h2>
                    <div className="gold-divider" />
                    <p className="body-text text-text-light" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                        Dokumentasi perjalanan penuh berkah jamaah Zikr Travel di Tanah Suci.
                    </p>
                </div>

                <div className={styles.filterMenu}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredImages.map((img) => (
                        <div
                            key={`${img.id}-${activeCategory}`}
                            className={styles.galleryItem}
                            onClick={() => setLightboxImg(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className={styles.overlay}>
                                <ZoomIn size={32} className="text-white" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {lightboxImg && (
                <div className={styles.lightbox} onClick={() => setLightboxImg(null)}>
                    <button className={styles.closeBtn} onClick={() => setLightboxImg(null)}>
                        <X size={28} />
                    </button>
                    <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
                        <Image
                            src={lightboxImg.src}
                            alt={lightboxImg.alt}
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

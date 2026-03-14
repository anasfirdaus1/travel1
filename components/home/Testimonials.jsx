"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        id: 1,
        name: 'Hj. Siti Aisyah',
        location: 'Jakarta',
        text: 'Alhamdulillah perjalanan umroh bersama Zikr Travel sangat berkesan. Pembimbingnya sabar, hotelnya dekat sekali dengan masjid. Sangat direkomendasikan.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        rating: 5
    },
    {
        id: 2,
        name: 'Bpk. Ridwan Kamil',
        location: 'Bandung',
        text: 'Pelayanan luar biasa sejak awal pendaftaran sampai kembali ke tanah air. Makanan di hotel sangat pas dengan lidah Indonesia. Sukses terus Zikr Travel!',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        rating: 5
    },
    {
        id: 3,
        name: 'Keluarga Bpk. Herman',
        location: 'Surabaya',
        text: 'Bawa anak kecil umroh tidak repot karena difasilitasi dengan sangat baik oleh tim Zikr. Muthawif juga sangat membantu selama proses tawaf.',
        image: 'https://images.unsplash.com/photo-1574889246338-eeaece3302bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        rating: 5
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, isAutoPlaying]);

    const handleNext = () => setActiveIndex((c) => (c + 1) % TESTIMONIALS.length);
    const handlePrev = () => setActiveIndex((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section
            className={`islamic-pattern-bg ${styles.section}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="container">

                <div className={styles.header}>
                    <span className="section-label">Testimonial</span>
                    <h2 className="h2 text-primary">Suara Jamaah Kami</h2>
                    <div className="gold-divider" />
                    <p className="body-text text-text-light" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                        Mendengar langsung pengalaman berharga dari tamu-tamu Allah yang telah kami layani.
                    </p>
                </div>

                <div className={styles.carouselContainer}>
                    <button className={`${styles.controlBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous">
                        <ChevronLeft size={24} />
                    </button>

                    <button className={`${styles.controlBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next">
                        <ChevronRight size={24} />
                    </button>

                    <div className={styles.carouselWrapper}>
                        {TESTIMONIALS.map((testimonial, index) => {
                            let position = "nextSlide";
                            if (index === activeIndex) position = "activeSlide";
                            if (index === activeIndex - 1 || (activeIndex === 0 && index === TESTIMONIALS.length - 1)) position = "lastSlide";

                            return (
                                <div key={testimonial.id} className={`${styles.card} ${styles[position]}`}>
                                    <Quote size={48} className={styles.quoteIcon} />

                                    <div className={styles.stars}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="#C8A45D" color="#C8A45D" />
                                        ))}
                                    </div>

                                    <p className={styles.text}>&quot;{testimonial.text}&quot;</p>

                                    <div className={styles.author}>
                                        <div className={styles.avatar}>
                                            <Image src={testimonial.image} alt={testimonial.name} fill className={styles.avatarImage} sizes="60px" />
                                        </div>
                                        <div>
                                            <h4 className={styles.name}>{testimonial.name}</h4>
                                            <p className={styles.location}>{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.indicators}>
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.indicator} ${idx === activeIndex ? styles.activeIndicator : ''}`}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

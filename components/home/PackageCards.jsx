"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Plane, MessageSquareText } from 'lucide-react';
import styles from './PackageCards.module.css';
import { PACKAGES, WHATSAPP_NUMBER } from '@/lib/constants';

export default function PackageCards() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className={styles.section} id="paket-umroh">
            {/* Background Image */}
            <div className={styles.bgImageWrapper}>
                <Image
                    src="/images/paket_bg.jpg"
                    alt=""
                    fill
                    className={styles.bgImage}
                    sizes="100vw"
                    priority
                />
                <div className={styles.bgOverlay} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                <div className={styles.header}>
                    <span className="section-label">Perjalanan Suci</span>
                    <h2 className="h2 text-primary">
                        Pilihan Paket Umroh
                    </h2>
                    <div className="gold-divider" />
                    <p className="body-text text-text-light" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                        Temukan paket umroh yang sesuai dengan kebutuhan Anda. Jadwal pasti, fasilitas terjamin.
                    </p>
                </div>

                <div className={styles.grid}>
                    {PACKAGES.map((pkg) => {
                        const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.message)}`;

                        return (
                            <div key={pkg.id} className={styles.card}>
                                <div className={styles.imageHeader}>
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className={styles.badge}>{pkg.type}</div>
                                </div>

                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{pkg.name}</h3>
                                    <div className={styles.price}>{pkg.price}</div>

                                    <ul className={styles.features}>
                                        <li>
                                            <Calendar size={18} className="text-accent" /> <span>{pkg.duration}</span>
                                        </li>
                                        <li>
                                            <MapPin size={18} className="text-accent" /> <span><strong>Makkah:</strong> {pkg.hotelMakkah}</span>
                                        </li>
                                        <li>
                                            <MapPin size={18} className="text-accent" /> <span><strong>Madinah:</strong> {pkg.hotelMadinah}</span>
                                        </li>
                                        <li>
                                            <Plane size={18} className="text-accent" /> <span>{pkg.airline}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.cardFooter}>
                                    <a href={waLink} target="_blank" rel="noopener noreferrer" className={`btn btn-accent ${styles.bookBtn}`}>
                                        <MessageSquareText size={18} style={{ marginRight: '8px' }} />
                                        Pesan via WhatsApp
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

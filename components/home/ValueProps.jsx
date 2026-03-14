"use client";

import { useRef } from 'react';
import { ShieldCheck, UserCheck, Hotel, HeartHandshake } from 'lucide-react';
import styles from './ValueProps.module.css';

const VALUES = [
    {
        icon: ShieldCheck,
        title: 'Izin Resmi & Legalitas',
        description: 'Terdaftar resmi di Kemenag RI, menjamin keamanan keberangkatan Anda.'
    },
    {
        icon: UserCheck,
        title: 'Pembimbing Berpengalaman',
        description: 'Didampingi Mutawif bersertifikat yang memahami syariat dan sunnah.'
    },
    {
        icon: Hotel,
        title: 'Fasilitas Premium',
        description: 'Hotel dekat Masjidil Haram & Nabawi untuk kenyamanan ibadah Anda.'
    },
    {
        icon: HeartHandshake,
        title: 'Pelayanan Sepenuh Hati',
        description: 'Staff profesional siap melayani 24/7 sebelum, saat, dan sesudah umroh.'
    }
];

export default function ValueProps() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className={`islamic-pattern-bg ${styles.section}`}>
            <div className="container">

                <div className={styles.header}>
                    <span className="section-label">Nilai Kami</span>
                    <h2 className="h2 text-primary">
                        Kenapa Memilih Zikr Travel?
                    </h2>
                    <div className="gold-divider" />
                    <p className="body-text text-text-light" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                        Kami berkomitmen memberikan pelayanan terbaik untuk menjamin kenyamanan dan kekhusyukan ibadah Anda di Tanah Suci.
                    </p>
                </div>

                <div className={styles.grid}>
                    {VALUES.map((val, index) => {
                        const Icon = val.icon;
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={32} className={styles.icon} />
                                </div>
                                <h3 className={styles.cardTitle}>{val.title}</h3>
                                <p className="small-text text-text-light">{val.description}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

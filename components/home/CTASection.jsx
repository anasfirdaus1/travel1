"use client";

import { Send } from 'lucide-react';
import styles from './CTASection.module.css';
import { WHATSAPP_NUMBER, DEFAULT_WA_MESSAGE } from '@/lib/constants';

export default function CTASection() {
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_WA_MESSAGE)}`;

    return (
        <section className={styles.section}>
            <div className={styles.bgPattern} />

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className="h1 text-white" style={{ marginBottom: '24px' }}>
                        Panggilan ke <span className="text-accent">Baitullah</span> Menanti Anda
                    </h2>

                    <p className="body-text text-white" style={{ opacity: 0.85, maxWidth: '700px', margin: '0 auto 44px' }}>
                        Wujudkan perjalanan suci Anda bersama Zikr Travel. Segera konsultasikan rencana ibadah Anda dengan tim layanan pelanggan kami. Seat terbatas untuk keberangkatan terdekat.
                    </p>

                    <div className={styles.actions}>
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className={`btn btn-accent ${styles.ctaBtn}`}>
                            <Send size={20} style={{ marginRight: '12px' }} />
                            Konsultasi Gratis Sekarang
                        </a>
                        <p className={styles.contactInfo}>
                            Atau hubungi kami via telepon: <strong>+62 812 3456 7890</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

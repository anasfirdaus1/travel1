"use client";

import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import GoldParticles from '../three/GoldParticles';
import styles from './HeroSection.module.css';
import { WHATSAPP_NUMBER, DEFAULT_WA_MESSAGE } from '@/lib/constants';

export default function HeroSection() {
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_WA_MESSAGE)}`;

    return (
        <section className={styles.hero}>
            {/* Background Image with CSS Parallax */}
            <div className={styles.bgImage} />


            {/* Overlay */}
            <div className={styles.overlay} />

            {/* 3D Particles */}
            <div className={styles.canvasContainer}>
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#C8A45D" />
                    <GoldParticles count={150} />
                    <Environment preset="city" />
                </Canvas>
            </div>

            {/* Main Content — uses CSS animations, not GSAP */}
            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>✦ TERPERCAYA SEJAK 2024</div>

                <h1 className={`h1 ${styles.headline}`}>
                    Menapak Jejak Suci dengan <span className="text-accent">Khidmat & Amanah</span>
                </h1>

                <p className={`body-text ${styles.subtitle}`}>
                    Wujudkan ibadah Umroh impian Anda bersama Zikr Travel. Pengalaman yang tenang, fasilitas premium, dan pendampingan sesuai sunnah.
                </p>

                <div className={styles.buttons}>
                    <Link href="/paket-umroh" className="btn btn-primary">
                        Lihat Paket
                    </Link>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-gold">
                        Hubungi Kami
                    </a>
                </div>
            </div>

            {/* Statistics Bar */}
            <div className={styles.statsBar}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>500+</span>
                        <span className={styles.statLabel}>Jamaah</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>50+</span>
                        <span className={styles.statLabel}>Keberangkatan</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>5★</span>
                        <span className={styles.statLabel}>Rating Google</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

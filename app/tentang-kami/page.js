"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';
import styles from './TentangKami.module.css';

export default function TentangKami() {
    const pageRef = useRef(null);

    return (
        <div ref={pageRef} className={styles.page}>

            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.headerBg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2000')` }} />
                <div className={styles.headerOverlay} />
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className={styles.headerContent}>
                        <span className="section-label" style={{ color: 'var(--color-accent-light)' }}>Tentang Kami</span>
                        <h1 className="h1 text-white" style={{ marginBottom: '16px' }}>
                            PT. <span className="text-accent">ZID KABIR</span> TRAVEL
                        </h1>
                        <p className="body-text text-white" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.85 }}>
                            Mengenal lebih dekat Zikr Travel, sahabat perjalanan suci Anda menuju Baitullah.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ padding: '80px 24px' }}>
                <div className={styles.contentWrapper}>

                    {/* Section: Profile */}
                    <section className={styles.section}>
                        <div className={styles.grid2Col}>
                            <div>
                                <h2 className="h2 text-primary" style={{ marginBottom: '24px' }}>Sahabat Perjalanan Suci Anda</h2>
                                <p className="body-text text-text-light" style={{ marginBottom: '16px' }}>
                                    Zikr Travel (PT. ZID KABIR TRAVEL) adalah Penyelenggara Perjalanan Ibadah Umroh (PPIU) resmi yang berdedikasi untuk memberikan pengalaman ibadah yang khusyuk, nyaman, dan amanah sesuai dengan tuntunan sunnah Rasulullah SAW.
                                </p>
                                <p className="body-text text-text-light" style={{ marginBottom: '16px' }}>
                                    Dengan pengalaman melayani ribuan jamaah, kami memahami bahwa perjalanan ke Baitullah adalah impian setiap muslim. Oleh karena itu, kami berkomitmen untuk menjadi jembatan penghubung yang terpercaya bagi Anda dan keluarga.
                                </p>
                                <div className={styles.legalitasBox}>
                                    <ShieldCheck size={24} className="text-accent" />
                                    <div>
                                        <strong>Izin Resmi Kemenag RI (PPIU)</strong>
                                        <p className="small-text text-text-light">No. SK Penetapan: 1234 Tahun 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.imageWrapper} style={{ backgroundColor: '#ffffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    src="/images/foto-kantor.jpeg"
                                    alt="Zikr Travel"
                                    fill
                                    className={styles.image}
                                    style={{ objectFit: 'contain', padding: '24px' }}
                                />
                                <div className={styles.imageOverlay}>
                                    <span className="h3 text-accent">Amanah & Terpercaya</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Visi Misi */}
                    <section className={`${styles.section} islamic-pattern-bg`} style={{ backgroundColor: 'var(--color-bg)', padding: '64px', borderRadius: 'var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                            <div className={styles.grid2Col}>
                                <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className={styles.iconBox}><Eye size={32} /></div>
                                    <h3 className="h3 text-primary" style={{ marginBottom: '12px' }}>Visi Kami</h3>
                                    <p className="body-text text-text-light">
                                        Menjadi biro perjalanan ibadah umroh dan haji plus terdepan di Indonesia yang dikenal karena pelayanan prima, pendampingan ibadah yang sesuai sunnah, dan komitmen tinggi terhadap kepuasan jamaah.
                                    </p>
                                </div>
                                <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className={styles.iconBox}><Target size={32} /></div>
                                    <h3 className="h3 text-primary" style={{ marginBottom: '12px' }}>Misi Kami</h3>
                                    <ul className={styles.list} style={{ textAlign: 'left', display: 'inline-block' }}>
                                        <li>Memberikan edukasi manasik yang komprehensif.</li>
                                        <li>Menyediakan fasilitas akomodasi dan transportasi terbaik.</li>
                                        <li>Sistem pendaftaran dan keberangkatan yang transparan.</li>
                                        <li>Mengutamakan aspek keamanan dan kenyamanan selama perjalanan.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Komitmen */}
                    <section className={styles.section} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <HeartHandshake size={48} className="text-accent" style={{ margin: '0 auto 16px', display: 'block' }} />
                        <h2 className="h2 text-primary" style={{ marginBottom: '24px' }}>Komitmen Pelayanan</h2>
                        <p className="body-text text-text-light" style={{ fontSize: '18px' }}>
                            Bagi kami, melayani tamu Allah adalah sebuah kehormatan besar. Kami memastikan setiap staf dan Muthawif bekerja dengan dedikasi penuh rida Allah SWT, agar ibadah Anda mabrur dan penuh berkah.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

"use client";

import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import styles from './Kontak.module.css';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function Kontak() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nama = formData.get('nama');
        const pesan = formData.get('pesan');
        const text = `Halo Zikr Travel, nama saya ${nama}. ${pesan}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className={styles.page}>

            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.headerBg} style={{ backgroundColor: 'var(--color-primary-dark)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className={styles.headerContent} style={{ textAlign: 'center' }}>
                        <span className="section-label" style={{ color: 'var(--color-accent-light)' }}>Kontak</span>
                        <h1 className="h1 text-white" style={{ marginBottom: '16px' }}>
                            Hubungi <span className="text-accent">Kami</span>
                        </h1>
                        <p className="body-text text-white" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.85 }}>
                            Kami siap melayani dan menjawab setiap pertanyaan seputar perjalanan ibadah Anda.
                        </p>
                    </div>
                </div>
                <div className={styles.waveDivider}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,130.83,120.22,192,109.11,236.4,101.42,279.8,81.44,321.39,56.44Z" fill="#F5F3EF"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ padding: '60px 24px 100px' }}>
                <div className={styles.grid2Col}>

                    {/* Contact Info */}
                    <div className={styles.contactInfo}>
                        <h2 className="h2 text-primary" style={{ marginBottom: '16px' }}>Informasi Kontak</h2>
                        <div className="gold-divider" style={{ margin: '0 0 32px' }} />
                        <p className="body-text text-text-light" style={{ marginBottom: '40px' }}>
                            Jangan ragu untuk mengunjungi kantor kami atau menghubungi customer service kami yang selalu siap sedia membantu Anda.
                        </p>

                        <ul className={styles.infoList}>
                            <li>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div>
                                    <h4 className="h4 text-primary">Kantor Pusat</h4>
                                    <p className="body-text text-text-light">Jl. Contoh Alamat Ruko Mutiara No. 123, Kelurahan, Kecamatan, Kota, Provinsi 12345</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div>
                                    <h4 className="h4 text-primary">Telepon / WhatsApp</h4>
                                    <p className="body-text text-text-light">+62 812 3456 7890</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div>
                                    <h4 className="h4 text-primary">Email</h4>
                                    <p className="body-text text-text-light">info@zikrtravel.com</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><Clock size={24} /></div>
                                <div>
                                    <h4 className="h4 text-primary">Jam Operasional</h4>
                                    <p className="body-text text-text-light">Senin - Jumat: 08:00 - 17:00<br />Sabtu: 08:00 - 14:00<br />Minggu: Libur</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className={styles.interactiveSide}>
                        <div className={styles.card}>
                            <h3 className="h3 text-primary" style={{ marginBottom: '8px' }}>Kirim Pesan</h3>
                            <div className="gold-divider" style={{ margin: '0 0 28px' }} />
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="nama">Nama Lengkap</label>
                                    <input type="text" id="nama" name="nama" required placeholder="Masukkan nama Anda" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="pesan">Pesan / Pertanyaan</label>
                                    <textarea id="pesan" name="pesan" rows="4" required placeholder="Tuliskan pertanyaan Anda di sini..."></textarea>
                                </div>
                                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                    <Send size={18} style={{ marginRight: '8px' }} />
                                    Kirim Pesan via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Google Maps */}
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3051065715566!2d106.8209355152917!3d-6.223440195493026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb70cbb435%3A0x1bce3e62557e4948!2sJakarta!5e0!3m2!1sid!2sid!4v1714902403623!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Kantor Zikr Travel"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

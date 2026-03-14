import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.borderPattern}></div>
            <div className={`container ${styles.footerContainer}`}>

                {/* Brand Column */}
                <div className={styles.col}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/images/logo-full.png" alt="ZIKR Travel Logo" width={240} height={65} className={styles.logoImage} />
                    </Link>
                    <p className="small-text text-text-light" style={{ marginTop: '16px', marginBottom: '24px' }}>
                        Menapak Jejak Suci dengan Khidmat & Amanah. Travel Umroh resmi & terpercaya dengan pengalaman melayani ribuan jamaah ke tanah suci.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
                    </div>
                </div>

                {/* Links Column */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Tautan Cepat</h4>
                    <ul className={styles.links}>
                        <li><Link href="/tentang-kami">Tentang Kami</Link></li>
                        <li><Link href="/paket-umroh">Paket Umroh</Link></li>
                        <li><Link href="/galeri">Galeri Jamaah</Link></li>
                        <li><Link href="/kontak">Hubungi Kami</Link></li>
                        <li><Link href="#">Syarat & Ketentuan</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Hubungi Kami</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <MapPin size={18} className="text-accent" />
                            <span className="small-text text-text-light">Jl. Contoh Alamat No. 123, Kota Anda, Provinsi, Indonesia</span>
                        </li>
                        <li>
                            <Phone size={18} className="text-accent" />
                            <span className="small-text text-text-light">+62 812 3456 7890</span>
                        </li>
                        <li>
                            <Mail size={18} className="text-accent" />
                            <span className="small-text text-text-light">info@zikrtravel.com</span>
                        </li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Izin Resmi</h4>
                    <p className="small-text text-text-light">
                        PT. ZID KABIR TRAVEL<br />
                        Izin PPIU No: 1234/2024
                    </p>
                    <div className={styles.badges}>
                        <div className={styles.badge}>Kemenag RI</div>
                        <div className={styles.badge}>IATA</div>
                    </div>
                </div>

            </div>

            <div className={styles.bottom}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                    <p className="small-text text-text-light">© {new Date().getFullYear()} Zikr Travel. All rights reserved.</p>
                    <p className="small-text text-text-light">Developed for Zikr Travel</p>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(!isHomePage);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // If not on homepage, always keep it "scrolled" (solid background)
        if (!isHomePage) {
            setIsScrolled(true);
            return;
        }

        // On homepage, listen to scroll events
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Set initial state for homepage
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/images/logo-full.png" alt="ZIKR Travel Logo" width={220} height={60} className={styles.logoImage} />
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/tentang-kami">Tentang Kami</Link></li>
                        <li><Link href="/paket-umroh">Paket Umroh</Link></li>
                        <li><Link href="/galeri">Galeri</Link></li>
                        <li><Link href="/kontak">Kontak</Link></li>
                    </ul>
                    <a href="https://wa.me/6281234567890?text=Halo%20Zikr%20Travel,%20saya%20ingin%20bertanya%20tentang%20paket%20Umroh."
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-accent">
                        Hubungi Kami
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavLinks}>
                        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link href="/tentang-kami" onClick={toggleMenu}>Tentang Kami</Link></li>
                        <li><Link href="/paket-umroh" onClick={toggleMenu}>Paket Umroh</Link></li>
                        <li><Link href="/galeri" onClick={toggleMenu}>Galeri</Link></li>
                        <li><Link href="/kontak" onClick={toggleMenu}>Kontak</Link></li>
                    </ul>
                    <a href="https://wa.me/6281234567890?text=Halo%20Zikr%20Travel,%20saya%20ingin%20bertanya%20tentang%20paket%20Umroh."
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-accent" style={{ width: '100%', marginTop: '20px' }}
                        onClick={toggleMenu}>
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </header>
    );
}

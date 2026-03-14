"use strict";
"use client";

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';
import { WHATSAPP_NUMBER, DEFAULT_WA_MESSAGE } from '@/lib/constants';

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after 300px scroll
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_WA_MESSAGE)}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.floatBtn} ${isVisible ? styles.visible : ''}`}
            aria-label="Chat via WhatsApp"
        >
            <div className={styles.iconContainer}>
                <MessageCircle size={32} />
            </div>
        </a>
    );
}

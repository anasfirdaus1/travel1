"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';
import { FAQS } from '@/lib/constants';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className="container">

                <div className={styles.header}>
                    <span className="section-label">FAQ</span>
                    <h2 className="h2 text-primary">Pertanyaan Umum</h2>
                    <div className="gold-divider" />
                    <p className="body-text text-text-light" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                        Informasi lengkap seputar pendaftaran, perlengkapan, dan teknis keberangkatan umroh.
                    </p>
                </div>

                <div className={styles.accordionContainer}>
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
                                <button className={styles.accordionHeader} onClick={() => toggleAccordion(index)} aria-expanded={isOpen}>
                                    <span className={styles.question}>{faq.question}</span>
                                    <div className={styles.iconWrapper}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <div className={styles.accordionContent} style={{ maxHeight: isOpen ? '500px' : '0' }}>
                                    <p className={styles.answer}>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

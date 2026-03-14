import PackageCards from '@/components/home/PackageCards';
import CTASection from '@/components/home/CTASection';

export const metadata = {
    title: 'Paket Umroh | Zikr Travel',
    description: 'Pilihan paket umroh Reguler, Plus Turki, dan VIP Ramadhan dari Zikr Travel.',
};

export default function PaketUmrohPage() {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div style={{ padding: '60px 24px 20px', textAlign: 'center' }}>
                <h1 className="h1 text-primary">Katalog Paket Umroh</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '24px auto 0' }} />
            </div>

            {/* We reuse the PackageCards component which handles the display */}
            <PackageCards />

            <CTASection />
        </div>
    );
}

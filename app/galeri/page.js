import Gallery from '@/components/home/Gallery';

export const metadata = {
    title: 'Galeri Jamaah | Zikr Travel',
    description: 'Dokumentasi perjalanan umroh jamaah Zikr Travel di tanah suci Makkah dan Madinah.',
};

export default function GaleriPage() {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-white)' }}>
            <div style={{ padding: '60px 24px 20px', textAlign: 'center' }}>
                <h1 className="h1 text-primary">Galeri Perjalanan</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '24px auto 0' }} />
            </div>

            {/* We reuse the Gallery component which handles the filter and lightbox */}
            <Gallery />
        </div>
    );
}

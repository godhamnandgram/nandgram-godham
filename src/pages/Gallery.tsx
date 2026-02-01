import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';

const CARD_WIDTH = 300;   // consistent width
const CARD_HEIGHT = 220; // slight rectangle

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const images = [
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778487/12_tl9xfe_zfmx90.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778479/7_pbzd7x_hxsycj.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778486/11_zmqql3_hmxmwk.webp', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778485/10_omkqyw_jtfxf6.webp', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778477/4_exjqkb_wi78l6.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769779112/20260125_122927_gkzlxf_fnys9a.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778480/8_d4ccax_zprrzw.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778481/9_apfyeh_lpqxxh.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778478/5_f4qewn_atyxku.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778475/3_jpmowu_isyuep.webp', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778488/20260125_120318_hx6ulw_z7a6zo.jpg', title: '' },
    { src: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400,h_300,c_fill,g_auto/v1769778489/20260125_121407_xg4uny_c87ccq.jpg', title: '' },
  ];

  const row1 = images.slice(0, 4);
  const row2 = images.slice(4, 8);
  const row3 = images.slice(8, 12);

  const Row = ({
    data,
    direction,
    duration,
  }: {
    data: typeof images;
    direction: 'left' | 'right';
    duration: number;
  }) => (
    <div className="overflow-hidden">
      <div
        className={cn(
          'flex gap-6 w-max',
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {[...data, ...data].map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(img)}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <h3 className="text-white font-display font-semibold text-lg">
                {img.title}
              </h3>
            </div>

            <div className="absolute top-3 right-3 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ZoomIn className="w-5 h-5 text-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: marquee-left linear infinite;
          will-change: transform;
        }

        .animate-marquee-right {
          animation: marquee-right linear infinite;
          will-change: transform;
        }

        @media (hover: hover) {
          .animate-marquee-left:hover,
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        }

        @media (max-width: 768px) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-duration: 18s !important;
          }
        }
      `}</style>

      {/* Spacer from Navbar */}
      <section className="pt-20 pb-14">
        <div className="space-y-8">
          <Row data={row1} direction="left" duration={28} />
          <Row data={row2} direction="right" duration={32} />
          <Row data={row3} direction="left" duration={36} />
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <X className="text-white" />
          </button>

          <img
            src={selectedImage.src.replace('w=400', 'w=1400')}
            alt={selectedImage.title}
            className="max-h-[80vh] rounded-2xl shadow-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

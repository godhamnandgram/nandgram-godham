// Key changes to fix flickering:
// 1. Pause autoplay when user is actively scrolling
// 2. Smoother transition timing
// 3. Better initial state handling
// 4. Scroll-aware carousel control

import { Camera, TreePine, Waves, Ship, Shield, PartyPopper, Image, ArrowRight, Sparkles, MapPin, Clock, Users, Star, Heart, Zap, Award, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useState, useEffect, useRef, useCallback } from 'react';

const cdn = (url: string, w = 800) =>
  url.replace('/upload/', `/upload/f_auto,q_auto,w_${w},c_fill/`);


const Experiences = () => {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCarousels, setActiveCarousels] = useState({});
  const [visibleSections, setVisibleSections] = useState(new Set([0]));
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Optimized scroll handler with throttling + scroll detection
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Mark as scrolling
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set timeout to mark scrolling as finished
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Wait 150ms after scroll stops

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight - windowHeight;
          const scrolled = window.scrollY;
          const progress = (scrolled / documentHeight) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Intersection Observer for lazy loading sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt((entry.target as HTMLElement).dataset.sectionIndex || '0');
            setVisibleSections(prev => new Set([...prev, sectionIndex]));
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    const sections = document.querySelectorAll('.experience-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Preload first experience images
  useEffect(() => {
    const firstBg = new window.Image();
    firstBg.src = cdn(experiences[0].bgImage, 1200);

    experiences[0].images.slice(0, 2).forEach(imgSrc => {
      const img = new window.Image();
      img.src = cdn(imgSrc, 900);
    });
  }, []);

  const experiences = [
    {
      key: 'piccity',
      icon: Camera,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769756175/20260125_130955_gzr6lc_nykt2o.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769756168/20260125_130640_klmouq_ylr6id.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769756168/20260125_130347_ojqhbh_apdvlg.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769756169/20260125_130607_iulxxv_egz4c7.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769756167/20260125_130407_ye6vje_tdztb4.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769756173/20260125_130823_tmmwef_nyxvkt.jpg',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      key: 'waterpark',
      icon: Waves,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757284/20260125_125241_oecmsz_hvruik.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757290/20260125_125405_pyafel_w8dgrd.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757283/20260125_124905_jr9sws_uwsode.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757293/20260125_125838_mphgrl_cvnbnp.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757283/20260125_125159_b64lr6_yiyirx.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757283/20260125_125159_b64lr6_yiyirx.jpg',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      key: 'aaplegaon',
      icon: TreePine,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757828/20260125_121338_t1f0j2_xeoogq.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757835/20260125_121429_czpwdc_chur98.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757843/20260125_121615_owt0s5_mx4f4x.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757835/20260125_121419_mnuwsu_vzhtlw.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757841/20260125_121436_woqnye_jzuicd.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769757829/20260125_121328_itla24_q1qndn.jpg',
      color: 'from-green-600 to-emerald-700',
    },
    {
      key: 'gautirth',
      icon: Heart,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758603/20260125_121151_xvswlh_qe4ygn.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758597/20260125_120643_wnohmr_ihkv0z.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758600/20260125_120714_xjksv7_pcsdmk.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758593/20260125_120629_fcowbo_qoiomd.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758590/20260125_120604_germ8v_ezyy4f.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758588/20260125_120449_iwizyz_ksw8ei.jpg',
      color: 'from-amber-600 to-orange-700',
    },
    {
      key: 'gaushala',
      icon: Home,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758652/20260125_121751_pszukp_p0xyfn.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758638/20260125_121715_e6uubx_u5zait.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758644/20260125_121720_gtetmn_vafb7d.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758634/20260125_121706_ejcjj4_jalbbr.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758657/20260125_121807_xe0vl6_wf2opn.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769758629/20260125_121615_eiezpy_ztztgd.jpg',
      color: 'from-lime-600 to-green-700',
    },
    {
      key: 'boating',
      icon: Ship,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759261/10_m3sbew_lhwuiv.webp',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759221/20260125_122419_s5rdly_l5tm33.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759213/20260125_122236_cikmhx_tx8dtk.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759214/20260125_122334_ov7sgt_mj4zg8.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759211/20260125_122233_a7a9xx_kgpzzh.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759217/20260125_122338_hcd7fg_xx5kpt.jpg',
      color: 'from-teal-600 to-cyan-700',
    },
    {
      key: 'pixopark',
      icon: Zap,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759600/20260125_123131_l7e4f2_c03a6b.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759615/20260125_123250_kb1rlu_clvleu.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759611/20260125_123235_lba2rn_skvc7q.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759608/20260125_123226_eqwgrl_dpecdk.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759603/20260125_123155_nkuelb_rhm6rs.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759604/20260125_123214_pmexi9_wv7kro.jpg',
      color: 'from-purple-600 to-pink-700',
    },
    {
      key: 'shauryavan',
      icon: Shield,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759933/20260125_122852_ylujas_oibk0q.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759943/20260125_123028_cpftrf_je3dhw.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759935/20260125_122857_pzsynv_m4znzy.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759939/20260125_122925_se63lx_kapft9.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759947/20260125_131055_ugptgo_akocne.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769759939/20260125_122925_se63lx_kapft9.jpg',
      color: 'from-red-600 to-orange-700',
    },
    {
      key: 'swimmingpool',
      icon: Waves,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769688012/unnamed_14_k0tghc.webp',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769687602/unnamed_2_e2efvp.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769687607/unnamed_b6wmvo.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769687991/unnamed_15_jxgj91.webp',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769687990/unnamed_16_ttdx2y.webp'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769687605/unnamed_1_v9ewtl.jpg',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      key: 'tents',
      icon: Home,
      images: [
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769760267/20260125_123748_gdnflr_hk4nof.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769760271/20260125_123919_f4zo5x_talwhh.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769760269/20260125_123819_vihrpq_iqftl2.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769760275/20260125_123923_szoe16_dsctuo.jpg',
        'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769760283/20260125_124520_dxrfh9_rdh3cc.jpg'
      ],
      bgImage: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769760283/20260125_124520_dxrfh9_rdh3cc.jpg',
      color: 'from-emerald-600 to-teal-700',
    },
  ];

  const handleCarouselChange = useCallback((expKey, direction) => {
    setActiveCarousels(prev => {
      const currentIndex = prev[expKey] || 0;
      const exp = experiences.find(e => e.key === expKey);
      if (!exp) return prev;
      const maxIndex = exp.images.length - 1;

      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }

      return { ...prev, [expKey]: newIndex };
    });
  }, []);

  const Carousel3D = ({ images, expKey, color, isVisible }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [loadedImages, setLoadedImages] = useState(new Set([0]));
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
      if (activeCarousels[expKey] !== undefined) {
        setCurrentIndex(activeCarousels[expKey]);
      }
    }, [activeCarousels, expKey]);

    useEffect(() => {
      if (isVisible) {
        const imagesToLoad = new Set(loadedImages);
        imagesToLoad.add(currentIndex);
        imagesToLoad.add((currentIndex - 1 + images.length) % images.length);
        imagesToLoad.add((currentIndex + 1) % images.length);
        setLoadedImages(imagesToLoad);
        
        // Mark as initialized after first load
        if (!isInitialized) {
          setTimeout(() => setIsInitialized(true), 100);
        }
      }
    }, [currentIndex, isVisible, images.length]);

    // AUTO-PLAY LOGIC - ONLY when:
    // 1. Carousel is visible
    // 2. User is NOT scrolling
    // 3. User is NOT hovering
    // 4. Carousel is initialized
    useEffect(() => {
      if (!isAutoPlay || !isVisible || isScrolling || !isInitialized) return;

      const interval = setInterval(() => {
        handleCarouselChange(expKey, 'next');
      }, 3000); // Slower autoplay (3 seconds instead of 2.5)

      return () => clearInterval(interval);
    }, [isAutoPlay, expKey, isVisible, isScrolling, isInitialized]);

    const getImageStyle = (index) => {
      const total = images.length;
      const diff = index - currentIndex;

      let normalizedDiff = diff;
      if (diff > total / 2) normalizedDiff = diff - total;
      if (diff < -total / 2) normalizedDiff = diff + total;

      const maxAngle = 70;
      const angle = (normalizedDiff / Math.ceil(total / 2)) * maxAngle;

      const distance = window.innerWidth < 768 ? 250 : 600;
      const rotateY = angle;
      const translateX = Math.sin((angle * Math.PI) / 180) * (distance * 0.7);
      const translateZ = -Math.abs(normalizedDiff) * 180 - (Math.cos((angle * Math.PI) / 180) - 1) * distance * 0.3;

      const scale = 1 - Math.abs(normalizedDiff) * 0.15;
      const opacity = Math.max(0.4, 1 - Math.abs(normalizedDiff) * 0.15);
      const zIndex = 100 - Math.abs(normalizedDiff) * 10;

      return {
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
      };
    };

    return (
      <div className="relative w-full h-[350px] md:h-[420px] lg:h-[500px] overflow-visible">
        <div
          className="absolute inset-0 flex items-center justify-center overflow-visible"
          style={{ perspective: '2000px', perspectiveOrigin: 'center center' }}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {images.map((image, index) => {
              const isCenter = index === currentIndex;
              const shouldLoad = isVisible && (loadedImages.has(index) || Math.abs(index - currentIndex) <= 1);

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-1000 ease-out cursor-pointer will-change-transform"
                  style={{
                    ...getImageStyle(index),
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center',
                  }}
                  onClick={() => {
                    setActiveCarousels(prev => ({ ...prev, [expKey]: index }));
                  }}
                >
                  <div className={`relative rounded-xl overflow-hidden ${isCenter
                    ? 'w-[220px] h-[300px] md:w-[300px] md:h-[380px] lg:w-[350px] lg:h-[450px] shadow-2xl'
                    : 'w-[180px] h-[240px] md:w-[250px] md:h-[320px] lg:w-[300px] lg:h-[380px] shadow-xl'
                    }`}>
                    {shouldLoad ? (
                      <img
                        src={cdn(image, 900)}
                        srcSet={`
                          ${cdn(image, 400)} 400w,
                          ${cdn(image, 600)} 600w,
                          ${cdn(image, 900)} 900w
                        `}
                        sizes="(max-width: 640px) 400px,
                        (max-width: 1024px) 600px,
                        900px"
                        alt={`${t(`exp.${expKey}.title`)} ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />

                    ) : (
                      <div className="w-full h-full bg-gray-800 animate-pulse" />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent ${isCenter ? 'opacity-20' : 'opacity-50'
                      } transition-opacity duration-300`} />

                    {isCenter && (
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium">
                        {index + 1} / {images.length}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
          <button
            onClick={() => handleCarouselChange(expKey, 'prev')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>

          <div className="flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCarousels(prev => ({ ...prev, [expKey]: index }))}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-6 h-1.5 bg-white'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleCarouselChange(expKey, 'next')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <style>{`

  html {
    scroll-behavior: smooth;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .font-display {
    line-height: 1.5;
    padding-top: 0.2em;
    padding-bottom: 0.15em;
  }

  [lang="hi"] .font-display,
  [lang="mr"] .font-display {
    font-family: 'Noto Sans Devanagari', system-ui, sans-serif;
    line-height: 1.6 !important;
    padding-top: 0.25em !important;
    padding-bottom: 0.2em !important;
  }

  .modern-body {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.7;
  }

  [lang="hi"] .modern-body,
  [lang="mr"] .modern-body {
    font-family: 'Noto Sans Devanagari', sans-serif;
    line-height: 1.8 !important;
  }

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #10b981, #059669, #14b8a6, #0d9488);
    transition: width 0.1s ease-out;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.5);
    will-change: width;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .gradient-text {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.5 !important;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    display: inline-block;
  }

  .experience-section {
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
    will-change: transform;
  }

  .experience-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 100%);
    z-index: 1;
  }

  .experience-content {
    position: relative;
    z-index: 2;
  }

  h1, h2, h3, h4, h5, h6 {
    overflow: visible !important;
  }

  @media (min-width: 768px) {
    .experience-section {
      background-attachment: scroll !important;
    }
  }

  * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }
`}</style>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Experiences Section with 3D Carousels */}
      <div id="experiences" className="bg-black">
        {experiences.map((exp, idx) => (

          <section
            key={exp.key}
            data-section-index={idx}
            className={`experience-section flex items-center py-16 md:py-20 ${idx === experiences.length - 1 ? '' : 'min-h-[85vh]'
              }`}
            style={{
              backgroundImage: visibleSections.has(idx) ? `url(${cdn(exp.bgImage, 1200)})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'scroll',
              backgroundColor: '#000',
            }}
          >
            <div className="container mx-auto px-4 md:px-6 experience-content">
              <div className="max-w-[1400px] mx-auto">
                <div className={`grid lg:grid-cols-12 gap-6 md:gap-10 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Content Side - 5 columns */}
                  <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-8' : ''} text-white space-y-3 md:space-y-4`}>
                    {/* Number Badge */}
                    <div className="inline-flex items-center gap-2 md:gap-3">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-xl`}>
                        <exp.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="modern-body text-3xl md:text-4xl lg:text-5xl font-bold text-white/20">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                      {t(`exp.${exp.key}.title`)}
                    </h2>

                    {/* Description */}
                    <p className="modern-body text-sm md:text-base text-gray-200 leading-relaxed">
                      {t(`exp.${exp.key}.desc`)}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 md:space-y-2">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                          <span className="modern-body text-xs md:text-sm text-gray-200">
                            {t(`exp.${exp.key}.feature${num}`)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="glass-effect rounded-full px-3 py-1.5">
                          <span className="modern-body text-xs text-white">
                            {t(`exp.${exp.key}.highlight${num}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Carousel Side - 7 columns */}
                  <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} mt-8 lg:mt-0`}>
                    {visibleSections.has(idx) && (
                      <Carousel3D
                        images={exp.images}
                        expKey={exp.key}
                        color={exp.color}
                        isVisible={visibleSections.has(idx)}
                      />
                    )}
                  </div>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>


    
      {/* ======================================================
   FINAL CTA – CONSISTENT WITH HOME PAGE
====================================================== */}
      <section className="relative py-28 overflow-hidden">

        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">

            {/* Heading */}
            <h2 className="font-display text-2xl md:text-3xl font-semibold leading-[1.5] mb-6 pt-2">
              <span className="block mb-4 leading-[1.5]">
                {t('section.visit.title')}
              </span>
              <span className="block gradient-text leading-[1.5]">
                {t('section.visit.highlight')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {t('section.visit.desc')}
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                className="btn-tropical text-lg px-10 py-6 rounded-full group shadow-xl"
              >
                <Link to="/plan-your-visit">
                  {t('section.visit.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Experiences;
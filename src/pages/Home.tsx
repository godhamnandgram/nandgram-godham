import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Camera, TreePine, Waves, MapPin,
  Sparkles, Leaf, Sun, Home as HomeIcon, Tent,
  Heart, Shield, Cross, Baby, Armchair, SprayCan,
  Star, Award, CheckCircle, Clock, Car, Bus, Train,
  Phone, GraduationCap, UsersRound, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

// Testimonials Carousel Component
const TestimonialsCarousel = ({ t }: { t: (key: string) => string }) => {
  const [index, setIndex] = useState(0);

  const testimonials = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* MOBILE SLIDER */}
      <div className="sm:hidden flex justify-center">
        {testimonials.map((id, i) =>
          i === index ? (
            <div
              key={id}
              className="relative bg-white rounded-[28px] p-6 shadow-lg w-full max-w-sm
                         animate-fade-in transition-all duration-500"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 rounded-full 
                              bg-primary flex items-center justify-center text-white shadow-md">
                ❝
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mt-6 mb-4">
                {t(`testimonial.${id}.review`)}
              </p>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <p className="font-semibold text-foreground text-sm">
                {t(`testimonial.${id}.name`)}
              </p>
              <p className="text-xs text-muted-foreground">
                {t(`testimonial.${id}.role`)}
              </p>

              <div className="absolute bottom-4 right-5 text-muted-foreground/20 text-4xl">
                ❞
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((id, idx) => (
          <div
            key={id}
            className="relative bg-white rounded-[28px] p-6 shadow-lg
                       hover:-translate-y-1 transition-all duration-300"
            style={{ transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)" }}
          >
            <div className="absolute -top-5 left-6 w-12 h-12 rounded-full 
                            bg-primary flex items-center justify-center text-white shadow-md">
              ❝
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mt-6 mb-4">
              {t(`testimonial.${id}.review`)}
            </p>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>

            <p className="font-semibold text-foreground text-sm">
              {t(`testimonial.${id}.name`)}
            </p>
            <p className="text-xs text-muted-foreground">
              {t(`testimonial.${id}.role`)}
            </p>

            <div className="absolute bottom-4 right-5 text-muted-foreground/20 text-4xl">
              ❞
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

{/* Section 4 Component */ }
const PersonaGrid = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      key: 'home.personas.families',
      img: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751393/families_sh4nus.png',
      delay: '0ms',
    },
    {
      key: 'home.personas.kids',
      img: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751394/kids_gqkoxd.jpg',
      delay: '100ms',
    },
    {
      key: 'home.personas.friends',
      img: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751392/friends_qgabgs.jpg',
      delay: '200ms',
    },
    {
      key: 'home.personas.schools',
      img: 'https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751442/school_boats8.jpg',
      delay: '300ms',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
    >
      {items.map((item) => (
        <div
          key={item.key}
          className={`flex flex-col items-center text-center
            transition-all duration-700 ease-out
            ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
          style={{ transitionDelay: item.delay }}
        >
          {/* FIXED SIZE CARD (SAME FOR ALL) */}
          <div
            className="
              w-full h-[220px] md:h-[240px]
              rounded-2xl bg-white
              shadow-md flex items-center justify-center
              transition-all duration-300
              hover:scale-105 hover:shadow-xl
            "
          >
            <img
              src={item.img}
              loading="lazy"
              decoding="async"
              alt={t(item.key)}
              className="
                max-h-[160px] md:max-h-[180px]
                max-w-full object-contain
              "
            />
          </div>

          {/* Label */}
          <p className="mt-4 font-display text-base md:text-lg font-semibold text-foreground">
            {t(item.key)}
          </p>
        </div>
      ))}
    </div>
  );
};



{/* Component */ }
const StatsCarousel = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400/v1769748904/2_p3u6v6_fkgk7e.png',
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400/v1769748904/3_moxdpq_thw7d6.png',
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400/v1769748904/5_awuc6t_wnh8oj.png',
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400/v1769748903/1_dnefej_txarhu.png',
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_400/v1769748904/4_drar73_nkbds8.png',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative mx-auto
  h-[280px] w-full max-w-[300px]
  sm:h-[320px] sm:max-w-[340px]
  md:h-[360px] md:max-w-[380px]
  lg:h-[400px] lg:max-w-[450px]
  overflow-hidden">



      {/* 🖼 Actual Image */}
      <div className="absolute inset-[10%] sm:inset-[12%] rounded-2xl sm:rounded-3xl overflow-hidden z-10 group">
        <img
          src={slides[currentSlide].imageUrl}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>

    </div>

  );
};

//sect3



export const ExperienceStack = ({ experiences }) => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const images = [
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749784/7_yc9s2h_rioxna.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749795/15_z0ewp4_nqsgf5.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749788/11_dh2ins_t46uik.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749794/14_ecekq7_cmhj15.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749784/6_rlkqmn_kg97b5.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749785/9_zhact3_mvxmzp.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749790/12_irorgy_spqbts.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749799/20_Recreational_Activities_5_bovrgj_mj0ufi.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749793/13_yxcu6u_zl34y3.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749787/10_bonc6c_aeqkjl.png",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769749785/8_dptuvd_tvuwmn.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % experiences.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [experiences.length]);

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-center">
      {/* IMAGE STACK */}
      <div className="relative min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex items-center justify-center">
        {[-1, 0, 1].map((offset) => {
          const index = (active + offset + images.length) % images.length;
          const img = images[index];

          let style =
            offset === 0
              ? "z-30 scale-100 opacity-100 translate-x-0"
              : offset === 1
                ? "z-20 scale-90 opacity-60 translate-x-[140px]"
                : "z-20 scale-90 opacity-60 -translate-x-[140px]";

          return (
            <img
              key={index}
              src={img}
              loading="lazy"
              decoding="async"
              className={`absolute w-[260px] sm:w-[300px] md:w-[340px] aspect-square rounded-3xl object-cover shadow-2xl transition-all duration-700 ease-in-out ${style}`}
              alt=""
            />
          );
        })}
      </div>

      {/* TEXT */}
      <div className="space-y-6 text-center lg:text-left">
        <h3 className="font-display text-3xl md:text-4xl font-bold">
          {t(experiences[active].nameKey)}
        </h3>

        <p className="text-muted-foreground text-lg">
          {t(experiences[active].descKey)}
        </p>

        <Button asChild size="lg" className="btn-tropical">
          <Link to="/experiences">
            {t("section.experiences.button")} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

      </div>
    </div>
  );
};





// Journey Roadmap Component with Animation
const JourneyRoadmap = ({ steps }) => {
  const { t } = useLanguage();
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    setVisibleSteps([0]);
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setVisibleSteps((prev) => [...prev, currentStep]);
      } else {
        clearInterval(interval);
      }
    }, 800);
  };

  const replayAnimation = () => {
    setVisibleSteps([]);
    setTimeout(() => startAnimation(), 100);
  };

  return (
    <div className="relative" ref={sectionRef}>
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-8 relative">
          {/* Animated Path Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-300 to-cyan-200" />
          <div
            className="absolute top-32 left-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 transition-all duration-1000 ease-out"
            style={{ width: `${(visibleSteps.length / steps.length) * 100}%` }}
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(idx);

            return (
              <div
                key={step.step}
                className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                {/* Illustration Circle */}
                <div className={`relative mb-6 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'
                  }`}>
                  {/* Outer Ring */}
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center relative group hover:scale-110 transition-transform">
                    {/* Inner Circle */}
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center relative overflow-hidden">
                      {/* Icon Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {step.icon ? (
                        (() => {
                          const Icon = step.icon;
                          return <Icon className="h-14 w-14 text-emerald-600 relative z-10" />;
                        })()
                      ) : (
                        <img
                          src={step.image}
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      )}
                    </div>
                  </div>

                  {/* Connecting Node */}
                  <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-500 ${isVisible ? 'bg-emerald-600 scale-100' : 'bg-gray-300 scale-0'
                    }`}>
                    <div className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-75" />
                  </div>
                </div>

                {/* Step Label - NO NUMBER */}
                <div className={`mt-8 text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <p className="text-sm text-muted-foreground leading-snug max-w-[140px] font-medium">
                    {t(step.textKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-teal-300 to-cyan-200" />
        <div
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-emerald-600 via-teal-600 to-cyan-600 transition-all duration-1000 ease-out"
          style={{ height: `${(visibleSteps.length / steps.length) * 100}%` }}
        />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(idx);

            return (
              <div
                key={step.step}
                className={`flex items-start gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
              >
                {/* Icon Circle - NO NUMBER */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'
                    }`}>
                    <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                      {step.icon ? (
                        (() => {
                          const Icon = step.icon;
                          return <Icon className="h-7 w-7 text-emerald-600" />;
                        })()
                      ) : (
                        <img
                          src={step.image}
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pt-2 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <div className="glass-card p-5 rounded-2xl">
                    <p className="text-foreground font-medium leading-relaxed">
                      {t(step.textKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Replay Animation Button */}
      <div className="text-center mt-12">
        <button
          onClick={replayAnimation}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:shadow-lg transition-all hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            {t("section.journey.button")}
          </span>
        </button>
      </div>
    </div>
  );
};

const Home = () => {

  const [openMap, setOpenMap] = useState(false);

  // Awards Coverflow Component
  const awardImages = [
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359080/award1_zd0eeu.jpg",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359080/award2_swgizr.jpg",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359081/award3_qopj4z.jpg",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359084/award4_v2dheb.jpg",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359087/award5_itv17q.jpg",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359089/award6_yt9adj.jpg",
    "https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/v1769359094/award7_kd1opt.jpg",
  ];


  const [activeAward, setActiveAward] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAward((prev) => (prev + 1) % awardImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);



  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      type: "video",
      src: "https://res.cloudinary.com/dzaasf1ph/video/upload/f_mp4,vc_h264,ac_none,so_0,eo_0,du_60,br_2000k/v1769749393/slide1_wcg9up_rwjkbp.mp4",
      titleKey: "hero.slide1.title",
      subtitleKey: "hero.slide1.subtitle",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dzaasf1ph/video/upload/f_mp4,vc_h264,ac_none,so_0,eo_0,du_60,br_2000k/v1769749401/Slide2_xiw81w_ibxvbl.mp4",
      titleKey: "hero.slide2.title",
      subtitleKey: "hero.slide2.subtitle",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dzaasf1ph/video/upload/f_mp4,vc_h264,ac_none,so_0,eo_0,du_60,br_2000k/v1769749395/Slide3_wddxts_z5zlqp.mp4",
      titleKey: "hero.slide3.title",
      subtitleKey: "hero.slide3.subtitle",
    },
  ];


  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);


  // Section 3: Signature Experiences
  const signatureExperiences = [
    { nameKey: 'exp.aplegaon', descKey: 'exp.aplegaon.descp', size: 'large', path: '/experiences/aaple-gaon' },
    { nameKey: 'exp.piccity', descKey: 'exp.piccity.descp', size: 'medium', path: '/experiences/pic-city' },
    { nameKey: 'exp.shauryavan', descKey: 'exp.shauryavan.descp', size: 'medium', path: '/experiences/shauryavan' },
    { nameKey: 'exp.waterpark', descKey: 'exp.waterpark.descp', size: 'large', path: '/experiences/waterpark' },
    { nameKey: 'exp.gautirth', descKey: 'exp.gautirth.descp', size: 'small', path: '/experiences/gautirth' },
    { nameKey: 'exp.carnival', descKey: 'exp.carnival.descp', size: 'medium', path: '/experiences/carnival-street' },
    { nameKey: 'exp.pixopark', descKey: 'exp.pixopark.descp', size: 'small', path: '/experiences/pixo-park' },
    { nameKey: 'exp.swimmingpool', descKey: 'exp.swimmingpool.descp', size: 'small', path: '/experiences/swimming-pool' },
    { nameKey: 'exp.tents', descKey: 'exp.tents.descp', size: 'medium', path: '/experiences/tents-cottages' },
    { nameKey: 'exp.boating', descKey: 'exp.boating.descp', size: 'small', path: '/experiences/boating-point' },
    { nameKey: 'exp.gaushala', descKey: 'exp.gaushala.descp', size: 'small', path: '/experiences/gaushala' },
  ];

  // Section 4: Personas
  const personas = [
    { titleKey: 'home.personas.families', descKey: 'home.personas.families.desc', icon: Heart, color: 'bg-tertiary/15 border-tertiary/30' },
    { titleKey: 'home.personas.kids', descKey: 'home.personas.kids.desc', icon: Baby, color: 'bg-secondary/15 border-secondary/30' },
    { titleKey: 'home.personas.friends', descKey: 'home.personas.friends.desc', icon: UsersRound, color: 'bg-accent/20 border-accent/40' },
    { titleKey: 'home.personas.schools', descKey: 'home.personas.schools.desc', icon: GraduationCap, color: 'bg-primary/15 border-primary/30' },
  ];


  // Section 6: Journey Steps
  const journeySteps = [
    {
      step: 1,
      textKey: 'home.journey.step1',
      image: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_150,c_fill,g_auto/v1769748249/20260125_122621_p2qwtc_qahn24.jpg'
    },
    {
      step: 2,
      textKey: 'home.journey.step2',
      image: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_150,c_fill,g_auto/v1769748252/20260125_121645_xt3g8i_nl4b7h.jpg'
    },
    {
      step: 3,
      textKey: 'home.journey.step3',
      image: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_150,c_fill,g_auto/v1769748249/20260125_122754_ejynth_bsof0a.jpg'
    },
    {
      step: 4,
      textKey: 'home.journey.step4',
      image: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_150,c_fill,g_auto/v1769748252/20260125_122419_d6mxw0_hfmouh.jpg'
    },
    {
      step: 5,
      textKey: 'home.journey.step5',
      image: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_150,c_fill,g_auto/v1769748250/20260125_130655_wb6ag3_uzlihp.jpg'
    },
    {
      step: 6,
      textKey: 'home.journey.step6',
      image: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_150,c_fill,g_auto/v1769748249/unnamed_nclnya_kyhjd7.webp'
    },
  ];


  // Section 7: Recognition
  const recognitionPoints = [
    'home.recognition.quality',
    'home.recognition.clean',
    'home.recognition.family',
    'home.recognition.cultural',
  ];

  // Section 8: Safety Features
  const safetyFeatures = [
    { titleKey: 'home.safety.washrooms', icon: SprayCan },
    { titleKey: 'home.safety.firstaid', icon: Cross },
    { titleKey: 'home.safety.zones', icon: Shield },
    { titleKey: 'home.safety.seating', icon: Armchair },
    { titleKey: 'home.safety.maintained', icon: Sparkles },
  ];

  // Gallery images
  const galleryImages = [
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747379/18_d7l9lt_mbxgll.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747379/19_eyrsap_na6tlc.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747379/20_xnrc3p_crnix6.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747379/21_jzczzw_y450g9.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747381/22_salbee_f7xwkb.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747379/23_kwlrvp_vhnapv.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747381/24_jaq4ea_i2djfl.png',
    'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_350,c_fill,g_auto/v1769747380/25_usseoc_tera8z.png',
  ];

  return (
    <Layout>
      {/* ============================================
          SEO META TAGS - React Helmet
          ============================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Nandgram Godham - Best Agri Tourism & Water Park in Yawal Taluka, Maharashtra</title>
        <meta name="title" content="Nandgram Godham - Best Agri Tourism & Water Park in Anjale, Yawal Taluka, Dist. Jalgaon, Maharashtra" />
        <meta 
          name="description" 
          content="Experience nature, culture & adventure at Nandgram Godham. Water park, agri tourism, tents & cottages near Anjale, Yawal Taluka. Perfect family destination in Maharashtra. Book now!" 
        />
        <meta 
          name="keywords" 
          content="Nandgram Godham, agri tourism Anjale, water park near bhusawal, Yawal Taluka tourism, Maharashtra tourism, family resort, weekend getaway, tents and cottages, nature resort, picnic spot Anjale, adventure park Maharashtra" 
        />
        <meta name="author" content="Nandgram Godham" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English, Hindi, Marathi" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nandgramgodham.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nandgramgodham.in" />
        <meta property="og:title" content="Nandgram Godham - Agri Tourism & Water Park in Anjale, Yawal Taluka, Dist. Jalgaon, Maharashtra" />
        <meta 
          property="og:description" 
          content="Experience nature, culture & adventure at Nandgram Godham. Water park, agri tourism, tents & cottages. Perfect family destination near Anjale, Yawal Taluka, Dist. Jalgaon, Maharashtra." 
        />
        <meta 
          property="og:image" 
          content="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769749784/7_yc9s2h_rioxna.png" 
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nandgram Godham" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.nandgramgodham.in" />
        <meta name="twitter:title" content="Nandgram Godham - Agri Tourism & Water Park in Anjale, Yawal Taluka, Dist. Jalgaon, Maharashtra" />
        <meta 
          name="twitter:description" 
          content="Experience nature, culture & adventure at Nandgram Godham. Water park, agri tourism, tents & cottages. Perfect family destination in Maharashtra." 
        />
        <meta 
          name="twitter:image" 
          content="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769749784/7_yc9s2h_rioxna.png" 
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Anjale" />
        <meta name="geo.position" content="21.095814;75.745656" />
        <meta name="ICBM" content="21.095814, 75.745656" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nandgram Godham",
            "url": "https://www.nandgramgodham.in",
            "logo": "https://www.nandgramgodham.in/logo.png",
            "description": "Premier agri-tourism and water park destination in Anjale, Yawal Taluka, Dist. Jalgaon, Maharashtra",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Bhusawal",
              "addressLocality": "Anjale",
              "addressRegion": "Maharashtra",
              "postalCode": "425201",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.095814,
              "longitude": 75.745656
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-91129-11248",
              "contactType": "Customer Service",
              "email": "godhamnandgram@gmail.com",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "sameAs": [
              "https://www.facebook.com/nandgramgodham",
              "https://www.instagram.com/nandgramgodham",
              "https://www.youtube.com/@nandgramgodham"
            ]
          })}
        </script>

        

        

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.nandgramgodham.in"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* SECTION 1: HERO SECTION - AUTO SCROLLING */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Images - Carousel */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                alt="Nandgram Godham"
              />
            ) : (
              <video
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Nandgram Godham video"
              />
            )}
          </div>
        ))}

        {/* Floating Leaf Decorations */}
        <div className="leaf-decoration leaf-top-left opacity-40 animate-float" />
        <div className="leaf-decoration leaf-top-right opacity-35 animate-float" style={{ animationDelay: '1s' }} />
        <div className="hibiscus-decoration w-24 h-24 top-1/4 left-10 animate-float opacity-50" style={{ animationDelay: '0.5s' }} />
        <div className="plumeria-decoration w-20 h-20 bottom-1/3 right-16 animate-float-slow opacity-45" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Dynamic Headline based on current slide */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground leading-[1.2] animate-fade-in text-shadow-lg">
              {t(heroSlides[currentSlide].titleKey)}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-base md:text-lg lg:text-xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-1">
              {t(heroSlides[currentSlide].subtitleKey)}
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-12' : 'bg-primary-foreground/40 w-2'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* REST OF THE SECTIONS REMAIN THE SAME... */}
      {/* (All other sections from line 680 onwards stay exactly as they were) */}
      
      {/* SECTION 2: INTRODUCTION */}
      <section className="relative py-16 md:py-20 bg-[#f5f3ed] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover md:bg-fixed opacity-[0.2] blur-[1px]"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1200/v1769748906/Gemini_Generated_Image_vn7xebvn7xebvn7x_ebq0v2_uzu5by.png)",
          }}
        />

        <div className="absolute inset-0 bg-[#f5f3ed]/40" />

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 md:gap-12 items-start max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-foreground mb-2">
                  {t("section.introbio.title")}
                </h2>
                <p className="text-xl md:text-2xl text-primary italic font-light">
                  {t("section.introbio.subtitle")}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {t("section.introbio.paragraph1")}
                </p>
                <p className="text-primary font-medium text-base md:text-lg">
                  {t("section.introbio.paragraph2")}
                </p>
              </div>
            </div>

            <StatsCarousel />
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE EXPERIENCES */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#f2f7f2] via-[#eef6f3] to-[#e8f3ef] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              {t("section.signature.title")}
            </h2>
          </div>

          <div>
            <ExperienceStack experiences={signatureExperiences} />
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO IS NANDGRAM FOR? */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1200/v1769750897/family_background_m7mauy_pqndmd.png')`,
          }}
        />
        <div className="absolute inset-0 bg-[#fffaf2]/60 backdrop-blur-[0.5px]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
              {t('section.personas.title')}{' '}
              <span className="gradient-text-warm">
                {t('section.personas.highlight')}
              </span>
            </h2>
          </div>

          <PersonaGrid t={t} />
        </div>
      </section>

      {/* SECTION 5: JOURNEY ROADMAP */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
              {t('section.journey.title')} <span className="gradient-text">{t('section.journey.highlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('section.journey.subtitle')}
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <JourneyRoadmap steps={journeySteps} />
          </div>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* SECTION 6: PACKAGE */}
      <section className="py-20 bg-[#f7f6f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {t('section.package.title')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="
        relative bg-white rounded-3xl
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        border border-black/5
        p-6 md:p-8
        transition-transform duration-300
        hover:-translate-y-1
      ">
              <div className="absolute -top-4 right-6 bg-[#1f7f5c] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                {t('section.package.ribbon')}
              </div>

              <div className="grid md:grid-cols-[1.2fr,1.8fr] gap-6 md:gap-10 items-start">
                <div>
                  <p className="uppercase text-xs tracking-widest text-muted-foreground mb-1">
                    {t('section.package.priceLabel')}
                  </p>

                  <div className="flex items-end gap-2 mb-3">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {t('section.package.price')}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      {t('section.package.perPerson')}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('section.package.description')}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base text-foreground mb-3">
                    {t('section.package.includes')}
                  </h3>

                  <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground">
                    {[
                      'section.package.item.waterpark',
                      'section.package.item.selfie',
                      'section.package.item.popcorn',
                      'section.package.item.welcomeDrink',
                      'section.package.item.cottonCandy',
                    ].map((key) => (
                      <li key={key} className="flex items-center gap-2 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-[#1f7f5c]" />
                        {t(key)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-xs text-muted-foreground space-y-1">
                    <p>• {t('section.package.note.food')}</p>
                    <p>• {t('section.package.note.tiffin')}</p>
                    <p>• {t('section.package.note.kids')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="
            inline-flex items-center justify-center
            px-8 py-3 rounded-full
            bg-black text-white text-sm font-semibold
            shadow-md hover:shadow-lg
            transition-all
          ">
                  <Link to="/plan-your-visit">
                    {t('section.package.cta')}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: AWARDS & RECOGNITION */}
      <section className="py-24 bg-[#fbf4e8] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              {t("section.recognition.title")}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto flex items-center justify-center h-[320px]">
            {awardImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute transition-all duration-700 ease-in-out
            ${idx === activeAward ? "z-20 scale-110" : "z-10 scale-90 opacity-70"}
            ${idx < activeAward ? "-translate-x-40" : ""}
            ${idx > activeAward ? "translate-x-40" : ""}
          `}
              >
                <img
                  src={img}
                  loading="lazy"
                  decoding="async"
                  alt="Award"
                  className="w-[240px] h-[300px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: GALLERY PREVIEW */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground">
            {t('section.gallery.title')}
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            {t('section.gallery.subtitle')}
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div
                key={idx}
                className="marquee-item mx-2 rounded-2xl overflow-hidden"
              >
                <img
                  src={img}
                  alt="Gallery"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 text-center mt-10">
          <Button asChild size="lg" className="btn-tropical">
            <Link to="/gallery">
              {t('btn.viewFullGallery')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* SECTION 9: PURE A2 PRODUCTS */}
      <section className="relative py-24 overflow-hidden bg-[#fffaf2]">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1200/v1769750899/Gemini_Generated_Image_tx5nzatx5nzatx5n_ubl9aj_mk1xhd.png')`,
          }}
        />
        <div className="absolute inset-0 bg-[#fffaf2]/60 backdrop-blur-[0.5px]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {t('section.products.title')}
            </h2>
            <p className="text-muted-foreground mt-2 text-base max-w-xl mx-auto">
              {t('section.products.subtitle')}
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="relative group transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl w-64 text-center">
                <img src="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751616/ghee_uq9ff1.jpg" loading="lazy" decoding="async" alt="Pure Ghee" className="h-48 mx-auto object-contain" />
                <h4 className="mt-4 font-semibold text-foreground">
                  {t('section.products.product1')}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('section.products.productdesc1')}
                </p>
              </div>
            </div>

            <div className="relative scale-110 group transform hover:-translate-y-3 transition-all duration-300">
              <div className="absolute inset-0 rounded-[40px] bg-accent/20 blur-3xl"></div>
              <div className="relative bg-white rounded-[40px] p-8 shadow-2xl w-72 text-center border border-primary/20">
                <span className="absolute -top-4 right-6 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full shadow">
                  {t('section.products.tag')}
                </span>
                <img src="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751617/milk_vkxrco.jpg" loading="lazy" decoding="async" alt="Pure Milk" className="h-56 mx-auto object-contain" />
                <h4 className="mt-4 font-bold text-lg text-foreground">
                  {t('section.products.product2')}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('section.products.productdesc2')}
                </p>
              </div>
            </div>

            <div className="relative group transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl w-64 text-center">
                <img src="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769751617/cowdung_drgrs8.png" loading="lazy" decoding="async" alt="Cow Dung Products" className="h-44 mx-auto object-contain" />
                <h4 className="mt-4 font-semibold text-foreground">
                  {t('section.products.product3')}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('section.products.productdesc3')}
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-12 text-sm text-muted-foreground">
            {t('section.products.bottom')}
          </p>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section className="py-20 bg-[#fbf4e8] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {t("testimonials.title")}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <TestimonialsCarousel t={t} />
        </div>
      </section>

      {/* SECTION 11: LOCATION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden max-h-[280px] aspect-[4/3] animate-fade-in">
              <div className="absolute inset-0 bg-muted/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.2100151729715!2d75.74565631670717!3d21.095814076888686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9a7be90dc7329%3A0xa9c4c6eb2d5c8a75!2s%22Nandgram%20Godham%22%20-%20Cow%20%26%20Agri%20Tourism!5e0!3m2!1sen!2sin!4v1769493783305!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Nandgram Godham Location"
                />
              </div>

              <div className="absolute top-4 left-4 glass-card p-3 rounded-2xl">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
            </div>

            <div className="animate-fade-in stagger-1">
              <h2 className="font-display text-3xl md:text-3xl font-semibold text-foreground leading-tight">
                <span className="block">
                  {t('section.location.title')}
                </span>
                <span className="block gradient-text">
                  {t('section.location.highlight')}
                </span>
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('section.location.desc')}
              </p>

              <div className="flex gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t('transport.byCar')}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bus className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t('transport.byBus')}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Train className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t('transport.byTrain')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-tropical group"
                  onClick={() => setOpenMap(true)}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  {t('btn.viewOnMaps')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {openMap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-4xl h-[70vh] overflow-hidden">
              <button
                onClick={() => setOpenMap(false)}
                className="absolute top-3 right-3 bg-white rounded-full shadow p-2 hover:bg-muted z-10"
                aria-label="Close map"
              >
                ✕
              </button>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.2100151729715!2d75.74565631670717!3d21.095814076888686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9a7be90dc7329%3A0xa9c4c6eb2d5c8a75!2s%22Nandgram%20Godham%22%20-%20Cow%20%26%20Agri%20Tourism!5e0!3m2!1sen!2sin!4v1769493783305!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Nandgram Godham Detailed Map"
              />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Home;
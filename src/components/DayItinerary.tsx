import { 
  Sun, TreePine, Utensils, Waves, Sunset, Tent, 
  MapPin, Camera, Heart, Sparkles, ArrowRight, Clock, 
  Compass, Star, Navigation
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const accentStyles = {
  primary: {
    polaroid: 'bg-emerald-50/95 border-emerald-200',
    stamp: 'bg-emerald-500 text-white',
    sticker: 'from-emerald-400 to-emerald-600',
    tape: 'bg-emerald-200/40',
  },
  secondary: {
    polaroid: 'bg-rose-50/95 border-rose-200',
    stamp: 'bg-rose-500 text-white',
    sticker: 'from-rose-400 to-rose-600',
    tape: 'bg-rose-200/40',
  },
  tertiary: {
    polaroid: 'bg-sky-50/95 border-sky-200',
    stamp: 'bg-sky-500 text-white',
    sticker: 'from-sky-400 to-sky-600',
    tape: 'bg-sky-200/40',
  },
  accent: {
    polaroid: 'bg-amber-50/95 border-amber-200',
    stamp: 'bg-amber-500 text-white',
    sticker: 'from-amber-400 to-amber-600',
    tape: 'bg-amber-200/40',
  },
};

const phases = [
    {
      id: 'arrival',
      timeKey: 'itinerary.arrival.time',
      titleKey: 'itinerary.arrival',
      descKey: 'itinerary.arrival.desc',
      icon: MapPin,
      accent: 'primary' as const,
      illustration: '🌿',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776023/20260125_120225_ctblxx_ofl9hg.jpg',
      rotation: -2,
    },
    {
      id: 'morning',
      timeKey: 'itinerary.morning.time',
      titleKey: 'itinerary.morning',
      descKey: 'itinerary.morning.desc',
      icon: TreePine,
      experiences: [
        { nameKey: 'exp.gautirth', path: '/experiences/gautirth' },
        { nameKey: 'exp.aplegaon', path: '/experiences/aaple-gaon' },
        { nameKey: 'exp.gaushala', path: '/experiences/gaushala' },
        { nameKey: 'exp.piccity', path: '/experiences/pic-city' },
      ],
      accent: 'secondary' as const,
      illustration: '🌳',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776023/20260125_122624_iusy9n_uibsvc.jpg',
      rotation: 2,
    },
    {
      id: 'midday',
      timeKey: 'itinerary.midday.time',
      titleKey: 'itinerary.midday',
      descKey: 'itinerary.midday.desc',
      icon: Heart,
      experiences: [
        { nameKey: 'exp.carnival', path: '/experiences/carnival-street' },
        { nameKey: 'exp.boating', path: '/experiences/boating-point' },
        { nameKey: 'exp.pixopark', path: '/experiences/pixo-park' },
      ],
      accent: 'tertiary' as const,
      illustration: '🎪',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776024/20260125_125947_nqi9uf_wl91et.jpg',
      rotation: -1,
    },
    {
      id: 'lunch',
      timeKey: 'itinerary.lunch.time',
      titleKey: 'itinerary.lunch',
      descKey: 'itinerary.lunch.desc',
      icon: Utensils,
      accent: 'accent' as const,
      illustration: '🍽️',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776024/20260125_124710_xtp3b0_e1ndy7.jpg',
      rotation: 1,
    },
    {
      id: 'afternoon',
      timeKey: 'itinerary.afternoon.time',
      titleKey: 'itinerary.afternoon',
      descKey: 'itinerary.afternoon.desc',
      icon: Waves,
      experiences: [
        { nameKey: 'exp.shauryavan', path: '/experiences/shauryavan' },
        { nameKey: 'exp.swimmingpool', path: '/experiences/swimming-pool' },
        { nameKey: 'exp.waterpark', path: '/experiences/waterpark' },
      ],
      accent: 'primary' as const,
      illustration: '💦',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776024/20260125_125602_nlqsjt_oorjmo.jpg',
      rotation: -2,
    },
    {
      id: 'evening',
      timeKey: 'itinerary.evening.time',
      titleKey: 'itinerary.evening',
      descKey: 'itinerary.evening.desc',
      icon: Sunset,
      accent: 'secondary' as const,
      illustration: '🌅',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776024/20260125_130823_m7s7j5_gql1rp.jpg',
      rotation: 2,
    },
    {
      id: 'stay',
      timeKey: 'itinerary.stay.time',
      titleKey: 'itinerary.stay',
      descKey: 'itinerary.stay.desc',
      icon: Tent,
      experiences: [
        { nameKey: 'exp.tents', path: '/experiences/tents-cottages' },
      ],
      accent: 'tertiary' as const,
      illustration: '⛺',
      imageUrl: 'https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_800/v1769776023/20260125_123827_qapwkk_do8tog.jpg',
      rotation: -1,
    },
  ];

const DayItinerary = () => {
  const { t } = useLanguage();

  

  return (
    <section className="py-14 md:py-18 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1600/v1769776024/photo-1488646953014-85cb44e25828_epc4tu_c7xp8e.jpg')`,
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-amber-900/80 to-yellow-900/85 backdrop-blur-[2px]" />
      

      
      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block relative mb-4">
            {/* Washi tape effect */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-40 h-6 bg-yellow-200/70 -rotate-2 rounded-sm shadow-sm" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 bg-white/95 rounded-lg shadow-lg border-2 border-amber-300">
              <Navigation className="h-4 w-4 text-amber-600" />
              <span className="text-xs md:text-sm font-bold text-amber-900 tracking-wider uppercase">
                {t('itinerary.badge')}
              </span>
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            </div>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-white leading-tight tracking-tight drop-shadow-lg">
            {t('itinerary.title')}<br />
            <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
              Nandgram Godam
            </span>
          </h2>
          
          <p className="text-muted md:text-base text-orange-100 max-w-2xl mx-auto leading-relaxed font-display px-8">
            {t('itinerary.subtitle')}
          </p>
        </div>

        {/* Masonry/Grid Layout for Desktop - Compact */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Vertical Stack, Desktop: Multi-column Grid with centered last card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {phases.map((phase, idx) => {
              const styles = accentStyles[phase.accent];
              const Icon = phase.icon;
              // Make the last card (7th item) centered in middle column on desktop
              const isLastCard = idx === phases.length - 1;
              const gridColClass = isLastCard ? 'lg:col-start-2' : '';
              
              return (
                <div 
                  key={phase.id}
                  className={cn("group", gridColClass)}
                  style={{
                    animation: `fadeSlideIn 0.6s ease-out ${idx * 0.1}s backwards`
                  }}
                >
                  {/* Polaroid Card - Compact Version */}
                  <div 
                    className={cn(
                      "relative cursor-pointer h-full",
                      "transition-all duration-500 hover:scale-105 hover:z-10"
                    )}
                    style={{
                      transform: `rotate(${phase.rotation}deg)`,
                    }}
                  >
                    {/* Washi tape strips */}
                    <div 
                      className={cn(
                        "absolute -top-2 left-4 w-12 h-4 rounded-sm shadow-md -rotate-45 z-10",
                        styles.tape
                      )}
                    />
                    <div 
                      className={cn(
                        "absolute -top-2 right-4 w-12 h-4 rounded-sm shadow-md rotate-45 z-10",
                        styles.tape
                      )}
                    />
                    
                    {/* Polaroid frame */}
                    <div className={cn(
                      "bg-white p-2.5 md:p-3 rounded-sm shadow-2xl border-3",
                      "backdrop-blur-sm transition-shadow duration-300 hover:shadow-3xl",
                      "h-full flex flex-col",
                      styles.polaroid
                    )}>
                      {/* Image container - Even more compact */}
                      <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden mb-2">
                        <img 
                          src={phase.imageUrl}
                          alt={t(phase.titleKey)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"

                        />
                        
                        {/* Time stamp */}
                        <div className="absolute top-1.5 right-1.5">
                          <div className={cn(
                            "px-4 py-4 rounded-full text-[14px] font-bold shadow-lg backdrop-blur-md",
                            "border border-white/50",
                            styles.stamp
                          )}>
                            <Clock className="h-3.5 w-3.5 inline mr-0.5" />
                            {t(phase.timeKey)}
                          </div>
                        </div>
                        
                        {/* Icon badge */}
                        <div className={cn(
                          "absolute top-1.5 left-1.5 w-8 h-8 rounded-full flex items-center justify-center",
                          "bg-gradient-to-br shadow-lg border border-white/80",
                          styles.sticker
                        )}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Caption area - Minimal */}
                      <div className="space-y-1.5 flex-1 flex flex-col">
                        <h3 className="font-display text-base md:text-lg font-black text-gray-800 text-center leading-tight">
                          {t(phase.titleKey)}
                        </h3>
                        
                        <p className="text-[13px] md:text-lg text-gray-800 leading-snug font-display text-center line-clamp-2 flex-1">
                          {t(phase.descKey)}
                        </p>
                        
                        {/* Experience tags */}
                        {phase.experiences && phase.experiences.length > 0 && (
                          <div className="flex flex-wrap gap-1 justify-center pt-1">
                            {phase.experiences.slice(0, 3).map((exp, expIdx) => (
                              <Link
                                key={exp.path}
                                to={exp.path}
                                className={cn(
                                  "group/sticker inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full",
                                  "text-[10px] font-bold uppercase tracking-wide",
                                  "bg-white border shadow-sm",
                                  "hover:shadow-md hover:-translate-y-0.5 transition-all duration-300",
                                  "border-current"
                                )}
                                style={{
                                  transform: `rotate(${(expIdx - 1) * 2}deg)`,
                                  color: ['#10b981', '#f43f5e', '#3b82f6'][expIdx % 3]
                                }}
                              >
                                <Sparkles className="h-2 w-2 shrink-0" />
                                <span className="text-[10px] truncate max-w-[80px]">{t(exp.nameKey)}</span>
                              </Link>
                            ))}
                            {phase.experiences.length > 3 && (
                              <div className="text-[10px] text-gray-500 px-1">+{phase.experiences.length - 3}</div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Note Card & CTAs in same row on desktop */}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

      `}</style>
    </section>
  );
};

export default DayItinerary;
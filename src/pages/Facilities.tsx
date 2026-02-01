import { Car, Utensils, Wifi, Shield, Heart, Accessibility, Sparkles, ArrowRight, Baby, TreePine, Droplets, Camera, CheckCircle2, Star, Award, Zap, MapPin, Phone, Leaf, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';

const Facilities = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState(null);

  const facilities = [
    { icon: Car, titleKey: 'facilities.parking', descKey: 'facilities.parking.desc', categoryKey: 'facilities.category.convenience', color: '#10B981', img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600' },
    { icon: Utensils, titleKey: 'facilities.food', descKey: 'facilities.food.desc', categoryKey: 'facilities.category.comfort', color: '#059669', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600' },
    { icon: Wifi, titleKey: 'facilities.wifi', descKey: 'facilities.wifi.desc', categoryKey: 'facilities.category.convenience', color: '#14B8A6', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600' },
    { icon: Shield, titleKey: 'facilities.firstaid', descKey: 'facilities.firstaid.desc', categoryKey: 'facilities.category.safety', color: '#059669', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600' },
    { icon: Heart, titleKey: 'facilities.restrooms', descKey: 'facilities.restrooms.desc', categoryKey: 'facilities.category.comfort', color: '#34D399', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600' },
    { icon: Accessibility, titleKey: 'facilities.accessible', descKey: 'facilities.accessible.desc', categoryKey: 'facilities.category.convenience', color: '#0D9488', img: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600' },
    { icon: Baby, titleKey: 'facilities.babycare', descKey: 'facilities.babycare.desc', categoryKey: 'facilities.category.comfort', color: '#2DD4BF', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600' },
    { icon: TreePine, titleKey: 'facilities.shaded', descKey: 'facilities.shaded.desc', categoryKey: 'facilities.category.comfort', color: '#047857', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600' },
    { icon: Droplets, titleKey: 'facilities.water', descKey: 'facilities.water.desc', categoryKey: 'facilities.category.convenience', color: '#0D9488', img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600' },
    { icon: Camera, titleKey: 'facilities.photozones', descKey: 'facilities.photozones.desc', categoryKey: 'facilities.category.experience', color: '#10B981', img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600' },
  ];

  const safetyFeatures = [
    { icon: Shield, titleKey: 'facilities.safety.staff', descKey: 'facilities.safety.staff.desc' },
    { icon: Heart, titleKey: 'facilities.safety.medical', descKey: 'facilities.safety.medical.desc' },
    { icon: Award, titleKey: 'facilities.safety.equipment', descKey: 'facilities.safety.equipment.desc' },
    { icon: Sparkles, titleKey: 'facilities.safety.clean', descKey: 'facilities.safety.clean.desc' },
  ];

  return (
    <Layout>
      {/* Compact Hero with Wave Pattern */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600">
        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M0 70 Q 25 50, 50 70 T 100 70" stroke="white" strokeWidth="2" fill="none" opacity="0.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
              <Leaf className="h-4 w-4 text-white animate-pulse" />
              <span className="text-sm font-bold text-white">Eco-Friendly Facilities</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              World-Class Facilities
              <br />
              <span className="text-emerald-100">For Your Comfort</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience premium amenities designed with sustainability and your comfort in mind
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Star, label: '50+ Facilities', value: '50+' },
                { icon: Shield, label: '24/7 Security', value: '24/7' },
                { icon: Users, label: 'Family Friendly', value: '100%' },
                { icon: Award, label: 'Top Rated', value: '5★' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <stat.icon className="h-6 w-6 text-white mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Facilities Grid - Optimized Mobile Layout (2 cards per row) */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 mb-4">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700">Premium Amenities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              Our <span className="text-emerald-600">Facilities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a perfect visit
            </p>
          </div>

          {/* Optimized Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
            {facilities.map((item, idx) => (
              <div
                key={item.titleKey}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Image with Gradient Overlay */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={t(item.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}CC 0%, ${item.color}66 100%)`
                      }}
                    />
                    
                    {/* Icon Badge */}
                    <div 
                      className="absolute top-2 md:top-3 right-2 md:right-3 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                    >
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: item.color }} />
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
                      <span className="px-2 md:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] md:text-xs font-bold shadow-lg" style={{ color: item.color }}>
                        {t(item.categoryKey)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-4">
                    <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-[11px] md:text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Safety Section with Side-by-Side Layout */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Content */}
            <div className="text-white order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/20 border border-emerald-300/30 mb-4">
                <Shield className="h-4 w-4 text-emerald-300" />
                <span className="text-sm font-bold">Safety First</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                Your Safety is Our
                <span className="block text-emerald-300">Top Priority</span>
              </h2>

              <p className="text-lg text-white/90 mb-6 md:mb-8">
                Comprehensive safety measures ensuring a secure experience for all visitors
              </p>

              {/* Safety Features - Compact Grid */}
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {safetyFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
                      <feature.icon className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold mb-0.5">{t(feature.titleKey)}</h4>
                      <p className="text-xs text-white/70 line-clamp-1">{t(feature.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-black text-emerald-300">24/7</div>
                  <div className="text-sm text-white/80">Security</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-black text-emerald-300">100%</div>
                  <div className="text-sm text-white/80">Safe</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800" 
                  alt="Safety" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl p-3 shadow-2xl">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(30deg, transparent 48%, white 49%, white 51%, transparent 52%),
                    linear-gradient(-30deg, transparent 48%, white 49%, white 51%, transparent 52%)
                  `,
                  backgroundSize: '20px 35px'
                }} />
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 text-center text-white">
                {/* Icons */}
                <div className="flex justify-center gap-3 mb-6">
                  {[Sparkles, Heart, Leaf].map((Icon, idx) => (
                    <div 
                      key={idx}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                  Ready to Visit?
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Experience our world-class facilities today. Your perfect visit awaits!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                  >
                    <Link to="/plan-your-visit">
                      <MapPin className="mr-2 h-5 w-5" />
                      Plan Your Visit
                    </Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
                  {['Eco-Certified', 'Award Winning', 'Family Friendly'].map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Layout>
  );
};

export default Facilities;
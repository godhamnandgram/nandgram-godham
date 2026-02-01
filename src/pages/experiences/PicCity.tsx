import { Camera, MapPin, Clock, Users, Leaf, TreePine, Flower2, Sprout, Heart, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const PicCity = () => {
  const [activeZone, setActiveZone] = useState(0);

  const zones = [
    { name: 'Botanical Garden', icon: Leaf, spots: 12, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400' },
    { name: 'Vintage Corner', icon: Camera, spots: 8, image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400' },
    { name: 'Neon Street', icon: TreePine, spots: 10, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400' },
    { name: 'Flower Wall', icon: Flower2, spots: 6, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400' },
  ];

  const features = [
    { icon: Camera, title: 'Professional Setups', desc: '50+ curated photo spots' },
    { icon: Clock, title: 'All-Day Access', desc: 'Natural & studio lighting' },
    { icon: Users, title: 'Family Friendly', desc: 'Safe & welcoming space' },
  ];

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        .font-display {
          font-family: 'Crimson Pro', serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .green-accent {
          color: #059669;
        }

        .bg-green-accent {
          background-color: #059669;
        }

        .border-green-accent {
          border-color: #059669;
        }

        .hero-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(5, 150, 105, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
        }
      `}</style>

      {/* Compact Hero */}
      <section className="relative bg-white border-b border-gray-100 hero-pattern">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sprout className="w-4 h-4" />
                <span>Photo Experience Park</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                PIC CITY
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Where every corner becomes a memory. Professional photo zones designed for families, friends, and creators.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">50+ Photo Zones</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">Professional Lighting</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">All Ages Welcome</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6">
                  <Camera className="w-4 h-4 mr-2" />
                  Book Visit
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6">
                  View Gallery
                </Button>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-square hover-lift">
                  <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300" alt="Zone 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] hover-lift">
                  <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300" alt="Zone 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] hover-lift">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300" alt="Zone 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square hover-lift">
                  <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300" alt="Zone 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Compact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover-lift">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Zones - Interactive Compact View */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-3">
              Explore Our Zones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each zone is uniquely designed with perfect lighting and backdrops
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Zone Preview */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-6">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img 
                    src={zones[activeZone].image} 
                    alt={zones[activeZone].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-900">
                    {zones[activeZone].spots} Photo Spots
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  {(() => {
                    const IconComponent = zones[activeZone].icon;
                    return <IconComponent className="w-10 h-10 text-emerald-600 mb-4" />;
                  })()}
                  <h3 className="font-display text-3xl font-bold text-gray-900 mb-3">
                    {zones[activeZone].name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for portraits, group photos, and creative content. Professional lighting setup included.
                  </p>
                  <Button variant="outline" className="w-fit border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    <MapPin className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Zone Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {zones.map((zone, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveZone(idx)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    activeZone === idx 
                      ? 'border-emerald-600 bg-emerald-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <zone.icon className={`w-6 h-6 mb-2 ${activeZone === idx ? 'text-emerald-600' : 'text-gray-400'}`} />
                  <div className={`font-semibold text-sm ${activeZone === idx ? 'text-emerald-900' : 'text-gray-900'}`}>
                    {zone.name}
                  </div>
                  <div className="text-xs text-gray-500">{zone.spots} spots</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Ultra Compact */}
      <section className="py-8 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { value: '50+', label: 'Photo Zones' },
              { value: '100K+', label: 'Visitors' },
              { value: '4.8★', label: 'Rating' },
              { value: 'Daily', label: 'New Setups' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-emerald-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview - Compact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Recent Photos</h2>
              <p className="text-gray-600">Captured by our visitors</p>
            </div>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
              <Link to="/gallery">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden hover-lift cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000}?w=200&h=200&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Compact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Visitor Reviews
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Priya S.', text: 'Perfect for family photos! Kids loved every zone.', rating: 5 },
              { name: 'Rahul M.', text: 'Great setups and lighting. Worth every penny.', rating: 5 },
              { name: 'Anjali K.', text: 'Amazing variety! Spent the whole day here.', rating: 5 },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div className="font-medium text-gray-900 text-sm">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean & Simple */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Ready to Visit?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Book your slot and create beautiful memories at PIC CITY
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base" asChild>
                <Link to="/plan-your-visit">
                  <Camera className="w-5 h-5 mr-2" />
                  Plan Your Visit
                </Link>
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base" asChild>
                <Link to="/experiences">
                  Explore More Experiences
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PicCity;
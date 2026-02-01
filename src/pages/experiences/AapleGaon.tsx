import { Home, Palette, Heart, Users, GraduationCap, Sparkles, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const AapleGaon = () => {
  const specialFeatures = [
    { icon: Home, title: 'Authentic village environment', texture: 'bg-gradient-to-br from-amber-100 to-orange-100' },
    { icon: Palette, title: 'Cultural and traditional elements', texture: 'bg-gradient-to-br from-red-100 to-yellow-100' },
    { icon: Heart, title: 'Simple, meaningful experiences', texture: 'bg-gradient-to-br from-orange-100 to-amber-100' },
  ];

  const audiences = [
    { icon: Users, label: 'Families', color: 'text-red-600' },
    { icon: Sparkles, label: 'Kids', color: 'text-yellow-600' },
    { icon: GraduationCap, label: 'School groups', color: 'text-orange-600' },
    { icon: Heart, label: 'Culture lovers', color: 'text-green-600' },
  ];

  const journey = [
    'Walk through village-style surroundings',
    'Observe traditional lifestyle elements',
    'Enjoy the slow pace of rural life',
    'Learn and connect with culture',
  ];

  const relatedExperiences = [
    { name: 'Gaushala', path: '/experiences/gaushala', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300' },
    { name: 'Gautirth', path: '/experiences/gautirth', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300' },
    { name: 'Carnival Street', path: '/experiences/carnival-street', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Rustic warm */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z' fill='%23fff' fill-opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
        {/* Animated smoke effect */}
        <div className="absolute bottom-20 left-1/4 w-8 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Home className="w-5 h-5" />
            <span>Village Experience</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            AAPLE GAON
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the Warmth of Village Life
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Brings the essence of traditional village life to life.
          </p>
          <Button size="lg" className="bg-amber-800 text-white hover:bg-amber-900 rounded-full px-8 py-6 text-lg border-2 border-amber-600">
            <Home className="w-5 h-5 mr-2" />
            Visit the Village
          </Button>
        </div>
      </section>

      {/* What Makes It Special - Textured cards */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.texture} p-8 rounded-3xl border-2 border-amber-200 shadow-lg text-center transition-all duration-300 hover:shadow-xl`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23D97706' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-600/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
                <p className="text-lg font-medium text-amber-900">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Will Enjoy - Folk art style badges */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Who Will Enjoy
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
                style={{ transform: `rotate(${(index - 1.5) * 5}deg)` }}
              >
                <div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-amber-300 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-0 shadow-lg">
                  <audience.icon className={`w-10 h-10 ${audience.color}`} />
                </div>
                <span className="font-medium text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Village road path */}
      <section className="py-20 bg-gradient-to-b from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
            Experience Journey
          </h2>
          <div className="max-w-3xl mx-auto relative">
            {/* Path line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-400" style={{ borderRadius: '100px' }} />
            {journey.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-10 last:mb-0">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg border-4 border-amber-200">
                    <Footprints className="w-7 h-7" />
                  </div>
                </div>
                <div className="pt-3 flex-1">
                  <div className="bg-white/80 p-4 rounded-2xl shadow-md border border-amber-200">
                    <p className="text-lg text-amber-900">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Gallery Preview
          </h2>
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-amber-200">
                <img
                  src={`https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-amber-200">
                  <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{exp.name}</h3>
                    <span className="text-amber-600 text-sm">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-8 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-8 border-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Aaple Gaon?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Step into the warmth and simplicity of village life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-white/90 rounded-full px-8" asChild>
              <Link to="/plan-your-visit">Plan Your Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
              <Link to="/experiences">View All Experiences</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AapleGaon;
import { Waves, Droplets, Sparkles, Users, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const SwimmingPool = () => {
  const specialFeatures = [
    { icon: Sparkles, title: 'Clean and well-maintained' },
    { icon: Droplets, title: 'Relaxing water experience' },
    { icon: Users, title: 'Suitable for families' },
  ];

  const audiences = [
    { icon: Users, label: 'Families' },
    { icon: User, label: 'Adults' },
    { icon: Heart, label: 'Kids (with supervision)' },
  ];

  const journey = [
    'Change comfortably',
    'Enjoy a refreshing swim',
    'Relax and unwind',
    'Feel rejuvenated',
  ];

  const relatedExperiences = [
    { name: 'Waterpark', path: '/experiences/waterpark', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Boating Point', path: '/experiences/boating-point', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Tents & Cottages', path: '/experiences/tents-cottages', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Clean refreshing */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500" />
        {/* Pool tile pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, white 1px, transparent 1px),
              linear-gradient(white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Water ripples */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white/30"
              style={{
                width: `${150 + i * 100}px`,
                height: `${150 + i * 100}px`,
                left: '50%',
                top: '60%',
                transform: 'translate(-50%, -50%)',
                animation: `ping ${3 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        {/* Sparkle effects */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Waves className="w-5 h-5" />
            <span>Water Activity</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            SWIMMING POOL
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Refresh, Relax & Enjoy the Water
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Offers a refreshing way to relax and cool off. Designed for comfort, enjoyment, and safety.
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            <Droplets className="w-5 h-5 mr-2" />
            Dive In
          </Button>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-cyan-200 shadow-lg text-center transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-medium text-cyan-800">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Will Enjoy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Who Will Enjoy
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 border-2 border-cyan-300 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <audience.icon className="w-10 h-10 text-cyan-600" />
                </div>
                <span className="font-medium text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey */}
      <section className="py-20 bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-900">
            Experience Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {journey.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg mb-4">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <p className="font-medium text-cyan-800">{step}</p>
                  {index < journey.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400" />
                  )}
                </div>
              ))}
            </div>
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer border-2 border-cyan-200">
                <img
                  src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full border-cyan-600 text-cyan-600 hover:bg-cyan-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{exp.name}</h3>
                    <span className="text-cyan-600 text-sm">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,30 Q25,50 50,30 T100,30 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Swimming Pool?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Dive into refreshment and relaxation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90 rounded-full px-8" asChild>
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

export default SwimmingPool;
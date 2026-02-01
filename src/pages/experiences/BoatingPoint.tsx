import { Waves, Mountain, TreePine, Users, Heart, Compass, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const BoatingPoint = () => {
  const specialFeatures = [
    { icon: Mountain, title: 'Calm and scenic environment' },
    { icon: Waves, title: 'Slow and relaxing experience' },
    { icon: TreePine, title: 'Nature-focused activity' },
  ];

  const audiences = [
    { icon: Users, label: 'Families', desc: 'Quality time on water' },
    { icon: Heart, label: 'Couples', desc: 'Romantic moments' },
    { icon: Compass, label: 'Peace lovers', desc: 'Tranquil escape' },
  ];

  const journey = [
    'Arrive at the boating area',
    'Enjoy a slow and peaceful ride',
    'Take in the surroundings',
    'Relax and unwind',
  ];

  const relatedExperiences = [
    { name: 'Swimming Pool', path: '/experiences/swimming-pool', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Gautirth', path: '/experiences/gautirth', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300' },
    { name: 'Tents & Cottages', path: '/experiences/tents-cottages', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Serene water themed */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500" />
        {/* Water ripple effect */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white/20 animate-ping"
              style={{
                width: `${100 + i * 80}px`,
                height: `${100 + i * 80}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
        {/* Wave pattern at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,100 L0,100 Z"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Anchor className="w-5 h-5" />
            <span>Water Activity</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            BOATING POINT
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto italic">
            Relax, Float & Enjoy Nature's Calm
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Offers a refreshing and peaceful experience surrounded by scenic views.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            <Waves className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* What Makes It Special - Glassmorphism water cards */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-blue-200/50 shadow-xl text-center transition-all duration-300 hover:bg-white/80 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center group-hover:animate-float">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-medium text-blue-800">{feature.title}</p>
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
          <div className="flex justify-center gap-8 flex-wrap max-w-3xl mx-auto">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 border border-blue-200">
                  <audience.icon className="w-12 h-12 text-blue-600" />
                </div>
                <span className="font-bold text-lg text-foreground">{audience.label}</span>
                <span className="text-sm text-muted-foreground">{audience.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Water slide path */}
      <section className="py-20 bg-gradient-to-r from-cyan-100 via-blue-100 to-teal-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Experience Journey
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Wave path */}
            <svg className="hidden md:block absolute top-12 left-0 right-0 w-full h-12" viewBox="0 0 800 50" preserveAspectRatio="none">
              <path
                d="M0,25 Q100,0 200,25 T400,25 T600,25 T800,25"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
              />
            </svg>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {journey.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4">
                    {index + 1}
                  </div>
                  <p className="font-medium text-blue-800 max-w-[150px]">{step}</p>
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{exp.name}</h3>
                    <span className="text-blue-600 text-sm">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Boating Point?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Float into tranquility and embrace nature's calm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8" asChild>
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

export default BoatingPoint;
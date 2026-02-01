import { Leaf, Heart, Eye, Users, User, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Gautirth = () => {
  const specialFeatures = [
    { icon: Leaf, title: 'Peaceful surroundings' },
    { icon: Heart, title: 'Calm and spiritual atmosphere' },
    { icon: Eye, title: 'Ideal for quiet reflection' },
  ];

  const audiences = [
    { icon: Users, label: 'Families', color: 'from-green-100 to-green-200' },
    { icon: User, label: 'Elderly visitors', color: 'from-blue-100 to-blue-200' },
    { icon: Flower2, label: 'Peace seekers', color: 'from-teal-100 to-teal-200' },
    { icon: Heart, label: 'Spiritual visitors', color: 'from-purple-100 to-purple-200' },
  ];

  const journey = [
    'Enter a calm environment',
    'Spend moments in silence',
    'Relax your mind and body',
    'Leave feeling refreshed and peaceful',
  ];

  const relatedExperiences = [
    { name: 'Gaushala', path: '/experiences/gaushala', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300' },
    { name: 'Boating Point', path: '/experiences/boating-point', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Tents & Cottages', path: '/experiences/tents-cottages', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Zen inspired */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-teal-100 to-blue-200" />
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="80" cy="20" r="15" fill="rgba(255,255,255,0.5)" />
            <circle cx="20" cy="70" r="20" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>
        {/* Floating lotus elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${10 + i * 5}%`,
              animationDelay: `${i * 1}s`,
            }}
          >
            <Flower2 className="w-12 h-12 text-green-600" />
          </div>
        ))}
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-green-800 mb-6">
            <Flower2 className="w-5 h-5" />
            <span>Spiritual Space</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-green-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            GAUTIRTH
          </h1>
          <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-2xl mx-auto italic">
            A Space for Calm, Reflection & Inner Peace
          </p>
          <p className="text-green-700 max-w-xl mx-auto mb-8">
            Gautirth is a serene and peaceful area designed for quiet moments, reflection, and spiritual calm.
          </p>
          <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 rounded-full px-8 py-6 text-lg">
            Enter Peace
          </Button>
        </div>
      </section>

      {/* What Makes It Special - Glassmorphism */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-xl text-center transition-all duration-300 hover:bg-white/80"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-lg font-medium text-green-800">{feature.title}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex flex-col items-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105 shadow-lg`}>
                  <audience.icon className="w-10 h-10 text-green-700" />
                </div>
                <span className="font-medium text-foreground text-center">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Stream style */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
            Experience Journey
          </h2>
          <div className="max-w-md mx-auto">
            {journey.map((step, index) => (
              <div key={index} className="flex items-start gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                    {index + 1}
                  </div>
                  {index < journey.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-teal-400 to-green-400 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="text-lg text-green-800">{step}</p>
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{exp.name}</h3>
                    <span className="text-green-600 text-sm">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-teal-500 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <Flower2 key={i} className="absolute text-white" style={{ left: `${i * 12}%`, top: `${20 + (i % 3) * 20}%`, width: '60px', height: '60px' }} />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Gautirth?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Find your inner peace in our serene spiritual space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-white/90 rounded-full px-8" asChild>
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

export default Gautirth;
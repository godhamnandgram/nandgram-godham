import { Tent, TreePine, Moon, Users, Heart, Sunrise, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const TentsCottages = () => {
  const specialFeatures = [
    { icon: TreePine, title: 'Natural surroundings', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400' },
    { icon: Tent, title: 'Comfortable accommodation', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400' },
    { icon: Moon, title: 'Calm and peaceful atmosphere', image: 'https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=400' },
  ];

  const audiences = [
    { icon: Users, label: 'Families', color: 'from-green-400 to-teal-400' },
    { icon: Heart, label: 'Groups', color: 'from-orange-400 to-amber-400' },
    { icon: Star, label: 'Overnight visitors', color: 'from-purple-400 to-indigo-400' },
  ];

  const journey = [
    { step: 'Check into tents or cottages', time: 'Afternoon', icon: Tent },
    { step: 'Relax in a natural setting', time: 'Evening', icon: TreePine },
    { step: 'Enjoy peaceful evenings', time: 'Night', icon: Moon },
    { step: 'Wake up refreshed', time: 'Morning', icon: Sunrise },
  ];

  const relatedExperiences = [
    { name: 'Gautirth', path: '/experiences/gautirth', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300' },
    { name: 'Boating Point', path: '/experiences/boating-point', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Aaple Gaon', path: '/experiences/aaple-gaon', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Cozy natural evening */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-500 to-indigo-700" />
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        {/* Tree silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,100 L0,60 L50,60 L75,20 L100,60 L150,60 L175,30 L200,60 L250,60 L275,10 L300,60 L350,60 L350,100 Z"
              fill="black"
            />
            <path
              d="M400,100 L400,50 L450,50 L480,15 L510,50 L560,50 L590,25 L620,50 L670,50 L700,5 L730,50 L780,50 L780,100 Z"
              fill="black"
            />
          </svg>
        </div>
        {/* Campfire glow */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        {/* Fireflies */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-float opacity-70"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${40 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Tent className="w-5 h-5" />
            <span>Stay Experience</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            TENTS & COTTAGES
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto italic">
            Stay Close to Nature, Stay at Peace
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Comfortable and peaceful stay experience surrounded by nature.
          </p>
          <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-400 rounded-full px-8 py-6 text-lg shadow-glow">
            <Tent className="w-5 h-5 mr-2" />
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 via-purple-900 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden h-64 group cursor-pointer"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <feature.icon className="w-8 h-8 mb-2" />
                  <p className="text-lg font-bold">{feature.title}</p>
                </div>
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
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-xl`}>
                  <audience.icon className="w-12 h-12 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Day to night transition */}
      <section className="py-20 bg-gradient-to-r from-orange-200 via-purple-200 to-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Experience Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline with day-night gradient */}
            <div className="relative">
              <div className="absolute top-10 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 rounded-full" />
              <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                {journey.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center relative z-10 flex-1">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl mb-2"
                      style={{
                        background: index === 0 ? 'linear-gradient(135deg, #F59E0B, #D97706)' :
                                   index === 1 ? 'linear-gradient(135deg, #8B5CF6, #7C3AED)' :
                                   index === 2 ? 'linear-gradient(135deg, #4F46E5, #4338CA)' :
                                   'linear-gradient(135deg, #F59E0B, #FBBF24)'
                      }}
                    >
                      <item.icon className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase mb-1">{item.time}</span>
                    <p className="font-medium text-gray-800 text-sm">{item.step}</p>
                  </div>
                ))}
              </div>
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
                  src={`https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{exp.name}</h3>
                    <span className="text-purple-600 text-sm">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Tents & Cottages?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Escape to nature and find your peace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-400 rounded-full px-8" asChild>
              <Link to="/plan-your-visit">Book Your Stay</Link>
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

export default TentsCottages;
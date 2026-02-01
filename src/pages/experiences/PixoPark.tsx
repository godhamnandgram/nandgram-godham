import { Palette, Shapes, Rainbow, Users, Sparkles, Hand, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const PixoPark = () => {
  const specialFeatures = [
    { icon: Palette, title: 'Creative and interactive design', color: '#FF6B6B' },
    { icon: Rainbow, title: 'Colorful and playful atmosphere', color: '#4ECDC4' },
    { icon: Hand, title: 'Engaging for kids and families', color: '#FFE66D' },
  ];

  const audiences = [
    { icon: Sparkles, label: 'Kids', color: 'bg-pink-500' },
    { icon: Users, label: 'Families', color: 'bg-blue-500' },
    { icon: Palette, label: 'Creative explorers', color: 'bg-purple-500' },
  ];

  const journey = [
    { step: 'Explore colorful spaces', color: '#FF6B6B' },
    { step: 'Interact with creative elements', color: '#4ECDC4' },
    { step: 'Enjoy playful moments', color: '#FFE66D' },
    { step: 'Capture cheerful memories', color: '#95E1D3' },
  ];

  const relatedExperiences = [
    { name: 'Pic City', path: '/experiences/pic-city', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300' },
    { name: 'Carnival Street', path: '/experiences/carnival-street', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300' },
    { name: 'Shauryavan', path: '/experiences/shauryavan', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Vibrant pixel art inspired */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500" />
        {/* Pixel blocks */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'][Math.floor(Math.random() * 5)],
                opacity: 0.3,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        {/* Paint splatter */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400/30 blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-pink-400/30 blur-xl" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Palette className="w-5 h-5" />
            <span>Creative Space</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-4" style={{ textShadow: '4px 4px 0 #FF6B6B, 8px 8px 0 #4ECDC4' }}>
            PIXO PARK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            A Playful World of Colors & Creativity
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            A colorful and interactive space designed for creativity and fun.
          </p>
          <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 rounded-full px-8 py-6 text-lg font-bold animate-bounce">
            <Shapes className="w-5 h-5 mr-2" />
            Enter Pixo World
          </Button>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 group"
                style={{ backgroundColor: feature.color + '20', border: `3px solid ${feature.color}` }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-bold" style={{ color: feature.color }}>{feature.title}</p>
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
                <div className={`w-28 h-28 rounded-full ${audience.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-2xl`}>
                  <audience.icon className="w-12 h-12 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Colorful stepping stones */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
            Experience Journey
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {journey.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl transform hover:scale-110 hover:rotate-6 transition-all"
                    style={{ backgroundColor: item.color }}
                  >
                    {index + 1}
                  </div>
                  <p className="mt-4 text-center font-medium max-w-[140px] text-gray-800">{item.step}</p>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden md:flex items-center mx-4">
                    <div className="w-8 h-2 rounded-full" style={{ backgroundColor: journey[index + 1].color }} />
                  </div>
                )}
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
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                style={{ border: `4px solid ${['#FF6B6B', '#4ECDC4', '#FFE66D'][i % 3]}` }}
              >
                <img
                  src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop`}
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
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200">
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
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${30 + Math.random() * 50}px`,
                height: `${30 + Math.random() * 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: 'white',
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Pixo Park?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Unleash creativity in a world of colors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 rounded-full px-8 font-bold" asChild>
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

export default PixoPark;
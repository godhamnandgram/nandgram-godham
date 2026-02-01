import { PartyPopper, Star, Sparkles, Users, Heart, Music, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const CarnivalStreet = () => {
  const specialFeatures = [
    { icon: PartyPopper, title: 'Festive atmosphere', gradient: 'from-pink-500 via-purple-500 to-blue-500' },
    { icon: Star, title: 'Bright colors and joyful energy', gradient: 'from-yellow-400 via-orange-400 to-red-400' },
    { icon: Sparkles, title: 'A lively environment for families', gradient: 'from-green-400 via-teal-400 to-blue-400' },
  ];

  const audiences = [
    { icon: Users, label: 'Families', color: 'bg-pink-500' },
    { icon: Sparkles, label: 'Kids', color: 'bg-yellow-500' },
    { icon: Heart, label: 'Friends & groups', color: 'bg-purple-500' },
  ];

  const journey = [
    'Walk through colorful surroundings',
    'Enjoy the festive mood',
    'Spend joyful moments together',
    'Capture fun memories',
  ];

  const relatedExperiences = [
    { name: 'Pixo Park', path: '/experiences/pixo-park', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300' },
    { name: 'Pic City', path: '/experiences/pic-city', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300' },
    { name: 'Waterpark', path: '/experiences/waterpark', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Explosive colorful */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600" />
        {/* Confetti animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className={`w-3 h-3 rounded-sm transform rotate-45`}
                style={{
                  backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'][Math.floor(Math.random() * 5)],
                }}
              />
            </div>
          ))}
        </div>
        {/* Bunting flags */}
        <div className="absolute top-20 left-0 right-0 flex justify-center gap-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent animate-pulse"
              style={{
                borderTopColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'][i % 5],
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <PartyPopper className="w-5 h-5" />
            <span>Festive Zone</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            CARNIVAL STREET
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            A Colorful Street Full of Joy & Festive Vibes
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            A lively and energetic space filled with colors, fun, and cheerful surroundings.
          </p>
          <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 rounded-full px-8 py-6 text-lg font-bold animate-bounce">
            <PartyPopper className="w-5 h-5 mr-2" />
            Join the Fun!
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
                className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-3xl text-white transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-xl group`}
              >
                <feature.icon className="w-12 h-12 mb-4 group-hover:animate-bounce" />
                <p className="text-lg font-bold">{feature.title}</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Will Enjoy - Large colorful badges */}
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

      {/* Experience Journey - Wavy colorful path */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
            Experience Journey
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {journey.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl transform hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#F38181'][index],
                    }}
                  >
                    {index === 0 && <Music className="w-8 h-8" />}
                    {index === 1 && <Star className="w-8 h-8" />}
                    {index === 2 && <Heart className="w-8 h-8" />}
                    {index === 3 && <Camera className="w-8 h-8" />}
                  </div>
                  <p className="mt-4 text-center font-medium max-w-[140px] text-purple-900">{step}</p>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden md:block">
                    <svg width="60" height="30" viewBox="0 0 60 30">
                      <path d="M0,15 Q30,0 60,15" stroke="#9333EA" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                    </svg>
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-purple-200">
                <img
                  src={`https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&h=300&fit=crop`}
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
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FFE66D', '#4ECDC4', '#FF6B6B'][i % 3],
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Carnival Street?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join the celebration and create joyful memories
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

export default CarnivalStreet;
import { Mountain, Shield, Dumbbell, Users, GraduationCap, Zap, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Shauryavan = () => {
  const specialFeatures = [
    { icon: Mountain, title: 'Adventure activities designed for kids', color: 'bg-orange-500' },
    { icon: Shield, title: 'Safe and supervised environment', color: 'bg-green-500' },
    { icon: Dumbbell, title: 'Encourages confidence and movement', color: 'bg-blue-500' },
  ];

  const audiences = [
    { icon: Zap, label: 'Kids', color: 'from-orange-400 to-red-400' },
    { icon: Users, label: 'Families', color: 'from-green-400 to-teal-400' },
    { icon: GraduationCap, label: 'School groups', color: 'from-blue-400 to-purple-400' },
  ];

  const journey = [
    { step: 'Kids enter the adventure zone', icon: Target },
    { step: 'Participate in activities', icon: Mountain },
    { step: 'Enjoy physical play and challenges', icon: Trophy },
    { step: 'Have fun in a safe environment', icon: Shield },
  ];

  const relatedExperiences = [
    { name: 'Waterpark', path: '/experiences/waterpark', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Pixo Park', path: '/experiences/pixo-park', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300' },
    { name: 'Carnival Street', path: '/experiences/carnival-street', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Energetic adventure */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600" />
        {/* Dynamic diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-white transform -rotate-45"
              style={{
                width: '200%',
                left: '-50%',
                top: `${i * 12}%`,
              }}
            />
          ))}
        </div>
        {/* Burst effects */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
          <svg viewBox="0 0 100 100">
            <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Mountain className="w-5 h-5" />
            <span>Adventure Zone</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            SHAURYAVAN
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold mb-2">
            ADVENTURE PARK
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Where Kids Explore, Play & Build Confidence
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Adventure park specially designed for children with safe and engaging activities.
          </p>
          <Button size="lg" className="bg-yellow-400 text-orange-900 hover:bg-yellow-300 rounded-full px-8 py-6 text-lg font-bold transform hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 mr-2" />
            Let's Go!
          </Button>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-orange-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-xl text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-4 border-orange-200 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-bold text-gray-800">{feature.title}</p>
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
                <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-xl transform group-hover:-rotate-6`}>
                  <audience.icon className="w-12 h-12 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Adventure trail */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-orange-900">
            Experience Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {journey.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-xl">
                      <item.icon className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-orange-900 font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-gray-800 text-sm">{item.step}</p>
                </div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="mt-8 h-3 bg-orange-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 rounded-full animate-pulse" style={{ width: '75%' }} />
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-orange-200">
                <img
                  src={`https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full border-orange-600 text-orange-600 hover:bg-orange-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-orange-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
                  <img src={exp.image} alt={exp.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{exp.name}</h3>
                    <span className="text-orange-600 text-sm">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <svg width="60" height="60" viewBox="0 0 100 100">
                <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="white" />
              </svg>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready for Adventure at Shauryavan?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let your kids explore, play and build confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-orange-900 hover:bg-yellow-300 rounded-full px-8 font-bold" asChild>
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

export default Shauryavan;
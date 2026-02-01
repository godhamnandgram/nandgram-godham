import { Waves, Droplets, Smile, Users, Heart, Sparkles, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Waterpark = () => {
  const specialFeatures = [
    { icon: Waves, title: 'Fun water activities', color: 'bg-cyan-500' },
    { icon: Users, title: 'Family-friendly design', color: 'bg-blue-500' },
    { icon: Sparkles, title: 'Safe and enjoyable environment', color: 'bg-teal-500' },
  ];

  const audiences = [
    { icon: Users, label: 'Families', color: 'from-cyan-400 to-blue-400' },
    { icon: Heart, label: 'Kids', color: 'from-pink-400 to-red-400' },
    { icon: Smile, label: 'Friends & groups', color: 'from-yellow-400 to-orange-400' },
  ];

  const journey = [
    { step: 'Enter the water zone', icon: Waves },
    { step: 'Enjoy water activities', icon: Droplets },
    { step: 'Laugh, play, and splash', icon: Smile },
    { step: 'Create joyful memories', icon: Camera },
  ];

  const relatedExperiences = [
    { name: 'Swimming Pool', path: '/experiences/swimming-pool', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300' },
    { name: 'Shauryavan', path: '/experiences/shauryavan', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300' },
    { name: 'Carnival Street', path: '/experiences/carnival-street', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Explosive high energy */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600" />
        {/* Water splash effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/40 animate-ping"
              style={{
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
        {/* Wave silhouettes */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-24">
            <path
              d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
              fill="rgba(255,255,255,0.2)"
            />
            <path
              d="M0,60 C200,20 400,80 600,50 C800,20 1000,80 1200,50 C1300,30 1400,70 1440,60 L1440,100 L0,100 Z"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Waves className="w-5 h-5" />
            <span>Water Fun</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-4">
            WATERPARK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Splash into Fun for All Age Groups
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            A high-energy zone filled with excitement, laughter, and water fun.
          </p>
          <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded-full px-8 py-6 text-lg font-bold animate-bounce">
            <Droplets className="w-5 h-5 mr-2" />
            Make a Splash!
          </Button>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-xl text-center transition-all duration-300 hover:scale-105 border-4 border-cyan-200 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.color} flex items-center justify-center group-hover:animate-bounce`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-bold text-blue-800">{feature.title}</p>
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
                <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-2xl transform group-hover:rotate-6`}>
                  <audience.icon className="w-12 h-12 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Water slide path */}
      <section className="py-20 bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Experience Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Wavy path */}
            <div className="relative">
              <svg className="hidden md:block absolute top-10 left-0 right-0 w-full h-20" viewBox="0 0 800 80" preserveAspectRatio="none">
                <path
                  d="M0,40 Q100,0 200,40 T400,40 T600,40 T800,40"
                  stroke="#06B6D4"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {journey.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center relative z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-xl mb-4 group-hover:animate-bounce">
                      <item.icon className="w-10 h-10" />
                    </div>
                    <p className="font-bold text-blue-800 max-w-[120px]">{item.step}</p>
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-cyan-200">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Related Experiences
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
            {relatedExperiences.map((exp, index) => (
              <Link key={index} to={exp.path} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-cyan-200">
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
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-ping"
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Waterpark?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Splash into excitement and create lasting memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded-full px-8 font-bold" asChild>
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

export default Waterpark;
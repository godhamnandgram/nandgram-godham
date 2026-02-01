import { BookOpen, Leaf, Eye, Users, GraduationCap, Heart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Gaushala = () => {
  const specialFeatures = [
    { icon: BookOpen, title: 'Educational and cultural significance' },
    { icon: Leaf, title: 'Calm and respectful environment' },
    { icon: Eye, title: 'Learning through observation' },
  ];

  const audiences = [
    { icon: Users, label: 'Families' },
    { icon: Heart, label: 'Kids' },
    { icon: GraduationCap, label: 'School picnic groups' },
    { icon: Leaf, label: 'Culture-focused visitors' },
  ];

  const journey = [
    'Visit the Gaushala area',
    'Learn about agricultural traditions',
    'Observe peacefully and respectfully',
    'Gain meaningful insights',
  ];

  const relatedExperiences = [
    { name: 'Gautirth', path: '/experiences/gautirth', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300' },
    { name: 'Aaple Gaon', path: '/experiences/aaple-gaon', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300' },
    { name: 'Tents & Cottages', path: '/experiences/tents-cottages', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300' },
  ];

  return (
    <Layout>
      {/* Hero Section - Pastoral gentle */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600" />
        <div className="absolute inset-0 opacity-20">
          {/* Wheat stalk pattern */}
          <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                d={`M${20 + i * 20},200 Q${25 + i * 20},150 ${20 + i * 20},100`}
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Leaf className="w-5 h-5" />
            <span>Cultural Heritage</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            GAUSHALA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connecting with Agricultural Values & Traditions
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Reflects the importance of agriculture and cow-based traditions.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            <BookOpen className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
            What Makes It Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-green-200 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
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
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 shadow-lg border border-green-200">
                  <audience.icon className="w-10 h-10 text-green-600" />
                </div>
                <span className="font-medium text-foreground text-center">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey - Educational timeline */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
            Experience Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-4">
              {journey.map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-2xl shadow-md border border-green-200 text-center">
                    <p className="text-green-800 font-medium">{step}</p>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="hidden md:block absolute w-full h-0.5 bg-green-300 top-7 left-1/2" />
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
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=300&fit=crop`}
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
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
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
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Gaushala?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Connect with our agricultural heritage and traditions
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

export default Gaushala;
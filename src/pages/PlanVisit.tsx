import { Clock, Calendar, Backpack, CheckCircle, Sun, CloudRain, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DayItinerary from '@/components/DayItinerary';

const PlanVisit = () => {
  const { t } = useLanguage();

  const tips = [
    t('plan.tip.shoes'),
    t('plan.tip.sunscreen'),
    t('plan.tip.water'),
    t('plan.tip.clothes'),
    t('plan.tip.camera'),
    t('plan.tip.snacks'),
  ];

  const seasons = [
    { icon: Sun, title: t('plan.season.oct'), desc: t('plan.season.oct.desc'), tag: t('plan.season.best'), tagColor: 'bg-accent' },
    { icon: CloudRain, title: t('plan.season.jul'), desc: t('plan.season.jul.desc'), tag: t('plan.season.monsoon'), tagColor: 'bg-tertiary' },
  ];

  const dos = [
    t('plan.do.respect'),
    t('plan.do.safety'),
    t('plan.do.supervise'),
    t('plan.do.photo'),
    t('plan.do.hydrate'),
  ];

  const donts = [
    t('plan.dont.litter'),
    t('plan.dont.feed'),
    t('plan.dont.restricted'),
    t('plan.dont.smoke'),
    t('plan.dont.food'),
  ];

  return (
    <Layout>

      {/* Main Content */}
<section className="relative py-20 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1600/v1769776024/ABSTRA_1_apxtb2.jpg')",
  }}
>
  {/* White overlay */}
  <div className="absolute inset-0 bg-white/85" />
  
  <div className="relative z-10">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-3 gap-8">

      {/* ================= BEST TIME TO VISIT ================= */}
      <div className="lg:col-span-2">
        <div className="relative overflow-hidden rounded-3xl card-modern p-8 md:p-10">

          
         

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-box w-14 h-14">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                {t('plan.timing')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {seasons.map((season) => (
                <div
                  key={season.title}
                  className="group relative p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${season.tagColor} text-primary-foreground`}
                  >
                    {season.tag}
                  </span>
                  <season.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {season.title}
                  </h3>
                  <p className="text-muted-foreground">{season.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SUGGESTED DURATION ================= */}
      <div className="relative overflow-hidden rounded-3xl card-modern p-4 md:p-6">

        

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="icon-box w-14 h-14">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold">
              {t('plan.duration')}
            </h2>
          </div>

          <div className="text-center py-4">
            <div className="text-6xl font-display font-bold gradient-text mb-2">
              4–6
            </div>
            <div className="text-xl text-muted-foreground">
              {t('plan.hours')}
            </div>
          </div>

          <p className="text-muted-foreground text-center">
            {t('plan.hours.desc')}
          </p>
        </div>
      </div>
    </div>

    {/* ================= WHAT TO BRING ================= */}
    <div className="mt-8 relative overflow-hidden rounded-3xl card-modern p-8 md:p-10">

     

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="icon-box w-14 h-14">
            <Backpack className="h-7 w-7 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            {t('plan.bring')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{tip}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
    

    <DayItinerary />

      {/* Guidelines */}
      <section className="pt-16 pb-0 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t('plan.guidelines.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('plan.guidelines.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-modern p-8 border-l-4 border-primary">
                <h3 className="font-display text-xl font-bold text-primary mb-6">{t('plan.dos')}</h3>
                <ul className="space-y-4">
                  {dos.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-modern p-8 border-l-4 border-secondary">
                <h3 className="font-display text-xl font-bold text-secondary mb-6">{t('plan.donts')}</h3>
                <ul className="space-y-4">
                  {donts.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      
    </Layout>
  );
};

export default PlanVisit;

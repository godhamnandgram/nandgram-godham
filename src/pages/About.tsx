import { Heart, Leaf, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, titleKey: 'about.values.family', descKey: 'about.values.family.desc', color: 'from-secondary to-secondary/50' },
    { icon: Leaf, titleKey: 'about.values.nature', descKey: 'about.values.nature.desc', color: 'from-primary to-primary/50' },
    { icon: Users, titleKey: 'about.values.community', descKey: 'about.values.community.desc', color: 'from-tertiary to-tertiary/50' },
    { icon: Shield, titleKey: 'about.values.safety', descKey: 'about.values.safety.desc', color: 'from-accent to-accent/50' },
  ];

  return (
    <Layout>
     
      {/* ======================================================
   SECTION: MANAGING DIRECTOR – ABHILASH NAGLA (PREMIUM)
====================================================== */}
<section className="py-24 bg-[#f9fafb]">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="font-display text-3xl md:text-4xl font-semibold">
        {t('about.director.title')}
      </h2>
      <p className="text-muted-foreground mt-2 text-lg max-w-xl mx-auto">
        {t('about.director.subtitle')}
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">

      {/* LEFT – IMAGE CARD */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

        <img
          src="https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769772587/abhilashphoto_lao1hh.jpg"
          alt="Abhilash Nagla"
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Name card */}
        <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-xl rounded-2xl px-6 py-4">
          <h3 className="text-2xl font-semibold text-white">
            {t('about.director.name')}
          </h3>
          <p className="text-primary text-sm">
            {t('about.director.designation')}
          </p>
        </div>
      </div>

      {/* RIGHT – CONTENT */}
      <div className="flex flex-col gap-6">

        {/* Quote Card */}
        <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-muted">
          <span className="text-5xl text-primary absolute top-4 left-6">“</span>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed pl-6">
            {t('about.director.bio')}
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col gap-6">


          {/* Vision */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-6 border border-secondary/20 shadow-md">
            
            <h4 className="font-semibold text-muted-foreground text-base md:text-lg leading-relaxed pl-6">
              {t('about.director.missionTitle')}
            </h4>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed pl-6">
              {t('about.director.missionDetail')}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>



      {/* ======================================================
   WHY NANDGRAM GODHAM – SPLIT STORY GALLERY (GLASS + 3D)
   ====================================================== */}
      <section className="relative py-24 bg-[#fbf8f2] overflow-hidden">

     

              {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover md:bg-fixed opacity-40"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1200/v1769772142/Gemini_Generated_Image_4bjj3l4bjj3l4bjj_kesxza_p5h2vn.png')`,
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-[#f5f3ed]/20" /> 
        
      <div className="relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE STACK */}
            <div className="relative h-[420px] sm:h-[460px] flex justify-center items-center">

              {/* Glow */}
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 blur-[100px] rounded-full" />

              {/* LEFT CARD */}
              <div className="
      absolute 
      left-4 sm:left-10 
      top-14 sm:top-10
      w-40 sm:w-52 
      h-56 sm:h-72
      rounded-3xl overflow-hidden
      shadow-2xl 
      -rotate-6
      bg-white/40 backdrop-blur-xl border border-white/40
      hover:scale-105 transition-all duration-500
    ">
                <img
                  src="https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769772142/20260125_122434_ktmorz_uahfbp.jpg"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  alt="Nature"
                />
              </div>

              {/* CENTER CARD */}
              <div className="
      relative z-10
      w-52 sm:w-64 
      h-64 sm:h-80
      rounded-3xl overflow-hidden
      shadow-[0_25px_70px_rgba(0,0,0,0.25)]
      bg-white/40 backdrop-blur-xl border border-white/40
      hover:scale-105 transition-all duration-500
    ">
                <img
                  src="https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769772142/20260125_131142_theku2_r2phkj.jpg"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  alt="Farm"
                />
              </div>

              {/* RIGHT CARD */}
              <div className="
      absolute 
      right-4 sm:right-10 
      bottom-10 sm:bottom-8
      w-40 sm:w-52 
      h-56 sm:h-72
      rounded-3xl overflow-hidden
      shadow-2xl 
      rotate-6
      bg-white/40 backdrop-blur-xl border border-white/40
      hover:scale-105 transition-all duration-500
    ">
                <img
                  src="https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769772142/20260125_123713_avxwrw_iwqpjk.jpg"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  alt="Adventure"
                />
              </div>
            </div>


            {/* CONTENT */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
                {t('about.why.title')} <span className="gradient-text">{t('about.why.highlight')}</span>?
              </h2>

              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.why.p1')}</p>
                <p>{t('about.why.p2')}</p>
                <p>{t('about.why.p3')}</p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90">
                  <Link to="/experiences">
                    {t('btn.exploreExperiences')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
          </div>  
        </div>
      </section>




      {/* Values Section */}
      {/* ======================================================
   OUR VALUES – FARM CARD THEME
====================================================== */}
<section className="relative py-12 bg-[#fbf8f2] overflow-hidden">
  


  <div className="container mx-auto px-4">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
        {t('about.values.title')}{' '}
        <span className="gradient-text-warm">
          {t('about.values.highlight')}
        </span>
      </h2>
      <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
        {t('about.values.subtitle')}
      </p>
    </div>

    {/* FARM CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

      {values.map((item, idx) => (
        <div
          key={item.titleKey}
          className={`
            relative group 
            bg-[#fff8e8] 
            rounded-[28px]
            p-8 
            shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            border border-[#ead9b5]
            transition-all duration-500
            hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
            animate-fade-in stagger-${idx + 1}
          `}
        >

          {/* WOOD PIN */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#8b5a2b] rounded-full shadow-md"></div>

          {/* ICON */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#9bcf9b] to-[#5fa76c] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <item.icon className="h-8 w-8 text-white" />
          </div>

          {/* TITLE */}
          <h3 className="font-display text-lg font-semibold mb-2 text-center text-foreground">
            {t(item.titleKey)}
          </h3>

          {/* DESC */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center">
            {t(item.descKey)}
          </p>

          {/* STRAW SHADOW */}
          <div className="absolute inset-x-6 -bottom-4 h-6 bg-primary/10 blur-xl rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>


      
    </Layout>
  );
};

export default About;

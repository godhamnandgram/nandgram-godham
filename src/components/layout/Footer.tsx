import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/experiences', labelKey: 'nav.experiences' },
    { href: '/about', labelKey: 'nav.about' },
    { href: '/plan-your-visit', labelKey: 'nav.plan' },
    { href: '/gallery', labelKey: 'nav.gallery' },
    { href: '/contact', labelKey: 'nav.contact' },
  ];

  return (
    <footer className="relative text-primary-foreground overflow-hidden footer-wave">

      {/* WAVE CUT TOP */}
<svg
  className="absolute top-0 left-0 w-full h-[90px] z-20 pointer-events-none"
  viewBox="0 0 1440 90"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,50 
      C120,30 240,50 360,40 
      C480,30 600,50 720,40 
      C840,30 960,50 1080,40 
      C1200,30 1320,50 1440,40 
      L1440,0 
      L0,0 
      Z"
    fill="#faf7ef"   /* SAME as page background */
  />
</svg>


      

      {/* 🌿 Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-center bg-cover opacity-[1.0]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_1200/v1769750897/Gemini_Generated_Image_8ela3c8ela3c8ela_jhobbs_rxpoya.png')",
        }}
      />

      {/* 📱 Mobile Background (cropped / simple) */}
      <div
        className="absolute inset-0 md:hidden bg-top bg-cover opacity-[1.0]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzaasf1ph/image/upload/f_auto,q_auto,w_600/v1769750896/cart_sobtfr_z6062g.png')",
        }}
      />

      {/* 🎨 Color Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 pt-10 md:pt-16 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <div>
            <img src="/logo.png" alt="Nandgram Godham" className="h-16 mb-4" />
            <p className="text-primary-foreground/100 font-semibold mb-6">
              {t('footer.tagline')}
            </p>

            <div className="flex gap-3">
              <a href="https://www.facebook.com/NandgramA2Milk" target="_blank" className="social-btn hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/nandgram.godham?igsh=dXY0MjJ3bHYwb3lu" target="_blank" className="social-btn hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@nandgramgodham9870?si=5UNxA_gky_qa2VbC" target="_blank" className="social-btn hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t('footer.quicklinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/100 font-semibold hover:text-accent underline transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t('footer.connect')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+919112911248" className="font-semibold hover:text-white">
                  +91 9112911248
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:godhamnandgram@gmail.com" className="font-semibold hover:text-white">
                  godhamnandgram@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-8 w-8 text-accent mt-1" />
                <span className="font-semibold hover:text-white">Nandgram Godham, Anjale, Taluka-Yawal, District Jalgaon</span>
              </li>
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t('contact.hours')}
            </h4>
            <p>{t('footer.hours.weekdays')}</p>
            <p className="text-xl font-bold mt-1">10:00 AM – 5:00 PM</p>
           
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-white/60 flex flex-col items-center gap-2 text-center">
          <p className="text-white/100 text-sm font-semibold">
            © {new Date().getFullYear()} Nandgram Godham. {t('footer.rights')}
          </p>

          <p className="text-white/100 text-sm font-semibold">
            Designed & Developed by{" "}
            <a
              href="https://www.wingzspheretech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent underline transition-colors"
            >
              WingzSphere Tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

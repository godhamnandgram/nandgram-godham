import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Leaf, Globe, Camera, Flower2, Home, TreePine, PartyPopper, Waves, Mountain, Palette, Droplets, Tent } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const languages: { code: Language; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const experienceSubPages = [
    { href: '/experiences/pic-city', labelKey: 'exp.piccity', icon: Camera },
    { href: '/experiences/gautirth', labelKey: 'exp.gautirth', icon: Flower2 },
    { href: '/experiences/aaple-gaon', labelKey: 'exp.aplegaon', icon: Home },
    { href: '/experiences/gaushala', labelKey: 'exp.gaushala', icon: TreePine },
    { href: '/experiences/carnival-street', labelKey: 'exp.carnival', icon: PartyPopper },
    { href: '/experiences/boating-point', labelKey: 'exp.boating', icon: Waves },
    { href: '/experiences/shauryavan', labelKey: 'exp.shauryavan', icon: Mountain },
    { href: '/experiences/pixo-park', labelKey: 'exp.pixopark', icon: Palette },
    { href: '/experiences/swimming-pool', labelKey: 'exp.swimmingpool', icon: Droplets },
    { href: '/experiences/waterpark', labelKey: 'exp.waterpark', icon: Waves },
    { href: '/experiences/tents-cottages', labelKey: 'exp.tents', icon: Tent },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/experiences', label: t('nav.experiences'), hasDropdown: false },
    { href: '/about', label: t('nav.about') },
    { href: '/plan-your-visit', label: t('nav.plan') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <>
      {/* Utility Top Bar - Language Selector */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-8">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-3 text-xs text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md gap-2"
                >
                  <Globe className="h-3 w-3" />

                  {/* Select Language text */}
                  <span className="inline text-primary-foreground/70">
                    Select Language
                  </span>

                  {/* Current language */}
                  <span className="hidden xs:inline font-medium">
                    {currentLanguage?.native}
                  </span>
                  <span className="xs:hidden font-medium">
                    {currentLanguage?.code.toUpperCase()}
                  </span>

                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={6}
                avoidCollisions={false}
                className="min-w-[160px] rounded-xl border-primary/20 bg-background shadow-tropical"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "rounded-lg text-sm cursor-pointer",
                      language === lang.code && "bg-primary/15 text-primary font-medium"
                    )}
                  >
                    {lang.native} ({lang.label})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-8 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-tropical"
            : "bg-background/90 backdrop-blur-lg border-b border-primary/5"
        )}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Tropical Style */}
            <Link to="/" className="flex items-center gap-0">
              <img
                src="/logo.png"
                alt="Nandgram Godam"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "px-3 py-2 text-sm font-medium rounded-full transition-all duration-300",
                          isActive(link.href)
                            ? "bg-gradient-to-r from-primary to-tertiary text-primary-foreground shadow-glow"
                            : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                        )}
                      >
                        {link.label} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 rounded-2xl border-primary/20 bg-background shadow-tropical max-h-80 overflow-y-auto">
                      <DropdownMenuItem asChild className="rounded-xl focus:bg-primary/10">
                        <Link to="/experiences" className="w-full font-semibold">
                          {t('common.allExperiences')}
                        </Link>
                      </DropdownMenuItem>
                      {experienceSubPages.map((exp) => (
                        <DropdownMenuItem key={exp.href} asChild className="rounded-xl focus:bg-primary/10">
                          <Link to={exp.href} className="w-full flex items-center gap-2">
                            <exp.icon className="w-4 h-4 text-primary" />
                            {t(exp.labelKey)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-full transition-all duration-300",
                      isActive(link.href)
                        ? "bg-gradient-to-r from-primary to-tertiary text-primary-foreground shadow-glow"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Right Side - CTA */}
            <div className="flex items-center gap-3">
              {/* CTA Button - Tropical Flower Style */}
              <Button asChild className="hidden md:flex btn-flower px-5 py-4 text-sm">
                <Link to="https://wa.me/919112911248" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">{t('hero.cta')}</span>
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation - Tropical Glass */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <div className="glass-card-strong rounded-3xl p-5 border border-primary/20 bg-background/95 backdrop-blur-xl max-h-[70vh] overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    link.hasDropdown ? (
                      <div key={link.href}>
                        {/* Experiences with expandable sub-menu */}
                        <button
                          onClick={() => setIsExperiencesOpen(!isExperiencesOpen)}
                          className={cn(
                            "w-full px-4 py-3.5 rounded-2xl font-medium transition-all duration-300 flex items-center justify-between",
                            isActive(link.href)
                              ? "bg-gradient-to-r from-primary to-tertiary text-primary-foreground shadow-glow"
                              : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                          )}
                        >
                          {link.label}
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            isExperiencesOpen && "rotate-180"
                          )} />
                        </button>

                        {/* Sub-pages */}
                        {isExperiencesOpen && (
                          <div className="mt-1 ml-4 space-y-1 animate-fade-in">
                            <Link
                              to="/experiences"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors"
                            >
                              {t('common.allExperiences')}
                            </Link>
                            {experienceSubPages.map((exp) => (
                              <Link
                                key={exp.href}
                                to={exp.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                              >
                                <exp.icon className="w-4 h-4 text-primary" />
                                {t(exp.labelKey)}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "px-4 py-3.5 rounded-2xl font-medium transition-all duration-300",
                          isActive(link.href)
                            ? "bg-gradient-to-r from-primary to-tertiary text-primary-foreground shadow-glow"
                            : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>

                {/* Mobile Language Selector */}
                <div className="mt-5 pt-5 border-t border-primary/15">
                  <p className="text-sm text-muted-foreground mb-3 px-4 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    {t('common.language')}
                  </p>
                  <div className="flex gap-2 px-4">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={language === lang.code ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                          "rounded-full transition-all duration-300",
                          language === lang.code
                            ? "bg-gradient-to-r from-primary to-tertiary text-primary-foreground"
                            : "border-primary/30 hover:bg-primary/10"
                        )}
                      >
                        {lang.native}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-5 px-4">
                  <Button asChild className="w-full btn-flower h-14 text-base">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="relative z-10">{t('hero.cta')}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

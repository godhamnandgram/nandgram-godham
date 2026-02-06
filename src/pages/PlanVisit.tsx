import { Clock, Calendar, Backpack, CheckCircle, Sun, CloudRain, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DayItinerary from '@/components/DayItinerary';
import { Helmet } from 'react-helmet-async';

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
      {/* ============================================
          SEO META TAGS - React Helmet
          ============================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Plan Your Visit to Nandgram Godham | Timings, Tickets, Packages & Directions</title>
        <meta name="title" content="Plan Your Visit to Nandgram Godham | Timings, Tickets, Packages & Directions" />
        <meta 
          name="description" 
          content="Plan your perfect day at Nandgram Godham! Opening hours: 10 AM-5 PM. Entry ₹500/person(Free below 5 yrs age). Days: Tuesday - Sunday (Monday Closed), itinerary & visitor guidelines. Book now!" 
        />
        <meta 
          name="keywords" 
          content="Nandgram Godham timings, entry ticket price, how to reach Nandgram Godham, best time to visit, visitor guidelines, what to bring, day itinerary, opening hours, booking packages, directions Anjale, Maharashtra tourism planning" 
        />
        <meta name="author" content="Nandgram Godham" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English, Hindi, Marathi" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nandgramgodham.in/plan-your-visit" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nandgramgodham.in/plan-your-visit" />
        <meta property="og:title" content="Plan Your Visit - Nandgram Godham | Timings, Tickets & Packages" />
        <meta 
          property="og:description" 
          content="Everything you need to know: Opening hours, ticket prices, best time to visit, what to bring & day itinerary. Plan your perfect visit!" 
        />
        <meta 
          property="og:image" 
          content="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769776024/20260125_125947_nqi9uf_wl91et.jpg" 
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nandgram Godham" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.nandgramgodham.in/plan-your-visit" />
        <meta name="twitter:title" content="Plan Your Visit - Nandgram Godham" />
        <meta 
          name="twitter:description" 
          content="Timings: 10 AM-5 PM | Entry: ₹500(Free below 5 yrs age) | Days: Tuesday - Sunday (Monday Closed) | Complete visitor guide with itinerary & tips!" 
        />
        <meta 
          name="twitter:image" 
          content="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769776024/20260125_125947_nqi9uf_wl91et.jpg" 
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#10b981" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Anjale" />

        {/* Structured Data - Place with Opening Hours */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Nandgram Godham",
            "description": "Agri-tourism destination with water park, adventure activities, and nature experiences",
            "url": "https://www.nandgramgodham.in",
            "image": "https://res.cloudinary.com/dzaasf1ph/image/upload/v1769776024/20260125_125947_nqi9uf_wl91et.jpg",
            "telephone": "+91-91129-11248",
            "email": "godhamnandgram@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Bhusawal",
              "addressLocality": "Anjale, Yawal Taluka, Jalgaon",
              "addressRegion": "Maharashtra",
              "postalCode": "425301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.095814,
              "longitude": 75.745656
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "17:00"
              }
            ],
          "priceRange": "₹₹",
       
          })}
        </script>

        {/* Structured Data - Offer/Ticket Information */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Nandgram Godham Entry Package",
            "description": "All-inclusive entry package with water park access, welcome drinks, popcorn, cotton candy, and access to all attractions",
            "price": "500",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://www.nandgramgodham.in/plan-your-visit",
            "validFrom": "2024-01-01",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Day Entry Pass",
              "provider": {
                "@type": "Organization",
                "name": "Nandgram Godham"
              }
            },
            "eligibleCustomerType": "https://schema.org/Anyone",
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Includes",
                "value": "Water park, Selfie points, Popcorn, Welcome drink, Cotton candy"
              },
              {
                "@type": "PropertyValue",
                "name": "Duration",
                "value": "Full day access (4-6 hours recommended)"
              },
              {
                "@type": "PropertyValue",
                "name": "Kids Policy",
                "value": "Children under 5 yrs age: Free entry"
              }
            ]
          })}
        </script>

        {/* Structured Data - How To Guide */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Plan Your Visit to Nandgram Godham",
            "description": "Complete guide to planning a perfect day at Nandgram Godham including best time to visit, what to bring, and day itinerary",
            "image": "https://res.cloudinary.com/dzaasf1ph/image/upload/v1769776024/20260125_125947_nqi9uf_wl91et.jpg",
            "totalTime": "PT6H",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "500"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Comfortable walking shoes"
              },
              {
                "@type": "HowToSupply",
                "name": "Sunglasses and hats"
              },
              {
                "@type": "HowToSupply",
                "name": "Water bottles"
              },
              {
                "@type": "HowToSupply",
                "name": "Light, comfortable clothes"
              },
              {
                "@type": "HowToSupply",
                "name": "Camera for memories"
              },
              {
                "@type": "HowToSupply",
                "name": "Light snacks for kids"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Choose the Best Time",
                "text": "Visit in any season in year. Open daily 10 AM - 5 PM.(Mondays Closed)"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Plan Your Duration",
                "text": "Allocate 4-6 hours to enjoy all experiences comfortably without rushing."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Morning Arrival (10:00 AM)",
                "text": "Start with welcome drinks, then explore Gautirth, Aaplegaon village, Gaushala, and Pic City."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Midday Activities (12:00-1:30 PM)",
                "text": "Enjoy carnival games, boating, and Pixo Park photo spots."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Lunch Break (1:30-2:30 PM)",
                "text": "Recharge with delicious local cuisine and rest before afternoon adventures."
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Afternoon Adventure (2:30-4:30 PM)",
                "text": "Experience Shauryavan adventure zone, swimming pool, and water park."
              },
              {
                "@type": "HowToStep",
                "position": 7,
                "name": "Evening Wind-Down (4:30-5:00 PM)",
                "text": "Capture golden hour photos and enjoy beautiful sunset views."
              }
            ]
          })}
        </script>


        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.nandgramgodham.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Plan Your Visit",
                "item": "https://www.nandgramgodham.in/plan-your-visit"
              }
            ]
          })}
        </script>

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the opening hours of Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nandgram Godham is open daily from 10:00 AM to 5:00 PM except mondays. We recommend arriving by 10:00 AM to make the most of your visit."
                }
              },
              {
                "@type": "Question",
                "name": "What is the ticket price at Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Entry is ₹500 per person, which includes water park access, selfie points, popcorn, welcome drink, and cotton candy. Children under 5 yrs age enter free. Food can be brought from outside (tiffin boxes are allowed)."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best time to visit Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Any time in a year is the best time with perfect weather for outdoor activities. The monsoon season (July-September) offers lush green landscapes but occasional rain. We're open year-round!"
                }
              },
              {
                "@type": "Question",
                "name": "How long should I plan to spend at Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend 4-6 hours to enjoy all experiences comfortably. This allows time for cultural activities, water park, adventure zones, lunch, and photography without rushing."
                }
              },
              {
                "@type": "Question",
                "name": "What should I bring to Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bring comfortable walking shoes, sunglasses and hats, water bottles, light comfortable clothes, a camera, and light snacks for kids. Swimwear is recommended for water activities."
                }
              },
              {
                "@type": "Question",
                "name": "How do I reach Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nandgram Godham is located in Anjale, Yawal Taluka, near Bhusawal, Jalgaon district, Maharashtra. It's accessible by car (nearest city: bhusawal), bus (regular services from bhusawal), and train (Bhusawal Junction is the nearest railway station)."
                }
              },
              {
                "@type": "Question",
                "name": "Can we bring outside food to Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can bring outside food. We also have food facilities available on-site. Please note that smoking and alcohol consumption are strictly prohibited."
                }
              },
              {
                "@type": "Question",
                "name": "Are there accommodation options at Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer luxury camping tents and cozy cottages with modern amenities for overnight stays. Perfect for weekend getaways and extended visits."
                }
              }
            ]
          })}
        </script>

        {/* Trip Planning Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Day Trip to Nandgram Godham",
            "description": "Complete day itinerary covering nature experiences, cultural activities, water park, and adventure zones",
            "itinerary": [
              {
                "@type": "TouristDestination",
                "name": "Morning Nature & Culture (10:30-12:00)",
                "description": "Gautirth cow museum, Aaplegaon village tour, Gaushala organic farm, Pic City photography"
              },
              {
                "@type": "TouristDestination",
                "name": "Midday Activities (12:00-1:30)",
                "description": "Carnival games, boating point, Pixo Park themed photo zones"
              },
              {
                "@type": "TouristDestination",
                "name": "Lunch & Rest (1:30-2:30)",
                "description": "Delicious local cuisine and relaxation"
              },
              {
                "@type": "TouristDestination",
                "name": "Afternoon Adventure (2:30-4:30)",
                "description": "Shauryavan adventure zone, swimming pool, water park with slides"
              },
              {
                "@type": "TouristDestination",
                "name": "Evening Wind-Down (4:30-5:00)",
                "description": "Golden hour photography and sunset views"
              }
            ],
            "touristType": ["Family with children", "Friends", "School groups", "Nature lovers"]
          })}
        </script>
      </Helmet>

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
import {
  Phone, MessageCircle, Mail, MapPin, Clock, Send, ArrowRight, Car, CheckCircle, X, Loader2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const distances = [
    { cityKey: 'contact.distance.bhusawal', km: '5 km' },
    { cityKey: 'contact.distance.jalgaon', km: '25 km' },
    { cityKey: 'contact.distance.dhule', km: '125 km' },
    { cityKey: 'contact.distance.nashik', km: '300 km' },
    { cityKey: 'contact.distance.aurangabad', km: '170 km' },
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to JSON
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      message: formData.get('message'),
      access_key: '88b28406-7cd6-44db-98f3-f1cca1ad435d', 
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccessModal(true);
        form.reset();
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* ============================================
          SEO META TAGS - React Helmet
          ============================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Nandgram Godham - Get Directions, Hours & Reach Us | Anjale, Yawal Taluka, Dist. Jalgaon</title>
        <meta name="title" content="Contact Nandgram Godham - Get Directions, Hours & Reach Us | Anjale, Yawal Taluka, Dist. Jalgaon" />
        <meta 
          name="description" 
          content="Contact Nandgram Godham: ☎️ +91-91129-11248 | 📧 godhamnandgram@gmail.com | Open Tue-Sun 10 AM-5 PM | Near Bhusawal, Jalgaon. Get directions, hours & plan your visit!" 
        />
        <meta 
          name="keywords" 
          content="Nandgram Godham contact, phone number, email address, location, directions to Nandgram Godham, how to reach, opening hours, contact form, Bhusawal Jalgaon, Maharashtra tourism contact" 
        />
        <meta name="author" content="Nandgram Godham" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English, Hindi, Marathi" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nandgramgodham.in/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nandgramgodham.in/contact" />
        <meta property="og:title" content="Contact Nandgram Godham - Get in Touch" />
        <meta 
          property="og:description" 
          content="Reach us at +91-91129-11248 or godhamnandgram@gmail.com. Open Tue-Sun 10 AM-5 PM. Anjale, Yawal Taluka, Near Bhusawal, Jalgaon. We'd love to hear from you!" 
        />
        <meta 
          property="og:image" 
          content="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769749784/7_yc9s2h_rioxna.png" 
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nandgram Godham" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.nandgramgodham.in/contact" />
        <meta name="twitter:title" content="Contact Nandgram Godham" />
        <meta 
          name="twitter:description" 
          content="📞 +91-91129-11248 | 📧 godhamnandgram@gmail.com | Open Tue-Sun 10-5 PM | Anjale, Yawal Taluka, Near Bhusawal, Jalgaon" 
        />
        <meta 
          name="twitter:image" 
          content="https://res.cloudinary.com/dzaasf1ph/image/upload/v1769749784/7_yc9s2h_rioxna.png" 
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#10b981" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jalgaon" />
        <meta name="geo.position" content="21.095814;75.745656" />
        <meta name="ICBM" content="21.095814, 75.745656" />

        {/* Structured Data - ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Nandgram Godham",
            "description": "Get in touch with Nandgram Godham for inquiries, bookings, and visit information",
            "url": "https://www.nandgramgodham.in/contact",
            "mainEntity": {
              "@type": "TouristAttraction",
              "name": "Nandgram Godham",
              "telephone": "+91-91129-11248",
              "email": "godhamnandgram@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Bhusawal",
                "addressLocality": "Anjale, Yawal Taluka, Dist. Jalgaon",
                "addressRegion": "Maharashtra",
                "postalCode": "425301",
                "addressCountry": "IN"
              }
            }
          })}
        </script>

        {/* Structured Data - LocalBusiness with Complete Contact Info */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nandgram Godham",
            "image": "https://res.cloudinary.com/dzaasf1ph/image/upload/v1769749784/7_yc9s2h_rioxna.png",
            "url": "https://www.nandgramgodham.in",
            "telephone": "+91-91129-11248",
            "email": "godhamnandgram@gmail.com",
            "priceRange": "₹500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Bhusawal",
              "addressLocality": "Anjale, Yawal Taluka, Dist. Jalgaon",
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
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-91129-11248",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hindi", "Marathi"],
                "areaServed": "IN"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-91129-11248",
                "contactType": "Reservations",
                "availableLanguage": ["English", "Hindi", "Marathi"],
                "areaServed": "IN"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/nandgramgodham",
              "https://www.instagram.com/nandgramgodham",
              "https://www.youtube.com/@nandgramgodham"
            ],
            "hasMap": "https://www.google.com/maps/place/Nandgram+Godham+-+Cow+%26+Agri+Tourism/@21.0958141,75.7456563,17z"
          })}
        </script>

        {/* Structured Data - PostalAddress */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PostalAddress",
            "streetAddress": "Near Bhusawal",
            "addressLocality": "Anjale, Yawal Taluka, Dist. Jalgaon",
            "addressRegion": "Maharashtra",
            "postalCode": "425301",
            "addressCountry": "IN",
            "name": "Nandgram Godham"
          })}
        </script>

        {/* Structured Data - Place with Accessibility Info */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Nandgram Godham",
            "description": "Agri-tourism destination near Bhusawal, Jalgaon",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Bhusawal",
              "addressLocality": "Anjale, Yawal Taluka, Dist. Jalgaon",
              "addressRegion": "Maharashtra",
              "postalCode": "425301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.095814,
              "longitude": 75.745656
            },
            "publicAccess": true,
            "isAccessibleForFree": false,
            "maximumAttendeeCapacity": 500,
            "smokingAllowed": false,
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Distance from Bhusawal",
                "value": "5 km"
              },
              {
                "@type": "PropertyValue",
                "name": "Distance from Jalgaon",
                "value": "25 km"
              },
              {
                "@type": "PropertyValue",
                "name": "Distance from Nashik",
                "value": "300 km"
              },
              {
                "@type": "PropertyValue",
                "name": "Parking Available",
                "value": "Yes"
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
                "name": "Contact",
                "item": "https://www.nandgramgodham.in/contact"
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
                "name": "What is the contact number for Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach us at +91-91129-11248 for inquiries, bookings, and information. We're also available on WhatsApp at the same number for quick responses."
                }
              },
              {
                "@type": "Question",
                "name": "What is the email address of Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our email address is godhamnandgram@gmail.com. Feel free to send us your queries and we'll respond promptly."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Nandgram Godham located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nandgram Godham is located near Bhusawal in Jalgaon district, Maharashtra. We're just 5 km from Bhusawal city center and 25 km from Jalgaon. Easily accessible from major cities like Nashik (300 km), Aurangabad (170 km), and Dhule (125 km)."
                }
              },
              {
                "@type": "Question",
                "name": "What are the operating hours of Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are open Tuesday to Sunday from 10:00 AM to 5:00 PM. We are closed on Mondays."
                }
              },
              {
                "@type": "Question",
                "name": "How do I reach Nandgram Godham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nandgram Godham is easily accessible by road. By car: 5 km from Bhusawal, 25 km from Jalgaon. By train: Bhusawal Junction is the nearest railway station (15 minutes away). By bus: Regular buses available from Jalgaon and nearby cities. GPS coordinates: 21.095814, 75.745656"
                }
              },
              {
                "@type": "Question",
                "name": "Can I book a visit in advance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we recommend booking in advance, especially for groups and weekends. You can call us at +91-91129-11248, WhatsApp us, or email godhamnandgram@gmail.com to make a reservation."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br">
        <div className="relative z-10 container mx-auto px-4 py-20 pb-10 h-full flex flex-col">

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 items-center">

            {/* LEFT */}
            <div className="lg:col-span-4 space-y-6">
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                {t('contact.title')}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t('contact.subtitle1')}
              </p>

              <div className="space-y-4">

                {/* CALL */}
                <a
                  href="tel:+919112911248"
                  className="glass-card p-4 flex items-center gap-4 hover:scale-[1.02] transition"
                  aria-label="Call Nandgram Godham"
                >
                  <Phone className="text-primary" />
                  <div>
                    <p className="font-medium">{t('contact.call.label')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.call.number')}
                    </p>
                  </div>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/919112911248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 hover:scale-[1.02] transition"
                  aria-label="WhatsApp Nandgram Godham"
                >
                  <MessageCircle className="text-tertiary" />
                  <div>
                    <p className="font-medium">{t('contact.whatsapp.label')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.whatsapp.number')}
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:godhamnandgram@gmail.com"
                  className="glass-card p-4 flex items-center gap-4 hover:scale-[1.02] transition"
                  aria-label="Email Nandgram Godham"
                >
                  <Mail className="text-secondary" />
                  <div>
                    <p className="font-medium">{t('contact.email.label')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.email.address')}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* CENTER FORM */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="glass-card w-full max-w-md p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold mb-4">
                  {t('contact.form.title1')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input 
                    name="name"
                    placeholder={t('contact.form.name1')}
                    required
                    disabled={isSubmitting}
                    aria-label="Your name"
                  />
                  <Input 
                    name="phone"
                    placeholder={t('contact.form.phone1')}
                    type="tel"
                    required
                    disabled={isSubmitting}
                    aria-label="Your phone number"
                  />
                  <Input 
                    name="city"
                    placeholder={t('contact.form.city')}
                    required
                    disabled={isSubmitting}
                    aria-label="Your city"
                  />
                  <Textarea 
                    name="message"
                    rows={3} 
                    placeholder={t('contact.form.message1')}
                    required
                    disabled={isSubmitting}
                    aria-label="Your message"
                  />

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary rounded-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit1')}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-primary" />
                  <p className="font-medium">{t('contact.location.label')}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.location.address')}
                </p>

                <Button asChild variant="outline" className="mt-3 w-full rounded-xl">
                  <a
                    href="https://www.google.com/maps/place/Nandgram+Godham+-+Cow+%26+Agri+Tourism/@21.0958141,75.7456563,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Nandgram Godham on Google Maps"
                  >
                    {t('contact.location.button')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-accent" />
                  <p className="font-medium">{t('contact.hours.label')}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.hours.time1')}
                </p>
              </div>

              <div className="glass-card p-5 text-center">
                <h3 className="font-display text-lg font-bold mb-2">
                  {t('contact.cta.title')}
                </h3>
                <Button asChild className="rounded-full">
                  <Link to="/plan-your-visit">
                    {t('contact.cta.button')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* DISTANCE BAR */}
          <div className="mt-10 glass-card py-4 px-6">
            <h3 className="text-center font-display text-lg font-semibold mb-3">
              {t('contact.distance.title')}
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {distances.map((d) => (
                <div key={d.cityKey} className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-primary" />
                  <span className="font-medium">{t(d.cityKey)}</span>
                  <span className="text-muted-foreground text-sm">
                    {d.km}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SUCCESS MODAL */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-fade-in">
              
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close success message"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>

              {/* Success Message */}
              <h3 className="font-display text-2xl font-bold text-center mb-2">
                {t('contact.form.success.title')}
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                {t('contact.form.success.message')}
              </p>

              {/* Close Button */}
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full rounded-xl bg-primary"
              >
                {t('contact.form.success.close')}
              </Button>
            </div>
          </div>
        )}

        {/* ERROR MODAL */}
        {showErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-fade-in">
              
              {/* Close Button */}
              <button
                onClick={() => setShowErrorModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close error message"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Error Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-10 w-10 text-red-600" />
                </div>
              </div>

              {/* Error Message */}
              <h3 className="font-display text-2xl font-bold text-center mb-2">
                Failed to Send
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Please try again or contact us directly via phone or WhatsApp.
              </p>

              {/* Close Button */}
              <Button
                onClick={() => setShowErrorModal(false)}
                className="w-full rounded-xl bg-primary"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Contact;
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys - comprehensive for all pages
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experiences': 'Experiences',
    'nav.about': 'About Us',
    'nav.plan': 'Plan Your Visit',
    'nav.groups': 'Groups & Schools',
    'nav.facilities': 'Facilities',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'Where Nature, Culture & Family Fun Come Together',
    'hero.subtitle': 'A premium agro-tourism destination near Bhusawal, Maharashtra',
    'hero.cta': 'Contact on Whatsapp',
    'hero.explore': 'Explore Experiences',
    'hero.visitorGuide': 'Visitor Guide',
    'hero.slide1.title': 'Experience Nature & Rural Beauty',
    'hero.slide1.subtitle': 'Discover authentic village life in the heart of Maharashtra',
    'hero.slide2.title': 'Culture & Traditional Heritage',
    'hero.slide2.subtitle': 'Immerse yourself in rich Maharashtrian traditions and customs',
    'hero.slide3.title': 'Joyful Living & Adventure',
    'hero.slide3.subtitle': 'Create unforgettable memories with family and friends',

    // Section titles
    'section.destination.title': 'A Destination Designed for Togetherness',
    'section.destination.desc': 'Nandgram Godham is more than a picnic spot or a waterpark. It is a thoughtfully developed space where families, children, and groups can reconnect with nature, experience village life, enjoy adventure and water activities, and spend quality time together in a safe and welcoming environment.',
    'section.destination.highlight': 'Every corner of Nandgram Godham is created to offer comfort, joy, and a sense of belonging.',
    'section.experiences.title': 'Many Experiences.',
    'section.experiences.highlight': 'One Beautiful Destination.',
    'section.experiences.button': 'Know More',
    'section.signature.title': 'Experiences That Define Nandgram Godham',
    'section.personas.title': 'A Place for',
    'section.personas.highlight': 'Everyone',
    'section.journey.title': 'From Arrival to',
    'section.journey.subtitle': 'Your perfect day unfolds naturally, from sunrise to sunset',
    'section.journey.highlight': 'Lasting Memories',
    'section.journey.button': 'Replay Journey',
    'section.recognition.title': 'Recognised for Excellence & Experience',
    'section.safety.title': 'Designed with Visitor Comfort in Mind',
    'section.gallery.title': 'Moments Captured at Nandgram Godham',
    'section.gallery.subtitle': 'A glimpse of nature, culture, adventure, water fun, family smiles, and unforgettable experiences.',
    'section.location.title': 'Easy to Reach,',
    'section.location.highlight': 'Peaceful to Experience',
    'section.location.desc': 'Located near Bhusawal, Nandgram Godham is easily accessible and ideal for a one-day outing or a relaxing stay close to nature.',
    'section.cta.title': 'Ready to Experience Nature, Fun & Togetherness?',
    'section.cta.subtitle': 'Plan your visit to Nandgram Godham and discover a destination where every moment feels special.',
    'section.cta.button': 'Plan Your Visit',
    'section.products.title': 'Pure from Our Gaushala',
    'section.products.subtitle': 'Crafted with love from our Gir cows — fresh, healthy, and traditional.',
    'section.products.product1': 'A2 Gir Cow Ghee',
    'section.products.productdesc1': 'Traditionally churned, rich in nutrition',
    'section.products.product2': 'A2 Gir Cow Milk',
    'section.products.productdesc2': 'Fresh, chemical-free & farm-direct',
    'section.products.product3': 'Natural Cow Dung',
    'section.products.productdesc3': 'Handmade & eco-friendly fuel bricks',
    'section.products.tag': 'Best Seller',
    'section.products.bottom': 'Available at Nandgram Godham • 100% Natural • No Preservatives',

    // Intro Bio
    'section.introbio.title': 'Pioneered Agri tourism and Waterpark in Maharashtra...',
    'section.introbio.subtitle': 'Harvesting Happiness!',
    'section.introbio.paragraph1': 'Nandgram Godham is more than a picnic spot or a waterpark. It is a thoughtfully developed space where families, children, and groups can reconnect with nature, experience village life, enjoy adventure and water activities, and spend quality time together in a safe and welcoming environment.',
    'section.introbio.paragraph2': 'Every corner of Nandgram Godham is created to offer comfort, joy, and a sense of belonging.',

    // package
    'section.package.title': 'One Day Experience Package',
    'section.package.subtitle': 'Everything you need for a joyful day at Nandgram Godham',
    'section.package.ribbon': 'Best Value',
    'section.package.priceLabel': 'Ticket Price',
    'section.package.price': '₹500',
    'section.package.perPerson': 'Per Person',
    'section.package.description': 'A complete day of fun, nature, and unforgettable memories.',
    'section.package.includes': 'Ticket Includes',
    'section.package.item.waterpark': 'Access to Water Park',
    'section.package.item.selfie': 'Selfie Points & Other Attractions',
    'section.package.item.popcorn': 'Complimentary Popcorn',
    'section.package.item.welcomeDrink': 'Welcome Drink',
    'section.package.item.cottonCandy': 'Cotton Candy',
    'section.package.noteTitle': 'Note',
    'section.package.note.food': 'Food is available at additional charges as per order',
    'section.package.note.tiffin': 'Tiffin from home is allowed',
    'section.package.note.kids': 'Free entry for children below 5 years',
    'section.package.cta': 'Plan Your Visit',

    //Experiences Page titles and subtitles

    // EXPERIENCES PAGE - All Translation Keys
    // ============================================

    // Add these keys to your LanguageContext.tsx file in the appropriate language object

    // English translations (en)

    // Pic City
    'exp.piccity.title': 'Pic City',
    'exp.piccity.desc': 'Capture stunning moments at our picturesque photography spots. Perfect backdrops for family portraits, pre-wedding shoots, and memorable photos with beautiful scenic views and professional setups.',
    'exp.piccity.feature1': 'Professional Photography Spots',
    'exp.piccity.feature2': 'Scenic Backdrops',
    'exp.piccity.feature3': 'Family-Friendly Locations',
    'exp.piccity.highlight1': '📸 Instagram-Perfect',
    'exp.piccity.highlight2': '🌄 Panoramic Views',
    'exp.piccity.highlight3': '👨‍👩‍👧‍👦 Group Photos',

    // Water Park
    'exp.waterpark.title': 'Water Park',
    'exp.waterpark.desc': 'Beat the heat with thrilling water slides, wave pools, and splash zones. A perfect family destination with attractions for all ages, featuring exciting rides and dedicated kids areas with lifeguards on duty.',
    'exp.waterpark.feature1': 'Thrilling Water Slides',
    'exp.waterpark.feature2': 'Wave Pool & Lazy River',
    'exp.waterpark.feature3': 'Kids Splash Zone',
    'exp.waterpark.highlight1': '🌊 High-Speed Slides',
    'exp.waterpark.highlight2': '🏊 Family Pool',
    'exp.waterpark.highlight3': '👶 Toddler Area',

    // Aaplegaon
    'exp.aaplegaon.title': 'Aaplegaon',
    'exp.aaplegaon.desc': 'Step into authentic village life and experience traditional rural Maharashtra. Explore simplicity and charm of village living.',
    'exp.aaplegaon.feature1': 'Village Tours',
    'exp.aaplegaon.feature2': 'Cultural Experiences',
    'exp.aaplegaon.feature3': 'Agricultural Activities',
    'exp.aaplegaon.highlight1': '🌲 Traditional Village Life',
    'exp.aaplegaon.highlight2': '🦜 Rural Connection  ',
    'exp.aaplegaon.highlight3': '🥾 Traditional Crafts',

    // Gautirth
    'exp.gautirth.title': 'Gautirth',
    'exp.gautirth.desc': 'Experience spiritual serenity at this sacred Cow museum. An informative center dedicated to the cows.',
    'exp.gautirth.feature1': 'Informative Areas',
    'exp.gautirth.feature2': 'Religious Upbringing',
    'exp.gautirth.feature3': 'Cows Importance',
    'exp.gautirth.highlight1': '🕉️ Sacred Place',
    'exp.gautirth.highlight2': '🧘 Peaceful Ambience',
    'exp.gautirth.highlight3': '📿 Spiritual Rituals',

    // Gaushala
    'exp.gaushala.title': 'Gaushala',
    'exp.gaushala.desc': 'Connect with traditional life at our organic cattle shelter. Learn about sustainable agriculture, wide range of cows, and discover authentic rural lifestyle. Educational tours available for children and families.',
    'exp.gaushala.feature1': 'Large Shaded Shelter',
    'exp.gaushala.feature2': 'Organic Dairy Products',
    'exp.gaushala.feature3': 'Farm-to-Table Tours',
    'exp.gaushala.highlight1': '🐄 See the Cows',
    'exp.gaushala.highlight2': '🥛 Fresh Dairy',
    'exp.gaushala.highlight3': '🌾 Organic Farming',

    // Boating Point
    'exp.boating.title': 'Boating Point',
    'exp.boating.desc': 'Sail across serene waters with breathtaking nature reflections. Enjoy peaceful paddle boats. Instructor provided for all guests ensuring complete safety.',
    'exp.boating.feature1': 'Paddle Boats Available',
    'exp.boating.feature2': 'Nature Boat Rides',
    'exp.boating.feature3': 'Instructor Supervised',
    'exp.boating.highlight1': '⛵ Scenic routes',
    'exp.boating.highlight2': '🌅 Nature Views',
    'exp.boating.highlight3': '📷 Lake Photography',

    // Pixo Park
    'exp.pixopark.title': 'Pixo Park',
    'exp.pixopark.desc': 'Pixo Park is a vibrant theme-based photo and exploration zone featuring colourful global-style structures. From Moroccan palaces to European streets and artistic sets, this area is designed for fun walks, creative photos, and memorable moments with friends and families.',
    'exp.pixopark.feature1': 'World Theme Architecture',
    'exp.pixopark.feature2': 'Creative Photo Sets',
    'exp.pixopark.feature3': 'Fun Exploration Zone',
    'exp.pixopark.highlight1': '📸 Photo Paradise',
    'exp.pixopark.highlight2': '🌍 World Themes',
    'exp.pixopark.highlight3': '🎨 Colourful Sets',

    // Shauryavan Adventure Zone
    'exp.shauryavan.title': 'Shauryavan Adventure Zone',
    'exp.shauryavan.desc': 'Test childrens courage with military-style obstacle challenges. Burma bridge, commando net, parallel ropes and team coordination activities. Build confidence, strength and camaraderie through exciting physical challenges.',
    'exp.shauryavan.feature1': 'Military Obstacles',
    'exp.shauryavan.feature2': 'Team Building Games',
    'exp.shauryavan.feature3': 'Commando Training',
    'exp.shauryavan.highlight1': '🏹 Physical Strength',
    'exp.shauryavan.highlight2': '🧗 Rope Climbing',
    'exp.shauryavan.highlight3': '🎯 Team Building',

    // Swimming Pool
    'exp.swimmingpool.title': 'Swimming Pool',
    'exp.swimmingpool.desc': 'Relax and refresh in our crystal-clear swimming pool. Separate sections for adults and children with shallow areas for beginners. Trained lifeguards ensure safety while you enjoy a refreshing swim.',
    'exp.swimmingpool.feature1': 'Adult & Kids Sections',
    'exp.swimmingpool.feature2': 'Lifeguards On Duty',
    'exp.swimmingpool.feature3': 'Clean Changing Rooms',
    'exp.swimmingpool.highlight1': '🏊 Olympic Size',
    'exp.swimmingpool.highlight2': '👶 Kids Pool',
    'exp.swimmingpool.highlight3': '🌊 Crystal Clear',

    // Tents & Cottages
    'exp.tents.title': 'Tents & Cottages',
    'exp.tents.desc': 'Experience luxury camping in comfortable tents or stay in cozy cottages. Modern amenities meet nature with attached bathrooms, comfortable beds, and stunning views. Perfect for overnight stays and weekend getaways.',
    'exp.tents.feature1': 'Luxury Camping Tents',
    'exp.tents.feature2': 'Private Cottages',
    'exp.tents.feature3': 'Modern Amenities',
    'exp.tents.highlight1': '🏕️ Glamping Style',
    'exp.tents.highlight2': '🛏️ Comfortable Beds',
    'exp.tents.highlight3': '🌄 Mountain Views',

    // CTA Section (if not already present)
    //Experience Page
    "section.visit.title": "Your Journey Awaits",
    "section.visit.highlight": "Experience Nandgram Godham",
    "section.visit.desc": "Disconnect from the noise of city life and reconnect with nature, culture and unforgettable moments. A perfect escape for families, friends and explorers.",
    'section.visit.cta': 'Do Visit Now',



    // Testimonials
    'testimonials.title': 'Experiences People Shared',
    'testimonials.subtitle': 'Real moments shared by our visitors',

    'testimonial.1.name': 'Amit Patil',
    'testimonial.1.role': 'Family Visitor',
    'testimonial.1.review': 'A perfect place to relax with family. Clean environment, great food, and kids enjoyed every moment.',

    'testimonial.2.name': 'Sneha Kulkarni',
    'testimonial.2.role': 'School Coordinator',
    'testimonial.2.review': 'Our school picnic was extremely well managed. Activities were safe, engaging, and educational.',

    'testimonial.3.name': 'Rahul Deshmukh',
    'testimonial.3.role': 'Friends Group',
    'testimonial.3.review': 'We came as friends and left with memories. Water park and village experiences were outstanding.',

    'testimonial.4.name': 'Neha Joshi',
    'testimonial.4.role': 'Parent',
    'testimonial.4.review': 'Very safe and well maintained. Complimentary snacks were a lovely surprise for kids.',

    'testimonial.5.name': 'Sandeep More',
    'testimonial.5.role': 'First-time Visitor',
    'testimonial.5.review': 'A unique blend of nature, fun, and culture. Definitely worth the visit.',

    'testimonial.6.name': 'Rahul Laddha',
    'testimonial.6.role': 'Friends group',
    'testimonial.6.review': 'The rides present in waterpark are really good and enjoyable. Staff is very helpful and cooperative.',


    // Experiences
    'exp.title': 'Our Experiences',
    'exp.subtitle': 'Discover multiple worlds within one destination',
    'exp.badge': '7 Unique Experiences',
    'exp.piccity': 'The Pic City',
    'exp.piccity.descp': 'Capture memories at stunning photo spots designed for unforgettable moments.',
    'exp.aplegaon': 'Aaple Gaon',
    'exp.aplegaon.descp': 'Step into authentic village life and experience traditional rural Maharashtra.',
    'exp.carnival': 'Carnival Street',
    'exp.carnival.descp': 'A vibrant street filled with games, food stalls, and festive energy.',
    'exp.boating': 'Boating Point',
    'exp.boating.descp': 'Peaceful boat rides across serene waters surrounded by nature.',
    'exp.shauryavan': 'Shauryavan – Adventure Park',
    'exp.shauryavan.descp': 'Adventure zone for kids with exciting activities and safe play areas.',
    'exp.waterpark': 'Waterpark',
    'exp.waterpark.descp': 'Beat the heat with thrilling water slides and splash pools.',
    'exp.selfie': 'Selfie Points',
    'exp.selfie.desc': 'Instagram-worthy spots crafted for the perfect family photos.',
    'exp.gautirth': 'Gautirth',
    'exp.gautirth.descp': 'A peaceful spiritual space for reflection and connection.',
    'exp.gaushala': 'Gaushala',
    'exp.gaushala.descp': 'Experience traditional cow shelter and learn about rural values.',
    'exp.swimmingpool': 'Swimming Pool',
    'exp.swimmingpool.descp': 'Refreshing relaxation spot for all ages.',
    'exp.pixopark': 'Pixo Park',
    'exp.pixopark.descp': 'Colorful and playful space for creative fun.',
    'exp.tents': 'Tents & Cottages',
    'exp.tents.descp': 'Comfortable nature stays for extended experiences.',
    'exp.tags.family': 'Family Friendly',
    'exp.tags.photo': 'Photo Spots',
    'exp.tags.allages': 'All Ages',
    'exp.cta.ready': 'Ready to Experience It All?',
    'exp.cta.desc': 'Book your visit today and create memories that last a lifetime',



    // Experience Categories
    'exp.cat.nature': 'Nature & Culture Experiences',
    'exp.cat.nature.desc': 'Village life, spiritual spaces, and agricultural traditions',
    'exp.cat.creative': 'Creative & Memory Zones',
    'exp.cat.creative.desc': 'Unique photo spots and interactive visual spaces',
    'exp.cat.adventure': 'Fun, Adventure & Water Activities',
    'exp.cat.adventure.desc': 'Adventure park, swimming pool, and waterpark fun',
    'exp.cat.stay': 'Stay Amidst Nature',
    'exp.cat.stay.desc': 'Peaceful tents and cottages for extended experiences',

    // Home Page Personas
    'home.personas.families': 'Families',
    'home.personas.families.desc': 'Spend quality time in a safe, clean, and joyful environment',
    'home.personas.kids': 'Kids',
    'home.personas.kids.desc': 'Adventure, learning, and fun through engaging activities',
    'home.personas.friends': 'Friends & Groups',
    'home.personas.friends.desc': 'Relax, explore, and create memories together',
    'home.personas.schools': 'School Picnics',
    'home.personas.schools.desc': 'A balanced mix of learning, outdoor exposure, and fun',

    // Journey Steps
    'home.journey.step1': 'Arrive amidst greenery',
    'home.journey.step2': 'Explore village culture and peaceful spaces',
    'home.journey.step3': 'Kids enjoy adventure and creative zones',
    'home.journey.step4': 'Family fun at water activities',
    'home.journey.step5': 'Relax, laugh, and capture beautiful moments',
    'home.journey.step6': 'Return with memories that stay forever',

    // Recognition Points
    'home.recognition.quality': 'Quality experiences',
    'home.recognition.clean': 'Clean and well-maintained facilities',
    'home.recognition.family': 'Family-friendly environment',
    'home.recognition.cultural': 'Cultural and agricultural values',

    // Safety Features
    'home.safety.washrooms': 'Clean washrooms and changing rooms',
    'home.safety.firstaid': 'First aid and trained support staff',
    'home.safety.zones': 'Safe zones for children',
    'home.safety.seating': 'Seating and resting areas',
    'home.safety.maintained': 'Well-maintained surroundings',

    // Buttons & Actions
    'btn.viewAll': 'View All',
    'btn.viewAllExperiences': 'View All Experiences',
    'btn.viewFullGallery': 'View Full Gallery',
    'btn.viewOnMaps': 'View on Google Maps',
    'btn.convenientAccess': 'Convenient Access',
    'btn.planVisit': 'Plan Your Visit',
    'btn.contactUs': 'Contact Us',
    'btn.exploreExperiences': 'Explore Experiences',
    'btn.learnMore': 'Learn More',
    'btn.viewGallery': 'View Gallery',
    'btn.joinJourney': 'Join Our Journey',
    'btn.chatNow': 'Chat Now',
    'btn.callNow': 'Call Now',
    'btn.sendEmail': 'Send Email',
    'btn.openMaps': 'Open in Google Maps',

    // Transport
    'transport.byCar': 'By Car',
    'transport.byBus': 'By Bus',
    'transport.byTrain': 'By Train',

    // About Page

    'about.director.title': 'Managing Director',
    'about.director.subtitle': 'Meet the visionary behind Nandgram Godham',
    'about.director.name': 'Abhilash Nagla',
    "about.director.designation": "Managing Director",
    'about.director.bio': 'Abhilash Nagla is an Indian entrepreneur and the founder of Nandgram Godham Agri Tourism in Jalgaon, Maharashtra. He started this initiative to promote rural tourism and give people a chance to experience village life, culture, nature, and sustainable living. He has completed his MBA in Finance from MIT School of Management, Pune, and uses his business knowledge to support and grow rural tourism.',
    'about.director.missionTitle': 'Vision & Mission',
    'about.director.missionDetail': 'To become Maharashtra\'s most beloved family destination — a place where urban families reconnect with nature, where children discover the wonder of rural life, and where every visit creates cherished memories.',

    'about.title': 'Our Story',
    'about.subtitle': 'Rooted in tradition, growing with joy',
    'about.badge': 'Our Story',
    'about.heritage': 'Years of Heritage',
    'about.why.title': 'Why',
    'about.why.highlight': 'Nandgram Godham',
    'about.why.p1': 'Born from a deep love for Maharashtra\'s agricultural heritage and a vision to share that beauty with families, Nandgram Godham bridges the gap between rural traditions and modern recreation.',
    'about.why.p2': 'We believe every child should experience the magic of farm life, every family deserves quality time in nature, and every visitor should leave with memories that last a lifetime.',
    'about.why.p3': 'Our destination is more than just an attraction — it\'s a celebration of the land, culture, and community that makes Maharashtra truly special.',
    'about.values.title': 'Our',
    'about.values.highlight': 'Values',
    'about.values.subtitle': 'The principles that guide everything we do',
    'about.values.family': 'Family First',
    'about.values.family.desc': 'Designed for all ages to enjoy together',
    'about.values.nature': 'Nature Rooted',
    'about.values.nature.desc': 'Authentic rural & agricultural experience',
    'about.values.community': 'Community',
    'about.values.community.desc': 'Supporting local culture & traditions',
    'about.values.safety': 'Safety',
    'about.values.safety.desc': 'Your wellbeing is our top priority',


    // Plan Visit Page
    'plan.title': 'Plan Your Visit',
    'plan.subtitle': 'Everything you need to know for a perfect day',
    'plan.badge': 'Everything You Need to Know',
    'plan.timing': 'Best Time to Visit',
    'plan.duration': 'Suggested Duration',
    'plan.bring': 'What to Bring',
    'plan.tips': 'Visitor Tips',
    'plan.hours': 'Hours Recommended',
    'plan.hours.desc': 'Plan for a full day to enjoy all experiences comfortably without rushing',
    'plan.season.best': 'Best Time',
    'plan.season.oct': 'October - March',
    'plan.season.oct.desc': 'Perfect weather for outdoor activities',
    'plan.season.monsoon': 'Monsoon Magic',
    'plan.season.jul': 'July - September',
    'plan.season.jul.desc': 'Lush green landscapes, occasional rain',
    'plan.tip.shoes': 'Wear comfortable walking shoes',
    'plan.tip.sunscreen': 'Bring sunglasses and hats',
    'plan.tip.water': 'Carry water bottles',
    'plan.tip.clothes': 'Dress in light, comfortable clothes',
    'plan.tip.camera': 'Bring a camera for memories',
    'plan.tip.snacks': 'Pack light snacks for kids',
    'plan.guidelines.title': "Do's & Don'ts",
    'plan.guidelines.subtitle': 'Help us keep the experience magical for everyone',
    'plan.dos': "Do's",
    'plan.donts': "Don'ts",
    'plan.do.respect': 'Respect the natural environment',
    'plan.do.safety': 'Follow safety guidelines at all attractions',
    'plan.do.supervise': 'Keep children supervised at all times',
    'plan.do.photo': 'Use designated photo spots',
    'plan.do.hydrate': 'Stay hydrated throughout your visit',
    'plan.dont.litter': 'Litter or damage property',
    'plan.dont.feed': 'Feed animals without permission',
    'plan.dont.restricted': 'Enter restricted areas',
    'plan.dont.smoke': 'Smoke and alcohol consumption is strictly prohibited',
    'plan.dont.food': 'Don\'t argue with staff or create disturbance with other visitors',

    // Day Itinerary
    'itinerary.badge': 'Your Day, Beautifully Planned',
    'itinerary.title': 'A Perfect Day at',
    'itinerary.subtitle': 'Follow this suggested journey to experience the best of what we offer.',
    'itinerary.arrival': 'Arrival & Welcome',
    'itinerary.arrival.desc': 'Begin your journey with a warm welcome and have a welcome juice and popcorns',
    'itinerary.arrival.time': '10:00 AM',
    'itinerary.morning': 'Morning Nature & Culture',
    'itinerary.morning.desc': 'Explore beautiful cultural experiences and connect with nature.',
    'itinerary.morning.time': '10:30 - 12:00',
    'itinerary.midday': 'Midday Activities & Fun',
    'itinerary.midday.desc': 'Enjoy relaxed activities with your family. Games and light-hearted fun await.',
    'itinerary.midday.time': '12:00 - 1:30',
    'itinerary.lunch': 'Lunch & Rest',
    'itinerary.lunch.desc': 'Recharge with delicious local cuisine. Rest before afternoon adventures.',
    'itinerary.lunch.time': '1:30 - 2:30',
    'itinerary.afternoon': 'Adventure & Water Fun',
    'itinerary.afternoon.desc': 'Splash in the waterpark and conquer adventure activities!',
    'itinerary.afternoon.time': '2:30 - 4:30',
    'itinerary.evening': 'Evening Wind-Down',
    'itinerary.evening.desc': 'Capture golden hour photos at different points and enjoy beautiful views.',
    'itinerary.evening.time': '4:30 - 5:00',
    'itinerary.stay': 'Extend Your Stay',
    'itinerary.stay.desc': 'Book a cozy tent or cottage and wake up to fresh countryside air.',
    'itinerary.stay.time': 'Optional',
    'itinerary.note.title': 'Your Pace, Your Journey',
    'itinerary.note.desc': 'This is a suggested flow. Feel free to explore at your own pace and create your perfect day.',
    'itinerary.cta.explore': 'Explore All Experiences',
    'itinerary.cta.contact': 'Contact Us for Planning',

    // Facilities Page
    'facilities.title': 'Facilities & Safety',
    'facilities.subtitle': 'Your comfort and safety are our priority',
    'facilities.badge': 'Comfort & Safety',
    'facilities.parking': 'Free Parking',
    'facilities.parking.desc': 'Ample parking space for cars and buses',
    'facilities.food': 'Food Court',
    'facilities.food.desc': 'Hygienic vegetarian food and beverages',
    'facilities.wifi': 'Free Wi-Fi',
    'facilities.wifi.desc': 'Stay connected in common areas',
    'facilities.firstaid': 'First Aid',
    'facilities.firstaid.desc': '24/7 medical assistance available',
    'facilities.restrooms': 'Clean Restrooms',
    'facilities.restrooms.desc': 'Well-maintained facilities throughout',
    'facilities.accessible': 'Accessible Paths',
    'facilities.accessible.desc': 'Wheelchair friendly walkways',
    'facilities.babycare': 'Baby Care',
    'facilities.babycare.desc': 'Dedicated baby changing rooms',
    'facilities.shaded': 'Shaded Areas',
    'facilities.shaded.desc': 'Rest spots with natural shade',
    'facilities.water': 'Drinking Water',
    'facilities.water.desc': 'Purified water stations',
    'facilities.photozones': 'Photo Zones',
    'facilities.photozones.desc': 'Instagram-worthy spots',
    'facilities.category.convenience': 'Convenience',
    'facilities.category.comfort': 'Comfort',
    'facilities.category.safety': 'Safety',
    'facilities.category.experience': 'Experience',
    'facilities.safety.badge': 'Safety First',
    'facilities.safety.title': 'Your',
    'facilities.safety.highlight': 'Safety',
    'facilities.safety.tagline': 'is Our Priority',
    'facilities.safety.staff': 'Trained Staff',
    'facilities.safety.staff.desc': 'All staff trained in safety protocols and emergency response',
    'facilities.safety.medical': '24/7 Medical Support',
    'facilities.safety.medical.desc': 'First aid station with qualified personnel always on duty',
    'facilities.safety.equipment': 'Safe Equipment',
    'facilities.safety.equipment.desc': 'Regular maintenance and safety checks on all attractions',
    'facilities.safety.clean': 'Clean Environment',
    'facilities.safety.clean.desc': 'Rigorous sanitation protocols throughout the property',
    'facilities.cta.title': 'Have Questions?',
    'facilities.cta.subtitle': 'Our team is ready to help you plan the perfect visit',

    // Gallery Page
    'gallery.title': 'Visual Stories',
    'gallery.subtitle': 'Glimpses of joy, nature, and unforgettable moments',
    'gallery.badge': 'Visual Stories',
    'gallery.stats.photos': 'Photos Captured',
    'gallery.stats.locations': 'Unique Locations',
    'gallery.stats.visitors': 'Happy Visitors',
    'gallery.stats.events': 'Events Hosted',

    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We would love to hear from you',
    'contact.badge': "We'd Love to Hear from You",
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.value': 'Quick Response',
    'contact.email': 'Email',
    'contact.hours': 'Operating Hours',
    'contact.hours.open': 'Open Daily',
    'contact.hours.time': '9:00 AM - 6:00 PM',
    'contact.hours.lastEntry': 'Last Entry',
    'contact.hours.lastEntryTime': '4:30 PM',
    'contact.hours.note': '*Hours may vary on holidays',
    'contact.form.title': 'Send us a Message',
    'contact.form.subtitle': "Fill out the form and we'll get back to you soon",
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'How can we help?',
    'contact.form.message': 'Your Message',
    'contact.form.message.placeholder': 'Tell us more about your inquiry...',
    'contact.form.submit': 'Send Message',
    'contact.visit.title': 'Visit Information',
    'contact.visit.subtitle': "We're here to help you plan the perfect visit to Nandgram Godham. Reach out with any questions!",
    'contact.whatsapp.prefer': 'Prefer WhatsApp?',
    'contact.whatsapp.quick': 'Get quick responses on chat',
    'contact.ready.title': 'Ready to Visit?',
    'contact.ready.subtitle': 'Plan your trip and make the most of your experience',

    // Location
    'location.title': 'Find Us',
    'location.subtitle': 'Easily accessible from major cities',
    'location.access': 'Access',
    'location.address': 'Address',
    'location.landmarks': 'Nearby Landmarks',
    'location.landmark1': '15 mins from Bhusawal Railway Station',
    'location.landmark2': 'Near NH-6 Highway',
    'location.landmark3': '5 km from Bhusawal City Center',
    'location.mapNote': 'Interactive map coming soon',
    'location.distance.title': 'Distance from',
    'location.distance.highlight': 'Major Cities',
    'location.distance.subtitle': 'Easily accessible from cities across Maharashtra and beyond',

    // Footer
    'footer.tagline': 'Creating memories that last a lifetime',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.hours.weekdays': 'Tuesday - Sunday (Monday Closed)',





    // Common
    'common.learnmore': 'Learn More',
    'common.viewall': 'View All',
    'common.booknow': 'Book Now',
    'common.allExperiences': 'All Experiences',
    'common.language': 'Language',


    //Contact Page

    // Main Header
  'contact.title1': "Let's Connect",
  'contact.subtitle1': 'Plan your visit to Nandgram Godham with ease.',

  // Contact Methods
  'contact.call.label': 'Call Us',
  'contact.call.number': '+91 91129 11248',
  
  'contact.whatsapp.label': 'WhatsApp',
  'contact.whatsapp.number': '+91 91129 11248',
  
  'contact.email.label': 'Email',
  'contact.email.address': 'godhamnandgram@gmail.com',

  // Contact Form
  'contact.form.title1': 'Send Message',
  'contact.form.name1': 'Your name',
  'contact.form.phone1': 'Phone number',
  'contact.form.city': 'City',
  'contact.form.message1': 'Your message',
  'contact.form.submit1': 'Send',

  // Location
  'contact.location.label': 'Location',
  'contact.location.address': 'Nandgram Godham, Anjale, Taluka-Yawal, District Jalgaon, Maharashtra 425301',
  'contact.location.button': 'Open in Maps',

  // Hours
  'contact.hours.label': 'Hours',
  'contact.hours.time1': '10:00 AM – 5:00 PM',
  

  // CTA Card
  'contact.cta.title': 'Ready to visit?',
  'contact.cta.button': 'Plan Your Visit',

  // Distance Section
  'contact.distance.title': 'Distance from Major Cities',
  'contact.distance.bhusawal': 'Bhusawal',
  'contact.distance.jalgaon': 'Jalgaon',
  'contact.distance.dhule': 'Dhule',
  'contact.distance.nashik': 'Nashik',
  'contact.distance.aurangabad': 'Aurangabad',
  
  // Form Status
  'contact.form.sending': 'Sending...',
  
  // Success Modal
  'contact.form.success.title': 'Message Sent Successfully!',
  'contact.form.success.message': 'Thank you for reaching out! We will get back to you soon.',
  'contact.form.success.close': 'Close',

  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.experiences': 'अनुभव',
    'nav.about': 'हमारे बारे में',
    'nav.plan': 'अपनी यात्रा की योजना बनाएं',
    'nav.groups': 'समूह और स्कूल',
    'nav.facilities': 'सुविधाएं',
    'nav.gallery': 'गैलरी',
    'nav.location': 'स्थान',
    'nav.contact': 'संपर्क',

    // Hero
    'hero.tagline': 'जहाँ प्रकृति, संस्कृति और पारिवारिक मस्ती एक साथ आती है',
    'hero.subtitle': 'भुसावल, महाराष्ट्र के पास एक प्रीमियम कृषि-पर्यटन स्थल',
    'hero.cta': 'WhatsApp पर संपर्क करें',
    'hero.explore': 'अनुभव देखें',
    'hero.mainTitle': 'नंदग्राम गोधाम में प्रकृति, संस्कृति और आनंदमय जीवन का अनुभव करें',
    'hero.mainSubtitle': 'नंदग्राम गोधाम भुसावल के पास एक अनूठा कृषि-पर्यटन और पारिवारिक मनोरंजन स्थल है, जो प्रकृति, संस्कृति, साहसिक गतिविधियों, जल मस्ती और शांतिपूर्ण आवास का एक आदर्श मिश्रण प्रदान करता है।',
    'hero.visitorGuide': 'आगंतुक गाइड',
    'hero.slide1.title': 'प्रकृति और ग्रामीण सौंदर्य का अनुभव करें',
    'hero.slide1.subtitle': 'महाराष्ट्र के हृदय में प्रामाणिक ग्रामीण जीवन की खोज करें',
    'hero.slide2.title': 'संस्कृति और पारंपरिक विरासत',
    'hero.slide2.subtitle': 'समृद्ध महाराष्ट्रीयन परंपराओं और रीति-रिवाजों में स्वयं को डुबोएं',
    'hero.slide3.title': 'आनंदमय जीवन और रोमांच',
    'hero.slide3.subtitle': 'परिवार और दोस्तों के साथ अविस्मरणीय यादें बनाएं',


    // Section titles
    'section.destination.title': 'एक साथ रहने के लिए डिज़ाइन किया गया स्थान',
    'section.destination.desc': 'नंदग्राम गोधाम सिर्फ एक पिकनिक स्पॉट या वॉटरपार्क नहीं है। यह एक सोच-समझकर विकसित स्थान है जहां परिवार, बच्चे और समूह प्रकृति से जुड़ सकते हैं, गांव का जीवन अनुभव कर सकते हैं, और एक सुरक्षित वातावरण में साथ समय बिता सकते हैं।',
    'section.destination.highlight': 'नंदग्राम गोधाम का हर कोना आराम, खुशी और अपनापन प्रदान करने के लिए बनाया गया है।',
    'section.experiences.title': 'अनेक अनुभव।',
    'section.experiences.highlight': 'एक सुंदर गंतव्य।',
    'section.experiences.button': 'और जानें',
    'section.signature.title': 'अनुभव जो नंदग्राम गोधाम को परिभाषित करते हैं',
    'section.personas.title': 'सभी के लिए',
    'section.personas.highlight': 'एक जगह',
    'section.journey.title': 'आगमन से',
    'section.journey.subtitle': 'आपका परफेक्ट दिन स्वाभाविक रूप से खुलता है, सूर्योदय से सूर्यास्त तक',
    'section.journey.highlight': 'स्थायी यादों तक',
    'section.journey.button': 'यात्रा दोहराएं',
    'section.recognition.title': 'उत्कृष्टता और अनुभव के लिए मान्यता प्राप्त',
    'section.safety.title': 'आगंतुक सुविधा को ध्यान में रखकर डिज़ाइन किया गया',
    'section.gallery.title': 'नंदग्राम गोधाम में कैद पल',
    'section.gallery.subtitle': 'प्रकृति, संस्कृति, साहस, जल मस्ती, पारिवारिक मुस्कान और अविस्मरणीय अनुभवों की एक झलक।',
    'section.location.title': 'पहुंचना आसान,',
    'section.location.highlight': 'अनुभव करना शांतिपूर्ण',
    'section.location.desc': 'भुसावल के पास स्थित, नंदग्राम गोधाम आसानी से पहुंचा जा सकता है और एक दिन की सैर या प्रकृति के करीब आरामदायक ठहराव के लिए आदर्श है।',
    'section.cta.title': 'प्रकृति, मस्ती और एकजुटता का अनुभव करने के लिए तैयार?',
    'section.cta.subtitle': 'नंदग्राम गोधाम की यात्रा की योजना बनाएं और एक ऐसे गंतव्य की खोज करें जहां हर पल विशेष लगता है।',
    'section.cta.button': 'अपनी यात्रा की योजना बनाएं',
    'section.products.title': 'हमारे गौशाला से शुद्ध',
    'section.products.subtitle': 'हमारी गिर गायों से प्यार से तैयार — ताजा, स्वस्थ और पारंपरिक।',
    'section.products.product1': 'A2 गिर गाय घी',
    'section.products.productdesc1': 'पारंपरिक रूप से मथना, पोषण में समृद्ध',
    'section.products.product2': 'A2 गिर गाय दूध',
    'section.products.productdesc2': 'ताजा, रासायनिक मुक्त और फार्म-डायरेक्ट',
    'section.products.product3': 'प्राकृतिक गोबर',
    'section.products.productdesc3': 'हाथ से बने और पर्यावरण के अनुकूल ईंधन ईंटें',
    'section.products.tag': 'बेस्ट सेलर',
    'section.products.bottom': 'नंदग्राम गोधाम में उपलब्ध • 100% प्राकृतिक • कोई संरक्षक नहीं',

    // Intro Bio
    'section.introbio.title': 'महाराष्ट्र में कृषि पर्यटन और वाटरपार्क की शुरुआत...',
    'section.introbio.subtitle': 'खुशी की फसल!',
    'section.introbio.paragraph1': 'नंदग्राम गोधाम सिर्फ एक पिकनिक स्पॉट या वॉटरपार्क नहीं है। यह एक सोच-समझकर विकसित स्थान है जहां परिवार, बच्चे और समूह प्रकृति से जुड़ सकते हैं, गांव का जीवन अनुभव कर सकते हैं, और एक सुरक्षित वातावरण में साथ समय बिता सकते हैं।',
    'section.introbio.paragraph2': 'नंदग्राम गोधाम का हर कोना आराम, खुशी और अपनापन प्रदान करने के लिए बनाया गया है।',

    // package
    'section.package.title': 'एक दिवसीय अनुभव पैकेज',
    'section.package.subtitle': 'नंदग्राम गोधाम में एक आनंदमय दिन के लिए आपको जो कुछ भी चाहिए',
    'section.package.ribbon': 'सर्वश्रेष्ठ मूल्य',
    'section.package.priceLabel': 'टिकट मूल्य',
    'section.package.price': '₹500',
    'section.package.perPerson': 'प्रति व्यक्ति',
    'section.package.description': 'मज़ा, प्रकृति, और अविस्मरणीय यादों का एक पूरा दिन।',
    'section.package.includes': 'टिकट में शामिल है',
    'section.package.item.waterpark': 'वॉटर पार्क तक पहुंच',
    'section.package.item.selfie': 'सेल्फी पॉइंट्स और अन्य आकर्षण',
    'section.package.item.popcorn': 'कॉम्प्लिमेंट्री पॉपकॉर्न',
    'section.package.item.welcomeDrink': 'वेलकम ड्रिंक',
    'section.package.item.cottonCandy': 'कॉटन कैंडी',
    'section.package.noteTitle': 'नोट',
    'section.package.note.food': 'भोजन अतिरिक्त शुल्क पर उपलब्ध है',
    'section.package.note.tiffin': 'घर से टिफिन लाना अनुमति है',
    'section.package.note.kids': '5 वर्ष से कम उम्र के बच्चों के लिए मुफ्त प्रवेश',
    'section.package.cta': 'अपनी यात्रा की योजना बनाएं',

    // Testimonials
    'testimonials.title': 'लोगों द्वारा साझा किए गए अनुभव',
    'testimonials.subtitle': 'हमारे आगंतुकों द्वारा साझा किए गए वास्तविक पल',

    'testimonial.1.name': 'अमित पाटिल',
    'testimonial.1.role': 'परिवार के आगंतुक',
    'testimonial.1.review': 'परिवार के साथ आराम करने के लिए एक आदर्श स्थान। स्वच्छ वातावरण, शानदार भोजन, और बच्चों ने हर पल का आनंद लिया।',

    'testimonial.2.name': 'स्नेहा कुलकर्णी',
    'testimonial.2.role': 'स्कूल समन्वयक',
    'testimonial.2.review': 'हमारा स्कूल पिकनिक अत्यंत अच्छी तरह से प्रबंधित था। गतिविधियाँ सुरक्षित, आकर्षक और शैक्षिक थीं।',

    'testimonial.3.name': 'राहुल देशमुख',
    'testimonial.3.role': 'दोस्तों का समूह',
    'testimonial.3.review': 'हम दोस्त के रूप में आए और यादों के साथ चले गए। वॉटर पार्क और गांव के अनुभव शानदार थे।',

    'testimonial.4.name': 'नेहा जोशी',
    'testimonial.4.role': 'माता-पिता',
    'testimonial.4.review': 'बहुत सुरक्षित और अच्छी तरह से रखरखाव किया गया। कॉम्प्लिमेंट्री स्नैक्स बच्चों के लिए एक प्यारा आश्चर्य था।',

    'testimonial.5.name': 'संदीप मोरे',
    'testimonial.5.role': 'पहली बार आगंतुक',
    'testimonial.5.review': 'प्रकृति, मस्ती और संस्कृति का एक अनूठा मिश्रण। निश्चित रूप से यात्रा के लायक है।',

    'testimonial.6.name': 'राहुल लड्डा',
    'testimonial.6.role': 'दोस्तों का समूह',
    'testimonial.6.review': 'वॉटरपार्क में मौजूद राइड्स वास्तव में अच्छी और आनंददायक हैं। स्टाफ बहुत मददगार और सहयोगी है।',

    // Experiences
    'exp.title': 'हमारे अनुभव',
    'exp.subtitle': 'एक स्थान में कई दुनिया खोजें',
    'exp.badge': '7 अनोखे अनुभव',
    'exp.piccity': 'द पिक सिटी',
    'exp.piccity.descp': 'अविस्मरणीय पलों के लिए डिज़ाइन किए गए शानदार फोटो स्पॉट्स पर यादें कैद करें।',
    'exp.aplegaon': 'आपले गाँव',
    'exp.aplegaon.descp': 'प्रामाणिक गाँव जीवन में कदम रखें और पारंपरिक ग्रामीण महाराष्ट्र का अनुभव करें।',
    'exp.carnival': 'कार्निवल स्ट्रीट',
    'exp.carnival.descp': 'खेल, फूड स्टॉल और उत्सव की ऊर्जा से भरी एक जीवंत गली।',
    'exp.boating': 'बोटिंग पॉइंट',
    'exp.boating.descp': 'प्रकृति से घिरे शांत पानी पर शांतिपूर्ण नाव की सवारी।',
    'exp.shauryavan': 'शौर्यवन - एडवेंचर पार्क',
    'exp.shauryavan.descp': 'रोमांचक गतिविधियों और सुरक्षित खेल क्षेत्रों के साथ बच्चों के लिए एडवेंचर जोन।',
    'exp.waterpark': 'वॉटरपार्क',
    'exp.waterpark.descp': 'रोमांचक वॉटर स्लाइड और स्प्लैश पूल के साथ गर्मी को हराएं।',
    'exp.selfie': 'सेल्फी पॉइंट्स',
    'exp.selfie.descp': 'परफेक्ट फैमिली फोटोज के लिए तैयार इंस्टाग्राम-योग्य स्पॉट्स।',
    'exp.gautirth': 'गौतीर्थ',
    'exp.gautirth.descp': 'चिंतन और जुड़ाव के लिए एक शांतिपूर्ण आध्यात्मिक स्थान।',
    'exp.gaushala': 'गौशाला',
    'exp.gaushala.descp': 'पारंपरिक गौशाला का अनुभव करें और ग्रामीण मूल्यों के बारे में जानें।',
    'exp.swimmingpool': 'स्विमिंग पूल',
    'exp.swimmingpool.descp': 'सभी उम्र के लिए ताज़गी भरा आराम का स्थान।',
    'exp.pixopark': 'पिक्सो पार्क',
    'exp.pixopark.descp': 'रचनात्मक मज़े के लिए रंगीन और चंचल स्थान।',
    'exp.tents': 'टेंट और कॉटेज',
    'exp.tents.descp': 'विस्तारित अनुभवों के लिए आरामदायक प्रकृति आवास।',
    'exp.tags.family': 'परिवार के अनुकूल',
    'exp.tags.photo': 'फोटो स्पॉट्स',
    'exp.tags.allages': 'सभी उम्र',
    'exp.cta.ready': 'सब कुछ अनुभव करने के लिए तैयार?',
    'exp.cta.desc': 'आज ही अपनी यात्रा बुक करें और जीवन भर की यादें बनाएं',

    // Experience Categories
    'exp.cat.nature': 'प्रकृति और संस्कृति अनुभव',
    'exp.cat.nature.desc': 'गाँव का जीवन, आध्यात्मिक स्थान और कृषि परंपराएं',
    'exp.cat.creative': 'रचनात्मक और स्मृति क्षेत्र',
    'exp.cat.creative.desc': 'अनोखे फोटो स्पॉट्स और इंटरैक्टिव विज़ुअल स्पेस',
    'exp.cat.adventure': 'मज़ा, साहसिक और जल गतिविधियाँ',
    'exp.cat.adventure.desc': 'एडवेंचर पार्क, स्विमिंग पूल और वॉटरपार्क मज़ा',
    'exp.cat.stay': 'प्रकृति के बीच ठहरें',
    'exp.cat.stay.desc': 'विस्तारित अनुभवों के लिए शांतिपूर्ण टेंट और कॉटेज',

    // Home Page Personas
    'home.personas.families': 'परिवार',
    'home.personas.families.desc': 'सुरक्षित, स्वच्छ और आनंदमय वातावरण में गुणवत्तापूर्ण समय बिताएं',
    'home.personas.kids': 'बच्चे',
    'home.personas.kids.desc': 'रोमांचक गतिविधियों के माध्यम से साहसिक, सीखने और मज़ा',
    'home.personas.friends': 'दोस्त और समूह',
    'home.personas.friends.desc': 'आराम करें, खोजें और साथ मिलकर यादें बनाएं',
    'home.personas.schools': 'स्कूल पिकनिक',
    'home.personas.schools.desc': 'सीखने, बाहरी संपर्क और मज़े का संतुलित मिश्रण',

    // Journey Steps
    'home.journey.step1': 'हरियाली के बीच पहुंचें',
    'home.journey.step2': 'गाँव की संस्कृति और शांतिपूर्ण स्थानों का अन्वेषण करें',
    'home.journey.step3': 'बच्चे साहसिक और रचनात्मक क्षेत्रों का आनंद लें',
    'home.journey.step4': 'जल गतिविधियों में पारिवारिक मज़ा',
    'home.journey.step5': 'आराम करें, हंसें और सुंदर पल कैद करें',
    'home.journey.step6': 'हमेशा रहने वाली यादों के साथ लौटें',

    // Recognition Points
    'home.recognition.quality': 'गुणवत्तापूर्ण अनुभव',
    'home.recognition.clean': 'स्वच्छ और सुव्यवस्थित सुविधाएं',
    'home.recognition.family': 'परिवार के अनुकूल वातावरण',
    'home.recognition.cultural': 'सांस्कृतिक और कृषि मूल्य',

    // Safety Features
    'home.safety.washrooms': 'स्वच्छ शौचालय और चेंजिंग रूम',
    'home.safety.firstaid': 'प्राथमिक उपचार और प्रशिक्षित सहायता स्टाफ',
    'home.safety.zones': 'बच्चों के लिए सुरक्षित क्षेत्र',
    'home.safety.seating': 'बैठने और आराम करने के क्षेत्र',
    'home.safety.maintained': 'सुव्यवस्थित परिवेश',

    // Buttons & Actions
    'btn.viewAll': 'सभी देखें',
    'btn.viewAllExperiences': 'सभी अनुभव देखें',
    'btn.viewFullGallery': 'पूरी गैलरी देखें',
    'btn.viewOnMaps': 'गूगल मैप्स पर देखें',
    'btn.convenientAccess': 'सुविधाजनक पहुंच',
    'btn.planVisit': 'अपनी यात्रा की योजना बनाएं',
    'btn.contactUs': 'संपर्क करें',
    'btn.exploreExperiences': 'अनुभव देखें',
    'btn.learnMore': 'और जानें',
    'btn.viewGallery': 'गैलरी देखें',
    'btn.joinJourney': 'हमारी यात्रा में शामिल हों',
    'btn.chatNow': 'अभी चैट करें',
    'btn.callNow': 'अभी कॉल करें',
    'btn.sendEmail': 'ईमेल भेजें',
    'btn.openMaps': 'गूगल मैप्स में खोलें',

    // Transport
    'transport.byCar': 'कार से',
    'transport.byBus': 'बस से',
    'transport.byTrain': 'ट्रेन से',

    //Experience Page

    // Pic City
    'exp.piccity.title': 'पिक सिटी',
    'exp.piccity.desc': 'हमारे सुरम्य फोटोग्राफी स्थलों पर आश्चर्यजनक क्षणों को कैद करें। पारिवारिक चित्रों, शादी से पहले की शूट और सुंदर दृश्यों के साथ यादगार तस्वीरों के लिए परिपूर्ण पृष्ठभूमि।',
    'exp.piccity.feature1': 'व्यावसायिक फोटोग्राफी स्थल',
    'exp.piccity.feature2': 'प्राकृतिक पृष्ठभूमि',
    'exp.piccity.feature3': 'परिवार-अनुकूल स्थान',
    'exp.piccity.highlight1': '📸 इंस्टाग्राम-परफेक्ट',
    'exp.piccity.highlight2': '🌄 विहंगम दृश्य',
    'exp.piccity.highlight3': '👨‍👩‍👧‍👦 समूह फोटो',

    // Water Park
    'exp.waterpark.title': 'वाटर पार्क',
    'exp.waterpark.desc': 'रोमांचक वाटर स्लाइड्स, वेव पूल और स्प्लैश ज़ोन के साथ गर्मी को मात दें। सभी उम्र के लिए आकर्षण के साथ एक परिपूर्ण पारिवारिक गंतव्य, रोमांचक सवारी और ड्यूटी पर लाइफगार्ड के साथ समर्पित बच्चों के क्षेत्र।',
    'exp.waterpark.feature1': 'रोमांचक वाटर स्लाइड्स',
    'exp.waterpark.feature2': 'वेव पूल और लेज़ी रिवर',
    'exp.waterpark.feature3': 'बच्चों का स्प्लैश ज़ोन',
    'exp.waterpark.highlight1': '🌊 हाई-स्पीड स्लाइड्स',
    'exp.waterpark.highlight2': '🏊 फैमिली पूल',
    'exp.waterpark.highlight3': '👶 छोटे बच्चों का क्षेत्र',

    // Aaplegaon
    'exp.aaplegaon.title': 'आपलेगांव',
    'exp.aaplegaon.desc': 'प्रामाणिक ग्रामीण महाराष्ट्र का अनुभव करें। पारंपरिक घरों, कृषि गतिविधियों और सांस्कृतिक प्रदर्शन के माध्यम से गाँव के जीवन में डूब जाएं। स्थानीय हस्तशिल्प और व्यंजनों का आनंद लें।',
    'exp.aaplegaon.feature1': 'कृषि गतिविधियाँ',
    'exp.aaplegaon.feature2': 'स्थानीय हस्तशिल्प',
    'exp.aaplegaon.feature3': 'सांस्कृतिक प्रदर्शन',
    'exp.aaplegaon.highlight1': '🌲 पारंपरिक ग्रामीण जीवन',
    'exp.aaplegaon.highlight2': '🦜 स्थानीय प्रकृति',
    'exp.aaplegaon.highlight3': '🥾 स्थानीय शिल्प और कृषि',

    // Gautirth
    'exp.gautirth.title': 'गौतीर्थ',
    'exp.gautirth.desc': 'इस पवित्र गाय संग्रहालय में आध्यात्मिक शांति का अनुभव करें। गायों को समर्पित एक सूचनात्मक केंद्र।',
    'exp.gautirth.feature1': 'सूचनात्मक क्षेत्र',
    'exp.gautirth.feature2': 'धार्मिक परवरिश',
    'exp.gautirth.feature3': 'गायों का महत्व',
    'exp.gautirth.highlight1': '🕉️ पवित्र स्थान',
    'exp.gautirth.highlight2': '🧘 शांतिपूर्ण वातावरण',
    'exp.gautirth.highlight3': '📿 आध्यात्मिक अनुष्ठान',

    // Gaushala
    'exp.gaushala.title': 'गौशाला',
    'exp.gaushala.desc': 'पारंपरिक गौशाला का अनुभव करें और गिर गायों की देखभाल के बारे में जानें। ग्रामीण मूल्यों और स्थिरता के महत्व को समझें। बच्चों के लिए इंटरैक्टिव गतिविधियाँ।',
    'exp.gaushala.feature1': 'गायों की देखभाल',
    'exp.gaushala.feature2': 'जैविक डेयरी उत्पाद',
    'exp.gaushala.feature3': 'फार्म-टू-टेबल टूर',
    'exp.gaushala.highlight1': '🐄 गायों की देखभाल',
    'exp.gaushala.highlight2': '🥛 ताजा डेयरी',
    'exp.gaushala.highlight3': '🌾 जैविक खेती',

    // Boating Point
    'exp.boating.title': 'बोटिंग प्वाइंट',
    'exp.boating.desc': 'प्रकृति से घिरे शांत जल पर आरामदायक नाव की सवारी करें। पैडल बोट की सवारी के विकल्पों के साथ एक शांतिपूर्ण अनुभव। सभी आवश्यक सुरक्षा उपकरण प्रदान किए जाते हैं।',
    'exp.boating.feature1': 'पैडल बोट उपलब्ध',
    'exp.boating.feature2': 'प्राकृतिक दृश्य',
    'exp.boating.feature3': 'सुरक्षा उपकरण शामिल',
    'exp.boating.highlight1': '⛵ प्राकृतिक दृश्य',
    'exp.boating.highlight2': '🌅 आरामदायक सवारी',
    'exp.boating.highlight3': '📷 झील फोटोग्राफी',

    // Pixo Park
    'exp.pixopark.title': 'पिक्सो पार्क',
    'exp.pixopark.desc': 'पिक्सो पार्क एक जीवंत थीम-आधारित फोटो और अन्वेषण क्षेत्र है, जिसमें रंगीन वैश्विक-शैली के संरचनाएं हैं। मोरक्को के महलों से यूरोपीय सड़कों तक कलात्मक सेट्स, यह क्षेत्र मज़ाकदार पैदल चलने, सृजनात्मक फोटोग्राफी, और मित्रों और परिवार के साथ स्मृति-पूर्ण पलों के लिए डिज़ाइन किया गया है।',
    'exp.pixopark.feature1': 'विश्वथीम संरचनाएं',
    'exp.pixopark.feature2': 'सृजनात्मक फोटो सेट',
    'exp.pixopark.feature3': 'मज़ाकदार अन्वेषण क्षेत्र',
    'exp.pixopark.highlight1': '📸 प्रतियोगिता-प्रसिद्धि',
    'exp.pixopark.highlight2': '🌍 प्रतिभाशाली प्रवेश',
    'exp.pixopark.highlight3': '🎯 टीम गतिविधियां',

    // Shauryavan Adventure Zone
    'exp.shauryavan.title': 'शौर्यवन एडवेंचर जोन',
    'exp.shauryavan.desc': 'बच्चों के लिए एक सुरक्षित और रोमांचक एडवेंचर जोन। विभिन्न आयु समूहों के लिए डिज़ाइन किए गए गतिविधियों के साथ, जिसमें बाधा पाठ्यक्रम, टीम बिल्डिंग खेल और कमांडो प्रशिक्षण शामिल हैं। प्रशिक्षित स्टाफ द्वारा पर्यवेक्षण।',
    'exp.shauryavan.feature1': 'सैन्य बाधाएं',
    'exp.shauryavan.feature2': 'टीम बिल्डिंग खेल',
    'exp.shauryavan.feature3': 'कमांडो प्रशिक्षण',
    'exp.shauryavan.highlight1': '🏹 शारीरिक शक्ति',
    'exp.shauryavan.highlight2': '🧗 रस्सी चढ़ाई',
    'exp.shauryavan.highlight3': '🎯 टीम बिल्डिंग',

    // Swimming Pool
    'exp.swimmingpool.title': 'स्विमिंग पूल',
    'exp.swimmingpool.desc': 'हमारे क्रिस्टल-क्लियर स्विमिंग पूल में आराम करें और तरोताजा हो जाएं। शुरुआती लोगों के लिए उथले क्षेत्रों के साथ वयस्कों और बच्चों के लिए अलग-अलग खंड। प्रशिक्षित लाइफगार्ड सुरक्षा सुनिश्चित करते हैं जबकि आप एक ताज़ा तैराकी का आनंद लेते हैं।',
    'exp.swimmingpool.feature1': 'वयस्क और बच्चों के खंड',
    'exp.swimmingpool.feature2': 'ड्यूटी पर लाइफगार्ड',
    'exp.swimmingpool.feature3': 'स्वच्छ बदलने के कमरे',
    'exp.swimmingpool.highlight1': '🏊 ओलंपिक आकार',
    'exp.swimmingpool.highlight2': '👶 बच्चों का पूल',
    'exp.swimmingpool.highlight3': '🌊 क्रिस्टल क्लियर',

    // Tents & Cottages
    'exp.tents.title': 'टेंट और कॉटेज',
    'exp.tents.desc': 'आरामदायक तंबू में लक्जरी कैंपिंग का अनुभव करें या आरामदायक कॉटेज में रहें। आधुनिक सुविधाएं प्रकृति से मिलती हैं, जुड़े बाथरूम, आरामदायक बिस्तर और शानदार दृश्यों के साथ। रातोंरात ठहरने और सप्ताहांत की छुट्टियों के लिए एकदम सही।',
    'exp.tents.feature1': 'लक्जरी कैंपिंग टेंट',
    'exp.tents.feature2': 'निजी कॉटेज',
    'exp.tents.feature3': 'आधुनिक सुविधाएं',
    'exp.tents.highlight1': '🏕️ ग्लैम्पिंग शैली',
    'exp.tents.highlight2': '🛏️ आरामदायक बिस्तर',
    'exp.tents.highlight3': '🌄 पहाड़ी दृश्य',

    // CTA Section
    "section.visit.title": "आपकी यात्रा आपका इंतजार कर रही है",
    "section.visit.highlight": "नंदग्राम गोधाम का अनुभव करें",
    "section.visit.desc": "शहरी जीवन के शोर से दूर हो जाएं और प्रकृति, संस्कृति और अविस्मरणीय पलों से फिर से जुड़ें। परिवारों, दोस्तों और खोजकर्ताओं के लिए एक आदर्श पलायन।",
    "section.visit.cta": "अभी जाएँ",


    // About Page

    'about.director.title': 'प्रबंध निदेशक',
    'about.director.subtitle': 'नंदग्राम गोधाम के पीछे की दूरदर्शी सोच से परिचय',
    'about.director.name': 'अभिलाष नागला',
    'about.director.designation': 'प्रबंध निदेशक',
    'about.director.bio': 'अभिलाष नागला एक भारतीय उद्यमी और महाराष्ट्र के जलगांव स्थित नंदग्राम गोधाम एग्री टूरिज़्म के संस्थापक हैं। उन्होंने ग्रामीण पर्यटन को बढ़ावा देने और लोगों को गांव के जीवन, संस्कृति, प्रकृति और सतत जीवनशैली का अनुभव कराने के उद्देश्य से इस पहल की शुरुआत की। उन्होंने एमआईटी स्कूल ऑफ मैनेजमेंट, पुणे से वित्त (फाइनेंस) में एमबीए किया है और अपने व्यावसायिक ज्ञान का उपयोग ग्रामीण पर्यटन के विकास और समर्थन में कर रहे हैं।',
    'about.director.missionTitle': 'दृष्टि और मिशन',
    'about.director.missionDetail': 'महाराष्ट्र का सबसे प्रिय पारिवारिक गंतव्य बनना — एक ऐसा स्थान जहाँ शहरी परिवार प्रकृति से फिर जुड़ें, बच्चे ग्रामीण जीवन के आनंद को समझें, और हर यात्रा यादगार अनुभव बन जाए।',

    'about.title': 'हमारी कहानी',
    'about.subtitle': 'परंपरा में जड़ें, खुशी के साथ बढ़ रहे हैं',
    'about.badge': 'हमारी कहानी',
    'about.heritage': 'वर्षों की विरासत',
    'about.why.title': 'क्यों',
    'about.why.highlight': 'नंदग्राम गोदाम',
    'about.why.p1': 'महाराष्ट्र की कृषि विरासत के प्रति गहरे प्रेम और परिवारों के साथ उस सुंदरता को साझा करने के दृष्टिकोण से जन्मा, नंदग्राम गोदाम ग्रामीण परंपराओं और आधुनिक मनोरंजन के बीच की खाई को पाटता है।',
    'about.why.p2': 'हम मानते हैं कि हर बच्चे को खेती के जीवन का जादू अनुभव करना चाहिए, हर परिवार प्रकृति में गुणवत्तापूर्ण समय का हकदार है, और हर आगंतुक को जीवन भर की यादें लेकर जाना चाहिए।',
    'about.why.p3': 'हमारा गंतव्य सिर्फ एक आकर्षण नहीं है — यह भूमि, संस्कृति और समुदाय का उत्सव है जो महाराष्ट्र को वास्तव में विशेष बनाता है।',
    'about.values.title': 'हमारे',
    'about.values.highlight': 'मूल्य',
    'about.values.subtitle': 'वे सिद्धांत जो हमारे हर काम का मार्गदर्शन करते हैं',
    'about.values.family': 'परिवार पहले',
    'about.values.family.desc': 'सभी उम्र के लोगों के साथ आनंद लेने के लिए डिज़ाइन किया गया',
    'about.values.nature': 'प्रकृति आधारित',
    'about.values.nature.desc': 'प्रामाणिक ग्रामीण और कृषि अनुभव',
    'about.values.community': 'समुदाय',
    'about.values.community.desc': 'स्थानीय संस्कृति और परंपराओं का समर्थन',
    'about.values.safety': 'सुरक्षा',
    'about.values.safety.desc': 'आपकी भलाई हमारी सर्वोच्च प्राथमिकता है',
    'about.vision.title': 'भविष्य के लिए हमारा विज़न',
    'about.vision.desc': 'महाराष्ट्र का सबसे प्रिय पारिवारिक गंतव्य बनना — एक ऐसी जगह जहां शहरी परिवार प्रकृति से फिर से जुड़ते हैं, जहां बच्चे ग्रामीण जीवन का आश्चर्य खोजते हैं, और जहां हर यात्रा अनमोल यादें बनाती है।',

    // Plan Visit Page
    'plan.title': 'अपनी यात्रा की योजना बनाएं',
    'plan.subtitle': 'एक परफेक्ट दिन के लिए जरूरी सब कुछ',
    'plan.badge': 'सब कुछ जो आपको जानना चाहिए',
    'plan.timing': 'घूमने का सबसे अच्छा समय',
    'plan.duration': 'सुझाई गई अवधि',
    'plan.bring': 'क्या लाएं',
    'plan.tips': 'आगंतुक सुझाव',
    'plan.hours': 'अनुशंसित घंटे',
    'plan.hours.desc': 'सभी अनुभवों का आराम से आनंद लेने के लिए पूरे दिन की योजना बनाएं',
    'plan.season.best': 'सर्वोत्तम समय',
    'plan.season.oct': 'अक्टूबर - मार्च',
    'plan.season.oct.desc': 'बाहरी गतिविधियों के लिए उत्तम मौसम',
    'plan.season.monsoon': 'मानसून का जादू',
    'plan.season.jul': 'जुलाई - सितंबर',
    'plan.season.jul.desc': 'हरे-भरे परिदृश्य, कभी-कभी बारिश',
    'plan.tip.shoes': 'आरामदायक चलने वाले जूते पहनें',
    'plan.tip.sunscreen': 'सनग्लासेस और टोपी लाएं',
    'plan.tip.water': 'पानी की बोतलें साथ रखें',
    'plan.tip.clothes': 'हल्के, आरामदायक कपड़े पहनें',
    'plan.tip.camera': 'यादों के लिए कैमरा लाएं',
    'plan.tip.snacks': 'बच्चों के लिए हल्के नाश्ते पैक करें',
    'plan.guidelines.title': 'क्या करें और क्या न करें',
    'plan.guidelines.subtitle': 'सभी के लिए अनुभव को जादुई बनाए रखने में मदद करें',
    'plan.dos': 'क्या करें',
    'plan.donts': 'क्या न करें',
    'plan.do.respect': 'प्राकृतिक पर्यावरण का सम्मान करें',
    'plan.do.safety': 'सभी आकर्षणों पर सुरक्षा दिशानिर्देशों का पालन करें',
    'plan.do.supervise': 'बच्चों पर हर समय निगरानी रखें',
    'plan.do.photo': 'निर्धारित फोटो स्पॉट्स का उपयोग करें',
    'plan.do.hydrate': 'अपनी यात्रा के दौरान हाइड्रेटेड रहें',
    'plan.dont.litter': 'कचरा फैलाना या संपत्ति को नुकसान पहुंचाना',
    'plan.dont.feed': 'बिना अनुमति के जानवरों को खिलाना',
    'plan.dont.restricted': 'प्रतिबंधित क्षेत्रों में प्रवेश करना',
    'plan.dont.smoke': 'धूम्रपान और शराब की उपयोग सख्त रूप से प्रतिबंधित है',
    'plan.dont.food': 'कर्मचारियों से बहस न करें और अन्य पर्यटकों के लिए अशांति पैदा न करें।',

    // Day Itinerary
    'itinerary.badge': 'आपका दिन, सुंदरता से नियोजित',
    'itinerary.title': 'एक परफेक्ट दिन',
    'itinerary.subtitle': 'हमारे सर्वोत्तम अनुभव के लिए इस सुझाई गई यात्रा का पालन करें।',
    'itinerary.arrival': 'आगमन और स्वागत',
    'itinerary.arrival.desc': 'गर्मजोशी से स्वागत के साथ अपनी यात्रा शुरू करें। आराम से पार्क करें।',
    'itinerary.arrival.time': 'सुबह 9:00',
    'itinerary.morning': 'सुबह प्रकृति और संस्कृति',
    'itinerary.morning.desc': 'शांत सांस्कृतिक अनुभवों का अन्वेषण करें और प्रकृति से जुड़ें।',
    'itinerary.morning.time': '9:30 - 12:00',
    'itinerary.midday': 'दोपहर का आराम और मज़ा',
    'itinerary.midday.desc': 'अपने परिवार के साथ आराम की गतिविधियों का आनंद लें।',
    'itinerary.midday.time': '12:00 - 1:30',
    'itinerary.lunch': 'दोपहर का भोजन और आराम',
    'itinerary.lunch.desc': 'स्वादिष्ट स्थानीय व्यंजनों से तरोताज़ा हों। दोपहर के एडवेंचर से पहले आराम करें।',
    'itinerary.lunch.time': '1:30 - 3:00',
    'itinerary.afternoon': 'एडवेंचर और वॉटर फन',
    'itinerary.afternoon.desc': 'वॉटरपार्क में छप-छप करें और एडवेंचर गतिविधियों पर विजय प्राप्त करें!',
    'itinerary.afternoon.time': '3:00 - 5:30',
    'itinerary.evening': 'शाम की शांति',
    'itinerary.evening.desc': 'गोल्डन आवर फोटोज़ कैप्चर करें और सुंदर सूर्यास्त का आनंद लें।',
    'itinerary.evening.time': '5:30 - 6:30',
    'itinerary.stay': 'अपना ठहराव बढ़ाएं',
    'itinerary.stay.desc': 'एक आरामदायक टेंट या कॉटेज बुक करें और ताज़ी ग्रामीण हवा में जागें।',
    'itinerary.stay.time': 'वैकल्पिक',
    'itinerary.note.title': 'आपकी गति, आपकी यात्रा',
    'itinerary.note.desc': 'यह एक सुझाया गया प्रवाह है। अपनी गति से खोजें और अपना परफेक्ट दिन बनाएं।',
    'itinerary.cta.explore': 'सभी अनुभव देखें',
    'itinerary.cta.contact': 'योजना के लिए संपर्क करें',

    // Facilities Page
    'facilities.title': 'सुविधाएं और सुरक्षा',
    'facilities.subtitle': 'आपकी सुविधा और सुरक्षा हमारी प्राथमिकता है',
    'facilities.badge': 'आराम और सुरक्षा',
    'facilities.parking': 'मुफ्त पार्किंग',
    'facilities.parking.desc': 'कारों और बसों के लिए पर्याप्त पार्किंग स्थान',
    'facilities.food': 'फूड कोर्ट',
    'facilities.food.desc': 'स्वच्छ शाकाहारी भोजन और पेय पदार्थ',
    'facilities.wifi': 'मुफ्त वाई-फाई',
    'facilities.wifi.desc': 'सामान्य क्षेत्रों में जुड़े रहें',
    'facilities.firstaid': 'प्राथमिक उपचार',
    'facilities.firstaid.desc': '24/7 चिकित्सा सहायता उपलब्ध',
    'facilities.restrooms': 'स्वच्छ शौचालय',
    'facilities.restrooms.desc': 'पूरे परिसर में सुव्यवस्थित सुविधाएं',
    'facilities.accessible': 'सुलभ रास्ते',
    'facilities.accessible.desc': 'व्हीलचेयर के अनुकूल रास्ते',
    'facilities.babycare': 'बेबी केयर',
    'facilities.babycare.desc': 'समर्पित बेबी चेंजिंग रूम',
    'facilities.shaded': 'छायादार क्षेत्र',
    'facilities.shaded.desc': 'प्राकृतिक छाया वाले आराम स्थल',
    'facilities.water': 'पेयजल',
    'facilities.water.desc': 'शुद्ध पानी के स्टेशन',
    'facilities.photozones': 'फोटो ज़ोन',
    'facilities.photozones.desc': 'इंस्टाग्राम-योग्य स्पॉट्स',
    'facilities.category.convenience': 'सुविधा',
    'facilities.category.comfort': 'आराम',
    'facilities.category.safety': 'सुरक्षा',
    'facilities.category.experience': 'अनुभव',
    'facilities.safety.badge': 'सुरक्षा पहले',
    'facilities.safety.title': 'आपकी',
    'facilities.safety.highlight': 'सुरक्षा',
    'facilities.safety.tagline': 'हमारी प्राथमिकता है',
    'facilities.safety.staff': 'प्रशिक्षित स्टाफ',
    'facilities.safety.staff.desc': 'सभी कर्मचारी सुरक्षा प्रोटोकॉल और आपातकालीन प्रतिक्रिया में प्रशिक्षित',
    'facilities.safety.medical': '24/7 चिकित्सा सहायता',
    'facilities.safety.medical.desc': 'योग्य कर्मियों के साथ प्राथमिक उपचार स्टेशन हमेशा उपलब्ध',
    'facilities.safety.equipment': 'सुरक्षित उपकरण',
    'facilities.safety.equipment.desc': 'सभी आकर्षणों पर नियमित रखरखाव और सुरक्षा जांच',
    'facilities.safety.clean': 'स्वच्छ वातावरण',
    'facilities.safety.clean.desc': 'पूरी संपत्ति में कठोर स्वच्छता प्रोटोकॉल',
    'facilities.cta.title': 'कोई सवाल है?',
    'facilities.cta.subtitle': 'हमारी टीम आपकी परफेक्ट यात्रा की योजना बनाने में मदद के लिए तैयार है',

    // Gallery Page
    'gallery.title': 'विजुअल स्टोरीज',
    'gallery.subtitle': 'खुशी, प्रकृति और अविस्मरणीय पलों की झलकियां',
    'gallery.badge': 'विजुअल स्टोरीज',
    'gallery.stats.photos': 'फोटोज कैप्चर',
    'gallery.stats.locations': 'अनूठे स्थान',
    'gallery.stats.visitors': 'खुश आगंतुक',
    'gallery.stats.events': 'आयोजित कार्यक्रम',

    // Contact Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'हमें आपसे सुनना अच्छा लगेगा',
    'contact.badge': 'हमें आपसे सुनना अच्छा लगेगा',
    'contact.phone': 'फोन',
    'contact.whatsapp': 'व्हाट्सएप',
    'contact.whatsapp.value': 'त्वरित प्रतिक्रिया',
    'contact.email': 'ईमेल',
    'contact.hours': 'कार्य समय',
    'contact.hours.open': 'रोजाना खुला',
    'contact.hours.time': 'सुबह 9:00 - शाम 6:00',
    'contact.hours.lastEntry': 'अंतिम प्रवेश',
    'contact.hours.lastEntryTime': 'शाम 4:30',
    'contact.hours.note': '*छुट्टियों पर समय बदल सकता है',
    'contact.form.title': 'हमें संदेश भेजें',
    'contact.form.subtitle': 'फॉर्म भरें और हम जल्द ही आपसे संपर्क करेंगे',
    'contact.form.name': 'आपका नाम',
    'contact.form.phone': 'फोन',
    'contact.form.email': 'ईमेल पता',
    'contact.form.subject': 'विषय',
    'contact.form.subject.placeholder': 'हम कैसे मदद कर सकते हैं?',
    'contact.form.message': 'आपका संदेश',
    'contact.form.message.placeholder': 'अपनी पूछताछ के बारे में और बताएं...',
    'contact.form.submit': 'संदेश भेजें',
    'contact.visit.title': 'भ्रमण जानकारी',
    'contact.visit.subtitle': 'हम नंदग्राम गोदाम की आपकी परफेक्ट यात्रा की योजना बनाने में मदद के लिए यहां हैं। किसी भी प्रश्न के साथ संपर्क करें!',
    'contact.whatsapp.prefer': 'व्हाट्सएप पसंद करते हैं?',
    'contact.whatsapp.quick': 'चैट पर त्वरित प्रतिक्रियाएं पाएं',
    'contact.ready.title': 'यात्रा के लिए तैयार?',
    'contact.ready.subtitle': 'अपनी यात्रा की योजना बनाएं और अपने अनुभव का अधिकतम लाभ उठाएं',

    // Location
    'location.title': 'हमें ढूंढें',
    'location.subtitle': 'प्रमुख शहरों से आसानी से पहुंचा जा सकता है',
    'location.access': 'पहुंच',
    'location.address': 'पता',
    'location.landmarks': 'आस-पास के स्थल',
    'location.landmark1': 'भुसावल रेलवे स्टेशन से 15 मिनट',
    'location.landmark2': 'NH-6 हाईवे के पास',
    'location.landmark3': 'भुसावल सिटी सेंटर से 5 किमी',
    'location.mapNote': 'इंटरैक्टिव मैप जल्द आ रहा है',
    'location.distance.title': 'से दूरी',
    'location.distance.highlight': 'प्रमुख शहर',
    'location.distance.subtitle': 'महाराष्ट्र और उससे परे के शहरों से आसानी से पहुंचा जा सकता है',

    // Footer
    'footer.tagline': 'एक समय में एक परिवार, यादें बना रहे हैं',
    'footer.quicklinks': 'त्वरित लिंक',
    'footer.connect': 'हमसे जुड़ें',
    'footer.rights': 'सर्वाधिकार सुरक्षित',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    'footer.hours.weekdays': 'मंगलवार - रविवार (सोमवार बंद)',
  

    // Common
    'common.learnmore': 'और जानें',
    'common.viewall': 'सभी देखें',
    'common.booknow': 'अभी बुक करें',
    'common.allExperiences': 'सभी अनुभव',
    'common.language': 'भाषा',


   // Contact Page
   'contact.title1': 'आइए जुड़ें',
  'contact.subtitle1': 'नंदग्राम गोधाम की अपनी यात्रा आसानी से योजना बनाएं।',

  // Contact Methods
  'contact.call.label': 'हमें कॉल करें',
  'contact.call.number': '+91 91129 11248',
  
  'contact.whatsapp.label': 'व्हाट्सएप',
  'contact.whatsapp.number': '+91 91129 11248',
  
  'contact.email.label': 'ईमेल',
  'contact.email.address': 'nandgramgodham@gmail.com',

  // Contact Form
  'contact.form.title1': 'संदेश भेजें',
  'contact.form.name1': 'आपका नाम',
  'contact.form.phone1': 'फोन नंबर',
  'contact.form.city': 'शहर',
  'contact.form.message1': 'आपका संदेश',
  'contact.form.submit1': 'भेजें',

  // Location
  'contact.location.label': 'स्थान',
  'contact.location.address': 'नंदग्राम गोधाम, अंजले, तालुका-यावल, जिल्हा जलगांव, महाराष्ट्र 425301',
  'contact.location.button': 'मानचित्र में खोलें',

  // Hours
  'contact.hours.label': 'समय',
  'contact.hours.time1': 'सुबह 10:00 बजे – शाम 5:00 बजे',

  // CTA Card
  'contact.cta.title': 'जाने के लिए तैयार हैं?',
  'contact.cta.button': 'अपनी यात्रा की योजना बनाएं',

  // Distance Section
  'contact.distance.title': 'प्रमुख शहरों से दूरी',
  'contact.distance.bhusawal': 'भुसावल',
  'contact.distance.jalgaon': 'जलगांव',
  'contact.distance.dhule': 'धुले',
  'contact.distance.nashik': 'नासिक',
  'contact.distance.aurangabad': 'औरंगाबाद',

  // Form Status
'contact.form.sending': 'भेजा जा रहा है...',

// Success Modal
'contact.form.success.title': 'संदेश सफलतापूर्वक भेजा गया!',
'contact.form.success.message': 'हमसे संपर्क करने के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
'contact.form.success.close': 'बंद करें',


  },
  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.experiences': 'अनुभव',
    'nav.about': 'आमच्याबद्दल',
    'nav.plan': 'तुमची भेट नियोजित करा',
    'nav.groups': 'गट आणि शाळा',
    'nav.facilities': 'सुविधा',
    'nav.gallery': 'गॅलरी',
    'nav.location': 'स्थान',
    'nav.contact': 'संपर्क',

    // Hero
    'hero.tagline': 'जिथे निसर्ग, संस्कृती आणि कौटुंबिक मजा एकत्र येतात',
    'hero.subtitle': 'भुसावळ, महाराष्ट्र जवळील एक प्रीमियम कृषी-पर्यटन स्थळ',
    'hero.cta': 'WhatsApp वर संपर्क साधा',
    'hero.explore': 'अनुभव पहा',
    'hero.mainTitle': 'नंदग्राम गोधाम येथे निसर्ग, संस्कृती आणि आनंदी जीवनाचा अनुभव घ्या',
    'hero.mainSubtitle': 'नंदग्राम गोधाम हे भुसावळ जवळील एक अनोखे कृषी-पर्यटन आणि कौटुंबिक मनोरंजन स्थळ आहे, जे निसर्ग, संस्कृती, साहस, जलक्रीडा आणि शांततापूर्ण मुक्काम यांचा परिपूर्ण मिलाफ देते.',
    'hero.visitorGuide': 'अभ्यागत मार्गदर्शक',
    'hero.slide1.title': 'निसर्ग आणि ग्रामीण सौंदर्याचा अनुभव घ्या',
    'hero.slide1.subtitle': 'महाराष्ट्राच्या मध्यभागी अस्सल ग्रामीण जीवनाचा शोध घ्या',
    'hero.slide2.title': 'संस्कृती आणि पारंपरिक वारसा',
    'hero.slide2.subtitle': 'समृद्ध महाराष्ट्रीयन परंपरा आणि रीतिरिवाजांमध्ये स्वतःला सामावून घ्या',
    'hero.slide3.title': 'आनंदमय जीवन आणि साहस',
    'hero.slide3.subtitle': 'कुटुंब आणि मित्रांसोबत अविस्मरणीय आठवणी तयार करा',

    // Section titles
    'section.destination.title': 'एकत्रतेसाठी डिझाइन केलेले गंतव्य',
    'section.destination.desc': 'नंदग्राम गोधाम फक्त एक पिकनिक स्पॉट किंवा वॉटरपार्क नाही. हे एक विचारपूर्वक विकसित केलेले ठिकाण आहे जिथे कुटुंबे, मुले आणि गट निसर्गाशी पुन्हा जोडले जाऊ शकतात आणि सुरक्षित वातावरणात एकत्र वेळ घालवू शकतात.',
    'section.destination.highlight': 'नंदग्राम गोधामचा प्रत्येक कोपरा आराम, आनंद आणि आपलेपणाची भावना देण्यासाठी तयार केला आहे.',
    'section.experiences.title': 'अनेक अनुभव.',
    'section.experiences.highlight': 'एक सुंदर गंतव्य.',
    'section.experiences.button': 'सर्व अनुभव पहा',
    'section.signature.title': 'नंदग्राम गोधाम परिभाषित करणारे अनुभव',
    'section.personas.title': 'सर्वांसाठी',
    'section.personas.highlight': 'एक ठिकाण',
    'section.journey.title': 'आगमनापासून',
    'section.journey.subtitle': 'तुमच्या परफेक्ट दिवसासाठी एक सुगम प्रवास',
    'section.journey.highlight': 'कायम स्मृतींपर्यंत',
    'section.journey.button': 'रिप्ले प्रवास',
    'section.recognition.title': 'उत्कृष्टता आणि अनुभवासाठी मान्यता',
    'section.safety.title': 'अभ्यागत सुखसोयी लक्षात घेऊन डिझाइन केलेले',
    'section.gallery.title': 'नंदग्राम गोधाम येथे टिपलेले क्षण',
    'section.gallery.subtitle': 'निसर्ग, संस्कृती, साहस, जलक्रीडा, कौटुंबिक हास्य आणि अविस्मरणीय अनुभवांची झलक.',
    'section.location.title': 'पोहोचणे सोपे,',
    'section.location.highlight': 'अनुभव शांततापूर्ण',
    'section.location.desc': 'भुसावळ जवळ स्थित, नंदग्राम गोधाम सहज पोहोचता येते आणि एक दिवसाच्या सहलीसाठी किंवा निसर्गाजवळ आरामदायी मुक्कामासाठी आदर्श आहे.',
    'section.cta.title': 'निसर्ग, मजा आणि एकत्रता अनुभवण्यास तयार?',
    'section.cta.subtitle': 'नंदग्राम गोधामला भेट देण्याचे नियोजन करा आणि एक अशा गंतव्याचा शोध घ्या जिथे प्रत्येक क्षण विशेष वाटतो.',
    'section.cta.button': 'तुमची भेट नियोजित करा',
    'section.products.title': 'आमच्या गौशाळेतील शुद्धता',
    'section.products.subtitle': 'आमच्या गिर गायींपासून प्रेमाने तयार — ताजे, आरोग्यदायी आणि पारंपरिक.',
    'section.products.product1': 'A2 गिर गायीचे तूप',
    'section.products.productdesc1': 'पारंपरिक पद्धतीने काढलेले, पोषणाने समृद्ध',
    'section.products.product2': 'A2 गिर गायीचे दूध',
    'section.products.productdesc2': 'ताजे, रसायनमुक्त व थेट शेतातून',
    'section.products.product3': 'नैसर्गिक शेण',
    'section.products.productdesc3': 'हस्तनिर्मित, पर्यावरणपूरक इंधन विटा',
    'section.products.tag': 'बेस्ट सेलर',
    'section.products.bottom': 'नंदग्राम गोदाम येथे उपलब्ध • 100% नैसर्गिक • कोणतेही संरक्षक नाहीत',

    'section.package.title': 'एक दिवसाचा अनुभव पॅकेज',
    'section.package.subtitle': 'नंदग्राम गोदाम येथे आनंददायी दिवसासाठी सर्व काही',
    'section.package.ribbon': 'बेस्ट व्हॅल्यू',
    'section.package.priceLabel': 'तिकीट दर',
    'section.package.price': '₹500',
    'section.package.perPerson': 'प्रति व्यक्ती',
    'section.package.description': 'मजा, निसर्ग आणि अविस्मरणीय आठवणींनी भरलेला संपूर्ण दिवस.',
    'section.package.includes': 'तिकीटमध्ये समाविष्ट',
    'section.package.item.waterpark': 'वॉटर पार्क प्रवेश',
    'section.package.item.selfie': 'सेल्फी पॉइंट्स व इतर आकर्षणे',
    'section.package.item.popcorn': 'मोफत पॉपकॉर्न',
    'section.package.item.welcomeDrink': 'वेलकम ड्रिंक',
    'section.package.item.cottonCandy': 'कॉटन कँडी',
    'section.package.noteTitle': 'सूचना',
    'section.package.note.food': 'भोजन अतिरिक्त शुल्कावर उपलब्ध आहे',
    'section.package.note.tiffin': 'घरून टिफिन आणण्यास परवानगी आहे',
    'section.package.note.kids': '५ वर्षांखालील मुलांसाठी मोफत प्रवेश',
    'section.package.cta': 'तुमची भेट नियोजित करा',



    // Intro Bio  
    'section.introbio.title': 'महाराष्ट्रातील कृषी पर्यटन आणि वॉटरपार्क...',
    'section.introbio.subtitle': 'आनंदाची शेती!',
    'section.introbio.paragraph1': 'नंदग्राम गोधाम हे केवळ पिकनिक स्पॉट किंवा वॉटरपार्क नाही. हे एक विचारपूर्वक विकसित केलेले ठिकाण आहे जिथे कुटुंबे, मुले आणि गट निसर्गाशी पुन्हा जोडले जातात, ग्रामीण जीवनाचा अनुभव घेतात, साहस व जलक्रीडांचा आनंद घेतात आणि सुरक्षित व स्वागतार्ह वातावरणात एकत्र सुंदर वेळ घालवतात.',
    'section.introbio.paragraph2': 'नंदग्राम गोधामचा प्रत्येक कोपरा आराम, आनंद आणि आपुलकीची भावना देण्यासाठी तयार करण्यात आला आहे.',




    // Testimonials
    'testimonials.title': 'लोकांनी सामायिक केलेले अनुभव',
    'testimonials.subtitle': 'आमच्या अभ्यागतांनी सामायिक केलेले वास्तविक क्षण',

    'testimonial.1.name': 'अमित पाटील',
    'testimonial.1.role': 'कौटुंबिक अभ्यागत',
    'testimonial.1.review': 'कौटुंबिक वेळ घालवण्यासाठी एक आदर्श ठिकाण. स्वच्छ वातावरण, उत्कृष्ट जेवण, आणि मुलांनी प्रत्येक क्षणाचा आनंद घेतला.',

    'testimonial.2.name': 'स्नेहा कुलकर्णी',
    'testimonial.2.role': 'शाळा समन्वयक',
    'testimonial.2.review': 'आमची शाळा सहल अत्यंत चांगल्या प्रकारे व्यवस्थापित होती. क्रियाकलाप सुरक्षित, आकर्षक आणि शैक्षणिक होते.',

    'testimonial.3.name': 'राहुल देशमुख',
    'testimonial.3.role': 'मित्रांचा गट',
    'testimonial.3.review': 'आम्ही मित्र म्हणून आलो आणि आठवणी घेऊन निघालो. वॉटरपार्क आणि गावाचा अनुभव उत्कृष्ट होता.',

    'testimonial.4.name': 'नेहा जोशी',
    'testimonial.4.role': 'पालक',
    'testimonial.4.review': 'खूप सुरक्षित आणि चांगल्या प्रकारे देखभाल केलेले. पूरक स्नॅक्स मुलांसाठी एक गोड आश्चर्य होते.',

    'testimonial.5.name': 'संदीप मोरे',
    'testimonial.5.role': 'पहिल्यांदाच अभ्यागत',
    'testimonial.5.review': 'निसर्ग, मजा आणि संस्कृती यांचे एक अनोखे मिश्रण. निश्चितच भेट देण्यासारखे आहे.',

    'testimonial.6.name': 'राहुल लड्डा',
    'testimonial.6.role': 'मित्रांचा गट',
    'testimonial.6.review': 'वॉटरपार्कमधील राइड्स खूपच छान आणि आनंददायक आहेत. कर्मचारी खूप मदत करणारे आणि सहकारी आहेत.',

    // Experiences
    'exp.title': 'आमचे अनुभव',
    'exp.subtitle': 'एकाच ठिकाणी अनेक जग शोधा',
    'exp.badge': '7 अनोखे अनुभव',
    'exp.piccity': 'द पिक सिटी',
    'exp.piccity.descp': 'अविस्मरणीय क्षणांसाठी डिझाइन केलेल्या सुंदर फोटो स्पॉट्सवर आठवणी टिपा.',
    'exp.aplegaon': 'आपले गाव',
    'exp.aplegaon.descp': 'खऱ्या गावातील जीवनात पाऊल टाका आणि पारंपारिक ग्रामीण महाराष्ट्राचा अनुभव घ्या.',
    'exp.carnival': 'कार्निवल स्ट्रीट',
    'exp.carnival.descp': 'खेळ, फूड स्टॉल्स आणि उत्सवाच्या उर्जेने भरलेला एक जीवंत रस्ता.',
    'exp.boating': 'बोटिंग पॉइंट',
    'exp.boating.descp': 'निसर्गाने वेढलेल्या शांत पाण्यावर शांततापूर्ण बोट राइड्स.',
    'exp.shauryavan': 'शौर्यवन - अॅडव्हेंचर पार्क',
    'exp.shauryavan.descp': 'रोमांचक क्रियाकलाप आणि सुरक्षित खेळण्याच्या क्षेत्रांसह मुलांसाठी साहसी झोन.',
    'exp.waterpark': 'वॉटरपार्क',
    'exp.waterpark.descp': 'थरारक वॉटर स्लाइड्स आणि स्प्लॅश पूल्ससह उन्हाळा हरवा.',
    'exp.selfie': 'सेल्फी पॉइंट्स',
    'exp.selfie.descp': 'परफेक्ट फॅमिली फोटोंसाठी तयार केलेले इंस्टाग्राम-योग्य स्पॉट्स.',
    'exp.gautirth': 'गौतीर्थ',
    'exp.gautirth.descp': 'चिंतन आणि जोडणीसाठी एक शांततापूर्ण आध्यात्मिक जागा.',
    'exp.gaushala': 'गोशाळा',
    'exp.gaushala.descp': 'पारंपारिक गोशाळेचा अनुभव घ्या आणि ग्रामीण मूल्यांबद्दल जाणून घ्या.',
    'exp.swimmingpool': 'स्विमिंग पूल',
    'exp.swimmingpool.descp': 'सर्व वयोगटांसाठी ताजेतवाने आरामाची जागा.',
    'exp.pixopark': 'पिक्सो पार्क',
    'exp.pixopark.descp': 'सर्जनशील मजेसाठी रंगीबेरंगी आणि खेळकर जागा.',
    'exp.tents': 'टेंट आणि कॉटेज',
    'exp.tents.descp': 'विस्तारित अनुभवांसाठी आरामदायक निसर्ग निवास.',
    'exp.tags.family': 'कुटुंबासाठी अनुकूल',
    'exp.tags.photo': 'फोटो स्पॉट्स',
    'exp.tags.allages': 'सर्व वयोगट',
    'exp.cta.ready': 'सगळं अनुभवण्यास तयार?',
    'exp.cta.desc': 'आजच तुमची भेट बुक करा आणि आयुष्यभर टिकणाऱ्या आठवणी तयार करा',

    // Experience Categories
    'exp.cat.nature': 'निसर्ग आणि संस्कृती अनुभव',
    'exp.cat.nature.desc': 'गावातील जीवन, आध्यात्मिक स्थाने आणि शेती परंपरा',
    'exp.cat.creative': 'सर्जनशील आणि स्मृती क्षेत्रे',
    'exp.cat.creative.desc': 'अनोखे फोटो स्पॉट्स आणि परस्परसंवादी व्हिज्युअल स्पेसेस',
    'exp.cat.adventure': 'मजा, साहस आणि जल क्रियाकलाप',
    'exp.cat.adventure.desc': 'अॅडव्हेंचर पार्क, स्विमिंग पूल आणि वॉटरपार्क मजा',
    'exp.cat.stay': 'निसर्गाच्या कुशीत राहा',
    'exp.cat.stay.desc': 'विस्तारित अनुभवांसाठी शांततापूर्ण टेंट आणि कॉटेज',

    // Home Page Personas
    'home.personas.families': 'कुटुंबे',
    'home.personas.families.desc': 'सुरक्षित, स्वच्छ आणि आनंदी वातावरणात दर्जेदार वेळ घालवा',
    'home.personas.kids': 'मुले',
    'home.personas.kids.desc': 'आकर्षक क्रियाकलापांद्वारे साहस, शिक्षण आणि मजा',
    'home.personas.friends': 'मित्र आणि गट',
    'home.personas.friends.desc': 'विश्रांती घ्या, शोधा आणि एकत्र आठवणी तयार करा',
    'home.personas.schools': 'शाळा पिकनिक',
    'home.personas.schools.desc': 'शिक्षण, मैदानी संपर्क आणि मजा यांचा संतुलित मिश्रण',

    // Journey Steps
    'home.journey.step1': 'हिरवळीत पोहोचा',
    'home.journey.step2': 'गावातील संस्कृती आणि शांत ठिकाणे शोधा',
    'home.journey.step3': 'मुले साहस आणि सर्जनशील झोनचा आनंद घेतात',
    'home.journey.step4': 'जल क्रियाकलापांमध्ये कौटुंबिक मजा',
    'home.journey.step5': 'आराम करा, हसा आणि सुंदर क्षण टिपा',
    'home.journey.step6': 'कायम राहणाऱ्या आठवणींसह परत या',

    // Recognition Points
    'home.recognition.quality': 'दर्जेदार अनुभव',
    'home.recognition.clean': 'स्वच्छ आणि सुव्यवस्थित सुविधा',
    'home.recognition.family': 'कुटुंबासाठी अनुकूल वातावरण',
    'home.recognition.cultural': 'सांस्कृतिक आणि शेती मूल्ये',

    // Safety Features
    'home.safety.washrooms': 'स्वच्छ शौचालये आणि चेंजिंग रूम',
    'home.safety.firstaid': 'प्रथमोपचार आणि प्रशिक्षित सहाय्य कर्मचारी',
    'home.safety.zones': 'मुलांसाठी सुरक्षित क्षेत्रे',
    'home.safety.seating': 'बसण्याची आणि विश्रांतीची क्षेत्रे',
    'home.safety.maintained': 'सुव्यवस्थित परिसर',

    // Buttons & Actions
    'btn.viewAll': 'सर्व पहा',
    'btn.viewAllExperiences': 'सर्व अनुभव पहा',
    'btn.viewFullGallery': 'संपूर्ण गॅलरी पहा',
    'btn.viewOnMaps': 'गूगल मॅप्सवर पहा',
    'btn.convenientAccess': 'सोयीस्कर प्रवेश',
    'btn.planVisit': 'तुमची भेट नियोजित करा',
    'btn.contactUs': 'संपर्क करा',
    'btn.exploreExperiences': 'अनुभव पहा',
    'btn.learnMore': 'अधिक जाणून घ्या',
    'btn.viewGallery': 'गॅलरी पहा',
    'btn.joinJourney': 'आमच्या प्रवासात सामील व्हा',
    'btn.chatNow': 'आता चॅट करा',
    'btn.callNow': 'आता कॉल करा',
    'btn.sendEmail': 'ईमेल पाठवा',
    'btn.openMaps': 'गूगल मॅप्समध्ये उघडा',

    // Transport
    'transport.byCar': 'कारने',
    'transport.byBus': 'बसने',
    'transport.byTrain': 'ट्रेनने',

    //Experience Page Categories

    // Pic City
    'exp.piccity.title': 'पिक सिटी',
    'exp.piccity.desc': 'आमच्या सुंदर छायाचित्रण स्थळांवर आश्चर्यकारक क्षण कॅप्चर करा. कौटुंबिक पोर्ट्रेट, विवाहपूर्व शूट आणि सुंदर दृश्यांसह संस्मरणीय फोटोंसाठी परिपूर्ण पार्श्वभूमी.',
    'exp.piccity.feature1': 'व्यावसायिक छायाचित्रण स्थळे',
    'exp.piccity.feature2': 'निसर्गरम्य पार्श्वभूमी',
    'exp.piccity.feature3': 'कुटुंब-अनुकूल स्थाने',
    'exp.piccity.highlight1': '📸 इन्स्टाग्राम-परफेक्ट',
    'exp.piccity.highlight2': '🌄 विहंगम दृश्ये',
    'exp.piccity.highlight3': '👨‍👩‍👧‍👦 सामूहिक फोटो',

    // Water Park
    'exp.waterpark.title': 'वॉटर पार्क',
    'exp.waterpark.desc': 'रोमांचक वॉटर स्लाइड्स, वेव्ह पूल आणि स्प्लॅश झोनसह उष्णता मागे टाका. सर्व वयोगटासाठी आकर्षणांसह परिपूर्ण कौटुंबिक गंतव्यस्थान.',
    'exp.waterpark.feature1': 'रोमांचक वॉटर स्लाइड्स',
    'exp.waterpark.feature2': 'वेव्ह पूल आणि लेझी रिव्हर',
    'exp.waterpark.feature3': 'मुलांचे स्प्लॅश झोन',
    'exp.waterpark.highlight1': '🌊 हाय-स्पीड स्लाइड्स',
    'exp.waterpark.highlight2': '🏊 फॅमिली पूल',
    'exp.waterpark.highlight3': '👶 लहान मुलांचे क्षेत्र',

    // Aaplegaon
    'exp.aaplegaon.title': 'आपलेगाव',
    'exp.aaplegaon.desc': 'खऱ्या गावातील जीवनात पाऊल टाका आणि पारंपारिक ग्रामीण महाराष्ट्राचा अनुभव घ्या. स्थानिक संस्कृती, शेती पद्धती आणि नैसर्गिक सौंदर्य यामध्ये स्वतःला सामावून घ्या.',
    'exp.aaplegaon.feature1': 'पारंपारिक शेती अनुभव',
    'exp.aaplegaon.feature2': 'स्थानीय हस्तशिल्प',
    'exp.aaplegaon.feature3': 'सांस्कृतिक प्रदर्शन',
    'exp.aaplegaon.highlight1': '🌲 पारंपारिक ग्रामीण जीवन',
    'exp.aaplegaon.highlight2': '🦜 स्थानीय प्रकृति',
    'exp.aaplegaon.highlight3': '🥾 स्थानीय शिल्प और कृषि',

    // Gautirth
    'exp.gautirth.title': 'गौतीर्थ',
    'exp.gautirth.desc': 'या पवित्र गाय संग्रहालयात आध्यात्मिक शांतता अनुभवा. गायींना समर्पित एक माहितीपूर्ण केंद्र.',
    'exp.gautirth.feature1': 'माहितीपूर्ण क्षेत्र',
    'exp.gautirth.feature2': 'धार्मिक संगोपन',
    'exp.gautirth.feature3': 'गायींचे महत्त्व',
    'exp.gautirth.highlight1': '🕉️ पवित्र स्थळ',
    'exp.gautirth.highlight2': '🧘 शांत वातावरण',
    'exp.gautirth.highlight3': '📿 आध्यात्मिक विधी',

    // Gaushala
    'exp.gaushala.title': 'गौशाळा',
    'exp.gaushala.desc': 'पारंपारिक गोशाळेचा अनुभव घ्या आणि ग्रामीण मूल्यांबद्दल जाणून घ्या. गायींची काळजी कशी घेतली जाते आणि त्यांचे सांस्कृतिक महत्त्व काय आहे हे शोधा.',
    'exp.gaushala.feature1': 'गिर गायींची काळजी',
    'exp.gaushala.feature2': 'सेंद्रिय दुग्धजन्य पदार्थ',
    'exp.gaushala.feature3': 'शेत-ते-टेबल टूर्स',
    'exp.gaushala.highlight1': '🐄 गायींची काळजी',
    'exp.gaushala.highlight2': '🥛 ताजे दुग्धजन्य',
    'exp.gaushala.highlight3': '🌾 सेंद्रिय शेती',

    // Boating Point
    'exp.boating.title': 'बोटिंग पॉइंट',
    'exp.boating.desc': 'निसर्गाने वेढलेल्या शांत पाण्यावर शांततापूर्ण बोट राइड्सचा आनंद घ्या. कुटुंबीयांसाठी आदर्श, जेथे तुम्ही जलाशयाच्या सौंदर्याचा अनुभव घेऊ शकता आणि निसर्गाशी जुळवून घेऊ शकता.',
    'exp.boating.feature1': 'पॅडल बोट्स उपलब्ध',
    'exp.boating.feature2': 'प्राकृतिक दृश्य',
    'exp.boating.feature3': 'सुरक्षा उपकरणे समाविष्ट',
    'exp.boating.highlight1': '⛵ निसर्गरम्य नौकाविहार',
    'exp.boating.highlight2': '🌅 प्राकृतिक सौंदर्य',
    'exp.boating.highlight3': '📷 सरोवर छायाचित्रण',

    // Pixo Park
    'exp.pixopark.title': 'पिक्सो पार्क',
    'exp.pixopark.desc': 'पिक्सो पार्क हा रंगीबेरंगी थीम आधारित फोटो आणि एक्सप्लोरेशन झोन आहे. येथे मोरोक्कन पॅलेस, युरोपियन स्ट्रीट्स आणि क्रिएटिव सेटअप पाहायला मिळतात. फोटो काढण्यासाठी आणि मजा करण्यासाठी ही जागा उत्तम आहे.',
    'exp.pixopark.feature1': 'वर्ल्ड थीम आर्किटेक्चर',
    'exp.pixopark.feature2': 'क्रिएटिव फोटो सेट्स',
    'exp.pixopark.feature3': 'मजेशीर फिरण्याचा झोन',
    'exp.pixopark.highlight1': '📸 फोटो झोन',
    'exp.pixopark.highlight2': '🌍 ग्लोबल थीम',
    'exp.pixopark.highlight3': '🎨 रंगीबेरंगी सेट',

    // Shauryavan Adventure Zone
    'exp.shauryavan.title': 'शौर्यवन साहस क्षेत्र',
    'exp.shauryavan.desc': 'मुलांसाठी साहसी झोन ज्यामध्ये रोमांचक क्रियाकलाप आणि सुरक्षित खेळण्याच्या क्षेत्रांचा समावेश आहे. लष्करी अडथळे, टीम बिल्डिंग गेम्स आणि कमांडो प्रशिक्षणासह मुलांच्या साहसाची भावना वाढवा.',
    'exp.shauryavan.feature1': 'लष्करी अडथळे',
    'exp.shauryavan.feature2': 'टीम बिल्डिंग गेम्स',
    'exp.shauryavan.feature3': 'कमांडो प्रशिक्षण',
    'exp.shauryavan.highlight1': '🏹 शारीरिक शक्ति',
    'exp.shauryavan.highlight2': '🧗 दोरी चढणे',
    'exp.shauryavan.highlight3': '🎯 टीम बिल्डिंग',

    // Swimming Pool
    'exp.swimmingpool.title': 'स्विमिंग पूल',
    'exp.swimmingpool.desc': 'आमच्या स्फटिक-स्वच्छ स्विमिंग पूलमध्ये आराम करा आणि ताजेतवाने व्हा. प्रौढ आणि मुलांसाठी वेगळे विभाग आणि नवशिक्यांसाठी उथळ क्षेत्रे.',
    'exp.swimmingpool.feature1': 'प्रौढ आणि मुलांचे विभाग',
    'exp.swimmingpool.feature2': 'लाइफगार्ड ड्युटीवर',
    'exp.swimmingpool.feature3': 'स्वच्छ बदलणारे खोल्या',
    'exp.swimmingpool.highlight1': '🏊 ऑलिम्पिक आकार',
    'exp.swimmingpool.highlight2': '👶 मुलांचा पूल',
    'exp.swimmingpool.highlight3': '🌊 स्फटिक स्वच्छ',

    // Tents & Cottages
    'exp.tents.title': 'तंबू आणि कॉटेज',
    'exp.tents.desc': 'आरामदायक तंबूंमध्ये लक्झरी कॅम्पिंगचा अनुभव घ्या किंवा आरामदायक कॉटेजमध्ये राहा. आधुनिक सुविधा निसर्गाशी भेटतात.',
    'exp.tents.feature1': 'लक्झरी कॅम्पिंग तंबू',
    'exp.tents.feature2': 'खाजगी कॉटेज',
    'exp.tents.feature3': 'आधुनिक सुविधा',
    'exp.tents.highlight1': '🏕️ ग्लॅम्पिंग शैली',
    'exp.tents.highlight2': '🛏️ आरामदायक पलंग',
    'exp.tents.highlight3': '🌄 पर्वतीय दृश्ये',

    // CTA Section
    "section.visit.title": "तुमचा प्रवास तुमची वाट पाहत आहे",
    "section.visit.highlight": "नंदग्राम गोधाम अनुभवा",
    "section.visit.desc": "शहरी जीवनाच्या गोंगाटापासून दूर जा आणि निसर्ग, संस्कृती आणि अविस्मरणीय क्षणांशी पुन्हा जुळवून घ्या. कुटुंबे, मित्र आणि शोधकांसाठी एक परिपूर्ण सुटका.",
    "section.visit.cta": "आता भेट द्या",

    // About Page

    'about.director.title': 'व्यवस्थापकीय संचालक',
    'about.director.subtitle': 'नंदग्राम गोधाममागील दूरदृष्टीचा परिचय',
    'about.director.name': 'अभिलाष नागला',
    'about.director.designation': 'व्यवस्थापकीय संचालक',
    'about.director.bio': 'अभिलाष नागला हे भारतीय उद्योजक असून महाराष्ट्रातील जळगाव येथे असलेल्या नंदग्राम गोधाम अ‍ॅग्री टुरिझमचे संस्थापक आहेत. ग्रामीण पर्यटनाला चालना देणे आणि लोकांना ग्रामीण जीवनशैली, संस्कृती, निसर्ग आणि शाश्वत जीवनाचा अनुभव देणे या उद्देशाने त्यांनी ही संकल्पना सुरू केली. त्यांनी पुण्यातील एमआयटी स्कूल ऑफ मॅनेजमेंट येथून फायनान्समध्ये एमबीए पूर्ण केले असून आपल्या व्यावसायिक ज्ञानाचा उपयोग ग्रामीण पर्यटनाच्या विकासासाठी करत आहेत.',
    'about.director.missionTitle': 'दृष्टी आणि ध्येय',
    'about.director.missionDetail': 'महाराष्ट्रातील सर्वाधिक आवडते कौटुंबिक पर्यटनस्थळ बनणे — जिथे शहरी कुटुंबे निसर्गाशी पुन्हा जोडली जातील, मुले ग्रामीण जीवनाचा आनंद अनुभवतील आणि प्रत्येक भेट अविस्मरणीय आठवणी निर्माण करेल.',

    'about.title': 'आमची कथा',
    'about.subtitle': 'परंपरेत मूळ, आनंदासह वाढत',
    'about.badge': 'आमची कथा',
    'about.heritage': 'वर्षांचा वारसा',
    'about.why.title': 'का',
    'about.why.highlight': 'नंदग्राम गोदाम',
    'about.why.p1': 'महाराष्ट्राच्या शेती वारशाबद्दलच्या खोल प्रेमातून आणि ते सौंदर्य कुटुंबांसोबत सामायिक करण्याच्या दृष्टिकोनातून जन्मलेले, नंदग्राम गोदाम ग्रामीण परंपरा आणि आधुनिक मनोरंजन यांमधील अंतर कमी करते.',
    'about.why.p2': 'आमचा विश्वास आहे की प्रत्येक मुलाने शेतीच्या जीवनातील जादू अनुभवली पाहिजे, प्रत्येक कुटुंबाला निसर्गात दर्जेदार वेळ मिळावा आणि प्रत्येक अभ्यागताने आजीवन आठवणी घेऊन जावे.',
    'about.why.p3': 'आमचे गंतव्य फक्त एक आकर्षण नाही — हा जमीन, संस्कृती आणि समुदायाचा उत्सव आहे जो महाराष्ट्राला खरोखरच विशेष बनवतो.',
    'about.values.title': 'आमची',
    'about.values.highlight': 'मूल्ये',
    'about.values.subtitle': 'आम्ही जे काही करतो त्याचे मार्गदर्शन करणारी तत्त्वे',
    'about.values.family': 'कुटुंब प्रथम',
    'about.values.family.desc': 'सर्व वयोगटांना एकत्र आनंद घेण्यासाठी डिझाइन केलेले',
    'about.values.nature': 'निसर्ग आधारित',
    'about.values.nature.desc': 'अस्सल ग्रामीण आणि शेती अनुभव',
    'about.values.community': 'समुदाय',
    'about.values.community.desc': 'स्थानिक संस्कृती आणि परंपरांना समर्थन',
    'about.values.safety': 'सुरक्षितता',
    'about.values.safety.desc': 'तुमचे कल्याण ही आमची सर्वोच्च प्राथमिकता आहे',
    'about.vision.title': 'भविष्यासाठी आमची दृष्टी',
    'about.vision.desc': 'महाराष्ट्राचे सर्वात प्रिय कौटुंबिक गंतव्य बनणे — जिथे शहरी कुटुंबे निसर्गाशी पुन्हा जोडतात, जिथे मुले ग्रामीण जीवनाचे आश्चर्य शोधतात, आणि जिथे प्रत्येक भेट आनंदाच्या आठवणी निर्माण करते.',

    // Plan Visit Page
    'plan.title': 'तुमची भेट नियोजित करा',
    'plan.subtitle': 'एका परिपूर्ण दिवसासाठी आवश्यक असलेले सर्व काही',
    'plan.badge': 'तुम्हाला माहित असणे आवश्यक असलेले सर्व',
    'plan.timing': 'भेट देण्यासाठी सर्वोत्तम वेळ',
    'plan.duration': 'सुचविलेला कालावधी',
    'plan.bring': 'काय आणायचे',
    'plan.tips': 'अभ्यागत टिप्स',
    'plan.hours': 'शिफारस केलेले तास',
    'plan.hours.desc': 'सर्व अनुभवांचा आरामात आनंद घेण्यासाठी संपूर्ण दिवसाचे नियोजन करा',
    'plan.season.best': 'सर्वोत्तम वेळ',
    'plan.season.oct': 'ऑक्टोबर - मार्च',
    'plan.season.oct.desc': 'मैदानी क्रियाकलापांसाठी उत्तम हवामान',
    'plan.season.monsoon': 'मान्सूनची जादू',
    'plan.season.jul': 'जुलै - सप्टेंबर',
    'plan.season.jul.desc': 'हिरवीगार लँडस्केप्स, कधी कधी पाऊस',
    'plan.tip.shoes': 'आरामदायक चालण्याचे बूट घाला',
    'plan.tip.sunscreen': 'सनग्लासेस आणि टोप्या आणा',
    'plan.tip.water': 'पाण्याच्या बाटल्या सोबत ठेवा',
    'plan.tip.clothes': 'हलके, आरामदायक कपडे घाला',
    'plan.tip.camera': 'आठवणींसाठी कॅमेरा आणा',
    'plan.tip.snacks': 'मुलांसाठी हलके नाश्ते पॅक करा',
    'plan.guidelines.title': 'काय करावे आणि काय करू नये',
    'plan.guidelines.subtitle': 'सर्वांसाठी अनुभव जादुई ठेवण्यास मदत करा',
    'plan.dos': 'काय करावे',
    'plan.donts': 'काय करू नये',
    'plan.do.respect': 'नैसर्गिक पर्यावरणाचा आदर करा',
    'plan.do.safety': 'सर्व आकर्षणांवर सुरक्षा मार्गदर्शक तत्त्वांचे पालन करा',
    'plan.do.supervise': 'मुलांवर सर्व वेळ लक्ष ठेवा',
    'plan.do.photo': 'नियुक्त फोटो स्पॉट्स वापरा',
    'plan.do.hydrate': 'तुमच्या भेटीदरम्यान हायड्रेटेड राहा',
    'plan.dont.litter': 'कचरा टाकणे किंवा मालमत्तेचे नुकसान करणे',
    'plan.dont.feed': 'परवानगीशिवाय प्राण्यांना खाऊ घालणे',
    'plan.dont.restricted': 'प्रतिबंधित क्षेत्रांमध्ये प्रवेश करणे',
    'plan.dont.smoke': 'धूम्रपान आणि मद्यपान पूर्णपणे निषिद्ध आहे',
    'plan.dont.food': 'कर्मचाऱ्यांशी वाद घालू नका किंवा इतर पर्यटकांमध्ये गोंधळ निर्माण करू नका',

    // Day Itinerary
    'itinerary.badge': 'तुमचा दिवस, सुंदरपणे नियोजित',
    'itinerary.title': 'एक परिपूर्ण दिवस',
    'itinerary.subtitle': 'आमच्या सर्वोत्तम अनुभवासाठी या सुचवलेल्या प्रवासाचे अनुसरण करा.',
    'itinerary.arrival': 'आगमन आणि स्वागत',
    'itinerary.arrival.desc': 'उबदार स्वागताने तुमचा प्रवास सुरू करा. आरामात पार्क करा.',
    'itinerary.arrival.time': 'सकाळी 9:00',
    'itinerary.morning': 'सकाळचा निसर्ग आणि संस्कृती',
    'itinerary.morning.desc': 'शांत सांस्कृतिक अनुभव शोधा आणि निसर्गाशी जोडा.',
    'itinerary.morning.time': '9:30 - 12:00',
    'itinerary.midday': 'दुपारचा आराम आणि मजा',
    'itinerary.midday.desc': 'तुमच्या कुटुंबासोबत आरामदायी क्रियाकलापांचा आनंद घ्या.',
    'itinerary.midday.time': '12:00 - 1:30',
    'itinerary.lunch': 'दुपारचे जेवण आणि विश्रांती',
    'itinerary.lunch.desc': 'स्वादिष्ट स्थानिक पदार्थांसह ताजेतवाने व्हा. दुपारच्या साहसापूर्वी विश्रांती घ्या.',
    'itinerary.lunch.time': '1:30 - 3:00',
    'itinerary.afternoon': 'साहस आणि वॉटर फन',
    'itinerary.afternoon.desc': 'वॉटरपार्कमध्ये मजा करा आणि साहसी क्रियाकलापांवर विजय मिळवा!',
    'itinerary.afternoon.time': '3:00 - 5:30',
    'itinerary.evening': 'संध्याकाळची शांतता',
    'itinerary.evening.desc': 'गोल्डन अवर फोटो कॅप्चर करा आणि सुंदर सूर्यास्ताचा आनंद घ्या.',
    'itinerary.evening.time': '5:30 - 6:30',
    'itinerary.stay': 'तुमचा मुक्काम वाढवा',
    'itinerary.stay.desc': 'आरामदायक टेंट किंवा कॉटेज बुक करा आणि ताज्या ग्रामीण हवेत जागे व्हा.',
    'itinerary.stay.time': 'पर्यायी',
    'itinerary.note.title': 'तुमची गती, तुमचा प्रवास',
    'itinerary.note.desc': 'हा एक सुचवलेला प्रवाह आहे. तुमच्या गतीने शोधा आणि तुमचा परिपूर्ण दिवस तयार करा.',
    'itinerary.cta.explore': 'सर्व अनुभव पहा',
    'itinerary.cta.contact': 'नियोजनासाठी संपर्क करा',

    // Facilities Page
    'facilities.title': 'सुविधा आणि सुरक्षितता',
    'facilities.subtitle': 'तुमची सुखसोय आणि सुरक्षितता ही आमची प्राथमिकता आहे',
    'facilities.badge': 'आराम आणि सुरक्षितता',
    'facilities.parking': 'मोफत पार्किंग',
    'facilities.parking.desc': 'कार आणि बसांसाठी पुरेशी पार्किंग जागा',
    'facilities.food': 'फूड कोर्ट',
    'facilities.food.desc': 'स्वच्छ शाकाहारी अन्न आणि पेये',
    'facilities.wifi': 'मोफत वाय-फाय',
    'facilities.wifi.desc': 'सामान्य क्षेत्रांमध्ये जोडलेले राहा',
    'facilities.firstaid': 'प्रथमोपचार',
    'facilities.firstaid.desc': '24/7 वैद्यकीय मदत उपलब्ध',
    'facilities.restrooms': 'स्वच्छ शौचालये',
    'facilities.restrooms.desc': 'संपूर्ण परिसरात सुव्यवस्थित सुविधा',
    'facilities.accessible': 'सुलभ मार्ग',
    'facilities.accessible.desc': 'व्हीलचेअर अनुकूल मार्ग',
    'facilities.babycare': 'बेबी केअर',
    'facilities.babycare.desc': 'समर्पित बेबी चेंजिंग रूम',
    'facilities.shaded': 'छायादार क्षेत्रे',
    'facilities.shaded.desc': 'नैसर्गिक सावलीसह विश्रांती स्थळे',
    'facilities.water': 'पिण्याचे पाणी',
    'facilities.water.desc': 'शुद्ध पाण्याचे स्टेशन',
    'facilities.photozones': 'फोटो झोन',
    'facilities.photozones.desc': 'इंस्टाग्राम-योग्य स्पॉट्स',
    'facilities.category.convenience': 'सोय',
    'facilities.category.comfort': 'आराम',
    'facilities.category.safety': 'सुरक्षितता',
    'facilities.category.experience': 'अनुभव',
    'facilities.safety.badge': 'सुरक्षितता प्रथम',
    'facilities.safety.title': 'तुमची',
    'facilities.safety.highlight': 'सुरक्षितता',
    'facilities.safety.tagline': 'आमची प्राथमिकता आहे',
    'facilities.safety.staff': 'प्रशिक्षित कर्मचारी',
    'facilities.safety.staff.desc': 'सर्व कर्मचारी सुरक्षा प्रोटोकॉल आणि आणीबाणी प्रतिसादात प्रशिक्षित',
    'facilities.safety.medical': '24/7 वैद्यकीय सहाय्य',
    'facilities.safety.medical.desc': 'पात्र कर्मचाऱ्यांसह प्रथमोपचार स्टेशन नेहमी उपलब्ध',
    'facilities.safety.equipment': 'सुरक्षित उपकरणे',
    'facilities.safety.equipment.desc': 'सर्व आकर्षणांवर नियमित देखभाल आणि सुरक्षा तपासणी',
    'facilities.safety.clean': 'स्वच्छ वातावरण',
    'facilities.safety.clean.desc': 'संपूर्ण मालमत्तेत कठोर स्वच्छता प्रोटोकॉल',
    'facilities.cta.title': 'काही प्रश्न आहेत?',
    'facilities.cta.subtitle': 'तुमची परिपूर्ण भेट नियोजित करण्यासाठी आमची टीम तयार आहे',

    // Gallery Page
    'gallery.title': 'व्हिज्युअल स्टोरीज',
    'gallery.subtitle': 'आनंद, निसर्ग आणि अविस्मरणीय क्षणांच्या झलक',
    'gallery.badge': 'व्हिज्युअल स्टोरीज',
    'gallery.stats.photos': 'टिपलेले फोटो',
    'gallery.stats.locations': 'अनोखे ठिकाणे',
    'gallery.stats.visitors': 'आनंदी अभ्यागत',
    'gallery.stats.events': 'आयोजित कार्यक्रम',

    // Contact Page
    'contact.title': 'संपर्क करा',
    'contact.subtitle': 'आम्हाला तुमच्याकडून ऐकायला आवडेल',
    'contact.badge': 'आम्हाला तुमच्याकडून ऐकायला आवडेल',
    'contact.phone': 'फोन',
    'contact.whatsapp': 'व्हाट्सअॅप',
    'contact.whatsapp.value': 'त्वरित प्रतिसाद',
    'contact.email': 'ईमेल',
    'contact.hours': 'कार्यालयीन वेळा',
    'contact.hours.open': 'रोज उघडे',
    'contact.hours.time': 'सकाळी 9:00 - संध्याकाळी 6:00',
    'contact.hours.lastEntry': 'शेवटची एंट्री',
    'contact.hours.lastEntryTime': 'संध्याकाळी 4:30',
    'contact.hours.note': '*सुट्टीच्या दिवशी वेळ बदलू शकतो',
    'contact.form.title': 'आम्हाला संदेश पाठवा',
    'contact.form.subtitle': 'फॉर्म भरा आणि आम्ही लवकरच तुमच्याशी संपर्क करू',
    'contact.form.name': 'तुमचे नाव',
    'contact.form.phone': 'फोन',
    'contact.form.email': 'ईमेल पत्ता',
    'contact.form.subject': 'विषय',
    'contact.form.subject.placeholder': 'आम्ही कशी मदत करू शकतो?',
    'contact.form.message': 'तुमचा संदेश',
    'contact.form.message.placeholder': 'तुमच्या चौकशीबद्दल अधिक सांगा...',
    'contact.form.submit': 'संदेश पाठवा',
    'contact.visit.title': 'भेटीची माहिती',
    'contact.visit.subtitle': 'नंदग्राम गोदामला तुमची परिपूर्ण भेट नियोजित करण्यास मदत करण्यासाठी आम्ही येथे आहोत. कोणत्याही प्रश्नांसाठी संपर्क साधा!',
    'contact.whatsapp.prefer': 'व्हाट्सअॅप पसंत करता?',
    'contact.whatsapp.quick': 'चॅटवर त्वरित प्रतिसाद मिळवा',
    'contact.ready.title': 'भेट देण्यास तयार?',
    'contact.ready.subtitle': 'तुमच्या प्रवासाचे नियोजन करा आणि तुमच्या अनुभवाचा अधिकाधिक फायदा घ्या',

    // Location
    'location.title': 'आम्हाला शोधा',
    'location.subtitle': 'प्रमुख शहरांमधून सहज पोहोचता येते',
    'location.access': 'प्रवेश',
    'location.address': 'पत्ता',
    'location.landmarks': 'जवळपासची ठिकाणे',
    'location.landmark1': 'भुसावळ रेल्वे स्टेशनपासून 15 मिनिटे',
    'location.landmark2': 'NH-6 महामार्ग जवळ',
    'location.landmark3': 'भुसावळ सिटी सेंटरपासून 5 किमी',
    'location.mapNote': 'इंटरॅक्टिव्ह मॅप लवकरच येत आहे',
    'location.distance.title': 'पासून अंतर',
    'location.distance.highlight': 'प्रमुख शहरे',
    'location.distance.subtitle': 'महाराष्ट्र आणि त्यापलीकडील शहरांमधून सहज पोहोचता येते',

    // Footer
    'footer.tagline': 'एका वेळी एक कुटुंब, आठवणी निर्माण करत',
    'footer.quicklinks': 'जलद दुवे',
    'footer.connect': 'आमच्याशी जोडा',
    'footer.rights': 'सर्व हक्क राखीव',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.terms': 'सेवा अटी',
    'footer.hours.weekdays': 'मंगळवार - रविवार (सोमवार बंद)',

    // Common
    'common.learnmore': 'अधिक जाणून घ्या',
    'common.viewall': 'सर्व पहा',
    'common.booknow': 'आता बुक करा',
    'common.allExperiences': 'सर्व अनुभव',
    'common.language': 'भाषा',

    // Contact Page

    'contact.title1': 'चला जोडूया',
  'contact.subtitle1': 'नंदग्राम गोधामला तुमची भेट सहजपणे नियोजित करा.',

  // Contact Methods
  'contact.call.label': 'आम्हाला कॉल करा',
  'contact.call.number': '+91 91129 11248',
  
  'contact.whatsapp.label': 'व्हाट्सअॅप',
  'contact.whatsapp.number': '+91 91129 11248',
  
  'contact.email.label': 'ईमेल',
  'contact.email.address': 'nandgramgodham@gmail.com',

  // Contact Form
  'contact.form.title1': 'संदेश पाठवा',
  'contact.form.name1': 'तुमचे नाव',
  'contact.form.phone1': 'फोन नंबर',
  'contact.form.city': 'शहर',
  'contact.form.message1': 'तुमचा संदेश',
  'contact.form.submit1': 'पाठवा',

  // Location
  'contact.location.label': 'स्थान',
  'contact.location.address': 'नंदग्राम गोधाम, आंजळे, तालुका-यावल, जिल्हा जळगाव, महाराष्ट्र ४२५३०१',
  'contact.location.button': 'नकाशात उघडा',

  // Hours
  'contact.hours.label': 'वेळ',
  'contact.hours.time1': 'सकाळी 10:00 वाजता – संध्याकाळी 5:00 वाजता',

  // CTA Card
  'contact.cta.title': 'भेटीसाठी तयार आहात?',
  'contact.cta.button': 'तुमची भेट नियोजित करा',

  // Distance Section
  'contact.distance.title': 'प्रमुख शहरांपासूनचे अंतर',
  'contact.distance.bhusawal': 'भुसावल',
  'contact.distance.jalgaon': 'जळगाव',
  'contact.distance.dhule': 'धुळे',
  'contact.distance.nashik': 'नाशिक',
  'contact.distance.aurangabad': 'औरंगाबाद',

  // Form Status
'contact.form.sending': 'पाठवत आहे...',

// Success Modal
'contact.form.success.title': 'संदेश यशस्वीरित्या पाठवला गेला!',
'contact.form.success.message': 'आमच्याशी संपर्क केल्याबद्दल धन्यवाद! आम्ही लवकरच आपल्याशी संपर्क करू.',
'contact.form.success.close': 'बंद करा',


  
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

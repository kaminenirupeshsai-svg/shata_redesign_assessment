export interface Vendor {
  id: string;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviewsCount: number;
  badge: 'Shata Elite' | 'Verified Partner' | 'Super Host' | 'Rising Star';
  startingPrice: string;
  priceNum: number;
  tagline: string;
  experienceYears: number;
  eventsCompleted: number;
  avatar: string;
  coverImage: string;
  gallery: string[];
  features: string[];
  about: string;
  packages: {
    name: string;
    price: string;
    deliverables: string[];
  }[];
}

export const VENDORS: Vendor[] = [
  {
    id: 'pixels-by-arjun',
    name: 'Pixels by Arjun',
    category: 'photography',
    city: 'Hyderabad',
    rating: 4.98,
    reviewsCount: 184,
    badge: 'Shata Elite',
    startingPrice: '₹65,000 / day',
    priceNum: 65000,
    tagline: 'Vogue & Harper’s Bazaar featured wedding storyteller',
    experienceYears: 9,
    eventsCompleted: 420,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['4K Cine Teaser', 'AI Face Recognition Gallery', 'Raw files in 48h', 'Drone Aerials included'],
    about: 'Specializing in intimate emotional moments, grand royal entries, and high-fashion pre-wedding portraits across Hyderabad, Udaipur, and destination palaces.',
    packages: [
      {
        name: 'Essential Gold',
        price: '₹65,000 / day',
        deliverables: ['1 Candid + 1 Traditional Shooter', '300 Edited HD Photos', '3-5 Min Cinematic Teaser', 'Digital Cloud Gallery'],
      },
      {
        name: 'Royal Cinema Platinum',
        price: '₹1,25,000 / day',
        deliverables: ['2 Candid + 2 Traditional + 1 Drone Lead', '600+ Edited High-Res Photos', '15-20 Min Full Wedding Film', 'Leather Bound Velvet Album (40 pages)', 'Same Day Edit Reel for Instagram'],
      },
    ],
  },
  {
    id: 'royal-feast-co',
    name: 'Royal Feast Hospitality & Banquets',
    category: 'catering',
    city: 'Bengaluru',
    rating: 4.92,
    reviewsCount: 260,
    badge: 'Shata Elite',
    startingPrice: '₹850 / plate',
    priceNum: 850,
    tagline: 'Authentic Awadhi, Chettinad & Continental fusion masteries',
    experienceYears: 14,
    eventsCompleted: 1100,
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Complimentary Tasting', 'FSSAI Grade A Kitchen', 'Live Nitrogen Dessert', 'Silver Service Waitstaff'],
    about: 'Catering for Fortune 500 summits and royal Indian weddings. Our culinary brigade prepares every dish on-site with hand-ground spices and organic farm produce.',
    packages: [
      {
        name: 'Classic Mahabhoj (Veg & Non-Veg)',
        price: '₹850 / plate',
        deliverables: ['4 Welcome Drinks', '6 Starters (Live Counters)', '10 Main Course Specials', '4 Luxury Desserts & Ice Cream Bar'],
      },
      {
        name: 'Shata Emperor Gourmet',
        price: '₹1,400 / plate',
        deliverables: ['Exotic Mocktail Bar with Flair Bartenders', 'Pan-Asian Dumpling + Woodfire Pizza Counter', 'Signature Dum Gosht / Jackfruit Biryani', 'Artisanal Dessert Studio & Belgian Chocolate Fountain'],
      },
    ],
  },
  {
    id: 'bloom-luxe-design',
    name: 'Bloom Luxe Floral Architecture',
    category: 'decor',
    city: 'Mumbai',
    rating: 4.95,
    reviewsCount: 142,
    badge: 'Super Host',
    startingPrice: '₹1,10,000',
    priceNum: 110000,
    tagline: 'Immersive botanical installations & fairytale lightscapes',
    experienceYears: 8,
    eventsCompleted: 340,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['3D CAD Walkthroughs', 'Imported Orchid Mandaps', 'Custom Photo Backdrops', 'Kinetic Lighting'],
    about: 'Sculpting dreamscapes with fresh Dutch blossoms, brass lanterns, mirror floors, and majestic entrance tunnels designed for maximum Instagram wow-factor.',
    packages: [
      {
        name: 'Pastel Dream Mandap',
        price: '₹1,10,000',
        deliverables: ['Fresh Jasmine & Rose Canopy', 'Aisle Pillars with Crystal Candle Chandeliers', 'Couples Throne & Accent Sofas', 'Warm Ambient LED Stage Lighting'],
      },
      {
        name: 'Royal Palace Transformation',
        price: '₹2,80,000',
        deliverables: ['100-foot Fairy Light Entrance Tunnel', 'Grand Mirror-Finish Stage with 3D Monogram', 'Exotic Hanging Floral Chandeliers (1,500+ stems)', '3 Dedicated Photo-Op Lounges with Neon Signage'],
      },
    ],
  },
  {
    id: 'grand-palace-vizag',
    name: 'The Grand Oceanfront Lawns',
    category: 'venues',
    city: 'Visakhapatnam',
    rating: 4.88,
    reviewsCount: 96,
    badge: 'Verified Partner',
    startingPrice: '₹1,80,000 / day',
    priceNum: 180000,
    tagline: 'Private beach lawn overlooking the Bay of Bengal',
    experienceYears: 11,
    eventsCompleted: 510,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['3,000 Guest Capacity', 'Valet for 300 Cars', 'Direct Beach Access', '4 Luxury Bridal Suites'],
    about: 'Vizag’s premier celebration venue offering unobstructed panoramic ocean vistas, manicured Bermuda grass lawns, and an air-conditioned grand ballroom.',
    packages: [
      {
        name: 'Sunset Lawn Rental',
        price: '₹1,80,000 / day',
        deliverables: ['Lawn access 10 AM to 1 AM', '2 Air-conditioned Bridal Dressing Suites', 'Standard 100kVA Generator & House Lights', 'Dedicated Security & Valet Supervisors'],
      },
    ],
  },
  {
    id: 'rhythm-sufi-band',
    name: 'Sufi & Bollywood Beats Live',
    category: 'entertainment',
    city: 'Delhi NCR',
    rating: 4.97,
    reviewsCount: 118,
    badge: 'Shata Elite',
    startingPrice: '₹55,000',
    priceNum: 55000,
    tagline: 'High-octane Sangeet & Reception live band + celebrity DJ',
    experienceYears: 7,
    eventsCompleted: 290,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['7-Piece Live Band', 'Pioneer Nexus DJ Setup', 'Pyro Cold Sparklers', 'Custom Couple Sangeet Mix'],
    about: 'Blending soulful Sufi melodies with chart-busting Punjabi dhol and Bollywood anthems. Guaranteed to keep all age groups dancing all night.',
    packages: [
      {
        name: 'Sangeet Party Starter',
        price: '₹55,000',
        deliverables: ['Live 5-Piece Band (2.5 hours set)', 'Professional Emcee / Host', 'JBL Sound Rig + Wireless Shure Mics'],
      },
    ],
  },
  {
    id: 'glam-by-priya',
    name: 'Glamour Artistry by Priya',
    category: 'makeup',
    city: 'Hyderabad',
    rating: 4.96,
    reviewsCount: 210,
    badge: 'Super Host',
    startingPrice: '₹28,000',
    priceNum: 28000,
    tagline: 'Airbrush HD bridal glam with signature radiant glass skin',
    experienceYears: 10,
    eventsCompleted: 620,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Temptu Pro HD Airbrush', 'Dior & Huda Beauty Kits', 'Hair Sculpting & Extensions', 'Saree / Lehenga Draping'],
    about: 'Celebrity bridal stylist ensuring brides look naturally radiant, camera-flawless, and confident throughout intense ceremonies and long photo sessions.',
    packages: [
      {
        name: 'Bridal HD Signature',
        price: '₹28,000',
        deliverables: ['Complete HD / Airbrush Bridal Makeup', 'Intricate Floral Hair Styling & Real Baby’s Breath', 'Luxe Mink Eyelashes & Saree Draping', 'Bride Touch-Up Mini Bag'],
      },
    ],
  },
  {
    id: 'henna-by-fatima',
    name: 'Fatima Royal Mehendi Studio',
    category: 'mehendi',
    city: 'Hyderabad',
    rating: 4.91,
    reviewsCount: 165,
    badge: 'Verified Partner',
    startingPrice: '₹15,000',
    priceNum: 15000,
    tagline: 'Intricate Raja-Rani motifs & organic dark stain henna',
    experienceYears: 12,
    eventsCompleted: 480,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['100% Organic Sojat Henna', 'Custom Couple Love Story', 'Team for 50+ Guests', 'Stain Guarantee'],
    about: 'Renowned for razor-sharp micro lines, traditional Marwari figures, Dubai lace patterns, and dark mahogany stains that last 2+ weeks.',
    packages: [
      {
        name: 'Bridal Grandeur (Elbows & Knees)',
        price: '₹15,000',
        deliverables: ['Custom Bridal Portrait Figures (Bride & Groom)', 'Both Hands up to Elbows + Feet to Mid-Calf', 'Herbal Aftercare Oil & Sealant spray'],
      },
    ],
  },
  {
    id: 'shata-curated-planning',
    name: 'Shata Signature Event Directors',
    category: 'planning',
    city: 'Hyderabad',
    rating: 4.99,
    reviewsCount: 310,
    badge: 'Shata Elite',
    startingPrice: '₹1,50,000',
    priceNum: 150000,
    tagline: 'End-to-end royal wedding & corporate summit orchestrators',
    experienceYears: 15,
    eventsCompleted: 750,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Dedicated Event Director', 'Digital RSVP & Guest Portal', 'Vendor Contract Auditing', 'Day-of-Runbook Execution'],
    about: 'Our in-house master planners ensure every light bulb, starter plate, camera flash, and guest car operates in perfect harmonic synchronization.',
    packages: [
      {
        name: 'Day-of Coordination & Symphony',
        price: '₹1,50,000',
        deliverables: ['1 Lead Director + 4 Floor Captains', 'Complete Logistics & Timeline Management', 'Reconciliation of all Vendor Billings', 'Guest Hospitality Desk'],
      },
    ],
  },
];

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
  startingPrice: string;
  basePriceNum: number;
  popularAddons: string[];
  unitType: 'event' | 'day' | 'plate' | 'hour';
  image: string;
  features: string[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'photography',
    title: 'Photography & Cinematic Film',
    shortDesc: 'Pre-weddings, traditional rituals, drone aerials & 4K cinematic highlight teasers.',
    fullDesc: 'Award-winning visual storytellers capturing every raw emotion, sacred ritual, and joyful tear. Equipped with Sony FX3/A7SIII rigs, Master Prime lenses, FPV drones, and fast same-week edits.',
    icon: '📸',
    badge: 'Most Booked',
    startingPrice: '₹45,000',
    basePriceNum: 45000,
    popularAddons: ['4K Drone Coverage', 'Same-Day Edit Video', 'Luxury Leather Album', 'Candid Secondary Team'],
    unitType: 'day',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    features: [
      'Dedicated Candid + Traditional Photographers',
      'Full-frame 4K Cine-Style Teaser & 60-min Film',
      'AI-powered Guest Facial Recognition Gallery',
      'Raw Files Delivered within 48 Hours',
    ],
  },
  {
    id: 'catering',
    title: 'Catering & Gourmet Cuisine',
    shortDesc: 'Nawabi Dum Biryanis, South Indian live counters, Pan-Asian & global live stations.',
    fullDesc: 'Master chefs and culinary artisans delivering unforgettable feasts. From authentic regional Indian delights to multi-cuisine fusion banquets with live chaat, dim sum, and nitrogen dessert stations.',
    icon: '🍽️',
    badge: 'Flavour Guaranteed',
    startingPrice: '₹750 / plate',
    basePriceNum: 750,
    popularAddons: ['Liquid Nitrogen Dessert Bar', 'Live Tandoor & Grill', 'Mocktail Mixologist', 'Kids Dedicated Buffet'],
    unitType: 'plate',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    features: [
      'Complimentary Pre-event Menu Tasting Session',
      'FSSAI-certified 5-Star Kitchen Standards',
      'Trained uniformed hospitality crew & captains',
      'Eco-friendly biodegradable / silver plating options',
    ],
  },
  {
    id: 'decor',
    title: 'Décor & Floral Architecture',
    shortDesc: 'Bespoke themes, floral mandaps, fairy-light tunnels, and stage transformations.',
    fullDesc: 'Transforming ballrooms, open lawns, and ancestral courtyards into breathtaking wonderlands. Exotic imported florals, kinetic lighting, custom stage architecture, and photo-op backdrops.',
    icon: '🌸',
    badge: 'Visual Wonder',
    startingPrice: '₹80,000',
    basePriceNum: 80000,
    popularAddons: ['3D Projection Mapping', 'Tunnel of 10,000 Fairy Lights', 'Imported Dutch Peonies & Orchids', 'Entrance Water Feature'],
    unitType: 'event',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    features: [
      '3D Photorealistic Renderings before Finalizing',
      'Fresh Dutch & Bengaluru Farm-sourced blooms',
      'Custom stage arches, mandap & photobooth setups',
      'On-site structural & lighting engineers',
    ],
  },
  {
    id: 'venues',
    title: 'Venues & Heritage Spaces',
    shortDesc: 'Palaces, 5-star banquet lawns, beach resorts, and luxury convention centres.',
    fullDesc: 'Curated database of premier Indian celebration destinations with transparent date availability, guest capacities (100 to 5,000+), valet parking, and bridal green room facilities.',
    icon: '🏛️',
    badge: 'Exclusive Access',
    startingPrice: '₹1,50,000',
    basePriceNum: 150000,
    popularAddons: ['Bridal Luxury Suite Upgrade', 'Helipad Access', 'Valet Parking Crew (20 drivers)', 'Generator Backup (500kVA)'],
    unitType: 'day',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    features: [
      'Direct Shata Pre-negotiated Tariff Discounts',
      'Air-conditioned indoor halls + open star-lit lawns',
      'Dedicated power backup and noise-curfew compliance',
      'In-house hospitality & concierge teams',
    ],
  },
  {
    id: 'planning',
    title: 'Full Event Management & Planning',
    shortDesc: 'End-to-end orchestration, logistics, guest RSVP tracking, and vendor coordination.',
    fullDesc: 'Leave the chaos behind and cherish every precious moment. Our certified event directors manage timelines, vendor synchronization, licensing, guest logistics, airport shuttles, and crisis response.',
    icon: '📋',
    badge: 'Zero Stress',
    startingPrice: '₹1,20,000',
    basePriceNum: 120000,
    popularAddons: ['Guest Hospitality Desk at Airport', 'Digital WhatsApp RSVP Concierge', 'Celebrity Artist Management', 'Shadow Coordinators for Bride/Groom'],
    unitType: 'event',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    features: [
      'Dedicated Senior Event Director + 6 On-ground Coordinators',
      'Minute-by-minute Run of Show (ROS) Timeline',
      'Full Budget Auditing & Vendor Invoice Reconciliation',
      'Emergency Back-up Plan (Weather, Power, Delay)',
    ],
  },
  {
    id: 'entertainment',
    title: 'Live Entertainment, Bands & DJs',
    shortDesc: 'Celebrity DJs, Sufi rock bands, classical Shehnai maestros & Bollywood choreographers.',
    fullDesc: 'Electrifying sound and stage performances that keep your dance floor packed till 4 AM. Line arrays, laser trussing, Dhol ensembles, LED screen dance floors, and celebrity emcees.',
    icon: '🎸',
    badge: 'High Energy',
    startingPrice: '₹35,000',
    basePriceNum: 35000,
    popularAddons: ['CO2 Cryo Jets & Cold Sparklers', 'LED Interactive Dance Floor', 'Live Punjabi Dhol Troopers (4x)', 'Sangeet Choreography (10 tracks)'],
    unitType: 'event',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    features: [
      'State-of-the-art JBL/L-Acoustics Sound System',
      'Customized Sangeet & Reception Playlists',
      'Licensed Emcees speaking English, Hindi & Regional Languages',
      'Sound engineer on console throughout event',
    ],
  },
  {
    id: 'makeup',
    title: 'Bridal Makeup & Groom Styling',
    shortDesc: 'High-definition Airbrush makeup, hair sculpting, saree draping & pre-bridal spa.',
    fullDesc: 'Internationally trained celebrity artists using top-tier products (Dior, Charlotte Tilbury, MAC, Huda Beauty). Seamless sweat-proof and HD camera-ready perfection lasting 16+ hours.',
    icon: '💄',
    badge: 'Flawless Glow',
    startingPrice: '₹22,000',
    basePriceNum: 22000,
    popularAddons: ['Airbrush HD Upgrade', 'Family Makeup (per head)', 'Groom Beard & Hair Styling', 'Stylist Stay for Look 2 Change'],
    unitType: 'event',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Luxury International Product Kits (100% genuine)',
      'Pre-wedding Skin & Makeup Trial Consultation',
      'Specialist Saree/Lehenga Draping & Hair Extension Artist',
      'On-location touch-up kit provided to bride',
    ],
  },
  {
    id: 'mehendi',
    title: 'Mehendi & Henna Artistry',
    shortDesc: 'Organic Rajasthani bridal henna, intricate Arabic motifs, and guest mehendi squad.',
    fullDesc: '100% natural chemical-free organic henna giving rich, dark burgundy stains. Custom bridal portraits, couple initials, storybook motifs, and speedy artist squads for 100+ guests.',
    icon: '🎨',
    badge: 'Organic & Deep',
    startingPrice: '₹12,000',
    basePriceNum: 12000,
    popularAddons: ['Figure & Portrait Artwork', 'Squad of 4 Guest Henna Artists', 'Clove & Eucalyptus Oil Aftercare Kit', 'Organic Henna Powder Cones (50x)'],
    unitType: 'event',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Chemical-free triple-sifted Sojat Rajasthan Henna',
      'Specialized micro-detailing bridal design',
      'Guaranteed rich mahogany dark stain',
      'Fast application speed (Bride in under 3.5 hours)',
    ],
  },
];

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  eventType: string;
  date: string;
  quote: string;
  rating: number;
  avatar: string;
  verifiedVendor: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Ananya & Siddharth Rao',
    role: 'Couple (3-Day Royal Wedding)',
    city: 'Hyderabad',
    eventType: 'Destination Wedding at Taj Falaknuma',
    date: 'February 2026',
    quote: 'Shata transformed what felt like an impossible 800-guest wedding into the most joyous 3 days of our lives. The photo team delivered teasers in 24 hours, and the catering tasting session was spot-on.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verifiedVendor: 'Pixels by Arjun & Royal Feast',
  },
  {
    id: '2',
    author: 'Vikramaditya Kulkarni',
    role: 'VP Corporate Relations, TechVanguard',
    city: 'Bengaluru',
    eventType: 'Annual Tech Summit (1,200 Attendees)',
    date: 'January 2026',
    quote: 'Booking 6 separate vendors across audio-visuals, stage design, VIP catering, and live jazz through Shata’s single invoice system saved our logistics committee over 80 hours.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verifiedVendor: 'Shata Signature Event Directors',
  },
  {
    id: '3',
    author: 'Sneha & Rohan Reddy',
    role: 'Bride & Groom (Beach Sangeet & Reception)',
    city: 'Visakhapatnam',
    eventType: 'Oceanfront Sunset Vows',
    date: 'March 2026',
    quote: 'We lived in Chicago while planning our Vizag wedding. Shata’s live event tracker, AI budget estimator, and verified vendor WhatsApp coordination made the entire oceanfront setup effortless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    verifiedVendor: 'The Grand Oceanfront & Bloom Luxe',
  },
];

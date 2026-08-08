export interface City {
  id: string;
  name: string;
  state: string;
  isPopular: boolean;
  vendorCount: number;
  venueCount: number;
  tagline: string;
  image: string;
}

export const CITIES: City[] = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    isPopular: true,
    vendorCount: 1420,
    venueCount: 310,
    tagline: 'Palatial Nawabi weddings & lavish conventions',
    image: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    isPopular: true,
    vendorCount: 1680,
    venueCount: 420,
    tagline: 'Lush garden lawns & high-tech corporate summits',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam (Vizag)',
    state: 'Andhra Pradesh',
    isPopular: true,
    vendorCount: 650,
    venueCount: 140,
    tagline: 'Scenic beach weddings & coastal celebrations',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    isPopular: true,
    vendorCount: 2200,
    venueCount: 580,
    tagline: 'Iconic sea-facing venues & celebrity soirees',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi NCR',
    state: 'Delhi / Haryana',
    isPopular: true,
    vendorCount: 2850,
    venueCount: 750,
    tagline: 'Grand royal farmhouses & heritage galas',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    isPopular: true,
    vendorCount: 980,
    venueCount: 260,
    tagline: 'Traditional temple weddings & coastal resorts',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    isPopular: true,
    vendorCount: 840,
    venueCount: 290,
    tagline: 'World-famous royal palaces & heritage forts',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    isPopular: true,
    vendorCount: 520,
    venueCount: 180,
    tagline: 'Destination sunset vows & bohemian parties',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    isPopular: false,
    vendorCount: 740,
    venueCount: 190,
    tagline: 'Colonial heritage mansions & grand cultural fests',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    isPopular: false,
    vendorCount: 890,
    venueCount: 220,
    tagline: 'Hilltop resorts & contemporary banquet lawns',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
];

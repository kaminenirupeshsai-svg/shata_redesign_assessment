export interface PartnerLead {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  city: string;
  eventType: 'Wedding' | 'Corporate' | 'Reception' | 'Sangeet' | 'Birthday Gala';
  eventDate: string;
  budgetEstimate: string;
  status: 'New Inquiry' | 'Proposal Sent' | 'Confirmed Booking' | 'Completed';
  serviceRequired: string;
  guestCount: number;
  createdDate: string;
}

export const INITIAL_LEADS: PartnerLead[] = [
  {
    id: 'LEAD-8041',
    clientName: 'Dr. Aarav & Meera Sen',
    phone: '+91 98490 23145',
    email: 'aarav.sen@hospital.org',
    city: 'Hyderabad',
    eventType: 'Wedding',
    eventDate: '18 Nov 2026',
    budgetEstimate: '₹4,80,000',
    status: 'New Inquiry',
    serviceRequired: 'Photography + Pre-wedding + Cine Film',
    guestCount: 650,
    createdDate: '2 hours ago',
  },
  {
    id: 'LEAD-8038',
    clientName: 'Kiranmai & Harsha Vardhan',
    phone: '+91 97004 88120',
    email: 'harsha.v@techcorp.io',
    city: 'Visakhapatnam',
    eventType: 'Reception',
    eventDate: '04 Dec 2026',
    budgetEstimate: '₹2,50,000',
    status: 'Proposal Sent',
    serviceRequired: 'Gourmet Catering & Live Seafood Bar',
    guestCount: 400,
    createdDate: 'Yesterday',
  },
  {
    id: 'LEAD-8032',
    clientName: 'Infosys Leadership Gala',
    phone: '+91 80 2852 0261',
    email: 'events@infosys.com',
    city: 'Bengaluru',
    eventType: 'Corporate',
    eventDate: '25 Oct 2026',
    budgetEstimate: '₹8,20,000',
    status: 'Confirmed Booking',
    serviceRequired: 'Full Event Production & 3D Stage Décor',
    guestCount: 1200,
    createdDate: '3 days ago',
  },
  {
    id: 'LEAD-8025',
    clientName: 'Kavita Chawla',
    phone: '+91 98112 55901',
    email: 'kavita.c@fashionhouse.com',
    city: 'Delhi NCR',
    eventType: 'Birthday Gala',
    eventDate: '12 Sep 2026',
    budgetEstimate: '₹1,40,000',
    status: 'Completed',
    serviceRequired: 'Live Sufi Band & Lighting Rig',
    guestCount: 180,
    createdDate: '2 weeks ago',
  },
];

export interface PartnerAnalytics {
  totalRevenue: string;
  revenueGrowth: string;
  activeInquiries: number;
  confirmedGigs: number;
  conversionRate: string;
  ratingAverage: number;
  totalReviews: number;
  payoutPending: string;
}

export const PARTNER_ANALYTICS: PartnerAnalytics = {
  totalRevenue: '₹28,45,000',
  revenueGrowth: '+34.8% vs last month',
  activeInquiries: 14,
  confirmedGigs: 28,
  conversionRate: '68.4%',
  ratingAverage: 4.96,
  totalReviews: 184,
  payoutPending: '₹3,20,000',
};

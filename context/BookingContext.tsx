'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SelectedServiceItem {
  id: string;
  name: string;
  category: string;
  tier: 'Silver' | 'Gold' | 'Royal Platinum';
  estimatedCost: number;
  notes?: string;
}

export interface BookingState {
  city: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  totalEstimatedBudget: number;
  services: SelectedServiceItem[];
  savedVendors: string[]; // Vendor IDs
  activeEventId: string;
  eventStatusStep: number; // 1: Planning, 2: Matched, 3: Confirmed, 4: Day-of Ready
}

interface BookingContextType {
  state: BookingState;
  setCity: (city: string) => void;
  setEventType: (type: string) => void;
  setEventDate: (date: string) => void;
  setGuestCount: (count: number) => void;
  addService: (service: SelectedServiceItem) => void;
  removeService: (serviceId: string) => void;
  toggleVendorSave: (vendorId: string) => void;
  calculateTotalEstimate: () => number;
  resetEstimator: () => void;
}

const defaultBookingState: BookingState = {
  city: 'Hyderabad',
  eventType: 'Wedding & Sangeet Gala',
  eventDate: '2026-11-18',
  guestCount: 500,
  totalEstimatedBudget: 585000,
  services: [
    {
      id: 'photography-gold',
      name: 'Photography & Cine Film (Gold Package)',
      category: 'photography',
      tier: 'Gold',
      estimatedCost: 65000,
    },
    {
      id: 'catering-regal',
      name: 'Royal Feast Catering (500 Guests @ ₹850/plate)',
      category: 'catering',
      tier: 'Gold',
      estimatedCost: 425000,
    },
    {
      id: 'decor-dream',
      name: 'Pastel Dream Mandap & Lighting',
      category: 'decor',
      tier: 'Silver',
      estimatedCost: 95000,
    },
  ],
  savedVendors: ['pixels-by-arjun', 'royal-feast-co'],
  activeEventId: 'SHT-2026-HYD-994',
  eventStatusStep: 2,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BookingState>(defaultBookingState);

  useEffect(() => {
    const saved = localStorage.getItem('shata_booking_state');
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved booking state', e);
      }
    }
  }, []);

  const saveState = (newState: BookingState) => {
    setState(newState);
    localStorage.setItem('shata_booking_state', JSON.stringify(newState));
  };

  const setCity = (city: string) => {
    saveState({ ...state, city });
  };

  const setEventType = (eventType: string) => {
    saveState({ ...state, eventType });
  };

  const setEventDate = (eventDate: string) => {
    saveState({ ...state, eventDate });
  };

  const setGuestCount = (guestCount: number) => {
    // Recalculate catering if present
    const updatedServices = state.services.map((item) => {
      if (item.category === 'catering') {
        const perPlate = item.tier === 'Silver' ? 650 : item.tier === 'Gold' ? 850 : 1400;
        return {
          ...item,
          name: `Royal Feast Catering (${guestCount} Guests @ ₹${perPlate}/plate)`,
          estimatedCost: guestCount * perPlate,
        };
      }
      return item;
    });

    const total = updatedServices.reduce((acc, curr) => acc + curr.estimatedCost, 0);
    saveState({
      ...state,
      guestCount,
      services: updatedServices,
      totalEstimatedBudget: total,
    });
  };

  const addService = (service: SelectedServiceItem) => {
    const exists = state.services.some((s) => s.id === service.id);
    let updated = exists
      ? state.services.map((s) => (s.id === service.id ? service : s))
      : [...state.services, service];

    const total = updated.reduce((acc, curr) => acc + curr.estimatedCost, 0);
    saveState({
      ...state,
      services: updated,
      totalEstimatedBudget: total,
    });
  };

  const removeService = (serviceId: string) => {
    const updated = state.services.filter((s) => s.id !== serviceId);
    const total = updated.reduce((acc, curr) => acc + curr.estimatedCost, 0);
    saveState({
      ...state,
      services: updated,
      totalEstimatedBudget: total,
    });
  };

  const toggleVendorSave = (vendorId: string) => {
    const exists = state.savedVendors.includes(vendorId);
    const savedVendors = exists
      ? state.savedVendors.filter((id) => id !== vendorId)
      : [...state.savedVendors, vendorId];
    saveState({ ...state, savedVendors });
  };

  const calculateTotalEstimate = () => {
    return state.services.reduce((acc, curr) => acc + curr.estimatedCost, 0);
  };

  const resetEstimator = () => {
    saveState(defaultBookingState);
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        setCity,
        setEventType,
        setEventDate,
        setGuestCount,
        addService,
        removeService,
        toggleVendorSave,
        calculateTotalEstimate,
        resetEstimator,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

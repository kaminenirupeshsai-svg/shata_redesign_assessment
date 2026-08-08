import { AIPlannerModal } from '@/components/concierge/AIPlannerModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shata AI Event Concierge & Intelligent Celebration Curator',
  description: 'AI-assisted wedding and event planning. Instant multi-day itineraries, exact percentage budget allocations, and verified Indian vendor pairings.',
  keywords: 'AI event planner, wedding planner AI, Hyderabad wedding itinerary, Shata concierge',
};

export default function ConciergePage() {
  return (
    <main className="min-h-screen pt-20">
      <AIPlannerModal />
    </main>
  );
}

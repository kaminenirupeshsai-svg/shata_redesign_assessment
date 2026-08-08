import { MyEventsPageContent } from '@/components/home/MyEventsView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Events Dashboard & Live Milestone Tracker | Shata',
  description: 'Track your event countdown, vendor assignments, run-of-show timeline, and tax invoices.',
  keywords: 'event dashboard, wedding milestone tracker, Shata my events',
};

export default function MyEventsPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <MyEventsPageContent />
    </main>
  );
}

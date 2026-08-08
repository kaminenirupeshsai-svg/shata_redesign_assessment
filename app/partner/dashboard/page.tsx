import { PartnerDashboardView } from '@/components/partner/PartnerPortal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shata Partner OS | Vendor CRM & Lead Management Pipeline',
  description: 'Manage active wedding inquiries, send instant proposals, and track escrow payouts with Shata Partner OS.',
  keywords: 'vendor CRM, event lead management, photographer portal, catering pipeline, Shata Partner',
};

export default function PartnerDashboardPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <PartnerDashboardView />
    </main>
  );
}

import { BudgetCalculator } from '@/components/estimator/BudgetCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Event Budget Studio & Quotation Estimator | Shata',
  description: 'Calculate live itemized event budgets for photography, catering, décor, venues, and bands across 76+ Indian cities with zero hidden fees.',
  keywords: 'event budget calculator, wedding cost estimator India, catering plate price, photography packages, Shata',
};

export default function EstimatorPage() {
  return (
    <main className="min-h-screen pt-20">
      <BudgetCalculator />
    </main>
  );
}

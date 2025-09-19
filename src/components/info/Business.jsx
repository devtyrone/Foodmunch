import React from 'react';
import { Link } from 'react-router-dom';

const Business = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Foodmunch for Business</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
            Centralized food ordering and perks for teams, offices, and events. Streamline billing,
            set allowances, and keep your people happy with great meals.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-bold mb-2">Centralized Billing</h3>
              <p className="text-gray-600 dark:text-gray-300">One invoice, multiple teams. Export reports and reconcile easily.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-bold mb-2">Allowances & Budgets</h3>
              <p className="text-gray-600 dark:text-gray-300">Set monthly limits and per-diem rules for staff or departments.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-bold mb-2">Curated Vendors</h3>
              <p className="text-gray-600 dark:text-gray-300">Access top-rated restaurants with business-grade SLAs.</p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <Link to="/pricing" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">View Pricing</Link>
            <Link to="/contact#send-message" className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold">Contact Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;

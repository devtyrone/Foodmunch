import React from 'react';

const Pricing = () => {
  const plans = [
    { name: 'Starter', price: '₦0', desc: 'Best for trying things out', features: ['Browse restaurants', 'Basic search', 'Email support'] },
    { name: 'Pro', price: '₦2,500/mo', desc: 'Power-user features', features: ['Priority support', 'Order scheduling', 'Exclusive deals'] },
    { name: 'Teams', price: '₦9,900/mo', desc: 'For small teams & offices', features: ['Multi-user billing', 'Admin controls', 'Monthly reports'] },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Pricing</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10">Simple, transparent plans that grow with you.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold mb-1">{p.name}</h2>
                <div className="text-3xl font-extrabold mb-2">{p.price}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
                <ul className="space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

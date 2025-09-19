import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Last updated: January 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Foodmunch's services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
            <p className="mb-4">
              Foodmunch provides a platform for ordering food from local restaurants. You agree to use 
              our service only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You must be at least 18 years old to use our service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to provide accurate and complete information</li>
              <li>You will not use the service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Orders and Payment</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All orders are subject to availability and confirmation</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be made at the time of ordering</li>
              <li>We reserve the right to refuse or cancel orders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
            <p className="mb-4">
              We strive to deliver orders within the estimated time frame, but delivery times are 
              approximate and may vary due to factors beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cancellation and Refunds</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Orders can be cancelled within 5 minutes of placement</li>
              <li>Refunds are processed on a case-by-case basis</li>
              <li>We are not responsible for orders cancelled by restaurants</li>
              <li>Refunds may take 3-5 business days to process</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Foodmunch shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p>Email: legal@foodmunch.com</p>
              <p>Phone: +234 903 702 3252</p>
              <p>Address: Lagos, Nigeria</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

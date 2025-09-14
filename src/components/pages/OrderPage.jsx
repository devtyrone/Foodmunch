import { useUser } from '@clerk/clerk-react';
import React from 'react';

function OrderPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  const handlePaystackPayment = async () => {
    if (!isSignedIn || !user) return;  // Ensure user is logged in

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`,  // Add to .env
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.primaryEmailAddress?.emailAddress,
        amount: 500000,  // NGN 5000 in kobo
      }),
    });
    const { data } = await response.json();
    window.location.href = data.authorization_url;  // Redirect to Paystack
  };

  if (!isLoaded) {
    return <div>Loading user data...</div>; // Or a loading spinner
  }

  return (
    <div>
      {isSignedIn ? (
        <>
          <p>Welcome, {user?.firstName}!</p>
          <button onClick={handlePaystackPayment}>Pay for Meal</button>
        </>
      ) : (
        <p>Please sign in to order.</p>
      )}
    </div>
  );
}

export default OrderPage;


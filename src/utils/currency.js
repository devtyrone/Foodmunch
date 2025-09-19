// src/utils/currency.js
// Utility to format amounts in Nigerian Naira with thousand separators
// Usage: formatNGN(1234.5) => "₦1,234.50"

export const formatNGN = (amount) => {
  if (isNaN(amount)) return '₦0.00';
  try {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(amount));
  } catch (e) {
    // Fallback if Intl is not available
    const n = Number(amount).toFixed(2);
    const parts = n.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `₦${parts.join('.')}`;
  }
};

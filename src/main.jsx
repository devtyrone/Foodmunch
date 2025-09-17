import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react' // Import ClerkProvider

// Import your Publishable Key from .env
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error('Missing Publishable Key');  // Prevents app from running without it
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ClerkProvider publishableKey={clerkPublishableKey}> {/* Wrap with ClerkProvider */}
          <App />
        </ClerkProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PricingSection />
      <ComparisonTable />
      <Footer />
    </div>
  );
}

export default App;

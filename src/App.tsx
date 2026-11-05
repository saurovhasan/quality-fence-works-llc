/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Estimator, EstimateData } from './components/Estimator';
import { Craftsmanship } from './components/Craftsmanship';
import { ServiceArea } from './components/ServiceArea';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { Project } from './data/projects';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEstimate, setSelectedEstimate] = useState<EstimateData | null>(null);
  const [selectedServiceName, setSelectedServiceName] = useState<string | null>(null);

  const handleOpenEstimateModal = () => {
    setSelectedEstimate(null);
    setSelectedServiceName(null);
    setModalOpen(true);
  };

  const handleSelectEstimate = (data: EstimateData) => {
    setSelectedEstimate(data);
    setSelectedServiceName(null);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedEstimate(null);
    setSelectedServiceName(serviceName);
    setModalOpen(true);
  };

  const handleRequestProjectQuote = (project: Project) => {
    setSelectedEstimate(null);
    setSelectedServiceName(`${project.categoryLabel}: ${project.title}`);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-stone-900 selection:bg-amber-500 selection:text-stone-950">
      {/* Primary Top Bar (Double-row matching demo) */}
      <Navbar onOpenEstimateModal={handleOpenEstimateModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section (Royal blue sky, ratings, chevron-cut photo frame) */}
        <Hero onOpenEstimateModal={handleOpenEstimateModal} />

        {/* About Us (25+ years badge, contractor photo, checkmark list) */}
        <AboutUs onOpenEstimateModal={handleOpenEstimateModal} />

        {/* Services Section (6-card grid with floating circular icon badge) */}
        <Services onSelectService={handleSelectService} />

        {/* Process Section (Step-by-step with gold badges and image) */}
        <Process onOpenEstimateModal={handleOpenEstimateModal} />

        {/* Case Studies Gallery (Dark background, filter pills, 12 real photos) */}
        <Gallery onRequestProjectQuote={handleRequestProjectQuote} />

        {/* Instant Cost & Material Estimator */}
        <Estimator onSelectEstimate={handleSelectEstimate} />

        {/* Construction Standards & Integrity Audit */}
        <Craftsmanship />

        {/* Service Area Coverage & Town Directory */}
        <ServiceArea />

        {/* Direct Contact & Free On-Site Measurement Form */}
        <ContactSection />
      </main>

      {/* Quiet Professional Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <EstimateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialEstimateData={selectedEstimate}
        initialServiceName={selectedServiceName}
      />
    </div>
  );
}

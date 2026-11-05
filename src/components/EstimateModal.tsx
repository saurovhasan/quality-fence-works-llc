import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, MapPin, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';
import { EstimateData } from './Estimator';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEstimateData?: EstimateData | null;
  initialServiceName?: string | null;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialEstimateData,
  initialServiceName,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cityZip, setCityZip] = useState('');
  const [service, setService] = useState('PVC Vinyl Privacy Fence');
  const [footage, setFootage] = useState('');
  const [timeframe, setTimeframe] = useState('Within 2 weeks');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync initial estimate or service when opened
  useEffect(() => {
    if (initialEstimateData) {
      setService(initialEstimateData.materialName);
      setFootage(`${initialEstimateData.footage} ft (${initialEstimateData.height})`);
      setNotes(
        `Calculated Ballpark: $${initialEstimateData.estimatedLow.toLocaleString()} – $${initialEstimateData.estimatedHigh.toLocaleString()} with ${initialEstimateData.walkGates} walk gate(s) and ${initialEstimateData.driveGates} drive gate(s).`
      );
    } else if (initialServiceName) {
      setService(initialServiceName);
    }
  }, [initialEstimateData, initialServiceName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage('Please provide your name and phone number so Antonio can contact you.');
      return;
    }

    // Phone validation
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setCityZip('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                Zero-Obligation Contractor Estimate
              </div>
              <h3 className="text-2xl font-extrabold text-stone-950 tracking-tight">
                Schedule Your Free On-Site Measurement
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Antonio and our crew will inspect your property lines, assess slope and gate positioning, and provide a firm, itemized written proposal.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 mb-4 rounded bg-red-50 border border-red-200 text-xs text-red-700 font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Robert Davis"
                    className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(703) 000-0000"
                    className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    City & Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={cityZip}
                    onChange={(e) => setCityZip(e.target.value)}
                    placeholder="e.g. Ashburn 20147"
                    className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Property Street Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address for on-site measurement"
                  className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Project Type
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50 font-medium"
                  >
                    <option value="PVC Vinyl Privacy Fence">PVC Vinyl Privacy</option>
                    <option value="Custom Wood & Shadowbox">Custom Wood Privacy / Shadowbox</option>
                    <option value="Estate 4-Board & Wire Mesh">Estate 4-Board & Pet Mesh</option>
                    <option value="Ornamental Black Aluminum">Ornamental Black Aluminum</option>
                    <option value="Chain Link Fence">Chain Link Fencing</option>
                    <option value="Custom Deck & Stairs">Custom Deck / Stairs</option>
                    <option value="Patio & Hardscaping">Patio & Hardscaping</option>
                    <option value="Gate Installation or Repair">Gate Repair / Modification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Estimated Linear Footage
                  </label>
                  <input
                    type="text"
                    value={footage}
                    onChange={(e) => setFootage(e.target.value)}
                    placeholder="e.g. 150 ft or Not Sure"
                    className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Yard Details / Gates / HOA Notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about gate locations, slopes, dog containment, or existing fence removal..."
                  className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black uppercase tracking-wider text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>SCHEDULE FREE ON-SITE MEASUREMENT</span>
                  <span className="text-base font-black">↗</span>
                </button>
              </div>

              <div className="text-center pt-2 text-xs text-stone-500">
                Prefer immediate telephone service? Call Antonio directly at{' '}
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-stone-900 underline">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-stone-950 mb-2">
              Estimate Request Received!
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
              Thank you, <strong>{fullName}</strong>. Antonio will review your project details and call you at{' '}
              <strong className="text-stone-900">{phone}</strong> within 24 hours to confirm your on-site measurement time.
            </p>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-left text-xs space-y-2 mb-6">
              <div className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                Your Request Summary:
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Project:</span>
                <span className="font-bold text-stone-900">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Location:</span>
                <span className="font-bold text-stone-900">{cityZip || 'Northern Virginia'}</span>
              </div>
              {footage && (
                <div className="flex justify-between">
                  <span className="text-stone-500">Estimated Footage:</span>
                  <span className="font-bold text-stone-900">{footage}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 py-3 px-4 rounded-md bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Antonio: {COMPANY_INFO.phoneFormatted}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-4 rounded-md border border-stone-300 text-stone-700 font-bold text-xs hover:bg-stone-100 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

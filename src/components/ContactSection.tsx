import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('PVC Vinyl Privacy');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Contact Info & Credentials */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-700 bg-stone-900 text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>FREE ON-SITE QUOTES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-heading mb-4">
              GET AN HONEST, EXACT QUOTE FOR YOUR YARD
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
              No pushy sales reps or corporate call centers. You will speak directly with Antonio. We measure your property boundaries, inspect grade transitions, and provide a clear written contract.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-lg bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-amber-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-stone-400">Direct Telephone</span>
                  <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-mono">
                    {COMPANY_INFO.phoneFormatted}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3.5 p-4 rounded-lg bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-stone-700 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="block text-xs font-semibold text-stone-400">Direct Contractor Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-lg bg-stone-800/50 border border-stone-700/50">
                <div className="w-10 h-10 rounded-md bg-stone-700 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-stone-400">Working Hours</span>
                  <span className="text-xs text-stone-200">
                    {COMPANY_INFO.serviceHours} · Sunday By Appointment
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Full Virginia Contractor General Liability & Workers Comp Coverage</span>
            </div>
          </div>

          {/* Right: Inline Contact Card */}
          <div className="lg:col-span-7 bg-white text-stone-900 p-6 sm:p-8 rounded-lg shadow-xl border border-stone-200">
            {!submitted ? (
              <div>
                <h3 className="text-xl font-bold text-stone-950 mb-1">
                  Request Free On-Site Measurement
                </h3>
                <p className="text-xs text-stone-500 mb-6">
                  Fill out your details below and Antonio will contact you within 24–48 hours to schedule your measurement.
                </p>

                {error && (
                  <div className="p-3 mb-4 rounded bg-red-50 border border-red-200 text-xs text-red-700 font-semibold">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Smith"
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
                        placeholder="(703) 555-0123"
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
                        placeholder="yourname@gmail.com"
                        className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1">
                        Town / Community in NoVA
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Ashburn, Chantilly, Fairfax"
                        className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Service Desired
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                    >
                      <option value="PVC Vinyl Privacy">PVC Vinyl Privacy (Low Maintenance)</option>
                      <option value="Custom Wood & Shadowbox">Custom Wood Privacy / Shadowbox / Picket</option>
                      <option value="Estate 4-Board & Wire Mesh">Estate 4-Board & Pet Mesh</option>
                      <option value="Black Ornamental Aluminum">Black Ornamental Aluminum (Pool Code)</option>
                      <option value="Chain Link System">Black Vinyl or Galvanized Chain Link</option>
                      <option value="Custom Deck & Stairs">Custom Deck / Patio Construction</option>
                      <option value="Fence or Gate Repair">Fence or Gate Repair / Replacement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Project Notes / Approximate Footage
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Approx 160 ft backyard with 1 single walk gate and 1 double gate for mower..."
                      className="w-full px-3 py-2 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black uppercase tracking-wider text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>SEND ON-SITE ESTIMATE REQUEST</span>
                    <span className="text-base font-black">↗</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-950 mb-1">
                  Thank You, {fullName}!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto mb-5">
                  Antonio has received your request for <strong>{service}</strong> in {city || 'Northern Virginia'}. He will call you shortly at <strong>{phone}</strong> to confirm the exact date and time.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setNotes('');
                  }}
                  className="px-4 py-2 rounded border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-50"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

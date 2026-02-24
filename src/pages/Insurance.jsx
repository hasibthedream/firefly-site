import React from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="3" fill="#3b82f6" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <path d="M16 18 L14 25 L16 23 L18 25 Z" fill="#3b82f6" opacity="0.6"/>
              </svg>
              <span className="text-2xl font-light tracking-wide text-white">Firefly</span>
            </a>
            <div className="hidden md:flex items-center space-x-10">
              <a href="/#what-we-do" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">How It Works</a>
              <a href="/#industries" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Industries</a>
              <a href="mailto:zarek@fireflythermal.com?subject=Insurance%20Inspection%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 text-blue-400 text-sm bg-blue-950/30 px-4 py-2 border border-blue-900/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Insurance & Risk Assessment</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              See the risks
              <span className="block text-blue-400 mt-2">before you underwrite them</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Visual inspections miss the hidden defects that become $50K–$500K claims. Thermal imaging reveals what's really inside the walls, roof, and systems before you sign the policy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:zarek@fireflythermal.com?subject=Insurance%20Inspection%20Request"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg transition-all group"
              >
                Schedule Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#what-we-find"
                className="inline-flex items-center justify-center border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 text-lg transition-all"
              >
                What We Find
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 px-6 lg:px-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Visual inspections
                <span className="block text-blue-400 mt-2">only tell half the story</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                A property can look structurally sound on the outside while harboring active moisture intrusion, failing electrical systems, and degraded insulation. By the time a claim surfaces, the damage has been growing for months or years.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Moisture Is Silent</h3>
                  <p className="text-gray-500">Active moisture intrusion behind walls and in roofing systems shows no visual signs until mold and structural damage are already severe</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Electrical Failures Don't Announce Themselves</h3>
                  <p className="text-gray-500">Overloaded circuits and failing connections run hot for months before igniting — thermal imaging catches them first</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Claims Are Priced Wrong</h3>
                  <p className="text-gray-500">Without subsurface data, underwriters price risk on incomplete information — leading to mispriced premiums and unexpected losses</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$500K</div>
                <div className="text-xl mb-2">Maximum claim prevented</div>
                <p className="text-gray-500">
                  Large commercial moisture and fire damage claims that thermal inspection can identify before policy inception
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$50K</div>
                <div className="text-xl mb-2">Average undetected moisture claim</div>
                <p className="text-gray-500">
                  Typical commercial property water damage claim once moisture reaches structural elements and interior systems
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-green-400 mb-4">48h</div>
                <div className="text-xl mb-2">Pre-binding assessment turnaround</div>
                <p className="text-gray-500">
                  Fast enough to complete thermal assessment before policy inception on most commercial properties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Find */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" id="what-we-find">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Hidden risks thermal
              <span className="block text-blue-400 mt-2">inspection reveals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Active Moisture Intrusion',
                desc: 'Wet insulation, saturated roofing systems, and water infiltration paths invisible to the naked eye — all identifiable before they become claims.',
              },
              {
                title: 'Electrical Fire Hazards',
                desc: 'Overloaded circuits, failing breakers, and hot connections in panels and switchgear that are on a direct path to ignition.',
              },
              {
                title: 'Roof System Condition',
                desc: 'Moisture trapped in insulation, membrane delamination, and structural degradation — the most common source of large commercial property claims.',
              },
              {
                title: 'HVAC & Mechanical Failures',
                desc: 'Rooftop units and building mechanicals with overheating components weeks away from failure and consequential water or fire damage.',
              },
              {
                title: 'Building Envelope Deficiencies',
                desc: 'Air and moisture infiltration through wall assemblies, windows, and penetrations accelerating insulation degradation and mold risk.',
              },
              {
                title: 'Plumbing System Issues',
                desc: 'Slow leaks, failed pipe insulation, and radiant heat anomalies that indicate active water damage before it surfaces visually.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-900 border border-gray-800 p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-light mb-2">{title}</h3>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Pre-binding risk intelligence</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Fast enough to fit inside your underwriting workflow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Property Intake', body: 'Share address and policy details — we handle access coordination and scheduling with the property owner' },
              { n: '2', title: 'Thermal Survey', body: 'Exterior drone survey plus interior handheld imaging captures every system and envelope component' },
              { n: '3', title: 'AI Analysis', body: 'Machine learning classifies each finding by severity and estimated remediation cost for underwriting input' },
              { n: '4', title: '48h Report', body: 'Carrier-ready report with thermal imagery, risk ratings, and findings summary formatted for your workflow' },
            ].map(({ n, title, body }) => (
              <div key={n} className="border-l-2 border-blue-900 pl-6">
                <div className="text-4xl font-light text-blue-400 mb-4">{n}</div>
                <h3 className="text-xl font-light mb-3">{title}</h3>
                <p className="text-gray-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Firefly */}
      <section className="py-32 px-6 lg:px-8 border-y border-gray-900 bg-gradient-to-b from-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Why insurance carriers
              <span className="block text-blue-400 mt-2">choose Firefly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">$2M</div>
              <div className="text-xl mb-2">Liability Insurance</div>
              <p className="text-gray-400">Fully insured on every property assessment</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">48h</div>
              <div className="text-xl mb-2">Report Turnaround</div>
              <p className="text-gray-400">Pre-binding assessments delivered before policy inception</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">100%</div>
              <div className="text-xl mb-2">Non-Invasive</div>
              <p className="text-gray-400">No property damage, no intrusive access, no liability exposure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Price risk on
            <span className="block text-blue-400 mt-2">complete information</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Schedule a discovery call to discuss integrating thermal assessment into your underwriting process
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:zarek@fireflythermal.com?subject=Insurance%20Inspection%20Request"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 text-lg transition-all group"
            >
              Schedule Assessment
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:7632280790"
              className="inline-flex items-center justify-center border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-10 py-5 text-lg transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              (763) 228-0790
            </a>
          </div>

          <p className="text-sm text-gray-500">Pilot program pricing available for carrier partnerships</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="3" fill="#3b82f6"/>
              <path d="M16 18 L14 25 L16 23 L18 25 Z" fill="#3b82f6" opacity="0.6"/>
            </svg>
            <span className="text-lg font-light text-white">Firefly</span>
          </div>
          <div className="text-sm text-gray-500">© 2026 Firefly. Thermal intelligence platform.</div>
        </div>
      </footer>
    </div>
  );
}

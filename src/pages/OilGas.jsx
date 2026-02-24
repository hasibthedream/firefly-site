import React from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export default function OilGasPage() {
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
              <a href="mailto:zarek@fireflythermal.com?subject=Oil%20%26%20Gas%20Inspection%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
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
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <span>Oil & Gas Operations</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Thermal Inspection Without
              <span className="block text-blue-400 mt-2">Shutting Down</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Traditional inspection requires scaffolding, permits, and shutdowns. Ours requires none of the above. Full asset survey from safe standoff distance in hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:zarek@fireflythermal.com?subject=Oil%20%26%20Gas%20Inspection%20Request"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg transition-all group"
              >
                Schedule Inspection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#critical-areas"
                className="inline-flex items-center justify-center border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 text-lg transition-all"
              >
                Critical Areas
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
                Conventional inspection
                <span className="block text-blue-400 mt-2">creates the risk it's meant to prevent</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Sending personnel onto active pipelines, tanks, and flare structures is expensive, slow, and dangerous. By the time traditional inspection cycles complete, equipment has already degraded — or worse, failed.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Shutdown Costs Accumulate</h3>
                  <p className="text-gray-500">Every planned inspection requires downtime. Unplanned failures cost 10–100X more than the inspection itself.</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Personnel Risk</h3>
                  <p className="text-gray-500">Confined space entry, elevated access, and proximity to active equipment puts workers in harm's way unnecessarily.</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Thermal Anomalies Are Invisible</h3>
                  <p className="text-gray-500">Insulation failures, hot bearings, and overheating valves give no visible warning until catastrophic failure is imminent.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$100K+</div>
                <div className="text-xl mb-2">Cost per hour of unplanned downtime</div>
                <p className="text-gray-500">
                  Unplanned failures at processing facilities often exceed six figures per hour when factoring labor, lost throughput, and emergency repairs
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">30–60</div>
                <div className="text-xl mb-2">Days early warning window</div>
                <p className="text-gray-500">
                  Thermal signatures of bearing failure, insulation breakdown, and valve leakage are detectable weeks before visible damage appears
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-green-400 mb-4">0</div>
                <div className="text-xl mb-2">Shutdowns required for inspection</div>
                <p className="text-gray-500">
                  Drone-based thermal surveys operate from safe standoff distance with no permits, scaffolding, or operational interruption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Areas */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" id="critical-areas">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              What we inspect
            </h2>
            <p className="text-xl text-gray-400">
              Every major failure point in upstream, midstream, and downstream operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pipeline Integrity',
                desc: 'Insulation voids, corrosion under insulation (CUI), and heat trace failures along active lines without requiring contact or shutdown.',
              },
              {
                title: 'Rotating Equipment',
                desc: 'Pumps, compressors, and motors showing elevated bearing temperatures 30–60 days before mechanical failure.',
              },
              {
                title: 'Storage Tanks',
                desc: 'Shell temperature gradients revealing product stratification, foam deterioration, roof seal failures, and structural hot spots.',
              },
              {
                title: 'Pressure Vessels & Heat Exchangers',
                desc: 'Refractory degradation, fouling patterns, and tube failures visible through thermal differential without entry.',
              },
              {
                title: 'Electrical Infrastructure',
                desc: 'Switchgear, transformers, and motor control centers with overheating connections creating fire and failure risk.',
              },
              {
                title: 'Flare Systems',
                desc: 'Thermal profiling of flare tips, knock-out drums, and associated piping from safe operating distance.',
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
            <h2 className="text-4xl md:text-5xl font-light mb-6">No shutdowns. No scaffolding. No delays.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              From first contact to actionable report in 48 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Site Coordination', body: '15-minute call to map assets, access constraints, and operational windows' },
              { n: '2', title: 'Thermal Survey', body: 'Autonomous drone flight captures complete asset coverage from safe standoff distance' },
              { n: '3', title: 'AI Analysis', body: 'Machine learning flags anomalies, classifies severity, and correlates findings across assets' },
              { n: '4', title: '48h Report', body: 'GPS-tagged findings, severity rankings, failure probability estimates, and repair prioritization' },
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
              Why oil & gas operations
              <span className="block text-blue-400 mt-2">choose Firefly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">$2M</div>
              <div className="text-xl mb-2">Liability Insurance</div>
              <p className="text-gray-400">Certificate of insurance provided with every engagement</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">0</div>
              <div className="text-xl mb-2">Process Interruptions</div>
              <p className="text-gray-400">All inspections conducted during live operations from safe standoff</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">48h</div>
              <div className="text-xl mb-2">Report Turnaround</div>
              <p className="text-gray-400">GPS-tagged findings ready for maintenance scheduling within two days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Find the failure
            <span className="block text-blue-400 mt-2">before it finds you</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Schedule a discovery call to discuss your facility's inspection needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:zarek@fireflythermal.com?subject=Oil%20%26%20Gas%20Inspection%20Request"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 text-lg transition-all group"
            >
              Schedule Inspection
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

          <p className="text-sm text-gray-500">Pilot program pricing available for new clients</p>
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

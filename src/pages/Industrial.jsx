import React from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export default function IndustrialPage() {
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
              <a href="mailto:zarek@fireflythermal.com?subject=Industrial%20Inspection%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
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
                  <rect x="2" y="8" width="20" height="14"/>
                  <path d="M6 8V4"/><path d="M10 8V4"/><path d="M14 8V4"/><path d="M18 8V4"/>
                </svg>
                <span>Industrial Operations</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              30–60 days warning
              <span className="block text-blue-400 mt-2">before equipment fails</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Unplanned downtime at industrial scale costs $10K–$100K per hour. Thermal imaging finds the failures your monitoring systems miss — weeks before they shut you down.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:zarek@fireflythermal.com?subject=Industrial%20Inspection%20Request"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg transition-all group"
              >
                Schedule Inspection
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
                Equipment doesn't fail
                <span className="block text-blue-400 mt-2">without warning signs</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Bearings, motors, transformers, and structural systems all exhibit thermal anomalies weeks before mechanical failure. The problem isn't that warnings don't exist — it's that conventional maintenance cycles don't catch them in time.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Reactive Maintenance Is Expensive</h3>
                  <p className="text-gray-500">Emergency repairs after failure cost 3–10X more than planned maintenance. Plus you absorb the full cost of downtime.</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Scheduled PM Doesn't Catch Everything</h3>
                  <p className="text-gray-500">Fixed-interval maintenance replaces parts on schedule — not based on actual condition. Thermal inspection shows you exactly which equipment needs attention now.</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Downtime Cascades</h3>
                  <p className="text-gray-500">A single motor failure can halt an entire production line. Thermal warning signs are detectable 30–60 days in advance.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$100K</div>
                <div className="text-xl mb-2">Cost per hour of unplanned downtime</div>
                <p className="text-gray-500">
                  Upper range for high-throughput manufacturing and processing facilities when factoring labor, lost production, and emergency repair costs
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">3–10X</div>
                <div className="text-xl mb-2">Reactive vs. planned repair cost multiplier</div>
                <p className="text-gray-500">
                  Emergency repairs after failure — with parts on expedite, overtime labor, and downtime — cost a fraction of what predictive maintenance prevents
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-green-400 mb-4">30–60</div>
                <div className="text-xl mb-2">Days of early warning</div>
                <p className="text-gray-500">
                  Thermal signatures of bearing wear, insulation breakdown, and overheating motors are detectable well before mechanical failure
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
              What thermal inspection
              <span className="block text-blue-400 mt-2">finds in industrial facilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Rotating Equipment',
                desc: 'Motors, pumps, fans, and compressors showing elevated bearing temperatures — the most reliable early indicator of imminent mechanical failure.',
              },
              {
                title: 'Electrical Systems',
                desc: 'Switchgear, transformers, bus bars, and motor control centers with hot connections creating fire risk and potential production shutdown.',
              },
              {
                title: 'Conveyor & Drive Systems',
                desc: 'Gearboxes, drive shafts, and belt systems showing friction anomalies before they cause line stoppages or catastrophic failure.',
              },
              {
                title: 'Steam & Process Piping',
                desc: 'Insulation failures, valve leaks, and steam trap malfunctions wasting energy and signaling system degradation.',
              },
              {
                title: 'Refractory & Furnace Systems',
                desc: 'Hot spots in kiln linings, furnace walls, and heat treatment equipment indicating refractory failure before structural compromise.',
              },
              {
                title: 'Structural & Roof Systems',
                desc: 'Moisture intrusion, insulation failures, and structural anomalies in the building envelope affecting operations and energy cost.',
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
            <h2 className="text-4xl md:text-5xl font-light mb-6">Inspection during live operations</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              No downtime required. We inspect while your facility runs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Facility Walkthrough', body: 'Discovery call to map critical assets, access requirements, and highest-risk equipment' },
              { n: '2', title: 'Thermal Survey', body: 'Combination of aerial drone coverage and handheld imaging for complete facility assessment during operation' },
              { n: '3', title: 'AI Analysis', body: 'Machine learning classifies anomalies by failure type, severity, and estimated time-to-failure' },
              { n: '4', title: '48h Report', body: 'Prioritized maintenance schedule with GPS-tagged findings, severity ratings, and repair cost estimates' },
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
              Why industrial facilities
              <span className="block text-blue-400 mt-2">choose Firefly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">$2M</div>
              <div className="text-xl mb-2">Liability Insurance</div>
              <p className="text-gray-400">Fully insured for industrial environments with certificate provided on request</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">0</div>
              <div className="text-xl mb-2">Production Interruptions</div>
              <p className="text-gray-400">All inspections conducted while your facility operates at full capacity</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">48h</div>
              <div className="text-xl mb-2">Report Turnaround</div>
              <p className="text-gray-400">Prioritized maintenance list delivered in time for your next scheduled PM window</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Stop reacting to failures.
            <span className="block text-blue-400 mt-2">Start preventing them.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Schedule a discovery call to discuss your facility's highest-risk assets
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:zarek@fireflythermal.com?subject=Industrial%20Inspection%20Request"
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

          <p className="text-sm text-gray-500">Pilot program pricing available for new industrial clients</p>
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

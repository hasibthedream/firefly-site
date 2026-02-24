import React from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export default function CommercialRealEstatePage() {
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
              <a href="mailto:zarek@fireflythermal.com?subject=CRE%20Inspection%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
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
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h6"/>
                </svg>
                <span>Commercial Real Estate</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Protect asset value with
              <span className="block text-blue-400 mt-2">thermal intelligence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Hidden moisture destroys property value silently. Catch it during acquisition due diligence, annual maintenance cycles, or before major capital events — not after.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:zarek@fireflythermal.com?subject=CRE%20Inspection%20Request"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg transition-all group"
              >
                Schedule Assessment
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
                Asset value erodes
                <span className="block text-blue-400 mt-2">from the inside out</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Commercial properties look sound on the surface while moisture silently destroys insulation, structural elements, and mechanical systems. Standard due diligence inspections miss the subsurface problems that become multi-million dollar liabilities.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Due Diligence Blind Spots</h3>
                  <p className="text-gray-500">Visual walkthroughs and Phase I reports can't detect active moisture, failing insulation, or overheating systems inside walls and roofs</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Deferred Maintenance Compounds</h3>
                  <p className="text-gray-500">Undetected roof moisture that costs $15K to address today becomes a $200K+ remediation within 18 months</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Portfolio Risk Is Invisible</h3>
                  <p className="text-gray-500">Owners of multi-property portfolios have no systematic way to identify which assets carry hidden capital exposure</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$200K+</div>
                <div className="text-xl mb-2">Full roof remediation cost</div>
                <p className="text-gray-500">
                  Once moisture penetrates structural decking and interior systems on a large commercial property, remediation costs escalate exponentially
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$15K</div>
                <div className="text-xl mb-2">Early detection repair cost</div>
                <p className="text-gray-500">
                  Identifying moisture at the membrane level means targeted repair instead of full system replacement
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-green-400 mb-4">13X</div>
                <div className="text-xl mb-2">ROI on thermal assessment</div>
                <p className="text-gray-500">
                  Conservative estimate based on catching one average roof moisture issue per commercial property assessed
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
              What we assess
            </h2>
            <p className="text-xl text-gray-400">
              Full-building thermal surveys for acquisition, disposition, and annual maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Roof Systems',
                desc: 'Moisture trapped in insulation, membrane delamination, and ponding water. The highest-frequency source of large commercial property losses.',
              },
              {
                title: 'Building Envelope',
                desc: 'Air infiltration through wall assemblies, windows, curtain walls, and penetrations driving energy loss and long-term moisture damage.',
              },
              {
                title: 'HVAC & Mechanical',
                desc: 'Rooftop units, cooling towers, and building mechanicals with overheating components signaling imminent failure and consequential damage.',
              },
              {
                title: 'Electrical Systems',
                desc: 'Panel hot spots, overloaded circuits, and switchgear anomalies creating fire risk and potential business interruption liability.',
              },
              {
                title: 'Plumbing & Water Systems',
                desc: 'Slow leaks, pipe insulation failures, and active water intrusion paths detectable before visible damage or tenant complaints.',
              },
              {
                title: 'Structural Elements',
                desc: 'Thermal mass anomalies in walls, columns, and decking that indicate moisture-driven structural degradation before it becomes visible.',
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

      {/* Use Cases */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Built for every stage of ownership</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Thermal assessment adds value at acquisition, during ownership, and at disposition
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Acquisition Due Diligence', body: 'Identify hidden capital exposure before closing. Negotiate repairs or price adjustments with objective thermal data.' },
              { n: '2', title: 'Annual Asset Review', body: 'Build a maintenance baseline and track condition changes year-over-year across your entire portfolio.' },
              { n: '3', title: 'Pre-Capital Event', body: 'Prioritize which systems need replacement before major capex cycles — avoid emergency repairs after planned projects.' },
              { n: '4', title: 'Disposition Prep', body: 'Surface and address issues before going to market. Protect NOI and avoid last-minute deal renegotiations.' },
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
              Why CRE owners and operators
              <span className="block text-blue-400 mt-2">choose Firefly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">$2M</div>
              <div className="text-xl mb-2">Liability Insurance</div>
              <p className="text-gray-400">Fully insured on every property assessment with certificate available on request</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">48h</div>
              <div className="text-xl mb-2">Report Turnaround</div>
              <p className="text-gray-400">Fast enough for due diligence windows, detailed enough for capital planning</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">Portfolio</div>
              <div className="text-xl mb-2">Scale Assessment</div>
              <p className="text-gray-400">Multi-property programs available with standardized reporting across your entire portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Know what your assets
            <span className="block text-blue-400 mt-2">are actually worth</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Schedule a discovery call to discuss your portfolio's assessment needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:zarek@fireflythermal.com?subject=CRE%20Inspection%20Request"
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

          <p className="text-sm text-gray-500">Portfolio-wide pricing available for multi-asset engagements</p>
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

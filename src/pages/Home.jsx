import React, { useState } from 'react';
import { Zap, ChevronRight, Menu, X, Mail, Phone, ArrowRight } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="3" fill="#3b82f6" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <path d="M16 18 L14 25 L16 23 L18 25 Z" fill="#3b82f6" opacity="0.6"/>
              </svg>
              <span className="text-2xl font-light tracking-wide text-white">Firefly</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#what-we-do" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">What We Do</a>
              <a href="#industries" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Industries</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</a>
              <a href="mailto:zarek@fireflythermal.com?subject=Discovery%20Call%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
                Get Started
              </a>
            </div>

            <button 
              className="md:hidden text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-6 py-6 space-y-4">
              <a href="#what-we-do" className="block text-gray-400 hover:text-blue-400">What We Do</a>
              <a href="#industries" className="block text-gray-400 hover:text-blue-400">Industries</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400">Contact</a>
              <a href="mailto:zarek@fireflythermal.com?subject=Discovery%20Call%20Request" className="block bg-blue-600 text-white px-5 py-3 text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 text-blue-400 text-sm bg-blue-950/30 px-4 py-2 border border-blue-900/30">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Now Accepting Clients</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              We find invisible problems
              <span className="block text-blue-400 mt-2">before they cost you</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Thermal imaging. AI analysis. Autonomous flight. We do all the work to find equipment failures, 
              structural issues, and energy waste weeks before disaster strikes. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:zarek@fireflythermal.com?subject=Discovery%20Call%20Request" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg transition-all group"
              >
                Schedule Inspection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#what-we-do" 
                className="inline-flex items-center justify-center border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 text-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Thermal Image */}
          <div className="mt-20 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/e013be_0adb232d224a431ba7ec0b1022c224b5~mv2.png/v1/fill/w_980%2Ch_400%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/ChatGPT%20Image%20May%2019%2C%202025%2C%2002_31_07%20PM.png" 
                alt="Aerial thermal survey of industrial facility"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-sm text-gray-400">
                Thermal survey of 2MW solar installation 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-8 border-y border-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-light text-blue-400 mb-2">48h</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Report Turnaround</div>
          </div>
          <div>
            <div className="text-4xl font-light text-blue-400 mb-2">AI</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Autonomous Analysis</div>
          </div>
          <div>
            <div className="text-4xl font-light text-blue-400 mb-2">100%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Remote Inspection</div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 px-6 lg:px-8" id="what-we-do">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Not just thermal imaging.
                <span className="block text-blue-400 mt-2">Software that thinks.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Traditional infrared cameras show you hot spots. Our AI tells you what they mean, 
                why they matter, and what to fix first.
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-900 pl-6">
                  <h3 className="text-xl font-light mb-2">Autonomous Flight</h3>
                  <p className="text-gray-500">AI-planned routes ensure complete coverage with zero human error</p>
                </div>
                <div className="border-l-2 border-blue-900 pl-6">
                  <h3 className="text-xl font-light mb-2">Machine Learning Analysis</h3>
                  <p className="text-gray-500">Algorithms trained on 10,000+ thermal images detect anomalies instantly</p>
                </div>
                <div className="border-l-2 border-blue-900 pl-6">
                  <h3 className="text-xl font-light mb-2">Predictive Intelligence</h3>
                  <p className="text-gray-500">We don't just find problems—we predict failures 30-60 days early</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-gray-900 border border-gray-800 overflow-hidden">
                <img 
                  src="https://www.xinfrared.com/cdn/shop/articles/banner-How_to_Detect_Solar_Panel_Anomalies_Fast_Using_Thermal_Imaging_1024x1024.jpg?v=1706418606" 
                  alt="Solar panel thermal inspection"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-gray-900 border border-gray-800 overflow-hidden">
                  <img 
                    src="https://halorobotics.com/wp-content/uploads/2025/09/Drone-with-Thermal-Camera-untuk-Fire-Monitoring-pada-Aset-Oil-Gas-Halo-Robotics-6-915x594.jpg" 
                    alt="Industrial equipment thermal scan"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="aspect-square bg-gray-900 border border-gray-800 overflow-hidden">
                  <img 
                    src="https://scantherm.co.uk/wp-content/uploads/2017/09/Commercial-building-1-1024x514.png" 
                    alt="Building thermal analysis"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" id="industries">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Built for industries where
              <span className="block text-blue-400 mt-2">downtime costs millions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
            {/* Solar */}
            <div className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
              <div className="text-blue-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Solar Energy</h3>
              <p className="text-gray-500 mb-4">15-20% of arrays have undetected hotspots draining production daily</p>
              <a href="/solar" className="text-sm text-blue-400">
                $847/year per string saved
                </a>
              </div>
            </div>

            {/* Industrial */}
            <div className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
              <div className="text-blue-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="8" width="20" height="14"/>
                  <path d="M6 8V4"/>
                  <path d="M10 8V4"/>
                  <path d="M14 8V4"/>
                  <path d="M18 8V4"/>
                  <path d="M12 22V18"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Industrial</h3>
              <p className="text-gray-500 mb-4">Unplanned downtime costs $10K-$100K per hour at scale</p>
              <div className="text-sm text-blue-400">
                30-60 day early warning
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
              <div className="text-blue-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Healthcare</h3>
              <p className="text-gray-500 mb-4">Roof leaks average $127K in remediation once discovered</p>
              <div className="text-sm text-blue-400">
                Catch moisture early
              </div>
            </div>

            {/* Oil & Gas */}
            <div className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
              <div className="text-blue-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Oil & Gas</h3>
              <p className="text-gray-500 mb-4">Traditional inspection requires scaffolding, permits, shutdowns</p>
              <div className="text-sm text-blue-400">
                Safe standoff distance
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
              <div className="text-blue-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Insurance</h3>
              <p className="text-gray-500 mb-4">Visual inspections miss the hidden risks that become claims</p>
              <div className="text-sm text-blue-400">
                Prevent $50K-$500K claims
              </div>
            </div>

            {/* Commercial Real Estate */}
            <div className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
              <div className="text-blue-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <path d="M9 6h6"/>
                  <path d="M9 10h6"/>
                  <path d="M9 14h6"/>
                  <path d="M9 18h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3">Commercial Real Estate</h3>
              <p className="text-gray-500 mb-4">Hidden moisture destroys millions in property asset value</p>
              <div className="text-sm text-blue-400">
                Portfolio-wide assessment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">How it works</h2>
            <p className="text-xl text-gray-400 leading-relaxed">Four steps from first call to actionable intelligence</p>
          </div>

          <div className="space-y-16">
            <div className="flex items-start space-x-8 border-l-2 border-blue-900 pl-8">
              <div className="text-5xl font-light text-blue-400 min-w-[3rem]">1</div>
              <div>
                <h3 className="text-2xl font-light mb-3">Discovery</h3>
                <p className="text-gray-400 text-lg">15-minute call to understand your facility, equipment, and priorities</p>
              </div>
            </div>

            <div className="flex items-start space-x-8 border-l-2 border-blue-900 pl-8">
              <div className="text-5xl font-light text-blue-400 min-w-[3rem]">2</div>
              <div>
                <h3 className="text-2xl font-light mb-3">Flight</h3>
                <p className="text-gray-400 text-lg">30-60 minute autonomous thermal survey captures thousands of data points</p>
              </div>
            </div>

            <div className="flex items-start space-x-8 border-l-2 border-blue-900 pl-8">
              <div className="text-5xl font-light text-blue-400 min-w-[3rem]">3</div>
              <div>
                <h3 className="text-2xl font-light mb-3">Analysis</h3>
                <p className="text-gray-400 text-lg">Machine learning identifies, classifies, and prioritizes every anomaly</p>
              </div>
            </div>

            <div className="flex items-start space-x-8 border-l-2 border-blue-900 pl-8">
              <div className="text-5xl font-light text-blue-400 min-w-[3rem]">4</div>
              <div>
                <h3 className="text-2xl font-light mb-3">Report</h3>
                <p className="text-gray-400 text-lg">48-hour delivery with thermal imagery, severity rankings, and repair recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-6 lg:px-8 border-t border-gray-900" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Find what you're missing
            </h2>
            <p className="text-xl text-gray-400">
              Schedule a discovery call to discuss your facility's specific needs 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a href="mailto:zarek@fireflythermal.com" className="group">
              <div className="border border-gray-800 hover:border-blue-500 p-8 transition-colors">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Email</div>
                <div className="text-lg text-gray-300 group-hover:text-blue-400 transition-colors">
                  zarek@fireflythermal.com
                </div>
              </div>
            </a>

            <a href="tel:7632280790" className="group">
              <div className="border border-gray-800 hover:border-blue-500 p-8 transition-colors">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Phone</div>
                <div className="text-lg text-gray-300 group-hover:text-blue-400 transition-colors">
                  (763) 228-0790
                </div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <a 
              href="mailto:zarek@fireflythermal.com?subject=Discovery%20Call%20Request" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 text-lg transition-all group"
            >
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Pilot program pricing available for early clients
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
            Founded by Zarek Hasib • Based in Minneapolis, MN • Serving clients nationwide
          </div>
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
          
          <div className="text-sm text-gray-500">
            © 2026 Firefly. Thermal intelligence platform.
          </div>
        </div>
      </footer>
    </div>
  );
}

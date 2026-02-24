import React from 'react';
import { ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';

export default function HealthcarePage() {
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
              <a href="mailto:zarek@fireflythermal.com?subject=Healthcare%20Inspection%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
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
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                </svg>
                <span>Healthcare Facilities</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Thermal Inspection for
              <span className="block text-blue-400 mt-2">Healthcare Facilities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Catch roof leaks at $2K before they become $127K disasters. Protect critical HVAC systems and patient care environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:zarek@fireflythermal.com?subject=Healthcare%20Inspection%20Request" 
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

          {/* Hospital Thermal Image */}
          <div className="mt-20 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 overflow-hidden">
              <img 
                src="https://scantherm.co.uk/wp-content/uploads/2017/09/Commercial-building-1-1024x514.png" 
                alt="Hospital building thermal inspection"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-sm text-gray-400">
                250,000 sq ft hospital thermal survey - moisture intrusion detected
              </div>
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
                Hidden problems cost
                <span className="block text-blue-400 mt-2">millions annually</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Roof moisture and HVAC failures don't announce themselves. By the time you see water damage 
                or temperature complaints, repair costs have multiplied 10-50X.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Roof Leaks Start Small</h3>
                  <p className="text-gray-500">$2,000 repair becomes $127,000 remediation once moisture reaches interior systems</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">HVAC Failures Cascade</h3>
                  <p className="text-gray-500">Overheating equipment fails without warning, disrupting patient care and sterile environments</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Insurance Won't Cover Neglect</h3>
                  <p className="text-gray-500">Gradual damage from undetected moisture is excluded from most policies</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$127K</div>
                <div className="text-xl mb-2">Average roof remediation cost</div>
                <p className="text-gray-500">
                  Once moisture penetrates insulation and structural elements, repair costs explode exponentially
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$2K</div>
                <div className="text-xl mb-2">Early detection repair cost</div>
                <p className="text-gray-500">
                  Catching moisture at the membrane level means simple patching instead of full replacement
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-green-400 mb-4">63X</div>
                <div className="text-xl mb-2">ROI on thermal inspection</div>
                <p className="text-gray-500">
                  $2,000 inspection prevents $127,000 disaster. The math is simple.
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
              Critical areas we inspect
            </h2>
            <p className="text-xl text-gray-400">
              Healthcare facilities have unique vulnerabilities that thermal imaging reveals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Roof Systems</h3>
                  <p className="text-gray-400">
                    Moisture trapped in insulation, membrane failures, ponding water, and structural degradation before visible damage
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">HVAC Equipment</h3>
                  <p className="text-gray-400">
                    Rooftop units, chillers, and air handlers showing overheating components that indicate imminent failure
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Building Envelope</h3>
                  <p className="text-gray-400">
                    Air leaks around windows and doors compromising temperature control and sterile environments
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Electrical Systems</h3>
                  <p className="text-gray-400">
                    Hot connections, overloaded circuits, and transformer issues creating fire risks in 24/7 operations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Equipment Rooms</h3>
                  <p className="text-gray-400">
                    Boilers, generators, and critical infrastructure showing stress patterns before catastrophic failure
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Steam & Hot Water</h3>
                  <p className="text-gray-400">
                    Pipe insulation failures and valve leaks wasting energy and creating safety hazards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Zero disruption to operations</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Inspections happen during normal operations. No patient impact, no downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-l-2 border-blue-900 pl-6">
              <div className="text-4xl font-light text-blue-400 mb-4">1</div>
              <h3 className="text-xl font-light mb-3">Site Coordination</h3>
              <p className="text-gray-400">15-minute call to schedule around your operations and access requirements</p>
            </div>

            <div className="border-l-2 border-blue-900 pl-6">
              <div className="text-4xl font-light text-blue-400 mb-4">2</div>
              <h3 className="text-xl font-light mb-3">Thermal Survey</h3>
              <p className="text-gray-400">Exterior inspection via autonomous drone - no roof access, no scaffolding required</p>
            </div>

            <div className="border-l-2 border-blue-900 pl-6">
              <div className="text-4xl font-light text-blue-400 mb-4">3</div>
              <h3 className="text-xl font-light mb-3">AI Analysis</h3>
              <p className="text-gray-400">Machine learning flags moisture intrusion, equipment issues, and energy waste</p>
            </div>

            <div className="border-l-2 border-blue-900 pl-6">
              <div className="text-4xl font-light text-blue-400 mb-4">4</div>
              <h3 className="text-xl font-light mb-3">48h Report</h3>
              <p className="text-gray-400">Prioritized findings with severity ratings and repair cost estimates for capital planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare Chooses Us */}
      <section className="py-32 px-6 lg:px-8 border-y border-gray-900 bg-gradient-to-b from-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Why healthcare facilities
              <span className="block text-blue-400 mt-2">choose Firefly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">$2M</div>
              <div className="text-xl mb-2">Liability Insurance</div>
              <p className="text-gray-400">
                Certificate of insurance provided with every inspection
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">24/7</div>
              <div className="text-xl mb-2">Operations Compatibility</div>
              <p className="text-gray-400">
                We work around your schedule, including nights and weekends
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-light text-blue-400 mb-4">48h</div>
              <div className="text-xl mb-2">Report Turnaround</div>
              <p className="text-gray-400">
                Fast enough for emergency assessments, detailed enough for capital planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Protect your facility
            <span className="block text-blue-400 mt-2">before problems escalate</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Schedule a discovery call to discuss your facility's specific needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="mailto:zarek@fireflythermal.com?subject=Healthcare%20Inspection%20Request" 
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

          <p className="text-sm text-gray-500">
            Pilot program pricing available for healthcare systems
          </p>
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

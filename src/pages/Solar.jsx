import React from 'react';
import { ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';

export default function SolarPage() {
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
              <a href="mailto:zarek@fireflythermal.com?subject=Solar%20Inspection%20Request" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm transition-all">
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
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                </svg>
                <span>Solar Energy Operations</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              AI-Powered Thermal Inspection
              <span className="block text-blue-400 mt-2">for Solar Operations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
              Stop losing $847/year per string to undetected hotspots. Full array thermal survey with AI analysis in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:zarek@fireflythermal.com?subject=Solar%20Inspection%20Request" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg transition-all group"
              >
                Schedule Inspection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#what-we-find" 
                className="inline-flex items-center justify-center border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 text-lg transition-all"
              >
                See Sample Report
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
                The hidden problem
                <span className="block text-blue-400 mt-2">costing you daily</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                15-20% of solar arrays have failing panels that don't show up in monitoring systems. 
                By the time your dashboard catches it, you've lost months of production.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Visual Inspections Miss It</h3>
                  <p className="text-gray-500">Bypass diode failures and cell-level degradation are invisible to the naked eye</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Monitoring Lags Behind</h3>
                  <p className="text-gray-500">String-level data shows problems after 3-6 months of lost production</p>
                </div>
                <div className="border-l-2 border-red-900 pl-6">
                  <h3 className="text-xl font-light mb-2 text-red-400">Production Loss Compounds</h3>
                  <p className="text-gray-500">A single failing panel costs $847/year. Multiply by your array size.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">$847</div>
                <div className="text-xl mb-2">Lost per year, per string</div>
                <p className="text-gray-500">
                  Average annual production loss from a single failing bypass diode at 1MW+ scale
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">15-20%</div>
                <div className="text-xl mb-2">Of arrays have undetected issues</div>
                <p className="text-gray-500">
                  Industry studies show 1 in 5 solar installations have active thermal anomalies
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="text-5xl font-light text-red-400 mb-4">3-6 mo</div>
                <div className="text-xl mb-2">Before monitoring catches it</div>
                <p className="text-gray-500">
                  By the time production drops show up in your system, damage is already done
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
              <span className="block text-blue-400 mt-2">actually finds</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Bypass Diode Failures</h3>
                  <p className="text-gray-400">
                    Hot cells indicate failed diodes causing entire strings to underperform. $847/year per string loss.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-start space-x-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Cell-Level Hotspots</h3>
                  <p className="text-gray-400">
                    Individual cells running 15-30°C above baseline indicate micro-cracks or manufacturing defects.
                  </p>
                </div>
              </div>
            </div>

            {/* remaining cards unchanged */}
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

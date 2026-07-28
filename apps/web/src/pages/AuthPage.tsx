import React, { useState } from "react";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Zap,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic here
  };

  return (
    <div className="min-h-screen w-full bg-[#f7f9fb] text-[#191c1e] flex flex-col justify-between font-sans antialiased selection:bg-[#6cf8bb] selection:text-[#002113]">
      {/* Header Bar */}
      <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 py-5 flex justify-between items-center border-b border-[#e0e3e5]">
        {/* Brand Logo & Name */}
        <a
          href="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#000000] rounded p-0.5"
        >
          <img
            src="/logo.jpeg"
            alt="Procura Logo"
            className="h-8 w-auto object-contain rounded-sm"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#191c1e] leading-none">
              PROCURA
            </span>
            <span className="text-[10px] font-semibold text-[#45464d] tracking-widest uppercase mt-0.5">
              Next-Gen Procurement
            </span>
          </div>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded bg-[#eceef0] border border-[#c6c6cd]">
            <span className="w-2 h-2 rounded-full bg-[#006c49] animate-pulse"></span>
            <span className="text-xs font-medium text-[#45464d]">
              v1.0 Platform Live
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#45464d] text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="w-4 h-4 text-[#76777d]" />
            <span>EN-US</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex-1 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Startup Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#c6c6cd] px-3 py-1 rounded w-fit">
              <Sparkles className="w-4 h-4 text-[#006c49]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#45464d]">
                Modern B2B Purchasing Engine
              </span>
            </div>

            <div className="space-y-3 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#191c1e] leading-[1.15]">
                Automate your purchasing. Scale your business faster.
              </h1>
              <p className="text-base text-[#45464d] leading-relaxed">
                Replace manual spreadsheets with instant PO generation,
                automated vendor approvals, and real-time spend analytics
                designed for modern teams.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e0e3e5]">
              <div className="bg-[#ffffff] border border-[#c6c6cd] p-4 rounded flex items-start gap-3">
                <div className="p-2 bg-[#eceef0] rounded text-[#191c1e]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191c1e]">
                    Instant Setup
                  </h4>
                  <p className="text-xs text-[#45464d] mt-1 leading-normal">
                    Connect vendors and issue purchase orders in minutes.
                  </p>
                </div>
              </div>

              <div className="bg-[#ffffff] border border-[#c6c6cd] p-4 rounded flex items-start gap-3">
                <div className="p-2 bg-[#eceef0] rounded text-[#191c1e]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191c1e]">
                    Spend Control
                  </h4>
                  <p className="text-xs text-[#45464d] mt-1 leading-normal">
                    Smart budgets and real-time approval workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#76777d]">
                Backed by modern teams at
              </span>
              <div className="flex items-center gap-3 text-xs font-bold text-[#45464d]">
                <span>TECHFLOW</span>
                <span>•</span>
                <span>HYPERLOGIC</span>
                <span>•</span>
                <span>SCALE LABS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Login Panel */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="bg-[#ffffff] border border-[#c6c6cd] rounded p-6 sm:p-8 space-y-6">
              <div className="space-y-1.5 border-b border-[#e0e3e5] pb-4">
                <h2 className="text-xl font-semibold text-[#191c1e] tracking-tight">
                  Log in to Procura
                </h2>
                <p className="text-xs text-[#45464d]">
                  Enter your team credentials to access your workspace.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#45464d]"
                  >
                    Work Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#76777d]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#ffffff] border border-[#c6c6cd] rounded text-[#191c1e] placeholder-[#76777d] transition-colors focus:outline-none focus:border-[#009485] focus:ring-1 focus:ring-[#009485]"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#45464d]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#76777d]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#ffffff] border border-[#c6c6cd] rounded text-[#191c1e] placeholder-[#76777d] transition-colors focus:outline-none focus:border-[#009485] focus:ring-1 focus:ring-[#009485]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#000000] hover:bg-[#131b2e] text-[#ffffff] font-medium py-2.5 px-4 rounded text-sm transition-colors flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000000] pt-3"
                >
                  <span>Log In to Workspace</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>

              {/* Security Pill */}
              <div className="bg-[#f2f4f6] border border-[#e0e3e5] p-3 rounded flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#006c49] shrink-0" />
                <span className="text-[11px] text-[#45464d] leading-tight">
                  Bank-level SSL encryption protecting your procurement data.
                </span>
              </div>
            </div>

            {/* Context Footer */}
            <p className="text-center text-[11px] text-[#76777d] mt-4">
              Need an account invite? Contact your team manager or system
              administrator.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 py-5 border-t border-[#e0e3e5] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#76777d]">
        <div className="flex items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} Procura Technologies, Inc.
          </span>
        </div>
        <div className="flex gap-6 text-xs font-medium text-[#45464d]">
          <a href="#privacy" className="hover:text-[#191c1e] transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-[#191c1e] transition-colors">
            Terms of Service
          </a>
          <a href="#support" className="hover:text-[#191c1e] transition-colors">
            Contact Support
          </a>
        </div>
      </footer>
    </div>
  );
}

import { Building2, Home, Users, Landmark, TrendingUp, Banknote, Briefcase, LayoutDashboard, PieChart, FileText, Settings } from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-5xl px-2 sm:px-0">
      <div className="relative rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-900/80 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="hidden sm:block h-4 w-px bg-slate-700" />
            <span className="hidden sm:block text-xs font-medium text-slate-400">Klaris Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Total Net Wealth</p>
              <p className="text-lg sm:text-xl font-bold text-emerald-400">$4,285,000</p>
            </div>
            <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex w-14 md:w-48 flex-col border-r border-slate-700/50 bg-slate-900/50 py-4">
            <div className="space-y-1 px-2">
              {[
                { icon: LayoutDashboard, label: "Overview", active: false },
                { icon: PieChart, label: "Structure Map", active: true },
                { icon: FileText, label: "Reports", active: false },
                { icon: Settings, label: "Settings", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                    item.active ? "bg-emerald-500/20 text-emerald-400" : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="hidden md:inline">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-300">Wealth Structure Map</h3>
              <div className="flex items-center gap-2">
                <span className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-400">Live</span>
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Structure Diagram */}
            <div className="relative min-h-[320px] sm:min-h-[380px]">
              <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
                <line x1="50%" y1="55" x2="22%" y2="130" stroke="url(#navyGrad)" strokeWidth="1.5" opacity="0.7" />
                <line x1="50%" y1="55" x2="38%" y2="200" stroke="url(#emeraldGrad)" strokeWidth="1.5" opacity="0.7" />
                <line x1="50%" y1="55" x2="75%" y2="130" stroke="url(#navyGrad)" strokeWidth="1.5" opacity="0.7" />
                <line x1="38%" y1="260" x2="38%" y2="320" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.9" />
                <line x1="75%" y1="190" x2="65%" y2="260" stroke="url(#emeraldGrad)" strokeWidth="1" opacity="0.6" />
                <line x1="75%" y1="190" x2="85%" y2="260" stroke="url(#emeraldGrad)" strokeWidth="1" opacity="0.6" />
                <defs>
                  <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#047857" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Family Trust Node */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div className="group relative">
                  <div className="absolute -inset-1 rounded-xl bg-blue-500/30 blur-lg" />
                  <div className="relative flex flex-col items-center gap-1.5 rounded-xl border border-blue-500/40 bg-gradient-to-br from-blue-950 to-slate-900 px-4 py-3 sm:px-6 sm:py-4 shadow-xl">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/20 ring-2 ring-blue-500/40">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white">Family Trust</span>
                    <span className="text-[10px] sm:text-xs text-blue-300/70">Smith Family Trust</span>
                  </div>
                </div>
              </div>

              {/* Corporate Trustee */}
              <div className="absolute left-[8%] top-[28%] sm:left-[12%] z-10">
                <div className="relative flex flex-col items-center gap-1 rounded-lg border border-slate-600/50 bg-slate-800/90 px-2 py-2 sm:px-4 sm:py-3 shadow-lg">
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-slate-700/50">
                    <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-300" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-medium text-slate-200">Corporate Trustee</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-500">Smith Holdings Pty Ltd</span>
                </div>
              </div>

              {/* Investment Property */}
              <div className="absolute left-[20%] top-[48%] sm:left-[26%] z-10">
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-emerald-500/20 blur-sm" />
                  <div className="relative flex flex-col items-center gap-1 rounded-lg border border-emerald-500/40 bg-gradient-to-br from-emerald-950/90 to-slate-900 px-2 py-2 sm:px-4 sm:py-3 shadow-lg">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-emerald-500/20">
                      <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-medium text-white">Investment Property</span>
                    <span className="text-[8px] sm:text-[10px] text-emerald-400/80">$1,850,000</span>
                  </div>
                </div>
              </div>

              {/* Mortgage */}
              <div className="absolute left-[20%] top-[78%] sm:left-[26%] z-10">
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-red-500/20 blur-sm" />
                  <div className="relative flex flex-col items-center gap-1 rounded-lg border border-red-500/40 bg-gradient-to-br from-red-950/80 to-slate-900 px-2 py-2 sm:px-4 sm:py-3 shadow-lg">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-red-500/20">
                      <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400" />
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-medium text-white">Mortgage</span>
                    <span className="text-[8px] sm:text-[10px] text-red-400">-$420,000</span>
                  </div>
                </div>
              </div>

              {/* SMSF */}
              <div className="absolute right-[8%] top-[28%] sm:right-[15%] z-10">
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-blue-500/20 blur-md" />
                  <div className="relative flex flex-col items-center gap-1 rounded-lg border border-blue-500/40 bg-gradient-to-br from-blue-950 to-slate-900 px-3 py-2 sm:px-5 sm:py-3 shadow-lg">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-500/20 ring-1 ring-blue-500/30">
                      <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-white">SMSF</span>
                    <span className="text-[9px] sm:text-[11px] text-blue-300/70">Smith Super Fund</span>
                  </div>
                </div>
              </div>

              {/* International Shares */}
              <div className="absolute right-[22%] top-[62%] sm:right-[28%] z-10">
                <div className="relative flex flex-col items-center gap-0.5 rounded-md border border-emerald-500/30 bg-slate-800/90 px-2 py-1.5 sm:px-3 sm:py-2 shadow-md">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md bg-emerald-500/15">
                    <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-medium text-slate-200">Int&apos;l Shares</span>
                  <span className="text-[7px] sm:text-[9px] text-emerald-400/80">$1,420,000</span>
                </div>
              </div>

              {/* Cash */}
              <div className="absolute right-[2%] top-[62%] sm:right-[8%] z-10">
                <div className="relative flex flex-col items-center gap-0.5 rounded-md border border-emerald-500/30 bg-slate-800/90 px-2 py-1.5 sm:px-3 sm:py-2 shadow-md">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md bg-emerald-500/15">
                    <Banknote className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-medium text-slate-200">Cash</span>
                  <span className="text-[7px] sm:text-[9px] text-emerald-400/80">$435,000</span>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-0 left-0 z-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-slate-500">
                  <div className="h-px w-4 bg-emerald-400/60" />
                  <span>Asset</span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-slate-500">
                  <div className="h-px w-4 border-t-2 border-dashed border-red-400/60" />
                  <span>Liability</span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-slate-500">
                  <div className="h-px w-4 bg-blue-400/60" />
                  <span>Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="flex items-center justify-between border-t border-slate-700/50 bg-slate-900/60 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-slate-500">Synced</span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 flex-wrap justify-end">
            <div className="rounded bg-blue-500/15 px-2 py-1 text-[8px] sm:text-[10px] font-medium text-blue-400">2 Structures</div>
            <div className="rounded bg-emerald-500/15 px-2 py-1 text-[8px] sm:text-[10px] font-medium text-emerald-400">$4.7M Assets</div>
            <div className="rounded bg-red-500/15 px-2 py-1 text-[8px] sm:text-[10px] font-medium text-red-400">$420K Liabilities</div>
          </div>
        </div>
      </div>
    </div>
  );
}

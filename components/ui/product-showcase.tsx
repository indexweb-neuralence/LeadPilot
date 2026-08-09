import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Check, CheckCircle2, Clock, Globe, Users, 
  TrendingUp, ArrowRight, Shield, RefreshCw, BarChart2, 
  Layers, Database, Sparkles, CalendarDays, Sliders, ChevronDown
} from 'lucide-react';

// Custom colors matching LeadPilot branding
const gradients = {
  purplePink: "linear-gradient(135deg, #6D4AFF 0%, #F54FA5 100%)",
  purplePinkText: "bg-gradient-to-r from-[#6D4AFF] to-[#F54FA5] bg-clip-text text-transparent"
};

export default function ProductShowcase() {
  // Calendar slot interactive state
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [selectedDate, setSelectedDate] = useState(22); // July 22nd

  // Count up state for KPIs
  const [conversionRate, setConversionRate] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    let convStart = 0;
    const convEnd = 4.2;
    const convDuration = 1200;
    const convStep = convEnd / (convDuration / 16); // ~60fps
    const convTimer = setInterval(() => {
      convStart += convStep;
      if (convStart >= convEnd) {
        setConversionRate(convEnd);
        clearInterval(convTimer);
      } else {
        setConversionRate(parseFloat(convStart.toFixed(1)));
      }
    }, 16);

    let compStart = 0;
    const compEnd = 98;
    const compDuration = 1200;
    const compStep = compEnd / (compDuration / 16);
    const compTimer = setInterval(() => {
      compStart += compStep;
      if (compStart >= compEnd) {
        setCompletionRate(compEnd);
        clearInterval(compTimer);
      } else {
        setCompletionRate(Math.floor(compStart));
      }
    }, 16);

    return () => {
      clearInterval(convTimer);
      clearInterval(compTimer);
    };
  }, []);

  // Dummy calendar dates
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const activeDays = [21, 22, 23, 24]; // highlighted booking days

  return (
    <div className="w-full bg-white text-[#0A0A0F] font-sans overflow-hidden">
      
      {/* 1. Main Hero Infographic Section */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[640px] flex items-center justify-center py-20 px-6 overflow-visible">
        
        {/* Extremely soft radial glow behind composition */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
          <div className="absolute w-[900px] h-[550px] bg-gradient-to-tr from-[#6D4AFF]/5 via-[#F54FA5]/3 to-transparent blur-[120px] rounded-full" />
          
          {/* Faint concentric dotted rings */}
          <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-purple-500/5 animate-[spin_120s_linear_infinite]" />
          <div className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-purple-500/5 animate-[spin_180s_linear_infinite]" />
          <div className="absolute w-[1050px] h-[1050px] rounded-full border border-dashed border-purple-500/3 animate-[spin_240s_linear_infinite]" />
        </div>

        {/* 3-Window Composition Container */}
        {/* Desktop View (>1024px) */}
        <div className="hidden lg:flex relative w-full max-w-[1200px] h-[500px] items-center justify-center overflow-visible">
          
          {/* Left Window: Calendar Sync */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 40, scale: 0.92 }}
            animate={{ 
              opacity: 0.88, 
              scale: 0.92,
              x: 0, 
              y: [20, 32, 20], 
              rotate: [-0.5, 0.5, -0.5] 
            }}
            transition={{
              initial: { duration: 0.8 },
              y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 11, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ filter: 'blur(0.5px)' }}
            className="absolute left-[-60px] top-[40px] w-[420px] h-[450px] bg-white/90 backdrop-blur-[4px] border border-slate-200/80 rounded-2xl shadow-[0_15px_40px_rgba(109,74,255,0.04)] z-10 flex flex-col overflow-hidden box-border"
          >
            {/* macOS window controls */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200/60 bg-slate-50/50 flex-shrink-0">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs font-semibold text-slate-500 font-mono flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 text-[#6D4AFF] animate-spin" style={{ animationDuration: '6s' }} /> 
                Calendar Sync Engine
              </span>
              <div className="w-[30px]" />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between box-border overflow-hidden bg-white">
              {/* Connected Calendars pill status */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 flex flex-col gap-2.5 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Active Pipelines</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Syncing
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-100 shadow-sm text-sm">
                    <span className="font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Google Calendar
                    </span>
                    <span className="text-xs font-bold text-slate-400">Connected ✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-100 shadow-sm text-sm">
                    <span className="font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Outlook Calendar
                    </span>
                    <span className="text-xs font-bold text-slate-400">Connected ✓</span>
                  </div>
                </div>
              </div>

              {/* Recent sync bookings activity log */}
              <div className="flex flex-col gap-2.5 text-left">
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Recent Activity</span>
                <div className="flex flex-col gap-2">
                  
                  {/* Activity Row 1 */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/40 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <img className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 object-contain p-0.5" src="images/Nova Tech Logo.png" alt="Novatech" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800">NovaTech Solutions</span>
                        <span className="text-[10px] text-slate-400">Product Demo • 2m ago</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">Synced</span>
                  </div>

                  {/* Activity Row 2 */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/40 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <img className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 object-contain p-0.5" src="images/Summit Digital.png" alt="Summit" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800">Summit Digital</span>
                        <span className="text-[10px] text-slate-400">Sales Discovery • 15m ago</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">Synced</span>
                  </div>

                  {/* Activity Row 3 */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/40 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <img className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 object-contain p-0.5" src="images/Bright Bridge Consulting.png" alt="Brightbridge" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800">BrightBridge Consulting</span>
                        <span className="text-[10px] text-slate-400">Strategy Session • 1h ago</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Window (Primary: Interactive Meeting Booking Page) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: [-6, 6, -6], 
              rotate: [0.5, -0.5, 0.5] 
            }}
            transition={{
              initial: { duration: 0.8 },
              y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 11, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-[720px] bg-white border border-slate-200/80 rounded-2xl shadow-[0_30px_80px_rgba(109,74,255,0.08),0_10px_30px_rgba(0,0,0,0.03)] z-20 flex flex-col overflow-hidden"
          >
            {/* macOS Titlebar & URL */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/60 flex-shrink-0">
              <div className="flex gap-1.5 w-[80px] flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex-grow max-w-[340px] bg-white border border-slate-200/60 rounded-md py-1 px-3 text-[11px] text-slate-400 flex items-center justify-center gap-1.5 shadow-sm font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>leadpilot.com/demo/strategy-session</span>
              </div>
              <div className="w-[90px] text-right flex-shrink-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-purple-50 text-[10px] font-bold text-[#6D4AFF] border border-purple-100 whitespace-nowrap">
                  Secure Page
                </span>
              </div>
            </div>

            {/* Split Content layout */}
            <div className="flex flex-row divide-x divide-slate-100 flex-1">
              
              {/* Left Side Panel (Details) */}
              <div className="w-[40%] p-6 flex flex-col gap-6 text-left">
                {/* Host Team stacked Avatars with online status */}
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">Your Host Team</span>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="relative w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100">
                        <img className="w-full h-full rounded-full object-cover" src="images/French male-profile.png" alt="Rep 1" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100">
                        <img className="w-full h-full rounded-full object-cover" src="images/Latina Female-profile.png" alt="Rep 2" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100 flex items-center justify-center bg-slate-100 text-[10px] font-bold text-slate-600">
                        +3
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Active Reps Online</span>
                  </div>
                </div>

                {/* Meeting metadata */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">Sales Strategy &amp; Pipeline Discovery</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>30 Minutes</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Discuss your outbound workflow, pipeline automation, custom CRM domains, and team-routing options with LeadPilot engineers.
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Dubai Time (GMT+4)</span>
                  </div>
                </div>
              </div>

              {/* Right Side Panel (Booking flow) */}
              <div className="w-[60%] p-6 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-900">Select Date &amp; Time</span>
                  <span className="text-xs font-bold text-[#6D4AFF]">July 2026</span>
                </div>

                {/* Calendar & Time slots Side-by-Side Grid */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  
                  {/* Calendar Grid */}
                  <div className="flex flex-col gap-2">
                    {/* Weekdays */}
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                    {/* Days */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-700">
                      {/* Blank spaces for offset starting day */}
                      <span className="text-slate-200">29</span>
                      <span className="text-slate-200">30</span>
                      {daysInMonth.slice(0, 28).map((day) => {
                        const isActive = activeDays.includes(day);
                        const isSelected = selectedDate === day;
                        return (
                          <button
                            key={day}
                            onClick={() => isActive && setSelectedDate(day)}
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                              isSelected 
                                ? "bg-gradient-to-r from-[#6D4AFF] to-[#F54FA5] text-white shadow-md font-bold" 
                                : isActive 
                                ? "bg-purple-50 text-[#6D4AFF] border border-purple-200/50 hover:bg-[#6D4AFF] hover:text-white" 
                                : "hover:bg-slate-100 text-slate-700"
                            }`}
                            disabled={!isActive}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots column */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Available Times</span>
                    <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1">
                      {["9:30 AM", "11:00 AM", "2:00 PM", "3:30 PM"].map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full py-2 text-center text-xs font-bold rounded-lg border transition-all ${
                              isSelected
                                ? "bg-gradient-to-r from-[#6D4AFF] to-[#F54FA5] text-white border-transparent shadow-sm"
                                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Confirm Button */}
                <div className="mt-2">
                  <button className="w-full py-3.5 bg-slate-900 hover:bg-[#6D4AFF] hover:shadow-lg hover:shadow-purple-500/10 text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5">
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Window: CRM Capture & Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 40, scale: 0.92 }}
            animate={{ 
              opacity: 0.88, 
              scale: 0.92,
              x: 0, 
              y: [20, 32, 20], 
              rotate: [0.5, -0.5, 0.5] 
            }}
            transition={{
              initial: { duration: 0.8 },
              y: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              rotate: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
            }}
            style={{ filter: 'blur(0.5px)' }}
            className="absolute right-[-60px] top-[40px] w-[420px] h-[450px] bg-white/90 backdrop-blur-[4px] border border-slate-200/80 rounded-2xl shadow-[0_15px_40px_rgba(109,74,255,0.04)] z-10 flex flex-col overflow-hidden box-border"
          >
            {/* macOS window controls */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200/60 bg-slate-50/50 flex-shrink-0">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs font-semibold text-slate-500 font-mono flex items-center gap-1.5">
                <Database className="w-3 h-3 text-[#F54FA5]" /> 
                CRM Lead Auto-Create
              </span>
              <div className="w-[30px]" />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between box-border overflow-hidden bg-white">
              
              {/* CRM Capture Card */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 flex flex-col gap-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Lead Capture Log</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F54FA5] bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-full">
                    CRM Captured ✓
                  </span>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                    <span className="text-slate-400">Contact:</span>
                    <span className="font-bold text-slate-700">Aisha Rehman</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                    <span className="text-slate-400">Company:</span>
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <img src="images/Nova Tech Logo.png" alt="Novatech" className="w-3.5 h-3.5 object-contain" />
                      NovaTech Solutions
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Deal Stage:</span>
                    <span className="font-bold text-[#6D4AFF] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">Discovery Assigned</span>
                  </div>
                </div>
              </div>

              {/* Analytics metrics / charts */}
              <div className="grid grid-cols-2 gap-3">
                {/* KPI 1 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm flex flex-col gap-1 text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Conversion Rate</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-slate-900">{conversionRate}%</span>
                    <span className="text-[10px] text-emerald-500 font-bold">▲ 24%</span>
                  </div>
                  {/* Curved SVG line representing a chart */}
                  <div className="w-full h-8 mt-1">
                    <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        d="M0,25 Q20,10 40,20 T80,5 T100,2" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                      />
                      <path d="M0,25 Q20,10 40,20 T80,5 T100,2 L100,30 L0,30 Z" fill="rgba(109,74,255,0.05)" />
                    </svg>
                  </div>
                </div>

                {/* KPI 2 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm flex flex-col gap-1 text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Meeting Completion</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-slate-900">{completionRate}%</span>
                    <span className="text-[10px] text-emerald-500 font-bold">▲ 1.4%</span>
                  </div>
                  {/* Curved SVG line representing a chart */}
                  <div className="w-full h-8 mt-1">
                    <svg className="w-full h-full text-pink-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        d="M0,28 Q20,24 40,15 T80,10 T100,2" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                      />
                      <path d="M0,28 Q20,24 40,15 T80,10 T100,2 L100,30 L0,30 Z" fill="rgba(245,79,165,0.05)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Recent CRM captures feed to fill bottom */}
              <div className="flex flex-col gap-2 text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent Captures</span>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between p-1.5 rounded-lg border border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5">
                      <img src="images/Nova Tech Logo.png" alt="NovaTech" className="w-5 h-5 object-contain" />
                      <span className="font-bold text-slate-700">NovaTech Solutions</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Discovery</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-lg border border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5">
                      <img src="images/Summit Digital.png" alt="Summit" className="w-5 h-5 object-contain" />
                      <span className="font-bold text-slate-700">Summit Digital</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Discovery</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Stacking View (<1024px) */}
        <div className="flex flex-col gap-8 w-full max-w-[720px] mx-auto lg:hidden">
          
          {/* 1. Calendar Sync (Left) */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50/50">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-[#6D4AFF] animate-spin" /> Calendar Sync
              </span>
              <div className="w-[30px]" />
            </div>
            
            <div className="p-5 flex flex-col gap-4 text-left">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">Google Calendar</span>
                  <span className="text-emerald-600 font-bold">Connected ✓</span>
                </div>
                <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">Outlook Calendar</span>
                  <span className="text-emerald-600 font-bold">Connected ✓</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between p-2 rounded-lg border border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <img src="images/Nova Tech Logo.png" alt="NovaTech" className="w-5 h-5 object-contain" />
                    <span className="font-bold text-slate-700">NovaTech Solutions</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Demo • 2m ago</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Synced</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg border border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <img src="images/Summit Digital.png" alt="Summit" className="w-5 h-5 object-contain" />
                    <span className="font-bold text-slate-700">Summit Digital</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Discovery • 15m ago</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Synced</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Booking (Center) */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(109,74,255,0.06)] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/50">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs font-mono text-slate-400">leadpilot.com/demo</span>
              <div className="w-[30px]" />
            </div>

            <div className="p-5 flex flex-col gap-5 text-left">
              <div>
                <h3 className="text-lg font-black text-slate-900">Sales Strategy &amp; Pipeline Discovery</h3>
                <span className="text-xs text-[#6D4AFF] font-bold block mt-1">30 Minutes • Dubai Time (GMT+4)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Date</span>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold">
                    {daysInMonth.slice(14, 25).map((day) => {
                      const isActive = activeDays.includes(day);
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          onClick={() => isActive && setSelectedDate(day)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            isSelected 
                              ? "bg-gradient-to-r from-[#6D4AFF] to-[#F54FA5] text-white shadow-sm font-bold" 
                              : isActive 
                              ? "bg-purple-50 text-[#6D4AFF]" 
                              : "text-slate-400"
                          }`}
                          disabled={!isActive}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="w-full sm:w-[150px]">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Times</span>
                  <div className="flex flex-row sm:flex-col gap-2 overflow-x-auto pb-1 sm:pb-0">
                    {["9:30 AM", "11:00 AM", "2:00 PM"].map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 text-center text-xs font-bold rounded-lg border flex-1 sm:flex-none ${
                            isSelected
                              ? "bg-gradient-to-r from-[#6D4AFF] to-[#F54FA5] text-white border-transparent"
                              : "bg-white text-slate-700 border-slate-200"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button className="w-full py-3.5 bg-slate-900 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5">
                <span>Confirm Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. CRM Capture & Analytics (Right) */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50/50">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs font-bold text-slate-500">CRM &amp; Analytics</span>
              <div className="w-[30px]" />
            </div>

            <div className="p-5 flex flex-col gap-4 text-left">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Lead Captured</span>
                  <span className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                    <img src="images/Nova Tech Logo.png" alt="NovaTech" className="w-3.5 h-3.5 object-contain" />
                    Aisha Rehman (NovaTech)
                  </span>
                </div>
                <span className="text-xs font-bold text-pink-600 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-full">CRM Captured</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-slate-400 block mb-1">Conversion</span>
                  <span className="font-black text-slate-900 text-sm">4.2%</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-slate-400 block mb-1">Completion</span>
                  <span className="font-black text-slate-900 text-sm">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Feature Strip Section */}
      <div className="border-t border-slate-100 bg-slate-50/40 w-full pt-10 pb-24 px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* 6-column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-left">
            
            {/* Feature 1 */}
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm">
                <Sparkles className="w-5 h-5 text-[#6D4AFF]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Branded Booking Pages</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Fully white-labeled booking flows hosted on your own custom domain.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm">
                <Sliders className="w-5 h-5 text-[#6D4AFF]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Smart Availability</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Sync team calendars instantly and prevent overlap bookings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm">
                <CalendarDays className="w-5 h-5 text-[#6D4AFF]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Calendar Sync</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Bi-directional sync with Google, Outlook, &amp; iCloud.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm">
                <RefreshCw className="w-5 h-5 text-[#6D4AFF]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Smart Routing</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Assign leads to the correct reps dynamically.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm">
                <Clock className="w-5 h-5 text-[#6D4AFF]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Automated Follow-ups</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Send SMS &amp; email reminders prior to strategy meetings.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm">
                <Database className="w-5 h-5 text-[#6D4AFF]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">CRM Automation</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Create leads, log events, and set deal values instantly.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

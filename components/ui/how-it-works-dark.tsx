"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Users, 
  Lock, 
  Bell,
  ArrowRight,
  TrendingUp,
  Database,
  BarChart3,
  Mail,
  ChevronRight,
  FileText
} from "lucide-react";

type ColorTheme = {
  id: string;
  color: string;
  bgOpacity: string;
  shadow: string;
  name: string;
};

const THEMES: ColorTheme[] = [
  { id: "purple", color: "#7C3AED", bgOpacity: "rgba(124, 78, 237, 0.08)", shadow: "rgba(124, 78, 237, 0.4)", name: "novatech" },
  { id: "pink", color: "#EC4899", bgOpacity: "rgba(236, 72, 153, 0.08)", shadow: "rgba(236, 72, 153, 0.4)", name: "novatech" },
  { id: "cream", color: "#D9C3B0", bgOpacity: "rgba(217, 195, 176, 0.08)", shadow: "rgba(217, 195, 176, 0.4)", name: "novatech" },
  { id: "dark", color: "#4A4D5A", bgOpacity: "rgba(74, 77, 90, 0.08)", shadow: "rgba(74, 77, 90, 0.4)", name: "novatech" }
];

export default function HowItWorksDark() {
  const [activeTheme, setActiveTheme] = useState<ColorTheme>(THEMES[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>("11:30 AM");

  const boxRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Expansion Animation (Apple / Stripe Showcase style)
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start end", "start 88px"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["90vw", "100vw"]);
  const maxW = useTransform(scrollYProgress, [0, 1], ["1240px", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["36px", "0px"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-white py-24 relative z-10 w-full select-none overflow-x-hidden">
      <div className="w-full mx-auto flex justify-center">
        
        {/* Boxed Floating Showcase Module with Scroll-driven Expansion */}
        <motion.div 
          ref={boxRef}
          style={{ scale, width, maxWidth: maxW, borderRadius }}
          className="bg-[#050508] border border-white/6 px-6 py-16 md:px-12 md:py-20 relative overflow-hidden shadow-2xl text-white mx-auto"
        >
          
          {/* Subtle background SVG curves */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 800" fill="none">
            <path d="M-100,200 C300,50 800,350 1340,100" stroke="rgba(139, 92, 246, 0.05)" strokeWidth="1.5" />
            <path d="M-100,350 C400,200 700,500 1340,300" stroke="rgba(236, 72, 153, 0.03)" strokeWidth="1.5" />
            <path d="M-100,500 C300,650 900,450 1340,600" stroke="rgba(139, 92, 246, 0.03)" strokeWidth="1.5" />
          </svg>

          {/* Ambient Glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] rounded-full filter blur-[120px] pointer-events-none z-[2]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(236,72,153,0.05)_0%,transparent_70%)] rounded-full filter blur-[120px] pointer-events-none z-[2]" />
          
          {/* Repeating Square grid mesh overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-[2]" />

          {/* Module Header */}
          <div className="text-center max-w-[680px] mx-auto mb-12 relative z-[5]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[10px] font-bold tracking-[1.5px] uppercase text-[#c084fc] mb-4">
              ✦ How It Works
            </div>
            <h2 className="text-[36px] md:text-[46px] font-extrabold tracking-[-1.5px] leading-[1.15] text-white mb-3.5">
              Schedule and close.<br />
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                In three simple steps.
              </span>
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#94a3b8]">
              Traditional schedulers stop at booking. LeadPilot syncs availability, routes qualified leads to the right rep, and captures everything in your pipeline automatically.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row justify-between items-stretch gap-0 relative z-[5]"
          >
            {/* Card 1 — Branded Booking Forms */}
            <motion.div variants={cardVariants} className="flex-1 flex items-stretch relative">
              <div className="bg-[#101016]/45 backdrop-blur-[20px] border border-white/5 rounded-[24px] p-10 w-full min-h-[800px] flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#7C3AED]/20 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_45px_rgba(124,58,237,0.08)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                
                <div className="h-[120px] flex flex-col mb-6 relative">
                  <div className="w-7 h-7 rounded-[6px] bg-[#7C3AED]/15 text-[#c084fc] font-bold text-[13px] flex items-center justify-center mb-3">01</div>
                  <div className="absolute top-0 right-0 w-10 h-10 rounded-[10px] bg-[#7C3AED]/8 border border-[#7C3AED]/15 flex items-center justify-center text-[#a78bfa]">
                    <Sparkles className="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1.5 tracking-[-0.01em]">Branded Booking Forms</h3>
                  <p className="text-[13px] text-[#94a3b8] leading-[1.45]">Create highly customized scheduling layouts tailored to your business styling.</p>
                </div>

                {/* Browser Mockup */}
                <div className="bg-[#050508]/30 border border-white/4 rounded-[16px] h-[520px] p-4 flex flex-col justify-between overflow-hidden relative box-border">
                  <div className="bg-[#09090c] border border-white/5 rounded-[10px] h-full p-3 flex flex-col text-[9.5px] text-[#94a3b8] box-border justify-between">
                    
                    {/* macOS controls */}
                    <div className="flex items-center gap-1.5 pb-2 border-b border-white/5 mb-2.5 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                      <span className="text-[7.5px] text-[#64748B] ml-2.5 font-mono truncate max-w-[165px] flex items-center gap-1">
                        <Lock className="w-2 h-2" />
                        yourcompany.leadpilot.com/book
                      </span>
                    </div>

                    {/* Booking Form Interface Content */}
                    <div className="flex gap-2.5 h-[calc(100%-20px)] overflow-hidden">
                      {/* Left Area details */}
                      <div className="flex-1.15 flex flex-col justify-between pr-1.5 border-r border-white/5">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <div 
                              className="w-4 h-4 text-white text-[9px] font-bold flex items-center justify-center rounded-[4px] transition-colors"
                              style={{ backgroundColor: activeTheme.color }}
                            >
                              N
                            </div>
                            <div className="font-bold text-white text-[8.5px] truncate">NovaTech Solutions</div>
                          </div>
                          
                          <div className="font-extrabold text-white text-[11px] mt-2.5 leading-snug">Product Demo</div>
                          
                          <div className="flex flex-col gap-1 mt-2 text-[7.5px] text-[#64748B]">
                            <div className="flex items-center gap-1">⏱ 30 min</div>
                            <div className="flex items-center gap-1">👥 One-on-one session</div>
                            <div className="flex items-center gap-1">💬 Discuss your goals</div>
                            <div className="flex items-center gap-1">⚡ Find the right solution</div>
                          </div>
                        </div>

                        {/* Avatars */}
                        <div className="flex items-center">
                          <img src="images/Aisha Rehman.png" alt="Aisha" className="w-4 h-4 rounded-full border border-[#0A0A0F]" />
                          <img src="images/Sophia Laurent.png" alt="Sophia" className="w-4 h-4 rounded-full border border-[#0A0A0F] -ml-1.5" />
                          <img src="images/Elena Rostova.png" alt="Elena" className="w-4 h-4 rounded-full border border-[#0A0A0F] -ml-1.5" />
                          <div className="w-4 h-4 rounded-full bg-[#1f1f2e] border border-[#0A0A0F] text-[#94A3B8] text-[5.5px] font-bold flex items-center justify-center -ml-1.5">
                            +2
                          </div>
                        </div>
                      </div>

                      {/* Right Area calendar */}
                      <div className="flex-1.25 flex flex-col justify-between pl-1">
                        <div className="flex justify-between items-center text-[8px] text-white font-bold mb-1">
                          <span>&larr; May 2026 &rarr;</span>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-0.5 text-center text-[7px]">
                          {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
                            <div key={idx} className="text-[#64748B] font-bold mb-0.5">{d}</div>
                          ))}
                          {/* Row 1 calendar dates alignment matching python exactly */}
                          <div className="day-cell">25</div><div className="day-cell">26</div><div className="day-cell">27</div><div class="day-cell">28</div><div className="day-cell">29</div><div className="day-cell">30</div><div className="day-cell">1</div>
                          {/* Row 2 */}
                          <div className="day-cell">3</div><div className="day-cell">4</div><div className="day-cell">5</div><div className="day-cell">6</div><div className="day-cell">7</div><div className="day-cell">8</div><div className="day-cell">9</div>
                          {/* Row 3 */}
                          <div className="day-cell">10</div><div className="day-cell">11</div><div className="day-cell">12</div><div className="day-cell">13</div><div className="day-cell">14</div><div className="day-cell">15</div><div className="day-cell">16</div>
                          {/* Row 4 */}
                          <div className="day-cell">17</div><div className="day-cell">18</div>
                          <div 
                            className="py-0.5 rounded text-white font-bold transition-all active-cell"
                            style={{ 
                              backgroundColor: activeTheme.color,
                              boxShadow: `0 0 6px ${activeTheme.color}` 
                            }}
                          >
                            19
                          </div>
                          <div className="day-cell">20</div><div className="day-cell">21</div><div className="day-cell">22</div><div className="day-cell">23</div>
                          {/* Row 5 */}
                          <div className="day-cell">24</div><div className="day-cell">25</div><div className="day-cell">26</div><div className="day-cell">27</div><div className="day-cell">28</div><div className="day-cell">29</div><div className="day-cell">30</div>
                        </div>

                        {/* Slots */}
                        <div className="grid grid-cols-2 gap-1 mt-1.5">
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">09:00 AM</button>
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">10:00 AM</button>
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">11:00 AM</button>
                          <button 
                            className="text-center py-1 border rounded text-[7.5px] text-white font-bold transition-all active-slot"
                            style={{ 
                              borderColor: activeTheme.color,
                              backgroundColor: activeTheme.bgOpacity 
                            }}
                          >
                            11:30 AM
                          </button>
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">01:00 PM</button>
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">02:00 PM</button>
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">03:00 PM</button>
                          <button className="text-center py-1 border border-white/6 rounded text-[7.5px] text-[#94a3b8]">04:30 PM</button>
                        </div>
                        
                        <div className="text-[6.5px] text-[#64748B] mt-1 text-left">Dubai, UAE (GMT+4)</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Preset selectors */}
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/4">
                  <span className="text-[8px] text-[#64748B]">Style Preview:</span>
                  <div className="flex gap-1.5">
                    {THEMES.map(theme => (
                      <button
                        key={theme.id}
                        onClick={() => setActiveTheme(theme)}
                        className={`flex items-center gap-1 bg-white/[0.02] border border-white/4 rounded-[6px] px-1.5 py-1 text-[6px] text-[#64748B] transition-all hover:translate-y-[-0.5px] ${activeTheme.id === theme.id ? "border-white/15 bg-white/[0.05] text-white" : ""}`}
                      >
                        <div className="w-1.5 h-1.5 rounded-[1.5px]" style={{ backgroundColor: theme.color }} />
                        <span>{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Connector 1 */}
            <div className="hidden lg:flex items-center justify-center w-0 z-15 relative">
              <div className="absolute left-50 top-50 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0f0f16]/95 border border-white/12 flex items-center justify-center text-[#8B5CF6] shadow-[0_10px_24px_rgba(0,0,0,0.5),0_0_25px_rgba(124,58,237,0.25)] hover:scale-[1.12] hover:rotate-[15deg] hover:border-[#7C3AED]/50 hover:text-white transition-all duration-300 animate-[floatSlow_4s_infinite_ease-in-out]">
                <ChevronRight className="w-5 h-5 animate-[pulse_2.5s_infinite]" />
              </div>
            </div>

            {/* Card 2 — Dynamic Lead Routing */}
            <motion.div variants={cardVariants} className="flex-1 flex items-stretch relative">
              <div className="bg-[#101016]/45 backdrop-blur-[20px] border border-white/5 rounded-[24px] p-10 w-full min-h-[800px] flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#7C3AED]/20 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_45px_rgba(124,58,237,0.08)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                
                <div className="h-[120px] flex flex-col mb-6 relative">
                  <div className="w-7 h-7 rounded-[6px] bg-[#7C3AED]/15 text-[#c084fc] font-bold text-[13px] flex items-center justify-center mb-3">02</div>
                  <div className="absolute top-0 right-0 w-10 h-10 rounded-[10px] bg-[#7C3AED]/8 border border-[#7C3AED]/15 flex items-center justify-center text-[#a78bfa]">
                    <Users className="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1.5 tracking-[-0.01em]">Dynamic Lead Routing</h3>
                  <p className="text-[13px] text-[#94a3b8] leading-[1.45]">Route meetings automatically using round-robin distribution or account-owner matches.</p>
                </div>

                <div className="infographic-mockup">
                  <div className="flex flex-col gap-0.5 h-full justify-between w-full box-border">
                    {/* Node 1 */}
                    <div className="flex items-center justify-between bg-white/[0.015] border border-white/4 rounded-[10px] px-3 py-2 text-[9px] text-[#94A3B8] hover:bg-white/[0.03] transition-all">
                      <span className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded bg-[#7C3AED]/12 border border-[#7C3AED]/20 flex items-center justify-center text-[#8B5CF6]">
                          <Database className="w-2.5 h-2.5" />
                        </span>
                        <span className="font-extrabold text-white text-[9px]">New Meeting Booked</span>
                      </span>
                      <span className="text-[7px] text-[#64748B]">May 12, 2026 &bull; 11:30 AM</span>
                    </div>

                    <div className="w-[2px] h-3.5 bg-white/6 mx-auto relative">
                      <span className="w-[4px] h-[4px] bg-[#EC4899] rounded-full absolute left-[-1px] top-0 shadow-[0_0_6px_#EC4899]" style={{ animation: "pulseDotTravel 2.2s infinite linear" }} />
                    </div>

                    {/* Node 2 */}
                    <div className="flex items-center justify-between bg-white/[0.015] border border-white/4 rounded-[10px] px-3 py-2 text-[9px] text-[#94A3B8] hover:bg-white/[0.03] transition-all">
                      <span className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded bg-[#3B82F6]/12 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                        </span>
                        <span className="font-extrabold text-white text-[9px]">Qualify lead</span>
                      </span>
                      <span className="text-[7.5px] px-1.5 py-0.5 rounded bg-[#10B981]/8 border border-[#10B981]/15 text-[#34D399] font-bold">Passed ✓</span>
                    </div>

                    <div className="w-[2px] h-3.5 bg-white/6 mx-auto relative">
                      <span className="w-[4px] h-[4px] bg-[#EC4899] rounded-full absolute left-[-1px] top-0 shadow-[0_0_6px_#EC4899]" style={{ animation: "pulseDotTravel 2.2s infinite linear" }} />
                    </div>

                    {/* Node 3 */}
                    <div className="flex items-center justify-between bg-white/[0.015] border border-white/4 rounded-[10px] px-3 py-2 text-[9px] text-[#94A3B8] hover:bg-white/[0.03] transition-all">
                      <span className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded bg-[#EC4899]/12 border border-[#EC4899]/20 flex items-center justify-center text-[#EC4899]">
                          <Cpu className="w-2.5 h-2.5" />
                        </span>
                        <span className="font-extrabold text-white text-[9px]">Route to best rep</span>
                      </span>
                      <span className="text-[7.5px] px-1.5 py-0.5 rounded bg-[#EC4899]/8 border border-[#EC4899]/15 text-[#EC4899] font-bold">Rule Match ✓</span>
                    </div>

                    <div className="w-[2px] h-3.5 bg-white/6 mx-auto relative">
                      <span className="w-[4px] h-[4px] bg-[#EC4899] rounded-full absolute left-[-1px] top-0 shadow-[0_0_6px_#EC4899]" style={{ animation: "pulseDotTravel 2.2s infinite linear" }} />
                    </div>

                    {/* Rep Assignment details */}
                    <div className="bg-gradient-to-br from-[#161622]/88 to-[#7C3AED]/8 border border-[#7C3AED]/25 rounded-xl p-3.5 flex items-center gap-3 justify-between shadow-[0_12px_24px_rgba(0,0,0,0.5),0_0_25px_rgba(124,58,237,0.1)]">
                      <div className="w-7 h-7 rounded-full relative shrink-0">
                        <img src="images/Daniel Brooks.png" alt="Daniel Brooks" className="w-full h-full rounded-full object-cover" />
                        <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full absolute -bottom-[0.5px] -right-[0.5px] border border-[#161622]" />
                        <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full absolute -bottom-[0.5px] -right-[0.5px] border border-[#161622] animate-ping" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-extrabold text-white text-[10.5px]">Assigned: Alex R. (Owner)</div>
                        <div className="text-[8px] text-[#64748B]">Enterprise Account Executive &bull; Online</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Connector 2 */}
            <div className="hidden lg:flex items-center justify-center w-0 z-15 relative">
              <div className="absolute left-50 top-50 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0f0f16]/95 border border-white/12 flex items-center justify-center text-[#8B5CF6] shadow-[0_10px_24px_rgba(0,0,0,0.5),0_0_25px_rgba(124,58,237,0.25)] hover:scale-[1.12] hover:rotate-[15deg] hover:border-[#7C3AED]/50 hover:text-white transition-all duration-300 animate-[floatSlow_4s_infinite_ease-in-out]">
                <ChevronRight className="w-5 h-5 animate-[pulse_2.5s_infinite]" />
              </div>
            </div>

            {/* Card 3 — CRM capture & reminders */}
            <motion.div variants={cardVariants} className="flex-1 flex items-stretch relative">
              <div className="bg-[#101016]/45 backdrop-blur-[20px] border border-white/5 rounded-[24px] p-10 w-full min-h-[800px] flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#7C3AED]/20 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_45px_rgba(124,58,237,0.08)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                
                <div className="h-[120px] flex flex-col mb-6 relative">
                  <div className="w-7 h-7 rounded-[6px] bg-[#7C3AED]/15 text-[#c084fc] font-bold text-[13px] flex items-center justify-center mb-3">03</div>
                  <div className="absolute top-0 right-0 w-10 h-10 rounded-[10px] bg-[#7C3AED]/8 border border-[#7C3AED]/15 flex items-center justify-center text-[#a78bfa]">
                    <FileText className="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-1.5 tracking-[-0.01em]">CRM Capture &amp; Reminders</h3>
                  <p className="text-[13px] text-[#94a3b8] leading-[1.45]">Leads are recorded in CRM instantly and reminder sequences are triggered.</p>
                </div>

                <div className="infographic-mockup">
                  <div className="flex flex-col gap-2.5 h-full justify-between w-full box-border">
                    <div className="grid grid-cols-2 gap-3 h-[240px]">
                      {/* Left Activity */}
                      <div className="bg-[#0a0a0f] border border-white/4 rounded-xl p-3 flex flex-col justify-start">
                        <div className="text-[8px] text-[#64748B] font-bold uppercase mb-2.5 text-left">CRM Activity</div>
                        <div className="flex flex-col gap-2 text-left text-[8px]">
                          <div className="flex gap-1.5 items-start">
                            <span className="w-3 h-3 rounded-full bg-[#10B981] flex items-center justify-center text-white text-[5.5px] mt-0.5">✓</span>
                            <div>
                              <div className="font-extrabold text-white">Lead Captured</div>
                              <div className="text-[#64748B] text-[7px]">Strategy Session with Alex R.</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right KPI dashboard widgets */}
                      <div className="flex flex-col gap-2 justify-between">
                        <div className="bg-[#0a0a0f] border border-white/4 rounded-lg p-2 text-left flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#34d399] flex-shrink-0" />
                          <div>
                            <div className="text-[6.5px] text-[#64748B]">Lead Status</div>
                            <div className="text-[10px] font-bold text-[#34D399]">Qualified</div>
                          </div>
                        </div>
                        <div className="bg-[#0a0a0f] border border-white/4 rounded-lg p-2 text-left flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-[#c084fc] flex-shrink-0" />
                          <div>
                            <div className="text-[6.5px] text-[#64748B]">Pipeline</div>
                            <div className="text-[8px] font-bold text-[#A78BFA]">New Meeting</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reminder sequence steps */}
                    <div className="bg-[#0a0a0f] border border-white/4 rounded-xl p-3">
                      <div className="text-[8.5px] text-[#64748B] font-bold uppercase text-left mb-2">Reminder Sequence</div>
                      <div className="flex items-center justify-between text-center mt-1 text-[7px]">
                        <div className="flex flex-col items-center gap-0.5 w-[45px] text-white">
                          <span className="w-5.5 h-5.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]"><Mail className="w-2.5 h-2.5" /></span>
                          <span className="font-bold">Email 1</span>
                          <span className="text-[#64748B] text-[6px]">24h before</span>
                        </div>
                        <span className="flex-1 h-[2px] bg-[#7C3AED] mb-4" />
                        <div className="flex flex-col items-center gap-0.5 w-[45px] text-white">
                          <span className="w-5.5 h-5.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]"><Mail className="w-2.5 h-2.5" /></span>
                          <span className="font-bold">Email 2</span>
                          <span className="text-[#64748B] text-[6px]">1h before</span>
                        </div>
                        <span className="flex-1 h-[2px] bg-[#7C3AED] mb-4" />
                        <div className="flex flex-col items-center gap-0.5 w-[45px] text-white">
                          <span className="w-5.5 h-5.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]"><MessageSquare className="w-2.5 h-2.5" /></span>
                          <span className="font-bold">SMS</span>
                          <span className="text-[#64748B] text-[6px]">15m before</span>
                        </div>
                        <span className="flex-1 h-[2px] bg-white/4 mb-4" />
                        <div className="flex flex-col items-center gap-0.5 w-[45px]">
                          <span className="w-5.5 h-5.5 rounded-full bg-white/[0.02] border border-white/4 flex items-center justify-center text-[#64748B]"><Users className="w-2.5 h-2.5" /></span>
                          <span className="font-bold text-[#64748B]">Follow-up</span>
                          <span className="text-[#64748B] text-[6px]">Next day</span>
                        </div>
                      </div>
                    </div>

                    {/* Sync to LeadPilot matching reference */}
                    <div className="leadpilot-sync-block" style={{ background: "transparent", border: "none", padding: "10px 0", justifyContent: "flex-start", gap: "8px" }}>
                      <div className="sync-left">
                        <span style={{ fontSize: "8px", color: "#64748B" }}>Sync to LeadPilot</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto" }}>
                        <svg width="60" height="14" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.4 16.8L6.4 12.8L7.8 11.4L10.4 14L16.2 8.2L17.6 9.6L10.4 16.8Z" fill="url(#lp-grad-react)" />
                          <text x="28" y="18" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="14px">LeadPilot</text>
                          <defs>
                            <linearGradient id="lp-grad-react" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#8b5cf6" />
                              <stop offset="1" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* Redesigned Benefit Bar (at the bottom of the container) */}
          <div className="mt-12 bg-[#0f0f16]/70 backdrop-blur-[20px] border border-white/6 rounded-[24px] p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 items-stretch shadow-xl relative z-10">
            {/* Col 1 (More prominent) */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">Built for more bookings.</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Less manual work. More closed deals.</div>
              </div>
            </div>
            
            <div className="hidden lg:block w-[1px] bg-white/5 align-self-stretch" />

            {/* Col 2 */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">&uarr; 3x qualified meetings</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Better bookings from routing.</div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-white/5 align-self-stretch" />

            {/* Col 3 */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">Save 10+ hrs every week</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Eliminate manual scheduling.</div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-white/5 align-self-stretch" />

            {/* Col 4 */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <Users className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">Right lead to the right rep</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Increase close conversions.</div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-white/5 align-self-stretch" />

            {/* Col 5 */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <BarChart3 className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">Real-time insights</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Track and optimize your funnel.</div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-white/5 align-self-stretch" />

            {/* Col 6 */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">Enterprise security</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Your data is always encrypted.</div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-white/5 align-self-stretch" />

            {/* Col 7 */}
            <div className="flex flex-col gap-2.5 px-4 text-left transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/18 flex items-center justify-center text-[#7C3AED]">
                <Bell className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] font-bold text-white">Automated follow-ups</div>
                <div className="text-[11px] text-[#94A3B8] leading-[1.3]">Never miss a valuable lead.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

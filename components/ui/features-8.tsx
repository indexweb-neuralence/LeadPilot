import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Calendar, Sparkles, RefreshCw, BarChart2, Bell, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Features() {
  return (
    <section className="bg-[#07070a] py-16 md:py-32 text-zinc-300">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-purple-500/5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Advanced Platform Features
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 font-sans">
            Scheduling that works. <br />
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Automation that follows.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            LeadPilot handles the entire meeting booking ecosystem. Host custom booking links, sync multiple calendars, route leads automatically, and create deals in your CRM.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: 100% White-Label (Top-Left) */}
          <Card className="md:col-span-2 group overflow-hidden relative border-zinc-800 bg-[#12111a]/40 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardContent className="p-8 flex flex-col justify-between h-full min-h-[340px]">
              {/* Graphic */}
              <div className="flex items-center justify-center py-6 relative">
                <div className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="relative flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-white tracking-tight font-mono z-10">100%</span>
                  {/* Oval loop graphic matching Customizable card */}
                  <svg className="absolute w-32 h-20 text-purple-500/60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M10,30 C10,15 90,15 90,30 C90,45 10,45 10,30 Z" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  White-Label Branding
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Host booking pages on your custom domain, adjust branding colors, and hide LeadPilot logos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Connected Calendars (Top-Middle) */}
          <Card className="md:col-span-2 group overflow-hidden relative border-zinc-800 bg-[#12111a]/40 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardContent className="p-8 flex flex-col justify-between h-full min-h-[340px]">
              {/* Fingerprint-style Calendar Scan Graphic */}
              <div className="flex items-center justify-center py-6 relative">
                <div className="absolute w-36 h-36 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="relative w-28 h-28 border border-zinc-800 rounded-full flex items-center justify-center bg-zinc-950/50 shadow-inner">
                  {/* Outer scan line */}
                  <motion.div 
                    className="absolute inset-1 border border-dashed border-purple-500/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <Calendar className="w-12 h-12 text-purple-400 z-10" />
                  
                  {/* Radar laser line */}
                  <motion.div 
                    className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    animate={{ y: [-48, 48, -48] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-purple-400" />
                  Secure 2-Way Sync
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Real-time calendar checking across Google, Outlook, and iCloud. Never double-book again.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Instant Conversion Funnel (Top-Right) */}
          <Card className="md:col-span-2 group overflow-hidden relative border-zinc-800 bg-[#12111a]/40 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardContent className="p-8 flex flex-col justify-between h-full min-h-[340px]">
              {/* Sparkline speed conversion graphic */}
              <div className="flex flex-col justify-center py-6 h-[120px] relative">
                <div className="absolute w-32 h-32 bg-pink-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex justify-between items-center mb-2 px-2 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-pink-500" /> Lead Captured</span>
                  <span className="font-mono text-zinc-400">14.34s booking response</span>
                </div>
                
                {/* SVG Sparkline */}
                <svg className="w-full h-16 text-pink-500" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EC4899" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,45 C20,40 40,55 60,35 C80,15 100,50 120,25 C140,0 160,20 180,10 C190,5 200,8 200,8 L200,60 L0,60 Z" 
                    fill="url(#chart-glow)" 
                  />
                  <motion.path 
                    d="M0,45 C20,40 40,55 60,35 C80,15 100,50 120,25 C140,0 160,20 180,10 C190,5 200,8 200,8" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-400" />
                  Instant CRM Capture
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Convert landing page traffic immediately. Redirect qualified prospects to booking slots.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Meeting Analytics Dashboard (Bottom-Left - Wide) */}
          <Card className="md:col-span-3 group overflow-hidden relative border-zinc-800 bg-[#12111a]/40 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center h-full min-h-[280px]">
              {/* Text */}
              <div className="flex flex-col justify-between h-full">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Meeting Analytics</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Track conversions, no-shows, conversion rates, and time saved per sales rep automatically inside your manager dashboard.
                  </p>
                </div>
              </div>
              
              {/* Line Chart Graphic */}
              <div className="border border-zinc-800 bg-zinc-950/80 rounded-xl p-4 h-[180px] flex flex-col justify-between relative shadow-inner">
                {/* Graph Dots */}
                <div className="flex justify-between items-center text-[10px] text-zinc-500 mb-2 border-bottom border-zinc-900 pb-2">
                  <span>Meetings Booked Trend</span>
                  <span className="text-purple-400 font-bold">▲ 32% this week</span>
                </div>
                
                {/* SVG Graph */}
                <div className="relative flex-1 w-full flex items-end">
                  <svg className="w-full h-full text-purple-500" viewBox="0 0 160 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="line-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,90 C20,70 40,85 60,60 C80,35 100,50 120,20 C140,40 160,10 160,10 L160,100 L0,100 Z" 
                      fill="url(#line-glow)" 
                    />
                    <motion.path 
                      d="M0,90 C20,70 40,85 60,60 C80,35 100,50 120,20 C140,40 160,10 160,10" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                  
                  {/* Glowing Pulse Dot */}
                  <motion.div 
                    className="absolute w-2 h-2 rounded-full bg-purple-400 border border-white"
                    style={{ right: '0px', top: '10%' }}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 5: Round-Robin Routing (Bottom-Right - Wide) */}
          <Card className="md:col-span-3 group overflow-hidden relative border-zinc-800 bg-[#12111a]/40 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center h-full min-h-[280px]">
              {/* Text */}
              <div className="flex flex-col justify-between h-full">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Round-Robin Routing</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Distribute booked appointments fairly across team reps. Set weights, active hours, and account ownership priority rules.
                  </p>
                </div>
              </div>
              
              {/* Team avatars composition floating */}
              <div className="relative h-[180px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute w-36 h-36 border border-zinc-800/40 rounded-full pointer-events-none" />
                <div className="absolute w-20 h-20 border border-zinc-800/30 rounded-full pointer-events-none" />
                
                {/* Floating Rep Card 1: Alex */}
                <motion.div 
                  className="absolute bg-zinc-900 border border-zinc-800 rounded-xl p-2 flex items-center gap-2 shadow-lg"
                  style={{ top: '15px', right: '10px' }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src="images/French male-profile.png" alt="Alex" className="w-6 h-6 rounded-full object-cover border border-purple-500" />
                  <span className="text-[10px] font-bold text-white">Alex R. (34%)</span>
                </motion.div>

                {/* Floating Rep Card 2: Jessica */}
                <motion.div 
                  className="absolute bg-zinc-900 border border-zinc-800 rounded-xl p-2 flex items-center gap-2 shadow-lg"
                  style={{ bottom: '15px', left: '10px' }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <img src="images/Latina Female-profile.png" alt="Jessica" className="w-6 h-6 rounded-full object-cover border border-pink-500" />
                  <span className="text-[10px] font-bold text-white">Jessica K. (33%)</span>
                </motion.div>

                {/* Floating Rep Card 3: Ryan */}
                <motion.div 
                  className="absolute bg-zinc-900 border border-zinc-800 rounded-xl p-2 flex items-center gap-2 shadow-lg"
                  style={{ bottom: '50px', right: '25px' }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-700 text-white font-extrabold text-[8px] flex items-center justify-center">RM</div>
                  <span className="text-[10px] font-bold text-white">Ryan M. (33%)</span>
                </motion.div>

                {/* Routing central icon with pulse */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white relative shadow-lg shadow-purple-500/20">
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-purple-400"
                    animate={{ scale: [1, 1.6, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  )
}

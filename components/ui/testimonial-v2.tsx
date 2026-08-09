import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  initials: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "We replaced five disconnected tools with LeadPilot's unified platform. In just 60 days, our B2B booking pipeline saw a 42% increase in sales activity.",
    image: "images/Sophia Laurent.png",
    name: "Sophia Laurent",
    role: "Operations Manager",
    company: "Vertex Hospitality",
    industry: "Hospitality",
    location: "Dubai, UAE",
    initials: "VH"
  },
  {
    text: "Our sales reps are booking qualified meetings automatically. The CRM syncing works flawlessly, saving our team 15+ hours of manual data entry every week.",
    image: "images/Daniel Brooks.png",
    name: "Daniel Brooks",
    role: "Managing Director",
    company: "NorthBridge Services",
    industry: "IT Services & Consulting",
    location: "Riyadh, Saudi Arabia",
    initials: "NB"
  },
  {
    text: "The lead scoring feature helps us prioritize high-value prospects instantly. We've seen a 28% boost in deal closure speed since deploying LeadPilot.",
    image: "images/Emma Clarke.png",
    name: "Emma Clarke",
    role: "General Manager",
    company: "Apex Facilities",
    industry: "Facilities Management",
    location: "Abu Dhabi, UAE",
    initials: "AF"
  },
  {
    text: "LeadPilot's chatbot and scheduling automation brings us qualified appointments 24/7. The lead routing is fast, and the interface is incredibly intuitive.",
    image: "images/Oliver James.png",
    name: "Oliver James",
    role: "Owner",
    company: "Green Kitchen",
    industry: "Food & Beverage",
    location: "Doha, Qatar",
    initials: "GK"
  },
  {
    text: "Our sales team is more focused and efficient than ever. With the AI sales coach, we know exactly which deals need immediate attention and why.",
    image: "images/Isabella Martin.png",
    name: "Isabella Martin",
    role: "Director",
    company: "Flame House",
    industry: "Real Estate",
    location: "Manama, Bahrain",
    initials: "FH"
  },
  {
    text: "Our outreach response rates doubled within the first month. The ability to find qualified local prospects and sync them directly to our pipeline is a game-changer.",
    image: "images/Female-profile.png",
    name: "Aliza Khan",
    role: "Sales Director",
    company: "Kalima Curtains",
    industry: "Home Furnishing & Interiors",
    location: "Dubai, UAE",
    initials: "KC"
  },
  {
    text: "LeadPilot solved our biggest bottleneck: consistent lead flow. The automated follow-ups are highly personalized and convert at an impressive rate.",
    image: "images/Male-profile.png",
    name: "Bilal Ahmed",
    role: "Operations Director",
    company: "Mazmo Environmental",
    industry: "Environmental Services",
    location: "Abu Dhabi, UAE",
    initials: "ME"
  },
  {
    text: "We've consolidated our sales stack and reduced software costs by 50%. The platform is stable, powerful, and the customer support team is outstanding.",
    image: "images/French male-profile.png",
    name: "Saman Malik",
    role: "Head of Sales",
    company: "Atlas Jewelry",
    industry: "Retail & Luxury Goods",
    location: "Sharjah, UAE",
    initials: "AJ"
  },
  {
    text: "The ROI was clear within two weeks. We are booking more high-ticket meetings and closing enterprises that were previously impossible to reach.",
    image: "images/Latina Female-profile.png",
    name: "Hassan Ali",
    role: "E-commerce Manager",
    company: "Zenith Trading",
    industry: "E-commerce & Retail",
    location: "Muscat, Oman",
    initials: "ZT"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  direction?: 'up' | 'down';
}) => {
  return (
    <div className={props.className} style={{ overflow: 'hidden', height: '100%' }}>
      <ul
        className={`flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0 hover:[animation-play-state:paused] ${
          props.direction === 'down' ? 'animate-scroll-down' : 'animate-scroll-up'
        }`}
        style={{
          animationDuration: `${props.duration || 22}s`,
          willChange: 'transform',
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, company, industry, location, initials }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 flex flex-col justify-between" 
                >
                  <blockquote className="m-0 p-0 flex flex-col h-full justify-between">
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 text-amber-500 text-sm mb-4">
                        {"★".repeat(5)}
                      </div>
                      
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal m-0 transition-colors duration-300 text-sm">
                        "{text}"
                      </p>
                    </div>

                    <div>
                      <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-5" />

                      <footer className="flex items-center gap-3">
                        {/* Company Initials Logo Box */}
                        <div className="h-10 w-10 rounded-xl bg-neutral-105 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center font-extrabold text-xs text-neutral-850 dark:text-neutral-200 shadow-sm shrink-0">
                          {initials}
                        </div>

                        <div className="flex flex-col min-w-0">
                          <cite className="font-bold not-italic tracking-tight leading-4 text-neutral-900 dark:text-white transition-colors duration-300 text-sm truncate">
                            {company}
                          </cite>
                          <span className="text-xs leading-4 text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                            {industry}
                          </span>
                          <span className="text-[10px] leading-3 text-pink-500 dark:text-pink-400 font-semibold mt-0.5 flex items-center gap-0.5">
                            📍 {location}
                          </span>
                        </div>
                      </footer>

                      {/* Author Info */}
                      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-dashed border-neutral-100 dark:border-neutral-800/60">
                        <img
                          width={24}
                          height={24}
                          src={image}
                          alt={`Avatar of ${name}`}
                          className="h-6 w-6 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
                        />
                        <div className="flex flex-col">
                          <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 leading-3">{name}</span>
                          <span className="text-[9px] text-neutral-400 dark:text-neutral-500 leading-3">{role}</span>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      {/* Styles Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up var(--duration, 22s) linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down var(--duration, 22s) linear infinite;
        }
      `}} />

      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[580px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
              WHAT OUR CUSTOMERS SAY
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 dark:text-white transition-colors">
            Real results from real businesses <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">using LeadPilot.</span>
          </h2>
          <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-xl transition-colors">
            Sales teams across industries are replacing disconnected tools with LeadPilot and seeing measurable impact.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={22} direction="up" />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} direction="down" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} direction="up" />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col justify-center relative selection:bg-primary selection:text-white">
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <TestimonialsSection />
    </div>
  );
}

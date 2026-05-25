import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Mail, CheckCircle2, RefreshCw, Github, Linkedin, Twitter, Globe, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");

    // Minimal client validation
    if (!formName.trim()) {
      setErrorText("Please state your name.");
      return;
    }
    if (!formEmail.trim() || !formEmail.includes("@")) {
      setErrorText("Please provide a valid email secure address.");
      return;
    }
    if (!formMessage.trim()) {
      setErrorText("Please write high fidelity project guidelines in the messaging field.");
      return;
    }

    // Interactive trigger simulation
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormName("");
    setFormEmail("");
    setFormMessage("");
    setIsSuccess(false);
    setErrorText("");
  };

  return (
    <section 
      id="contact" 
      className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-20 border-t border-neutral-900 bg-black/35 backdrop-blur-md rounded-3xl mt-12 overflow-hidden"
    >
      {/* Background spot light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.03),transparent_75%)] pointer-events-none rounded-full blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
        
        {/* Left Column: Social Links / Brand Copy (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-12">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] font-mono uppercase tracking-widest text-[#FF4D1C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect Globally</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-sans font-normal tracking-tight text-white leading-none">
              Initiate a brief <br />
              Project <span className="font-serif-custom italic text-[#FF4D1C] font-normal tracking-wide">Inquiry</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-sm">
              Do you have a project idea, web application build, or design system requirements? Submit a message and I will review and reply within 24 working hours.
            </p>
          </div>

          {/* Social Icons row */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold block mb-1">
              </span>
              <div className="text-sm font-semibold text-white flex items-center gap-2 hover:text-[#FF4D1C] transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#FF4D1C]" />
                <span>sankalpasithmina18@gmail.com</span>
              </div>
              <div className="text-sm font-semibold text-neutral-300 flex items-center gap-2 hover:text-[#FF4D1C] transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-[#FF4D1C]" />
                <span>569/1/3, Kandy Road, Ghanikkulama, Anuradhapura</span>
              </div>
            </div>

            {/* Connect With Me label */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold block">
                Connect With Me
              </span>
              {/* Icons wrapper */}
              <div className="flex flex-wrap gap-4 pt-1" id="social-handles-container">
              {[
                { label: "GitHub", href: "https://github.com", icon: <Github className="w-5 h-5" /> },
                { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
                { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
                { label: "Web Portal", href: "#home", icon: <Globe className="w-5 h-5" /> }
              ].map((item, id) => (
                <a
                  key={id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/40 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          </div>

        </div>

        {/* Right Column: Direct Interactive Contact Form Card (Span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center" id="contact-form-bento">
          <div className="bg-[#030303] border border-neutral-900 hover:border-neutral-800/80 rounded-3xl p-6 sm:p-8 transition-colors relative min-h-[360px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  {/* Name field */}
                  <div className="space-y-1.5 flex flex-col">
                    <label 
                      htmlFor="contact-name"
                      className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold"
                    >
                      Your Identification Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Aidan Sterling"
                      className="w-full bg-[#050505] border border-neutral-900/80 focus:border-[#FF4D1C]/60 text-white rounded-xl px-4 py-3 placeholder-neutral-700 text-sm focus:outline-none transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 flex flex-col">
                    <label 
                      htmlFor="contact-email"
                      className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold"
                    >
                      Sovereign Return Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. aidan@metasynth.com"
                      className="w-full bg-[#050505] border border-neutral-900/80 focus:border-[#FF4D1C]/60 text-white rounded-xl px-4 py-3 placeholder-neutral-700 text-sm focus:outline-none transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5 flex flex-col">
                    <label 
                      htmlFor="contact-message"
                      className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold"
                    >
                      Project Guidelines / Inquiries
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="e.g. Seeking high fidelity web interface development..."
                      className="w-full bg-[#050505] border border-neutral-900/80 focus:border-[#FF4D1C]/60 text-white rounded-xl px-4 py-3 placeholder-neutral-700 text-sm focus:outline-none transition-colors resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Client side error logging */}
                  {errorText && (
                    <div className="text-red-500 text-xs font-mono font-semibold" id="contact-error-trace">
                      ⚠ {errorText}
                    </div>
                  )}

                  {/* Submit code button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative flex items-center justify-between bg-gradient-to-r from-[#E0360D] to-[#FF4D1C] text-white pl-6 pr-3 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer pointer-events-auto shadow-xl shadow-[#FF4D1C]/10"
                      id="btn-contact-submit"
                    >
                      <span>{isSubmitting ? "Broadcasting message..." : "Transmit secure message"}</span>
                      <div className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center shrink-0 group-hover:translate-x-0.5 duration-300">
                        <Send className="w-3 h-3 text-black" />
                      </div>
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success-prompt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="flex justify-center" id="checked-circle-success">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-[#FF4D1C]" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-normal text-white">
                      Transmission Successful!
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm mx-auto leading-relaxed">
                      Sankalpa, your safe entry message has been broadcasted to the terminal system successfully. Expect a fast response at <span className="text-white font-mono">{formEmail}</span>.
                    </p>
                  </div>

                  {/* Brief metadata mock logic for high-fidelity look */}
                  <div className="bg-neutral-950/60 border border-neutral-900 rounded-2xl p-4 max-w-sm mx-auto text-left text-[11px] font-mono text-neutral-500 space-y-1">
                    <div><span className="text-neutral-600 font-bold">NODE_STREAM:</span> ACTIVE_PORT_3K</div>
                    <div><span className="text-neutral-600 font-bold">CLIENT_REF:</span> {formName.toUpperCase().replace(/\s/g, "_")}</div>
                    <div><span className="text-neutral-600 font-bold">STATUS_SIG:</span> AUTH_TRANSMITTED</div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl border border-neutral-800 bg-neutral-900 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer pointer-events-auto"
                      id="btn-contact-reset"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Transmit another prompt</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Send, CheckCircle2, Building, ShieldCheck, Mail, User } from "lucide-react";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export default function OnboardingModal({ isOpen, onClose, userEmail }: OnboardingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userEmail || "");
  const [useCase, setUseCase] = useState("AI Smart Sync");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName("");
    setNote("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="onboarding-modal-root">
          {/* Dark Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-10"
            id="onboarding-card"
          >
            {/* Ambient Red Blur Effect in the base background */}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-48 h-48 bg-[#FF4D1C]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="p-6 md:p-8 relative z-10">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#FF4D1C]" />
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      Welcome to Chativ Space
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white font-sans">
                    Initialize Workspace
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  id="close-onboarding"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Content */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" id="onboarding-form">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Set up your hyper-modern chat sandbox. Prefilled for immediate access.
                  </p>

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-neutral-400">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#FF4D1C] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-neutral-400">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-[#FF4D1C] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors cursor-not-allowed"
                        disabled
                        title="Provided by system environment"
                      />
                    </div>
                    <span className="text-[10px] text-neutral-500">
                      System-provided email is locked for authentic registration.
                    </span>
                  </div>

                  {/* Feature Interest Segment Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-neutral-400">Choose Segment Focus</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "AI Smart Sync", label: "AI Smart Sync" },
                        { id: "Custom SDK", label: "Custom SDK" },
                        { id: "Global Router", label: "Global Router" },
                        { id: "Compliance Desk", label: "Compliance Desk" }
                      ].map((pkg) => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setUseCase(pkg.id)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                            useCase === pkg.id
                              ? "border-[#FF4D1C]/50 bg-[#FF4D1C]/10 text-[#FF4D1C]"
                              : "border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-400"
                          }`}
                        >
                          {pkg.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Focus/Notes */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-neutral-400">Comments or Direct Request</label>
                    <textarea
                      placeholder="Tell us about your digital setup (optional)..."
                      rows={2}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#FF4D1C] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-11 bg-gradient-to-r from-[#E0360D] to-[#FF4D1C] hover:opacity-95 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 group transition-opacity relative overflow-hidden cursor-pointer"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Provision Gateway</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4" id="onboarding-success">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white">Gateway Configured!</h4>
                    <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-[#FF4D1C] font-semibold">{name}</span>. We've established your
                      sandbox focusing on <span className="text-white font-medium">{useCase}</span>.
                    </p>
                  </div>
                  <div className="bg-neutral-900/60 border border-neutral-800/80 p-3.5 rounded-2xl text-[11px] text-neutral-400 flex flex-col items-start gap-1 max-w-sm mx-auto font-mono text-left">
                    <div className="flex items-center gap-1.5 text-neutral-300 font-semibold mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D1C]" />
                      <span>PROVISION SUMMARY:</span>
                    </div>
                    <div>• USER_EMAIL: {email}</div>
                    <div>• WORKSPACE_FOCUS: {useCase}</div>
                    <div>• NODE_STATUS: DEPLOYED (Port 3000 Ingress)</div>
                    <div>• GATEWAY_TUNNEL: LOCAL_SECURE</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      onClose();
                    }}
                    className="px-5 py-2 rounded-xl text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Close Console
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

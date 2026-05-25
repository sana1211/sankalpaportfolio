import { useState, useEffect } from "react";

export default function SriLankaClock() {
  const [timeStr, setTimeStr] = useState("05:30 PM (SL)");

  useEffect(() => {
    const updateTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        // Formatter outputs something like "05:30 PM"
        const formatted = formatter.format(new Date());
        
        // Let's clean up any double spaces or non-breaking spaces
        const cleaned = formatted.replace(/\s+/g, " ");
        setTimeStr(`${cleaned} (SL)`);
      } catch (e) {
        // Fallback using manual UTC+5.5 calculation
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const slTime = new Date(utc + 3600000 * 5.5);
        const hours = String(slTime.getHours() % 12 || 12).padStart(2, "0");
        const minutes = String(slTime.getMinutes()).padStart(2, "0");
        const ampm = slTime.getHours() >= 12 ? "PM" : "AM";
        setTimeStr(`${hours}:${minutes} ${ampm} (SL)`);
      }
    };

    updateTime();
    // Update every 15 seconds to look precise without heavy re-renders
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="font-sans text-[13px] font-medium tracking-wide text-neutral-400 hover:text-white transition-colors duration-300 cursor-help flex items-center gap-1.5"
      id="sri-lanka-clock"
      title="Live Sri Lanka Standard Time (Colombo)"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] animate-ping duration-1000 hidden sm:inline-block"></span>
      {timeStr}
    </div>
  );
}

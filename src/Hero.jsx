import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  const [ctaState, setCtaState] = useState("button");
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const typeTimerRef = useRef(null);
  const resetTimerRef = useRef(null);
  const fullText = "Enter Your Email Here For Early Access";
  const successText = "You Will Receive Notifications By Email";

  useEffect(() => {
    if (ctaState === "form" && !isTyping) {
      setIsTyping(true);
      let index = 0;
      setPlaceholder("");
      typeTimerRef.current = setInterval(() => {
        if (index < fullText.length) {
          setPlaceholder((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typeTimerRef.current);
          setIsTyping(false);
        }
      }, 60);
    }
    return () => clearInterval(typeTimerRef.current);
  }, [ctaState]);

  useEffect(() => {
    if (ctaState === "form" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [ctaState]);

  useEffect(() => {
    return () => clearTimeout(resetTimerRef.current);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (ctaState === "form") {
      setCtaState("success");
      setIsTyping(true);
      let index = 0;
      setPlaceholder("");
      clearInterval(typeTimerRef.current);
      typeTimerRef.current = setInterval(() => {
        if (index < successText.length) {
          setPlaceholder((prev) => prev + successText.charAt(index));
          index++;
        } else {
          clearInterval(typeTimerRef.current);
          setIsTyping(false);
        }
      }, 60);

      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        setCtaState("button");
        setEmail("");
        setPlaceholder("");
        setIsTyping(false);
      }, 4000);
    }
  };

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
        >
          BUILD A NO-CODE AI APP IN MINUTES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
        >
          A new way to think <br className="hidden md:block" /> and create with
          computers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="min-h-[50px] mt-2"
        >
          <AnimatePresence mode="wait">
            {ctaState === "button" && (
              <motion.button
                key="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setCtaState("form")}
                className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer"
              >
                Get early access
              </motion.button>
            )}

            {ctaState === "form" && (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleFormSubmit}
                className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[320px] focus-within:border-white/40 transition-colors duration-300"
              >
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  className="bg-transparent border-none outline-none text-white/90 placeholder:text-white/40 flex-1 min-w-0 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-white/70" />
                </button>
              </motion.form>
            )}

            {ctaState === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[320px]"
              >
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white/90 truncate">{placeholder}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#"
            className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide"
          >
            Play Video Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

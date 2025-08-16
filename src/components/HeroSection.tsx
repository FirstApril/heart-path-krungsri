import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const motivationalPhrases = [
    "ใจเราเข้าใจ ความผิดพลาดไม่ใช่จุดจบ",
    "เริ่มต้นใหม่ได้เสมอ",
    "ความจริงใจคือก้าวแรกของการไถ่บาป",
    "ยื่นมือมาเรื่อยเพื่อความถูกต้อง"
  ];

  const backgroundImages = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % motivationalPhrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [motivationalPhrases.length]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {backgroundImages.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 slideshow-fade opacity-0 ${
            index === Math.floor(Date.now() / 5000) % backgroundImages.length ? 'opacity-100' : ''
          }`}
          style={{ background: bg }}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        style={{ background: "var(--hero-overlay)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-primary drop-shadow-lg">เว็บไถ่บาป</span>
            <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
              powered by กรุงศรี
            </span>
          </h1>
          
          {/* Rotating Motivational Phrases */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-medium transition-all duration-500 drop-shadow-md">
              {motivationalPhrases[currentPhrase]}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-xl transition-smooth"
          >
            <Shield className="mr-2 h-6 w-6" />
            เข้าสู่ระบบไถ่บาป
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-8 py-6 rounded-xl shadow-xl backdrop-blur-sm transition-smooth"
          >
            <CheckCircle className="mr-2 h-6 w-6" />
            ประเมินสถานการณ์ของฉัน
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 flex items-center justify-center space-x-2 text-white/80">
          <Shield className="h-5 w-5" />
          <span className="text-sm">ข้อมูลของคุณปลอดภัย • รับประกันความเป็นส่วนตัว</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
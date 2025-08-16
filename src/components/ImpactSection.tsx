import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, AlertTriangle, DollarSign, Heart } from "lucide-react";

const ImpactSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const impactData = [
    {
      icon: AlertTriangle,
      title: "บัญชีมิวล์ในไทย",
      number: "1.2M+",
      description: "บัญชีที่ถูกใช้ในทางที่ผิด",
      detail: "หลายคนไม่รู้ตัวว่ากำลังเป็นส่วนหนึ่งของปัญหา"
    },
    {
      icon: DollarSign,
      title: "ความเสียหายทางการเงิน",
      number: "₿2.8B",
      description: "มูลค่าความเสียหายต่อปี",
      detail: "ผลกระทบต่อระบบการเงินและผู้บริโภค"
    },
    {
      icon: Heart,
      title: "คนที่กลับใจและต้องการช่วยเหลือ",
      number: "15,000+",
      description: "ผู้ที่ขอความช่วยเหลือ",
      detail: "พวกเขาได้รับการสนับสนุนและแนวทางแก้ไข"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % impactData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + impactData.length) % impactData.length);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ผลกระทบที่เราต้องเผชิญร่วมกัน
          </h2>
          <p className="text-lg text-muted-foreground">
            ข้อมูลเหล่านี้ไม่ใช่เพื่อหลอกกลัว แต่เพื่อให้เข้าใจปัญหาและหาทางออกร่วมกัน
          </p>
        </div>

        {/* Impact Slider */}
        <div className="relative">
          <Card className="bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-80 flex items-center justify-center">
                {impactData.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-500 ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="mb-6">
                      <div className="p-4 rounded-2xl bg-primary/10 inline-flex">
                        <item.icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                        {item.number}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 max-w-md">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {impactData.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ทุกตัวเลขคือชีวิตคน เราอยู่ที่นี่เพื่อช่วยเหลือและสร้างอนาคตที่ดีกว่าร่วมกัน
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
import { Heart, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StorySection = () => {
  const stories = [
    {
      icon: Heart,
      title: "ความเข้าใจและอโหสิกรรม",
      description: "เราเชื่อว่าทุกคนมีสิทธิ์ได้รับโอกาสในการเริ่มต้นใหม่ เมื่อพร้อมจะยอมรับและแก้ไขสิ่งที่ผิดพลาด"
    },
    {
      icon: Users,
      title: "ชุมชนแห่งการช่วยเหลือ",
      description: "หลายพันคนได้ใช้แพลตฟอร์มนี้เพื่อขอความช่วยเหลือ และได้รับการสนับสนุนจากผู้เชี่ยวชาญ"
    },
    {
      icon: ArrowRight,
      title: "เส้นทางสู่อนาคตที่ดีกว่า",
      description: "ไม่ใช่แค่การแก้ปัญหา แต่เป็นการสร้างอนาคตที่สดใสและมั่นคงให้กับตัวคุณและครอบครัว"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            เรื่องราวที่เปลี่ยนชีวิต
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ทุกคนสมควรได้รับโอกาสครั้งที่สอง เราอยู่ที่นี่เพื่อเดินไปข้างหน้าด้วยกัน
            ด้วยความเข้าใจ ความอดทน และความหวังในอนาคตที่ดีกว่า
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    <story.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-primary font-medium">
            <span>พร้อมจะเริ่มต้นเส้นทางใหม่แล้วหรือยัง?</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
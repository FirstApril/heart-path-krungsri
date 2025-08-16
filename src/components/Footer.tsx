import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">เว็บไถ่บาป</span>
                <span className="text-sm text-muted-foreground">powered by กรุงศรี</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              แพลตฟอร์มที่ให้ความช่วยเหลือและแนวทางแก้ไขสำหรับผู้ที่ต้องการเริ่มต้นใหม่
              ด้วยความเข้าใจและการสนับสนุนจากผู้เชี่ยวชาญ
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                ความปลอดภัยและความเป็นส่วนตัวเป็นสิ่งสำคัญที่สุด
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {[
                { label: "หน้าแรก", href: "/" },
                { label: "เกี่ยวกับเรา", href: "/about" },
                { label: "วิธีการใช้งาน", href: "/how-to" },
                { label: "คำถามที่พบบ่อย", href: "/faq" },
                { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">ติดต่อเรา</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">help@thaibap.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)<br />
                  เลขที่ 1222 ถนนพระราม 3<br />
                  แขวงบางโพ เขตบางรัก กรุงเทพฯ 10500
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 เว็บไถ่บาป powered by กรุงศรี. สงวนลิขสิทธิ์ทุกประการ
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              ข้อกำหนดการใช้งาน
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              นโยบายความเป็นส่วนตัว
            </a>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              รับรองโดยธนาคารกรุงศรีอยุธยา
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
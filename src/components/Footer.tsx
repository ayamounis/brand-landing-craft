import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Star, Heart, Truck, Shield } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "منتجاتنا", href: "#services" },
    { name: "لماذا يونا", href: "#why-choose-us" },
    { name: "تواصلي معنا", href: "#contact" }
  ];

  const products = [
    "منتجات العناية بالوجه",
    "منتجات العناية بالجسم", 
    "منتجات العناية بالشعر",
    "علاج مشاكل البشرة",
    "منتجات مكافحة الشيخوخة",
    "منتجات البشرة الحساسة"
  ];

  const services = [
    "استشارة مجانية",
    "تحليل نوع البشرة",
    "برامج عناية مخصصة",
    "متابعة النتائج",
    "توصيل مجاني",
    "ضمان 30 يوم"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-natural-green-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-natural-green">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-right">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                اشتركي في النشرة الإخبارية
              </h3>
              <p className="text-natural-green-light mb-6">
                احصلي على أحدث النصائح والعروض الحصرية لمنتجات العناية بالبشرة
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="ادخلي بريدك الإلكتروني"
                className="bg-white text-natural-green-dark border-0 text-right flex-1"
              />
              <Button 
                className="bg-soft-pink hover:bg-soft-pink-accent text-primary whitespace-nowrap"
                size="lg"
              >
                اشتراك
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="text-natural-green-dark font-bold text-xl">ي</span>
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold">يونا</h3>
                <p className="text-sm text-natural-green-light">للعناية بالبشرة</p>
              </div>
            </div>
            
            <p className="text-natural-green-light leading-relaxed">
              علامة تجارية رائدة في مجال منتجات العناية الطبيعية بالبشرة. 
              نحن ملتزمون بتقديم أفضل المنتجات الطبيعية والآمنة.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-natural-green-light">الرياض - جدة - المنطقة الشرقية</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-natural-green-light">+966 50 000 0000</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-natural-green-light">info@yunaskincare.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4 space-x-reverse">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-natural-green-dark"
                onClick={() => window.open("https://wa.me/966500000000")}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-natural-green-dark"
                onClick={() => window.open("https://instagram.com/yunaskincare")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-right">روابط سريعة</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-right text-natural-green-light hover:text-gold transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-right">منتجاتنا</h4>
            <div className="space-y-3">
              {products.map((product, index) => (
                <div key={index} className="text-right text-natural-green-light hover:text-gold transition-colors cursor-pointer">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-right">خدماتنا</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-right text-natural-green-light hover:text-gold transition-colors cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-natural-green">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">منتجات آمنة 100%</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Truck className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">توصيل مجاني</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">ضمان الجودة</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">5000+ عميلة راضية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-natural-green">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right text-natural-green-light text-sm">
              © 2024 يونا للعناية بالبشرة. جميع الحقوق محفوظة.
            </div>
            
            <div className="flex space-x-6 space-x-reverse text-sm">
              <button className="text-natural-green-light hover:text-gold transition-colors">
                سياسة الخصوصية
              </button>
              <button className="text-natural-green-light hover:text-gold transition-colors">
                الشروط والأحكام
              </button>
              <button className="text-natural-green-light hover:text-gold transition-colors">
                سياسة الإرجاع
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg animate-bounce"
          onClick={() => window.open("https://wa.me/966500000000?text=مرحباً، أرغب في استشارة مجانية للعناية بالبشرة", "_blank")}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
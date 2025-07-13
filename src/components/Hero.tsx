import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-skincare.jpg";

const Hero = () => {
  const handleWhatsAppConsultation = () => {
    window.open("https://wa.me/966500000000?text=مرحباً، أرغب في استشارة مجانية للعناية بالبشرة", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-natural-green animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-soft-pink animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gold animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-6">
            <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-gold animate-pulse" />
              <span className="text-sm font-medium text-natural-green bg-natural-green-light px-4 py-2 rounded-full">
                100% طبيعي و آمن
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-natural-green-dark leading-tight">
              بشرة صحية ومشرقة
              <span className="block text-soft-pink-accent">طبيعياً</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              اكتشفي جمال بشرتك الطبيعي مع منتجات يونا للعناية بالبشرة. 
              مكونات طبيعية 100% ونتائج مضمونة لبشرة مثالية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button 
                size="lg" 
                className="bg-natural-green hover:bg-natural-green-dark text-primary-foreground shadow-natural transition-all duration-300 transform hover:scale-105"
                onClick={handleWhatsAppConsultation}
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                استشارة مجانية
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-soft-pink text-soft-pink-accent hover:bg-soft-pink hover:text-primary transition-all duration-300"
              >
                تسوقي الآن
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end gap-8 mt-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-2xl text-natural-green">10+</div>
                <div>سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-natural-green">5000+</div>
                <div>عميلة راضية</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-natural-green">30</div>
                <div>يوم ضمان</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Yuna Skincare - Natural Beauty" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-natural-green/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gold text-white p-4 rounded-2xl shadow-lg animate-bounce">
              <span className="text-sm font-bold">توصيل مجاني</span>
              <div className="text-xs">للطلبات +200 ريال</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-soft-pink text-primary p-4 rounded-2xl shadow-lg animate-pulse">
              <span className="text-sm font-bold">ضمان الجودة</span>
              <div className="text-xs">مكونات طبيعية معتمدة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Leaf, Heart, Gift, UserCheck } from "lucide-react";
import naturalProducts from "@/assets/natural-products.jpg";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "منتجات العناية بالوجه",
      description: "كريمات، أمصال، وأقنعة طبيعية للحصول على بشرة نضرة ومشرقة",
      features: ["كريم الترطيب الطبيعي", "أمصال مكافحة الشيخوخة", "أقنعة التنظيف العميق", "مقشرات لطيفة"],
      color: "natural-green"
    },
    {
      icon: Sparkles,
      title: "منتجات العناية بالجسم",
      description: "لوشن، مقشرات، وزيوت طبيعية للعناية الشاملة بجسمك",
      features: ["لوشن الترطيب اليومي", "مقشرات الجسم الطبيعية", "زيوت التدليك العطرية", "كريمات مناطق حساسة"],
      color: "soft-pink"
    },
    {
      icon: Leaf,
      title: "منتجات العناية بالشعر",
      description: "شامبو، بلسم، وزيوت طبيعية لشعر صحي ولامع",
      features: ["شامبو خالي من الكبريتات", "بلسم طبيعي مغذي", "زيوت تقوية الشعر", "ماسكات ترطيب الشعر"],
      color: "gold"
    },
    {
      icon: UserCheck,
      title: "استشارات مجانية",
      description: "استشارة شخصية مع خبراء العناية لتحديد نوع بشرتك وبرنامج العناية المناسب",
      features: ["تحليل نوع البشرة", "برنامج عناية مخصص", "متابعة النتائج", "نصائح يومية"],
      color: "natural-green"
    },
    {
      icon: Heart,
      title: "علاج مشاكل البشرة",
      description: "منتجات متخصصة لعلاج حب الشباب، التصبغات، والجفاف",
      features: ["علاج حب الشباب", "توحيد لون البشرة", "مكافحة التجاعيد", "ترطيب البشرة الجافة"],
      color: "soft-pink"
    },
    {
      icon: Gift,
      title: "باقات وهدايا",
      description: "باقات مصممة خصيصاً للمناسبات الخاصة والهدايا المميزة",
      features: ["باقة العروس", "هدايا المناسبات", "باقات شهرية", "بوكسات مفاجآت"],
      color: "gold"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "natural-green":
        return "bg-natural-green-light text-natural-green-dark border-natural-green";
      case "soft-pink":
        return "bg-soft-pink text-primary border-soft-pink-accent";
      case "gold":
        return "bg-gold-light text-natural-green-dark border-gold";
      default:
        return "bg-natural-green-light text-natural-green-dark border-natural-green";
    }
  };

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            خدماتنا ومنتجاتنا
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من منتجات العناية الطبيعية والخدمات المتخصصة 
            لتلبية جميع احتياجات بشرتك وشعرك بأمان وفعالية
          </p>
        </div>

        {/* Featured Product Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <img 
              src={naturalProducts} 
              alt="Natural Skincare Products" 
              className="rounded-3xl shadow-elegant max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-4 rounded-2xl shadow-lg">
              <span className="text-sm font-bold">منتجات طبيعية 100%</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-natural hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-natural-green-dark">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-natural-green">يشمل:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-soft-pink rounded-full ml-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-natural-green text-natural-green hover:bg-natural-green hover:text-white transition-all duration-300"
                >
                  اعرف المزيد
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero p-12 rounded-3xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark mb-6">
            احصلي على استشارة مجانية اليوم
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            دعي خبراءنا يساعدونك في اختيار أفضل منتجات العناية المناسبة لنوع بشرتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-natural-green hover:bg-natural-green-dark text-primary-foreground shadow-natural"
              onClick={() => window.open("https://wa.me/966500000000?text=مرحباً، أرغب في استشارة مجانية", "_blank")}
            >
              احجزي استشارتك المجانية
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-soft-pink text-soft-pink-accent hover:bg-soft-pink hover:text-primary"
            >
              تصفحي المنتجات
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
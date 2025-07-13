import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Heart, Truck, Users, Star } from "lucide-react";
import skinTransformation from "@/assets/skin-transformation.jpg";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "مكونات طبيعية 100%",
      description: "جميع منتجاتنا خالية من المواد الكيميائية الضارة والبارابين والكبريتات",
      stat: "100%",
      statLabel: "طبيعي"
    },
    {
      icon: Award,
      title: "شهادات دولية معتمدة",
      description: "حاصلون على شهادات الجودة من أفضل المختبرات العالمية",
      stat: "15+",
      statLabel: "شهادة جودة"
    },
    {
      icon: Heart,
      title: "مناسب للبشرة الحساسة",
      description: "تركيبات لطيفة ومختبرة من قبل أطباء الجلدية للبشرة الحساسة",
      stat: "98%",
      statLabel: "رضا العملاء"
    },
    {
      icon: Truck,
      title: "توصيل مجاني سريع",
      description: "توصيل مجاني لجميع أنحاء المملكة للطلبات أكثر من 200 ريال",
      stat: "24",
      statLabel: "ساعة توصيل"
    },
    {
      icon: Users,
      title: "خبرة أكثر من 10 سنوات",
      description: "فريق من الخبراء المتخصصين في العناية بالبشرة والجمال الطبيعي",
      stat: "10+",
      statLabel: "سنة خبرة"
    },
    {
      icon: Star,
      title: "ضمان 30 يوم",
      description: "ضمان استرداد الأموال خلال 30 يوم إذا لم تكوني راضية عن النتائج",
      stat: "30",
      statLabel: "يوم ضمان"
    }
  ];

  const testimonials = [
    {
      name: "فاطمة الأحمد",
      age: "28 سنة",
      review: "منتجات يونا غيرت بشرتي تماماً! بشرتي أصبحت أنعم وأكثر إشراقاً. أنصح بها بقوة.",
      rating: 5,
      city: "الرياض"
    },
    {
      name: "سارة محمد",
      age: "35 سنة", 
      review: "استخدمت منتجات كثيرة لكن يونا الوحيدة اللي عطتني نتائج حقيقية. خاصة كريم مكافحة الشيخوخة.",
      rating: 5,
      city: "جدة"
    },
    {
      name: "نورا العتيبي",
      age: "22 سنة",
      review: "بشرتي حساسة جداً ومنتجات يونا اللطيفة ما سببت لي أي تحسس. النتائج رائعة!",
      rating: 5,
      city: "الدمام"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="why-choose-us">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            لماذا تختارين يونا؟
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن لسنا مجرد علامة تجارية، بل شريك موثوق في رحلتك نحو جمال طبيعي وصحي
          </p>
        </div>

        {/* Main Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-0 shadow-natural hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-natural rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gold text-white text-xs px-2 py-1 rounded-full font-bold">
                    {advantage.stat}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-natural-green-dark">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="text-sm text-gold font-semibold">
                    {advantage.statLabel}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark">
              نتائج حقيقية، تغيير ملحوظ
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              شاهدي التحول الحقيقي الذي حققته عملاؤنا باستخدام منتجات يونا الطبيعية.
              نتائج مضمونة خلال 4-6 أسابيع من الاستخدام المنتظم.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-natural-green rounded-full"></div>
                <span className="text-muted-foreground">تحسن ملحوظ في ملمس البشرة خلال أسبوعين</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-soft-pink rounded-full"></div>
                <span className="text-muted-foreground">إشراق طبيعي يظهر من الأسبوع الأول</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="text-muted-foreground">ترطيب عميق يدوم 24 ساعة</span>
              </div>
            </div>
            
            <div className="bg-gradient-hero p-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-natural-green mb-2">96%</div>
                <div className="text-sm text-muted-foreground">من عملائنا لاحظوا تحسناً ملحوظاً خلال شهر</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={skinTransformation} 
              alt="Skin Transformation Results" 
              className="rounded-3xl shadow-elegant w-full"
            />
            <div className="absolute top-4 left-4 bg-natural-green text-white p-3 rounded-xl">
              <span className="text-sm font-bold">نتائج حقيقية</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-gold text-white p-3 rounded-xl">
              <span className="text-sm font-bold">خلال 30 يوم</span>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="space-y-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark text-center">
            ماذا تقول عملاؤنا؟
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-pink hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-natural-green-dark">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.age} - {testimonial.city}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <span className="text-xs text-gold font-semibold">عميلة معتمدة ✓</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-natural-green">5000+</div>
            <div className="text-sm text-muted-foreground">عميلة راضية</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-soft-pink-accent">98%</div>
            <div className="text-sm text-muted-foreground">معدل الرضا</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gold">24/7</div>
            <div className="text-sm text-muted-foreground">دعم العملاء</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-natural-green">30</div>
            <div className="text-sm text-muted-foreground">يوم ضمان</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
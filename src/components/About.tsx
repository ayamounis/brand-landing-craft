import { Heart, Award, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "طبيعي 100%",
      description: "جميع منتجاتنا مصنوعة من مكونات طبيعية وعضوية معتمدة بدون مواد كيميائية ضارة"
    },
    {
      icon: Award,
      title: "جودة معتمدة",
      description: "نحرص على أعلى معايير الجودة مع شهادات اعتماد دولية واختبارات صارمة"
    },
    {
      icon: Heart,
      title: "مناسب للبشرة العربية",
      description: "تركيبات مبتكرة مصممة خصيصاً لتناسب طبيعة البشرة العربية ومناخنا"
    },
    {
      icon: Users,
      title: "خبرة متخصصة",
      description: "فريق من خبراء العناية بالبشرة لتقديم استشارات مجانية وبرامج عناية مخصصة"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            يونا للعناية بالبشرة هي علامة تجارية رائدة في مجال منتجات العناية الطبيعية بالبشرة.
            منذ أكثر من 10 سنوات، نحن ملتزمون بتقديم أفضل المنتجات الطبيعية والآمنة لتحقيق جمال صحي ومشرق.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark">
              قصتنا
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              بدأت رحلتنا من رؤية بسيطة: تقديم منتجات عناية طبيعية وآمنة تناسب البشرة العربية.
              اليوم، نفخر بأننا نخدم آلاف العملاء في جميع أنحاء المملكة العربية السعودية.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نؤمن بأن الجمال الحقيقي يأتي من الطبيعة، لذلك نختار بعناية أفضل المكونات الطبيعية
              من مصادر موثوقة لضمان حصولك على أفضل النتائج بأمان تام.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-natural-green-light rounded-xl">
                <div className="text-2xl font-bold text-natural-green">+5000</div>
                <div className="text-sm text-muted-foreground">عميلة سعيدة</div>
              </div>
              <div className="text-center p-4 bg-soft-pink rounded-xl">
                <div className="text-2xl font-bold text-natural-green">+50</div>
                <div className="text-sm text-muted-foreground">منتج طبيعي</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-hero rounded-xl"></div>
                <div className="h-40 bg-gradient-natural rounded-xl"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-40 bg-gradient-gold rounded-xl"></div>
                <div className="h-32 bg-natural-green-light rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark text-center">
            قيمنا ومبادئنا
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-natural hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-natural rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-natural-green-dark">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-gradient-hero p-12 rounded-3xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark mb-6">
            رسالتنا
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            نسعى لأن نكون الخيار الأول لكل امرأة تبحث عن منتجات عناية طبيعية وآمنة.
            نحن ملتزمون بتقديم أعلى معايير الجودة والابتكار لنحقق لك بشرة صحية ومشرقة طبيعياً.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
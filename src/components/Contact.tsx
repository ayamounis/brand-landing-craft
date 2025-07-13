import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Smartphone } from "lucide-react";
import consultationImage from "@/assets/consultation.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصلي بنا",
      details: ["+966 50 000 0000", "+966 11 000 0000"],
      action: () => window.open("tel:+966500000000")
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      details: ["استشارة فورية", "دعم على مدار الساعة"],
      action: () => window.open("https://wa.me/966500000000?text=مرحباً، أرغب في معرفة المزيد عن منتجات يونا")
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني", 
      details: ["info@yunaskincare.com", "support@yunaskincare.com"],
      action: () => window.open("mailto:info@yunaskincare.com")
    },
    {
      icon: MapPin,
      title: "موقعنا",
      details: ["الرياض - شارع الملك فهد", "جدة - شارع التحلية"],
      action: () => window.open("https://maps.google.com")
    }
  ];

  const workingHours = [
    { day: "السبت - الخميس", hours: "9:00 ص - 10:00 م" },
    { day: "الجمعة", hours: "2:00 م - 10:00 م" },
    { day: "دعم واتساب", hours: "24/7" }
  ];

  const socialMedia = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/yunaskincare", followers: "50K+" },
    { name: "WhatsApp", icon: Smartphone, url: "https://wa.me/966500000000", followers: "دعم فوري" },
    { name: "TikTok", icon: MessageCircle, url: "https://tiktok.com/@yunaskincare", followers: "25K+" }
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            تواصلي معنا
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في رحلتك نحو بشرة صحية ومشرقة. تواصلي معنا للحصول على استشارة مجانية
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-natural">
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-natural-green-dark mb-4">
                  احجزي استشارتك المجانية
                </h3>
                <p className="text-muted-foreground">
                  املئي النموذج وسنتواصل معك خلال 24 ساعة
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="الاسم الأول" className="text-right" />
                  <Input placeholder="الاسم الأخير" className="text-right" />
                </div>
                
                <Input placeholder="رقم الجوال" type="tel" className="text-right" />
                <Input placeholder="البريد الإلكتروني" type="email" className="text-right" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <select className="w-full p-3 border border-input rounded-md bg-background text-right">
                    <option>نوع البشرة</option>
                    <option>بشرة جافة</option>
                    <option>بشرة دهنية</option>
                    <option>بشرة مختلطة</option>
                    <option>بشرة حساسة</option>
                    <option>غير متأكدة</option>
                  </select>
                  
                  <select className="w-full p-3 border border-input rounded-md bg-background text-right">
                    <option>نوع الاستشارة</option>
                    <option>استشارة عامة</option>
                    <option>مشاكل البشرة</option>
                    <option>اختيار المنتجات</option>
                    <option>متابعة النتائج</option>
                  </select>
                </div>
                
                <Textarea 
                  placeholder="اخبرينا عن مشاكل بشرتك أو أي استفسارات" 
                  className="min-h-32 text-right"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-natural-green hover:bg-natural-green-dark text-primary-foreground shadow-natural"
                  size="lg"
                >
                  ارسال الطلب
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">أو تواصلي معنا مباشرة</p>
                  <Button 
                    variant="outline"
                    className="w-full border-soft-pink text-soft-pink-accent hover:bg-soft-pink hover:text-primary"
                    onClick={() => window.open("https://wa.me/966500000000?text=مرحباً، أرغب في استشارة مجانية")}
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساب فوري
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Skincare Consultation" 
                className="rounded-3xl shadow-elegant w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-natural-green/60 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <h4 className="text-xl font-bold">استشارة شخصية</h4>
                <p className="text-sm">مع خبراء العناية بالبشرة</p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-natural hover:shadow-elegant transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={contact.action}
                >
                  <CardContent className="p-6 flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-natural rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 text-right">
                      <h4 className="font-bold text-natural-green-dark">{contact.title}</h4>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Working Hours */}
          <Card className="border-0 shadow-natural">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-natural-green ml-3" />
                <h3 className="text-xl font-bold text-natural-green-dark">ساعات العمل</h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-muted last:border-b-0">
                    <span className="text-muted-foreground">{schedule.hours}</span>
                    <span className="font-medium text-natural-green-dark">{schedule.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-0 shadow-natural">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-natural-green-dark mb-6">تابعينا على</h3>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                    onClick={() => window.open(social.url)}
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-gradient-natural rounded-lg flex items-center justify-center">
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-natural-green-dark">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.followers}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="border-0 shadow-elegant">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-natural-green-dark mb-6 text-center">
              مواقع فروعنا
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <h4 className="font-bold text-natural-green">فرع الرياض</h4>
                <p className="text-muted-foreground">شارع الملك فهد، مجمع العليا التجاري</p>
                <p className="text-muted-foreground">الطابق الثاني، محل رقم 205</p>
                <Button 
                  variant="outline" 
                  className="border-natural-green text-natural-green"
                  onClick={() => window.open("https://maps.google.com")}
                >
                  <MapPin className="ml-2 h-4 w-4" />
                  اعرض على الخريطة
                </Button>
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="font-bold text-natural-green">فرع جدة</h4>
                <p className="text-muted-foreground">شارع التحلية، برج الراجحي</p>
                <p className="text-muted-foreground">الطابق الأول، محل رقم 105</p>
                <Button 
                  variant="outline" 
                  className="border-natural-green text-natural-green"
                  onClick={() => window.open("https://maps.google.com")}
                >
                  <MapPin className="ml-2 h-4 w-4" />
                  اعرض على الخريطة
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
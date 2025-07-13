import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Leaf, Heart, Gift, UserCheck } from "lucide-react";
import naturalProducts from "@/assets/natural-products.jpg";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Facial Care Products",
      description: "Natural creams, serums, and masks for glowing, radiant skin",
      features: ["Natural Moisturizing Cream", "Anti-Aging Serums", "Deep Cleansing Masks", "Gentle Exfoliators"],
      color: "natural-green"
    },
    {
      icon: Sparkles,
      title: "Body Care Products",
      description: "Lotions, scrubs, and natural oils for complete body care",
      features: ["Daily Moisturizing Lotion", "Natural Body Scrubs", "Aromatic Massage Oils", "Sensitive Area Creams"],
      color: "soft-pink"
    },
    {
      icon: Leaf,
      title: "Hair Care Products",
      description: "Natural shampoo, conditioner, and oils for healthy, shiny hair",
      features: ["Sulfate-Free Shampoo", "Natural Nourishing Conditioner", "Hair Strengthening Oils", "Hair Moisturizing Masks"],
      color: "gold"
    },
    {
      icon: UserCheck,
      title: "Free Consultations",
      description: "Personal consultation with skincare experts to determine your skin type and suitable care routine",
      features: ["Skin Type Analysis", "Personalized Care Program", "Results Follow-up", "Daily Tips"],
      color: "natural-green"
    },
    {
      icon: Heart,
      title: "Skin Problem Treatment",
      description: "Specialized products for treating acne, pigmentation, and dryness",
      features: ["Acne Treatment", "Skin Tone Evening", "Anti-Wrinkle Care", "Dry Skin Moisturizing"],
      color: "soft-pink"
    },
    {
      icon: Gift,
      title: "Packages & Gifts",
      description: "Specially designed packages for special occasions and unique gifts",
      features: ["Bridal Package", "Occasion Gifts", "Monthly Packages", "Surprise Boxes"],
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
            Our Services & Products
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of natural skincare products and specialized services 
            to meet all your skin and hair care needs safely and effectively
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
              <span className="text-sm font-bold">100% Natural Products</span>
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
                  <h4 className="font-semibold text-natural-green">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-soft-pink rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-natural-green text-natural-green hover:bg-natural-green hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero p-12 rounded-3xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark mb-6">
            Get Your Free Consultation Today
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the best skincare products suitable for your skin type
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-natural-green hover:bg-natural-green-dark text-primary-foreground shadow-natural"
              onClick={() => window.open("https://wa.me/201279349229?text=Hello, I would like a free consultation", "_blank")}
            >
              Book Your Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-soft-pink text-soft-pink-accent hover:bg-soft-pink hover:text-primary"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Heart, Truck, Users, Star } from "lucide-react";
import skinTransformation from "@/assets/skin-transformation.jpg";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "100% Natural Ingredients",
      description: "All our products are free from harmful chemicals, parabens, and sulfates",
      stat: "100%",
      statLabel: "Natural"
    },
    {
      icon: Award,
      title: "Internationally Certified",
      description: "Certified by the world's leading quality testing laboratories",
      stat: "15+",
      statLabel: "Quality Certificates"
    },
    {
      icon: Heart,
      title: "Sensitive Skin Friendly",
      description: "Gentle formulas tested by dermatologists for sensitive skin",
      stat: "98%",
      statLabel: "Customer Satisfaction"
    },
    {
      icon: Truck,
      title: "Fast Free Delivery",
      description: "Free delivery nationwide for orders over $50",
      stat: "24",
      statLabel: "Hour Delivery"
    },
    {
      icon: Users,
      title: "10+ Years Experience",
      description: "Team of experts specialized in skincare and natural beauty",
      stat: "10+",
      statLabel: "Years Experience"
    },
    {
      icon: Star,
      title: "30 Day Guarantee",
      description: "Money-back guarantee within 30 days if you're not satisfied with results",
      stat: "30",
      statLabel: "Day Guarantee"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      age: "28 years old",
      review: "Yuna products completely transformed my skin! My skin became smoother and more radiant. I highly recommend it.",
      rating: 5,
      city: "New York"
    },
    {
      name: "Emma Johnson",
      age: "35 years old", 
      review: "I've used many products but Yuna is the only one that gave me real results. Especially the anti-aging cream.",
      rating: 5,
      city: "Los Angeles"
    },
    {
      name: "Maria Garcia",
      age: "22 years old",
      review: "I have very sensitive skin and Yuna's gentle products didn't cause any irritation. Amazing results!",
      rating: 5,
      city: "Miami"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="why-choose-us">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            Why Choose Yuna?
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just a brand, but a trusted partner in your journey towards natural, healthy beauty
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
              Real Results, Visible Transformation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              See the real transformation our customers achieved using Yuna's natural products.
              Guaranteed results within 4-6 weeks of regular use.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-natural-green rounded-full"></div>
                <span className="text-muted-foreground">Noticeable improvement in skin texture within two weeks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-soft-pink rounded-full"></div>
                <span className="text-muted-foreground">Natural glow appears from the first week</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="text-muted-foreground">Deep moisturizing that lasts 24 hours</span>
              </div>
            </div>
            
            <div className="bg-gradient-hero p-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-natural-green mb-2">96%</div>
                <div className="text-sm text-muted-foreground">of our customers noticed significant improvement within a month</div>
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
              <span className="text-sm font-bold">Real Results</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-gold text-white p-3 rounded-xl">
              <span className="text-sm font-bold">Within 30 Days</span>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="space-y-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark text-center">
            What Our Customers Say
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
                    <span className="text-xs text-gold font-semibold">Verified Customer ✓</span>
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
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-soft-pink-accent">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gold">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-natural-green">30</div>
            <div className="text-sm text-muted-foreground">Day Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
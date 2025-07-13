import { Heart, Award, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "All our products are made from certified natural and organic ingredients without harmful chemicals"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "We maintain the highest quality standards with international certifications and rigorous testing"
    },
    {
      icon: Heart,
      title: "Suitable for All Skin Types",
      description: "Innovative formulations designed specifically for different skin types and concerns"
    },
    {
      icon: Users,
      title: "Expert Knowledge",
      description: "Team of skincare specialists providing free consultations and personalized care programs"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Yuna Skincare is a leading brand in natural skincare products.
            For over 10 years, we've been committed to providing the best natural and safe products to achieve healthy, radiant beauty.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-natural-green-dark">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our journey began with a simple vision: to provide natural and safe skincare products for everyone.
              Today, we're proud to serve thousands of customers worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that true beauty comes from nature, so we carefully select the finest natural ingredients
              from trusted sources to ensure you get the best results safely.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-natural-green-light rounded-xl">
                <div className="text-2xl font-bold text-natural-green">+5000</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-soft-pink rounded-xl">
                <div className="text-2xl font-bold text-natural-green">+50</div>
                <div className="text-sm text-muted-foreground">Natural Products</div>
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
            Our Values & Principles
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
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We strive to be the first choice for everyone seeking natural and safe skincare products.
            We are committed to providing the highest standards of quality and innovation to achieve healthy, radiant skin naturally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
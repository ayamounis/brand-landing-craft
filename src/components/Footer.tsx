import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Star, Heart, Truck, Shield } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#services" },
    { name: "Why Yuna", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" }
  ];

  const products = [
    "Facial Care Products",
    "Body Care Products", 
    "Hair Care Products",
    "Skin Problem Treatment",
    "Anti-Aging Products",
    "Sensitive Skin Products"
  ];

  const services = [
    "Free Consultation",
    "Skin Type Analysis",
    "Personalized Care Programs",
    "Results Follow-up",
    "Free Delivery",
    "30 Day Guarantee"
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
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-natural-green-light mb-6">
                Get the latest tips and exclusive offers for skincare products
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email address"
                className="bg-white text-natural-green-dark border-0 flex-1"
              />
              <Button 
                className="bg-soft-pink hover:bg-soft-pink-accent text-primary whitespace-nowrap"
                size="lg"
              >
                Subscribe
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
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="text-natural-green-dark font-bold text-xl">Y</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Yuna</h3>
                <p className="text-sm text-natural-green-light">Skincare</p>
              </div>
            </div>
            
            <p className="text-natural-green-light leading-relaxed">
              A leading brand in natural skincare products. 
              We are committed to providing the best natural and safe products.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-natural-green-light">Available Worldwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-natural-green-light">+20 127 934 9229</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-natural-green-light">ayamounis66@gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-natural-green-dark"
                onClick={() => window.open("https://wa.me/201279349229")}
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
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-natural-green-light hover:text-gold transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Our Products</h4>
            <div className="space-y-3">
              {products.map((product, index) => (
                <div key={index} className="text-natural-green-light hover:text-gold transition-colors cursor-pointer">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Our Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-natural-green-light hover:text-gold transition-colors cursor-pointer">
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
              <span className="text-sm text-natural-green-light">100% Safe Products</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Truck className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">Quality Guarantee</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="h-8 w-8 text-gold" />
              <span className="text-sm text-natural-green-light">5000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-natural-green">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-natural-green-light text-sm">
              © 2024 Yuna Skincare. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-natural-green-light hover:text-gold transition-colors">
                Privacy Policy
              </button>
              <button className="text-natural-green-light hover:text-gold transition-colors">
                Terms & Conditions
              </button>
              <button className="text-natural-green-light hover:text-gold transition-colors">
                Return Policy
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
          onClick={() => window.open("https://wa.me/201279349229?text=Hello, I would like a free skincare consultation", "_blank")}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
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
      title: "Call Us",
      details: ["+20 127 934 9229", "Customer Service"],
      action: () => window.open("https://wa.me/201279349229")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Instant Consultation", "24/7 Support"],
      action: () => window.open("https://wa.me/201279349229?text=Hello, I would like to know more about Yuna products")
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["ayamounis66@gmail.com", "General Inquiries"],
      action: () => window.open("mailto:ayamounis66@gmail.com")
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Available Worldwide", "Online Store"],
      action: () => window.open("https://maps.google.com")
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 10:00 PM" },
    { day: "Saturday - Sunday", hours: "10:00 AM - 8:00 PM" },
    { day: "WhatsApp Support", hours: "24/7" }
  ];

  const socialMedia = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/yunaskincare", followers: "50K+" },
    { name: "WhatsApp", icon: Smartphone, url: "https://wa.me/201279349229", followers: "Instant Support" },
    { name: "TikTok", icon: MessageCircle, url: "https://tiktok.com/@yunaskincare", followers: "25K+" }
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-green-dark mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-natural mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help you on your journey to healthy, radiant skin. Contact us for a free consultation
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-natural">
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-natural-green-dark mb-4">
                  Book Your Free Consultation
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form and we'll contact you within 24 hours
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Email Address" type="email" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Skin Type</option>
                    <option>Dry Skin</option>
                    <option>Oily Skin</option>
                    <option>Combination Skin</option>
                    <option>Sensitive Skin</option>
                    <option>Not Sure</option>
                  </select>
                  
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Consultation Type</option>
                    <option>General Consultation</option>
                    <option>Skin Problems</option>
                    <option>Product Selection</option>
                    <option>Results Follow-up</option>
                  </select>
                </div>
                
                <Textarea 
                  placeholder="Tell us about your skin concerns or any questions" 
                  className="min-h-32"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-natural-green hover:bg-natural-green-dark text-primary-foreground shadow-natural"
                  size="lg"
                >
                  Send Request
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Or contact us directly</p>
                  <Button 
                    variant="outline"
                    className="w-full border-soft-pink text-soft-pink-accent hover:bg-soft-pink hover:text-primary"
                    onClick={() => window.open("https://wa.me/201279349229?text=Hello, I would like a free consultation")}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Now
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
                <h4 className="text-xl font-bold">Personal Consultation</h4>
                <p className="text-sm">With skincare experts</p>
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
                    <div className="text-right">
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
                <Clock className="h-6 w-6 text-natural-green mr-3" />
                <h3 className="text-xl font-bold text-natural-green-dark">Working Hours</h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-muted last:border-b-0">
                    <span className="font-medium text-natural-green-dark">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-0 shadow-natural">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-natural-green-dark mb-6">Follow Us</h3>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                    onClick={() => window.open(social.url)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-natural rounded-lg flex items-center justify-center">
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
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
              Our Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <h4 className="font-bold text-natural-green">Online Store</h4>
                <p className="text-muted-foreground">Available worldwide with fast shipping</p>
                <p className="text-muted-foreground">Expert consultation via WhatsApp</p>
                <Button 
                  variant="outline" 
                  className="border-natural-green text-natural-green"
                  onClick={() => window.open("https://wa.me/201279349229")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact WhatsApp
                </Button>
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="font-bold text-natural-green">Customer Support</h4>
                <p className="text-muted-foreground">24/7 support via WhatsApp and email</p>
                <p className="text-muted-foreground">Professional skincare consultations</p>
                <Button 
                  variant="outline" 
                  className="border-natural-green text-natural-green"
                  onClick={() => window.open("mailto:ayamounis66@gmail.com")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
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
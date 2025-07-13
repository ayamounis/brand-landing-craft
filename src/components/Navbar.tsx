import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "منتجاتنا", href: "#services" },
    { name: "لماذا يونا", href: "#why-choose-us" },
    { name: "تواصلي معنا", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-natural rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">ي</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-natural-green-dark">يونا</h1>
              <p className="text-xs text-muted-foreground">للعناية بالبشرة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-natural-green transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-natural-green"
            >
              <User className="h-4 w-4 ml-2" />
              حسابي
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-natural-green"
            >
              <ShoppingBag className="h-4 w-4 ml-2" />
              السلة
            </Button>

            <Button
              size="sm"
              className="bg-natural-green hover:bg-natural-green-dark text-primary-foreground"
              onClick={() => window.open("https://wa.me/966500000000?text=مرحباً، أرغب في استشارة مجانية", "_blank")}
            >
              <MessageCircle className="h-4 w-4 ml-2" />
              استشارة
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-natural-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-right px-3 py-2 text-base font-medium text-muted-foreground hover:text-natural-green hover:bg-muted rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-natural-green text-natural-green"
                >
                  <User className="h-4 w-4 ml-2" />
                  حسابي
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-natural-green text-natural-green"
                >
                  <ShoppingBag className="h-4 w-4 ml-2" />
                  السلة
                </Button>

                <Button
                  className="w-full bg-natural-green hover:bg-natural-green-dark text-primary-foreground"
                  onClick={() => window.open("https://wa.me/966500000000?text=مرحباً، أرغب في استشارة مجانية", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 ml-2" />
                  استشارة مجانية
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
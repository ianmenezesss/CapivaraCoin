import { Button } from "@/components/ui/button";
import { Twitter, Instagram, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-xl font-bold text-primary md:absolute md:left-4">
            Capivara Coin
          </div>
          
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com/capivaracoin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth p-2 hover:bg-accent rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
                <span className="text-sm font-medium hidden sm:inline">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/capivaracoin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth p-2 hover:bg-accent rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
                <span className="text-sm font-medium hidden sm:inline">Instagram</span>
              </a>
            </div>

            {/* Buy Button */}
            <Button 
              variant="hero" 
              size="lg"
              className="gap-2 shadow-glow"
              onClick={() => window.open('https://exchange.capivara.com', '_blank')}
            >
              <ShoppingCart className="w-5 h-5" />
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

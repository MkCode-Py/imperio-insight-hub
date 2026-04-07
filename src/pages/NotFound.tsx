import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="h-20 w-20 rounded-2xl imperio-gradient flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-black text-primary-foreground">404</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          O conteúdo que você procura pode ter sido movido ou não existe mais.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="gap-2 w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" /> Voltar ao Início
            </Button>
          </Link>
          <Link to="/busca">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <Search className="h-4 w-4" /> Buscar Conteúdo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

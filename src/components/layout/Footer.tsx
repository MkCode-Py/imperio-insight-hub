import { Link } from 'react-router-dom';
import { getAllCategories } from '@/lib/blog';

export function Footer() {
  const categories = getAllCategories();

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg imperio-gradient flex items-center justify-center">
                <span className="text-sm font-black text-primary-foreground">IP</span>
              </div>
              <div>
                <span className="font-bold text-foreground text-lg leading-none">Império</span>
                <span className="block text-[10px] font-medium text-muted-foreground tracking-widest uppercase -mt-0.5">Pharma Blog</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conteúdo editorial premium sobre performance, saúde e bem-estar.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Categorias</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/categoria/${cat.slug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/mais-vistos" className="text-sm text-muted-foreground hover:text-accent transition-colors">Mais Vistos</Link></li>
              <li><Link to="/guias" className="text-sm text-muted-foreground hover:text-accent transition-colors">Guias</Link></li>
              <li><Link to="/busca" className="text-sm text-muted-foreground hover:text-accent transition-colors">Buscar</Link></li>
            </ul>
          </div>

          {/* Store CTA */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Loja Oficial</h4>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Visite a loja Império Pharma e encontre os melhores produtos.
            </p>
            <a
              href="#loja"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg imperio-gradient text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Visitar Loja
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Império Pharma. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            blog.imperiopharma.com.py
          </p>
        </div>
      </div>
    </footer>
  );
}

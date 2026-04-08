import { Link } from 'react-router-dom';
import { getAllCategories, getAllTags, getPostsByTag } from '@/lib/blog';

export function Footer() {
  const categories = getAllCategories();
  const allTags = getAllTags();
  const popularTags = allTags
    .map((tag) => ({ ...tag, count: getPostsByTag(tag.id).length }))
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-md imperio-gradient flex items-center justify-center">
                <span className="text-xs font-black text-primary-foreground">IP</span>
              </div>
              <div>
                <span className="font-bold text-foreground text-[15px] leading-none">Império</span>
                <span className="block text-[9px] font-medium text-muted-foreground tracking-[0.15em] uppercase -mt-0.5">Pharma Blog</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Conteúdo editorial premium sobre performance, saúde e ciência aplicada.
            </p>
          </div>

          <div>
            <h4 className="section-label mb-4">Categorias</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/categoria/${cat.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              <li><Link to="/mais-vistos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mais Vistos</Link></li>
              <li><Link to="/guias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guias</Link></li>
              <li><Link to="/busca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Buscar</Link></li>
            </ul>
            {popularTags.length > 0 && (
              <>
                <h4 className="section-label mb-3 mt-6">Tags Populares</h4>
                <div className="flex flex-wrap gap-1.5">
                  {popularTags.map((tag) => (
                    <Link
                      key={tag.id}
                      to={`/tag/${tag.slug}`}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border/60 px-2 py-0.5 rounded-md"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <div>
            <h4 className="section-label mb-4">Loja Oficial</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Visite a loja Império Pharma e encontre os melhores produtos.
            </p>
            <a
              href="#loja"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md imperio-gradient text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Visitar Loja
            </a>
          </div>
        </div>

        <div className="border-t border-border/60 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
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

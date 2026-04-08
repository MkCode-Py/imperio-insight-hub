import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { getAllCategories } from '@/lib/blog';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const categories = getAllCategories();

  const navLinks = [
    { label: 'Início', to: '/' },
    ...categories.map((c) => ({ label: c.name, to: `/categoria/${c.slug}` })),
    { label: 'Mais Vistos', to: '/mais-vistos' },
    { label: 'Guias', to: '/guias' },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      <header className="sticky top-0 z-50 imperio-glass">
        <div className="container flex h-12 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="h-7 w-7 rounded-md imperio-gradient flex items-center justify-center">
              <span className="text-[10px] font-black text-primary-foreground tracking-tight">IP</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground text-sm leading-none">Império</span>
              <span className="block text-[8px] font-medium text-muted-foreground tracking-[0.15em] uppercase -mt-0.5">Pharma Blog</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2.5 py-1.5 text-[12px] font-medium rounded-md transition-colors ${
                  isActive(link.to)
                    ? 'text-accent bg-accent/8'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link to="/busca">
              <Button variant="ghost" size="icon" className="rounded-full h-7 w-7">
                <Search className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Link to="/admin/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-[11px] text-muted-foreground h-7 px-2">
                Admin
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full h-7 w-7"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-card border-l border-border shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-bold text-sm">Menu</span>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setMobileOpen(false)}>
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
            <nav className="flex flex-col p-3 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.to)
                      ? 'text-accent bg-accent/8'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-3 pt-3">
                <Link to="/admin/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Painel Admin
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

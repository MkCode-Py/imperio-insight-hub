import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, FolderOpen, Tag, Image, BarChart3, Search, Settings, LogOut, Menu } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', to: '/admin', icon: LayoutDashboard },
  { label: 'Posts', to: '/admin/posts', icon: FileText },
  { label: 'Categorias', to: '/admin/categorias', icon: FolderOpen },
  { label: 'Tags', to: '/admin/tags', icon: Tag },
  { label: 'Mídia', to: '/admin/midia', icon: Image },
  { label: 'Métricas', to: '/admin/metricas', icon: BarChart3 },
  { label: 'SEO', to: '/admin/seo', icon: Search },
  { label: 'Configurações', to: '/admin/configuracoes', icon: Settings },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const { logout, user } = useAuth();
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(to);
  };

  return (
    <div className="flex flex-col h-full">
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
              isActive(item.to)
                ? 'bg-accent/10 text-accent'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-border shrink-0 space-y-2">
        {user && (
          <p className="text-xs text-muted-foreground truncate px-1">{user.email}</p>
        )}
        <div className="flex gap-1">
          <Link to="/" className="flex-1" onClick={onNavigate}>
            <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
              Ver Blog
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={logout} title="Sair">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Desktop sidebar
function DesktopSidebar() {
  return (
    <aside className="hidden md:flex h-screen sticky top-0 bg-card border-r border-border flex-col w-60">
      <div className="h-14 flex items-center px-3 border-b border-border shrink-0">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg imperio-gradient flex items-center justify-center">
            <span className="text-xs font-black text-primary-foreground">IP</span>
          </div>
          <span className="font-bold text-sm text-foreground">Admin</span>
        </Link>
      </div>
      <SidebarNav />
    </aside>
  );
}

// Mobile header + sheet
function MobileHeader({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <>
      <header className="md:hidden sticky top-0 z-40 h-14 flex items-center gap-3 px-3 bg-card border-b border-border">
        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => onOpenChange(true)}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/admin" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg imperio-gradient flex items-center justify-center">
            <span className="text-[10px] font-black text-primary-foreground">IP</span>
          </div>
          <span className="font-bold text-sm text-foreground">Admin</span>
        </Link>
      </header>

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="h-14 flex items-center px-4 border-b border-border">
            <SheetTitle className="text-sm font-bold">Império Pharma</SheetTitle>
          </SheetHeader>
          <SidebarNav onNavigate={() => onOpenChange(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}

export { DesktopSidebar, MobileHeader };

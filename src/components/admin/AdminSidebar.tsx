import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, FolderOpen, Tag, Image, BarChart3, Search, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
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

export function AdminSidebar() {
  const { logout, user } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (to: string) => {
    if (to === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(to);
  };

  return (
    <aside className={cn(
      'h-screen sticky top-0 bg-card border-r border-border flex flex-col transition-all duration-300',
      collapsed ? 'w-16' : 'w-60'
    )}>
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-3 border-b border-border shrink-0">
        {!collapsed && (
          <Link to="/admin" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg imperio-gradient flex items-center justify-center">
              <span className="text-xs font-black text-primary-foreground">IP</span>
            </div>
            <span className="font-bold text-sm text-foreground">Admin</span>
          </Link>
        )}
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
              isActive(item.to)
                ? 'bg-accent/10 text-accent'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
            title={collapsed ? item.label : undefined}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border shrink-0 space-y-2">
        {!collapsed && user && (
          <p className="text-xs text-muted-foreground truncate px-1">{user.email}</p>
        )}
        <div className="flex gap-1">
          <Link to="/" className="flex-1">
            <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
              {!collapsed && 'Ver Blog'}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={logout} title="Sair">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
}

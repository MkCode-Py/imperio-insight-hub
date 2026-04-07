import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DesktopSidebar, MobileHeader } from './AdminSidebar';

export function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background w-full overflow-x-hidden">
      <DesktopSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileHeader open={mobileOpen} onOpenChange={setMobileOpen} />
        <main className="flex-1">
          <div className="p-3 sm:p-6 lg:p-8 max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

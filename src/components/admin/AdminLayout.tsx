import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DesktopSidebar, MobileHeader } from './AdminSidebar';
import { AdminPageTransition } from './AdminPageTransition';

export function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background w-full overflow-x-hidden">
      <DesktopSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <MobileHeader open={mobileOpen} onOpenChange={setMobileOpen} />
        <main className="flex-1 overflow-x-hidden">
          <div className="p-3 sm:p-6 lg:p-8 max-w-7xl">
            <AnimatePresence mode="wait">
              <AdminPageTransition key={location.pathname}>
                <Outlet />
              </AdminPageTransition>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

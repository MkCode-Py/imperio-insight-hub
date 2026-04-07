import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import MostViewedPage from "./pages/MostViewedPage";
import GuidesPage from "./pages/GuidesPage";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import PostsList from "./pages/admin/PostsList";
import PostEditor from "./pages/admin/PostEditor";
import Categories from "./pages/admin/Categories";
import AdminTags from "./pages/admin/Tags";
import Media from "./pages/admin/Media";
import Metrics from "./pages/admin/Metrics";
import SEO from "./pages/admin/SEO";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public */}
              <Route path="/" element={<Index />} />
              <Route path="/post/:slug" element={<PostPage />} />
              <Route path="/categoria/:slug" element={<CategoryPage />} />
              <Route path="/busca" element={<SearchPage />} />
              <Route path="/mais-vistos" element={<MostViewedPage />} />
              <Route path="/guias" element={<GuidesPage />} />

              {/* Admin */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                <Route index element={<Dashboard />} />
                <Route path="posts" element={<PostsList />} />
                <Route path="posts/new" element={<PostEditor />} />
                <Route path="posts/:id" element={<PostEditor />} />
                <Route path="categorias" element={<Categories />} />
                <Route path="tags" element={<AdminTags />} />
                <Route path="midia" element={<Media />} />
                <Route path="metricas" element={<Metrics />} />
                <Route path="seo" element={<SEO />} />
                <Route path="configuracoes" element={<Settings />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;

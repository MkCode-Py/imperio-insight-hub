import { BookOpen } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PostCard } from '@/components/blog/PostCard';
import { getAllPosts } from '@/lib/blog';

const GuidesPage = () => {
  const guides = getAllPosts().filter((p) => p.contentType === 'guide');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-6 w-6 text-accent" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Guias</h1>
        </div>
        <p className="text-muted-foreground text-sm mb-8">Conteúdo educacional completo e aprofundado</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {guides.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {guides.length === 0 && (
          <p className="text-center text-muted-foreground py-16">Nenhum guia disponível ainda.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GuidesPage;

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { PostTable } from '@/components/admin/PostTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockPosts } from '@/data/mockPosts';
import { toast } from 'sonner';

const PostsList = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const posts = useMemo(() => {
    let filtered = [...mockPosts];
    if (statusFilter !== 'all') filtered = filtered.filter((p) => p.status === statusFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.slug.includes(q));
    }
    return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [search, statusFilter]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Posts</h1>
          <p className="text-sm text-muted-foreground">{mockPosts.length} posts no total</p>
        </div>
        <Link to="/admin/posts/new">
          <Button size="sm" className="gap-2 w-full sm:w-auto"><Plus className="h-4 w-4" /> Novo Post</Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col gap-3"
      >
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar posts..." className="pl-9" />
        </div>
        <div className="flex gap-1 flex-wrap">
          {['all', 'published', 'draft', 'scheduled'].map((s) => (
            <Badge key={s} variant={statusFilter === s ? 'default' : 'outline'} className="cursor-pointer capitalize" onClick={() => setStatusFilter(s)}>
              {s === 'all' ? 'Todos' : s === 'published' ? 'Publicados' : s === 'draft' ? 'Rascunhos' : 'Agendados'}
            </Badge>
          ))}
        </div>
      </motion.div>

      <PostTable posts={posts} onDelete={(id) => toast.success(`Post ${id} excluído (mock)`)} />
    </div>
  );
};

export default PostsList;

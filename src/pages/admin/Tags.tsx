import { useState } from 'react';
import { Plus, Trash2, Edit, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockTags } from '@/data/mockTags';
import { Tag } from '@/types/blog';
import { toast } from 'sonner';

const Tags = () => {
  const [tags, setTags] = useState<Tag[]>([...mockTags]);
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');

  const addTag = () => {
    if (!newName.trim()) return;
    const slug = newName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');
    setTags((prev) => [...prev, { id: `tag-${Date.now()}`, name: newName, slug }]);
    setNewName('');
    toast.success('Tag criada (mock)');
  };

  const saveEdit = (id: string) => {
    setTags((prev) => prev.map((t) => t.id === id ? { ...t, name: editName, slug: editName.toLowerCase().replace(/\s+/g, '-') } : t));
    setEditingId(null);
    toast.success('Tag atualizada (mock)');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tags</h1>
        <p className="text-sm text-muted-foreground">{tags.length} tags</p>
      </div>

      <div className="flex gap-2 max-w-sm">
        <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nova tag..." onKeyDown={(e) => e.key === 'Enter' && addTag()} />
        <Button size="sm" onClick={addTag}><Plus className="h-4 w-4" /></Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div key={tag.id} className="flex items-center gap-1">
            {editingId === tag.id ? (
              <div className="flex items-center gap-1">
                <Input value={editName} onChange={(e) => setEditName(e.target.value)} className="h-8 w-32 text-sm" />
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => saveEdit(tag.id)}><Check className="h-3 w-3" /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setEditingId(null)}><X className="h-3 w-3" /></Button>
              </div>
            ) : (
              <Badge variant="outline" className="pr-1 gap-1">
                {tag.name}
                <Button variant="ghost" size="icon" className="h-5 w-5 ml-1" onClick={() => { setEditingId(tag.id); setEditName(tag.name); }}>
                  <Edit className="h-2.5 w-2.5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-5 w-5 text-destructive" onClick={() => { setTags((p) => p.filter((t) => t.id !== tag.id)); toast.success('Excluída (mock)'); }}>
                  <Trash2 className="h-2.5 w-2.5" />
                </Button>
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;

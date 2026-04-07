import { useState } from 'react';
import { Plus, Edit, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { mockCategories } from '@/data/mockCategories';
import { Category } from '@/types/blog';
import { toast } from 'sonner';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([...mockCategories]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formSlug, setFormSlug] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('');

  const openNew = () => { setEditingCategory(null); setFormName(''); setFormSlug(''); setFormDescription(''); setFormImage(''); setDialogOpen(true); };
  const openEdit = (cat: Category) => { setEditingCategory(cat); setFormName(cat.name); setFormSlug(cat.slug); setFormDescription(cat.description); setFormImage(cat.coverImage); setDialogOpen(true); };

  const handleSave = () => {
    if (!formName.trim()) { toast.error('Nome é obrigatório'); return; }
    if (editingCategory) {
      setCategories((prev) => prev.map((c) => c.id === editingCategory.id ? { ...c, name: formName, slug: formSlug, description: formDescription, coverImage: formImage } : c));
      toast.success('Categoria atualizada (mock)');
    } else {
      const newCat: Category = {
        id: `cat-${Date.now()}`, name: formName, slug: formSlug || formName.toLowerCase().replace(/\s+/g, '-'),
        description: formDescription, coverImage: formImage || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
        order: categories.length + 1, enabled: true, highlighted: false,
      };
      setCategories((prev) => [...prev, newCat]);
      toast.success('Categoria criada (mock)');
    }
    setDialogOpen(false);
  };

  const moveUp = (i: number) => { if (i === 0) return; setCategories((prev) => { const arr = [...prev]; [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; return arr.map((c, idx) => ({ ...c, order: idx + 1 })); }); };
  const moveDown = (i: number) => { if (i === categories.length - 1) return; setCategories((prev) => { const arr = [...prev]; [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; return arr.map((c, idx) => ({ ...c, order: idx + 1 })); }); };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Categorias</h1>
          <p className="text-sm text-muted-foreground">{categories.length} categorias</p>
        </div>
        <Button size="sm" className="gap-2 w-full sm:w-auto" onClick={openNew}><Plus className="h-4 w-4" /> Nova Categoria</Button>
      </div>

      <div className="space-y-2">
        {categories.map((cat, i) => (
          <Card key={cat.id} className="border-border">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col gap-0.5 shrink-0">
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveUp(i)}><ChevronUp className="h-3 w-3" /></Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveDown(i)}><ChevronDown className="h-3 w-3" /></Button>
                </div>
                <img src={cat.coverImage} alt={cat.name} className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="font-medium text-sm text-foreground">{cat.name}</p>
                    {cat.highlighted && <Badge variant="outline" className="text-[10px] px-1">Destaque</Badge>}
                    <Badge variant={cat.enabled ? 'default' : 'secondary'} className="text-[10px] px-1">{cat.enabled ? 'Ativo' : 'Inativo'}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">/{cat.slug}</p>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(cat)}><Edit className="h-3.5 w-3.5" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => { setCategories((p) => p.filter((c) => c.id !== cat.id)); toast.success('Excluída (mock)'); }}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingCategory ? 'Editar Categoria' : 'Nova Categoria'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Nome</Label><Input value={formName} onChange={(e) => setFormName(e.target.value)} /></div>
            <div className="space-y-2"><Label>Slug</Label><Input value={formSlug} onChange={(e) => setFormSlug(e.target.value)} /></div>
            <div className="space-y-2"><Label>Descrição</Label><Input value={formDescription} onChange={(e) => setFormDescription(e.target.value)} /></div>
            <div className="space-y-2"><Label>Imagem (URL)</Label><Input value={formImage} onChange={(e) => setFormImage(e.target.value)} /></div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleSave}>Salvar</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Categories;

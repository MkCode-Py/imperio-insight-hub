import { useState } from 'react';
import { Copy, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const mockImages = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
  'https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=800&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
  'https://images.unsplash.com/photo-1505576399279-0d06b4388fea?w=800&q=80',
  'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
];

const Media = () => {
  const [images, setImages] = useState(mockImages);
  const [newUrl, setNewUrl] = useState('');

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copiada!');
  };

  const addImage = () => {
    if (!newUrl.trim()) return;
    setImages((prev) => [newUrl, ...prev]);
    setNewUrl('');
    toast.success('Imagem adicionada (mock)');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Mídia</h1>
        <p className="text-sm text-muted-foreground">Galeria de imagens do blog</p>
      </div>

      <div className="flex gap-2 max-w-lg">
        <Input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="URL da imagem..." />
        <Button size="sm" className="gap-2" onClick={addImage}><Upload className="h-4 w-4" /> Adicionar</Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((url, i) => (
          <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-card">
            <img src={url} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button variant="secondary" size="sm" className="gap-1" onClick={() => copyUrl(url)}>
                <Copy className="h-3.5 w-3.5" /> Copiar URL
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;

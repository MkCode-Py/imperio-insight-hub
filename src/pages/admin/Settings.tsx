import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';

const Settings = () => {
  const [blogName, setBlogName] = useState('Império Pharma Blog');
  const [blogDescription, setBlogDescription] = useState('Conteúdo editorial premium sobre performance, saúde e bem-estar.');
  const [storeUrl, setStoreUrl] = useState('https://imperiopharma.com.py');
  const [authorName, setAuthorName] = useState('Dr. Rafael Mendes');
  const [authorEmail, setAuthorEmail] = useState('contato@imperiopharma.com');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
          <p className="text-sm text-muted-foreground">Configurações gerais do blog</p>
        </div>
        <Button size="sm" className="gap-2" onClick={() => toast.success('Salvo (mock)')}><Save className="h-4 w-4" /> Salvar</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Informações do Blog</CardTitle>
            <CardDescription>Dados gerais exibidos no blog público</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Nome do Blog</Label><Input value={blogName} onChange={(e) => setBlogName(e.target.value)} /></div>
            <div className="space-y-2"><Label>Descrição</Label><Textarea value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} rows={3} /></div>
            <div className="space-y-2"><Label>URL da Loja</Label><Input value={storeUrl} onChange={(e) => setStoreUrl(e.target.value)} /></div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Autor Padrão</CardTitle>
            <CardDescription>Informações do autor padrão para novos posts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Nome</Label><Input value={authorName} onChange={(e) => setAuthorName(e.target.value)} /></div>
            <div className="space-y-2"><Label>Email</Label><Input value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)} /></div>
          </CardContent>
        </Card>
      </div>

      {/* Production note */}
      <Card className="border-border border-dashed">
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground">
            <strong>Nota:</strong> Em produção, estas configurações seriam persistidas em banco de dados (Supabase) e carregadas dinamicamente. Atualmente são mock em estado local.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;

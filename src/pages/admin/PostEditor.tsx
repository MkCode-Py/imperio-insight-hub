import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { HTMLEditor } from '@/components/editor/HTMLEditor';
import { EditorPreview } from '@/components/editor/EditorPreview';
import { mockPosts } from '@/data/mockPosts';
import { mockCategories } from '@/data/mockCategories';
import { mockTags } from '@/data/mockTags';
import { ContentType, PostStatus } from '@/types/blog';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

const contentTypes: ContentType[] = ['article', 'guide', 'comparison', 'list', 'faq', 'featured', 'protocol', 'substance-analysis'];
const statuses: PostStatus[] = ['draft', 'scheduled', 'published'];

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isNew = !id || id === 'new';
  const existingPost = !isNew ? mockPosts.find((p) => p.id === id) : undefined;

  const [title, setTitle] = useState(existingPost?.title || '');
  const [slug, setSlug] = useState(existingPost?.slug || '');
  const [subtitle, setSubtitle] = useState(existingPost?.subtitle || '');
  const [summary, setSummary] = useState(existingPost?.summary || '');
  const [coverImage, setCoverImage] = useState(existingPost?.coverImage || '');
  const [content, setContent] = useState(existingPost?.content || '');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(existingPost?.categories || []);
  const [selectedTags, setSelectedTags] = useState<string[]>(existingPost?.tags || []);
  const [contentType, setContentType] = useState<ContentType>(existingPost?.contentType || 'article');
  const [status, setStatus] = useState<PostStatus>(existingPost?.status || 'draft');
  const [seoTitle, setSeoTitle] = useState(existingPost?.seoTitle || '');
  const [seoDescription, setSeoDescription] = useState(existingPost?.seoDescription || '');
  const [featured, setFeatured] = useState(existingPost?.featured || false);
  const [pinned, setPinned] = useState(existingPost?.pinned || false);

  useEffect(() => {
    if (title && !existingPost) {
      setSlug(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  }, [title, existingPost]);

  const toggleCategory = (id: string) => setSelectedCategories((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  const toggleTag = (id: string) => setSelectedTags((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);

  const handleSave = () => {
    if (!title.trim()) { toast.error('Título é obrigatório'); return; }
    toast.success(isNew ? 'Post criado (mock)' : 'Post atualizado (mock)');
  };

  // Shared sections
  const headerSection = (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <Button variant="ghost" size="icon" className="shrink-0" onClick={() => navigate('/admin/posts')}><ArrowLeft className="h-4 w-4" /></Button>
        <div className="min-w-0">
          <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">{isNew ? 'Novo Post' : 'Editar Post'}</h1>
          {slug && <p className="text-xs text-muted-foreground truncate">/{slug}</p>}
        </div>
      </div>
      <div className="flex gap-2 shrink-0">
        {existingPost && (
          <a href={`/post/${existingPost.slug}`} target="_blank" rel="noreferrer">
            <Button variant="outline" size="sm" className="gap-1"><Eye className="h-3.5 w-3.5" /> Ver</Button>
          </a>
        )}
        <Button size="sm" className="gap-1" onClick={handleSave}><Save className="h-3.5 w-3.5" /> Salvar</Button>
      </div>
    </div>
  );

  const contentSection = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Título</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do post" className="text-base sm:text-lg font-semibold" />
      </div>
      <div className="space-y-2">
        <Label>Subtítulo</Label>
        <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Subtítulo" />
      </div>
      <div className="space-y-2">
        <Label>Resumo</Label>
        <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Resumo curto do post" rows={2} />
      </div>
      <Tabs defaultValue="editor" className="w-full">
        <TabsList>
          <TabsTrigger value="editor">Editor HTML</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <HTMLEditor value={content} onChange={setContent} />
        </TabsContent>
        <TabsContent value="preview">
          <EditorPreview html={content} />
        </TabsContent>
      </Tabs>
    </div>
  );

  const configSection = (
    <div className="space-y-4">
      <div className="p-4 rounded-xl border border-border bg-card space-y-4">
        <div className="space-y-2">
          <Label>Status</Label>
          <div className="flex flex-wrap gap-1">
            {statuses.map((s) => (
              <Badge key={s} variant={status === s ? 'default' : 'outline'} className="cursor-pointer capitalize" onClick={() => setStatus(s)}>
                {s === 'published' ? 'Publicado' : s === 'draft' ? 'Rascunho' : 'Agendado'}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Tipo de Conteúdo</Label>
          <div className="flex flex-wrap gap-1">
            {contentTypes.map((ct) => (
              <Badge key={ct} variant={contentType === ct ? 'default' : 'outline'} className="cursor-pointer text-[10px]" onClick={() => setContentType(ct)}>
                {ct}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="rounded" /> Destaque
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} className="rounded" /> Fixado
          </label>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-border bg-card space-y-3">
        <Label>Imagem de Capa</Label>
        <Input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="URL da imagem" />
        {coverImage && <img src={coverImage} alt="Preview" className="w-full h-32 object-cover rounded-lg" />}
      </div>

      <div className="p-4 rounded-xl border border-border bg-card space-y-3">
        <Label>Categorias</Label>
        <div className="flex flex-wrap gap-1">
          {mockCategories.map((cat) => (
            <Badge key={cat.id} variant={selectedCategories.includes(cat.id) ? 'default' : 'outline'} className="cursor-pointer" onClick={() => toggleCategory(cat.id)}>
              {cat.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-xl border border-border bg-card space-y-3">
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-1">
          {mockTags.map((tag) => (
            <Badge key={tag.id} variant={selectedTags.includes(tag.id) ? 'default' : 'outline'} className="cursor-pointer text-[10px]" onClick={() => toggleTag(tag.id)}>
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  const seoSection = (
    <div className="p-4 rounded-xl border border-border bg-card space-y-3">
      <Label className="text-base font-semibold">SEO</Label>
      <div className="space-y-2">
        <Label className="text-xs">Título SEO</Label>
        <Input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder="Título SEO" />
        {seoTitle && <p className="text-[10px] text-muted-foreground">{seoTitle.length}/60 caracteres</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-xs">Meta Descrição</Label>
        <Textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} placeholder="Meta descrição" rows={3} />
        {seoDescription && <p className="text-[10px] text-muted-foreground">{seoDescription.length}/160 caracteres</p>}
      </div>
    </div>
  );

  // Mobile: tabbed layout
  if (isMobile) {
    return (
      <div className="space-y-4">
        {headerSection}
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="content" className="text-xs">Conteúdo</TabsTrigger>
            <TabsTrigger value="config" className="text-xs">Config</TabsTrigger>
            <TabsTrigger value="seo" className="text-xs">SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="content">{contentSection}</TabsContent>
          <TabsContent value="config">{configSection}</TabsContent>
          <TabsContent value="seo">{seoSection}</TabsContent>
        </Tabs>
      </div>
    );
  }

  // Desktop: grid layout
  return (
    <div className="space-y-6">
      {headerSection}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">{contentSection}</div>
        <div className="space-y-4">
          {configSection}
          {seoSection}
        </div>
      </div>
    </div>
  );
};

export default PostEditor;

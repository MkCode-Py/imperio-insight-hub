# Notas de Produção — Império Pharma Blog

## Visão Geral

Este blog editorial é um protótipo funcional completo construído com React, TypeScript e Tailwind CSS. Todos os dados são mock (estado local). Este documento descreve como migrar cada funcionalidade para produção.

---

## 1. Autenticação

**Atual:** Login mock com credenciais fixas (`admin@imperiopharma.com` / `imperio@2026!`) usando `sessionStorage`.

**Produção:**
- Substituir `AuthContext` por Supabase Auth
- Criar tabela `user_roles` com enum `admin | editor | viewer`
- Usar `supabase.auth.signInWithPassword()` no login
- Usar `onAuthStateChange` para manter sessão
- RLS policies baseadas em `auth.uid()` + `has_role()`

---

## 2. Banco de Dados (Posts, Categorias, Tags)

**Atual:** Dados em arquivos TypeScript (`mockPosts.ts`, `mockCategories.ts`, `mockTags.ts`).

**Produção:**
```sql
-- Tabelas principais
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  cover_image TEXT,
  "order" INT DEFAULT 0,
  enabled BOOLEAN DEFAULT true,
  highlighted BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  subtitle TEXT,
  summary TEXT,
  cover_image TEXT,
  content TEXT,
  content_type TEXT DEFAULT 'article',
  seo_title TEXT,
  seo_description TEXT,
  meta_image TEXT,
  status TEXT DEFAULT 'draft',
  publish_date TIMESTAMPTZ,
  pinned BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  reading_time INT DEFAULT 5,
  author TEXT,
  primary_cta_label TEXT,
  primary_cta_url TEXT,
  views INT DEFAULT 0,
  unique_views INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE post_categories (
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

CREATE TABLE post_tags (
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE related_posts (
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  related_post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, related_post_id)
);
```

**Migração:**
- Substituir imports de mock data por queries Supabase
- Criar hooks `usePosts()`, `useCategories()`, `useTags()` com React Query
- Manter a mesma interface TypeScript

---

## 3. View Tracking

**Atual:** `localStorage` + `sessionStorage` por slug.

**Produção:**
```sql
CREATE TABLE post_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  viewer_hash TEXT NOT NULL, -- hash(IP + user-agent)
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX idx_unique_view ON post_views(post_id, viewer_hash);
```

- Edge Function para receber view e fazer upsert
- Deduplicação server-side com hash de IP + user-agent
- Atualizar `posts.unique_views` via trigger ou cron

---

## 4. Storage de Mídia

**Atual:** URLs do Unsplash.

**Produção:**
- Criar bucket `blog-images` no Supabase Storage
- Implementar upload real na página `/admin/midia`
- Gerar URLs públicas com `supabase.storage.from('blog-images').getPublicUrl()`
- Adicionar resize/optimization com Supabase Image Transformations

---

## 5. Analytics Reais

**Atual:** Dados mock gerados aleatoriamente.

**Produção:**
- Criar tabela `analytics_events` para tracking granular
- Usar Edge Functions para receber eventos
- Queries agregadas para dashboard
- Ou integrar com serviço externo (Plausible, PostHog, Umami)

---

## 6. SEO

**Atual:** Campos mock preenchidos nos posts.

**Produção:**
- Implementar `<Helmet>` com react-helmet-async para meta tags dinâmicas
- Gerar sitemap.xml automaticamente
- Open Graph tags para compartilhamento social
- JSON-LD structured data para artigos

---

## 7. Deploy

**Domínio:** `blog.imperiopharma.com.py`

**Opções:**
1. Vercel (recomendado para SPA React)
2. Netlify
3. Supabase Edge + CDN

**Configuração:**
- Apontar subdomínio `blog` via CNAME
- Configurar `_redirects` ou `vercel.json` para SPA routing
- Variáveis de ambiente para Supabase URL + anon key

---

## 8. Editor — Migração para TipTap

O editor atual usa textarea HTML + preview. Para uma experiência WYSIWYG:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-table @tiptap/extension-image
```

- Substituir `HTMLEditor` por componente TipTap
- Manter modo HTML como alternativa
- Criar extensões customizadas para callouts e blocos editoriais

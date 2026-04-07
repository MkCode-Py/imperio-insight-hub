

# Plano: Fases 2–5 Completas — Império Pharma Blog

## Visão Geral

Implementar todas as páginas públicas restantes, sistema admin completo com login mock, dashboard de métricas, editor dual-mode, CRUD de categorias/tags, e polish final.

---

## Fase 2 — Páginas Públicas + View Counter

### Páginas

1. **Post Individual** (`/post/:slug`)
   - Layout editorial premium com cover image full-width
   - Breadcrumbs, TOC lateral (gerado automaticamente dos headings do HTML)
   - Blocos ricos renderizados (callout, warning, info, tabelas)
   - Botão WhatsApp share, CTA para loja, author info
   - Posts relacionados, navegação anterior/próximo
   - View counter com hook `useViewCounter`

2. **Categoria** (`/categoria/:slug`)
   - Header com imagem da categoria, descrição
   - Grid de posts filtráveis por tags e contentType

3. **Busca** (`/busca?q=...`)
   - Filtros: categoria, tags, contentType, ordenação (recentes, mais vistos)
   - Resultados com PostCard horizontal

4. **Mais Vistos** (`/mais-vistos`)
   - Ranking numerado com PostCard horizontal

5. **Guias** (`/guias`)
   - Grid filtrado por contentType === 'guide'

6. **404 Premium**
   - Design branded com CTA de retorno

### Hook: useViewCounter
- `localStorage` key por slug para unique views
- `sessionStorage` anti-refresh
- Incrementa mock view count no estado local

---

## Fase 3 — Admin Login + Dashboard + Posts + Editor

### Auth Mock
- `AuthContext` com estado de login
- Senha fixa: `imperio@2026!`
- `ProtectedRoute` wrapper
- Documentação para migração Supabase Auth

### Página de Login (`/admin/login`)
- Design premium, campo email + senha, validação
- Feedback de erro em toast

### Layout Admin (`AdminLayout`)
- Sidebar com navegação: Dashboard, Posts, Categorias, Tags, Mídia, Métricas, SEO, Configurações
- Header com user info, logout
- Responsivo com sidebar colapsável

### Dashboard (`/admin`)
- Cards de métricas: total views, unique views, total posts, categorias ativas
- Gráfico de views por dia (Recharts — já instalado)
- Top 5 posts por views
- Distribuição por categoria
- Filtros de período: hoje, 7 dias, 30 dias, total
- Mock data em `src/data/mockMetrics.ts`

### Lista de Posts (`/admin/posts`)
- Tabela com título, status, categoria, views, data
- Filtros por status, categoria, busca
- Ações: editar, duplicar, excluir (mock)

### Editor de Post (`/admin/posts/new`, `/admin/posts/:id`)
- **Modo Visual**: Textarea rica com formatação (sem TipTap — usar contentEditable + toolbar simples ou textarea com markdown preview para evitar dependência pesada)
- **Modo HTML/Código**: Textarea com syntax highlighting básico
- **Preview**: Renderização em tempo real do HTML
- Campos: título, slug (auto-gerado), subtitle, summary, cover image URL, categorias (multi-select), tags (multi-select), contentType, status, publishDate, featured, pinned, SEO fields, CTA
- Salvar em estado local (mock)

> **Nota sobre editor**: Em vez de TipTap (dependência pesada), usaremos um editor com textarea HTML + preview em tempo real + toolbar de snippets. Isso cobre o caso de uso principal (colar HTML gerado por AI) com excelência, e permite escrita manual com toolbar de inserção de blocos.

---

## Fase 4 — CRUD Categorias/Tags + Mídia + Métricas + SEO + Config

### Categorias (`/admin/categorias`)
- Lista com drag-to-reorder (ou botões up/down)
- Modal de criar/editar: nome, slug, descrição, imagem, enabled, highlighted
- Excluir com confirmação

### Tags (`/admin/tags`)
- Lista simples, criar/editar/excluir inline

### Mídia (`/admin/midia`)
- Galeria mock de imagens (URLs de Unsplash)
- Upload simulado, copiar URL

### Métricas (`/admin/metricas`)
- Dashboard analítico expandido
- Views por período, top posts, categorias, fontes de tráfego simuladas
- Gráficos com Recharts
- Filtros de período funcionais

### SEO (`/admin/seo`)
- Tabela de todos os posts com campos SEO (seoTitle, seoDescription, metaImage)
- Status de preenchimento (completo/incompleto)
- Edição inline rápida

### Configurações (`/admin/configuracoes`)
- Informações do blog: nome, descrição, URL da loja
- Informações do autor padrão
- Mock — documentado para conexão real

---

## Fase 5 — Polish Final

- Transições e animações suaves
- Responsividade completa verificada
- Estilos editoriais para blocos ricos (callout, warning, info, FAQ)
- CSS para conteúdo de post (prose-like typography)
- Documentação de produção em `PRODUCTION_NOTES.md`

---

## Arquivos a Criar (~30 arquivos)

```text
src/
├── contexts/AuthContext.tsx
├── hooks/useViewCounter.ts
├── data/mockMetrics.ts
├── pages/
│   ├── PostPage.tsx
│   ├── CategoryPage.tsx
│   ├── SearchPage.tsx
│   ├── MostViewedPage.tsx
│   ├── GuidesPage.tsx
│   ├── AdminLogin.tsx
│   ├── admin/
│   │   ├── Dashboard.tsx
│   │   ├── PostsList.tsx
│   │   ├── PostEditor.tsx
│   │   ├── Categories.tsx
│   │   ├── Tags.tsx
│   │   ├── Media.tsx
│   │   ├── Metrics.tsx
│   │   ├── SEO.tsx
│   │   └── Settings.tsx
├── components/
│   ├── blog/
│   │   ├── ShareWhatsApp.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── RelatedPosts.tsx
│   │   └── PostContent.tsx
│   ├── admin/
│   │   ├── AdminLayout.tsx
│   │   ├── AdminSidebar.tsx
│   │   ├── DashboardCards.tsx
│   │   ├── ViewsChart.tsx
│   │   ├── PostTable.tsx
│   │   └── ProtectedRoute.tsx
│   └── editor/
│       ├── HTMLEditor.tsx
│       └── EditorPreview.tsx
PRODUCTION_NOTES.md
```

## Arquivos a Modificar
- `src/App.tsx` — todas as rotas novas
- `src/pages/NotFound.tsx` — redesign premium
- `src/index.css` — estilos de prose/editorial

---

## Decisão Técnica: Editor

Usar **textarea HTML + preview + toolbar de snippets** em vez de TipTap. Razões:
- Caso de uso principal é colar HTML de AI — textarea é perfeita
- Toolbar insere snippets HTML (callout, tabela, heading, lista)
- Preview renderiza em tempo real
- Zero dependências adicionais
- Fácil migrar para TipTap depois se necessário


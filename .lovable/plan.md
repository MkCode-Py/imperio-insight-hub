

# Império Pharma — Blog Editorial Premium

## Identidade Visual

**Paleta inspirada no Paraguai** (foco em azul e branco, vermelho mínimo como acento):
- **Primário:** Azul profundo (#1B3A6B) — confiança, pharma premium
- **Acento:** Azul elétrico (#2563EB) — CTAs, destaques
- **Superfície:** Branco limpo (#FAFBFD) / cinza frio (#F1F5F9)
- **Vermelho acento** (mínimo): (#DC2626) — badges, alertas, destaques pontuais
- **Dark mode:** Fundo #0F172A, cards #1E293B, texto #E2E8F0
- **Tipografia:** Inter (corpo), bold/heading com peso forte, hierarquia clara

## Arquitetura de Páginas

### Públicas
1. **Homepage** — Hero premium, posts em destaque, recentes, mais vistos, categorias, guias, barra de busca, CTAs para loja
2. **Página de Categoria** — Header com imagem, filtros por tags/tipo, grid de posts
3. **Post Individual** — Layout editorial longo, TOC lateral, blocos ricos, compartilhar WhatsApp, CTAs, posts relacionados, navegação anterior/próximo
4. **Busca** — Busca com filtros (categoria, tags, tipo, mais vistos, guias)
5. **Mais Vistos** — Ranking de posts por views
6. **Guias** — Conteúdo evergreen/educacional destacado
7. **404 Premium** — Página customizada com CTA de retorno
8. **Login Admin** — Página dedicada com senha fixa (demo)

### Admin (/admin/*)
1. **Dashboard** — Cards de métricas, gráficos de views, top posts, categorias, CTAs
2. **Posts** — Lista com filtros, status, busca, ações rápidas
3. **Editor de Post** — Editor visual rico (TipTap) + modo HTML/código + preview em tempo real
4. **Categorias** — CRUD completo, reordenação, imagem, slug
5. **Tags** — CRUD simples
6. **Mídia** — Galeria de imagens (mock)
7. **Métricas** — Dashboard analítico com filtros de período
8. **SEO** — Visão geral de campos SEO dos posts
9. **Configurações** — Informações gerais do blog

## Modelo de Dados (Mock com TypeScript)

**Post:** title, slug, subtitle, summary, coverImage, categories[], tags[], contentType, content, seoTitle, seoDescription, metaImage, status (draft/scheduled/published), publishDate, pinned, featured, readingTime, author, primaryCTA, relatedLink, relatedPosts[], views, uniqueViews

**Category:** id, name, slug, description, coverImage, order, enabled, highlighted

**Tag:** id, name, slug

**Content Types:** article, guide, comparison, list, faq, featured, protocol, substance-analysis

## Funcionalidades Chave

- **Views únicos:** localStorage com chave por post slug + sessionStorage anti-refresh. Documentação para implementação futura com servidor
- **Dark mode toggle:** Light padrão, dark premium
- **Compartilhar WhatsApp:** Botão em cada post com link pré-formatado
- **Busca e filtros:** Por categoria, tags, tipo de conteúdo, destaque, mais vistos, guias
- **Editor dual-mode:** Visual (TipTap com toolbar completa: headings, listas, tabelas, callouts, imagens, blocos) + HTML/código + preview
- **Blocos editoriais:** Callout, info box, warning, comparação, FAQ accordion, tabela responsiva
- **Breadcrumbs e TOC automático** no post
- **Mock data realista:** ~12 posts distribuídos entre as 4 categorias iniciais com dados convincentes
- **Métricas mock:** Dados simulados com filtros de período funcional

## Estrutura de Componentes

```
src/
├── components/
│   ├── layout/        (Header, Footer, MobileNav, ThemeToggle)
│   ├── blog/          (PostCard, PostGrid, Hero, CategoryBar, SearchBar, ShareButton, ViewCounter, TOC, Breadcrumbs)
│   ├── editor/        (RichEditor, HTMLEditor, PreviewPane, EditorToolbar)
│   ├── admin/         (AdminLayout, Sidebar, DashboardCards, PostTable, CategoryManager, MetricsCharts)
│   └── ui/            (shadcn components)
├── data/              (mockPosts, mockCategories, mockTags, mockMetrics)
├── contexts/          (AuthContext, ThemeContext, BlogContext)
├── hooks/             (useViewCounter, useSearch, useFilters)
├── pages/             (todas as páginas públicas e admin)
├── types/             (Post, Category, Tag, Metrics, ContentType)
└── lib/               (utils, seo helpers, view tracking)
```

## Dados Mock Realistas

Posts de exemplo cobrindo:
- **Ciclos:** "Guia Completo: Primeiro Ciclo de Testosterona", "Ciclo de Cutting com Oxandrolona"
- **Ergogênicos:** "Tudo sobre Oxandrolona", "Stanozolol: Benefícios e Protocolos"
- **Emagrecimento:** "Tirzepatida: A Nova Era", "Sibutramina vs Anfepramona"
- **Peptídeos:** "BPC-157: Recuperação Acelerada", "Stack de Peptídeos para Performance"

Dashboard com métricas simuladas: gráficos de views por dia, top 5 posts, distribuição por categoria, CTAs clicados.

## Implementação em Fases

**Fase 1:** Sistema de design, tipos, dados mock, layout público (Header, Footer, Homepage, PostCard)
**Fase 2:** Página de post, categoria, busca, 404, view counter, dark mode
**Fase 3:** Admin login, dashboard, lista de posts, editor com TipTap + HTML mode
**Fase 4:** CRUD categorias/tags, mídia, métricas, SEO, configurações
**Fase 5:** Polish final, responsividade, transições, documentação

## Notas de Produção (documentação incluída no final)

- Como substituir login mock por Supabase Auth
- Como conectar posts/categorias a banco real
- Como implementar view tracking real com deduplicação server-side
- Como implementar analytics reais
- Como configurar storage de mídia
- Como deploy em blog.imperiopharma.com.py


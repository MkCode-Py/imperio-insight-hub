

# Plano: Completar Todas as Páginas Públicas com Conteúdo Rico

## Diagnóstico Atual

**Páginas existentes:** Home, Post, Categoria, Busca, Mais Vistos, Guias, 404
**Mock posts:** 12 posts — algumas categorias têm apenas 2-3 posts
**Conteúdo HTML:** Mínimo — parágrafos curtos, sem imagens inline, poucos callouts
**Página faltando:** `/tag/:slug` — tags existem nos dados mas não há página para navegar por tag

## O Que Será Feito

### 1. Nova Página — Tags (`/tag/:slug`)
- Página de listagem de posts por tag, similar à CategoryPage
- Header com nome da tag e contagem de posts
- Grid de PostCards com filtro de categoria
- Rota adicionada em `App.tsx`

### 2. Expandir Mock Posts (12 → 20+)
Adicionar ~8 posts novos distribuídos entre todas as categorias:

| Categoria | Atual | Novo Total |
|---|---|---|
| Tipos de Ciclos | 3 | 5 |
| Ergogênicos | 3 | 5 |
| Emagrecimento | 4 | 6 |
| Peptídeos | 2 | 5 |

Posts novos incluirão:
- **Ciclos:** Ciclo Feminino Iniciante, Ciclo de Recomposição Corporal
- **Ergogênicos:** GH (Hormônio do Crescimento), Primobolan Análise
- **Emagrecimento:** Semaglutida Guia, Top 5 Emagrecedores
- **Peptídeos:** TB-500, Ipamorelin + CJC-1295, Melanotan II

### 3. Enriquecer Conteúdo HTML dos Posts
Atualizar o HTML de todos os posts (existentes + novos) com conteúdo editorial realista:
- Mais seções `<h2>` e `<h3>` para Table of Contents funcionar
- Callouts (`info`, `warning`, `tip`)
- Tabelas comparativas
- Listas de benefícios/riscos
- Imagens inline com `<figure>` e `<figcaption>`
- Mínimo 4-6 seções por post para parecer conteúdo real

### 4. Adicionar Tags Faltando
Novas tags para os posts novos: `tag-gh`, `tag-primobolan`, `tag-semaglutida`, `tag-tb500`, `tag-melanotan`, `tag-feminino-ciclo`, `tag-recomposicao`

### 5. Linkar Tags nos PostCard e PostPage
- No `PostCard` (default e horizontal): mostrar tags como badges clicáveis abaixo da categoria
- No `PostPage`: tags clicáveis que levam para `/tag/:slug`
- No `Header` ou `Footer`: não adicionar link de tags (mantém limpo)

### 6. Polish nas Páginas Existentes
- **Index:** Garantir que seções "Guias" e "Mais Vistos" sempre tenham conteúdo suficiente
- **CategoryPage:** Adicionar contagem de posts no header
- **SearchPage:** Melhorar estado vazio com sugestões de categorias
- **GuidesPage:** Garantir que existam pelo menos 3-4 guides
- **MostViewedPage:** Com 20+ posts, o ranking fica mais rico
- **PostPage:** Tags clicáveis, conteúdo longo suficiente para TOC funcionar bem

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---|---|
| `src/pages/TagPage.tsx` | **Novo** — página de listagem por tag |
| `src/App.tsx` | Adicionar rota `/tag/:slug` |
| `src/data/mockPosts.ts` | Expandir de 12 para ~20 posts com HTML rico |
| `src/data/mockTags.ts` | Adicionar ~7 tags novas |
| `src/lib/blog.ts` | Adicionar `getTagBySlug`, `getPostsByTag` (já existem) |
| `src/components/blog/PostCard.tsx` | Tags clicáveis nos cards |
| `src/pages/PostPage.tsx` | Tags clicáveis no header do post |
| `src/pages/SearchPage.tsx` | Estado vazio melhorado |
| `src/pages/CategoryPage.tsx` | Contagem de posts |
| `src/components/layout/Footer.tsx` | Link para tags populares (opcional) |


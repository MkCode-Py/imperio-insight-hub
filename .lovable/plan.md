

# Plano: Refinamento Visual Final — Império Insight Hub

## Resumo

Passo final de polish visual focado em mobile-first, identidade editorial premium, e consistência. Sem mudanças em arquitetura, rotas, auth, dados mock, ou admin.

---

## 1. Scroll-to-top em mudanças de rota

**Arquivo:** `src/App.tsx`

- Criar componente `ScrollToTop` que escuta `useLocation()` e chama `window.scrollTo(0, 0)` em cada mudança de pathname
- Inserir dentro do `<BrowserRouter>` antes de `<Routes>`
- Sem dependências extras

## 2. Hero — Mais premium e impactante no mobile

**Arquivo:** `src/pages/Index.tsx`

- Reduzir padding top do hero para mobile (pt-8) para ganhar espaço
- Título: `text-[1.75rem]` mobile com `leading-[1.15]` — mais compacto e forte
- Subtitle: texto menor `text-[14px]`, `text-muted-foreground/80`, max-w-sm
- Section label: mais sutil, `text-[10px]` com spacing fino
- Search bar: margem inferior menor (`mb-10`), placeholder mais curto no mobile

## 3. Featured cards — Mais premium

**Arquivo:** `src/components/blog/PostCard.tsx`

- Featured variant: aspect-ratio `aspect-[3/2]` no mobile em vez de `16/10` para mais presença
- Overlay: gradiente mais suave `from-black/80 via-black/30`
- Padding interno: `p-4` mobile, `p-6` desktop
- Título featured: `text-base sm:text-lg` — mais controlado
- Badge de categoria no featured: remover `backdrop-blur-sm`, usar `bg-accent/90` sólido

## 4. Default card — Mais limpo

**Arquivo:** `src/components/blog/PostCard.tsx`

- Image aspect: `aspect-[16/9]` consistente
- Padding: `p-4` uniforme
- Título: `text-[14px] sm:text-[15px]` — mais controlado
- Remover tags dos default cards para reduzir clutter — manter apenas no horizontal e no PostPage
- Footer do card: metas mais sutis, remover `ArrowRight` icon (desnecessário)
- Border: `border-border/40` mais sutil

## 5. Compact card — Mais limpo

**Arquivo:** `src/components/blog/PostCard.tsx`

- Imagem: `w-12 h-12` em vez de `w-14 h-14` — mais compacto
- Padding vertical reduzido `py-3`

## 6. Categorias na homepage — Mais impactantes

**Arquivo:** `src/pages/Index.tsx`

- Aspect ratio: `aspect-[3/2]` em mobile para cards maiores
- Gradiente overlay mais forte para melhor legibilidade do texto
- Título da categoria: `text-base font-bold` com text-shadow sutil via classe
- Post count abaixo do nome: `text-white/60 text-[11px]`
- Gap: `gap-2.5` mobile

## 7. Most Viewed na homepage — Mais editorial

**Arquivo:** `src/pages/Index.tsx`

- Número de ranking: `text-3xl font-black text-accent/15` — mais presente mas sutil
- Card hover mais refinado: apenas `hover:bg-muted/50` sem translate
- Título: `text-[13px] font-semibold`
- Separar com divider sutil entre items

## 8. Section rhythm na homepage

**Arquivo:** `src/pages/Index.tsx`

- Sections: `py-12 sm:py-16` consistente
- `border-t border-border/30` — mais sutil
- Section labels: `text-[10px]` uniformes
- Section titles: `text-lg sm:text-xl` — mais contidos
- Seção "Mais Vistos + Guias": remover `bg-muted/30` — manter fundo limpo branco

## 9. Store CTA — Mais premium

**Arquivo:** `src/pages/Index.tsx`

- Reduzir padding: `p-6 sm:p-10`
- Título menor: `text-xl sm:text-2xl`
- Botão: border branco outline em vez de bg-white sólido

## 10. PostPage — Experiência de leitura premium

**Arquivo:** `src/pages/PostPage.tsx`

- Cover image: `h-40 sm:h-52 lg:h-64` — ligeiramente maior
- Meta area: reduzir gap entre items `gap-3`, ícones `h-3 w-3`
- Tags: apenas 3 primeiras tags, `text-[11px]`
- Prev/Next nav: padding `p-3.5`, border mais sutil
- Related posts section: `mt-16 pt-12` — mais espaço
- Breadcrumb text: `text-xs`

## 11. Article prose — Refinamento de leitura

**Arquivo:** `src/index.css`

- `.imperio-prose p`: `mb-6` (mais espaço entre parágrafos)
- `.imperio-prose h2`: `mt-14 mb-6` — mais respiração
- `.imperio-prose h3`: `mt-10 mb-4`
- `.imperio-prose li`: `leading-[1.75]`
- Callouts: `p-4 rounded-lg` — cantos mais consistentes

## 12. Header — Mais refinado

**Arquivo:** `src/components/layout/Header.tsx`

- Container: `h-12` em vez de `h-14` — mais fino e elegante
- Logo: `h-7 w-7` em vez de `h-8 w-8`
- Nav links: `text-[12px]` — mais delicados
- Icon buttons: `h-7 w-7` mais compactos
- Glass effect: `bg-background/90` mais opaco

## 13. Footer — Mais premium

**Arquivo:** `src/components/layout/Footer.tsx`

- `mt-16` em vez de `mt-20` — menos gap
- `py-12` em vez de `py-14`
- Tags populares: `text-[11px]`
- Copyright: mais spacing, `pt-5 mt-10`

## 14. Category, Tag, Search pages — Consistência

**Arquivos:** `CategoryPage.tsx`, `TagPage.tsx`, `SearchPage.tsx`

- Page header padding: `py-8 sm:py-10` consistente
- Section labels e títulos alinhados com homepage
- Badge filters: `text-xs h-7` — mais compactos e touch-friendly (min 44px tap area via padding)
- Card grid: `gap-4 sm:gap-5` consistente
- Search input: `h-10` em vez de `h-11` — mais contido

## 15. MostViewedPage e GuidesPage — Consistência

**Arquivos:** `MostViewedPage.tsx`, `GuidesPage.tsx`

- Mesmo header treatment: section-label + título + descrição
- Most viewed items: top 3 com accent mais forte `text-accent/50`
- Card grid no guides: `gap-4 sm:gap-5`

## 16. Micro-polish global

**Arquivo:** `src/index.css`

- `.imperio-card-hover`: `hover:shadow-sm` em vez de `hover:shadow-md` — mais sutil
- `.section-label`: confirmar `text-[10px]` e `tracking-[0.14em]`
- Badge global: radius `rounded-md` consistente
- `.imperio-glass`: `bg-background/92` — mais opaco

## 17. Breadcrumbs — Mais delicados

**Arquivo:** `src/components/blog/Breadcrumbs.tsx`

- `text-xs` em vez de `text-sm`
- Home icon: `h-3 w-3`
- Chevron: `h-2.5 w-2.5`

## 18. TableOfContents — Mais sutil

**Arquivo:** `src/components/blog/TableOfContents.tsx`

- Background: `bg-muted/30` em vez de `bg-card`
- Border: `border-border/40`
- Font size: `text-xs` em vez de `text-sm`
- Title: `text-xs font-semibold uppercase tracking-wider`

---

## Arquivos a Modificar

| Arquivo | Mudança |
|---|---|
| `src/App.tsx` | ScrollToTop component |
| `src/pages/Index.tsx` | Hero, sections, categories, most viewed, CTA |
| `src/components/blog/PostCard.tsx` | Cards refinados |
| `src/pages/PostPage.tsx` | Reading experience |
| `src/index.css` | Prose, utilities, glass |
| `src/components/layout/Header.tsx` | Thinner, more refined |
| `src/components/layout/Footer.tsx` | Premium spacing |
| `src/components/blog/Breadcrumbs.tsx` | Smaller, more delicate |
| `src/components/blog/TableOfContents.tsx` | More subtle |
| `src/components/blog/RelatedPosts.tsx` | Better spacing |
| `src/pages/CategoryPage.tsx` | Consistency |
| `src/pages/TagPage.tsx` | Consistency |
| `src/pages/SearchPage.tsx` | Consistency |
| `src/pages/MostViewedPage.tsx` | Polish |
| `src/pages/GuidesPage.tsx` | Polish |

Nenhuma dependência nova. Nenhuma mudança estrutural. Apenas refinamento visual focado em mobile.


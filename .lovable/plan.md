

# Plano: Admin Mobile Perfeito + PostEditor Responsivo + Animações

## 1. Corrigir e testar admin mobile (sidebar, navegação, tabelas)

**Problemas remanescentes a resolver:**

- **AdminSidebar**: O Sheet mobile funciona mas precisa de ajustes — logo/brand no header do Sheet, melhor espaçamento, scroll correto quando muitos itens
- **AdminLayout**: Adicionar `overflow-x-hidden` no `main` também, garantir que nenhum child force scroll horizontal
- **PostTable mobile cards**: Melhorar layout — imagem maior, melhor hierarquia visual, garantir que nada corta
- **HTMLEditor toolbar**: No mobile, os 9 botões de snippet ficam apertados — usar scroll horizontal ou grid 2 linhas
- **Dashboard/Metrics cards**: `DashboardCards` precisa verificar se grid funciona bem em 390px
- **SEO mobile cards**: Garantir que textos longos de seoTitle/seoDescription não quebram layout

**Arquivos:** `AdminSidebar.tsx`, `AdminLayout.tsx`, `PostTable.tsx`, `HTMLEditor.tsx`, `DashboardCards.tsx`

## 2. PostEditor totalmente responsivo no mobile

**Mudanças:**
- No mobile, reorganizar o editor em **Tabs** (Conteúdo / Configurações / SEO) em vez do grid de 3 colunas
- Tab "Conteúdo": título, subtítulo, resumo, editor HTML com preview
- Tab "Configurações": status, tipo, categorias, tags, capa, featured/pinned
- Tab "SEO": campos SEO
- Header do editor: empilhar título + botões em coluna no mobile, botão Salvar fixo no bottom em mobile
- Textarea do editor: `min-h-[300px]` no mobile em vez de 400px
- Toolbar de snippets: scroll horizontal com `overflow-x-auto` no mobile

**Arquivo:** `PostEditor.tsx`, `HTMLEditor.tsx`

## 3. Animações com framer-motion nas transições de página do admin

**Implementação:**
- Instalar `framer-motion`
- Criar componente `AdminPageTransition` wrapper com `AnimatePresence` + `motion.div`
- Animação: fade-in + slide-up sutil (opacity 0→1, translateY 8px→0, duration 200ms)
- Aplicar em `AdminLayout.tsx` envolvendo o `<Outlet />` com key baseado em `location.pathname`
- Resultado: cada troca de página no admin tem transição suave e profissional

**Arquivos:** `AdminLayout.tsx` (wrapper com AnimatePresence), novo `src/components/admin/AdminPageTransition.tsx`

## Resumo de Arquivos

| Arquivo | Ação |
|---|---|
| `src/components/admin/AdminSidebar.tsx` | Melhorar Sheet mobile, branding, scroll |
| `src/components/admin/AdminLayout.tsx` | overflow-x-hidden, AnimatePresence wrapper |
| `src/components/admin/PostTable.tsx` | Cards mobile mais polish |
| `src/components/editor/HTMLEditor.tsx` | Toolbar scroll horizontal mobile |
| `src/pages/admin/PostEditor.tsx` | Tabs mobile (Conteúdo/Config/SEO) |
| `src/components/admin/AdminPageTransition.tsx` | Novo — wrapper framer-motion |
| `package.json` | Instalar framer-motion |


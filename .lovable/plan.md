

# Plano: Admin Mobile Responsivo Completo

## Problemas Identificados

1. **Sidebar fixa no mobile** — ocupa metade da tela (w-60), impossibilita visualização do conteúdo
2. **Conteúdo cortado** — tabelas, cards e textos ultrapassam a viewport horizontal
3. **Sem mecanismo mobile** — sidebar não tem modo overlay/sheet para mobile
4. **PostTable com 6 colunas** — impossível renderizar em 390px, causa scroll horizontal
5. **SEO table** — mesmos problemas de overflow
6. **Dashboard header** — título + badges de período não cabem numa linha
7. **PostsList header** — botão "Novo Post" + título apertados
8. **Categories** — cards com imagem + botões + badges apertados
9. **PostEditor** — grid de 3 colunas sem responsividade adequada no mobile (já usa xl, mas a sidebar rouba espaço)

## Solução

### 1. AdminLayout + AdminSidebar — Arquitetura Mobile

**AdminSidebar.tsx** — Refatorar completamente:
- No **desktop** (≥768px): sidebar fixa lateral como está hoje (sticky, colapsável)
- No **mobile** (<768px): sidebar **escondida**, acessível via **Sheet** (overlay slide-in da esquerda)
- Usar `useIsMobile()` hook existente
- Adicionar botão hamburger no topo do conteúdo
- Fechar sidebar ao clicar num link (mobile)

**AdminLayout.tsx** — Adicionar:
- Header mobile com hamburger trigger + título da seção
- Garantir `overflow-x-hidden` e `w-full` no container principal
- Padding ajustado para mobile (`p-3` em vez de `p-4`)

### 2. PostTable — Layout Mobile com Cards

Em vez de tabela no mobile, renderizar cada post como um **card compacto**:
- Imagem pequena + título + status badge + views + data
- Ações em menu dropdown (3 dots) em vez de botões lado a lado
- Manter tabela no desktop (≥768px)

### 3. SEO Table — Scroll Horizontal Controlado

- Wrapper com `overflow-x-auto` no container da tabela
- Reduzir `min-w` das colunas
- No mobile, mostrar apenas Post + Status, com expansão ao clicar

### 4. Dashboard — Ajustes Mobile

- Header: título e badges empilhados (`flex-col` no mobile)
- Cards grid: já usa `grid-cols-2`, OK
- Chart: reduzir altura para `h-48` no mobile
- Top Posts/Categorias: stack vertical (já usa `lg:grid-cols-2`, OK)

### 5. Categories — Cards Mobile

- Empilhar elementos verticalmente no card (imagem em cima, info abaixo)
- Botões de reordenar + ações em linha compacta
- Remover imagem grande no mobile ou reduzir

### 6. PostsList — Header Mobile

- Empilhar título + botão "Novo Post" em coluna no mobile
- Busca e filtros empilhados (já faz isso com `flex-col sm:flex-row`)

### 7. Metrics, Media, Tags, Settings, PostEditor

- Ajustes menores de padding e overflow
- Media grid: `grid-cols-2` já está OK para mobile

## Arquivos a Modificar

1. **`src/components/admin/AdminSidebar.tsx`** — Refatorar com Sheet para mobile
2. **`src/components/admin/AdminLayout.tsx`** — Header mobile com hamburger
3. **`src/components/admin/PostTable.tsx`** — Card layout no mobile
4. **`src/pages/admin/Dashboard.tsx`** — Header responsivo
5. **`src/pages/admin/PostsList.tsx`** — Header empilhado
6. **`src/pages/admin/Categories.tsx`** — Cards responsivos
7. **`src/pages/admin/SEO.tsx`** — Tabela com scroll controlado
8. **`src/pages/admin/Metrics.tsx`** — Header empilhado
9. **`src/components/admin/ViewsChart.tsx`** — Altura responsiva

## Padrão de Sidebar Mobile

```text
Mobile (<768px):
┌──────────────────────┐
│ ☰  Dashboard    [IP] │  ← Header fixo com hamburger
├──────────────────────┤
│                      │
│   Conteúdo full      │
│   width sem          │
│   sidebar            │
│                      │
└──────────────────────┘

Ao clicar ☰:
┌─────────┬────────────┐
│ Sheet   │            │
│ overlay │  Conteúdo  │
│ (nav)   │  (escuro)  │
│         │            │
└─────────┴────────────┘
```


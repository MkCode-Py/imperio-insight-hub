

# Plano: Micro-interações + Dark Mode Premium no Admin

## Resultado do Teste Mobile

O admin está funcionando perfeitamente no mobile (390px):
- Menu hamburger abre/fecha corretamente com Sheet overlay
- Navegação entre páginas fluida com transições framer-motion
- PostEditor com tabs Conteúdo/Config/SEO responsivos
- PostTable com cards mobile, SEO com cards, Dashboard com grid adaptativo
- Nenhum overflow horizontal detectado

## 1. Micro-interações com framer-motion

**Componentes afetados:**

- **DashboardCards.tsx**: `whileHover={{ scale: 1.02, y: -2 }}` e `whileTap={{ scale: 0.98 }}` nos cards de métricas
- **PostTable.tsx**: Cards mobile com `whileHover={{ scale: 1.01 }}` e `whileTap={{ scale: 0.98 }}`; rows desktop com hover highlight animado
- **AdminSidebar.tsx**: Nav items com `whileHover` e `whileTap` feedback sutil
- **Button global**: Não modificar — manter CSS padrão. Adicionar `active:scale-95` via Tailwind nos botões admin específicos
- **Cards gerais** (Categories, SEO, Settings): Wrapper `motion.div` com hover scale sutil

**Padrão de animação:**
- Hover: `scale: 1.01-1.02`, `y: -1 a -2px`, `transition: { duration: 0.2 }`
- Tap/Press: `scale: 0.97-0.98`
- Stagger em listas: delay incremental `0.05s * index` no carregamento

## 2. Dark Mode Premium

**Problemas atuais:**
- `--card` e `--secondary` e `--muted` todos iguais (`217 33% 17%`) — sem profundidade visual
- `--border` muito próximo do card — baixo contraste
- Falta distinção entre superfícies (sidebar vs conteúdo vs cards)

**Novas cores dark (mais profundidade e contraste):**

```
--background: 222 47% 8%       (mais escuro, premium)
--foreground: 210 40% 96%      (mais claro para contraste)

--card: 220 40% 13%            (sutil distinção do background)
--card-foreground: 210 40% 96%

--secondary: 220 35% 16%       (elevação intermediária)
--secondary-foreground: 210 40% 90%

--muted: 220 30% 18%           (mais claro que secondary)
--muted-foreground: 215 20% 60%

--accent: 217 91% 60%          (mantém)
--accent-foreground: 0 0% 100%

--border: 220 30% 20%          (mais visível)
--input: 220 30% 16%           (campo de input mais escuro que card)

--sidebar-background: 222 47% 6%    (sidebar mais escura que background)
--sidebar-border: 220 30% 15%

--imperio-surface: 220 35% 11%
```

**Efeitos adicionais no dark mode:**
- Cards com `shadow-lg shadow-black/20` sutil para depth
- Sidebar com gradiente sutil de cima para baixo
- Inputs com borda mais visível ao focar

## Arquivos a Modificar

| Arquivo | Mudança |
|---|---|
| `src/index.css` | Dark mode vars refinadas |
| `src/components/admin/DashboardCards.tsx` | motion.div com hover/tap |
| `src/components/admin/PostTable.tsx` | Cards animados |
| `src/components/admin/AdminSidebar.tsx` | Nav items com motion feedback |
| `src/pages/admin/Categories.tsx` | Cards animados |
| `src/pages/admin/SEO.tsx` | Cards animados |
| `src/pages/admin/PostsList.tsx` | Stagger na lista |
| `src/components/admin/AdminPageTransition.tsx` | Adicionar stagger children support |


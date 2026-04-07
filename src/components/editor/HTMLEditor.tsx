import { Bold, Italic, Heading2, Heading3, List, Table, AlertTriangle, Info, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const snippets = [
  { icon: Heading2, label: 'H2', html: '<h2>Título</h2>' },
  { icon: Heading3, label: 'H3', html: '<h3>Subtítulo</h3>' },
  { icon: Bold, label: 'Bold', html: '<strong>texto</strong>' },
  { icon: Italic, label: 'Italic', html: '<em>texto</em>' },
  { icon: List, label: 'Lista', html: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>' },
  { icon: Table, label: 'Tabela', html: '<table>\n  <thead><tr><th>Coluna 1</th><th>Coluna 2</th></tr></thead>\n  <tbody><tr><td>Dado</td><td>Dado</td></tr></tbody>\n</table>' },
  { icon: Info, label: 'Info', html: '<div class="callout info"><strong>Nota:</strong> Texto informativo.</div>' },
  { icon: AlertTriangle, label: 'Warning', html: '<div class="callout warning"><strong>Atenção:</strong> Texto de alerta.</div>' },
  { icon: Code, label: 'Code', html: '<pre><code>código aqui</code></pre>' },
];

interface HTMLEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function HTMLEditor({ value, onChange }: HTMLEditorProps) {
  const insertSnippet = (html: string) => {
    onChange(value + '\n' + html);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-1 p-2 bg-muted rounded-lg border border-border overflow-x-auto scrollbar-thin">
        {snippets.map((s) => (
          <Button key={s.label} variant="ghost" size="sm" className="h-8 text-xs gap-1 shrink-0" onClick={() => insertSnippet(s.html)}>
            <s.icon className="h-3.5 w-3.5" />
            {s.label}
          </Button>
        ))}
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[300px] sm:min-h-[400px] font-mono text-sm leading-relaxed"
        placeholder="Cole ou escreva o HTML do post aqui..."
      />
    </div>
  );
}

import { PostContent } from '@/components/blog/PostContent';

export function EditorPreview({ html }: { html: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 overflow-y-auto max-h-[600px]">
      <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-medium">Preview</p>
      {html ? (
        <PostContent html={html} />
      ) : (
        <p className="text-muted-foreground text-sm italic">Nenhum conteúdo para visualizar...</p>
      )}
    </div>
  );
}

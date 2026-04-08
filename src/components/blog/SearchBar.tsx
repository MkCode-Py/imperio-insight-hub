import { Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar({ className = '' }: { className?: string }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        placeholder="Buscar artigos, guias, substâncias..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-11 pr-24 h-11 rounded-lg bg-card border-border/60 text-sm shadow-sm"
      />
      <Button
        type="submit"
        size="sm"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md h-8 text-xs px-4"
      >
        Buscar
      </Button>
    </form>
  );
}

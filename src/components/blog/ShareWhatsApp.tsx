import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareWhatsAppProps {
  title: string;
  slug: string;
  className?: string;
}

export function ShareWhatsApp({ title, slug, className }: ShareWhatsAppProps) {
  const url = `https://blog.imperiopharma.com.py/post/${slug}`;
  const text = encodeURIComponent(`${title}\n\n${url}`);
  const whatsappUrl = `https://wa.me/?text=${text}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
      <Button variant="outline" size="sm" className="gap-2 text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
        <MessageCircle className="h-4 w-4" />
        Compartilhar
      </Button>
    </a>
  );
}

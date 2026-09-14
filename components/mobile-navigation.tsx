'use client';
import { useRef, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { LanguageSwitcher } from './language-switcher';
import type { Locale } from '../lib/language';

export function MobileNavigation({ children, locale }: { children: ReactNode; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return <Collapsible className="mobile-menu" open={open} onOpenChange={setOpen} onKeyDown={event=>{
    if(event.key==='Escape' && open){setOpen(false);trigger.current?.focus();}
  }}>
    <CollapsibleTrigger ref={trigger} className="mobile-menu-trigger" aria-label={locale==='en'?(open?'Close navigation menu':'Open navigation menu'):(open?'Tutup menu navigasi':'Buka menu navigasi')}>
      {open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}
    </CollapsibleTrigger>
    <CollapsibleContent className="mobile-menu-panel">
      <div className="mobile-menu-links" onClick={event=>{if((event.target as HTMLElement).closest('a')) setOpen(false);}}>{children}</div>
      <LanguageSwitcher locale={locale} variant="mobile"/>
    </CollapsibleContent>
  </Collapsible>;
}

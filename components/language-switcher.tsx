'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from './ui/dropdown-menu';
import type { Locale } from '../lib/language';

function Flag({ locale }: { locale: Locale }) {
  return locale === 'id' ? <svg className="language-flag" viewBox="0 0 30 20" aria-hidden="true"><path fill="#fff" d="M0 0h30v20H0z"/><path fill="#e32636" d="M0 0h30v10H0z"/></svg>
    : <svg className="language-flag" viewBox="0 0 30 20" aria-hidden="true"><path fill="#fff" d="M0 0h30v20H0z"/>{Array.from({length:7},(_,i)=><path key={i} fill="#b22234" d={`M0 ${i*40/13}h30v${20/13}H0z`}/>)}<path fill="#3c3b6e" d="M0 0h13v10.77H0z"/>{Array.from({length:9},(_,row)=>Array.from({length:row%2?5:6},(_,col)=><path key={`${row}-${col}`} fill="#fff" transform={`translate(${1.1+col*2.15+(row%2?1.075:0)} ${.8+row*1.14})`} d="M0-.48.14-.15.5-.15.22.07.31.42 0 .21-.31.42-.22.07-.5-.15-.14-.15Z"/>))}</svg>;
}

export function LanguageSwitcher({ locale, variant = 'desktop' }: { locale: Locale; variant?: 'desktop' | 'mobile' }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  async function choose(next: Locale) {
    if (next === locale || pending) return;
    setPending(true); setError(false);
    try {
      const response = await fetch('/language', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ locale: next }) });
      if (!response.ok) throw new Error('Language preference could not be saved');
      window.location.reload();
    } catch { setPending(false); setError(true); }
  }
  const languageName = locale === 'en' ? 'Language' : 'Bahasa';
  const optionName = (value: Locale) => value === 'id' ? 'Indonesia' : 'English';
  return <div className={`language-control language-${variant}`} aria-busy={pending}>
    {variant === 'mobile' ? <div className="language-inline" role="group" aria-label={languageName}>
      <button type="button" lang="id" aria-label="Indonesia" aria-pressed={locale==='id'} disabled={pending} onClick={()=>choose('id')}><Flag locale="id"/><span>INDONESIA</span></button>
      <span className="language-divider" aria-hidden="true">|</span>
      <button type="button" lang="en-US" aria-label="English" aria-pressed={locale==='en'} disabled={pending} onClick={()=>choose('en')}><Flag locale="en"/><span>ENGLISH</span></button>
    </div> : <DropdownMenu>
      <DropdownMenuTrigger className="language-trigger" disabled={pending} aria-label={`${languageName}: ${optionName(locale)}`}><Flag locale={locale}/><span>{optionName(locale)}</span><ChevronDown size={14} aria-hidden="true"/></DropdownMenuTrigger>
      <DropdownMenuContent className="language-options" align="end" sideOffset={10}>
        <DropdownMenuRadioGroup value={locale} onValueChange={value=>{if(value==='id'||value==='en') void choose(value);}} aria-label={languageName}>
          {(['id','en'] as const).map(value=><DropdownMenuRadioItem className="language-option" key={value} value={value} lang={value==='en'?'en-US':'id'} aria-label={optionName(value)} disabled={pending}><Flag locale={value}/><span>{optionName(value)}</span></DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>}
    {error&&<span className="language-error" role="alert">{locale==='en'?'Please try again.':'Silakan coba lagi.'}</span>}
  </div>;
}

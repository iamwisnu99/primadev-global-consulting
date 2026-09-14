import { cookies } from 'next/headers';
import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import { english, indonesian } from './translations';

export type Locale = 'id' | 'en';
export async function getLocale(): Promise<Locale> {
  return (await cookies()).get('primadev-language')?.value === 'en' ? 'en' : 'id';
}

export function translateText(value: string, locale: Locale): string {
  const dictionary = locale === 'en' ? english : indonesian;
  const key = value.trim().replace(/\s+/g, ' ');
  const translated = dictionary[key] ?? (locale === 'en' && english[key.charAt(0) + key.slice(1).toLowerCase()]?.toUpperCase());
  if (translated) return value.replace(value.trim(), translated);
  if (key.includes(' | ')) return value.split(' | ').map(part => translateText(part, locale)).join(' | ');
  return value;
}

export function translateData<T>(value: T, locale: Locale): T {
  if (typeof value === 'string') return translateText(value, locale) as T;
  if (Array.isArray(value)) return value.map(item => translateData(item, locale)) as T;
  if (value && typeof value === 'object' && !(value instanceof URL)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateData(item, locale)])) as T;
  }
  return value;
}

// Translate server-rendered content before it reaches the browser. Attribute
// selection deliberately excludes URLs, CSS classes, identifiers and brand assets.
export function translateTree(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === 'string') return translateText(node, locale);
  if (Array.isArray(node)) return Children.map(node, child => translateTree(child, locale));
  if (!isValidElement<Record<string, unknown>>(node)) return node;
  const props: Record<string, unknown> = {};
  for (const key of ['alt', 'aria-label', 'title', 'label', 'intro']) {
    if (typeof node.props[key] === 'string') props[key] = translateText(node.props[key], locale);
  }
  if (node.type === 'script' && node.props.type === 'application/ld+json') {
    const raw = (node.props.dangerouslySetInnerHTML as { __html: string }).__html;
    props.dangerouslySetInnerHTML = { __html: JSON.stringify(translateData(JSON.parse(raw), locale)).replace(/</g, '\\u003c') };
  }
  if ('children' in node.props) props.children = translateTree(node.props.children as ReactNode, locale);
  return cloneElement(node, props);
}

export async function localize(node: ReactNode) {
  return translateTree(node, await getLocale());
}


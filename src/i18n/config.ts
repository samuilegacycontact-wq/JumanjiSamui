// i18n architecture — Phase 2 will add language switcher to nav
// Launch: English only
// TODO: Add language switcher to nav in Phase 2

export const defaultLocale = 'en' as const
export const locales = ['en'] as const
// Phase 2: export const locales = ['en', 'ru', 'fr'] as const

export type Locale = (typeof locales)[number]

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale)
}

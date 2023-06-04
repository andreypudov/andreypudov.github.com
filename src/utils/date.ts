export const getLocalizedDate = (date: Date, locale: string): string => {
  const localized = date.toLocaleDateString(
    locale,
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return localized.charAt(0).toUpperCase() + localized.slice(1);
}
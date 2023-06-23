const supportedLanguages = ['en', 'ru'];
const defaultLanguage = supportedLanguages[0];

export const getPathWithoutLanguage = (pathname: string) =>
  (pathname.charAt(3) === '/') ? pathname.substring(3) : pathname;

export const getBrowserLanguages = () =>
   (navigator.languages.map((language) => language.substring(0, 2)))
   .filter((item, index, arr) => arr.indexOf(item) === index);

export const getLanguageToUse = (requestedLanguage: string, browserLanguages: string[]) =>
  supportedLanguages.includes(requestedLanguage)
    ? requestedLanguage
    : browserLanguages.filter((language) => supportedLanguages.includes(language))[0] || defaultLanguage;

class Language {
  requestedLanguage = () => window.location.pathname.split('/')[1] || '';
  browserLanguages = () => getBrowserLanguages().filter((language) => supportedLanguages.includes(language));
  applyLanguage = (requestedLanguage: string, browserLanguages: string[]) => {
    const requiredLanguage = getLanguageToUse(requestedLanguage, browserLanguages);
    const newPathname = `/${requiredLanguage}${getPathWithoutLanguage(window.location.pathname)}`;

    if (requiredLanguage !== requestedLanguage) {
        window.location.replace(newPathname);
    }
  };
}

export default Language;
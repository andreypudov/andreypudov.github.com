const supportedLanguages = ['en', 'ru'];

export const getPathWithoutLanguage = (pathname: string) =>
  (pathname.charAt(3) === '/') ? pathname.substring(3) : pathname;

export const getLanguagesSupportedByBrowser = () =>
   (navigator.languages.map((language) => language.substring(0, 2)))
   .filter((item, index, arr) => arr.indexOf(item) === index);

export const getLanguageToUse = (requestedLanguage: string, supportedLanguages: string[]) =>
   supportedLanguages.includes(requestedLanguage)
   ? requestedLanguage
   : supportedLanguages[0];

class Language {
   requestedLanguage = () => window.location.pathname.split('/')[1] || '';
   supportedLanguages = () => getLanguagesSupportedByBrowser().filter((language) => supportedLanguages.includes(language));
   applyLanguage = (requestedLanguage: string, supportedLanguages: string[]) => {
      const requiredLanguage = getLanguageToUse(requestedLanguage, supportedLanguages);
      const newPathname = `/${requiredLanguage}${getPathWithoutLanguage(window.location.pathname)}`;

      if (requiredLanguage !== requestedLanguage) {
         window.location.replace(newPathname);
      }
   };
}

export default Language;
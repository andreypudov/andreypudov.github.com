const supportedLanguages = ['en', 'ru'];
const defaultLanguage = supportedLanguages[0];

const getPathWithoutLanguage = (pathname: string) =>
  (pathname.charAt(3) === '/') ? pathname.substring(3) : pathname;

const getLanguagesSupportedByBrowser = () =>
   (navigator.languages.map((language) => language.substring(0, 2)))
   .filter((item, index, arr) => arr.indexOf(item) === index);

class Language {
   requestedLanguage = () => window.location.pathname.split('/')[1] || '';
   supportedLanguages = () => getLanguagesSupportedByBrowser().filter((language) => supportedLanguages.includes(language));
   applyLanguage = (requestedLanguage: string, supportedLanguages: string[]) => {
      const requiredLanguage = supportedLanguages.includes(requestedLanguage) ? requestedLanguage : defaultLanguage;
      const newPathname = `/${requiredLanguage}${getPathWithoutLanguage(window.location.pathname)}`;

      if (requiredLanguage !== requestedLanguage) {
         window.location.replace(newPathname);
      }
   };
}

export default Language;
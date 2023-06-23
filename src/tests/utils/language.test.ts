import { getLanguageToUse } from '../../utils/language';

it('language is not provided for browser with EN and RU', () => {
  const requestedLanguage = '';
  const supportedLanguages = ['en', 'ru'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('en');
});

it('language is not provided for browser with RU and EN', () => {
  const requestedLanguage = '';
  const supportedLanguages = ['ru', 'en'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('ru');
});

it('language is not provided for browser without EN or RU', () => {
  const requestedLanguage = '';
  const supportedLanguages = ['se', 'pl'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('en');
});

it('EN is provided for browser with EN and RU', () => {
  const requestedLanguage = 'en';
  const supportedLanguages = ['en', 'ru'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('en');
});

it('RU is provided for browser with EN and RU', () => {
  const requestedLanguage = 'en';
  const supportedLanguages = ['en', 'ru'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('ru');
});

it('SE is provided for browser with EN and RU', () => {
  const requestedLanguage = 'en';
  const supportedLanguages = ['en', 'ru'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('en');
});

it('SE is provided for browser without EN and RU', () => {
  const requestedLanguage = 'en';
  const supportedLanguages = ['pl', 'nw'];

  expect(getLanguageToUse(requestedLanguage, supportedLanguages)).toBe('en');
});
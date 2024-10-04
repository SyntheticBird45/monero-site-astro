import { defaultLang } from './ui';

export async function useTranslations(lang: string) {
    const translations = await import(`./translations/${lang}.json`);
    const defaultTranslations = await import(`./translations/${defaultLang}.json`);
    
    return function t(key: string) {
        const keys = key.split('.');
        let translation = translations;
        
        for (const k of keys) {
          if (translation[k] !== undefined) {
            translation = translation[k];
          } else {
            translation = defaultTranslations;
            for (const k of keys) {
              if (translation[k] !== undefined) {
                translation = translation[k];
              } else {
                return undefined;
              }
            }
          }
        }
        
        return translation;
    }
}

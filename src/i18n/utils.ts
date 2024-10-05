import { defaultLang, langs } from './ui';

export async function useTranslations(lang: string) {
    // @ts-ignore
    const translations = langs[lang].translations;
    const defaultTranslations = langs['en'].translations;
    
    return function t(key: string) {
        const keys = key.split('.');
        let translation = translations;
        
        for (const k of keys) {
            // @ts-ignore
            if (translation[k] !== undefined) {
                // @ts-ignore
                translation = translation[k];
            } else {
                translation = defaultTranslations;
                for (const k of keys) {
                    // @ts-ignore
                    if (translation[k] !== undefined) {
                        // @ts-ignore
                        translation = translation[k];
                    } else {
                        return null;
                    }
                }
          }
        }
        
        return translation;
    }
}

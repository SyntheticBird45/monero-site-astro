import { defaultLang, langs } from './ui';

export async function useTranslations(lang?: string) {
    const defaultTranslations = langs['en'].translations;
    // @ts-ignore
    const translations = lang? langs[lang].translations : defaultTranslations;
    
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

export function translatePath(lang: string | undefined) {
    return (link: string) => {
        return lang? `/${lang}${link}`: link
    }
}

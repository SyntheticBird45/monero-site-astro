import EnJson from './translations/en.json'
import EsJson from './translations/es.json'
import ItJson from './translations/it.json'
import PlJson from './translations/pl.json'
import FrJson from './translations/fr.json'
import ArJson from './translations/ar.json'
import RuJson from './translations/ru.json'
import DeJson from './translations/de.json'
import NlJson from './translations/nl.json'
import PtBrJson from './translations/pt-br.json'
import TrJson from './translations/tr.json'
import ZhCnJson from './translations/zh-cn.json'
import ZhTwJson from './translations/zh-tw.json'
import NbNoJson from './translations/nb-no.json'
import ElJson from './translations/el.json'

export const defaultLang = 'en';

export const langs = {
    en: { name: "English", translations: EnJson },
    es: { name: "Español", translations: EsJson },
    it: { name: "Italiano", translations: ItJson },
    pl: { name: "Polski", translations: PlJson },
    fr: { name: "Français", translations: FrJson },
    ar: { name: "العربية", translations: ArJson },
    ru: { name: "Русский", translations: RuJson },
    de: { name: "Deutsch", translations: DeJson },
    nl: { name: "Nederlands", translations: NlJson },
    "pt-br": { name: "Português do Brasil", translations: PtBrJson },
    tr: { name: "Türkçe", translations: TrJson },
    "zh-cn": { name: "简体中文", translations: ZhCnJson },
    "zh-tw": { name: "繁體中文 臺灣", translations: ZhTwJson },
    "nb-no": { name: "Norsk", translations: NbNoJson },
    el: { name: "ελληνική", translations: ElJson }
}

export const showDefaultLang = false;

import ar from "./app/lang/ar.json";
import cs from "./app/lang/cs.json";
import de from "./app/lang/de.json";
import el from "./app/lang/el.json";
import en from "./app/lang/en.json";
import es from "./app/lang/es.json";
import fa from "./app/lang/fa.json";
import fil from "./app/lang/fil.json";
import fr from "./app/lang/fr.json";
import he from "./app/lang/he.json";
import hi from "./app/lang/hi.json";
import id from "./app/lang/id.json";
import it from "./app/lang/it.json";
import ja from "./app/lang/ja.json";
import ka from "./app/lang/ka.json";
import km from "./app/lang/km.json";
import ko from "./app/lang/ko.json";
import mal from "./app/lang/mal-IN.json";
import mr from "./app/lang/mr.json";
import nl from "./app/lang/nl.json";
import pl from "./app/lang/pl.json";
import ptBr from "./app/lang/pt-BR.json";
import ptPT from "./app/lang/pt-PT.json";
import ru from "./app/lang/ru.json";
import sr from "./app/lang/sr.json";
import sk from "./app/lang/sk.json";
import th from "./app/lang/th.json";
import ta from "./app/lang/ta.json";
import te from "./app/lang/te.json";
import tr from "./app/lang/tr.json";
import uk from "./app/lang/uk.json";
import vi from "./app/lang/vi.json";
import zhCn from "./app/lang/zh-CN.json";
import zhHk from "./app/lang/zh-HK.json";
import zhTw from "./app/lang/zh-TW.json";
import bn from "./app/lang/bn.json";
import ug from "./app/lang/ug.json";
import sv from "./app/lang/sv.json";

export const localeMap: { [k: string]: string } = {
  ar: "العربية",
  bn: "বাংলা",
  cs: "Čeština",
  de: "Deutsch",
  el: "Ελληνικά",
  en: "English",
  es: "Español",
  fa: "فارسی",
  fil: "Filipino",
  fr: "Français",
  id: "Bahasa Indonesia",
  it: "Italiano",
  he: "עברית",
  hi: "हिन्दी",
  ja: "日本語",
  ka: "ಕನ್ನಡ",
  km: "ភាសាខ្មែរ",
  ko: "한국어",
  "mal-IN": "മലയാളം",
  mr: "मराठी",
  nl: "Nederlands",
  ru: "Русский",
  sr: "Srpski",
  sv: "Svenska",
  sk: "Slovenčina",
  pl: "Polski",
  "pt-BR": "Português - Brasil",
  "pt-PT": "Português - Portugal",
  th: "ภาษาไทย",
  ta: "தமிழ்",
  te: "తెలుగు",
  tr: "Türkçe",
  uk: "Українська",
  ug: "ئۇيغۇرچە",
  vi: "Tiếng Việt",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文 – 台灣",
  "zh-HK": "繁體中文 – 香港",
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    ar,
    bn,
    cs,
    de,
    el,
    en,
    es,
    fa,
    fil: fil,
    fr,
    he,
    hi,
    id,
    it,
    ja,
    ka,
    km,
    ko,
    "mal-IN": mal,
    mr,
    nl,
    pl,
    "pt-BR": ptBr,
    "pt-PT": ptPT,
    ru,
    sr,
    sv,
    sk,
    th,
    ta,
    te,
    tr,
    uk,
    ug,
    vi,
    "zh-CN": zhCn,
    "zh-HK": zhHk,
    "zh-TW": zhTw,
  },
}));

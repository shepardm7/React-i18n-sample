import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import fr from "./fr/translation.json";
import ar from "./ar/translation.json";

export const resources = {
	en: { translation: en },
	fr: { translation: fr },
	ar: { translation: ar }
} as const;

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	// .use(HttpApi)
	.init({
		resources,
		supportedLngs: ['en', 'fr', 'ar'],
		fallbackLng: "en",
		detection: {
			order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
			caches: ['cookie']
		},
		// backend: {
		// 	loadPath: '/assets/locales/{{lng}}/translation.json'
		// },
		// react: {
		// 	useSuspense: false
		// }
	});
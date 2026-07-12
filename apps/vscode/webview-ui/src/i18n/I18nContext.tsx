import React, { createContext, useContext, useMemo } from "react"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { type Locale, preferredLanguageToLocale, type TranslationKey, translations } from "./translations"

interface I18nContextType {
	/** Current locale */
	locale: Locale
	/** Translate a key to the current locale */
	t: (key: TranslationKey) => string
	/** Translate with fallback: returns "中文 (English)" format for bilingual mode */
	tb: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const { preferredLanguage } = useExtensionState()
	const locale = preferredLanguageToLocale(preferredLanguage || "English")
	console.log("[i18n] preferredLanguage:", preferredLanguage, "→ locale:", locale)

	const value = useMemo<I18nContextType>(() => {
		const en = translations.en
		const zh = translations["zh-CN"]

		return {
			locale,
			t: (key: TranslationKey) => {
				if (locale === "zh-CN" && key in zh) {
					return zh[key as keyof typeof zh]
				}
				return en[key] ?? key
			},
			tb: (key: TranslationKey) => {
				const enStr = en[key] ?? key
				if (locale === "zh-CN" && key in zh) {
					const zhStr = zh[key as keyof typeof zh]
					if ((zhStr as string) === (enStr as string)) return zhStr as string
					return `${zhStr} (${enStr})`
				}
				return enStr
			},
		}
	}, [locale])

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useTranslation() {
	const ctx = useContext(I18nContext)
	if (!ctx) {
		// Fallback: return English if used outside provider
		return {
			locale: "en" as Locale,
			t: (key: TranslationKey) => translations.en[key] ?? key,
			tb: (key: TranslationKey) => translations.en[key] ?? key,
		}
	}
	return ctx
}

export type { Locale }

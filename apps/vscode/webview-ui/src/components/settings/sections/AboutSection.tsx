import { VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useTranslation } from "@/i18n/I18nContext"
import Section from "../Section"

interface AboutSectionProps {
	version: string
	renderSectionHeader: (tabId: string) => JSX.Element | null
}
const AboutSection = ({ version, renderSectionHeader }: AboutSectionProps) => {
	const { t } = useTranslation()
	return (
		<div>
			{renderSectionHeader("about")}
			<Section>
				<div className="flex px-4 flex-col gap-2">
					<h2 className="text-lg font-semibold">
						{t("about.title")} v{version}
					</h2>
					<p>{t("about.description")}</p>

					<h3 className="text-md font-semibold">{t("about.community")}</h3>
					<p>
						<VSCodeLink href="https://github.com/phoenixyun/clinecode">GitHub</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://github.com/phoenixyun/clinecode/issues">{t("about.issues")}</VSCodeLink>
					</p>

					<h3 className="text-md font-semibold">{t("about.resources")}</h3>
					<p>
						<VSCodeLink href="https://github.com/phoenixyun/clinecode">{t("about.documentation")}</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://github.com/phoenixyun/clinecode/releases">{t("about.releases")}</VSCodeLink>
					</p>

					<p className="text-xs text-muted-foreground mt-2">{t("about.forkNote")}</p>
				</div>
			</Section>
		</div>
	)
}

export default AboutSection

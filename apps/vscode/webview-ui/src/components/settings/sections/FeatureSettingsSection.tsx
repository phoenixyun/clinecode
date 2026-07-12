import { UpdateSettingsRequest } from "@shared/proto/cline/state"
import { memo, type ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { useTranslation } from "@/i18n/I18nContext"
import Section from "../Section"
import { updateSetting } from "../utils/settingsHandlers"

// Reusable checkbox component for feature settings
interface FeatureCheckboxProps {
	checked: boolean | undefined
	onChange: (checked: boolean) => void
	label: string
	description: ReactNode
	disabled?: boolean
	isRemoteLocked?: boolean
	remoteTooltip?: string
	isVisible?: boolean
}

// Interface for feature toggle configuration
interface FeatureToggle {
	id: string
	label: string
	description: ReactNode
	settingKey: keyof UpdateSettingsRequest
	stateKey: string
}

// Only keep IDs and state keys in module scope, translations applied at render time
const agentFeatureKeys = ["auto-compact"] as const
const editorFeatureKeys = ["show-feature-tips", "background-edit", "checkpoints", "worktrees"] as const
const experimentalFeatureKeys = ["yolo"] as const
const advancedFeatureKeys = ["hooks"] as const

interface FeatureConfig {
	id: string
	translationKey: string
	descKey: string
	stateKey: string
	settingKey: keyof UpdateSettingsRequest
}

const agentFeatureConfigs: Record<string, FeatureConfig> = {
	"auto-compact": {
		id: "auto-compact",
		translationKey: "features.autoCompact",
		descKey: "features.autoCompactDesc",
		stateKey: "useAutoCondense",
		settingKey: "useAutoCondense",
	},
}

const editorFeatureConfigs: Record<string, FeatureConfig> = {
	"show-feature-tips": {
		id: "show-feature-tips",
		translationKey: "features.featureTips",
		descKey: "features.featureTipsDesc",
		stateKey: "showFeatureTips",
		settingKey: "showFeatureTips",
	},
	"background-edit": {
		id: "background-edit",
		translationKey: "features.backgroundEdit",
		descKey: "features.backgroundEditDesc",
		stateKey: "backgroundEditEnabled",
		settingKey: "backgroundEditEnabled",
	},
	checkpoints: {
		id: "checkpoints",
		translationKey: "features.checkpoints",
		descKey: "features.checkpointsDesc",
		stateKey: "enableCheckpointsSetting",
		settingKey: "enableCheckpointsSetting",
	},
	worktrees: {
		id: "worktrees",
		translationKey: "features.worktrees",
		descKey: "features.worktreesDesc",
		stateKey: "worktreesEnabled",
		settingKey: "worktreesEnabled",
	},
}

const experimentalFeatureConfigs: Record<string, FeatureConfig> = {
	yolo: {
		id: "yolo",
		translationKey: "features.yoloMode",
		descKey: "features.yoloModeDesc",
		stateKey: "yoloModeToggled",
		settingKey: "yoloModeToggled",
	},
}

const advancedFeatureConfigs: Record<string, FeatureConfig> = {
	hooks: {
		id: "hooks",
		translationKey: "features.hooks",
		descKey: "features.hooksDesc",
		stateKey: "hooksEnabled",
		settingKey: "hooksEnabled",
	},
}

const FeatureRow = memo(
	({
		checked = false,
		onChange,
		label,
		description,
		disabled,
		isRemoteLocked,
		isVisible = true,
		remoteTooltip,
	}: FeatureCheckboxProps) => {
		if (!isVisible) {
			return null
		}

		const checkbox = (
			<div className="flex items-center justify-between w-full">
				<div>{label}</div>
				<div>
					<Switch
						checked={checked}
						className="shrink-0"
						disabled={disabled || isRemoteLocked}
						id={label}
						onCheckedChange={onChange}
						size="lg"
					/>
					{isRemoteLocked && <i className="codicon codicon-lock text-description text-sm" />}
				</div>
			</div>
		)

		return (
			<div className="flex flex-col items-start justify-between gap-4 py-3 w-full">
				<div className="space-y-0.5 flex-1 w-full">
					{isRemoteLocked ? (
						<Tooltip>
							<TooltipTrigger asChild>{checkbox}</TooltipTrigger>
							<TooltipContent className="max-w-xs" side="top">
								{remoteTooltip}
							</TooltipContent>
						</Tooltip>
					) : (
						checkbox
					)}
				</div>
				<div className="text-xs text-description">{description}</div>
			</div>
		)
	},
)

interface FeatureSettingsSectionProps {
	renderSectionHeader: (tabId: string) => JSX.Element | null
}

const FeatureSettingsSection = ({ renderSectionHeader }: FeatureSettingsSectionProps) => {
	const { t } = useTranslation()
	const {
		enableCheckpointsSetting,
		hooksEnabled,
		mcpDisplayMode,
		yoloModeToggled,
		useAutoCondense,
		compactionStrategy,
		subagentsEnabled,
		worktreesEnabled,
		remoteConfigSettings,
		backgroundEditEnabled,
		showFeatureTips,
	} = useExtensionState()

	const isYoloRemoteLocked = remoteConfigSettings?.yoloModeToggled !== undefined

	// State lookup for mapped features
	const featureState: Record<string, boolean | undefined> = {
		showFeatureTips,
		enableCheckpointsSetting,
		hooksEnabled,
		useAutoCondense,
		subagentsEnabled,
		worktreesEnabled: worktreesEnabled?.user,
		backgroundEditEnabled,
		yoloModeToggled: isYoloRemoteLocked ? remoteConfigSettings?.yoloModeToggled : yoloModeToggled,
	}

	// Visibility lookup for features with feature flags
	const featureVisibility: Record<string, boolean | undefined> = {
		worktreesEnabled: worktreesEnabled?.featureFlag,
	}

	return (
		<div className="mb-2">
			{renderSectionHeader("features")}
			<Section>
				<div className="mb-5 flex flex-col gap-3">
					{/* Core features */}
					<div>
						<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">
							{t("features.agent")}
						</div>
						<div
							className="relative p-3 pt-0 my-3 rounded-md border border-editor-widget-border/50"
							id="agent-features">
							{agentFeatureKeys.map((key) => {
								const cfg = agentFeatureConfigs[key]
								return (
									<FeatureRow
										checked={featureState[cfg.stateKey]}
										description={t(cfg.descKey as any)}
										isVisible={featureVisibility[cfg.stateKey] ?? true}
										key={cfg.id}
										label={t(cfg.translationKey as any)}
										onChange={(checked) => updateSetting(cfg.settingKey, checked)}
									/>
								)
							})}
							<div className="space-y-2 py-3">
								<Label className="text-sm font-medium text-foreground">{t("features.autoCompactStrategy")}</Label>
								<p className="text-xs text-muted-foreground">{t("features.autoCompactStrategyDesc")}</p>
								<Select
									disabled={!useAutoCondense}
									onValueChange={(value) => updateSetting("compactionStrategy", value)}
									value={compactionStrategy ?? "basic"}>
									<SelectTrigger className="w-full">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="basic">{t("features.basic")}</SelectItem>
										<SelectItem value="agentic">{t("features.agentic")}</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>

					{/* Editor features */}
					<div>
						<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">
							{t("features.editor")}
						</div>
						<div
							className="relative p-3 pt-0 my-3 rounded-md border border-editor-widget-border/50"
							id="optional-features">
							{editorFeatureKeys.map((key) => {
								const cfg = editorFeatureConfigs[key]
								return (
									<FeatureRow
										checked={featureState[cfg.stateKey]}
										description={t(cfg.descKey as any)}
										isVisible={featureVisibility[cfg.stateKey] ?? true}
										key={cfg.id}
										label={t(cfg.translationKey as any)}
										onChange={(checked) => updateSetting(cfg.settingKey, checked)}
									/>
								)
							})}
						</div>
					</div>

					{/* Experimental features */}
					<div>
						<div className="text-xs font-medium uppercase tracking-wider mb-3 text-warning/80">
							{t("features.experimental")}
						</div>
						<div
							className="relative p-3 pt-0 my-3 rounded-md border border-editor-widget-border/50 w-full"
							id="experimental-features">
							{experimentalFeatureKeys.map((key) => {
								const cfg = experimentalFeatureConfigs[key]
								return (
									<FeatureRow
										checked={featureState[cfg.stateKey]}
										description={t(cfg.descKey as any)}
										disabled={cfg.id === "yolo" && isYoloRemoteLocked}
										isRemoteLocked={cfg.id === "yolo" && isYoloRemoteLocked}
										isVisible={featureVisibility[cfg.stateKey] ?? true}
										key={cfg.id}
										label={t(cfg.translationKey as any)}
										onChange={(checked) => updateSetting(cfg.settingKey, checked)}
										remoteTooltip={t("general.remoteLocked")}
									/>
								)
							})}
						</div>
					</div>
				</div>

				{/* Advanced */}
				<div>
					<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">
						{t("features.advanced")}
					</div>
					<div className="relative p-3 my-3 rounded-md border border-editor-widget-border/50" id="advanced-features">
						<div className="space-y-3">
							{advancedFeatureKeys.map((key) => {
								const cfg = advancedFeatureConfigs[key]
								return (
									<FeatureRow
										checked={featureState[cfg.stateKey]}
										description={t(cfg.descKey as any)}
										isVisible={featureVisibility[cfg.stateKey] ?? true}
										key={cfg.id}
										label={t(cfg.translationKey as any)}
										onChange={(checked) => updateSetting(cfg.settingKey, checked)}
									/>
								)
							})}

							{/* MCP Display Mode */}
							<div className="space-y-2">
								<Label className="text-sm font-medium text-foreground">{t("features.mcpDisplayMode")}</Label>
								<p className="text-xs text-muted-foreground">{t("features.mcpDisplayModeDesc")}</p>
								<Select onValueChange={(v) => updateSetting("mcpDisplayMode", v)} value={mcpDisplayMode}>
									<SelectTrigger className="w-full">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="plain">{t("features.plainText")}</SelectItem>
										<SelectItem value="rich">{t("features.richDisplay")}</SelectItem>
										<SelectItem value="markdown">{t("features.markdown")}</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</div>
	)
}
export default memo(FeatureSettingsSection)

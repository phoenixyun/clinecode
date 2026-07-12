// I18n translation dictionary for clinecode
// Supports: English (en), Simplified Chinese (zh-CN)
// Key format: dot-separated component keys, e.g. "settings.title"

export type Locale = "en" | "zh-CN"

export type TranslationKey = keyof typeof translations.en

// Map preferredLanguage setting to locale
export function preferredLanguageToLocale(lang: string): Locale {
	if (lang?.includes("Chinese") && lang?.includes("Simplified")) return "zh-CN"
	if (lang?.includes("Chinese") && lang?.includes("Traditional")) return "zh-CN"
	if (lang?.includes("Chinese")) return "zh-CN"
	return "en"
}

export const translations = {
	en: {
		// ===== NAVIGATION / TOP BAR =====
		"nav.newTask": "New Task",
		"nav.mcpServers": "MCP Servers",
		"nav.customize": "Customize",
		"nav.history": "History",
		"nav.account": "Account",
		"nav.settings": "Settings",
		"nav.menu": "Menu",

		// ===== SETTINGS =====
		"settings.title": "Settings",
		"settings.apiConfig": "API Configuration",
		"settings.features": "Features",
		"settings.terminal": "Terminal",
		"settings.general": "General",
		"settings.about": "About",
		"settings.preferredLanguage": "Preferred Language",
		"settings.preferredLanguageDesc": "The language that Cline should use for communication.",
		"settings.apiProvider": "API Provider",
		"settings.apiKey": "API Key",
		"settings.model": "Model",
		"settings.baseUrl": "Base URL",
		"settings.save": "Save",
		"settings.cancel": "Cancel",
		"settings.searchModel": "Search model...",
		"settings.noModels": "No models available",
		"settings.customModel": "Custom Model",
		"settings.autoApprove": "Auto-Approve",
		"settings.autoApproveDesc": "Allow Cline to run tools without asking for permission.",
		"settings.maxRequests": "Max Requests",
		"settings.maxRequestsDesc": "Maximum number of API requests per task.",
		"settings.planMode": "Plan Mode",
		"settings.actMode": "Act Mode",
		"settings.planModeDesc": "Cline will only plan, not execute.",
		"settings.actModeDesc": "Cline will plan and execute.",
		"settings.enableCheckpoints": "Enable Checkpoints",
		"settings.checkpointsDesc": "Save workspace snapshots during tasks.",
		"settings.browserSettings": "Browser Settings",
		"settings.terminalSettings": "Terminal Settings",
		"settings.shellIntegrationTimeout": "Shell Integration Timeout (ms)",
		"settings.shellIntegrationTimeoutDesc": "Timeout for shell integration before fallback.",
		"settings.editSettings": "Edit Settings",

		// ===== CHAT =====
		"chat.placeholder": "Type a message...",
		"chat.typeHint": "Type @ for context, / for slash commands...",
		"chat.send": "Send",
		"chat.stop": "Stop",
		"chat.newTask": "New Task",
		"chat.copy": "Copy",
		"chat.retry": "Retry",
		"chat.edit": "Edit",
		"chat.delete": "Delete",
		"chat.compact": "Compact",
		"chat.planMode": "Plan",
		"chat.actMode": "Act",
		"chat.taskCompleted": "Task Completed",
		"chat.error": "Error",
		"chat.noMessages": "No messages yet. Start a conversation!",
		"chat.editingMessage": "Editing message...",
		"chat.saving": "Saving...",
		"chat.saved": "Saved",
		"chat.cancelEdit": "Cancel",
		"chat.queuedMessage": "Message queued. Cline is still working...",
		"chat.compacting": "Cline is condensing the conversation...",
		"chat.addContext": "Add Context",
		"chat.addFiles": "Add Files & Images",
		"chat.clearChat": "Clear Chat",
		"chat.resetCode": "Reset Code",
		"chat.confirmClear": "Are you sure you want to clear this conversation?",

		// ===== TOOL OUTPUTS =====
		"tool.editFile": "Cline wants to edit this file:",
		"tool.createFile": "Cline wants to create a new file:",
		"tool.deleteFile": "Cline wants to delete this file:",
		"tool.runCommand": "Cline wants to run this command:",
		"tool.readFile": "Cline wants to read this file:",
		"tool.searchFiles": "Cline is searching files...",
		"tool.webFetch": "Cline is fetching web content...",
		"tool.browserAction": "Cline is using the browser...",
		"tool.mcpTool": "Cline is using MCP tool...",
		"tool.approve": "Approve",
		"tool.deny": "Deny",
		"tool.viewDiff": "View Diff",
		"tool.save": "Save",
		"tool.reject": "Reject",
		"tool.alwaysAllow": "Always allow",
		"tool.onlyRun": "Only run this command",

		// ===== MCP =====
		"mcp.title": "MCP Servers",
		"mcp.addServer": "Add MCP Server",
		"mcp.addRemoteServer": "Add Remote Server",
		"mcp.editConfig": "Edit Configuration",
		"mcp.advancedSettings": "Advanced MCP Settings",
		"mcp.noServers": "No MCP servers configured",
		"mcp.noServersDesc": "Add an MCP server to extend Cline's capabilities.",
		"mcp.installed": "Installed",
		"mcp.marketplace": "Marketplace",
		"mcp.enabled": "Enabled",
		"mcp.disabled": "Disabled",
		"mcp.install": "Install",
		"mcp.uninstall": "Uninstall",

		// ===== ACCOUNT =====
		"account.title": "Account",
		"account.signIn": "Sign In",
		"account.signOut": "Sign Out",
		"account.credits": "Credits",
		"account.subscription": "Subscription",
		"account.notSignedIn": "Not signed in",
		"account.manageAccount": "Manage Account",

		// ===== HISTORY =====
		"history.title": "History",
		"history.noTasks": "No previous tasks",
		"history.searchTasks": "Search tasks...",
		"history.deleteTask": "Delete Task",
		"history.deleteConfirm": "Are you sure you want to delete this task?",

		// ===== WELCOME / ONBOARDING =====
		"welcome.title": "Welcome to Cline",
		"welcome.subtitle": "Your AI coding assistant",
		"welcome.getStarted": "Get Started",
		"welcome.selectProvider": "Select your AI provider",

		// ===== MARKETPLACE =====
		"marketplace.title": "Customize",
		"marketplace.search": "Search marketplace...",
		"marketplace.noResults": "No results found",

		// ===== BROWSER =====
		"browser.title": "Browser",
		"browser.url": "URL",
		"browser.navigate": "Navigate",

		// ===== COMMON =====
		"common.loading": "Loading...",
		"common.error": "Something went wrong",
		"common.noResults": "No results found",
		"common.search": "Search...",
		"common.close": "Close",
		"common.confirm": "Confirm",
		"common.back": "Back",
		"common.next": "Next",
		"common.done": "Done",
		"common.yes": "Yes",
		"common.no": "No",
		"common.copied": "Copied!",
		"common.clickToCopy": "Click to copy",
		"common.noDescription": "No description",
		"common.expand": "Expand",
		"common.collapse": "Collapse",

		// ===== AUTO-APPROVE =====
		"autoApprove.readFiles": "Read Files",
		"autoApprove.editFiles": "Edit Files",
		"autoApprove.executeCommands": "Execute Commands",
		"autoApprove.useBrowser": "Use Browser",
		"autoApprove.useMcp": "Use MCP Tools",

		// ===== RULES =====
		"rules.noRules": "No rules found",
		"rules.addRule": "Add Rule",
		"rules.manageRules": "Manage Rules",

		// ===== FEATURE SETTINGS =====
		// Agent
		"features.agent": "Agent",
		"features.autoCompact": "Auto Compact",
		"features.autoCompactDesc": "Automatically compress conversation history.",
		"features.autoCompactStrategy": "Auto Compact Strategy",
		"features.autoCompactStrategyDesc": "Controls how auto compaction rewrites context.",
		"features.basic": "Basic",
		"features.agentic": "Agentic",
		// Editor
		"features.editor": "Editor",
		"features.featureTips": "Feature Tips",
		"features.featureTipsDesc": "Show rotating tips during the thinking phase to help you discover Cline features.",
		"features.backgroundEdit": "Background Edit",
		"features.backgroundEditDesc": "Allow edits without stealing editor focus",
		"features.checkpoints": "Checkpoints",
		"features.checkpointsDesc": "Save progress at key points for easy rollback",
		"features.worktrees": "Worktrees",
		"features.worktreesDesc": "Enables git worktree management for running parallel Cline tasks.",
		// Experimental
		"features.experimental": "Experimental",
		"features.yoloMode": "Yolo Mode",
		"features.yoloModeDesc":
			"Execute tasks without user's confirmation. Auto-switches from Plan to Act mode and disables the ask question tool. Use with extreme caution.",
		// Advanced
		"features.advanced": "Advanced",
		"features.hooks": "Hooks",
		"features.hooksDesc": "Enable lifecycle and tool hooks during task execution.",
		"features.mcpDisplayMode": "MCP Display Mode",
		"features.mcpDisplayModeDesc": "Controls how MCP responses are displayed",
		"features.plainText": "Plain Text",
		"features.richDisplay": "Rich Display",
		"features.markdown": "Markdown",
		// General
		"general.telemetry": "Allow error and usage reporting",
		"general.telemetryDesc":
			"Help improve Cline by sending usage data and error reports. No code, prompts, or personal information are ever sent.",
		"general.telemetryOverview": "telemetry overview",
		"general.privacyPolicy": "privacy policy",
		"general.remoteLocked": "This setting is managed by your organization's remote configuration",
	},

	"zh-CN": {
		// ===== 导航栏 =====
		"nav.newTask": "新建任务",
		"nav.mcpServers": "MCP 服务器",
		"nav.customize": "自定义",
		"nav.history": "历史记录",
		"nav.account": "账户",
		"nav.settings": "设置",
		"nav.menu": "菜单",

		// ===== 设置 =====
		"settings.title": "设置",
		"settings.apiConfig": "API 配置",
		"settings.features": "功能设置",
		"settings.terminal": "终端",
		"settings.general": "通用",
		"settings.about": "关于",
		"settings.preferredLanguage": "首选语言",
		"settings.preferredLanguageDesc": "Cline 与你交流时使用的语言。",
		"settings.apiProvider": "API 提供商",
		"settings.apiKey": "API 密钥",
		"settings.model": "模型",
		"settings.baseUrl": "基础 URL",
		"settings.save": "保存",
		"settings.cancel": "取消",
		"settings.searchModel": "搜索模型...",
		"settings.noModels": "暂无可用模型",
		"settings.customModel": "自定义模型",
		"settings.autoApprove": "自动批准",
		"settings.autoApproveDesc": "允许 Cline 不经询问直接执行工具操作。",
		"settings.maxRequests": "最大请求数",
		"settings.maxRequestsDesc": "每个任务允许的最大 API 请求次数。",
		"settings.planMode": "计划模式",
		"settings.actMode": "执行模式",
		"settings.planModeDesc": "Cline 仅制定计划，不执行操作。",
		"settings.actModeDesc": "Cline 制定计划并执行操作。",
		"settings.enableCheckpoints": "启用检查点",
		"settings.checkpointsDesc": "在任务过程中保存工作区快照。",
		"settings.browserSettings": "浏览器设置",
		"settings.terminalSettings": "终端设置",
		"settings.shellIntegrationTimeout": "Shell 集成超时 (ms)",
		"settings.shellIntegrationTimeoutDesc": "Shell 集成超时后的回退等待时间。",
		"settings.editSettings": "编辑设置",

		// ===== 聊天 =====
		"chat.placeholder": "输入消息...",
		"chat.typeHint": "输入 @ 添加上下文，/ 使用快捷命令...",
		"chat.send": "发送",
		"chat.stop": "停止",
		"chat.newTask": "新建任务",
		"chat.copy": "复制",
		"chat.retry": "重试",
		"chat.edit": "编辑",
		"chat.delete": "删除",
		"chat.compact": "压缩",
		"chat.planMode": "计划",
		"chat.actMode": "执行",
		"chat.taskCompleted": "任务完成",
		"chat.error": "错误",
		"chat.noMessages": "暂无消息，开始对话吧！",
		"chat.editingMessage": "正在编辑消息...",
		"chat.saving": "保存中...",
		"chat.saved": "已保存",
		"chat.cancelEdit": "取消",
		"chat.queuedMessage": "消息已排队，Cline 仍在工作中...",
		"chat.compacting": "Cline 正在压缩对话上下文...",
		"chat.addContext": "添加上下文",
		"chat.addFiles": "添加文件/图片",
		"chat.clearChat": "清空对话",
		"chat.resetCode": "重置代码",
		"chat.confirmClear": "确定要清空此对话吗？",

		// ===== 工具输出 =====
		"tool.editFile": "Cline 想要编辑此文件：",
		"tool.createFile": "Cline 想要创建新文件：",
		"tool.deleteFile": "Cline 想要删除此文件：",
		"tool.runCommand": "Cline 想要执行此命令：",
		"tool.readFile": "Cline 想要读取此文件：",
		"tool.searchFiles": "Cline 正在搜索文件...",
		"tool.webFetch": "Cline 正在获取网页内容...",
		"tool.browserAction": "Cline 正在使用浏览器...",
		"tool.mcpTool": "Cline 正在使用 MCP 工具...",
		"tool.approve": "批准",
		"tool.deny": "拒绝",
		"tool.viewDiff": "查看差异",
		"tool.save": "保存",
		"tool.reject": "拒绝",
		"tool.alwaysAllow": "始终允许",
		"tool.onlyRun": "仅运行此命令",

		// ===== MCP =====
		"mcp.title": "MCP 服务器",
		"mcp.addServer": "添加 MCP 服务器",
		"mcp.addRemoteServer": "添加远程服务器",
		"mcp.editConfig": "编辑配置",
		"mcp.advancedSettings": "高级 MCP 设置",
		"mcp.noServers": "未配置 MCP 服务器",
		"mcp.noServersDesc": "添加 MCP 服务器以扩展 Cline 的能力。",
		"mcp.installed": "已安装",
		"mcp.marketplace": "市场",
		"mcp.enabled": "已启用",
		"mcp.disabled": "已禁用",
		"mcp.install": "安装",
		"mcp.uninstall": "卸载",

		// ===== 账户 =====
		"account.title": "账户",
		"account.signIn": "登录",
		"account.signOut": "退出登录",
		"account.credits": "积分",
		"account.subscription": "订阅",
		"account.notSignedIn": "未登录",
		"account.manageAccount": "管理账户",

		// ===== 历史记录 =====
		"history.title": "历史记录",
		"history.noTasks": "暂无历史任务",
		"history.searchTasks": "搜索任务...",
		"history.deleteTask": "删除任务",
		"history.deleteConfirm": "确定要删除此任务吗？",

		// ===== 欢迎页 =====
		"welcome.title": "欢迎使用 Cline",
		"welcome.subtitle": "你的 AI 编码助手",
		"welcome.getStarted": "开始使用",
		"welcome.selectProvider": "选择你的 AI 提供商",

		// ===== 市场 =====
		"marketplace.title": "自定义",
		"marketplace.search": "搜索市场...",
		"marketplace.noResults": "未找到结果",

		// ===== 浏览器 =====
		"browser.title": "浏览器",
		"browser.url": "网址",
		"browser.navigate": "导航",

		// ===== 通用 =====
		"common.loading": "加载中...",
		"common.error": "出错了",
		"common.noResults": "未找到结果",
		"common.search": "搜索...",
		"common.close": "关闭",
		"common.confirm": "确认",
		"common.back": "返回",
		"common.next": "下一步",
		"common.done": "完成",
		"common.yes": "是",
		"common.no": "否",
		"common.copied": "已复制！",
		"common.clickToCopy": "点击复制",
		"common.noDescription": "无描述",
		"common.expand": "展开",
		"common.collapse": "收起",

		// ===== 自动批准 =====
		"autoApprove.readFiles": "读取文件",
		"autoApprove.editFiles": "编辑文件",
		"autoApprove.executeCommands": "执行命令",
		"autoApprove.useBrowser": "使用浏览器",
		"autoApprove.useMcp": "使用 MCP 工具",

		// ===== 规则 =====
		"rules.noRules": "未找到规则",
		"rules.addRule": "添加规则",
		"rules.manageRules": "管理规则",

		// ===== 功能设置 =====
		// Agent 代理
		"features.agent": "代理",
		"features.autoCompact": "自动压缩",
		"features.autoCompactDesc": "自动压缩对话历史。",
		"features.autoCompactStrategy": "自动压缩策略",
		"features.autoCompactStrategyDesc": "控制自动压缩如何重写上下文。",
		"features.basic": "基础",
		"features.agentic": "智能",
		// Editor 编辑器
		"features.editor": "编辑器",
		"features.featureTips": "功能提示",
		"features.featureTipsDesc": "在思考阶段轮播提示，帮助你发现 Cline 的各项功能。",
		"features.backgroundEdit": "后台编辑",
		"features.backgroundEditDesc": "允许编辑操作不抢占编辑器焦点。",
		"features.checkpoints": "检查点",
		"features.checkpointsDesc": "在关键步骤保存进度，方便回滚。",
		"features.worktrees": "工作树",
		"features.worktreesDesc": "启用 Git 工作树管理，支持并行运行多个 Cline 任务。",
		// Experimental 实验性
		"features.experimental": "实验性",
		"features.yoloMode": "Yolo 模式",
		"features.yoloModeDesc": "无需用户确认即可执行任务。自动从计划模式切换到执行模式，并禁用询问工具。请谨慎使用。",
		// Advanced 高级
		"features.advanced": "高级",
		"features.hooks": "钩子",
		"features.hooksDesc": "在任务执行过程中启用生命周期和工具钩子。",
		"features.mcpDisplayMode": "MCP 显示模式",
		"features.mcpDisplayModeDesc": "控制 MCP 响应的显示方式。",
		"features.plainText": "纯文本",
		"features.richDisplay": "富文本显示",
		"features.markdown": "Markdown",
		// General 通用
		"general.telemetry": "允许错误和使用情况报告",
		"general.telemetryDesc": "发送使用数据和错误报告以帮助改进 Cline。绝不会发送代码、提示词或个人信息。",
		"general.telemetryOverview": "遥测概览",
		"general.privacyPolicy": "隐私政策",
		"general.remoteLocked": "此设置由组织的远程配置管理",
	},
} as const

// Bilingual display mode: shows both Chinese and English
export type DisplayMode = "single" | "bilingual"

export function getDisplayMode(locale: Locale): DisplayMode {
	return locale === "zh-CN" ? "bilingual" : "single"
}

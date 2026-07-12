<p align="center">
  <img src="apps/vscode/assets/icons/robot_panel_light.png" width="80" alt="clinecode" />
</p>

<h1 align="center">clinecode</h1>

<p align="center">
AI 编码助手 — 直接在你的 VS Code 编辑器中运行。
</p>

---

## VS Code 插件

clinecode 是一个 VS Code 插件，为你的编辑器提供自主 AI 编码代理能力。它可以创建和编辑文件、运行命令、浏览网页以及使用各种工具，每一步都需要你的许可。

### 安装

从 VS Code 插件市场搜索 `clinecode` 安装，或手动编译 `.vsix` 文件：

```bash
bun install
bun run build
```

---

## 跨项目编辑代码

Cline 会读取你的项目结构，理解文件之间的关系，并在整个代码库中进行协调的修改。它会实时监控 linter 和编译器错误，在问题影响到你之前修复缺失的导入、类型不匹配和语法错误。每次编辑都以 diff 形式展示，你可以审查、修改或撤销。

## 执行终端命令

Cline 直接在终端中执行命令并实时查看输出：安装包、运行构建脚本、执行测试、部署应用、管理数据库。对于 dev server 等长时间运行的进程，Cline 在后台继续工作并对新输出作出反应。

## Plan 模式与 Act 模式

在 Plan 模式和 Act 模式之间切换。Plan 模式下，Cline 探索你的代码库、提出澄清性问题并制定策略。确认后切换到 Act 模式，Cline 开始执行计划。每个文件编辑和终端命令都需要你的批准。也可以开启自动批准来让 Cline 自主运行。

## 规则与技能

在 `.clinerules` 文件中定义项目级别的规则来指导 Cline：编码标准、架构规范、部署流程、测试要求。规则会被自动识别。使用技能让模型在需要时加载特定的上下文。

## 支持所有主流模型

Cline 不锁定某一家 AI 提供商，你可以选择适合你工作流的模型：

| 提供商 | 模型 |
|----------|--------|
| Anthropic | Claude Opus, Sonnet, Haiku |
| OpenAI | GPT 系列模型 |
| Google | Gemini 系列模型 |
| OpenRouter | 200+ 模型，来自任何提供商 |
| Vercel AI Gateway | 通过一个网关路由到多个提供商 |
| AWS Bedrock | Claude, Llama 等 |
| Azure / GCP Vertex | 所有托管模型 |
| Cerebras / Groq | 快速推理模型 |
| Ollama / LM Studio | 在本地机器上运行模型 |
| 任何 OpenAI 兼容 API | 自托管或第三方端点 |

## 通过 MCP 扩展

使用 [MCP (Model Context Protocol)](https://github.com/modelcontextprotocol) 服务器连接数据库、查询 API、管理云基础设施以及与其他外部系统交互。使用社区构建的服务器或让 Cline 即时创建自定义工具。

## 项目结构

```
clinecode/
├── apps/vscode/          # VS Code 插件源码
│   ├── src/              # 插件核心逻辑
│   └── webview-ui/       # Webview UI (React/Vite)
├── sdk/packages/         # 共享 SDK 库
│   ├── agents/           # 代理框架
│   ├── core/             # 核心功能
│   ├── llms/             # 语言模型支持
│   ├── shared/           # 共享工具
│   └── sdk/              # SDK 基础
└── docs/                 # 文档
```

## 开发

```bash
# 安装依赖
bun install

# 启动开发模式（watch 模式）
bun run code

# 编译
bun run build

# 运行测试
bun run test
```

## 参与贡献

请从 [贡献指南](CONTRIBUTING.md) 开始。查看 [CHANGELOG.md](CHANGELOG.md) 了解最近更新。

## 许可证

[Apache 2.0 © 2026](./LICENSE)

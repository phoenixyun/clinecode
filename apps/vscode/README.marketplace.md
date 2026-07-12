# clinecode

<p align="center">
  <strong>AI 编码助手 — 直接在你的 VS Code 编辑器中运行</strong>
</p>

clinecode 是一个 VS Code 插件，为你的编辑器提供自主 AI 编码代理。它可以创建和编辑文件、执行终端命令、浏览网页，并使用 MCP 工具扩展能力，每一步都需要你的许可。

---

## 安装

从 GitHub Releases 下载 `clinecode-*.vsix`，在 VS Code 中执行 `Extensions: Install from VSIX...` 即可安装。

---

## 核心功能

### 跨项目编辑代码

理解项目结构，协调修改项目中的文件。实时监控 linter 和编译器错误，主动修复缺失导入、类型不匹配等问题。每次编辑以 diff 展示，可审查、修改或撤销。

### 终端命令执行

直接在终端中执行命令并实时查看输出：安装包、运行构建脚本、执行测试、部署应用、管理数据库。长进程（如 dev server）在后台运行，自动对新输出作出反应。

### Plan / Act 模式

Plan 模式下探索代码库、提出澄清性问题并制定策略。确认后切换 Act 模式执行，每步需批准。也可开启自动批准自主运行。

### 浏览器操作

启动无头浏览器，点击、输入、滚动、截图和控制台日志捕获，用于交互式调试和端到端测试。

### 规则与技能

用 `.clinerules` 定义编码标准、架构规范、部署流程、测试要求等，自动被插件识别。支持 skills 动态加载特定上下文。

### 多模型支持

| 提供商 | 模型 |
|----------|------|
| Anthropic | Claude Opus / Sonnet / Haiku |
| OpenAI | GPT 系列 |
| Google | Gemini 系列 |
| OpenRouter | 200+ 模型 |
| AWS Bedrock | Claude, Llama 等 |
| Azure / GCP Vertex | 全部托管模型 |
| Cerebras / Groq | 快速推理 |
| Ollama / LM Studio | 本地模型 |
| 兼容 API | 自托管或第三方端点 |

### MCP 扩展工具

通过 MCP 连接数据库、查询 API、管理云基础设施，使用社区服务器或让 Cline 即时创建自定义工具。

### 上下文增强

- `@url`: 抓取网页内容转为上下文
- `@problems`: 添加工作区错误和警告
- `@file`: 添加文件内容到上下文
- `@folder`: 批量添加文件夹文件

### 检查点 (Checkpoints)

任务过程中自动保存工作区快照，可比较 diff、回滚到任意步骤。

---

## 参与贡献

请从贡献指南开始。查看 CHANGELOG.md 了解最近更新。

## 许可证

Apache 2.0

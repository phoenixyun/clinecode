# clinecode

<p align="center">
  <strong>AI 编码助手 — 直接在你的 VS Code 编辑器中运行</strong>
</p>

clinecode 是一个 VS Code 插件，为编辑器提供自主 AI 编码代理。它可以创建和编辑文件、执行终端命令、浏览网页，并使用 MCP 工具扩展能力，每一步都需要你的许可。

---

## 安装

从 [GitHub Releases](https://github.com/phoenixyun/clinecode/releases) 下载 `clinecode-*.vsix`，在 VS Code 中执行 `Extensions: Install from VSIX...` 即可安装。

---

## 核心功能

### 跨项目编辑代码

理解项目结构，协调修改，实时监控 linter/编译器错误，每次编辑以 diff 展示。

### 终端命令执行

直接在终端执行命令：安装包、构建脚本、测试、部署。dev server 等长进程在后台监控。

### Plan / Act 模式

Plan 模式下探索代码库并制定策略，确认后切换 Act 模式执行，每步需批准（可开启自动批准）。

### 规则与技能

用 `.clinerules` 定义编码标准、架构规范等，自动生效。

### 多模型支持

| 提供商 | 模型 |
|----------|------|
| Anthropic | Claude Opus / Sonnet / Haiku |
| OpenAI | GPT 系列 |
| Google | Gemini 系列 |
| OpenRouter | 200+ 模型 |
| AWS Bedrock | Claude, Llama 等 |
| Ollama / LM Studio | 本地模型 |
| 及更多... | Azure, Vertex, Cerebras, Groq, 兼容 API |

### MCP 扩展

通过 [MCP](https://github.com/modelcontextprotocol) 连接数据库、API、云基础设施等外部系统。

---

## 开发

```bash
bun install      # 安装依赖
bun run code     # 开发模式
bun run build    # 编译
bun run test     # 测试
```

## 许可证

[Apache 2.0](LICENSE)

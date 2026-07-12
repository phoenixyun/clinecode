<p align="center">
  <img src="apps/vscode/assets/icons/robot_panel_light.png" width="80" alt="clinecode" />
</p>

<h1 align="center">clinecode</h1>

<p align="center">
  <strong>基于 Cline 的 VS Code AI 编码插件 — 专注、高效、开箱即用</strong>
</p>

<p align="center">
  <a href="https://github.com/phoenixyun/clinecode/releases"><img src="https://img.shields.io/github/v/release/phoenixyun/clinecode?label=latest" alt="Release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue" alt="License"></a>
</p>

---

## 为什么选择 clinecode？

clinecode 是从 [Cline](https://github.com/cline/cline) 精简而来的 VS Code 插件版本，相比原项目做了以下优化：

| | 原 Cline 项目 | clinecode |
|------|------|------|
| **代码体积** | CLI + Kanban + VS Code + JetBrains + SDK 示例 + 评估工具 | **仅 VS Code 插件 + 核心 SDK 依赖** |
| **安装方式** | npm / VS Marketplace / JetBrains | **VSIX 一键安装** |
| **项目复杂度** | 多产品 monorepo，相互耦合 | **单一插件，结构清晰，易于定制** |
| **文档** | 面向所有产品线 | **专注 VS Code 使用场景** |
| **学习门槛** | 需要理解 CLI/SDK/看板/企业版 | **只需关注插件开发** |

### 我们的优势

- 🎯 **专注 VS Code**: 移除 CLI、看板、JetBrains、企业版等无关模块，只做最好的 VS Code 体验
- 📦 **轻量高效**: 从 1153 个文件精简，保留核心功能，构建更快
- 🔧 **易于定制**: 代码结构清晰，方便根据个人/团队需求深度定制
- 📥 **安装简单**: 直接下载 `.vsix` 文件拖入 VS Code 即可，无需注册账号
- 🆓 **完全开源**: Apache 2.0 协议，无任何商业限制

---

## 安装

从 [GitHub Releases](https://github.com/phoenixyun/clinecode/releases) 下载最新 `clinecode-*.vsix`，在 VS Code 中执行以下任一方式安装：

- **拖拽安装**: 将 `.vsix` 文件拖入 VS Code 扩展面板
- **命令安装**: `Extensions: Install from VSIX...` 选择文件

---

## 功能特性

### 跨项目编辑

理解项目结构，协调修改多文件。实时监控 linter/编译器错误，主动修复导入缺失、类型不匹配等问题。每次编辑以 diff 展示。

### 终端命令

直接执行命令并实时查看输出 — 安装依赖、构建、测试、部署。长进程（dev server）在后台自动监控输出。

### Plan / Act 模式

Plan 模式探索代码库并制定策略，确认后切换 Act 模式执行，每步需批准（可开自动批准）。

### 多模型支持

| 提供商 | 模型 |
|----------|------|
| Anthropic | Claude Opus / Sonnet / Haiku |
| OpenAI | GPT 系列 |
| Google | Gemini 系列 |
| OpenRouter | 200+ 模型 |
| AWS Bedrock | Claude, Llama 等 |
| Azure / GCP Vertex | 全部托管模型 |
| Ollama / LM Studio | 本地模型 |
| DeepSeek / Qwen / 豆包 | 国内模型 |
| 兼容 API | 自托管或第三方端点 |

### MCP 扩展

通过 [MCP](https://github.com/modelcontextprotocol) 连接数据库、API、云基础设施，社区服务器即装即用。

### 检查点 & 规则

- **检查点**: 自动保存工作区快照，随时对比 diff、一键回滚
- **规则**: `.clinerules` 定义编码标准、架构规范，自动生效
- **技能**: Skills 动态加载项目特定上下文

---

## 项目结构

```
clinecode/
├── apps/vscode/          # VS Code 插件 (扩展入口)
│   ├── src/              # 核心逻辑
│   └── webview-ui/       # React/Vite UI
├── sdk/packages/         # 共享库
│   ├── agents/           # 代理框架
│   ├── core/             # 核心引擎
│   ├── llms/             # 模型支持
│   └── shared/           # 工具函数
└── docs/                 # 使用文档
```

## 开发

```bash
bun install       # 安装依赖
bun run code      # F5 调试 / watch 模式
bun run build     # 生产编译
bun run test      # 运行测试
```

## 参与贡献

欢迎提交 Issue 和 PR！查看 [CHANGELOG.md](CHANGELOG.md) 了解更新历史。

## 许可证

[Apache 2.0](LICENSE)

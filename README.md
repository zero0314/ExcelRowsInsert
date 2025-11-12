# ExcelRowsInsert

一个用于 Excel 的轻量级 Office Add-in 原型，当前实现了“批量插入行”的基础功能。后续会扩展更多便捷的表格操作，并优化界面交互体验。

## 目录

- 功能概览
- 快速开始
  - 先决条件
  - 本地运行（调试）
- 使用说明
  - 在任务窗格中批量插入行
  - 注意事项与限制
- 开发者指南
  - 代码结构说明
  - 构建与调试命令
  - 主要实现点说明
- 未来计划
- 贡献 & 许可证

---

## 功能概览

当前版本只包含一个功能：

- 批量插入行（Batch Insert Rows） — 在任务窗格（Sidebar）中输入要插入的行数，程序会在选中行的下方插入对应数量的空白行。

后续将计划添加更多功能，例如：批量删除行、复制粘贴模板、基于规则的行插入、可视化操作历史等；并对 UI/UX 做更友好的设计。

## 快速开始

以下说明基于你在本地开发环境运行调试的常见流程（Windows + PowerShell）。

### 先决条件

- Node.js（建议 v18+）
- npm（随 Node.js 一起安装）
- Office （支持 Office Add-ins 的 Excel）
- 已安装 `office-addin-debugging` 等工具（项目 devDependencies 中已有）

建议先阅读并信任本地开发证书（项目脚本通常会处理）。

### 本地运行（调试）

1. 在项目根目录打开 PowerShell。
2. 安装依赖（如尚未安装）：

```powershell
npm install
```

3. 开发构建并启动本地服务器（会启动 https 本地服务，适配 Office 调试）：

```powershell
npm run dev-server
# 或在需要完整调试/打包时：
npm run start -- desktop --app excel
```

4. 按照项目模板提示把 `manifest.xml` 加载到 Excel（sideload）或使用 `office-addin-debugging` 自动打开 Excel 并加载 Add-in。

> 如果遇到证书或 https 问题，请运行 `office-addin-dev-certs` 或使用项目提供的调试脚本（`npm run start` 等）。

## 使用说明

### 在任务窗格中批量插入行

1. 在 Excel 中打开或加载该 Add-in（任务窗格出现在右侧）。
2. 在工作表中选中一行或一组单元格（插入行将以所选区域的第一行作为插入位置）。
3. 在任务窗格的输入框中输入要插入的行数（支持 1–1000）。
4. 点击“插入行”按钮。成功后会在任务窗格中显示提示信息。

注意：

- 插入操作基于当前活动工作表，并将整行下移以保留现有数据。
- 请确保选中位置为有效的工作表行。若选区在表格或合并单元格内，行为可能需要根据具体数据做额外验证。

## 开发者指南

下面说明项目的主要文件与如何在本地修改/调试：

- `manifest.xml` - Office Add-in 清单，定义了命令区与任务窗格的入口。
- `webpack.config.js` - 打包与 dev-server 配置。
- `src/taskpane/taskpane.html` - 任务窗格的 HTML 界面。
- `src/taskpane/taskpane.js` - 任务窗格逻辑，当前实现 `insertRows` 功能。
- `src/taskpane/insert-rows-dialog.html`、`insert-rows-dialog.js` - （保留）对话框实现（若以后回归使用对话框可启用）。
- `src/commands/commands.js` - Add-in 命令脚本（处理 manifest 中的 ExecuteFunction 等命令注册）。

### 常用命令

在项目根目录：

```powershell
# 安装依赖
npm install

# 开发模式，本地 https 服务并热重载
npm run dev-server

# 构建（开发）
npm run build:dev

# 构建（生产）
npm run build

# 使用 office-addin-debugging 启动并打开 Office（会根据 manifest 打开 Excel）
npm run start -- desktop --app excel

# 停止调试
npm run stop
```

### 主要实现要点（技术细节）

- 使用 Office.js（Excel JavaScript API）来读取选区、获取工作表与插入行。
- 操作 Excel 对象模型时必须先 `load()` 需要的属性，再 `context.sync()`，例如 `usedRange.load('columnCount')`。
- 为了兼容 Office 对话框与任务窗格的行为，曾为右键菜单尝试过 ContextMenus 扩展点，但稳定性与支持版本差异导致改为任务窗格内实现更可靠的交互。

## 未来计划

- 优化 UI：更友好的插入行预览、批量撤销、插入模板选择器。
- 扩展功能集合：批量删除/复制/移动行、按规则插入、数据清洗辅助功能。
- 国际化（目前界面为中文/英文混合，后续会统一并支持多语言）。
- 增加单元测试与端到端测试，确保操作在不同版本 Office 上一致性。

## 贡献

欢迎提 issue/PR。请在贡献前先打开 issue 描述你的想法或计划的功能，以便先讨论实现方式。

模板建议：

- 描述问题 / 功能点
- 环境（Office 版本、Node 版本、浏览器）
- 复现步骤（如果是 bug）

## 许可证

该项目基于 MIT 许可证 —— 请在仓库根目录查看 LICENSE 文件。

---

如果你需要我把 README 翻译成英文版或生成更详细的开发文档（如 API 设计、单元测试样例），我可以继续帮你完善。

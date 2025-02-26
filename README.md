# Better DeepSeek Print

一个为 DeepSeek Chat 优化的打印扩展，完美支持数学公式渲染。

[English Version](#english-version)

## 效果展示

### 打印按钮与界面
![打印按钮](demo1.png)

### 数学公式打印效果
![数学公式打印效果](demo2.png)

## 主要特点

- 一键打印对话内容
- 完美支持数学公式渲染
- 保持原始样式和布局
- 自动处理隐藏内容
- 简单易用，无需配置

## 为什么需要这个扩展？

在使用 DeepSeek Chat 时，如果对话中包含数学公式，直接打印可能会出现以下问题：
- 公式渲染错误
- 不必要的换行
- 样式丢失

这个扩展解决了这些问题，让你可以完美打印对话内容。

## 安装方法

1. 下载本项目代码
   - 点击本页面右上角的 "Code" 按钮
   - 选择 "Download ZIP"
   - 解压下载的文件

2. 在 Chrome 中加载扩展
   - 打开 Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 开启右上角的 "开发者模式"
   - 点击 "加载已解压的扩展程序"
   - 选择解压后的 `src` 目录

## 使用方法

1. 安装扩展后，访问 DeepSeek Chat 页面
2. 页面右下角会出现 "打印对话" 按钮
3. 点击按钮即可打印当前对话内容

## 使用提示

- 确保页面完全加载后再点击打印
- 在打印预览中可以调整纸张方向和边距
- 建议使用 "无边距" 选项以获得最佳效果

## 常见问题

### 安装问题

Q: 为什么安装时提示 "无法添加来自此网站的应用、扩展程序和用户脚本"？  
A: 这是因为扩展没有在 Chrome 商店发布。开启开发者模式后即可安装。

Q: 扩展安装后没有看到打印按钮？  
A: 请刷新 DeepSeek Chat 页面。如果仍然没有，请确保网址匹配 deepseek.com。

### 打印问题

Q: 在 Mac 上使用 Chrome 打印时不显示文字怎么办？  
A: 这主要是因为 Mac 字体缺失问题。解决方法：
1. 打开 Chrome 设置 (chrome://settings/)
2. 进入 "外观" -> "自定义字体"
3. 查看页面中使用的字体
4. 在 Mac 的 Font Book 应用中下载这些字体
5. 重新加载网页后再次尝试打印

Q: 打印出来的数学公式显示不完整？  
A: 尝试在打印设置中选择 "背景图形" 选项，确保所有样式都被正确应用。

## 贡献代码

欢迎提交 Pull Request 来改进这个扩展。主要改进方向：
- 支持更多数学公式样式
- 添加自定义打印选项
- 优化打印预览

## 许可证

MIT License

---

# English Version <a name="english-version"></a>

A Chrome extension for optimizing the printing experience of DeepSeek Chat, with perfect support for math formulas.

## Demonstration

### Print Button and Interface
![Print Button](demo1.png)

### Math Formula Printing Effect
![Math Formula Printing Effect](demo2.png)

## Key Features

- One-click printing of conversations
- Perfect rendering of mathematical formulas
- Preservation of original styles and layout
- Automatic handling of hidden content
- Simple to use, no configuration needed

## Why Do You Need This Extension?

When using DeepSeek Chat, if your conversation contains mathematical formulas, direct printing may cause the following issues:
- Formula rendering errors
- Unnecessary line breaks
- Style loss

This extension solves these problems, allowing you to perfectly print your conversation content.

## Installation

1. Download the code
   - Click the "Code" button at the top right of this page
   - Select "Download ZIP"
   - Extract the downloaded file

2. Load the extension in Chrome
   - Open Chrome browser
   - Go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the extracted `src` directory

## How to Use

1. After installing the extension, visit the DeepSeek Chat page
2. A "Print Conversation" button will appear in the bottom right corner of the page
3. Click the button to print the current conversation

## Usage Tips

- Make sure the page is fully loaded before clicking print
- You can adjust the paper orientation and margins in the print preview
- It's recommended to use the "No margins" option for best results

## Troubleshooting

### Installation Issues

Q: Why do I see "Can't add apps, extensions, and user scripts from this site" when installing?  
A: This is because the extension is not published on the Chrome Web Store. You can install it after enabling Developer mode.

Q: I don't see the print button after installing the extension?  
A: Please refresh the DeepSeek Chat page. If it still doesn't appear, make sure the URL matches deepseek.com.

### Printing Issues

Q: Text doesn't show when printing with Chrome on Mac?  
A: This is mainly due to missing fonts on Mac. Solution:
1. Open Chrome Settings (chrome://settings/)
2. Go to "Appearance" -> "Customize fonts"
3. Check the fonts used on the page
4. Download these fonts in the Font Book app on your Mac
5. Reload the page and try printing again

Q: The printed mathematical formulas appear incomplete?  
A: Try selecting the "Background graphics" option in the print settings to ensure all styles are correctly applied.

## Contributing

Pull requests are welcome to improve this extension. Main areas for improvement:
- Support for more mathematical formula styles
- Addition of custom printing options
- Optimization of print preview

## License

MIT License 
# Moki Editor

![npm](https://img.shields.io/badge/npm-v_9.7.2-blue)
![build](https://img.shields.io/badge/Build-Vite-blue)
![docus](https://img.shields.io/badge/Docus-v_Dumi_2.2.1-blue)
![react](https://img.shields.io/badge/React-18.2.0-blue)
![tiptap](https://img.shields.io/badge/TipTap-2.0.3-blue)

# Live Demo

<a href="http://docus.clearluv.com/home/editor" target="_blank">🚀 ClearLove Moki</a>

# Introduction

**Moki Editor** provides a multifunctional editor, written with **<a href="https://tiptap.dev">TipTap</a> + React +
Typescript**;

- 😍 DIY Toolbar/InlineBar
- 💎 Export Json/Html
- ⚙️ Typescript declaration
- 💌 Free and open source

# TODO
- [✅️] Undo
- [✅️] Redo
- [✅️] ToolBar
- [✅️] Block Quote
- [✅️] Bold
- [✅️] Emoji Pick
- [✅️] Inline Code
- [✅️] Italic
- [✅️] List
- [✅️] Strike
- [✅️] Subscript
- [✅️] Superscript
- [✅️] Text Align
- [✅️] Underline
- [✅️] Order Line
- [ ] Iframe
- [ ] Block Code
- [✅️] Placeholder
- [✅️] Table
- [ ] Image
- [✅️] TaskItem
- [✅️] Font Style
- [✅️] Font Highlight
- [✅️] Font Color
- [ ] Link

# Props

| 属性         | 描述       | 类型                                                                        | 默认值  |
|------------|----------|---------------------------------------------------------------------------|------|
| ref        | Editor   | `Editor/null`                                                             | /    |
| content    | 编辑器内容    | `string/null`                                                             | null |
| editable   | 是否可以编辑   | `Boolean`                                                                 | true |
| extensions | 插件配置     | `Array<AnyExtension/AnyExtension[]>`                                      | []   |
| isToolBar  | 是否展示工具栏  | `Boolean`                                                                 | true |
| autofocus  | 是否聚焦     | `Boolean`                                                                 | true |
| onUpdate   | 文档修改事件   | `((props: { editor: TipTapEditor, transaction: any }) => void)/undefined` | /    |
| children   | 自定义工具栏内容 | `React.ReactNode`                                                         | /    |

# Test

```shell
git clone https://github.com/ClearLuvMoki/Moki-Editor.git
npm install
npm run dev
```


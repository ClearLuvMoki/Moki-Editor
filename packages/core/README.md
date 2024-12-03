<a href="https://github.com/ClearLuvMoki/clearluv-editor">
  <h1 align="center">@clearluv/editor</h1>
  <img alt="Introduction @clearluv/editor" src="https://github.com/ClearLuvMoki/clearluv-editor/blob/main/packages/core/public/images/introduction.png">
</a>

<p align="center">
  An open-source WYSIWYG editor
</p>
<p align="center">
  <a href="https://github.com/ClearLuvMoki/clearluv-editor/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/ClearLuvMoki/clearluv-editor?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
  <a href="https://github.com/ClearLuvMoki/clearluv-editorr"><img src="https://img.shields.io/github/stars/ClearLuvMoki/clearluv-editor?style=social" alt="Novel.sh's GitHub repo"></a>
</p>

<p align="center">
  <a href="#live-dome"><strong>Live Demo</strong></a> ·
  <a href="#how-to-use"><strong>How to use</strong></a> ·
  <a href="#api"><strong>API</strong></a> ·
  <a href="#setting-up-locally"><strong>Setting Up Locally</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Live Demo

https://clearluv-editor.vercel.app

## How to use

```
pnpm add @clearluv/editor
```

## API

| Property   | Description                                       | Type                                                                                              | Default 
|------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|---------|
| classNames | Semantic DOM class                                | { root?: string; toolbar?: string; editor?: string }                                              | /       |
| styles     | Semantic DOM style                                | root?: React.CSSProperties; toolbar?: React.CSSProperties; editor?: React.CSSProperties }         | /       |
| content    | editor content                                    | string                                                                                            | ""      |
| autofocus  | editor focus postion or type                      | "start" / "end" / "all" / number / boolean / null                                                 | /       |
| hiddenToast     | is hidden toast                                   | boolean                                                                                           | false   |
| onUploadFile     | transform upload file, callback base64/upload url | ({type: "image", data: File}) => Promise<string>                                                  | false   |
| onUpdate     | get editor content when editor update             | ({json, html, text}: {json: JSONContent; text: string; html: string; isEmpty: boolean;}) => void; | false   |

## Setting Up Locally

To run the app locally, you can run the following commands:

```
pnpm i
pnpm run build:cmp
pnpm run dev
```

## Tech Stack

@clearluv/editor is built on the following stack:

- [React.js](https://react.dev/) – framework
- [Tiptap](https://tiptap.dev/) – text editor
- [NextUI](https://nextui.org/) – UI
- [RsBuild](https://rsbuild.dev/) – Page build framework
- [Tsup](https://tsup.egoist.dev/) – Editor build framework
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles

## License

Licensed under the [AGPL license]("").

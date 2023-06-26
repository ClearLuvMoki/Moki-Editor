import {TextAlign as BuiltInTextAlign} from '@tiptap/extension-text-align'


const TextAlign = BuiltInTextAlign.configure({
    types: ["heading", "paragraph"],
})

export {TextAlign};
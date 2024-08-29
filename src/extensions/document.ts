import { Document as _Document } from '@tiptap/extension-document'

export const Document = _Document.extend({
    content: '(block|columns)+',
})

export default Document

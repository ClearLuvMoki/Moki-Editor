import _ListKeymap from '@tiptap/extension-list-keymap'

const ListKeymap = _ListKeymap.configure({
    listTypes: [
        {
            itemName: 'taskItem',
            wrapperNames: ['customTaskList'],
        },
    ],
})

export default ListKeymap;

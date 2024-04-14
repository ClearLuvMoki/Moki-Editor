import _TaskItem from '@tiptap/extension-task-item'
import _TaskList from '@tiptap/extension-task-list'

const TaskItem = _TaskItem.extend({
    nested: true,
})

const TaskList = _TaskList;

export {
    TaskItem,
    TaskList
}

import {findParentNode} from '@tiptap/core'
import {CellSelection, TableMap} from '@tiptap/pm/tables'
import {EditorState, Selection, Transaction} from '@tiptap/pm/state'
import {Table} from "../extensions/table"
import {Editor} from "@tiptap/react";
import {EditorView} from "@tiptap/pm/view";

export const getCellsInColumn = (columnIndex: number | number[]) => (selection: Selection) => {
    const table = findTable(selection)
    if (table) {
        const map = TableMap.get(table.node)
        const indexes = Array.isArray(columnIndex) ? columnIndex : Array.from([columnIndex])

        return indexes.reduce(
            (acc, index) => {
                if (index >= 0 && index <= map.width - 1) {
                    const cells = map.cellsInRect({
                        left: index,
                        right: index + 1,
                        top: 0,
                        bottom: map.height,
                    })

                    return acc.concat(
                        // @ts-ignore
                        cells.map(nodePos => {
                            const node = table.node.nodeAt(nodePos)
                            const pos = nodePos + table.start

                            return {pos, start: pos + 1, node}
                        }),
                    )
                }

                return acc
            },
            [] as { pos: number; start: number; node: Node | null | undefined }[],
        )
    }
    return null
}

export const isRowSelected = (rowIndex: number) => (selection: any) => {
    if (isCellSelection(selection)) {
        const map = TableMap.get(selection.$anchorCell.node(-1))

        return isRectSelected({
            left: 0,
            right: map.width,
            top: rowIndex,
            bottom: rowIndex + 1,
        })(selection)
    }

    return false
}

const select = (type: 'row' | 'column') => (index: number) => (tr: Transaction) => {
    const table = findTable(tr.selection)
    const isRowSelection = type === 'row'

    if (table) {
        const map = TableMap.get(table.node)

        // Check if the index is valid
        if (index >= 0 && index < (isRowSelection ? map.height : map.width)) {
            const left = isRowSelection ? 0 : index
            const top = isRowSelection ? index : 0
            const right = isRowSelection ? map.width : index + 1
            const bottom = isRowSelection ? index + 1 : map.height

            const cellsInFirstRow = map.cellsInRect({
                left,
                top,
                right: isRowSelection ? right : left + 1,
                bottom: isRowSelection ? top + 1 : bottom,
            })

            const cellsInLastRow =
                bottom - top === 1
                    ? cellsInFirstRow
                    : map.cellsInRect({
                        left: isRowSelection ? left : right - 1,
                        top: isRowSelection ? bottom - 1 : top,
                        right,
                        bottom,
                    })

            const head = table.start + cellsInFirstRow[0]
            const anchor = table.start + cellsInLastRow[cellsInLastRow.length - 1]
            const $head = tr.doc.resolve(head)
            const $anchor = tr.doc.resolve(anchor)

            // @ts-ignore
            return tr.setSelection(new CellSelection($anchor, $head))
        }
    }
    return tr
}

export const selectColumn = select('column');
export const selectRow = select('row');

export const isRectSelected = (rect: any) => (selection: CellSelection) => {
    const map = TableMap.get(selection.$anchorCell.node(-1))
    const start = selection.$anchorCell.start(-1)
    const cells = map.cellsInRect(rect)
    const selectedCells = map.cellsInRect(
        map.rectBetween(selection.$anchorCell.pos - start, selection.$headCell.pos - start),
    )

    for (let i = 0, count = cells.length; i < count; i += 1) {
        if (selectedCells.indexOf(cells[i]) === -1) {
            return false
        }
    }

    return true
}


export const findTable = (selection: Selection) =>
    findParentNode(node => node.type.spec.tableRole && node.type.spec.tableRole === 'table')(selection)

export const isCellSelection = (selection: any) => selection instanceof CellSelection

export const isColumnSelected = (columnIndex: number) => (selection: any) => {
    if (isCellSelection(selection)) {
        const map = TableMap.get(selection.$anchorCell.node(-1))

        return isRectSelected({
            left: columnIndex,
            right: columnIndex + 1,
            top: 0,
            bottom: map.height,
        })(selection)
    }

    return false
}

export const getCellsInRow = (rowIndex: number | number[]) => (selection: Selection) => {
    const table = findTable(selection)

    if (table) {
        const map = TableMap.get(table.node)
        const indexes = Array.isArray(rowIndex) ? rowIndex : Array.from([rowIndex])

        return indexes.reduce(
            (acc, index) => {
                if (index >= 0 && index <= map.height - 1) {
                    const cells = map.cellsInRect({
                        left: 0,
                        right: map.width,
                        top: index,
                        bottom: index + 1,
                    })

                    return acc.concat(
                        // @ts-ignore
                        cells.map(nodePos => {
                            const node = table.node.nodeAt(nodePos)
                            const pos = nodePos + table.start
                            return {pos, start: pos + 1, node}
                        }),
                    )
                }

                return acc
            },
            [] as { pos: number; start: number; node: Node | null | undefined }[],
        )
    }

    return null
}

export const isTableSelected = (selection: any) => {
    if (isCellSelection(selection)) {
        const map = TableMap.get(selection.$anchorCell.node(-1))

        return isRectSelected({
            left: 0,
            right: map.width,
            top: 0,
            bottom: map.height,
        })(selection)
    }

    return false
}

export const isRowGripSelected = (
    {
        editor,
        view,
        state,
        from,
    }: {
        editor: Editor | null;
        view: EditorView;
        state: EditorState;
        from: number;
    }) => {
    if (!editor) return;
    const domAtPos = view.domAtPos(from).node as HTMLElement
    const nodeDOM = view.nodeDOM(from) as HTMLElement
    const node = nodeDOM || domAtPos

    if (!editor.isActive(Table.name) || !node || isTableSelected(state.selection)) {
        return false
    }

    let container = node

    while (container && !['TD', 'TH'].includes(container.tagName)) {
        container = container.parentElement!
    }

    const gripRow = container && container.querySelector && container.querySelector('a.grip-row.selected')

    return !!gripRow
}

export const isColumnGripSelected = (
    {
        editor,
        view,
        state,
        from,
    }: {
        editor: Editor | null;
        view: EditorView;
        state: EditorState;
        from: number;
    }) => {
    if (!editor) return;
    const domAtPos = view.domAtPos(from).node as HTMLElement
    const nodeDOM = view.nodeDOM(from) as HTMLElement
    const node = nodeDOM || domAtPos

    if (!editor.isActive(Table.name) || !node || isTableSelected(state.selection)) {
        return false
    }

    let container = node

    while (container && !['TD', 'TH'].includes(container.tagName)) {
        container = container.parentElement!
    }

    const gripColumn = container && container.querySelector && container.querySelector('a.grip-column.selected')

    return !!gripColumn
}
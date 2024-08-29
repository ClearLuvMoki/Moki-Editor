import { Editor } from "@tiptap/react";

export const isDarkColor = (hexColor: string) => {
    if (!hexColor) return false;
    if (hexColor.startsWith('#')) {
        hexColor = hexColor.slice(1);
    }

    if (hexColor.length === 3) {
        hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
    }

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 125;
}

export const getRenderContainer = (editor: Editor, nodeType: string) => {
    const {
        view,
        state: {
            selection: { from },
        },
    } = editor

    const elements = document.querySelectorAll('.has-focus')
    const elementCount = elements.length
    const innermostNode = elements[elementCount - 1]
    const element = innermostNode

    if (
        (element && element.getAttribute('data-type') && element.getAttribute('data-type') === nodeType) ||
        (element && element.classList && element.classList.contains(nodeType))
    ) {
        return element
    }

    const node = view.domAtPos(from).node as HTMLElement
    let container: HTMLElement | null = node

    if (!container.tagName) {
        container = node.parentElement
    }

    while (
        container &&
        !(container.getAttribute('data-type') && container.getAttribute('data-type') === nodeType) &&
        !container.classList.contains(nodeType)
        ) {
        container = container.parentElement
    }

    return container
}

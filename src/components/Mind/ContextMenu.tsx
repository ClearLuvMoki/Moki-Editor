import { Button } from "@nextui-org/react";
import deepEqual from "deep-equal"
import { Blocks, CopyPlus, CopyX } from "lucide-react";
import { memo } from "react"

export type ContextMenuClickType = "add-child-node" | "add-same-level-node" | "delete-node"
export interface ContextMenuProps {
    id: string;
    top: number;
    left: number;
    onClick?: (type: ContextMenuClickType, id: string) => void;
}

const ContextMenu = memo(({ id, top, left, onClick }: ContextMenuProps) => {

    return (<div
        style={{ top, left }}
        className="w-[150px] border-1 border-zinc-300 rounded-xl p-1 z-10 absolute bg-white flex flex-col gap-2"
    >
        <Button onPress={() => onClick?.("add-child-node", id)} color="default" variant="light" size="sm" startContent={<Blocks size={16} />}>新增下级</Button>
        <Button onPress={() => onClick?.("add-same-level-node", id)} color="default" variant="light" size="sm" startContent={<CopyPlus size={16} />}>新增同级</Button>
        <Button onPress={() => onClick?.("delete-node", id)} color="danger" variant="light" size="sm" startContent={<CopyX size={16} />}>删除节点</Button>
    </div>)
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})

export default ContextMenu;
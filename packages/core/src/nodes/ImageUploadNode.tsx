import React, {ChangeEvent, memo, useCallback} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {Editor, NodeViewWrapper} from "@tiptap/react";
import clsx from "clsx"
import {Button, Spinner} from "@nextui-org/react";
import {Images, ImageUp} from "lucide-react";
import {useDropZone} from "../hooks/use-drop-zone";
import {useUploader} from "../hooks/use-uploader";
import {useFileUpload} from "../hooks/use-file-upload";


const ImageUploader = ({onUpload}: { onUpload: (url: string) => void }) => {
    const {loading, uploadFile} = useUploader({onUpload})

    const {handleUploadClick, ref} = useFileUpload()
    const {draggedInside, onDrop, onDragEnter, onDragLeave} = useDropZone({uploader: uploadFile})

    const onFileChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
        [uploadFile],
    )

    const wrapperClass = clsx(
        'flex flex-col items-center justify-center px-8 py-10 rounded-lg bg-opacity-80',
        draggedInside && 'bg-neutral-100',
    )


    if (loading) {
        return (
            <div className="flex items-center justify-center p-8 rounded-lg min-h-[10rem] bg-opacity-80">
                <Spinner color="default" size="lg"/>
            </div>
        )
    }

    return <div
        className={wrapperClass}
        onDrop={onDrop}
        onDragOver={onDragEnter}
        onDragLeave={onDragLeave}
        contentEditable={false}
    >
        <Images className="w-12 h-12 mb-4 text-black dark:text-white opacity-20"/>
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-sm font-medium text-center text-neutral-400 dark:text-neutral-500">
                {draggedInside ? 'Drop image here' : 'Drag and drop or'}
            </div>
            <div>
                <Button disabled={draggedInside} onClick={handleUploadClick} variant="solid" size="sm">
                    <ImageUp className="text-zinc-600" size={18}/>
                    Upload an image
                </Button>
            </div>
        </div>
        <input
            className="w-0 h-0 overflow-hidden opacity-0"
            ref={ref}
            type="file"
            accept=".jpg,.jpeg,.png,.webp,.gif"
            onChange={onFileChange}
        />
    </div>
}

const ImageUploadNode = memo(({getPos, editor}: { getPos: () => number; editor: Editor }) => {
    const onUpload = useCallback(
        (url: string) => {
            if (url) {
                editor.chain().setImageBlock({src: url}).deleteRange({from: getPos(), to: getPos()}).focus().run()
            }
        },
        [getPos, editor],
    )


    return (
        <NodeViewWrapper>
            <div className="p-0 m-0" data-drag-handle>
                <ImageUploader
                    onUpload={onUpload}
                />
            </div>
        </NodeViewWrapper>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default ImageUploadNode;

import {useCallback, useContext, useState} from "react";
import {toast} from "sonner";
import to from "await-to-js";
import {Context} from "../editor/full-editor/context";


const onTransformImageToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();

            reader.onload = function (e) {
                const base64String = e.target?.result;
                base64String ? resolve(base64String as string || "") : reject("Transform image fail!")
            };

            reader.readAsDataURL(file);
        } catch (err) {
            reject(err);
        }
    })

}

export const useUploader = ({onUpload}: { onUpload: (url: string) => void }) => {
    const {onUploadFile} = useContext(Context);
    const [loading, setLoading] = useState(false)

    const uploadFile = useCallback(async (file: File) => {
        setLoading(true)
        try {
            if (onUploadFile) {
                const [err, src] = await to(onUploadFile?.({
                    type: "image",
                    data: file
                }));
                return (!src || err) ? toast.error("上传地址失败") : onUpload(src);
            }

            const [err, base64] = await to(onTransformImageToBase64(file));

            return (err || !base64) ? toast.error("图片导入失败!") : onUpload(base64);
        } catch (errPayload: any) {
            const error = errPayload?.response?.data?.error || 'Something went wrong'
            toast.error(error)
        }
        // setLoading(false)
    }, [onUpload, setLoading])

    return {loading, uploadFile}
}
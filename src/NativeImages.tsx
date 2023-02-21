import React from "react"
import { Image, Platform } from "react-native"
import { AndroidFileType, NativeImageProps, File, IosFileType } from "./types"
import VectorDrawable from "@klarna/react-native-vector-drawable"

interface Props {
  file: File
}

const getWidthAndHeight = (fileInfos: File) => {
  if (
    Platform.OS === "android" &&
    (fileInfos.android.type === AndroidFileType.Jpeg ||
      fileInfos.android.type === AndroidFileType.Png)
  ) {
    return { width: fileInfos.android.width, height: fileInfos.android.height }
  } else if (fileInfos.ios.type === IosFileType.Jpeg || fileInfos.ios.type === IosFileType.Png) {
    return { width: fileInfos.ios.width, height: fileInfos.ios.height }
  }
  return { width: undefined, height: undefined }
}

export const NativeImage: React.FC<Props & NativeImageProps> = ({ file, ...rest }: Props & NativeImageProps) => {
  const fileInfos: File = file

  if (Platform.OS === "android" && fileInfos.android.type === AndroidFileType.Vector) {
    return <VectorDrawable resourceName={fileInfos.source["uri"] as string} {...rest} />
  }

  const { width, height } = getWidthAndHeight(fileInfos)
  return <Image source={fileInfos.source} style={{ width, height }} {...rest} />
}

export { getWidthAndHeight }
export default NativeImage

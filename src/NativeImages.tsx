import React from "react"
import { Image, Platform } from "react-native"
import { AndroidFileType, NativeImageProps, File, IosFileType } from "./types"
import VectorDrawable from "@klarna/react-native-vector-drawable"

interface Props {
  file: File
}

export const NativeImage: React.FC<Props & NativeImageProps> = ({ file, ...rest }) => {
  const fileInfos: File = file
  let width = undefined
  let height = undefined

  if (
    Platform.OS === "android" &&
    (fileInfos.android.type === AndroidFileType.Jpeg ||
      fileInfos.android.type === AndroidFileType.Png)
  ) {
    width = fileInfos.android.width
    height = fileInfos.android.height
  } else if (fileInfos.ios.type === IosFileType.Jpeg || fileInfos.ios.type === IosFileType.Png) {
    width = fileInfos.ios.width
    height = fileInfos.ios.height
  }

  if (Platform.OS === "android" && fileInfos.android.type === AndroidFileType.Vector) {
    return (
      <VectorDrawable resourceName={fileInfos.source["uri"]} style={{ width, height }} {...rest} />
    )
  }

  return <Image source={fileInfos.source} style={{ width, height }} {...rest} />
}

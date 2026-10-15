import React from "react"
import { Image, ImageStyle, Platform, StyleProp, StyleSheet } from "react-native"
import { AndroidFileType, NativeImageProps, File, IosFileType } from "./types"
import VectorDrawable from "@klarna/react-native-vector-drawable"

interface Props {
  file: File
}

/**
 * RN's <Image> honours `style.tintColor`, but RNVectorDrawable only reads a top-level
 * `tintColor` prop. Without this, `style={{ tintColor }}` silently does nothing on Android
 * vector assets and the glyph keeps the colour baked into the source SVG.
 */
const tintColorFromStyle = (style: unknown) =>
  StyleSheet.flatten(style as StyleProp<ImageStyle>)?.tintColor

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
    const { style, tintColor, ...others } = rest as Record<string, unknown>
    return (
      <VectorDrawable
        resourceName={fileInfos.source["uri"] as string}
        tintColor={(tintColor ?? tintColorFromStyle(style)) as any}
        style={style as any}
        {...others}
      />
    )
  }

  const { width, height } = getWidthAndHeight(fileInfos)
  return <Image source={fileInfos.source} style={{ width, height }} {...rest} />
}

export { getWidthAndHeight }
export default NativeImage

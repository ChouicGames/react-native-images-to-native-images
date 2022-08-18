import { ImageProps, ImageSourcePropType } from "react-native"

export enum AndroidFileType {
  Vector,
  Jpeg,
  Png,
}

export enum IosFileType {
  Pdf,
  Jpeg,
  Png,
}

type AndroidFile =
  | {
      type: AndroidFileType.Jpeg | AndroidFileType.Png
      width: number
      height: number | "auto"
    }
  | {
      type: AndroidFileType.Vector
    }

type IosFile =
  | {
      type: IosFileType.Jpeg | IosFileType.Png
      width: number
      height: number | "auto"
      widthIPad?: number
      heightIPad?: number | "auto"
    }
  | {
      type: IosFileType.Pdf
    }

export type File = {
  path: string
  source: ImageSourcePropType
  android: AndroidFile
  ios: IosFile
}

export type NativeImageProps = Omit<ImageProps, "source">

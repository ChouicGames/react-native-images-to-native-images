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
      height: number
    }
  | {
      type: AndroidFileType.Vector
    }

type IosFile =
  | {
      type: IosFileType.Jpeg | IosFileType.Png
      width: number
      height: number
      widthIPad?: number
      heightIPad?: number
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

import React from "react"
import { Image, Platform, Animated } from "react-native"
import { AndroidFileType, NativeImageProps, File, IosFileType } from "./types"
import VectorDrawable from "@klarna/react-native-vector-drawable"
import { getWidthAndHeight } from './NativeImages'

interface Props {
    file: File
}

const AnimatedVectorDrawable = Animated.createAnimatedComponent(VectorDrawable);

export const AnimatedNativeImage: React.FC<Props & NativeImageProps> = ({ file, ...rest }) => {
    const fileInfos: File = file

    if (Platform.OS === "android" && fileInfos.android.type === AndroidFileType.Vector) {
        return (
            <AnimatedVectorDrawable resourceName={fileInfos.source["uri"]} {...rest} />
        )
    }

    const {width, height} = getWidthAndHeight(fileInfos)
    return <Animated.Image source={fileInfos.source} style={{ width, height }} {...rest} />
}

export default AnimatedNativeImage
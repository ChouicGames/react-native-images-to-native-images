import { NativeImageProps } from "@chouicgames/react-native-images-to-native-images/src/types";
import { File } from "@chouicgames/react-native-images-to-native-images/src/types";

interface Props {
  file: File
}

declare const NativeImage: React.FC<Props & NativeImageProps>;

export default NativeImage;
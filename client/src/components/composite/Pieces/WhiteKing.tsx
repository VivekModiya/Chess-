import { Image, ImageProps } from '../../base/Image'
import whiteKing from '../../../assets/pieces/king-w.svg'

export const WhiteKing = (props: ImageProps) => (
  <Image src={whiteKing} {...props} />
)

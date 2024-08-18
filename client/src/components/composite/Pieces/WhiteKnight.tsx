import { Image, ImageProps } from '../../base/Image'
import whiteKnight from '../../../assets/pieces/knight-w.svg'

export const WhiteKnight = (props: ImageProps) => (
  <Image src={whiteKnight} {...props} />
)

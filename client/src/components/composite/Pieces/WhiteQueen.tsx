import { Image, ImageProps } from '../../base/Image'
import whiteQueen from '../../../assets/pieces/queen-w.svg'

export const WhiteQueen = (props: ImageProps) => (
  <Image src={whiteQueen} {...props} />
)

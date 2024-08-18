import { Image, ImageProps } from '../../base/Image'
import blackQueen from '../../../assets/pieces/queen-b.svg'

export const BlackQueen = (props: ImageProps) => (
  <Image src={blackQueen} {...props} />
)

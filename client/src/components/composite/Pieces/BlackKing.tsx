import { Image, ImageProps } from '../../base/Image'
import blackKing from '../../../assets/pieces/king-b.svg'

export const BlackKing = (props: ImageProps) => (
  <Image src={blackKing} {...props} />
)

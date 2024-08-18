import { Image, ImageProps } from '../../base/Image'
import blackBishop from '../../../assets/pieces/bishop-b.svg'

export const BlackBishop = (props: ImageProps) => (
  <Image src={blackBishop} {...props} />
)

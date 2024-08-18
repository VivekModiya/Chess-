import { Image, ImageProps } from '../../base/Image'
import whiteBishop from '../../../assets/pieces/bishop-w.svg'

export const WhiteBishop = (props: ImageProps) => (
  <Image src={whiteBishop} {...props} />
)

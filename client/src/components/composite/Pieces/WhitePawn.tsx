import { Image, ImageProps } from '../../base/Image'
import whitePawn from '../../../assets/pieces/pawn-w.svg'

export const WhitePawn = (props: ImageProps) => (
  <Image src={whitePawn} {...props} />
)

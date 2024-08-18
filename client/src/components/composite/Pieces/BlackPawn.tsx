import { Image, ImageProps } from '../../base/Image'
import blackPawn from '../../../assets/pieces/pawn-b.svg'

export const BlackPawn = (props: ImageProps) => (
  <Image src={blackPawn} {...props} />
)

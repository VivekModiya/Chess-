import { Image, ImageProps } from '../../base/Image'
import blackKnight from '../../../assets/pieces/knight-b.svg'
import React from 'react'

export const BlackKnight = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => <Image ref={ref} src={blackKnight} {...props} />
)

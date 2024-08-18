import React from 'react'

import clsx from 'clsx'

import { sx as sxFunc, SxProps } from '../../../tokens'

export interface ImageClasses {
  /** Styles applied to the root element. */
  root: string
}

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt?: string
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children?: React.ReactNode
  /**
   * Override or extend the styless applied to the component.
   */
  classes?: Partial<ImageClasses>
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string
  /**
   * The system prop that allows defining system overrides as well as additional CSS styless.
   */
  sx?: SxProps
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const { classes, className, sx, ...other } = props
    const _classes = clsx(classes?.root, className, sxFunc(sx))

    return <img className={_classes} ref={ref} {...other} />
  }
)

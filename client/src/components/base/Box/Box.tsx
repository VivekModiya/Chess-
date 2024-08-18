import * as React from 'react'
import clsx from 'clsx'
import { SxProps, sx as sxFunc } from '../../../tokens'
export interface BoxProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  Component?: React.ElementType
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps
}
/**
 * Box -The Box component serves as a wrapper component for most of the CSS utility needs.
 *
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { Component = 'div', sx, className, children, ...other } = props
  return (
    <Component ref={ref} className={clsx(sxFunc(sx), className)} {...other}>
      {children}
    </Component>
  )
})

Box.displayName = 'Box'

import styles from './index.module.scss'
import clsx from 'clsx'

export type ColorClassModifier =
  | 'inherit'
  | 'transparent'
  | 'primary-800'
  | 'primary-700'
  | 'primary-600'
  | 'primary-500'
  | 'primary-400'
  | 'primary-300'
  | 'primary-200'
  | 'primary-100'
  | 'primary-75'
  | 'primary-50'
  | 'neutral-1000'
  | 'neutral-600'
  | 'neutral-500'
  | 'neutral-400'
  | 'neutral-300'
  | 'neutral-200'
  | 'neutral-100'
  | 'neutral-75'
  | 'neutral-0'
  | 'success-700'
  | 'success-600'
  | 'success-500'
  | 'success-400'
  | 'success-300'
  | 'success-200'
  | 'success-100'
  | 'success-75'
  | 'success-50'
  | 'warning-700'
  | 'warning-600'
  | 'warning-500'
  | 'warning-400'
  | 'warning-300'
  | 'warning-200'
  | 'warning-100'
  | 'warning-75'
  | 'warning-50'
  | 'danger-700'
  | 'danger-600'
  | 'danger-500'
  | 'danger-400'
  | 'danger-300'
  | 'danger-200'
  | 'danger-100'
  | 'danger-75'
  | 'danger-50'
  | 'info-700'
  | 'info-600'
  | 'info-500'
  | 'info-400'
  | 'info-300'
  | 'info-200'
  | 'info-100'
  | 'info-75'
  | 'info-50'

export interface ColorPaletteProps {
  /**
   * Color Palette - Convey meaning through color with a handful of background color utility classes.
   */
  bgColor?: ColorClassModifier
}
export interface TextColorProps {
  /**
   * Color Palette - Convey meaning through color with a handful of text color utility classes.
   */
  textColor?: ColorClassModifier
}

export interface BorderColorProps {
  /**
   * Color Palette - Convey meaning through color with a handful of border color utility classes.
   */
  borderColor?: ColorClassModifier
  borderTopColor?: ColorClassModifier
  borderRightColor?: ColorClassModifier
  borderBottomColor?: ColorClassModifier
  borderLeftColor?: ColorClassModifier
}

export const colorPalette = (props: ColorPaletteProps) => {
  const bgColor = getColorClasses('bgcolor', props?.bgColor)
  return clsx(bgColor)
}
export const textColorPalette = (props: TextColorProps) => {
  const textColor = getColorClasses('color', props?.textColor)
  return clsx(textColor)
}

export const borderColorPalette = (props: BorderColorProps) => {
  const borderColor = getColorClasses('border', props?.borderColor)
  const borderTopColor = getColorClasses('border-top', props?.borderTopColor)
  const borderRightColor = getColorClasses(
    'border-right',
    props?.borderRightColor
  )
  const borderBottomColor = getColorClasses(
    'border-bottom',
    props?.borderBottomColor
  )
  const borderLeftColor = getColorClasses('border-left', props?.borderLeftColor)
  return clsx(
    borderColor,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor
  )
}

const getColorClasses = (
  classPrefix: string,
  classModifier?: ColorClassModifier
) => {
  if (classPrefix && classModifier) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}

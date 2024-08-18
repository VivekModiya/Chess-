import styles from './index.module.scss'
import clsx from 'clsx'

type VisibilityClassModifier = 'visible' | 'hidden'

export interface VisibilityProps {
  /**
   * Visibility - Set contentainer's visibility property
   */
  visibility?: VisibilityClassModifier
}

export const visibility = (props: VisibilityProps) => {
  const visibility = getVisibilityClasses('visibility', props?.visibility)

  return clsx(visibility)
}

const getVisibilityClasses = (
  classPrefix: string,
  classModifier?: VisibilityClassModifier
) => {
  if (classPrefix && classModifier) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}

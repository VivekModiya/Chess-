import React from 'react'
import { Box, BoxProps } from '../../base/Box'
import { fixCamvasDPI } from '../../../utils/fixCanvasDPI'
import { drawChessBoard } from '../../../utils/drawChessBoard'

import styles from './index.module.scss'

export interface BoardProps extends BoxProps {}

export const Board = (props: BoardProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      fixCamvasDPI(canvas)
      drawChessBoard(canvas, ctx)
    }
  }, [canvasRef])

  return (
    //@ts-ignore
    <Box
      Component="canvas"
      ref={canvasRef as any}
      className={styles.board}
      {...props}
    />
  )
}

import React from 'react'
import {
  BlackBishop,
  BlackKing,
  BlackKnight,
  BlackPawn,
  BlackQueen,
  BlackRook,
  Board,
  WhiteBishop,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
  WhiteKing,
} from '../components'
import { Box } from '../components/base/Box'

import style from './index.module.scss'
import clsx from 'clsx'
import { BoardPosition } from '../models/board'

export function Home() {
  const defaultPosition: BoardPosition = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ]
  const [position, setPosition] = React.useState(defaultPosition)

  const ref = React.useRef<HTMLImageElement>()

  setTimeout(() => {
    if (ref.current) {
      ref.current.classList.remove(style.cell_06)
      ref.current.classList.add(style.cell_03)
    }
  }, 1000)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      }}
    >
      <Box
        sx={{
          width: 50,
          border: 1,
          borderWidth: 5,
          borderColor: 'neutral-1000',
          position: 'relative',
        }}
        style={{ fontSize: 0 }}
      >
        {position.map((row, i) => {
          return row.map((cell, j) => {
            if (!cell) return null
            return (
              <>
                {cell === 'K' && (
                  <BlackKing
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'N' && (
                  <BlackKnight
                    //@ts-ignore
                    ref={ref}
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'P' && (
                  <BlackPawn
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'Q' && (
                  <BlackQueen
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'R' && (
                  <BlackRook
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'b' && (
                  <WhiteBishop
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'n' && (
                  <WhiteKnight
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'p' && (
                  <WhitePawn
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'q' && (
                  <WhiteQueen
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'r' && (
                  <WhiteRook
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'k' && (
                  <WhiteKing
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
                {cell === 'B' && (
                  <BlackBishop
                    className={clsx(style.piece, style[`cell_${i}${j}`])}
                  />
                )}
              </>
            )
          })
        })}
        <Board />
      </Box>
    </Box>
  )
}

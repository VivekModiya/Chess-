import { create } from 'zustand'
import { BoardPosition } from '../models/board'

type State = {
  boardPosition: BoardPosition
  movesHistory: BoardPosition
}

type Action = {}

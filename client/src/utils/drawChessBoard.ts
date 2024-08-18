export const drawChessBoard = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
) => {
  const squareSize = canvas.width / 8
  context.imageSmoothingEnabled = false
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const x = col * squareSize
      const y = row * squareSize
      context.fillStyle =
        (row + col) % 2 ? 'hsl(221deg 96% 73%)' : 'hsl(221deg 100% 94%)'
      context.fillRect(x, y, squareSize, squareSize)
    }
  }
}

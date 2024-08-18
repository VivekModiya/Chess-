export const fixCamvasDPI = (canvas: HTMLCanvasElement) => {
  const dpi = window.devicePixelRatio

  const heightInPixel = getComputedStyle(canvas).getPropertyValue('height')
  const widthInPixel = getComputedStyle(canvas).getPropertyValue('width')

  const height = Number(heightInPixel.slice(0, -2))
  const width = Number(widthInPixel.slice(0, -2))

  // Setting the canvas height and width according to device pixel ratio
  canvas.setAttribute('height', height * dpi + 'px')
  canvas.setAttribute('width', width * dpi + 'px')
}

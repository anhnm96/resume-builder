import type { ReactZoomPanPinchContext } from '../../types'
import { handleCancelAnimation } from '../animations/animations.utils'
import {
  getMouseBoundedPosition,
  handleCalculateBounds,
} from '../bounds/bounds.utils'
import { getPaddingValue } from '../pan/panning.utils'
import { handleAlignToScaleBounds } from '../zoom/zoom.logic'
import { handleCalculateZoomPositions } from '../zoom/zoom.utils'
import {
  calculatePinchZoom,
  calculateTouchMidPoint,
  getTouchDistance,
} from './pinch.utils'

function getTouchCenter(event: TouchEvent) {
  let totalX = 0
  let totalY = 0
  // Sum up the positions of all touches
  for (let i = 0; i < 2; i += 1) {
    totalX += event.touches[i].clientX
    totalY += event.touches[i].clientY
  }

  // Calculate the average position
  const x = totalX / 2
  const y = totalY / 2

  return { x, y }
}

export function handlePinchStart(contextInstance: ReactZoomPanPinchContext, event: TouchEvent): void {
  const distance = getTouchDistance(event)

  contextInstance.pinchStartDistance = distance
  contextInstance.lastDistance = distance
  contextInstance.pinchStartScale = contextInstance.transformState.scale
  contextInstance.isPanning = false

  const center = getTouchCenter(event)
  contextInstance.pinchLastCenterX = center.x
  contextInstance.pinchLastCenterY = center.y

  handleCancelAnimation(contextInstance)
}

export function handlePinchZoom(contextInstance: ReactZoomPanPinchContext, event: TouchEvent): void {
  const { contentComponent, pinchStartDistance, wrapperComponent }
    = contextInstance
  const { scale } = contextInstance.transformState
  const { limitToBounds, centerZoomedOut, zoomAnimation, alignmentAnimation }
    = contextInstance.setup
  const { disabled, size } = zoomAnimation

  // if one finger starts from outside of wrapper
  if (pinchStartDistance === null || !contentComponent) return

  const midPoint = calculateTouchMidPoint(event, scale, contentComponent)

  // if touches goes off of the wrapper element
  if (!Number.isFinite(midPoint.x) || !Number.isFinite(midPoint.y)) return

  const currentDistance = getTouchDistance(event)
  const newScale = calculatePinchZoom(contextInstance, currentDistance)

  const center = getTouchCenter(event)
  // pan should be scale invariant.
  const panX = center.x - (contextInstance.pinchLastCenterX || 0)
  const panY = center.y - (contextInstance.pinchLastCenterY || 0)

  if (newScale === scale && panX === 0 && panY === 0) return

  contextInstance.pinchLastCenterX = center.x
  contextInstance.pinchLastCenterY = center.y

  const bounds = handleCalculateBounds(contextInstance, newScale)

  const isPaddingDisabled = disabled || size === 0 || centerZoomedOut
  const isLimitedToBounds = limitToBounds && isPaddingDisabled

  const { x, y } = handleCalculateZoomPositions(
    contextInstance,
    midPoint.x,
    midPoint.y,
    newScale,
    bounds,
    isLimitedToBounds,
  )

  contextInstance.pinchMidpoint = midPoint
  contextInstance.lastDistance = currentDistance

  const { sizeX, sizeY } = alignmentAnimation
  const paddingValueX = getPaddingValue(contextInstance, sizeX)
  const paddingValueY = getPaddingValue(contextInstance, sizeY)

  const newPositionX = x + panX
  const newPositionY = y + panY
  const { x: finalX, y: finalY } = getMouseBoundedPosition(
    newPositionX,
    newPositionY,
    bounds,
    limitToBounds,
    paddingValueX,
    paddingValueY,
    wrapperComponent,
  )

  contextInstance.setTransformState(newScale, finalX, finalY)
}

export function handlePinchStop(contextInstance: ReactZoomPanPinchContext): void {
  const { pinchMidpoint } = contextInstance

  contextInstance.velocity = null
  contextInstance.lastDistance = null
  contextInstance.pinchMidpoint = null
  contextInstance.pinchStartScale = null
  contextInstance.pinchStartDistance = null
  handleAlignToScaleBounds(contextInstance, pinchMidpoint?.x, pinchMidpoint?.y)
}

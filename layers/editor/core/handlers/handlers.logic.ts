import type { ReactZoomPanPinchContext } from '../../types'
import type { animations } from '../animations/animations.constants'
import { getCenterPosition } from '../../utils'
import { animate, handleCancelAnimation } from '../animations/animations.utils'
import {
  calculateZoomToNode,
  handleZoomToViewCenter,
  resetTransformations,
} from './handlers.utils'

export function zoomIn(contextInstance: ReactZoomPanPinchContext) {
  return (
    step = 0.5,
    animationTime = 300,
    animationType: keyof typeof animations = 'easeOut',
  ): void => {
    handleZoomToViewCenter(
      contextInstance,
      1,
      step,
      animationTime,
      animationType,
    )
  }
}

export function zoomOut(contextInstance: ReactZoomPanPinchContext) {
  return (
    step = 0.5,
    animationTime = 300,
    animationType: keyof typeof animations = 'easeOut',
  ): void => {
    handleZoomToViewCenter(
      contextInstance,
      -1,
      step,
      animationTime,
      animationType,
    )
  }
}

export function setTransform(contextInstance: ReactZoomPanPinchContext) {
  return (
    newPositionX: number,
    newPositionY: number,
    newScale: number,
    animationTime = 300,
    animationType: keyof typeof animations = 'easeOut',
  ): void => {
    const { positionX, positionY, scale } = contextInstance.transformState
    const { wrapperComponent, contentComponent } = contextInstance
    const { disabled } = contextInstance.setup

    if (disabled || !wrapperComponent || !contentComponent) return

    const targetState = {
      positionX: Number.isNaN(newPositionX) ? positionX : newPositionX,
      positionY: Number.isNaN(newPositionY) ? positionY : newPositionY,
      scale: Number.isNaN(newScale) ? scale : newScale,
    }

    animate(contextInstance, targetState, animationTime, animationType)
  }
}

export function resetTransform(contextInstance: ReactZoomPanPinchContext) {
  return (
    animationTime = 200,
    animationType: keyof typeof animations = 'easeOut',
  ): void => {
    resetTransformations(contextInstance, animationTime, animationType)
  }
}

export function centerView(contextInstance: ReactZoomPanPinchContext) {
  return (
    scale?: number,
    animationTime = 200,
    animationType: keyof typeof animations = 'easeOut',
  ): void => {
    const { transformState, wrapperComponent, contentComponent }
      = contextInstance
    if (wrapperComponent && contentComponent) {
      const targetState = getCenterPosition(
        scale || transformState.scale,
        wrapperComponent,
        contentComponent,
      )

      animate(contextInstance, targetState, animationTime, animationType)
    }
  }
}

export function zoomToElement(contextInstance: ReactZoomPanPinchContext) {
  return (
    node: HTMLElement | string,
    scale?: number,
    animationTime = 600,
    animationType: keyof typeof animations = 'easeOut',
  ): void => {
    handleCancelAnimation(contextInstance)

    const { wrapperComponent } = contextInstance

    const target: HTMLElement | null
      = typeof node === 'string' ? document.getElementById(node) : node

    if (wrapperComponent && target && wrapperComponent.contains(target)) {
      const targetState = calculateZoomToNode(contextInstance, target, scale)
      animate(contextInstance, targetState, animationTime, animationType)
    }
  }
}

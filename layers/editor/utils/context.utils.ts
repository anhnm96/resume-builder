import type {
  ReactZoomPanPinchContentRef,
  ReactZoomPanPinchContext,
  ReactZoomPanPinchContextState,
  ReactZoomPanPinchRef,
} from '../types/context.model'
import {
  centerView,
  resetTransform,
  setTransform,
  zoomIn,
  zoomOut,
  zoomToElement,
} from '../core/handlers/handlers.logic'

export function getControls(contextInstance: ReactZoomPanPinchContext): ReactZoomPanPinchContentRef {
  return {
    instance: contextInstance,
    zoomIn: zoomIn(contextInstance),
    zoomOut: zoomOut(contextInstance),
    setTransform: setTransform(contextInstance),
    resetTransform: resetTransform(contextInstance),
    centerView: centerView(contextInstance),
    zoomToElement: zoomToElement(contextInstance),
  }
}

export function getState(contextInstance: ReactZoomPanPinchContext): ReactZoomPanPinchContextState {
  return {
    instance: contextInstance,
    state: contextInstance.transformState,
  }
}

export function getContext(contextInstance: ReactZoomPanPinchContext): ReactZoomPanPinchRef {
  const ref = {} as ReactZoomPanPinchRef

  Object.assign(ref, getState(contextInstance))
  Object.assign(ref, getControls(contextInstance))

  return ref
}

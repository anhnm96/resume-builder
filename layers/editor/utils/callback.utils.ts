import type { ReactZoomPanPinchRef } from '../types'

export function handleCallback<T>(context: ReactZoomPanPinchRef, event: T, callback?: (context: ReactZoomPanPinchRef, event: T) => void): void {
  if (callback && typeof callback === 'function') {
    callback(context, event)
  }
}

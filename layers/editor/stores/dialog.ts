import type { SectionKey } from '~~/layers/editor/schema/section'

export type DialogName = 'resume' | SectionKey

export type DialogMode = 'create' | 'update' | 'duplicate'

export interface DialogPayload<T = unknown> {
  id: DialogName
  item?: T
}

interface Dialog {
  name: DialogName
  mode: DialogMode
  payload?: DialogPayload
}

export const useDialogStore = defineStore('dialog', () => {
  const dialog = shallowRef<Dialog | null>(null)

  function open(name: DialogName, mode: DialogMode, payload?: DialogPayload) {
    console.log('open', { name, mode, payload })
    dialog.value = { name, mode, payload }
  }

  function close() {
    dialog.value = null
  }

  return {
    dialog,
    isOpen: computed(() => !!dialog.value),
    open,
    close,
  }
})

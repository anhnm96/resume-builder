<script lang="ts" setup>
import type { DialogMode } from '../../stores/dialog'
import type { DialogName } from '~/layers/editor/stores/dialog'
import { useDialogStore } from '~/layers/editor/stores/dialog'

const props = defineProps<{
  id: DialogName
  // defaultValues: T
  pendingKeyword?: string
}>()

const dialogStore = useDialogStore()

interface Label {
  title: string
  action: string
  icon: string
}
const labelMap: Record<DialogMode, Label> = {
  create: { title: 'Create a new item', action: 'Create', icon: 'ph-plus' },
  update: { title: 'Update an existing item', action: 'Update', icon: 'ph-pencil-simple' },
  duplicate: { title: 'Duplicate an existing item', action: 'Duplicate', icon: 'ph-copy-simple' },
}
const label = computed<Label>(() => (labelMap[dialogStore.dialog.mode] as Label))

function onSubmit() {

}

function handleOpen(value: boolean) {
  if (!value)
    dialogStore.close()
}
</script>

<template>
  <Dialog :open="dialogStore.isOpen" @update:open="handleOpen">
    <DialogContent class="z-50">
      <form class="space-y-6" @submit="onSubmit">
        <DialogHeader>
          <DialogTitle>
            <div class="flex items-center space-x-2.5">
              <Icon :name="label.icon" />
              <h2>{{ label.title }}</h2>
            </div>
          </DialogTitle>
        </DialogHeader>
        <slot />
        <DialogFooter>
          <Button type="submit">
            {{ label.action }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup generic="T extends Sections[SectionKey]">
import type { SectionKey, Sections } from '~~/layers/editor/schema/section'

const props = defineProps<{
  id: SectionKey
  title: (item: T) => string
  description?: (item: T) => string | undefined
  section: T
}>()

function open(action: string, payload: any) {

}
function onCreate() {
  open('create', { id: props.id })
}
function onUpdate(item: T) {
  open('update', { id: props.id, item })
}
function onDuplicate(item: T) {
  open('duplicate', { id: props.id, item })
}
function onDelete(item: T) {
  open('delete', { id: props.id, item })
}

function onToggleVisibility(index: number) {
  if ('items' in props.section) {
    const item = props.section.items[index]
    item.visible = !item.visible
  }
}
</script>

<template>
  <section
    :id="id"
    class="grid gap-y-6"
  >
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-x-4">
        <Icon v-if="section.icon" :name="section.icon" size="18px" />

        <h2 class="line-clamp-1 text-3xl font-bold">
          {{ section.name }}
        </h2>
      </div>

      <div class="flex items-center gap-x-2">
        <SectionOptions id="{id}" />
      </div>
    </header>

    <main class="grid transition-opacity" :class="[!section.visible && 'opacity-50']">
      <!-- <DndContext
        sensors="{sensors}"
        collision-detection="{closestCenter}"
        modifiers="{[restrictToParentElement]}"
        on-drag-end="{onDragEnd}"
      > -->
      <!-- <SortableContext items="{section.items}" strategy="{verticalListSortingStrategy}"> -->
      <template v-if="id !== 'summary'">
        <SectionListItem
          v-for="item in section.items"
          :id="item.id"
          :key="item.id"
          :visible="item.visible"
          :title="title(item)"
          :description="description?.(item)"
          @update="onUpdate(item)"
          @delete="onDelete(item)"
          @duplicate="onDuplicate(item)"
          @toggle-visibility="onToggleVisibility"
        />
      </template>
      <!-- </SortableContext> -->
      <!-- </DndContext> -->
    </main>

    <footer class="flex items-center justify-end">
      <Button
        variant="outline"
        class="gap-x-2 border-dashed py-6 leading-relaxed hover:bg-secondary-accent"
        @click="onCreate"
      >
        <Icon size="14px" name="ph:plus" />
        <span class="font-medium">
          Add a new item
        </span>
      </Button>
    </footer>
  </section>
</template>

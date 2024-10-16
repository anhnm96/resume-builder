<script lang="ts" setup>
defineProps<{ id: string, title: string, visible?: boolean, description?: string }>()
defineEmits(['update', 'toggleVisibility', 'duplicate', 'delete'])
</script>

<template>
  <section
    class="border-x border-t bg-secondary/10 first-of-type:rounded-t last-of-type:rounded-b last-of-type:border-b"
  >
    <div class="flex transition-opacity">
      <ContextMenu>
        <ContextMenuTrigger as-child>
          <button
            class="flex-1 cursor-context-menu p-4 hover:bg-secondary-accent"
            :class="[!visible && 'opacity-50']"
            @click="$emit('update')"
          >
            <h4 class="font-medium leading-relaxed">
              {{ title }}
            </h4>
            <p v-if="description" class="text-xs leading-relaxed opacity-50">
              {{ description }}
            </p>
          </button>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuCheckboxItem :checked="visible" @update:checked="$emit('toggleVisibility', $event)">
            <span class="-ml-0.5">Visible</span>
          </ContextMenuCheckboxItem>
          <ContextMenuItem @click="$emit('update')">
            <Icon name="ph:pencil-simple" size="14" />
            <span class="ml-2">Edit</span>
          </ContextMenuItem>
          <ContextMenuItem @click="$emit('duplicate')">
            <Icon name="ph:copy-simple" size="14" />
            <span class="ml-2">{t`Copy`}</span>
          </ContextMenuItem>
          <ContextMenuItem class="text-error" @click="$emit('delete')">
            <Icon name="ph:trash-simple" size="14" />
            <span class="ml-2">Remove</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  </section>
</template>

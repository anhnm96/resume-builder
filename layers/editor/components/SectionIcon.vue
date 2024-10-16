<script lang="ts" setup>
import type { SectionKey } from '../schema/section'
import { useResumeStore } from '../stores/resume'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  id: SectionKey
  name?: string
}>()

const resumeStore = useResumeStore()
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button size="icon" variant="ghost" class="size-8 rounded-full" v-bind="$attrs">
          <slot />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{{ name ?? resumeStore.sections[id].name }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

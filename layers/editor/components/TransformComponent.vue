<script lang="ts" setup>
import type { ZoomPanPinch } from '../core/instance.core'
import { baseClasses } from '../constants/state.constants'

interface Props {
  wrapperClass?: string
  contentClass?: string
  contentStyle?: Record<string, string>
}
defineProps<Props>()

const instance = inject<Ref<ZoomPanPinch>>('context')

const wrapperRef = ref<HTMLDivElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (wrapperRef.value !== null && contentRef.value !== null && instance?.value.init) {
    instance.value.init?.(wrapperRef.value, contentRef.value)
  }
})
onBeforeUnmount(() => {
  instance?.value.cleanupWindowEvents?.()
})
</script>

<template>
  <div
    ref="wrapperRef"
    class="wrapper" :class="[baseClasses.wrapperClass, wrapperClass]"
  >
    <div
      ref="contentRef"
      class="content" :class="[baseClasses.contentClass, contentClass]"
      :style="contentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.content {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.content img {
  pointer-events: none;
}
</style>

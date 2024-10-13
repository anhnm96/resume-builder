<script lang="ts" setup>
import type { ReactZoomPanPinchProps } from '../types'
import { ZoomPanPinch } from '../core/instance.core'
import { getControls } from '../utils'

const props = defineProps<Omit<ReactZoomPanPinchProps, 'ref'>>()
const instance = ref(new ZoomPanPinch(props))

onMounted(() => {
  instance.value.update(props)
})
provide('context', instance)
</script>

<template>
  <slot :value="instance" :controls="getControls(instance.value)" />
</template>

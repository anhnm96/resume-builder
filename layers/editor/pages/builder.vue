<script lang="ts" setup>
import type { ReactZoomPanPinchRef } from '../types'
import Rhyhorn from '../templates/Rhyhorn'

const transformRef = ref<ReactZoomPanPinchRef | null>(null)
const layout = ref([
  [
    ['profiles', 'summary', 'experience', 'education', 'projects', 'volunteer', 'references'],
    ['skills', 'interests', 'certifications', 'awards', 'publications', 'languages'],
  ],
])
const pageSizeMap = {
  width: 210,
  height: 297,
}
const MM_TO_PX = 3.78
</script>

<template>
  <div class="relative overflow-hidden size-full">
    <div class="flex h-full overflow-hidden w-full">
      <div>
        <SidebarLeft />
      </div>
      <TransformWrapper
        ref="transformRef"
        center-on-init
        :max-scale="2"
        :min-scale="0.4"
        :initial-scale="0.8"
        :limit-to-bounds="false"
      >
        <TransformComponent
          wrapper-class="!w-screen !h-screen"
          content-class="grid items-start justify-center space-x-12 pointer-events-none"
          :content-style="{
            width: `${layout.length * (pageSizeMap.width * MM_TO_PX + 42)}px`,
            gridTemplateColumns: `repeat(${layout.length}, 1fr)`,
          }"
        >
          <div>
            <div
              v-for="(columns, index) in layout"
              :key="index"
            >
              <div
                class="bg-background text-foreground relative shadow-2xl"
                :style="{
                  width: `${pageSizeMap.width * MM_TO_PX}px`,
                  minHeight: `${pageSizeMap.height * MM_TO_PX}px`,
                }"
              >
                Template
                <Rhyhorn />
              </div>
              <!-- <Page mode="builder" page-number="{pageIndex" + 1}>
                <Template is-first-page="{pageIndex" =="=" 0} columns="{columns" as SectionKey[][]} />
              </Page> -->
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  </div>
</template>

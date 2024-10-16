<script lang="ts" setup>
import { useResumeStore } from '~~/layers/editor/stores/resume'

const resumeStore = useResumeStore()
const { basics } = storeToRefs(resumeStore)
</script>

<template>
  <section id="basics" class="grid gap-y-6">
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-x-4">
        <Icon name="ph:user" size="18px" />
        <h2 class="line-clamp-1 text-3xl font-bold">
          Basics
        </h2>
      </div>
    </header>

    <main class="grid gap-4 sm:grid-cols-2">
      <div class="sm:col-span-2">
        <Picture />
      </div>

      <div class="sm:col-span-2 space-y-1.5">
        <Label for="basics.name">Full Name</Label>
        <Input
          id="basics.name"
          v-model="basics.name"
        />
      </div>

      <div class="sm:col-span-2 space-y-1.5">
        <Label for="basics.headline">Headline</Label>
        <Input
          id="basics.headline"
          v-model="basics.headline"
        />
      </div>

      <div class="space-y-1.5">
        <Label for="basics.email">Email</Label>
        <Input
          id="basics.email"
          v-model="basics.email"
          placeholder="john.doe@example.com"
        />
      </div>

      <div class="space-y-1.5">
        <Label for="basics.url">Website</Label>
        <!-- TODO: URLInput -->
        <Input
          id="basics.url"
          v-model="basics.url.href"
          placeholder="https://example.com"
        />
        <!-- <URLInput
            id="basics.url"
            value={basics.url}
            placeholder="https://example.com"
            onChange={(value) => {
              setValue("basics.url", value);
            }}
          /> -->
      </div>

      <div class="space-y-1.5">
        <Label for="basics.phone">Phone</Label>
        <Input
          id="basics.phone"
          v-model="basics.phone"
          placeholder="+1 (123) 4567 7890"
        />
      </div>

      <div class="space-y-1.5">
        <Label for="basics.location">Location</Label>
        <Input
          id="basics.location"
          v-model="basics.location"
        />
      </div>

      <!-- TODO: custom section -->
      <!-- <CustomFieldsSection class="sm:col-span-2" /> -->
    </main>
  </section>
</template>

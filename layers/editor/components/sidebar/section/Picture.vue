<script lang="ts" setup>
import { useResumeStore } from '~~/layers/editor/stores/resume'
import { z } from 'zod'

const resumeStore = useResumeStore()
const { basics } = storeToRefs(resumeStore)

const isValidUrl = computed(() => z.string().url().safeParse(basics.value.picture.url).success)
function test(value: any) {
  console.log('value', value)
  // basics.picture.url =
}
const inputRef = ref()

function onSelectImage(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = event.target.files[0]
    console.log('file', file)
    // const response = await uploadImage(file);
    // const url = response.data;

    // basics.value.picture.url = url
  }
}

function onAvatarClick() {
  if (isValidUrl.value) {
    basics.value.picture.url = ''
  } else {
    inputRef.value?.click()
  }
}
</script>

<template>
  <div class="flex items-center gap-x-4">
    <div class="group relative cursor-pointer" @click="onAvatarClick">
      <Avatar class="bg-secondary size-14">
        <AvatarImage src="{picture.url}" />
      </Avatar>

      {isValidUrl ? (
      <div class="bg-background/30 pointer-events-none absolute inset-0 flex items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100">
        <Trash size="{16}" weight="bold" />
      </div>
      ) : (
      <div class="bg-background/30 pointer-events-none absolute inset-0 flex items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100">
        <UploadSimple size="{16}" weight="bold" />
      </div>
      )}
    </div>

    <div class="w-full flex flex-col gap-y-1.5">
      <Label for="basics.picture.url">{t`Picture`}</Label>
      <div class="flex items-center gap-x-2">
        <input ref="inputRef" hidden type="file" @change="onSelectImage">

        <Input
          id="basics.picture.url"
          placeholder="https://..."
          :value="basics.picture.url"
          @change="test"
        />

        <Popover v-if="isValidUrl">
          <PopoverTrigger as-child>
            <Button variant="ghost" size="icon">
              <Icon name="ph:aperture" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-[360px]">
            <PictureOptions />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </div>
</template>

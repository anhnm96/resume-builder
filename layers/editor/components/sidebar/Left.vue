<script lang="ts" setup>
import { useResumeStore } from '../../stores/resume'

const containterRef = ref<HTMLDivElement | null>(null)
function scrollIntoView(selector: string) {
  const section = containterRef.value?.querySelector(selector)
  section?.scrollIntoView({ behavior: 'smooth' })
}

const resumeStore = useResumeStore()
const { sections } = storeToRefs(resumeStore)
</script>

<template>
  <div class="bg-secondary-accent/30 flex">
    <div class="bg-secondary-accent/30 hidden basis-12 flex-col items-center justify-between py-4 sm:flex">
      <Button as-child size="icon" variant="ghost" class="size-8 rounded-full">
        <NuxtLink to="/dashboard">
          Icon
          <!-- <Icon size={14} /> -->
        </NuxtLink>
      </Button>

      <div class="flex flex-col items-center justify-center gap-y-2">
        <SectionIcon
          v-for="(section, id) in sections"
          :id="id"
          :key="id"
          :name="section.name"
          @click="scrollIntoView('#basics')"
        >
          <Icon v-if="section.icon" :name="section.icon" />
        </SectionIcon>
        <!-- <SectionIcon
            id="custom"
            variant="outline"
            name={t`Add a new section`}
            icon={<Plus size={14} />}
            onClick={() => {
              addSection();
              scrollIntoView("& > section:last-of-type");
            }}
          /> -->
      </div>

      <!-- <UserOptions>
          <Button size="icon" variant="ghost" class="rounded-full">
            <UserAvatar size={28} />
          </Button>
        </UserOptions> -->
    </div>

    <ScrollArea orientation="vertical" class="h-screen flex-1 pb-16 lg:pb-0">
      <div ref="containterRef" class="grid gap-y-6 p-6 @container/left">
        <SidebarSectionBasics />
        <Separator />
        <!-- <SummarySection /> -->
        <Separator />
        <SidebarSectionBase id="profiles" :section="sections.profiles" :title="(item) => item.network" />
        <!-- <SectionBase<Profile>
            id="profiles"
            title={(item) => item.network}
            description={(item) => item.username}
          />
          <Separator />
          <SectionBase<Experience>
            id="experience"
            title={(item) => item.company}
            description={(item) => item.position}
          />
          <Separator />
          <SectionBase<Education>
            id="education"
            title={(item) => item.institution}
            description={(item) => item.area}
          />
          <Separator />
          <SectionBase<Skill>
            id="skills"
            title={(item) => item.name}
            description={(item) => {
              if (item.description) return item.description;
              if (item.keywords.length > 0) return `${item.keywords.length} keywords`;
            }}
          />
          <Separator />
          <SectionBase<Language>
            id="languages"
            title={(item) => item.name}
            description={(item) => item.description}
          />
          <Separator />
          <SectionBase<Award>
            id="awards"
            title={(item) => item.title}
            description={(item) => item.awarder}
          />
          <Separator />
          <SectionBase<Certification>
            id="certifications"
            title={(item) => item.name}
            description={(item) => item.issuer}
          />
          <Separator />
          <SectionBase<Interest>
            id="interests"
            title={(item) => item.name}
            description={(item) => {
              if (item.keywords.length > 0) return `${item.keywords.length} keywords`;
            }}
          />
          <Separator />
          <SectionBase<Project>
            id="projects"
            title={(item) => item.name}
            description={(item) => item.description}
          />
          <Separator />
          <SectionBase<Publication>
            id="publications"
            title={(item) => item.name}
            description={(item) => item.publisher}
          />
          <Separator />
          <SectionBase<Volunteer>
            id="volunteer"
            title={(item) => item.organization}
            description={(item) => item.position}
          />
          <Separator />
          <SectionBase<Reference>
            id="references"
            title={(item) => item.name}
            description={(item) => item.description}
          />

          {/* Custom Sections */}
          {Object.values(customSections).map((section) => (
            <Fragment key={section.id}>
              <Separator />

              <SectionBase<CustomSection>
                id={`custom.${section.id}`}
                title={(item) => item.name}
                description={(item) => item.description}
              />
            </Fragment>
          ))} -->

        <Separator />

        <!-- TODO: add section -->
        <!-- <Button size="lg" variant="outline" onClick={addSection}>
            <PlusCircle />
            <span class="ml-2">{t`Add a new section`}</span>
          </Button> -->
      </div>
    </ScrollArea>
  </div>
</template>

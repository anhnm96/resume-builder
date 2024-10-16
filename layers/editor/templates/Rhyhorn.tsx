import { useResumeStore } from '../stores/resume'

const Header = defineComponent({
  setup() {
    const resumeStore = useResumeStore()

    return () => (
      <div class="flex items-center space-x-4">
        {/* <Picture /> */}

        <div class="space-y-0.5">
          <div class="text-2xl font-bold">{resumeStore.basics.name}</div>
          <div class="text-base">{resumeStore.basics.headline}</div>

          <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
            {resumeStore.basics.location && (
              <div class="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
                <i class="ph ph-bold ph-map-pin text-primary" />
                <div>{resumeStore.basics.location}</div>
              </div>
            )}
            {resumeStore.basics.phone && (
              <div class="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
                <i class="ph ph-bold ph-phone text-primary" />
                <a href={`tel:${resumeStore.basics.phone}`} target="_blank" rel="noreferrer">
                  {resumeStore.basics.phone}
                </a>
              </div>
            )}
            {resumeStore.basics.email && (
              <div class="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0">
                <i class="ph ph-bold ph-at text-primary" />
                <a href={`mailto:${resumeStore.basics.email}`} target="_blank" rel="noreferrer">
                  {resumeStore.basics.email}
                </a>
              </div>
            )}
            <a href={resumeStore.basics.url.href}>{resumeStore.basics.url.label}</a>
            {/* {resumeStore.basics.customFields.map((item) => (
          <div
            key={item.id}
            class="flex items-center gap-x-1.5 border-r pr-2 last:border-r-0 last:pr-0"
          >
            <i class={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
            {isUrl(item.value) ? (
              <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
                {item.name || item.value}
              </a>
            ) : (
              <span>{[item.name, item.value].filter(Boolean).join(": ")}</span>
            )}
          </div>
        ))} */}
          </div>
        </div>
      </div>
    )
  },
})

const Summary = defineComponent({
  setup() {
    const resumeStore = useResumeStore()
    return () => (
      <section id={resumeStore.sections.summary.id}>
        <h4 class="mb-2 border-b pb-0.5 text-sm font-bold">{resumeStore.sections.summary.name}</h4>

        <div
          v-html={resumeStore.sections.summary.content}
          class="wysiwyg"
          style={{ columns: resumeStore.sections.summary.columns }}
        />
      </section>
    )
  },
})

export default defineComponent({
  render() {
    return (
      <div>
        <Header />
        <Summary />
        Body
      </div>
    )
  },
})

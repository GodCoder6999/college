import {
  BulletList,
  CardGrid,
  PageSection,
  PageShell,
  PendingInfo,
  Prose,
} from "@/components/page/PageShell";
import { PAGE_BY_SLUG } from "@/lib/site-pages";

/**
 * Renders an inner page from the manifest. Every generated route file is a
 * one-line wrapper around this, so the whole site structure stays defined in
 * `src/lib/site-pages.ts`.
 */
export function RenderPage({ slug }: { slug: string }) {
  const page = PAGE_BY_SLUG.get(slug);

  if (!page) {
    return (
      <PageShell title="Page Not Found">
        <PageSection tone="white">
          <PendingInfo needs={["This page has not been configured yet."]} />
        </PageSection>
      </PageShell>
    );
  }

  return (
    <PageShell title={page.title} parent={page.parent}>
      {page.blocks.map((block, i) => {
        const tone = i % 2 === 0 ? "white" : "grey";
        switch (block.kind) {
          case "prose":
            return (
              <PageSection
                key={i}
                tone={tone}
                label={block.label}
                heading={block.heading}
              >
                <Prose paragraphs={block.paragraphs} />
              </PageSection>
            );
          case "bullets":
            return (
              <PageSection
                key={i}
                tone={tone}
                label={block.label}
                heading={block.heading}
              >
                <BulletList items={block.items} />
              </PageSection>
            );
          case "cards":
            return (
              <PageSection
                key={i}
                tone={tone}
                label={block.label}
                heading={block.heading}
                center
              >
                <CardGrid items={block.items} columns={block.columns} />
              </PageSection>
            );
          case "pending":
            return (
              <PageSection
                key={i}
                tone={tone}
                label={block.label}
                heading={block.heading}
              >
                <PendingInfo needs={block.needs} />
              </PageSection>
            );
        }
      })}
    </PageShell>
  );
}

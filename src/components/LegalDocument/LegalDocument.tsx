import { SKYPHR_CARD_RADIUS } from "@/constants/skyphrBrand.constant";
import { LegalDocumentProps } from "./LegalDocument.interface";

export function LegalDocument({ title, lastUpdated, intro, sections }: LegalDocumentProps) {
  return (
    <article
      className={`w-full max-w-3xl border border-(--skyphr-border-color) bg-(--root-white-color) p-6 mx-auto shadow-sm sm:p-10 ${SKYPHR_CARD_RADIUS}`}
    >
      <header className="flex flex-col gap-2 border-b border-(--skyphr-border-color) pb-6">
        <h1 className="text-3xl font-bold tracking-tight xl:text-4xl">{title}</h1>
        <p className="text-sm text-(--text-secondary-color)">Last updated: {lastUpdated}</p>
      </header>

      <div className="flex flex-col gap-4 pt-6">
        {intro.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-(--text-secondary-color) sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-(--text-secondary-color) sm:text-base">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

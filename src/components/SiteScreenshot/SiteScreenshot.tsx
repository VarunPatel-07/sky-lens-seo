import { SiteScreenshotProps } from "./SiteScreenshot.interface";

export function SiteScreenshot({
  screenshotBase64,
  siteUrl,
  annotations = [],
}: SiteScreenshotProps) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-report-border bg-white shadow-lg">
      <div className="flex items-center gap-2 border-b border-black/10 bg-gray-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 flex-1 truncate rounded-full border border-gray-200 bg-white px-3 py-0.5 text-center text-[11px] text-gray-500">
          {siteUrl}
        </span>
      </div>

      <div className="relative">
        {/* next/image can't size a dynamic base64 screenshot without known dimensions, so a plain img is used */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshotBase64}
          alt={`Homepage screenshot of ${siteUrl}`}
          className="block w-full"
        />
        {annotations.map((annotation) => (
          <div
            key={annotation.id}
            className="absolute flex items-center gap-2"
            style={{ left: `${annotation.xPercent}%`, top: `${annotation.yPercent}%` }}
          >
            <span className="h-2 w-8 border-t border-dashed border-amber" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber ring-2 ring-white" />
            <span className="whitespace-nowrap rounded-sm bg-white px-1.5 py-0.5 text-xs text-gray-700 shadow-sm">
              {annotation.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

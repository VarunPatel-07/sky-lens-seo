export interface ScreenshotAnnotation {
  id: string;
  xPercent: number;
  yPercent: number;
  label: string;
}

export interface SiteScreenshotProps {
  screenshotBase64: string;
  siteUrl: string;
  annotations?: ScreenshotAnnotation[];
}

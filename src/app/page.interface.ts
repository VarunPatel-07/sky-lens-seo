export type HomepageCheckIconName = "performance" | "seo" | "accessibility" | "content";
export type HomepageCheckAccent = "primary" | "teal" | "amber";

export interface HomepageCheck {
  title: string;
  description: string;
  icon: HomepageCheckIconName;
  accent: HomepageCheckAccent;
}

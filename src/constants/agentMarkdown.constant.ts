export const MARKDOWN_CONTENT_DIR_SEGMENTS = ["src", "content", "markdown"] as const;

export const HOME_MARKDOWN_SLUG = "home";

// Human page paths that also serve markdown to agents when `Accept: text/markdown` is sent.
export const AGENT_MARKDOWN_PAGE_PATHS = ["/", "/about", "/contact", "/privacy", "/terms"] as const;

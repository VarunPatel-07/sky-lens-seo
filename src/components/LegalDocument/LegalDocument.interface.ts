export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocumentProps {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}

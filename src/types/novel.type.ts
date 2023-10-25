export interface Word {
  id: string;
  word: string;
  definition: string;
  pronunciation: string;
}

export interface Paragraph {
  id: string;
  words: Word[];
}

export interface Novel {
  id: string;
  title: string;
  author: string;
  description: string;
  rating: number;
  tags: string[];
  paragraphs: Paragraph[];
}

export interface NovelFilterOption {
  id: string;
  title: string;
}

export interface NovelFilter {
  title: string;
  options: NovelFilterOption[];
}
